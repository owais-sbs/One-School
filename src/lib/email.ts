import nodemailer from "nodemailer";

export interface SchoolDemoPayload {
  name: string;
  schoolName: string;
  email: string;
  phone: string;
  country?: string;
  studentCount?: string;
  currentSystem?: string;
  message?: string;
}

function getTransporter() {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS ?? process.env.SMTP_PASSWORD;

  if (!host || !user || !pass) {
    throw new Error("SMTP configuration is incomplete.");
  }

  return nodemailer.createTransport({
    host,
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: process.env.SMTP_SECURE === "true",
    auth: { user, pass },
  });
}

export async function sendSchoolDemoEmail(data: SchoolDemoPayload): Promise<void> {
  const from =
    process.env.SMTP_FROM ?? '"OnePath Solutions" <no-reply@onepathsolutions.com>';
  const to = process.env.SMTP_USER;

  if (!to) {
    throw new Error("SMTP_USER is not configured — cannot determine email recipient.");
  }

  const lines = [
    `Product: One-School`,
    `Lead Name: ${data.name}`,
    `School: ${data.schoolName}`,
    `Email: ${data.email}`,
    `Phone / WhatsApp: ${data.phone}`,
    `Country: ${data.country || "—"}`,
    `Number of Students: ${data.studentCount || "—"}`,
    `Current School Management System: ${data.currentSystem || "—"}`,
    `Requirements: ${data.message || "—"}`,
    `Submitted At: ${new Date().toISOString()}`,
  ];

  const transporter = getTransporter();

  await transporter.sendMail({
    from,
    to,
    replyTo: data.email,
    subject: `New One-School Demo Request — ${data.name}`,
    text: lines.join("\n"),
    html: lines.map((line) => `<p>${line}</p>`).join(""),
  });
}
