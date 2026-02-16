import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, PhoneCall, Globe, Menu, X } from "lucide-react";
import logo from "./assets/logo-neovex4.png";

const PHONE = "(312) 588-6278";
const PHONE_TEL = "+13128982809";
const MEETINGS_URL = "https://meetings.hubspot.com/neovex";

export default function Header() {
  const [prodOpen, setProdOpen] = useState(false); // desktop dropdown
  const [mobileOpen, setMobileOpen] = useState(false); // mobile sheet
  const [solutionsOpen, setSolutionsOpen] = useState(false); // mobile accordion

  const popRef = useRef(null);
  const { pathname, hash } = useLocation();

  const closeMobile = () => {
    setMobileOpen(false);
    setSolutionsOpen(false);
  };

  // Close desktop dropdown on outside click + close everything on ESC
  useEffect(() => {
    function onClick(e) {
      if (popRef.current && !popRef.current.contains(e.target)) {
        setProdOpen(false);
      }
    }
    function onKey(e) {
      if (e.key === "Escape") {
        setProdOpen(false);
        closeMobile();
      }
    }
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Close menus on route/hash change
  useEffect(() => {
    setProdOpen(false);
    closeMobile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, hash]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  const navLink =
    "px-1 py-1 text-sm font-medium text-slate-700 hover:text-blue-600 transition";

  // Mobile overlay via portal
  const mobileOverlay =
    typeof document !== "undefined" && mobileOpen
      ? createPortal(
          <div className="fixed inset-0 z-[99999] md:hidden">
            {/* overlay */}
            <button
              className="absolute inset-0 bg-black/40"
              aria-label="Close menu overlay"
              onClick={closeMobile}
            />

            {/* sheet */}
            <div className="absolute top-0 right-0 h-full w-[92vw] max-w-md bg-white shadow-xl border-l border-slate-100 flex flex-col">
              {/* header */}
              <div className="h-14 px-4 flex items-center justify-between border-b border-slate-100 shrink-0">
                <Link
                  to="/"
                  aria-label="Neovex AI — Home"
                  className="flex items-center"
                  onClick={closeMobile}
                >
                  <img
                    src={logo}
                    alt="Neovex AI"
                    className="h-8 w-auto object-contain"
                  />
                </Link>

                <button
                  type="button"
                  aria-label="Close menu"
                  className="inline-flex items-center justify-center h-10 w-10 rounded-xl border border-slate-200 bg-white"
                  onClick={closeMobile}
                >
                  <X className="w-5 h-5 text-slate-900" />
                </button>
              </div>

{/* scroll area */}
<div className="px-4 pt-2 pb-24 flex-1 overflow-y-auto">

{/* Solutions accordion */}
<button
  type="button"
  className="w-full flex items-center justify-between px-4 py-3 text-[16px] font-medium text-slate-900 hover:bg-slate-50"
  aria-expanded={solutionsOpen}
  onClick={() => setSolutionsOpen((v) => !v)}
>
  <span>Solutions</span>
  <ChevronDown
    className={`w-4 h-4 transition-transform ${solutionsOpen ? "rotate-180" : ""}`}
  />
</button>

{solutionsOpen && (
  <div className="ml-4 border-l border-slate-200">
    <Link
      to="/missed-call-capture"
      className="block px-6 py-3 text-[16px] font-medium text-slate-900 hover:bg-slate-50"
      onClick={closeMobile}
    >
      Missed Call Capture
    </Link>

    <Link
      to="/web-capture"
      className="block px-6 py-3 text-[16px] font-medium text-slate-900 hover:bg-slate-50"
      onClick={closeMobile}
    >
      Web Capture
    </Link>
  </div>
)}

  <a
    href="/#how-it-works"
    className="block px-4 py-3 text-[16px] font-medium text-slate-900 hover:bg-slate-50"
    onClick={closeMobile}
  >
    How it works
  </a>

  <a
    href="/#outcomes"
    className="block px-4 py-3 text-[16px] font-medium text-slate-900 hover:bg-slate-50"
    onClick={closeMobile}
  >
    Outcomes
  </a>

  <a
    href="/#founder-plan"
    className="block px-4 py-3 text-[16px] font-medium text-slate-900 hover:bg-slate-50"
    onClick={closeMobile}
  >
    Pricing
  </a>

  <a
    href="/#faq"
    className="block px-4 py-3 text-[16px] font-medium text-slate-900 hover:bg-slate-50"
    onClick={closeMobile}
  >
    FAQ
  </a>

              </div>

              {/* sticky footer CTAs */}
              <div className="shrink-0 border-t border-slate-100 bg-white/95 backdrop-blur px-4 pt-3 pb-[calc(env(safe-area-inset-bottom,0px)+12px)]">
                <div className="space-y-3">
                  <a
                    href={MEETINGS_URL}
                    className="w-full inline-flex items-center justify-center bg-slate-900 hover:bg-black text-white rounded-2xl px-4 h-12 text-sm font-semibold shadow-sm"
                    onClick={closeMobile}
                  >
                    Book an Intro Call
                  </a>

                  <a
                    href={`tel:${PHONE_TEL}`}
                    className="w-full inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-4 h-12 text-sm font-semibold text-slate-900 hover:bg-slate-50"
                    onClick={closeMobile}
                  >
                    <span className="inline-flex items-center gap-2">
                      <PhoneCall className="w-4 h-4" />
                      Call {PHONE}
                    </span>
                  </a>

                  <p className="text-[11px] text-slate-500 text-center">
                    For teams: fastest next step is booking a 10-minute intro.
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
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-blue-600 text-white px-3 py-2 rounded-md"
      >
        Skip to content
      </a>

      {/* MOBILE TOP BAR: Logo + Book + Menu */}
      <div className="md:hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <Link to="/" aria-label="Neovex AI — Home" className="flex items-center">
            <img src={logo} alt="Neovex AI" className="h-8 w-auto object-contain" />
          </Link>

          <div className="flex items-center gap-2">
            <a
              href={MEETINGS_URL}
              className="inline-flex items-center justify-center bg-slate-900 hover:bg-black text-white rounded-xl px-3 h-10 text-sm font-semibold"
            >
              Book Call
            </a>

            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              className="inline-flex items-center justify-center w-10 h-10 rounded-xl border border-slate-200 bg-white text-slate-900 shadow-sm active:scale-[0.98]"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* DESKTOP TOP BAR */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 hidden md:flex items-center justify-between">
        <Link to="/" aria-label="Neovex AI — Home" className="flex items-center gap-2">
          <img src={logo} alt="Neovex AI" className="h-9 w-auto object-contain" />
        </Link>

        <nav className="flex items-center gap-6" ref={popRef}>
          <div className="relative">
            <button
              type="button"
              className={`${navLink} inline-flex items-center gap-1 ${
                prodOpen ? "text-blue-600" : ""
              }`}
              aria-haspopup="menu"
              aria-expanded={prodOpen}
              onClick={() => setProdOpen((v) => !v)}
            >
              Solutions <ChevronDown className="w-4 h-4" />
            </button>

            {prodOpen && (
              <div
                role="menu"
                className="absolute left-0 mt-3 w-80 rounded-xl border border-slate-200 bg-white shadow-xl p-2"
              >
                <MenuItem
                  to="/missed-call-capture"
                  title="Neovex Missed Call Capture"
                  desc="Never lose a call—capture and respond automatically."
                  Icon={PhoneCall}
                  onClick={() => setProdOpen(false)}
                />
                <MenuItem
                  to="/web-capture"
                  title="Neovex Web Capture"
                  desc="Instant response to website leads—no inbox lag."
                  Icon={Globe}
                  onClick={() => setProdOpen(false)}
                />
              </div>
            )}
          </div>

          <a href="/#how-it-works" className={navLink}>
            How it works
          </a>
          <a href="/#outcomes" className={navLink}>
            Outcomes
          </a>
          <a href="/#founder-plan" className={`${navLink} font-semibold`}>
            Pricing
          </a>
          <a href="/#faq" className={navLink}>
            FAQ
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${PHONE_TEL}`}
            className="inline-flex items-center gap-2 justify-center h-11 px-4 rounded-xl border border-slate-200 bg-white text-sm font-semibold text-slate-800 hover:bg-slate-50 transition whitespace-nowrap"
            aria-label={`Call Neovex at ${PHONE}`}
          >
            <PhoneCall className="w-4 h-4 text-blue-600" />
            <span>{PHONE}</span>
          </a>

          <a
            href={MEETINGS_URL}
            className="inline-flex items-center justify-center bg-slate-900 hover:bg-black text-white rounded-xl px-5 h-11 text-sm font-semibold"
          >
            Book an Intro Call
          </a>
        </div>
      </div>

      {mobileOverlay}
    </header>
  );
}

/* ---------- small components ---------- */

function MenuItem({ to, title, desc, Icon, onClick }) {
  return (
    <Link
      to={to}
      role="menuitem"
      className="group rounded-lg px-3 py-2 hover:bg-slate-50 flex items-start gap-3"
      onClick={onClick}
    >
      <div className="w-9 h-9 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <div className="text-sm font-semibold text-slate-900">{title}</div>
        <div className="text-xs text-slate-600">{desc}</div>
      </div>
    </Link>
  );
}
