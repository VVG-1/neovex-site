import React from "react";
import { ArrowRightLeft, Cable, FileText, ListChecks } from "lucide-react";

const items = [
  {
    n: "01",
    title: "Repetitive Data Entry",
    desc: "Staff re-enter the same information across tools, wasting time and increasing the chance of errors.",
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
    desc: "Handoffs depend on people remembering to pass work along, creating delays and dropped details.",
    status: "Handoff",
    Icon: ArrowRightLeft,
  },
  {
    n: "04",
    title: "Disconnected Tools",
    desc: "The information exists, but your systems do not move the work forward without manual effort.",
    status: "Disconnected",
    Icon: Cable,
  },
];

export default function Problem() {
  return (
    <section
      id="problem"
      className="relative overflow-hidden py-10 md:py-12 lg:py-14 px-6 bg-[#F5F6F7] border-t border-slate-200 scroll-mt-28 md:scroll-mt-32"
    >
      <div className="max-w-7xl mx-auto">
        <div className="max-w-full sm:max-w-[52rem]">
          <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#25638f] mb-5">
            THE PROBLEM
          </div>

          <h2 className="max-w-[13ch] sm:max-w-none text-3xl md:text-[2.8rem] md:leading-[1.14] font-bold text-slate-900 tracking-tight">
            Too Much Work Still Depends on Someone Remembering the Next Step.
          </h2>

          <p className="mt-5 max-w-[43rem] text-lg md:text-[1.25rem] leading-8 md:leading-9 text-slate-700">
            When work moves manually between systems and people, teams lose time, follow-ups get missed, handoffs break down, customers wait longer - and revenue gets delayed or lost along the way.
          </p>
        </div>

        <ol role="list" className="mt-8 md:mt-9 grid md:grid-cols-2 lg:grid-cols-4 border-y border-slate-300/70">
          {items.map((item, index) => {
            const dividerClass = [
              index > 0 ? "border-t border-slate-300/70" : "",
              index === 1 ? "md:border-t-0 md:border-l md:border-slate-300/70" : "",
              index === 2 ? "md:border-l-0 lg:border-t-0 lg:border-l lg:border-slate-300/70" : "",
              index === 3 ? "md:border-l md:border-slate-300/70 lg:border-t-0" : "",
            ]
              .filter(Boolean)
              .join(" ");

            return (
              <li key={item.title} className={dividerClass}>
                <div className="py-5 md:py-6 lg:py-5 md:px-6 lg:px-7">
                  <div className="flex items-center gap-3">
                    <div className="text-[0.85rem] font-bold tracking-[0.18em] text-[#25638f]">
                      {item.n}
                    </div>

                    <item.Icon className="h-4 w-4 text-slate-600" strokeWidth={1.9} aria-hidden="true" />

                    <div className="ml-auto hidden sm:block text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#25638f]/75 md:hidden lg:block">
                      {item.status}
                    </div>
                  </div>

                  <h3 className="mt-4 text-xl md:text-[1.22rem] font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-base lg:text-[1rem] leading-7 text-slate-700">
                    {item.desc}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
