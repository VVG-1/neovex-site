// src/components/VoiceFounderPlan.jsx
import React from "react";

export default function VoiceFounderPlan({
  normalPrice = 599,
  founderPrice = 299,
  months = 3,
  minutesIncluded = 600,
  overage = 0.65,
  ctaHref = "/contact",
}) {
  return (
    <section className="px-6 py-16 bg-blue-50 border-y border-blue-100">
      <div className="max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 text-blue-700 px-3 py-1 text-xs font-semibold ring-1 ring-blue-200">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-blue-600" />
          Founder Plan — Voice
        </div>

        <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-slate-900">
          Launch fast. Save 50%. Start booking more calls.
        </h2>
        <div className="mx-auto mt-3 mb-6 h-1 w-20 rounded-full bg-gradient-to-r from-blue-600 to-sky-400" />

        <p className="text-lg md:text-xl text-slate-700 max-w-3xl mx-auto">
          White-glove setup, your rules, your tools—live in under a week. Month-to-month; cancel anytime.
        </p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="rounded-2xl border border-blue-200 bg-white p-6 shadow-sm">
            <div className="text-3xl font-extrabold text-slate-900">
              ${founderPrice}
              <span className="text-base font-semibold text-slate-500">/mo</span>
            </div>
            <div className="text-sm text-slate-600">for first {months} months</div>
            <div className="mt-1 text-xs text-slate-500 line-through">${normalPrice}/mo standard</div>
          </div>

          <div className="rounded-2xl border border-blue-200 bg-white p-6 shadow-sm">
            <div className="text-lg font-semibold text-slate-900">{minutesIncluded} minutes included</div>
            <div className="text-sm text-slate-600">then ${overage.toFixed(2)}/min overage</div>
          </div>

          <div className="rounded-2xl border border-blue-200 bg-white p-6 shadow-sm">
            <div className="text-lg font-semibold text-slate-900">White-glove setup</div>
            <div className="text-sm text-slate-600">We connect your number, calendar, CRM.</div>
          </div>

          <div className="rounded-2xl border border-blue-200 bg-white p-6 shadow-sm">
            <div className="text-lg font-semibold text-slate-900">No new logins</div>
            <div className="text-sm text-slate-600">We run it in the tools you already use.</div>
          </div>
        </div>

        <div className="mt-8">
          <a
            href={ctaHref}
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-xl text-sm font-semibold hover:bg-blue-700"
          >
            Get Started Today!
          </a>
        </div>

        <p className="mt-4 text-xs text-slate-600">Limited spots. Terms apply.</p>
      </div>
    </section>
  );
}
