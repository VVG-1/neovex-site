import React from "react";

const startSystems = ["Website forms", "Email", "Phone", "Spreadsheets", "CRM", "Shared inboxes"];

const nextSystems = ["CRM", "Calendar", "Billing", "Documents", "Notifications", "Reporting"];

const workflowLogic = ["Triggers", "Rules", "Routing", "Approvals", "Handoffs", "Automation logic"];

const principles = [
  {
    title: "Connect",
    desc: "We connect the systems already involved in the process so information can move without manual copy-and-paste.",
  },
  {
    title: "Automate",
    desc: "We configure the triggers, rules, routing, handoffs, and approvals that move the workflow forward.",
  },
  {
    title: "Keep People Where They Matter",
    desc: "Judgment calls, approvals, and exceptions are routed to the right person instead of forcing every decision into automation.",
  },
];

export default function ExampleWorkflow() {
  return (
    <section className="bg-[#F5F6F7] py-14 px-6 border-t border-slate-200">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-4xl">
          <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#25638f]">
            HOW AUTOMATION WORKS
          </div>
          <h2 className="mt-4 text-3xl md:text-[2.45rem] md:leading-[1.14] font-bold tracking-tight text-slate-900">
            Your Tools Stay. The Manual Work Doesn't.
          </h2>
          <div className="mt-4 max-w-3xl space-y-2 text-slate-700 leading-7">
            <p>
              Neovex connects the systems your business already relies on, then builds the workflow logic that moves information, decisions, and next steps between them automatically.
            </p>
            <p>You keep the tools that work. We connect the gaps between them.</p>
          </div>
        </div>

        <SystemsFlow />
        <Principles />
      </div>
    </section>
  );
}

function SystemsFlow() {
  return (
    <div className="mt-10 grid gap-5 lg:grid-cols-[minmax(0,0.9fr)_auto_minmax(260px,0.9fr)_auto_minmax(0,0.9fr)] lg:items-center">
      <SystemGroup label="WHERE WORK STARTS" items={startSystems} />
      <MobileFlowArrow />
      <FlowArrow className="hidden lg:flex" />
      <WorkflowCore />
      <MobileFlowArrow />
      <FlowArrow className="hidden lg:flex" />
      <SystemGroup label="WHERE WORK MOVES NEXT" items={nextSystems} />
    </div>
  );
}

function SystemGroup({ label, items }) {
  return (
    <div>
      <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">{label}</div>
      <div className="mt-3 flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-md border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function WorkflowCore() {
  return (
    <div className="relative rounded-lg border border-slate-300 bg-white px-5 py-5 shadow-none">
      <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#25638f]">
        NEOVEX WORKFLOW
      </div>
      <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3">
        {workflowLogic.map((item) => (
          <div key={item} className="flex items-center gap-2 text-sm text-slate-700">
            <span className="h-1.5 w-1.5 rounded-full bg-[#25638f]/65" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function FlowArrow({ className = "" }) {
  return (
    <div className={`items-center justify-center text-slate-400 ${className}`} aria-hidden="true">
      <span className="block h-px w-10 bg-slate-300" />
      <span className="-ml-1 text-sm">-&gt;</span>
    </div>
  );
}

function MobileFlowArrow() {
  return (
    <div className="flex justify-start pl-2 text-sm text-slate-400 lg:hidden" aria-hidden="true">
      |
      <span className="ml-2">v</span>
    </div>
  );
}

function Principles() {
  return (
    <div className="mt-9 grid border-y border-slate-200 md:grid-cols-3">
      {principles.map((principle) => (
        <div key={principle.title} className="py-5 md:px-6 md:first:pl-0 md:last:pr-0 md:[&:not(:last-child)]:border-r md:[&:not(:last-child)]:border-slate-200">
          <h3 className="text-base font-semibold text-slate-900">{principle.title}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-700">{principle.desc}</p>
        </div>
      ))}
    </div>
  );
}
