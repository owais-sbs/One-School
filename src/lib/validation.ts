const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[+]?[\d\s().-]{7,20}$/;

export function isValidEmail(value: string): boolean {
  return EMAIL_REGEX.test(value.trim());
}

export function isValidPhone(value: string): boolean {
  const digits = value.replace(/\D/g, "");
  return PHONE_REGEX.test(value.trim()) && digits.length >= 7 && digits.length <= 15;
}

export function sanitizeText(value: string, maxLength = 500): string {
  return value.trim().slice(0, maxLength);
}
