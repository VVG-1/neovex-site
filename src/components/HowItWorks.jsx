// src/components/HowItWorks.jsx
import React from "react";
import { Link2, Settings2, Rocket } from "lucide-react";

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="bg-blue-100 py-20 px-6 border-t border-slate-100 scroll-mt-28 md:scroll-mt-32"
    >
      <div className="max-w-7xl mx-auto text-center">
        {/* Header chip */}
        <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 text-blue-700 px-3 py-1 text-xs font-semibold ring-1 ring-blue-100">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-blue-600" />
          Setup in under a week · No dev required · Fully managed
        </div>

        <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
          How Neovex Works
        </h2>

        <div className="mx-auto mt-3 mb-8 h-1 w-20 rounded-full bg-gradient-to-r from-blue-600 to-sky-400" />

        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
          We connect your inbound systems, configure structured intake + routing rules,
          and manage the workflow day-to-day—so every inquiry is captured,
          summarized, and handed off automatically.
        </p>

        <ol className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          {/* Step 1 */}
          <li className="rounded-2xl p-[1px] bg-gradient-to-br from-blue-200/60 to-sky-200/40">
            <div className="min-h-full rounded-2xl bg-white p-6 md:p-8 border border-slate-200 shadow-sm hover:shadow-md transition flex flex-col items-center">
              <StepNumber n={1} grad="from-blue-600 to-sky-500" />
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-sky-500 text-white flex items-center justify-center mb-4">
                <Link2 className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold tracking-tight text-slate-900">
                Connect calls + web inquiries
              </h3>
              <p className="mt-2 text-slate-600 text-sm max-w-sm">
                We plug into your phone system and website lead sources,
                then sync everything into your CRM and route it to the right
                dispatcher or team member.
              </p>
            </div>
          </li>

          {/* Step 2 */}
          <li className="rounded-2xl p-[1px] bg-gradient-to-br from-blue-200/60 to-sky-200/40">
            <div className="min-h-full rounded-2xl bg-white p-6 md:p-8 border border-slate-200 shadow-sm hover:shadow-md transition flex flex-col items-center">
              <StepNumber n={2} grad="from-blue-600 to-sky-500" />
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-sky-500 text-white flex items-center justify-center mb-4">
                <Settings2 className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold tracking-tight text-slate-900">
                Configure intake + routing rules
              </h3>
              <p className="mt-2 text-slate-600 text-sm max-w-sm">
                We build structured intake, qualification logic,
                follow-up timing, and handoff rules based on how your
                team actually operates.
              </p>
            </div>
          </li>

          {/* Step 3 */}
          <li className="rounded-2xl p-[1px] bg-gradient-to-br from-blue-200/60 to-sky-200/40">
            <div className="min-h-full rounded-2xl bg-white p-6 md:p-8 border border-slate-200 shadow-sm hover:shadow-md transition flex flex-col items-center">
              <StepNumber n={3} grad="from-blue-600 to-sky-500" />
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-sky-500 text-white flex items-center justify-center mb-4">
                <Rocket className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold tracking-tight text-slate-900">
                We manage + improve continuously
              </h3>
              <p className="mt-2 text-slate-600 text-sm max-w-sm">
                Every inquiry gets captured instantly, summarized clearly,
                and routed correctly—while we monitor performance and refine
                intake, routing, and follow-ups over time.
              </p>
            </div>
          </li>
        </ol>

        <div className="mt-10">
          <a
            href="https://meetings.hubspot.com/neovex"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-lg text-sm font-semibold hover:bg-blue-700 transition"
          >
            Book an Intro Call
          </a>
        </div>
      </div>
    </section>
  );
}

function StepNumber({ n, grad }) {
  return (
    <div className={`mb-4 inline-grid place-items-center rounded-full p-[2px] bg-gradient-to-br ${grad}`}>
      <div className="grid place-items-center h-9 w-9 rounded-full bg-white text-slate-900 text-[13px] font-semibold">
        {n}
      </div>
    </div>
  );
}
