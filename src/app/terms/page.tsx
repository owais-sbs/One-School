import type { Metadata } from "next";
import LegalDocumentView from "@/components/LegalDocumentView";
import { termsOfService } from "@/lib/legal-content";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for schools using the One School platform by One Path Business Solutions.",
};

export default function TermsPage() {
  return <LegalDocumentView doc={termsOfService} />;
}
