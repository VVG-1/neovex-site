import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Link, useLocation } from "react-router-dom";
import { Menu, PhoneCall, X } from "lucide-react";
import logo from "./assets/logo-neovex4.png";

const PHONE = "(312) 588-6278";
const PHONE_TEL = "+13128982809";
const MEETINGS_URL = "https://meetings.hubspot.com/neovex";

const navItems = [
  { href: "/#solutions", label: "Solutions" },
  { href: "/#audit", label: "Workflow Audit" },
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/#results", label: "Results" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#faq", label: "FAQ" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname, hash } = useLocation();

  const closeMobile = () => setMobileOpen(false);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") closeMobile();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    closeMobile();
  }, [pathname, hash]);

  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  const mobileOverlay =
    typeof document !== "undefined" && mobileOpen
      ? createPortal(
          <div className="fixed inset-0 z-[99999] lg:hidden">
            <button
              className="absolute inset-0 bg-black/40"
              aria-label="Close menu overlay"
              onClick={closeMobile}
            />

            <div className="absolute top-0 right-0 h-full w-[92vw] max-w-md bg-white shadow-xl border-l border-slate-100 flex flex-col">
              <div className="h-14 px-4 flex items-center justify-between border-b border-slate-100 shrink-0">
                <Link to="/" aria-label="Neovex - Home" className="flex items-center gap-2" onClick={closeMobile}>
                  <BrandMark />
                  <span className="text-lg font-bold text-cyan-700">Neovex</span>
                </Link>

                <button
                  type="button"
                  aria-label="Close menu"
                  className="inline-flex items-center justify-center h-10 w-10 rounded-lg border border-slate-200 bg-white"
                  onClick={closeMobile}
                >
                  <X className="w-5 h-5 text-slate-900" />
                </button>
              </div>

              <div className="px-4 pt-2 pb-24 flex-1 overflow-y-auto">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="block px-4 py-3 text-[16px] font-medium text-slate-900 hover:bg-slate-50"
                    onClick={closeMobile}
                  >
                    {item.label}
                  </a>
                ))}
              </div>

              <div className="shrink-0 border-t border-slate-100 bg-white/95 backdrop-blur px-4 pt-3 pb-[calc(env(safe-area-inset-bottom,0px)+12px)]">
                <div className="space-y-3">
                  <a
                    href={MEETINGS_URL}
                    className="w-full inline-flex items-center justify-center bg-slate-950 hover:bg-slate-800 text-white rounded-lg px-4 h-12 text-sm font-semibold"
                    onClick={closeMobile}
                  >
                    Discuss a Workflow
                  </a>

                  <a
                    href={`tel:${PHONE_TEL}`}
                    className="w-full inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-4 h-12 text-sm font-semibold text-slate-900 hover:bg-slate-50"
                    onClick={closeMobile}
                  >
                    <span className="inline-flex items-center gap-2">
                      <PhoneCall className="w-4 h-4" />
                      Call {PHONE}
                    </span>
                  </a>

                  <p className="text-[11px] text-slate-500 text-center">
                    For teams: fastest next step is discussing one workflow.
                  </p>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )
      : null;

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/85 backdrop-blur border-b border-slate-100">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-slate-950 text-white px-3 py-2 rounded-md"
      >
        Skip to content
      </a>

      <div className="lg:hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <Link to="/" aria-label="Neovex - Home" className="flex items-center gap-2 min-w-0">
            <BrandMark />
            <span className="text-lg font-bold text-cyan-700">Neovex</span>
          </Link>

          <div className="flex items-center gap-2">
            <a
              href={MEETINGS_URL}
              className="hidden sm:inline-flex items-center justify-center bg-slate-950 hover:bg-slate-800 text-white rounded-lg px-3 h-10 text-sm font-semibold"
            >
              Discuss
            </a>

            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              className="fixed right-4 top-2 z-[100000] inline-flex items-center justify-center w-10 h-10 rounded-lg border border-slate-200 bg-white text-slate-900 active:scale-[0.98]"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 hidden lg:flex items-center justify-between">
        <Link to="/" aria-label="Neovex - Home" className="flex items-center gap-2">
          <BrandMark size="desktop" />
          <span className="text-xl font-bold text-cyan-700">Neovex</span>
        </Link>

        <nav className="flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-1 py-1 text-sm font-medium text-slate-700 hover:text-blue-600 transition"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${PHONE_TEL}`}
            className="inline-flex items-center gap-2 justify-center h-11 px-4 rounded-lg border border-slate-200 bg-white text-sm font-semibold text-slate-800 hover:bg-slate-50 transition whitespace-nowrap"
            aria-label={`Call Neovex at ${PHONE}`}
          >
            <PhoneCall className="w-4 h-4 text-slate-600" />
            <span>{PHONE}</span>
          </a>

          <a
            href={MEETINGS_URL}
            className="inline-flex items-center justify-center bg-slate-950 hover:bg-slate-800 text-white rounded-lg px-5 h-11 text-sm font-semibold"
          >
            Discuss a Workflow
          </a>
        </div>
      </div>

      {mobileOverlay}
    </header>
  );
}

function BrandMark({ size = "mobile" }) {
  const box = size === "desktop" ? "h-9 w-9" : "h-8 w-8";
  const image = size === "desktop" ? "h-9 max-w-none" : "h-8 max-w-none";

  return (
    <span className={`${box} inline-flex overflow-hidden shrink-0`} aria-hidden="true">
      <img src={logo} alt="" className={`${image} w-auto object-left object-contain`} />
    </span>
  );
}
