import React from "react";
import { ClipboardPenLine, MailCheck, Shuffle, Unplug } from "lucide-react";

const items = [
  {
    Icon: ClipboardPenLine,
    title: "Repetitive Data Entry",
    desc: "Information gets copied between systems that should already be connected.",
    gradient: "from-blue-600 to-sky-500",
  },
  {
    Icon: MailCheck,
    title: "Manual Follow-Up",
    desc: "Employees have to remember when to email, text, call, or send the next step.",
    gradient: "from-violet-600 to-fuchsia-500",
  },
  {
    Icon: Shuffle,
    title: "Broken Handoffs",
    desc: "Work slows down when one person has to manually pass information to another.",
    gradient: "from-emerald-600 to-teal-500",
  },
  {
    Icon: Unplug,
    title: "Disconnected Tools",
    desc: "The systems contain the information, but they do not automatically move the work forward.",
    gradient: "from-amber-600 to-orange-500",
  },
];

export default function Problem() {
  return (
    <section
      id="problem"
      className="relative overflow-hidden py-20 md:py-24 px-6 bg-gradient-to-tr from-blue-50 via-blue-100 to-blue-50 border-t border-blue-100 scroll-mt-28 md:scroll-mt-32"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[0.92fr_1.08fr] gap-10 lg:gap-14 items-center">
          <div className="min-w-0">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 text-blue-700 px-3 py-1 text-xs font-semibold ring-1 ring-blue-100 mb-4">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-blue-600" aria-hidden="true" />
              The Problem
            </div>

            <h2 className="max-w-[14ch] sm:max-w-none text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              Too Much Work Still Depends on Someone Remembering the Next Step.
            </h2>
            <div className="mt-3 mb-6 h-1 w-20 rounded-full bg-blue-600/60" />

            <p className="max-w-[32ch] sm:max-w-none text-lg md:text-xl text-slate-700">
              Businesses often have information moving manually between forms, inboxes, spreadsheets, CRMs, calendars, billing tools, and employees. Every small handoff creates delay, repetitive work, and room for something to be missed.
            </p>
          </div>

          <ul role="list" className="grid sm:grid-cols-2 gap-5 md:gap-6 items-stretch min-w-0">
            {items.map(({ Icon, title, desc, gradient }) => (
              <li key={title} className="h-full">
                <PainTile Icon={Icon} title={title} desc={desc} gradient={gradient} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function PainTile({ Icon, title, desc, gradient }) {
  return (
    <div className="group relative rounded-2xl border border-gray-100 bg-white/70 backdrop-blur p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md h-full">
      <div className="flex flex-col gap-3">
        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${gradient} text-white flex items-center justify-center shadow-sm ring-1 ring-white/60`}>
          <Icon aria-hidden="true" className="w-7 h-7" strokeWidth={2.25} />
        </div>
        <h3 className="text-base md:text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-sm md:text-base leading-6 text-gray-600">{desc}</p>
      </div>
    </div>
  );
}
