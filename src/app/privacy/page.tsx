import type { Metadata } from "next";
import LegalDocumentView from "@/components/LegalDocumentView";
import { privacyPolicy } from "@/lib/legal-content";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How One Path Business Solutions collects, uses, shares and protects personal data for One School.",
};

export default function PrivacyPage() {
  return <LegalDocumentView doc={privacyPolicy} />;
}
