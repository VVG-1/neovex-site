// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Footer({
  orgName = "Neovex",
  email = "hello@neovexai.com",
  phone = "(312) 588-6278",
  year = new Date().getFullYear(),
  siteUrl = "https://neovex.ai",
  linkedinUrl = "https://linkedin.com/company/neovex",
  xUrl = "", // optional: add your handle or leave blank
}) {
  return (
    <footer id="contact" className="relative overflow-hidden bg-slate-950 text-slate-400">
      {/* soft glows */}
      <div
        className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl"
        aria-hidden="true"
      />

      {/* Top CTA strip */}
      <div className="max-w-7xl mx-auto px-6 pt-16">
        <div className="rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900/80 to-slate-900/40 p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 text-blue-300 px-3 py-1 text-xs font-semibold ring-1 ring-blue-500/20">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-blue-400" aria-hidden="true" />
              Ready to get started?
            </div>

            <h3 className="mt-3 text-white text-2xl md:text-3xl font-extrabold tracking-tight">
              Capture more leads. Book more jobs.
            </h3>

            <p className="mt-1 text-slate-300 text-sm md:text-base">
              White-glove onboarding for service businesses — live in under a week.
            </p>

            <p className="mt-2 text-xs text-slate-400">
              Month-to-month • Cancel anytime • No dev required
            </p>
          </div>

          <div className="flex gap-3">
            <a
              href="https://meetings.hubspot.com/neovex"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-white text-slate-900 px-5 py-3 text-sm font-semibold hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 focus-visible:ring-offset-slate-950"
            >
              Book an Intro Call
            </a>

            {/* Anchor back to Solutions section on home */}
            <a
              href="/#solutions"
              className="inline-flex items-center justify-center rounded-xl border border-slate-700 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              Explore Solutions
            </a>
          </div>
        </div>
      </div>

      {/* Link columns */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand blurb */}
          <div>
            <h3 className="text-white text-lg font-semibold">{orgName}</h3>
            <p className="mt-3 text-sm text-slate-300 leading-relaxed">
              Fully managed automation for service businesses. We capture missed calls
              and web leads, qualify them instantly, and route them to your tools —
              so no opportunity is lost.
            </p>

<div className="mt-4 text-sm space-y-1">
  <a
    href={`mailto:${email}`}
    className="block hover:text-white underline decoration-slate-700/60 underline-offset-2"
    aria-label={`Email ${orgName}`}
  >
    {email}
  </a>

  <a
    href={`tel:${phone}`}
    className="block hover:text-white underline decoration-slate-700/60 underline-offset-2"
    aria-label={`Call ${orgName}`}
  >
    {phone}
  </a>
</div>
          </div>

          {/* Solutions */}
          <nav aria-labelledby="footer-solutions">
            <h4
              id="footer-solutions"
              className="text-white text-sm font-bold uppercase tracking-wider mb-3"
            >
              Solutions
            </h4>

            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/missed-call-capture" className="hover:text-white">
                  Neovex Missed Call Capture
                </Link>
              </li>
              <li>
                {/* Make sure this matches your real route */}
                <Link to="/web-capture" className="hover:text-white">
                  Neovex Web Capture
                </Link>
              </li>
            </ul>
          </nav>

          {/* Company */}
          <nav aria-labelledby="footer-company">
            <h4
              id="footer-company"
              className="text-white text-sm font-bold uppercase tracking-wider mb-3"
            >
              Company
            </h4>

            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="hover:text-white">
                  About
                </Link>
              </li>
              <li>
                {/* FAQ is an on-page section */}
                <Link to="/#faq" className="hover:text-white">
                  FAQ
                </Link>
              </li>
              <li>
                {/* Founder Plan is currently an on-page section */}
                <Link to="/#founder-plan" className="hover:text-white">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Legal + Social */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-3">
              Legal
            </h4>

            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/privacy" className="hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-white">
                  Terms of Service
                </Link>
              </li>
            </ul>

            <ul className="mt-4 flex items-center gap-4">
              {linkedinUrl && (
                <li>
                  <a
                    href={linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="text-slate-400 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                    title="LinkedIn"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M4.98 3.5A2.49 2.49 0 1 0 5 8.48a2.49 2.49 0 0 0-.02-4.98ZM3 9.75h4v10.5H3V9.75Zm6 0h3.83v1.58H13c.53-.96 1.83-1.98 3.77-1.98 4.03 0 4.78 2.61 4.78 6v4.9h-4v-4.35c0-1.04-.02-2.39-1.46-2.39-1.46 0-1.69 1.14-1.69 2.31v4.43H9V9.75Z" />
                    </svg>
                  </a>
                </li>
              )}

              {xUrl && (
                <li>
                  <a
                    href={xUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="X (formerly Twitter)"
                    className="text-slate-400 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                    title="X (formerly Twitter)"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M18.9 3h3.6l-7.9 9.1L24 21h-7.4l-5.8-7-6.1 7H1.1l8.4-9.7L0 3h7.6l5.3 6.4L18.9 3z" />
                    </svg>
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-slate-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            © {year} {orgName}. All rights reserved.
          </p>
          <p className="text-xs text-slate-500">Made for service businesses.</p>
        </div>
      </div>

      {/* Organization JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: orgName,
            url: siteUrl,
            contactPoint: [{ "@type": "ContactPoint", email, contactType: "customer support" }],
            sameAs: [linkedinUrl, xUrl].filter(Boolean),
          }),
        }}
      />
    </footer>
  );
}
