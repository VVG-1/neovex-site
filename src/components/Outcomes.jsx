import React from "react";

const outcomes = [
  {
    number: "01",
    title: "Work Moves Faster",
    desc: "Information moves between systems automatically, and the next action happens when it should - without waiting for someone to copy data or remember the follow-up.",
    labels: ["Data movement", "Next steps"],
    metrics: [],
  },
  {
    number: "02",
    title: "Operations Become More Reliable",
    desc: "The right information reaches the right person at the right time, and recurring work no longer depends on someone remembering every step.",
    labels: ["Handoffs", "Reliability"],
    metrics: [],
  },
  {
    number: "03",
    title: "Teams Gain Capacity and Visibility",
    desc: "Teams can see where work stands, what has already happened, and spend less time moving information around manually.",
    labels: ["Visibility", "Capacity"],
    metrics: [],
  },
];

export default function Outcomes() {
  return (
    <section
      id="outcomes"
      className="relative overflow-hidden py-16 px-6 bg-white scroll-mt-28 md:scroll-mt-32"
    >
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#25638f] mb-4">
            OUTCOMES
          </div>

          <h2 className="text-3xl md:text-[2.85rem] md:leading-[1.12] font-bold text-slate-900">
            The Operational Impact
          </h2>

          <p className="mt-6 text-lg md:text-xl text-slate-700">
            Less manual work. Faster movement. Cleaner handoffs. More capacity for the work that still needs people.
          </p>
        </div>

        <div className="mt-12 border-y border-slate-200">
          {outcomes.map((outcome) => (
            <OutcomeBand key={outcome.title} {...outcome} />
          ))}
        </div>
      </div>
    </section>
  );
}

function OutcomeBand({ number, title, desc, labels, metrics }) {
  const hasMetrics = metrics.length > 0;

  return (
    <article className="grid gap-4 border-b border-slate-200 py-7 last:border-b-0 md:grid-cols-[72px_minmax(0,0.95fr)_minmax(260px,0.75fr)] md:gap-8 md:py-8 lg:grid-cols-[88px_minmax(0,0.9fr)_minmax(300px,0.7fr)]">
      <div className="text-sm font-semibold tracking-[0.16em] text-[#25638f]">{number}</div>

      <div>
        <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-slate-900">{title}</h3>
        <p className="mt-3 max-w-3xl text-sm md:text-base leading-7 text-slate-700">{desc}</p>
      </div>

      <div className="flex flex-col justify-between gap-5 md:items-end md:text-right">
        <div className="flex flex-wrap gap-x-4 gap-y-2 md:justify-end">
          {labels.map((label) => (
            <span key={label} className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
              {label}
            </span>
          ))}
        </div>

        {hasMetrics && (
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-1">
            {metrics.map((metric) => (
              <div key={metric.label}>
                <div className="text-2xl font-semibold text-[#172235]">{metric.value}</div>
                <div className="mt-1 text-xs leading-5 text-slate-600">{metric.label}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
