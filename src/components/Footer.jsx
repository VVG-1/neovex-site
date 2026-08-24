import React from "react";
import { Link } from "react-router-dom";

export default function Footer({
  orgName = "Neovex",
  email = "hello@neovexai.com",
  phone = "(312) 588-6278",
  year = new Date().getFullYear(),
  siteUrl = "https://neovexai.com",
  linkedinUrl = "https://linkedin.com/company/neovex",
  xUrl = "",
  className = "bg-[#172235]",
}) {
  return (
    <footer id="contact" className={`relative overflow-hidden ${className} text-slate-400`}>
      <div className="max-w-7xl mx-auto px-6 pt-14">
        <div className="rounded-md bg-[#1B2638]/35 p-6 md:p-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-300">
              Ready to get started?
            </div>

            <h3 className="mt-3 text-white text-2xl md:text-3xl font-bold tracking-tight">
              Start With the Workflow That Is Taking Too Much Time.
            </h3>

            <p className="mt-2 text-slate-300 text-sm md:text-base max-w-3xl">
              Know what needs to be automated? Start there. Not sure? We&apos;ll help you identify the best opportunity.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <a
              href="https://meetings.hubspot.com/neovex"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-white text-[#172235] px-5 py-3 text-sm font-semibold hover:bg-slate-100"
            >
              Discuss a Workflow
            </a>

            <a
              href="/#audit"
              className="inline-flex items-center justify-center rounded-lg border border-slate-500/45 px-5 py-3 text-sm font-semibold text-slate-100 hover:bg-[#1B2638]"
            >
              Start With an Audit
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 gap-9 sm:grid-cols-2 lg:grid-cols-[1.35fr_0.9fr_1.05fr_0.85fr_0.7fr] lg:gap-10">
          <div className="lg:pr-6">
            <h3 className="text-white text-lg font-semibold">{orgName}</h3>
            <p className="mt-3 text-sm text-slate-300 leading-relaxed">
              Neovex designs, builds, and manages workflow automation across the tools your business already uses.
            </p>

            <div className="mt-4 text-sm space-y-1">
              <a href={`mailto:${email}`} className="block hover:text-white underline decoration-slate-700/60 underline-offset-2" aria-label={`Email ${orgName}`}>
                {email}
              </a>

              <a href={`tel:${phone}`} className="block hover:text-white underline decoration-slate-700/60 underline-offset-2" aria-label={`Call ${orgName}`}>
                {phone}
              </a>
            </div>
          </div>

          <nav aria-labelledby="footer-solutions">
            <h4 id="footer-solutions" className="text-white text-sm font-bold uppercase tracking-wider mb-3">
              Solutions
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/workflow-automation" className="hover:text-white">Workflow Automation</a></li>
              <li><a href="/workflow-automation-audit" className="hover:text-white">Workflow Automation Audit</a></li>
              <li><a href="/managed-automation" className="hover:text-white">Managed Automation</a></li>
            </ul>
          </nav>

          <nav aria-labelledby="footer-workflows">
            <h4 id="footer-workflows" className="text-white text-sm font-bold uppercase tracking-wider mb-3">
              Workflows
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/workflows/lead-management-automation" className="hover:text-white">Lead Management Automation</Link></li>
              <li><Link to="/workflows/quote-approval-automation" className="hover:text-white">Quote &amp; Approval Automation</Link></li>
            </ul>
          </nav>

          <nav aria-labelledby="footer-company">
            <h4 id="footer-company" className="text-white text-sm font-bold uppercase tracking-wider mb-3">
              Company
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/how-it-works" className="hover:text-white">How It Works</Link></li>
              <li><Link to="/case-studies" className="hover:text-white">Case Studies</Link></li>
              <li><Link to="/pricing" className="hover:text-white">Pricing</Link></li>
              <li><Link to="/faq" className="hover:text-white">FAQ</Link></li>
              <li><Link to="/about" className="hover:text-white">About</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </nav>

          <nav aria-labelledby="footer-legal">
            <h4 id="footer-legal" className="text-white text-sm font-bold uppercase tracking-wider mb-3">
              Legal
            </h4>

            <ul className="space-y-2 text-sm">
              <li><Link to="/privacy" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-white">Terms of Service</Link></li>
              {linkedinUrl && (
                <li>
                  <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="inline-flex items-center gap-2 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded" title="LinkedIn">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M4.98 3.5A2.49 2.49 0 1 0 5 8.48a2.49 2.49 0 0 0-.02-4.98ZM3 9.75h4v10.5H3V9.75Zm6 0h3.83v1.58H13c.53-.96 1.83-1.98 3.77-1.98 4.03 0 4.78 2.61 4.78 6v4.9h-4v-4.35c0-1.04-.02-2.39-1.46-2.39-1.46 0-1.69 1.14-1.69 2.31v4.43H9V9.75Z" />
                    </svg>
                    <span>LinkedIn</span>
                  </a>
                </li>
              )}
            </ul>
          </nav>
        </div>

        <div className="mt-10 border-t border-slate-800 pt-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            &copy; {year} {orgName}. All rights reserved.
          </p>
          <span aria-hidden="true" />
        </div>
      </div>

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
