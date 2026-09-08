import { NextRequest, NextResponse } from "next/server";
import { sendSchoolDemoEmail } from "@/lib/email";
import { isRateLimited } from "@/lib/rate-limit";
import { isValidEmail, isValidPhone, sanitizeText } from "@/lib/validation";

export async function POST(request: NextRequest) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      request.headers.get("x-real-ip") ??
      "unknown";

    if (isRateLimited(`school-demo:${ip}`)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 },
      );
    }

    const body = await request.json();

    if (body.website) {
      return NextResponse.json({ success: true });
    }

    const name = sanitizeText(String(body.name ?? ""), 120);
    const schoolName = sanitizeText(String(body.schoolName ?? ""), 200);
    const email = sanitizeText(String(body.email ?? ""), 254);
    const phone = sanitizeText(String(body.phone ?? ""), 30);
    const country = sanitizeText(String(body.country ?? ""), 100);
    const studentCount = sanitizeText(String(body.studentCount ?? ""), 50);
    const currentSystem = sanitizeText(String(body.currentSystem ?? ""), 200);
    const message = sanitizeText(String(body.message ?? ""), 2000);

    if (!name || !schoolName || !email || !phone) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 },
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ error: "Please enter a valid work email." }, { status: 400 });
    }

    if (!isValidPhone(phone)) {
      return NextResponse.json(
        { error: "Please enter a valid phone or WhatsApp number." },
        { status: 400 },
      );
    }

    await sendSchoolDemoEmail({
      name,
      schoolName,
      email,
      phone,
      country,
      studentCount,
      currentSystem,
      message,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Unable to submit your request. Please try again later." },
      { status: 500 },
    );
  }
}
