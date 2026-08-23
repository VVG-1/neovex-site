import React from "react";
import { CheckCircle2, XCircle } from "lucide-react";

const rows = [
  { stage: "Information capture", manual: "Someone enters it", auto: "Captured automatically" },
  { stage: "Data transfer", manual: "Copy/paste between tools", auto: "Systems sync automatically" },
  { stage: "Follow-up", manual: "Someone remembers", auto: "Triggered automatically" },
  { stage: "Assignment", manual: "Manually routed", auto: "Routed based on workflow rules" },
  { stage: "Approvals", manual: "Chased through email", auto: "Sent and tracked automatically" },
  { stage: "Status updates", manual: "Checked manually", auto: "Updated as work progresses" },
  { stage: "Reporting", manual: "Compiled manually", auto: "Generated from workflow data" },
  { stage: "Exceptions", manual: "Discovered late", auto: "Flagged for human attention" },
  { stage: "Maintenance", manual: "Internal troubleshooting", auto: "Managed by Neovex" },
];

export default function BeforeAfter({
  id = "before-after",
  eyebrow = "Manual vs. Automated",
  title = "Manual Workflow vs. Neovex-Automated Workflow",
  subhead = "A side-by-side look at how work moves when systems, handoffs, follow-up, and exceptions are connected by a managed workflow.",
  ctaHref = "https://meetings.hubspot.com/neovex",
  ctaText = "Discuss a Workflow",
  leftLabel = "Manual Workflow",
  rightLabel = "Neovex Automated",
}) {
  return (
    <section
      id={id}
      className="bg-[#F7F6F2] py-20 px-6 border-t border-stone-200 scroll-mt-28 md:scroll-mt-32"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 text-blue-700 px-3 py-1 text-xs font-semibold ring-1 ring-blue-100">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-blue-600" aria-hidden="true" />
            {eyebrow}
          </div>

          <h2 className="mt-3 text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            {title}
          </h2>

          <div className="mx-auto mt-3 mb-8 h-1 w-20 rounded-full bg-gradient-to-r from-blue-600 to-sky-400" />

          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
            {subhead}
          </p>
        </div>

        <div className="md:hidden mt-10 space-y-5">
          {rows.map((row) => (
            <div key={row.stage} className="rounded-2xl bg-white border border-slate-200 shadow-sm p-5">
              <div className="text-base font-semibold text-slate-900">{row.stage}</div>

              <div className="mt-4 space-y-4">
                <div className="rounded-xl bg-stone-50 ring-1 ring-stone-200 p-3">
                  <div className="text-[11px] font-semibold uppercase tracking-wide text-slate-600 mb-2">
                    {leftLabel}
                  </div>
                  <div className="flex items-start gap-2 text-sm text-slate-700">
                    <XCircle className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" aria-hidden="true" />
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

        <div className="hidden md:block mt-10 overflow-x-auto">
          <div className="w-full rounded-lg p-[1px] bg-stone-200">
            <div className="w-full rounded-lg bg-white border border-stone-200 overflow-hidden shadow-sm min-w-[820px] md:min-w-0">
              <div className="h-1 w-full bg-blue-600/80" />

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
                      <span className="inline-flex items-center gap-2 rounded-full bg-stone-50 text-slate-700 px-2.5 py-1 text-xs font-semibold ring-1 ring-stone-200">
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-slate-400" aria-hidden="true" />
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
                  {rows.map((row) => (
                    <tr key={row.stage} className="hover:bg-stone-50/70 transition-colors">
                      <th scope="row" className="p-4 md:p-5 text-slate-900 font-medium">
                        {row.stage}
                      </th>
                      <td className="p-4 md:p-5 text-slate-600">
                        <span className="inline-flex items-center gap-2">
                          <XCircle className="w-4 h-4 text-slate-400" aria-hidden="true" />
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
