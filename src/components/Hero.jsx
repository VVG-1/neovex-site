import React from "react";
import { Bell, CheckCircle2, ClipboardList, CreditCard } from "lucide-react";

const MEETINGS_URL = "https://meetings.hubspot.com/neovex";

const workflowCards = [
  {
    icon: <ClipboardList className="w-5 h-5" />,
    title: "New request received",
    desc: "Captured and routed automatically.",
  },
  {
    icon: <CheckCircle2 className="w-5 h-5" />,
    title: "Customer approved",
    desc: "Documents and next steps triggered.",
  },
  {
    icon: <CreditCard className="w-5 h-5" />,
    title: "Invoice created",
    desc: "Billing workflow begins automatically.",
  },
  {
    icon: <Bell className="w-5 h-5" />,
    title: "Team notified",
    desc: "The right person receives the next task.",
  },
];

export default function Hero() {
  return (
    <section
      id="about"
      className="relative px-6 xl:px-8 pt-14 md:pt-16 pb-10 md:pb-12 w-full max-w-7xl xl:max-w-[1360px] mx-auto grid grid-cols-1 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,0.45fr)] items-center gap-7 lg:gap-12 xl:gap-14 scroll-mt-20 md:scroll-mt-24 overflow-hidden"
    >
      <div className="absolute inset-0 -z-20 bg-white" />
      <div className="text-left max-w-xl w-full min-w-0">
        <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-blue-700">
          DESIGNED &bull; BUILT &bull; MANAGED BY NEOVEX
        </div>

        <h1 className="mt-3 max-w-[13ch] sm:max-w-none text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.12] text-slate-900 [text-wrap:balance] hyphens-none">
          Automate the Work Behind Your Business.
        </h1>

        <p className="mt-5 text-base md:text-xl text-slate-600 max-w-[32ch] sm:max-w-[56ch]">
          Neovex designs, builds, and manages automated workflows across the tools your business already uses - reducing repetitive work, manual handoffs, and administrative overhead.
        </p>

        <div className="mt-6 md:mt-7 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <a
            href={MEETINGS_URL}
            aria-label="Discuss a workflow with Neovex"
            className="w-full sm:w-auto bg-slate-950 text-white px-6 py-3 text-base rounded-lg hover:bg-slate-800 transition inline-flex items-center justify-center"
          >
            Discuss a Workflow
          </a>
          <a
            href="#solutions"
            aria-label="See what Neovex automates"
            className="w-full sm:w-auto bg-white border border-stone-300 text-slate-800 px-6 py-3 text-base rounded-lg hover:bg-stone-50 transition inline-flex items-center justify-center"
          >
            See What We Automate
          </a>
        </div>
      </div>

      <div className="w-full max-w-[340px] sm:max-w-md lg:max-w-[400px] xl:max-w-[438px] justify-self-start lg:ml-2 xl:ml-0 mt-0 min-w-0">
        <WorkflowDiagram />
      </div>
    </section>
  );
}

function WorkflowDiagram() {
  return (
    <div className="relative mt-7 lg:mt-0 px-1 lg:px-0">
      <div className="absolute left-[1.375rem] lg:left-6 top-6 bottom-6 w-px bg-slate-200" aria-hidden="true" />

      <ol className="relative space-y-3">
        {workflowCards.map((step, index) => (
          <li key={step.title} className="relative grid grid-cols-[2.75rem_minmax(0,252px)] sm:grid-cols-[2.75rem_minmax(0,1fr)] lg:grid-cols-[3rem_minmax(0,1fr)] items-center gap-3 lg:gap-3.5">
            <div className="relative z-10 flex items-center justify-center">
              <div className="w-11 h-11 lg:w-12 lg:h-12 rounded-lg border border-slate-800 bg-slate-900 text-slate-100 flex items-center justify-center ring-4 ring-white">
                {step.icon}
              </div>
              {index < workflowCards.length - 1 ? (
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 h-3 flex items-center justify-center text-slate-400" aria-hidden="true">
                  <svg className="w-3 h-3" viewBox="0 0 16 16" fill="none">
                    <path d="M8 3v9M4.5 8.5 8 12l3.5-3.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              ) : null}
            </div>

            <div className="min-w-0 rounded-lg border border-stone-200 bg-white px-3.5 py-2.5">
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
    </div>
  );
}
