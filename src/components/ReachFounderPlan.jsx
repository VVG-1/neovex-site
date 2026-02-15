// src/components/ReachFounderPlan.jsx
import React from "react";

export default function ReachFounderPlan({
  normalPrice = 599,
  founderPrice = 299,
  months = 3,
  contactsIncluded = 1000,       // enriched contacts / mo
  fairUseEmailsPerContact = 5,   // fair-use emails per contact / mo
  contactOverage = 0.30,         // $ per additional enriched contact
  ctaHref = "/contact",
}) {
  return (
    <section className="px-6 py-16 bg-gradient-to-b from-blue-50 to-sky-50 border-y border-blue-100">
      <div className="max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 text-blue-700 px-3 py-1 text-xs font-semibold ring-1 ring-blue-200">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-blue-600" />
          Founder Plan — Reach
        </div>

        <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-slate-900">
          Fill your pipeline faster. Save 50% for your first {months} months.
        </h2>
        <div className="mx-auto mt-3 mb-6 h-1 w-20 rounded-full bg-blue-600/60" />

        <p className="text-lg md:text-xl text-slate-700 max-w-3xl mx-auto">
          We find &amp; enrich prospects, run targeted <strong>email</strong> sequences, and
          auto-book on your calendar—fully managed, no new logins.
        </p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Price */}
          <div className="rounded-2xl border border-blue-200 bg-white p-6 shadow-sm">
            <div className="text-3xl font-extrabold text-slate-900">
              ${founderPrice}
              <span className="text-base font-semibold text-slate-500">/mo</span>
            </div>
            <div className="text-sm text-slate-600">for first {months} months</div>
            <div className="mt-1 text-xs text-slate-500 line-through">
              ${normalPrice}/mo standard
            </div>
          </div>

          {/* Contacts included */}
          <div className="rounded-2xl border border-blue-200 bg-white p-6 shadow-sm">
            <div className="text-lg font-semibold text-slate-900">
              {contactsIncluded.toLocaleString()} enriched contacts / mo
            </div>
            <div className="text-sm text-slate-600">
              then ${contactOverage.toFixed(2)} per additional contact
            </div>
          </div>

          {/* Fair-use email sends */}
          <div className="rounded-2xl border border-blue-200 bg-white p-6 shadow-sm">
            <div className="text-lg font-semibold text-slate-900">
              Fair-use email sends
            </div>
            <div className="text-sm text-slate-600">
              Up to {fairUseEmailsPerContact} emails per contact / mo
            </div>
          </div>

          {/* Managed */}
          <div className="rounded-2xl border border-blue-200 bg-white p-6 shadow-sm">
            <div className="text-lg font-semibold text-slate-900">Fully managed</div>
            <div className="text-sm text-slate-600">
              ICP setup, enrichment, email playbooks, booking &amp; CRM sync.
            </div>
          </div>
        </div>

        <div className="mt-8">
          <a
            href={ctaHref}
            className="inline-flex h-12 items-center gap-2 rounded-xl bg-blue-600 px-5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
          >
            Get leads flowing
          </a>
        </div>

        <p className="mt-4 text-xs text-slate-600">
          Email-only. Fair-use: up to {fairUseEmailsPerContact} emails/contact/month; additional
          contacts include the same fair-use allowance. We throttle for deliverability and
          honor unsubscribes. All prices USD.
        </p>
      </div>
    </section>
  );
}
