// src/components/BeforeAfter.jsx
import React from "react";
import { XCircle, CheckCircle2 } from "lucide-react";

const defaultRows = [
  { stage: "Inbound coverage", manual: "Depends on staff availability and business hours", auto: "24/7 coverage layer that captures every inquiry" },
  { stage: "First response", manual: "Minutes to hours; varies by workload", auto: "Seconds, with consistent messaging and next steps" },
  { stage: "Intake quality", manual: "Details gathered inconsistently across people", auto: "Standardized intake that collects the right details every time" },
  { stage: "Routing + handoff", manual: "Forwarded manually (texts, emails, sticky notes)", auto: "Structured handoff: summary + context delivered automatically" },
  { stage: "Next-step execution", manual: "Someone sends links, schedules, or follows up manually", auto: "Next step triggered automatically (booking, quote, follow-up)" },
  { stage: "After-hours + overflow", manual: "Backlog builds; leads wait until morning", auto: "Captured and responded to immediately — even after hours" },
  { stage: "Visibility", manual: "Check voicemail, inbox, and multiple tools", auto: "Centralized summaries + tracked outcomes across channels" },
  { stage: "Consistency + compliance", manual: "Different reps say different things", auto: "Controlled responses aligned to your rules and workflow" },
  { stage: "Maintenance + improvement", manual: "Internal team troubleshoots and “sets it and forgets it”", auto: "Neovex monitors, maintains, and improves the workflow continuously" },
];

export default function BeforeAfter({
  id = "before-after",
  eyebrow = "Company-Managed vs. Neovex-Managed",
  title = "Reactive processes vs. a managed AI operations layer",
  subhead = "A side-by-side look at internal handling vs. managed AI automation that runs continuously in the background.",
  rows = defaultRows,
  ctaHref = "https://meetings.hubspot.com/neovex",
  ctaText = "Book an Intro Call",
  leftLabel = "Company-Managed (Internal)",
  rightLabel = "Neovex-Managed (AI Ops Layer)",
}) {
  return (
    <section
      id={id}
      className="bg-blue-100 py-20 px-6 border-t border-slate-100 scroll-mt-28 md:scroll-mt-32"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 text-blue-700 px-3 py-1 text-xs font-semibold ring-1 ring-blue-100">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-blue-600" aria-hidden="true" />
            {eyebrow}
          </div>

          <h2 className="mt-3 text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            {title}
          </h2>

          <div className="mx-auto mt-3 mb-8 h-1 w-20 rounded-full bg-gradient-to-r from-blue-600 to-sky-400" />

          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
            {subhead}
          </p>
        </div>

        {/* ✅ MOBILE: truly separate cards (NO outer frame) */}
        <div className="md:hidden mt-10 space-y-5">
          {rows.map((row, i) => (
            <div key={i} className="rounded-2xl bg-white border border-slate-200 shadow-sm p-5">
              <div className="text-base font-semibold text-slate-900">
                {row.stage}
              </div>

              <div className="mt-4 space-y-4">
                <div className="rounded-xl bg-rose-50/60 ring-1 ring-rose-100 p-3">
                  <div className="text-[11px] font-semibold uppercase tracking-wide text-rose-700 mb-2">
                    {leftLabel}
                  </div>
                  <div className="flex items-start gap-2 text-sm text-rose-800">
                    <XCircle className="w-4 h-4 text-rose-500 mt-0.5 shrink-0" aria-hidden="true" />
                    <span className="leading-5">{row.manual}</span>
                  </div>
                </div>

                <div className="rounded-xl bg-blue-50/60 ring-1 ring-blue-100 p-3">
                  <div className="text-[11px] font-semibold uppercase tracking-wide text-blue-700 mb-2">
                    {rightLabel}
                  </div>
                  <div className="flex items-start gap-2 text-sm font-medium text-blue-800">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" aria-hidden="true" />
                    <span className="leading-5">{row.auto}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ✅ DESKTOP: single framed table */}
        <div className="hidden md:block mt-10 overflow-x-auto">
          <div className="w-full rounded-2xl p-[1px] bg-gradient-to-r from-blue-100 via-sky-100 to-blue-100">
            <div className="w-full rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-sm min-w-[820px] md:min-w-0">
              <div className="h-1 w-full bg-gradient-to-r from-rose-400 via-blue-500 to-sky-400" />

              <table className="w-full text-left text-sm md:text-base leading-6 border-collapse md:table-fixed">
                <colgroup>
                  <col className="w-[30%]" />
                  <col className="w-[35%]" />
                  <col className="w-[35%]" />
                </colgroup>

                <thead className="sticky top-0 z-10 bg-slate-50/90 backdrop-blur supports-[backdrop-filter]:bg-slate-50/70">
                  <tr>
                    <th scope="col" className="p-4 md:p-5 font-semibold text-slate-600">
                      Workflow stage
                    </th>
                    <th scope="col" className="p-4 md:p-5">
                      <span className="inline-flex items-center gap-2 rounded-full bg-rose-50 text-rose-700 px-2.5 py-1 text-xs font-semibold ring-1 ring-rose-100">
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-rose-500" aria-hidden="true" />
                        {leftLabel}
                      </span>
                    </th>
                    <th scope="col" className="p-4 md:p-5">
                      <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 text-blue-700 px-2.5 py-1 text-xs font-semibold ring-1 ring-blue-100">
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-blue-600" aria-hidden="true" />
                        {rightLabel}
                      </span>
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-100">
                  {rows.map((row, i) => (
                    <tr key={i} className="hover:bg-sky-50/40 transition-colors">
                      <th scope="row" className="p-4 md:p-5 text-slate-900 font-medium">
                        {row.stage}
                      </th>

                      <td className="p-4 md:p-5 text-rose-700">
                        <span className="inline-flex items-center gap-2">
                          <XCircle className="w-4 h-4 text-rose-500" aria-hidden="true" />
                          {row.manual}
                        </span>
                      </td>

                      <td className="p-4 md:p-5 text-blue-700 font-semibold">
                        <span className="inline-flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-blue-600" aria-hidden="true" />
                          {row.auto}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <a
            href={ctaHref}
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-lg text-sm font-semibold hover:bg-blue-700 transition"
          >
            {ctaText}
          </a>
        </div>
      </div>
    </section>
  );
}
