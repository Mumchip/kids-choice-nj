import type { VercelRequest, VercelResponse } from "@vercel/node";
import { IncomingForm } from "formidable";
import type { Fields, Files, File } from "formidable";
import fs from "fs/promises";
import path from "path";
import { sendMail } from "./_mailer";

const MAX_DRIVER_FILE_BYTES = 15 * 1024 * 1024;

function parseMultipart(req: VercelRequest) {
  const form = new IncomingForm({
    multiples: true,
    keepExtensions: true,
    maxFileSize: MAX_DRIVER_FILE_BYTES,
  });

  return new Promise<{ fields: Fields; files: Files }>((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) {
        reject(err);
        return;
      }
      resolve({ fields, files });
    });
  });
}

function firstValue(input: undefined | string | string[]): string | undefined {
  if (typeof input === "string") {
    return input;
  }
  if (Array.isArray(input)) {
    return input[0];
  }
  return undefined;
}

function ensureField(fields: Fields, key: string): string {
  const raw = firstValue(fields[key]);
  if (!raw || !raw.trim()) {
    throw new Error(`Missing required field: ${key}`);
  }
  return raw.trim();
}

function collectAllFiles(files: Files) {
  const collected: File[] = [];
  for (const value of Object.values(files)) {
    if (!value) {
      continue;
    }
    if (Array.isArray(value)) {
      collected.push(...value);
    } else {
      collected.push(value);
    }
  }
  return collected;
}

async function deleteFiles(files: File[]) {
  await Promise.all(
    files.map(async file => {
      if (!file.filepath) {
        return;
      }
      try {
        await fs.unlink(file.filepath);
      } catch (error) {
        // ignore cleanup errors
      }
    }),
  );
}

function buildMessageHtml(fields: Record<string, string | undefined>) {
  const entries = Object.entries(fields).map(([label, value]) => ({
    label,
    value: (value ?? "Not provided").replace(/\n/g, "<br/>"),
  }));

  const tableRows = entries
    .map(
      row => `<tr>
  <td style="padding:8px 12px;font-weight:bold;border:1px solid #e5e7eb;background:#f9fafb;">${row.label}</td>
  <td style="padding:8px 12px;border:1px solid #e5e7eb;">${row.value}</td>
</tr>`,
    )
    .join("");

  return `<div style="font-family:Arial,sans-serif;font-size:14px;color:#111827;">
  <h2 style="margin-bottom:16px;">New Driver Application</h2>
  <table style="border-collapse:collapse;border:1px solid #e5e7eb;width:100%;max-width:720px;">${tableRows}</table>
</div>`;
}

function buildMessageText(fields: Record<string, string | undefined>) {
  const lines: string[] = ["New driver application"];
  for (const [label, value] of Object.entries(fields)) {
    lines.push(`${label}: ${value ?? "Not provided"}`);
  }
  return lines.join("\n");
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method?.toUpperCase() !== "POST") {
    res.setHeader("Allow", "POST");
    res.status(405).json({ ok: false, error: "Method not allowed" });
    return;
  }

  let parsed: { fields: Fields; files: Files } | undefined;

  try {
    parsed = await parseMultipart(req);
  } catch (error) {
    console.error("Failed to parse driver application", error);
    res.status(400).json({ ok: false, error: "Invalid form data" });
    return;
  }

  const { fields, files } = parsed;

  try {
    const name = ensureField(fields, "name");
    const phone = ensureField(fields, "phone");

    const applicantEmail = firstValue(fields.email)?.trim();
    const payload = {
      Name: name,
      Phone: phone,
      "Criminal History": firstValue(fields.criminalHistory) ?? "Not provided",
      "Commercial License": firstValue(fields.commercialLicense) ?? "Not provided",
      "Passenger Endorsement": firstValue(fields.passengerEndorsement) ?? "Not provided",
      "Drug Test Completed": firstValue(fields.drugTestCompleted) ?? "Not provided",
      "Prior Experience": firstValue(fields.priorExperience) ?? "Not provided",
      "Experience Company": firstValue(fields.experienceCompany) ?? "Not provided",
      "Experience Duration": firstValue(fields.experienceDuration) ?? "Not provided",
      "Extra Notes": firstValue(fields.extraNotes) ?? "Not provided",
    };

    const attachmentsFiles = collectAllFiles(files);
    const attachments = attachmentsFiles.map(file => ({
      filename: file.originalFilename || path.basename(file.filepath),
      path: file.filepath,
      contentType: file.mimetype || undefined,
    }));

    const to = process.env.DRIVER_TO;
    if (!to) {
      throw new Error("Missing DRIVER_TO environment variable");
    }

    await sendMail({
      from: process.env.PORKBUN_SMTP_USER,
      to,
      replyTo: applicantEmail || undefined,
      subject: "Join Our Team - Driver Application",
      text: buildMessageText(payload),
      html: buildMessageHtml(payload),
      attachments,
    });

    await deleteFiles(attachmentsFiles);

    res.status(200).json({ ok: true });
  } catch (error) {
    console.error("Failed to handle driver application submission", error);

    const status =
      error instanceof Error && error.message.startsWith("Missing required field") ? 400 : 500;
    const message =
      status === 400 ? (error instanceof Error ? error.message : "Missing required fields") : "Failed to send application";

    await deleteFiles(collectAllFiles(files));

    res.status(status).json({ ok: false, error: message });
  }
}
