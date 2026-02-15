// src/components/ComparisonTable.jsx
import React from "react";
import { XCircle, CheckCircle2 } from "lucide-react";

const defaultRows = [
  { stage: "When a call comes in", manual: "Missed call or voicemail", auto: "Captured instantly, even when you can’t answer" },
  { stage: "When a website lead comes in", manual: "Form hits your inbox", auto: "Captured instantly with an automatic response" },
  { stage: "Speed to response", manual: "Minutes, hours, or next day", auto: "Seconds" },
  { stage: "Getting lead details", manual: "You ask questions later on the call-back", auto: "Neovex collects your intake questions automatically" },
  { stage: "Calling back", manual: "You call back with no context", auto: "You receive a clear summary before calling back" },
  { stage: "Next step", manual: "You manually send booking or quote links", auto: "Next step triggered automatically" },
  { stage: "After-hours coverage", manual: "Leads wait until morning", auto: "Leads captured and responded to 24/7" },
  { stage: "Knowing what was captured", manual: "Check voicemail and inbox manually", auto: "Instant summary delivered every time" },
];

export default function ComparisonTable({
  rows = defaultRows,
  className = "",
  stickyHeader = true,
  autoLabel = "Neovex (Managed)",
}) {
  return (
    <div className={className}>
      {/* Gradient frame */}
      <div className="w-full rounded-2xl p-[1px] bg-gradient-to-r from-blue-100 via-sky-100 to-blue-100">
        <div className="w-full rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-sm">
          {/* Thin top gradient bar */}
          <div className="h-1 w-full bg-gradient-to-r from-rose-400 via-blue-500 to-sky-400" />

          {/* ✅ DESKTOP TABLE ONLY */}
          <div className="hidden md:block overflow-x-auto">
            <div className="min-w-[760px]">
              <table className="w-full text-left text-sm md:text-base leading-6 border-collapse md:table-fixed">
                <colgroup>
                  <col className="w-[30%]" />
                  <col className="w-[35%]" />
                  <col className="w-[35%]" />
                </colgroup>

                <thead
                  className={`${
                    stickyHeader ? "sticky top-0 z-10" : ""
                  } bg-slate-50/90 backdrop-blur supports-[backdrop-filter]:bg-slate-50/70`}
                >
                  <tr>
                    <th scope="col" className="p-4 md:p-5 font-semibold text-slate-600">
                      Workflow stage
                    </th>
                    <th scope="col" className="p-4 md:p-5">
                      <span className="inline-flex items-center gap-2 rounded-full bg-rose-50 text-rose-700 px-2.5 py-1 text-xs font-semibold ring-1 ring-rose-100">
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-rose-500" aria-hidden="true" />
                        Manual
                      </span>
                    </th>
                    <th scope="col" className="p-4 md:p-5">
                      <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 text-blue-700 px-2.5 py-1 text-xs font-semibold ring-1 ring-blue-100">
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-blue-600" aria-hidden="true" />
                        {autoLabel}
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

          {/* ✅ MOBILE CARDS ONLY */}
          <div className="md:hidden divide-y divide-slate-200">
            {rows.map((row, i) => (
              <div key={i} className="p-4 space-y-3">
                <div className="text-sm font-semibold text-slate-900">{row.stage}</div>

                <div className="text-sm text-rose-700 flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-rose-500 mt-0.5" aria-hidden="true" />
                  <span>{row.manual}</span>
                </div>

                <div className="text-sm text-blue-700 font-medium flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5" aria-hidden="true" />
                  <span>{row.auto}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
