import React from "react";

const tools = ["Website", "Email", "CRM", "Forms"];

const workflow = ["Triggers", "Rules", "Routing", "Handoffs"];

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

        <div className="mt-11 grid gap-6 lg:grid-cols-[minmax(0,1fr)_88px_minmax(0,1fr)_88px_minmax(0,1fr)] lg:items-start">
          <FlowZone label="YOUR TOOLS" items={tools} />
          <Connector />
          <FlowZone label="NEOVEX WORKFLOW" items={workflow} centered />
          <Connector />
          <FlowZone label="AUTOMATED NEXT STEPS" items={nextSteps} />
        </div>
      </div>
    </section>
  );
}

function FlowZone({ label, items, centered = false }) {
  return (
    <div className={centered ? "lg:text-center" : ""}>
      <div className="text-lg md:text-xl font-bold uppercase tracking-[0.08em] text-[#172235]">
        {label}
      </div>
      <div className={`mt-4 flex flex-col gap-2 text-base leading-7 text-slate-700 ${centered ? "lg:items-center" : ""}`}>
        {items.map((item) => (
          <div key={item} className="font-medium">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

function Connector() {
  return (
    <div
      className="flex justify-start py-1 text-[#607184] lg:justify-center lg:pt-2"
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
