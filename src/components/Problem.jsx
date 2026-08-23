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

          <ol role="list" className="min-w-0 border-y border-stone-300/70">
            {items.map((item, index) => (
              <li key={item.title} className={index === 0 ? "" : "border-t border-stone-300/70"}>
                <div className="grid sm:grid-cols-[4rem_1fr] gap-3 sm:gap-5 py-6 md:py-7">
                  <div className="text-[0.95rem] font-bold tracking-[0.18em] text-[#25638f]">
                    {item.n}
                  </div>
                  <div>
                    <h3 className="text-xl md:text-[1.3rem] font-semibold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-base md:text-[1.05rem] leading-7 md:leading-8 text-slate-700">
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
