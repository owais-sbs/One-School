"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";
import { NAV_LINKS } from "@/lib/nav";

type SiteHeaderProps = {
  /** When true, section links point to `/#section` for non-home pages */
  absoluteHomeLinks?: boolean;
};

export default function SiteHeader({ absoluteHomeLinks = false }: SiteHeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 12);
    fn();
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const hrefFor = (hash: string) =>
    absoluteHomeLinks ? `/${hash}` : hash;

  const goDemo = () => {
    if (absoluteHomeLinks) {
      window.location.href = "/#demo";
      return;
    }
    document.getElementById("demo")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl border-b border-slate-200/80 py-3 shadow-sm"
          : "bg-white/80 backdrop-blur-md border-b border-transparent py-4"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="shrink-0">
          <BrandLogo href="" />
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((item) => (
            <a
              key={item.label}
              href={hrefFor(item.href)}
              className={`text-sm font-semibold transition-colors ${
                item.label === "Home" && !absoluteHomeLinks
                  ? "border-b-2 border-blue-600 pb-0.5 text-blue-600"
                  : "text-slate-500 hover:text-slate-900"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={goDemo}
            className="hidden items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-blue-600/20 transition-colors hover:bg-blue-700 sm:inline-flex"
          >
            Book a Demo <ArrowRight size={16} />
          </button>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-xl border border-slate-200 bg-white p-2.5 text-slate-700 lg:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-b border-slate-100 bg-white lg:hidden"
          >
            <div className="space-y-4 px-4 py-6">
              {NAV_LINKS.map((item) => (
                <a
                  key={item.label}
                  href={hrefFor(item.href)}
                  onClick={() => setIsOpen(false)}
                  className="block text-base font-semibold text-slate-800"
                >
                  {item.label}
                </a>
              ))}
              <button
                type="button"
                onClick={() => {
                  setIsOpen(false);
                  goDemo();
                }}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white"
              >
                Book a Demo <ArrowRight size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
