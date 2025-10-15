import type { VercelRequest, VercelResponse } from "@vercel/node";
import { IncomingForm } from "formidable";
import type { Fields, Files, File } from "formidable";
import fs from "fs/promises";
import path from "path";
import { sendMail } from "./_mailer";

const MAX_CONTACT_FILE_BYTES = 15 * 1024 * 1024;

function parseMultipart(req: VercelRequest) {
  const form = new IncomingForm({
    multiples: true,
    keepExtensions: true,
    maxFileSize: MAX_CONTACT_FILE_BYTES,
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

function collectFiles(files: Files, key: string): File[] {
  const value = files[key];
  if (!value) {
    return [];
  }
  if (Array.isArray(value)) {
    return value;
  }
  return [value];
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

function buildMessageHtml(data: {
  name: string;
  email: string;
  phone?: string;
  serviceType?: string;
  message: string;
}) {
  const rows = [
    { label: "Name", value: data.name },
    { label: "Email", value: data.email },
    { label: "Phone", value: data.phone ?? "Not provided" },
    { label: "Service Type", value: data.serviceType ?? "Not provided" },
    { label: "Message", value: data.message },
  ];

  const tableRows = rows
    .map(
      row => `<tr>
  <td style="padding:8px 12px;font-weight:bold;border:1px solid #e5e7eb;background:#f9fafb;">${row.label}</td>
  <td style="padding:8px 12px;border:1px solid #e5e7eb;">${row.value.replace(/\n/g, "<br/>")}</td>
</tr>`,
    )
    .join("");

  return `<div style="font-family:Arial,sans-serif;font-size:14px;color:#111827;">
  <h2 style="margin-bottom:16px;">New Contact Request</h2>
  <table style="border-collapse:collapse;border:1px solid #e5e7eb;width:100%;max-width:640px;">${tableRows}</table>
</div>`;
}

function buildMessageText(data: {
  name: string;
  email: string;
  phone?: string;
  serviceType?: string;
  message: string;
}) {
  return [
    "New contact request",
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone ?? "Not provided"}`,
    `Service Type: ${data.serviceType ?? "Not provided"}`,
    "",
    "Message:",
    data.message,
  ].join("\n");
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const method = typeof req.method === "string" ? req.method.toUpperCase() : "";

  if (method !== "POST") {
    res.setHeader("Allow", "POST");
    res.status(405).json({ ok: false, error: "Method not allowed" });
    return;
  }

  let parsed: { fields: Fields; files: Files } | undefined;

  try {
    parsed = await parseMultipart(req);
  } catch (error) {
    console.error("Failed to parse contact form submission", error);
    res.status(400).json({ ok: false, error: "Invalid form data" });
    return;
  }

  const { fields, files } = parsed;

  try {
    const name = ensureField(fields, "name");
    const email = ensureField(fields, "email");
    const message = ensureField(fields, "message");
    const phone = firstValue(fields.phone)?.trim();
    const serviceType = firstValue(fields.serviceType)?.trim();

    const attachmentFiles = collectFiles(files, "attachment");

    const attachments = attachmentFiles.map(file => ({
      filename: file.originalFilename || path.basename(file.filepath),
      path: file.filepath,
      contentType: file.mimetype || undefined,
    }));

    const to = process.env.CONTACT_TO;
    if (!to) {
      throw new Error("Missing CONTACT_TO environment variable");
    }

    await sendMail({
      from: process.env.PORKBUN_SMTP_USER,
      to,
      replyTo: email,
      subject: "New Kids Choice INC. Contact Request",
      text: buildMessageText({ name, email, phone, serviceType, message }),
      html: buildMessageHtml({ name, email, phone, serviceType, message }),
      attachments,
    });

    await deleteFiles(attachmentFiles);

    res.status(200).json({ ok: true });
  } catch (error) {
    console.error("Failed to handle contact form submission", error);

    const status =
      error instanceof Error && error.message.startsWith("Missing required field") ? 400 : 500;
    const message =
      status === 400 ? error instanceof Error ? error.message : "Missing required fields" : "Failed to send message";

    await deleteFiles(collectFiles(files, "attachment"));

    res.status(status).json({ ok: false, error: message });
  }
}
