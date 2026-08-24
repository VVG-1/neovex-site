import React from "react";

const steps = [
  {
    n: "01",
    title: "Understand",
    desc: "We review the process, people, tools, decisions, and handoffs involved.",
  },
  {
    n: "02",
    title: "Build",
    desc: "We design the workflow, connect the systems, and automate the steps that do not need to be performed manually.",
  },
  {
    n: "03",
    title: "Launch",
    desc: "We test the workflow in real operating conditions and move it into production.",
  },
  {
    n: "04",
    title: "Manage",
    desc: "We monitor the automation, maintain integrations, and improve the workflow as the business changes.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="bg-white py-16 lg:py-[4.5rem] px-6 border-t border-stone-200 scroll-mt-28 md:scroll-mt-32"
    >
      <div className="max-w-7xl mx-auto text-center">
        <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#25638f]">
          Understand - Build - Launch - Manage
        </div>

        <h2 className="mt-4 text-3xl md:text-[2.85rem] md:leading-[1.12] font-bold text-slate-900 tracking-tight">
          From Manual Process to Managed Workflow
        </h2>

        <p className="mt-6 text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
          Neovex turns a manual business process into a workflow that connects systems, routes work, triggers next steps, and stays maintained after launch.
        </p>

        <ol className="relative mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-left border-y border-stone-200">
          <div className="hidden lg:block absolute left-[6%] right-[6%] top-[2.35rem] h-px bg-slate-200" aria-hidden="true" />
          {steps.map(({ n, title, desc }, index) => (
            <li
              key={title}
              className={[
                "relative",
                index > 0 ? "border-t border-stone-200" : "",
                index === 1 ? "md:border-l md:border-t-0 md:border-stone-200" : "",
                index === 2 ? "lg:border-l lg:border-t-0 lg:border-stone-200" : "",
                index === 3 ? "md:border-l md:border-stone-200 lg:border-t-0" : "",
              ].filter(Boolean).join(" ")}
            >
              <div className="relative py-6 md:px-6 lg:px-7 lg:py-7">
                <StepNumber n={n} />
                <div className="mt-5">
                  <h3 className="text-lg font-semibold tracking-tight text-slate-900">{title}</h3>
                  <p className="mt-2 text-slate-600 text-sm leading-6">{desc}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function StepNumber({ n }) {
  return (
    <div className="relative z-10 grid h-9 w-9 place-items-center rounded-full border border-[#25638f]/35 bg-white text-[12px] font-semibold tracking-[0.12em] text-[#25638f]">
      {n}
    </div>
  );
}
