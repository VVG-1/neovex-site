// src/components/Problem.jsx
import React from "react";
import {
  PhoneCall,
  ClipboardList,
  CalendarDays,
  DollarSign,
  HelpCircle,
} from "lucide-react";

const GRADIENTS = {
  blue: "from-blue-600 to-sky-500",
  violet: "from-violet-600 to-fuchsia-500",
  emerald: "from-emerald-600 to-teal-500",
  amber: "from-amber-600 to-orange-500",
};

const DEFAULT_ITEMS = [
  { variant: "blue",    Icon: PhoneCall,     title: "Voicemail Costs You Jobs", desc: "Missed or late answers lose work." },
  { variant: "violet",  Icon: ClipboardList, title: "Slow Intake Loses Leads",  desc: "Delayed quotes kill intent." },
  { variant: "emerald", Icon: CalendarDays,  title: "Empty Slots = Lost Revenue", desc: "Manual scheduling wastes demand." },
  { variant: "amber",   Icon: DollarSign,    title: "Slow Invoicing Delays Cash", desc: "Manual AR slows cash flow." },
];

export default function Problem({
  items = DEFAULT_ITEMS,
  stat = 62,
  sourceHref = "https://411locals.us/small-business-owners-dont-answer-62-of-phone-calls/",
  sourceLabel = "411 Locals (2016)",
}) {
  return (
    <section
      id="problem"
      className="relative overflow-hidden py-20 md:py-24 px-6 bg-gradient-to-tr from-blue-50 via-blue-100 to-blue-50 border-t border-blue-100 scroll-mt-28 md:scroll-mt-32"
    >

      <div className="max-w-7xl mx-auto text-center">
        {/* badge */}
        <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 text-blue-700 px-3 py-1 text-xs font-semibold ring-1 ring-blue-100 mb-4">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-blue-600" aria-hidden="true" />
          The Problem
        </div>

        {/* heading + divider */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
          Most Revenue Leakage Happens Between the Call and the Close
        </h2>
        <div className="mx-auto mt-3 mb-6 h-1 w-20 rounded-full bg-blue-600/60" />

        {/* copy */}
  <p className="text-lg md:text-xl text-slate-700 max-w-3xl mx-auto">
  <span className="font-semibold text-slate-900">
    Manual handling, slow intake, and inconsistent follow-up quietly reduce conversion and cash flow.
  </span>{" "}
  Neovex installs a managed inbound ops layer that captures every call + web inquiry, collects the right details, and routes the next step inside your existing tools.
</p>


        {/* Pain tiles as a semantic list */}
        <ul role="list" className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 items-stretch">
          {items.map(({ variant, Icon, title, desc }, i) => (
            <li key={i} className="h-full">
              <PainTile
                Icon={Icon}
                title={title}
                desc={desc}
                gradient={GRADIENTS[variant] || GRADIENTS.blue}
              />
            </li>
          ))}
        </ul>

        {/* Why it matters chip */}
        <div className="mt-8 mb-3 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur text-slate-700 px-3 py-1 text-xs font-medium ring-1 ring-slate-200">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-blue-600" aria-hidden="true" />
            Fewer answered calls → fewer quotes → fewer booked jobs → slower cash
          </span>
        </div>

        {/* Stat bar (with “What’s this?” tooltip + source) */}
        <div className="mt-2 max-w-md mx-auto">
          <p id="stat-desc" className="sr-only">
            Estimated share of inbound calls that go unanswered.
          </p>

          <div className="flex items-center justify-between text-sm text-slate-600 mb-2">
            <span>Unanswered inbound calls</span>

            <span className="flex items-center gap-1.5">
              <span className="font-semibold text-slate-900">
                {typeof stat === "number" ? `${stat}%` : stat}
              </span>

              {/* Click to reveal source */}
              <details className="group relative">
                <summary
                  title="Show source"
                  className="list-none ml-1 flex items-center rounded-full p-1 text-slate-500 hover:text-slate-700 cursor-pointer
                             focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-blue-100"
                  aria-label="What's this number?"
                >
                  <HelpCircle className="w-4 h-4" />
                </summary>

                {/* Popover */}
                <div className="group-open:block hidden absolute right-0 mt-2 w-64 rounded-lg border border-slate-200 bg-white p-3 text-xs text-slate-600 shadow-lg z-10">
                  <p className="mb-1">
                    <span className="font-medium text-slate-900">Source:</span> {sourceLabel}
                  </p>
                  <a
                    href={sourceHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 hover:underline"
                  >
                    Small business owners don’t answer 62% of phone calls →
                  </a>
                </div>
              </details>
            </span>
          </div>

          <div className="h-2 w-full rounded-full bg-blue-200/60">
            <div
              role="progressbar"
              aria-label="Unanswered inbound calls (industry average)"
              aria-describedby="stat-desc"
              aria-valuenow={typeof stat === "number" ? stat : 62}
              aria-valuemin={0}
              aria-valuemax={100}
              className="h-2 rounded-full bg-blue-600"
              style={{ width: typeof stat === "number" ? `${stat}%` : "62%" }}
            />
          </div>
        </div>

        {/* Nudge */}
        <div className="mt-10">
          <a
            href="#outcomes"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800 transition"
          >
            See the outcomes Neovex drives →
          </a>
        </div>
      </div>
    </section>
  );
}

function PainTile({ Icon, title, desc, gradient }) {
  return (
    <div className="group relative rounded-2xl border border-gray-100 bg-white/70 backdrop-blur p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md h-full">
      <div className="flex flex-col items-center text-center gap-3">
        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient} text-white flex items-center justify-center shadow-sm ring-1 ring-white/60`}>
          <Icon aria-hidden="true" className="w-7 h-7" strokeWidth={2.25} />
        </div>
        <h3 className="text-base md:text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-sm md:text-base leading-6 text-gray-600">{desc}</p>
      </div>
    </div>
  );
}
