// src/components/SchedulingFounderPlan.jsx
import React from "react";

export default function SchedulingFounderPlan({
  founderPrice = 129,
  months = 3,
  calendarsIncluded = 3,
  ctaHref = "/contact",
}) {
  return (
    <section className="px-6 py-16 bg-gradient-to-b from-blue-50 to-sky-50 border-y border-blue-100">
      <div className="max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 text-blue-700 px-3 py-1 text-xs font-semibold ring-1 ring-blue-200">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-blue-600" />
          Founder Plan — Scheduling
        </div>

        <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-slate-900">
          Book more without the back-and-forth.
        </h2>
        <div className="mx-auto mt-3 mb-6 h-1 w-20 rounded-full bg-blue-600/60" />

        <p className="text-lg md:text-xl text-slate-700 max-w-3xl mx-auto">
          Unlimited web & email booking with confirmations, reminders, and self-serve reschedules—fully managed, no new logins.
        </p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="rounded-2xl border border-blue-200 bg-white p-6 shadow-sm">
            <div className="text-3xl font-extrabold text-slate-900">
              ${founderPrice}
              <span className="text-base font-semibold text-slate-500">/mo</span>
            </div>
            <div className="text-sm text-slate-600">Founder pricing for first {months} months</div>
          </div>

          <div className="rounded-2xl border border-blue-200 bg-white p-6 shadow-sm">
            <div className="text-lg font-semibold text-slate-900">Unlimited web & email booking</div>
            <div className="text-sm text-slate-600">Reschedules, confirmations, reminders included</div>
          </div>

          <div className="rounded-2xl border border-blue-200 bg-white p-6 shadow-sm">
            <div className="text-lg font-semibold text-slate-900">Up to {calendarsIncluded} calendars</div>
            <div className="text-sm text-slate-600">Routing, blackout windows, team availability</div>
          </div>

          <div className="rounded-2xl border border-blue-200 bg-white p-6 shadow-sm">
            <div className="text-lg font-semibold text-slate-900">CRM & email sync</div>
            <div className="text-sm text-slate-600">Create/update records, log activity automatically</div>
          </div>
        </div>

        <div className="mt-8">
          <a
            href={ctaHref}
            className="inline-flex h-12 items-center gap-2 rounded-xl bg-blue-600 px-5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
          >
            Start scheduling smarter
          </a>
        </div>

        <p className="mt-4 text-xs text-slate-600">
          “Unlimited” SMS under fair use (typical confirmations/reminders). Heavy promotional messaging may require an add-on.
        </p>
      </div>
    </section>
  );
}
