import React from "react";

const tools = ["Website", "Email", "CRM", "Forms"];

const nextSteps = ["Update CRM", "Send follow-up", "Create task", "Schedule", "Notify team"];

export default function ExampleWorkflow() {
  return (
    <section className="bg-white py-14 px-6 border-t border-slate-200">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#25638f]">
            HOW IT WORKS
          </div>
          <h2 className="mt-4 text-3xl md:text-[2.45rem] md:leading-[1.14] font-bold tracking-tight text-slate-900">
            We Connect the Tools You Already Use.
          </h2>
          <p className="mt-4 text-lg leading-7 text-slate-700">
            Neovex connects the systems already involved in your process and automates the handoffs between them.
          </p>
        </div>

        <div className="mt-9 grid gap-4 lg:grid-cols-[minmax(0,1fr)_72px_minmax(280px,0.8fr)_72px_minmax(0,1fr)] lg:items-center">
          <FlowZone label="YOUR TOOLS" items={tools} />
          <Connector />
          <WorkflowCenter />
          <Connector />
          <FlowZone label="AUTOMATED NEXT STEPS" items={nextSteps} />
        </div>
      </div>
    </section>
  );
}

function FlowZone({ label, items }) {
  return (
    <div>
      <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">{label}</div>
      <div className="mt-3 flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-md border border-slate-200 bg-[#F5F6F7] px-3 py-2 text-sm font-medium text-slate-700"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function WorkflowCenter() {
  return (
    <div className="rounded-lg border border-slate-300 bg-white px-5 py-5 text-center">
      <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#25638f]">
        NEOVEX WORKFLOW
      </div>
      <div className="mt-3 text-sm font-medium text-slate-600">
        Triggers · Rules · Routing · Handoffs
      </div>
    </div>
  );
}

function Connector() {
  return (
    <div
      className="flex justify-start py-1 text-[#607184] lg:justify-center lg:py-0"
      aria-hidden="true"
    >
      <svg
        className="hidden h-5 w-16 lg:block"
        viewBox="0 0 64 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M4 10H56" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M51 5L56 10L51 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <svg
        className="ml-3 h-10 w-5 lg:hidden"
        viewBox="0 0 20 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M10 4V32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M5 27L10 32L15 27" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}
