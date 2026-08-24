import React from "react";

const defaultRows = [
  { stage: "Lead Intake", manual: "Someone reviews the inquiry and enters the details", auto: "Captured and structured automatically" },
  { stage: "Lead Qualification", manual: "Someone checks the details and decides where it goes", auto: "Qualified and routed by workflow rules" },
  { stage: "Follow-Up", manual: "Someone has to remember to email, text, or call", auto: "Follow-up triggers automatically" },
  { stage: "Scheduling", manual: "Dates and availability are coordinated manually", auto: "Booking steps and confirmations are triggered automatically" },
  { stage: "Customer Approval", manual: "Approval is chased through email or messages", auto: "Approval is sent, tracked, and triggers the next step" },
  { stage: "Payment / Deposit", manual: "Someone sends the request and checks whether it was paid", auto: "Payment requests trigger automatically and status stays updated" },
  { stage: "Internal Handoff", manual: "Information is passed from person to person", auto: "The right person receives the context automatically" },
  { stage: "Status Updates", manual: "Someone checks multiple systems to see what happened", auto: "Status updates as the workflow progresses" },
  { stage: "Exceptions", manual: "Problems are noticed when someone catches them", auto: "Exceptions are flagged for human attention" },
  { stage: "Maintenance", manual: "Your team troubleshoots workflow issues internally", auto: "The workflow can be monitored and maintained by Neovex" },
];

export default function BeforeAfter({
  id = "before-after",
  eyebrow = "Manual vs. Automated",
  title = "Manual Workflow vs. Neovex-Automated Workflow",
  subhead = "A side-by-side look at how work moves when systems, handoffs, follow-up, and exceptions are connected by a managed workflow.",
  leftLabel = "Manual Today",
  rightLabel = "With Neovex",
  rows = defaultRows,
  sectionClassName = "bg-[#F5F6F7] py-20 px-6 border-t border-slate-200 scroll-mt-28 md:scroll-mt-32",
  compact = false,
}) {
  return (
    <section
      id={id}
      className={sectionClassName}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#25638f]">
            {eyebrow}
          </div>

          <h2 className="mt-4 text-3xl md:text-[2.85rem] md:leading-[1.12] font-bold text-slate-900 tracking-tight">
            {title}
          </h2>

          <p className="mt-6 text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
            {subhead}
          </p>
        </div>

        <div className={`${compact ? "mt-8" : "mt-10"} md:hidden border-y border-slate-200`}>
          {rows.map((row) => (
            <div key={row.stage} className={`border-b border-slate-200 ${compact ? "py-4" : "py-5"} last:border-b-0`}>
              <div className="text-lg font-semibold text-[#172235]">{row.stage}</div>

              <div className="mt-4 grid gap-4">
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-wide text-slate-500 mb-1.5">
                    {leftLabel}
                  </div>
                  <div className="text-sm leading-6 text-slate-700">{row.manual}</div>
                </div>

                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-wide text-[#25638f] mb-1.5">
                    {rightLabel}
                  </div>
                  <div className="text-sm leading-6 font-medium text-[#25638f]">{row.auto}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`${compact ? "mt-8" : "mt-10"} hidden md:block overflow-x-auto`}>
          <div className="w-full rounded-lg p-[1px] bg-stone-200">
            <div className="w-full rounded-lg bg-white border border-stone-200 overflow-hidden min-w-[820px] md:min-w-0">
              <div className="h-px w-full bg-[#25638f]/45" />

              <table className="w-full text-left text-sm md:text-base leading-6 border-collapse md:table-fixed">
                <colgroup>
                  <col className="w-[30%]" />
                  <col className="w-[35%]" />
                  <col className="w-[35%]" />
                </colgroup>

                <thead className="sticky top-0 z-10 bg-slate-50/90 backdrop-blur supports-[backdrop-filter]:bg-slate-50/70">
                  <tr>
                    <th scope="col" className="p-4 md:p-5 font-semibold text-slate-700">
                      Workflow Step
                    </th>
                    <th scope="col" className="p-4 md:p-5">
                      <span className="text-xs font-semibold text-slate-700">
                        {leftLabel}
                      </span>
                    </th>
                    <th scope="col" className="p-4 md:p-5">
                      <span className="text-xs font-semibold text-[#25638f]">
                        {rightLabel}
                      </span>
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-100">
                  {rows.map((row) => (
                    <tr key={row.stage} className="hover:bg-stone-50/70 transition-colors">
                      <th scope="row" className={`${compact ? "p-3.5 md:p-4" : "p-4 md:p-5"} text-[#172235] font-semibold`}>
                        {row.stage}
                      </th>
                      <td className={`${compact ? "p-3.5 md:p-4" : "p-4 md:p-5"} text-slate-600`}>
                        {row.manual}
                      </td>
                      <td className={`${compact ? "p-3.5 md:p-4" : "p-4 md:p-5"} text-[#25638f] font-semibold`}>
                        {row.auto}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
