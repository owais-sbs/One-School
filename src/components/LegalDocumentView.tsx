import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import type { LegalDocument } from "@/lib/legal-content";

export default function LegalDocumentView({ doc }: { doc: LegalDocument }) {
  return (
    <div className="flex min-h-screen flex-col bg-[#f8fafc] text-slate-800">
      <SiteHeader absoluteHomeLinks />

      <main className="mx-auto w-full max-w-3xl flex-1 px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-blue-600">
          Legal
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          {doc.title}
        </h1>
        <p className="mt-3 text-sm text-slate-500">
          Effective date: {doc.effectiveDate}
        </p>
        <p className="mt-8 text-base leading-relaxed text-slate-600">{doc.intro}</p>

        <div className="mt-10 space-y-10">
          {doc.sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-lg font-semibold text-slate-900">{section.title}</h2>
              {section.paragraphs?.map((p) => (
                <p
                  key={p.slice(0, 48)}
                  className="mt-3 text-base leading-relaxed text-slate-600"
                >
                  {p}
                </p>
              ))}
              {section.bullets && section.bullets.length > 0 && (
                <ul className="mt-3 list-disc space-y-2 pl-5 text-base leading-relaxed text-slate-600">
                  {section.bullets.map((b) => (
                    <li key={b.slice(0, 64)}>{b}</li>
                  ))}
                </ul>
              )}
              {section.note && (
                <p className="mt-3 text-base leading-relaxed text-slate-600">
                  {section.note}
                </p>
              )}
            </section>
          ))}
        </div>
      </main>

      <SiteFooter absoluteHomeLinks />
    </div>
  );
}
