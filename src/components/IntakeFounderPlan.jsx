// src/components/IntakeFounderPlan.jsx
import React from "react";

export default function IntakeFounderPlan({
  normalPrice = 399,
  founderPrice = 199,
  months = 3,
  ctaHref = "/contact",
  variant = "blue", // "blue" | "white"
}) {
  const isBlue = variant === "blue";
  return (
    <section className={`px-6 py-16 ${isBlue ? "bg-blue-50 border-y border-blue-100" : "bg-white border-y border-slate-100"}`}>
      <div className="max-w-7xl mx-auto text-center">
        <div className={`inline-flex items-center gap-2 rounded-full ${isBlue ? "bg-blue-100 text-blue-700 ring-1 ring-blue-200" : "bg-blue-50 text-blue-700 ring-1 ring-blue-100"} px-3 py-1 text-xs font-semibold`}>
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-blue-600" />
          Founder Plan — Intake
        </div>

        <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-slate-900">
          Launch fast. Save 50%. Turn more leads into booked jobs.
        </h2>
        <div className="mx-auto mt-3 mb-6 h-1 w-20 rounded-full bg-blue-600/60" />

        <p className="text-lg md:text-xl text-slate-700 max-w-3xl mx-auto">
          Unlimited submissions. Guided intake, quoting by your rules, and auto-scheduling—fully managed.
        </p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
            <div className="text-3xl font-extrabold text-slate-900">
              ${founderPrice}
              <span className="text-base font-semibold text-slate-500">/mo</span>
            </div>
            <div className="text-sm text-slate-600">for first {months} months</div>
            <div className="mt-1 text-xs text-slate-500 line-through">
              ${normalPrice}/mo standard
            </div>
          </div>

          <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
            <div className="text-lg font-semibold text-slate-900">Unlimited submissions</div>
            <div className="text-sm text-slate-600">No caps or overages</div>
          </div>

          <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
            <div className="text-lg font-semibold text-slate-900">Quoting & booking</div>
            <div className="text-sm text-slate-600">Your pricing rules + calendar</div>
          </div>

          <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
            <div className="text-lg font-semibold text-slate-900">CRM + email sync</div>
            <div className="text-sm text-slate-600">Push outcomes where you work</div>
          </div>
        </div>

        <div className="mt-8">
          <a
            href={ctaHref}
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-xl text-sm font-semibold hover:bg-blue-700"
          >
            Get Started Today
          </a>
        </div>

        <p className="mt-4 text-xs text-slate-600">Limited spots. Terms apply.</p>
      </div>
    </section>
  );
}
