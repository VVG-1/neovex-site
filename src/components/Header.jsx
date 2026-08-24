import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, PhoneCall, X } from "lucide-react";

const PHONE = "(312) 588-6278";
const PHONE_TEL = "+13128982809";
const DISCUSS_URL = "/discuss-a-workflow";

const solutionGroups = [
  {
    label: "Services",
    items: [
      {
        href: "/workflow-automation",
        label: "Workflow Automation",
      },
      {
        href: "/workflow-automation-audit",
        label: "Workflow Automation Audit",
      },
      {
        href: "/managed-automation",
        label: "Managed Automation",
      },
    ],
  },
  {
    label: "Workflows",
    items: [
      {
        href: "/workflows/lead-management-automation",
        label: "Lead Management Automation",
      },
      {
        href: "/workflows/quote-approval-automation",
        label: "Quote & Approval Automation",
      },
    ],
  },
];

const navItems = [
  { href: "/how-it-works", label: "How It Works" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/pricing", label: "Pricing" },
  { href: "/faq", label: "FAQ" },
  { href: "/about", label: "About" },
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
                <Link to="/" aria-label="Neovex - Home" className="flex items-center" onClick={closeMobile}>
                  <span className="text-lg font-bold text-[#172235]">Neovex</span>
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
                <div className="px-4 py-3">
                  <div className="text-[15px] font-semibold text-slate-900">Solutions</div>
                  <div className="mt-3 space-y-4 border-l border-slate-200 pl-4">
                    {solutionGroups.map((group) => (
                      <div key={group.label}>
                        <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">{group.label}</div>
                        <div className="mt-1">
                          {group.items.map((item) => (
                            <a
                              key={`${item.label}-${item.href}`}
                              href={item.href}
                              className="block py-2 text-sm font-medium text-slate-900 hover:text-[#25638f]"
                              onClick={closeMobile}
                            >
                              {item.label}
                            </a>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

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
                    href={DISCUSS_URL}
                    className="w-full inline-flex items-center justify-center bg-[#172235] hover:bg-[#1B2638] text-white rounded-lg px-4 h-12 text-sm font-semibold"
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
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-[#172235] text-white px-3 py-2 rounded-md"
      >
        Skip to content
      </a>

      <div className="lg:hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <Link to="/" aria-label="Neovex - Home" className="flex items-center min-w-0">
            <span className="text-lg font-bold text-[#172235]">Neovex</span>
          </Link>

          <div className="flex items-center gap-2">
            <a
              href={DISCUSS_URL}
              className="hidden sm:inline-flex items-center justify-center bg-[#172235] hover:bg-[#1B2638] text-white rounded-lg px-3 h-10 text-sm font-semibold"
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
        <Link to="/" aria-label="Neovex - Home" className="flex items-center">
          <span className="text-xl font-bold text-[#172235]">Neovex</span>
        </Link>

        <nav className="flex items-center gap-5">
          <div className="relative group">
            <a
              href="/#solutions"
              className="inline-flex items-center gap-1 px-1 py-4 text-sm font-medium text-slate-700 hover:text-[#25638f] transition"
            >
              Solutions
              <ChevronDown className="h-3.5 w-3.5 text-slate-500 transition group-hover:text-[#25638f]" aria-hidden="true" />
            </a>

            <div className="invisible absolute left-0 top-full z-50 w-[310px] translate-y-2 rounded-lg border border-slate-200 bg-white p-2 opacity-0 shadow-sm transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
              {solutionGroups.map((group, groupIndex) => (
                <div key={group.label} className={groupIndex > 0 ? "mt-2 border-t border-slate-100 pt-2" : ""}>
                  <div className="px-3 pb-1 pt-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">{group.label}</div>
                  {group.items.map((item) => (
                    <a
                      key={`${item.label}-${item.href}`}
                      href={item.href}
                      className="block rounded-md px-3 py-2 text-sm font-semibold text-[#172235] hover:bg-slate-50 hover:text-[#25638f] focus:bg-slate-50 focus:text-[#25638f] focus:outline-none"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-1 py-1 text-sm font-medium text-slate-700 hover:text-[#25638f] transition"
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
            href={DISCUSS_URL}
            className="inline-flex items-center justify-center bg-[#172235] hover:bg-[#1B2638] text-white rounded-lg px-5 h-11 text-sm font-semibold"
          >
            Discuss a Workflow
          </a>
        </div>
      </div>

      {mobileOverlay}
    </header>
  );
}
