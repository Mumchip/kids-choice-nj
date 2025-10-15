import nodemailer from "nodemailer";
import type { SendMailOptions, Transporter } from "nodemailer";

let cachedTransporter: Transporter | null = null;

function readEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

export function createTransport(): Transporter {
  const host = readEnv("PORKBUN_SMTP_HOST");
  const portValue = readEnv("PORKBUN_SMTP_PORT");
  const user = readEnv("PORKBUN_SMTP_USER");
  const pass = readEnv("PORKBUN_SMTP_PASS");

  const port = Number(portValue);
  if (Number.isNaN(port)) {
    throw new Error(`Invalid PORKBUN_SMTP_PORT value: ${portValue}`);
  }

  const secure = port === 465;

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: {
      user,
      pass,
    },
    requireTLS: !secure,
    tls: {
      rejectUnauthorized: false,
    },
  });
}

export function getTransporter(): Transporter {
  if (!cachedTransporter) {
    cachedTransporter = createTransport();
  }
  return cachedTransporter;
}

export async function sendMail(options: SendMailOptions) {
  const transporter = getTransporter();
  return transporter.sendMail(options);
}
