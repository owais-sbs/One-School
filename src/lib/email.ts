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
  const passRaw = process.env.SMTP_PASS ?? process.env.SMTP_PASSWORD;
  const pass = passRaw?.replace(/\s+/g, "");

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

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/** Same brand mark as the website: “One School” + blue square (no image). */
function brandMarkHtml() {
  return `<span style="display:inline-block;font-size:20px;font-weight:600;letter-spacing:-0.02em;color:#ffffff;line-height:1;font-family:'Segoe UI',Arial,Helvetica,sans-serif;">One School<span style="display:inline-block;width:6px;height:6px;margin-left:5px;margin-bottom:2px;background:#60a5fa;border-radius:1.5px;vertical-align:middle;"></span></span>`;
}

function emailShell(opts: {
  preheader: string;
  title: string;
  bodyHtml: string;
  footerNote?: string;
}) {
  const footerNoteHtml = opts.footerNote
    ? `<p style="margin:0 0 10px;color:#94a3b8;">${escapeHtml(opts.footerNote)}</p>`
    : "";

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <title>${escapeHtml(opts.title)}</title>
</head>
<body style="margin:0;padding:0;background:#f1f5f9;font-family:'Segoe UI',Arial,Helvetica,sans-serif;color:#0f172a;-webkit-text-size-adjust:100%;">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;mso-hide:all;">${escapeHtml(opts.preheader)}</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f1f5f9;padding:32px 12px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #e2e8f0;">
          <tr>
            <td style="padding:20px 32px;background:#0f172a;">
              ${brandMarkHtml()}
            </td>
          </tr>
          <tr>
            <td style="padding:28px 32px 6px;">
              <h1 style="margin:0;font-size:22px;line-height:1.3;font-weight:700;color:#0f172a;">${escapeHtml(opts.title)}</h1>
            </td>
          </tr>
          <tr>
            <td style="padding:12px 32px 32px;">
              ${opts.bodyHtml}
            </td>
          </tr>
          <tr>
            <td style="padding:22px 32px;background:#0f172a;">
              <p style="margin:0 0 12px;">${brandMarkHtml()}</p>
              ${footerNoteHtml}
              <p style="margin:0;font-size:12px;line-height:1.7;color:#94a3b8;">
                <a href="https://onepathsolutions.com/" style="color:#93c5fd;text-decoration:none;">onepathsolutions.com</a>
                &nbsp;&nbsp;·&nbsp;&nbsp;
                <a href="mailto:info@onepathsolutions.com" style="color:#93c5fd;text-decoration:none;">info@onepathsolutions.com</a>
                &nbsp;&nbsp;·&nbsp;&nbsp;
                <a href="tel:+919652301382" style="color:#93c5fd;text-decoration:none;">+91 96523 01382</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function detailRow(label: string, value: string, isLast = false) {
  const border = isLast ? "none" : "1px solid #eef2f7";
  return `<tr>
    <td style="padding:11px 0;border-bottom:${border};width:36%;font-size:13px;color:#64748b;vertical-align:top;font-weight:500;">${escapeHtml(label)}</td>
    <td style="padding:11px 0;border-bottom:${border};font-size:13px;color:#0f172a;font-weight:600;vertical-align:top;word-break:break-word;">${escapeHtml(value || "—")}</td>
  </tr>`;
}

function detailRowEmail(label: string, email: string, isLast = false) {
  const border = isLast ? "none" : "1px solid #eef2f7";
  const safe = escapeHtml(email || "—");
  const valueHtml = email
    ? `<a href="mailto:${safe}" style="color:#2563eb;text-decoration:none;font-weight:600;">${safe}</a>`
    : "—";
  return `<tr>
    <td style="padding:11px 0;border-bottom:${border};width:36%;font-size:13px;color:#64748b;vertical-align:top;font-weight:500;">${escapeHtml(label)}</td>
    <td style="padding:11px 0;border-bottom:${border};font-size:13px;vertical-align:top;word-break:break-word;">${valueHtml}</td>
  </tr>`;
}

function buildAdminHtml(data: SchoolDemoPayload) {
  const body = `
    <p style="margin:0 0 20px;font-size:15px;line-height:1.65;color:#334155;">
      A new demo request was submitted from the One School website.
    </p>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
      ${detailRow("Name", data.name)}
      ${detailRow("School", data.schoolName)}
      ${detailRowEmail("Email", data.email)}
      ${detailRow("Phone / WhatsApp", data.phone)}
      ${detailRow("Country", data.country || "—")}
      ${detailRow("Students", data.studentCount || "—")}
      ${detailRow("Current system", data.currentSystem || "—")}
      ${detailRow("Message", data.message || "—")}
      ${detailRow("Submitted", new Date().toUTCString(), true)}
    </table>
    <p style="margin:22px 0 0;font-size:13px;line-height:1.6;color:#64748b;">
      Reply directly to this email to contact ${escapeHtml(data.name)}.
    </p>
  `;

  return emailShell({
    preheader: `New demo request from ${data.name} at ${data.schoolName}`,
    title: "New demo request",
    bodyHtml: body,
  });
}

function buildUserHtml(data: SchoolDemoPayload) {
  const body = `
    <p style="margin:0 0 14px;font-size:15px;line-height:1.65;color:#334155;">
      Hi ${escapeHtml(data.name)},
    </p>
    <p style="margin:0 0 20px;font-size:15px;line-height:1.65;color:#334155;">
      Thank you for contacting One School. Your request has been received and our team will get back to you shortly.
    </p>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;">
      <tr>
        <td style="padding:18px 20px;">
          <p style="margin:0 0 12px;font-size:11px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#2563eb;">Your submission</p>
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
            ${detailRow("School", data.schoolName)}
            ${detailRowEmail("Email", data.email)}
            ${detailRow("Phone", data.phone)}
            ${detailRow("Country", data.country || "—")}
            ${detailRow("Students", data.studentCount || "—")}
            ${detailRow("Current system", data.currentSystem || "—")}
            ${detailRow("Message", data.message || "—", true)}
          </table>
        </td>
      </tr>
    </table>
    <p style="margin:20px 0 0;font-size:15px;line-height:1.65;color:#334155;">
      If you need anything urgently, reach us at
      <a href="mailto:info@onepathsolutions.com" style="color:#2563eb;text-decoration:none;font-weight:600;">info@onepathsolutions.com</a>
      or +91 96523 01382.
    </p>
  `;

  return emailShell({
    preheader: "Your One School demo request has been received.",
    title: "Your request is noted",
    bodyHtml: body,
  });
}

export async function sendSchoolDemoEmail(data: SchoolDemoPayload): Promise<void> {
  const from =
    process.env.SMTP_FROM ?? "One School <info@onepathsolutions.com>";
  const notifyTo =
    process.env.SMTP_NOTIFY_TO ?? process.env.SMTP_USER ?? "info@onepathsolutions.com";

  const transporter = getTransporter();

  const adminText = [
    "New One School demo request",
    "",
    `Name: ${data.name}`,
    `School: ${data.schoolName}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone}`,
    `Country: ${data.country || "—"}`,
    `Students: ${data.studentCount || "—"}`,
    `Current system: ${data.currentSystem || "—"}`,
    `Message: ${data.message || "—"}`,
  ].join("\n");

  const userText = [
    `Hi ${data.name},`,
    "",
    "Thank you for contacting One School. Your request has been received and our team will get back to you shortly.",
    "",
    "Your submission:",
    `School: ${data.schoolName}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone}`,
    `Country: ${data.country || "—"}`,
    `Students: ${data.studentCount || "—"}`,
    `Current system: ${data.currentSystem || "—"}`,
    `Message: ${data.message || "—"}`,
    "",
    "One School by OnePath Solutions",
    "https://onepathsolutions.com/",
  ].join("\n");

  await transporter.sendMail({
    from,
    to: notifyTo,
    replyTo: data.email,
    subject: `New One School Demo Request — ${data.name} (${data.schoolName})`,
    text: adminText,
    html: buildAdminHtml(data),
  });

  await transporter.sendMail({
    from,
    to: data.email,
    subject: "Your One School request is noted",
    text: userText,
    html: buildUserHtml(data),
  });
}
