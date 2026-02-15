import React from "react";
import { Rocket, PhoneCall, CalendarDays, DollarSign } from "lucide-react";

export default function AboutNeovex() {
  return (
    <section
      id="about-neovex"
      className="relative overflow-hidden py-20 px-6 bg-blue-100 scroll-mt-28 md:scroll-mt-32"
    >
      {/* decorative glows */}
      <div
        className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-blue-200/50 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-sky-200/40 blur-3xl"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto text-center">
        {/* header chip */}
        <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 text-blue-700 px-3 py-1 text-xs font-semibold ring-1 ring-blue-100 mb-4">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-blue-600" aria-hidden="true" />
          About Neovex
        </div>

        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">
          We handle the busywork. <span className="text-slate-900/90">You handle the jobs.</span>
        </h2>

        {/* divider */}
        <div className="mx-auto mt-3 mb-8 h-1 w-20 rounded-full bg-blue-600/60" />

        <p className="text-lg md:text-xl text-slate-700 max-w-3xl mx-auto">
          Neovex is a fully managed <span className="font-semibold text-slate-900">AI back office</span> for service
          businesses. We plug into the tools you already use and run day-to-day ops—answering calls, texting back leads,
          sending quotes, booking jobs, and invoicing—so your team can focus on the work that pays.
        </p>

        {/* pillars — semantic list */}
        <ul role="list" className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <li className="h-full">
            <div className="rounded-2xl bg-white p-6 md:p-7 border border-blue-50 shadow-sm hover:shadow-md transition flex flex-col items-center text-center h-full">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-sky-500 text-white flex items-center justify-center mb-3">
                <Rocket className="w-6 h-6" aria-hidden="true" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-slate-900 mb-1">Done-for-you setup</h3>
              <p className="text-sm text-slate-600">We connect your CRM, calendar, email, phone, and accounting for you.</p>
            </div>
          </li>

          <li className="h-full">
            <div className="rounded-2xl bg-white p-6 md:p-7 border border-blue-50 shadow-sm hover:shadow-md transition flex flex-col items-center text-center h-full">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-sky-500 text-white flex items-center justify-center mb-3">
                <PhoneCall className="w-6 h-6" aria-hidden="true" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-slate-900 mb-1">Never miss a lead</h3>
              <p className="text-sm text-slate-600">We answer calls and text back fast so more jobs get booked.</p>
            </div>
          </li>

          <li className="h-full">
            <div className="rounded-2xl bg-white p-6 md:p-7 border border-blue-50 shadow-sm hover:shadow-md transition flex flex-col items-center text-center h-full">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-500 text-white flex items-center justify-center mb-3">
                <CalendarDays className="w-6 h-6" aria-hidden="true" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-slate-900 mb-1">We book the job</h3>
              <p className="text-sm text-slate-600">Schedule, confirm, and remind—right on your calendar.</p>
            </div>
          </li>

          <li className="h-full">
            <div className="rounded-2xl bg-white p-6 md:p-7 border border-blue-50 shadow-sm hover:shadow-md transition flex flex-col items-center text-center h-full">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-600 to-orange-500 text-white flex items-center justify-center mb-3">
                <DollarSign className="w-6 h-6" aria-hidden="true" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-slate-900 mb-1">We send the invoice</h3>
              <p className="text-sm text-slate-600">Invoices and reminders go out on time, so cash comes in faster.</p>
            </div>
          </li>
        </ul>

        {/* result line + soft CTA */}
        <div className="mt-8 text-center text-sm text-slate-700">
          Result: more booked jobs, fewer no-shows, faster cash.
          <a href="#contact" className="ml-2 font-semibold text-blue-700 hover:text-blue-800">
            Talk to the team →
          </a>
        </div>
      </div>
    </section>
  );
}
