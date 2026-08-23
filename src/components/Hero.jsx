import React from "react";
import { Bell, CheckCircle2, ClipboardList, CreditCard } from "lucide-react";

const MEETINGS_URL = "https://meetings.hubspot.com/neovex";

const workflowCards = [
  {
    icon: <ClipboardList className="w-6 h-6" />,
    grad: "from-blue-600 to-sky-500",
    title: "New request received",
    desc: "Captured and routed automatically.",
    label: "TRIGGER",
  },
  {
    icon: <CheckCircle2 className="w-6 h-6" />,
    grad: "from-emerald-600 to-teal-500",
    title: "Customer approved",
    desc: "Documents and next steps triggered.",
    label: "AUTOMATION",
  },
  {
    icon: <CreditCard className="w-6 h-6" />,
    grad: "from-violet-600 to-fuchsia-500",
    title: "Invoice created",
    desc: "Billing workflow begins automatically.",
    label: "AUTOMATION",
  },
  {
    icon: <Bell className="w-6 h-6" />,
    grad: "from-amber-600 to-orange-500",
    title: "Team notified",
    desc: "The right person receives the next task.",
    label: "HANDOFF",
  },
];

export default function Hero() {
  return (
    <section
      id="about"
      className="relative px-6 pt-14 md:pt-16 pb-12 md:pb-16 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-10 scroll-mt-20 md:scroll-mt-24 overflow-hidden"
    >
      <div className="absolute inset-0 -z-20 bg-gradient-to-tr from-blue-50 via-white to-slate-50" />
      <div className="pointer-events-none absolute -top-24 right-0 translate-x-1/3 h-72 w-72 md:h-[22rem] md:w-[22rem] rounded-full bg-blue-200/40 blur-3xl -z-10" />

      <div className="text-left max-w-xl w-full min-w-0">
        <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-blue-700">
          DESIGNED &bull; BUILT &bull; MANAGED BY NEOVEX
        </div>

        <h1 className="mt-3 max-w-[13ch] sm:max-w-none text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.08] text-slate-900 [text-wrap:balance] hyphens-none">
          Automate the Work Behind Your Business.
        </h1>

        <p className="mt-4 text-base md:text-xl text-slate-600 max-w-[32ch] sm:max-w-[56ch]">
          Neovex designs, builds, and manages automated workflows across the tools your business already uses - reducing repetitive work, manual handoffs, and administrative overhead.
        </p>

        <div className="mt-5 md:mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <a
            href={MEETINGS_URL}
            aria-label="Discuss a workflow with Neovex"
            className="w-full sm:w-auto bg-blue-600 text-white px-6 py-3 text-base rounded-xl hover:bg-blue-700 transition inline-flex items-center justify-center"
          >
            Discuss a Workflow
          </a>
          <a
            href="#solutions"
            aria-label="See what Neovex automates"
            className="w-full sm:w-auto bg-white border border-slate-200 text-slate-700 px-6 py-3 text-base rounded-xl hover:bg-slate-50 transition inline-flex items-center justify-center"
          >
            See What We Automate
          </a>
        </div>
      </div>

      <div className="w-full max-w-[340px] sm:max-w-md lg:max-w-lg mt-0 min-w-0">
        <WorkflowDiagram />
      </div>
    </section>
  );
}

function WorkflowDiagram() {
  return (
    <div className="relative mt-7 lg:mt-0 px-1 lg:px-0">
      <div className="absolute left-6 lg:left-1/2 lg:-translate-x-1/2 top-7 bottom-7 w-px bg-gradient-to-b from-blue-200 via-slate-300 to-blue-200" aria-hidden="true" />

      <ol className="relative space-y-5 lg:space-y-6">
        {workflowCards.map((step, index) => (
          <li key={step.title} className="relative grid grid-cols-[3rem_minmax(0,252px)] sm:grid-cols-[3rem_minmax(0,1fr)] lg:grid-cols-[1fr_3.5rem_1fr] items-center gap-3 lg:gap-5">
            <div className="hidden lg:block text-right">
              <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                {step.label}
              </div>
            </div>

            <div className="relative z-10 flex items-center justify-center">
              <div className={`w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-gradient-to-br ${step.grad} text-white flex items-center justify-center ring-4 ring-white shadow-sm`}>
                {step.icon}
              </div>
              {index < workflowCards.length - 1 ? (
                <div className="absolute -bottom-5 lg:-bottom-6 left-1/2 -translate-x-1/2 h-5 lg:h-6 flex items-center justify-center text-slate-400" aria-hidden="true">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none">
                    <path d="M8 3v9M4.5 8.5 8 12l3.5-3.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              ) : null}
            </div>

            <div className="min-w-0 rounded-2xl border border-slate-200 bg-white/70 p-4 lg:p-5">
              <div className="lg:hidden mb-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                {step.label}
              </div>
              <h3 className="text-sm lg:text-base font-semibold text-slate-900">
                {step.title}
              </h3>
              <p className="mt-1 text-xs lg:text-sm leading-5 text-slate-600">
                {step.desc}
              </p>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-5 max-w-[312px] sm:max-w-none lg:ml-[calc(50%+2.75rem)] rounded-xl border border-blue-100 bg-blue-50/60 px-4 py-3 text-xs font-medium leading-5 text-blue-800">
        Each completed step triggers the next handoff across the systems your business already uses.
      </div>
    </div>
  );
}
