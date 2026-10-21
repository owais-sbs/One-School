import Link from "next/link";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";
import { NAV_LINKS } from "@/lib/nav";

type SiteFooterProps = {
  absoluteHomeLinks?: boolean;
};

export default function SiteFooter({ absoluteHomeLinks = false }: SiteFooterProps) {
  const hrefFor = (hash: string) => (absoluteHomeLinks ? `/${hash}` : hash);

  return (
    <footer className="relative overflow-hidden bg-[#0d0d0d] pb-8 pt-16 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 border-b border-white/10 pb-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-6 sm:col-span-2 lg:col-span-1">
            <div>
              <div className="mb-4">
                <BrandLogo href="/" light />
              </div>
              <p className="text-sm font-medium leading-relaxed text-white/40">
                Empowering schools through smart management, seamless communication, and
                transformative student experiences across the globe.
              </p>
            </div>
            <div className="flex items-center gap-3">
              {[
                {
                  href: "https://www.linkedin.com/company/onepathsolutions",
                  svg: (
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect x="2" y="9" width="4" height="12" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  ),
                },
                {
                  href: "https://www.facebook.com/OnePathSolutions/",
                  svg: (
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  ),
                },
                {
                  href: "https://www.instagram.com/onepathsolutions/",
                  svg: (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  ),
                },
              ].map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/50 transition-all duration-200 hover:border-white/40 hover:text-white"
                >
                  {s.svg}
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-5 text-xs font-bold uppercase tracking-widest text-white/30">
              Quick Links
            </div>
            <ul className="space-y-3">
              {NAV_LINKS.map((item) => (
                <li key={item.label}>
                  <a
                    href={hrefFor(item.href)}
                    className="group flex items-center gap-2 text-sm font-medium text-white/50 transition-colors hover:text-white"
                  >
                    <ArrowRight
                      size={13}
                      className="text-blue-400/60 transition-colors group-hover:text-blue-400"
                    />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="mb-5 text-xs font-bold uppercase tracking-widest text-white/30">
              Legal
            </div>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/privacy"
                  className="group flex items-center gap-2 text-sm font-medium text-white/50 transition-colors hover:text-white"
                >
                  <ArrowRight
                    size={13}
                    className="text-blue-400/60 transition-colors group-hover:text-blue-400"
                  />
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="group flex items-center gap-2 text-sm font-medium text-white/50 transition-colors hover:text-white"
                >
                  <ArrowRight
                    size={13}
                    className="text-blue-400/60 transition-colors group-hover:text-blue-400"
                  />
                  Terms &amp; Conditions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="mb-5 text-xs font-bold uppercase tracking-widest text-white/30">
              Contact
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={15} className="mt-0.5 shrink-0 text-blue-400/60" />
                <span className="text-sm font-medium leading-relaxed text-white/50">
                  8-1-21/146, Level 1, Mirza Arcade, Shaikpet Rd,
                  <br />
                  Toli Chowki, Hyderabad, Telangana 500008
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={15} className="shrink-0 text-blue-400/60" />
                <a
                  href="mailto:info@onepathsolutions.com"
                  className="text-sm font-medium text-white/50 transition-colors hover:text-white"
                >
                  info@onepathsolutions.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={15} className="shrink-0 text-blue-400/60" />
                <a
                  href="tel:+919652301382"
                  className="text-sm font-medium text-white/50 transition-colors hover:text-white"
                >
                  +91 96523 01382
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 pt-8 sm:flex-row">
          <p className="text-xs font-medium text-white/25">
            © {new Date().getFullYear()} One School. All rights reserved.
          </p>
          <a
            href="https://onepathsolutions.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium text-white/30 transition-colors hover:text-white"
          >
            Product owned by OnePath Solutions
          </a>
        </div>
      </div>
    </footer>
  );
}
