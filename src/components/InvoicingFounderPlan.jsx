import React from "react";

export default function InvoicingFounderPlan({
  normalPrice = 199,
  founderPrice = 99,
  months = 3,
  ctaHref = "/contact",
}) {
  return (
    <section className="px-6 py-16 bg-gradient-to-b from-blue-50 to-sky-50 border-y border-blue-100">
      <div className="max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 text-blue-700 px-3 py-1 text-xs font-semibold ring-1 ring-blue-200">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-blue-600" />
          Founder Plan — Invoicing
        </div>

        <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-slate-900">
          Get paid faster. Simple founder pricing for your first {months} months.
        </h2>
        <div className="mx-auto mt-3 mb-6 h-1 w-20 rounded-full bg-blue-600/60" />

        <p className="text-lg md:text-xl text-slate-700 max-w-3xl mx-auto">
          AI builds and sends invoices, nudges until paid, and syncs to QuickBooks—fully managed.
        </p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
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

          <div className="rounded-2xl border border-blue-200 bg-white p-6 shadow-sm">
            <div className="text-lg font-semibold text-slate-900">Unlimited invoices</div>
            <div className="text-sm text-slate-600">No per-invoice fees from us.</div>
          </div>

          <div className="rounded-2xl border border-blue-200 bg-white p-6 shadow-sm">
            <div className="text-lg font-semibold text-slate-900">1-click pay links</div>
            <div className="text-sm text-slate-600">Use your processor; standard processing fees apply.</div>
          </div>

          <div className="rounded-2xl border border-blue-200 bg-white p-6 shadow-sm">
            <div className="text-lg font-semibold text-slate-900">Reminders & sync</div>
            <div className="text-sm text-slate-600">Smart dunning + QuickBooks reconciliation.</div>
          </div>
        </div>

        <div className="mt-8">
          <a
            href={ctaHref}
            className="inline-flex h-12 items-center gap-2 rounded-xl bg-blue-600 px-5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
          >
            Start faster payments
          </a>
        </div>

        <p className="mt-4 text-xs text-slate-600">
          Bring your existing Stripe or QuickBooks Payments account. We never add per-invoice fees.
        </p>
      </div>
    </section>
  );
}
