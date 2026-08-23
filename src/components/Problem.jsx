import React from "react";
import { ArrowRightLeft, Cable, FileText, ListChecks } from "lucide-react";

const items = [
  {
    n: "01",
    title: "Repetitive Data Entry",
    desc: "Information gets copied between systems that should already be connected.",
    status: "Manual",
    Icon: FileText,
  },
  {
    n: "02",
    title: "Manual Next Steps",
    desc: "Someone has to remember when to email, text, call, approve, schedule, or trigger the next action.",
    status: "Delay",
    Icon: ListChecks,
  },
  {
    n: "03",
    title: "Broken Handoffs",
    desc: "Work slows down when information has to be manually passed from one person to another.",
    status: "Handoff",
    Icon: ArrowRightLeft,
  },
  {
    n: "04",
    title: "Disconnected Tools",
    desc: "Your systems hold the information, but they do not automatically move the process forward.",
    status: "Disconnected",
    Icon: Cable,
  },
];

export default function Problem() {
  return (
    <section
      id="problem"
      className="relative overflow-hidden py-16 md:py-[5.5rem] lg:py-24 px-6 bg-[#F7F6F2] border-t border-stone-200 scroll-mt-28 md:scroll-mt-32"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[0.82fr_1fr] gap-10 lg:gap-16 items-start">
          <div className="min-w-0">
            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#25638f] mb-5">
              THE PROBLEM
            </div>

            <h2 className="max-w-[14ch] sm:max-w-none text-3xl md:text-[2.8rem] md:leading-[1.14] font-bold text-slate-900 tracking-tight">
              Too Much Work Still Depends on Someone Remembering the Next Step.
            </h2>

            <p className="mt-7 max-w-[32ch] sm:max-w-[36rem] text-lg md:text-[1.25rem] leading-8 md:leading-9 text-slate-700">
              Work still moves manually between forms, inboxes, spreadsheets, CRMs, calendars, billing tools, and people. Every handoff adds delay, repetitive work, and another opportunity for something to get missed.
            </p>
          </div>

          <ol role="list" className="relative min-w-0 border-y border-stone-300/70">
            <div
              className="pointer-events-none absolute left-[4rem] sm:left-[5.5rem] top-8 bottom-8 w-px bg-stone-300/80"
              aria-hidden="true"
            />
            {items.map((item, index) => (
              <li key={item.title} className={index === 0 ? "" : "border-t border-stone-300/70"}>
                <div className="relative grid grid-cols-[2.75rem_2.5rem_minmax(0,1fr)] sm:grid-cols-[4rem_3rem_minmax(0,1fr)] xl:grid-cols-[4rem_3rem_minmax(0,1fr)_8.75rem] gap-3 sm:gap-5 py-6 md:py-7 items-start">
                  <div className="pt-2 text-[0.95rem] font-bold tracking-[0.18em] text-[#25638f]">
                    {item.n}
                  </div>

                  <div className="relative z-10 flex h-9 w-9 items-center justify-center rounded-lg border border-stone-300 bg-[#F7F6F2] text-slate-600">
                    <item.Icon className="h-4 w-4" strokeWidth={1.9} aria-hidden="true" />
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-xl md:text-[1.3rem] font-semibold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-base md:text-[1.05rem] leading-7 md:leading-8 text-slate-700">
                      {item.desc}
                    </p>
                  </div>

                  <div className="hidden xl:block pt-2 text-right text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[#25638f]/80">
                    {item.status}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
