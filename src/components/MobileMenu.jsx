import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, PhoneCall, Menu, X } from "lucide-react";

const PHONE = "(312) 588-6278";
const PHONE_TEL = "+13128982809";
const MEETINGS_URL = "https://meetings.hubspot.com/neovex";

export default function MobileHeader({ logoSrc }) {
  const [open, setOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const { pathname, hash } = useLocation();

  // close on route changes
  useEffect(() => {
    setOpen(false);
    setSolutionsOpen(false);
  }, [pathname, hash]);

  // lock scroll when open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // ESC closes
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") {
        setOpen(false);
        setSolutionsOpen(false);
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="md:hidden">
      {/* Mobile top bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        {/* Brand */}
        <Link to="/" aria-label="Neovex AI — Home" className="flex items-center">
          <img src={logoSrc} alt="Neovex AI" className="h-8 w-auto object-contain" />
        </Link>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <a
            href={`tel:${PHONE_TEL}`}
            aria-label={`Call Neovex at ${PHONE}`}
            className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-blue-600 text-white shadow-sm active:scale-[0.98]"
          >
            <PhoneCall className="w-5 h-5" />
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="inline-flex items-center justify-center w-10 h-10 rounded-xl border border-slate-200 bg-white text-slate-900 shadow-sm active:scale-[0.98]"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* FULL-SCREEN mobile menu (fixes bleed-through / weird overlay) */}
      {open && (
        <div className="fixed inset-0 z-[9999] md:hidden">
          {/* overlay */}
          <button
            aria-label="Close menu overlay"
            className="absolute inset-0 bg-black/20"
            onClick={() => setOpen(false)}
          />

          {/* panel */}
          <div className="absolute inset-0 bg-white overflow-y-auto">
            {/* panel header */}
            <div className="h-14 px-4 sm:px-6 flex items-center justify-between border-b border-slate-100">
              <Link
                to="/"
                aria-label="Neovex AI — Home"
                className="flex items-center"
                onClick={() => setOpen(false)}
              >
                <img src={logoSrc} alt="Neovex AI" className="h-8 w-auto object-contain" />
              </Link>

              <div className="flex items-center gap-2">
                <a
                  href={`tel:${PHONE_TEL}`}
                  aria-label={`Call Neovex at ${PHONE}`}
                  className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-blue-600 text-white shadow-sm active:scale-[0.98]"
                  onClick={() => setOpen(false)}
                >
                  <PhoneCall className="w-5 h-5" />
                </a>

                <button
                  type="button"
                  aria-label="Close menu"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-xl border border-slate-200 bg-white text-slate-900 shadow-sm active:scale-[0.98]"
                  onClick={() => setOpen(false)}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* panel content */}
            <div className="px-6 py-6">
              {/* centered column prevents “stretched” look */}
              <div className="mx-auto w-full max-w-sm space-y-3">
                {/* Solutions accordion */}
                <button
                  type="button"
                  className="w-full flex items-center justify-between text-left text-sm font-semibold text-slate-900 py-3 border-b border-slate-100"
                  aria-expanded={solutionsOpen}
                  onClick={() => setSolutionsOpen((v) => !v)}
                >
                  <span>Solutions</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${solutionsOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {solutionsOpen && (
                  <div className="pl-2 pb-2 space-y-1">
                    <MobileLink
                      to="/missed-call-capture"
                      label="Neovex Missed Call Capture"
                      onClick={() => setOpen(false)}
                    />
                    <MobileLink
                      to="/web-capture"
                      label="Neovex Web Capture"
                      onClick={() => setOpen(false)}
                    />
                  </div>
                )}

                <a
                  href="/#how-it-works"
                  className="block text-sm font-medium text-slate-900 py-3 border-b border-slate-100"
                  onClick={() => setOpen(false)}
                >
                  How it works
                </a>
                <a
                  href="/#outcomes"
                  className="block text-sm font-medium text-slate-900 py-3 border-b border-slate-100"
                  onClick={() => setOpen(false)}
                >
                  Outcomes
                </a>
                <a
                  href="/#founder-plan"
                  className="block text-sm font-semibold text-slate-900 py-3 border-b border-slate-100"
                  onClick={() => setOpen(false)}
                >
                  Pricing
                </a>
                <a
                  href="/#faq"
                  className="block text-sm font-medium text-slate-900 py-3 border-b border-slate-100"
                  onClick={() => setOpen(false)}
                >
                  FAQ
                </a>

                {/* Buttons */}
                <div className="pt-4 space-y-3">
                  <a
                    href={MEETINGS_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center w-full bg-blue-600 text-white px-4 py-3 rounded-xl text-sm font-semibold hover:bg-blue-700"
                    onClick={() => setOpen(false)}
                  >
                    Book an Intro Call
                  </a>

                  <a
                    href={`tel:${PHONE_TEL}`}
                    className="inline-flex items-center justify-center w-full py-3 rounded-xl border border-slate-200 bg-white text-sm font-semibold text-slate-900 hover:bg-slate-50"
                    onClick={() => setOpen(false)}
                  >
                    Call {PHONE}
                  </a>

                  <p className="text-xs text-slate-500 pt-1">
                    Fastest response: call or book a 10-minute intro.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function MobileLink({ to, label, onClick }) {
  return (
    <Link to={to} className="block text-sm text-slate-700 py-3" onClick={onClick}>
      {label}
    </Link>
  );
}
