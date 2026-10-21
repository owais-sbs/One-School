export const WHATSAPP_NUMBER = "919652301382";
export const WHATSAPP_DISPLAY = "+91 96523 01382";
export const WHATSAPP_PREFILL =
  "Hi! I'm interested in OnePath Solutions services. Can you help me?";

export function whatsappChatUrl(message?: string) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  if (!message?.trim()) return base;
  return `${base}?text=${encodeURIComponent(message.trim())}`;
}

export function buildDemoWhatsAppMessage(fields: {
  name: string;
  schoolName: string;
  email: string;
  phone: string;
  country?: string;
  studentCount?: string;
  currentSystem?: string;
  message?: string;
}) {
  const lines = [
    "Hello One School team — I'd like to book a demo.",
    "",
    `Name: ${fields.name.trim()}`,
    `School: ${fields.schoolName.trim()}`,
    `Email: ${fields.email.trim()}`,
    `Phone: ${fields.phone.trim()}`,
  ];

  if (fields.country?.trim()) lines.push(`Country: ${fields.country.trim()}`);
  if (fields.studentCount?.trim()) {
    lines.push(`Students: ${fields.studentCount.trim()}`);
  }
  if (fields.currentSystem?.trim()) {
    lines.push(`Current system: ${fields.currentSystem.trim()}`);
  }
  if (fields.message?.trim()) {
    lines.push("", `Message: ${fields.message.trim()}`);
  }

  return lines.join("\n");
}
