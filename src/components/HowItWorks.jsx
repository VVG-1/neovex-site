import React from "react";
import { Eye, Rocket, Settings2, Wrench } from "lucide-react";

const steps = [
  {
    n: "01",
    Icon: Eye,
    title: "Understand",
    desc: "We review the process, people, tools, decisions, and handoffs involved.",
  },
  {
    n: "02",
    Icon: Settings2,
    title: "Build",
    desc: "We design the workflow, connect the systems, and automate the steps that do not need to be performed manually.",
  },
  {
    n: "03",
    Icon: Rocket,
    title: "Launch",
    desc: "We test the workflow in real operating conditions and move it into production.",
  },
  {
    n: "04",
    Icon: Wrench,
    title: "Manage",
    desc: "We monitor the automation, maintain integrations, and improve the workflow as the business changes.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="bg-white py-20 px-6 border-t border-stone-200 scroll-mt-28 md:scroll-mt-32"
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

        <ol className="relative mt-12 grid grid-cols-1 md:grid-cols-4 gap-6 text-left">
          <div className="hidden md:block absolute top-16 left-[12%] right-[12%] h-px bg-slate-200" aria-hidden="true" />
          {steps.map(({ n, Icon, title, desc }) => (
            <li key={title} className="relative">
              <div className="min-h-full rounded-lg bg-white p-6 md:p-7 border border-stone-200 transition-colors hover:border-stone-300">
                <div className="flex items-center justify-between gap-4">
                  <StepNumber n={n} />
                  <div className="w-11 h-11 rounded-lg border border-stone-200 bg-stone-50 text-slate-700 flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="mt-5 text-xl font-semibold tracking-tight text-slate-900">{title}</h3>
                <p className="mt-2 text-slate-600 text-sm leading-6">{desc}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-10">
          <a
            href="https://meetings.hubspot.com/neovex"
            className="inline-flex items-center gap-2 bg-[#172235] text-white px-5 py-3 rounded-lg text-sm font-semibold hover:bg-[#1B2638] transition"
          >
            Discuss a Workflow
          </a>
        </div>
      </div>
    </section>
  );
}

function StepNumber({ n }) {
  return (
    <div className="inline-grid place-items-center rounded-full p-[1px] bg-[#25638f]">
      <div className="grid place-items-center h-10 w-10 rounded-full bg-white text-slate-900 text-[13px] font-semibold">
        {n}
      </div>
    </div>
  );
}
