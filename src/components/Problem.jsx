import React from "react";

const items = [
  {
    n: "01",
    title: "Repetitive Data Entry",
    desc: "Information gets copied between systems that should already be connected.",
  },
  {
    n: "02",
    title: "Manual Next Steps",
    desc: "Someone has to remember when to email, text, call, approve, schedule, or trigger the next action.",
  },
  {
    n: "03",
    title: "Broken Handoffs",
    desc: "Work slows down when information has to be manually passed from one person to another.",
  },
  {
    n: "04",
    title: "Disconnected Tools",
    desc: "Your systems hold the information, but they do not automatically move the process forward.",
  },
];

export default function Problem() {
  return (
    <section
      id="problem"
      className="relative overflow-hidden py-16 md:py-20 px-6 bg-gradient-to-tr from-blue-50 via-blue-100 to-blue-50 border-t border-blue-100 scroll-mt-28 md:scroll-mt-32"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[0.82fr_1fr] gap-10 lg:gap-16 items-start">
          <div className="min-w-0">
            <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-blue-700 mb-4">
              THE PROBLEM
            </div>

            <h2 className="max-w-[14ch] sm:max-w-none text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              Too Much Work Still Depends on Someone Remembering the Next Step.
            </h2>
            <div className="mt-3 mb-6 h-1 w-20 rounded-full bg-blue-600/60" />

            <p className="max-w-[32ch] sm:max-w-[36rem] text-lg md:text-xl leading-8 text-slate-700">
              Work still moves manually between forms, inboxes, spreadsheets, CRMs, calendars, billing tools, and people. Every handoff adds delay, repetitive work, and another opportunity for something to get missed.
            </p>
          </div>

          <ol role="list" className="min-w-0 border-y border-blue-200/70">
            {items.map((item, index) => (
              <li key={item.title} className={index === 0 ? "" : "border-t border-blue-200/70"}>
                <div className="grid sm:grid-cols-[4rem_1fr] gap-3 sm:gap-5 py-5 md:py-6">
                  <div className="text-sm font-semibold tracking-[0.16em] text-blue-700">
                    {item.n}
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm md:text-base leading-7 text-slate-700">
                      {item.desc}
                    </p>
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
