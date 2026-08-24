import React from "react";

const steps = [
  "Agreement signed",
  "Deposit requested",
  "CRM updated",
  "Project created",
  "Welcome sent",
  "Team notified",
];

export default function ExampleWorkflow() {
  return (
    <section className="bg-slate-950 text-white py-12 px-6 border-t border-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-4xl">
          <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-300">
            ONE WORKFLOW, MULTIPLE STEPS
          </div>
          <h2 className="mt-4 text-3xl md:text-[2.45rem] md:leading-[1.14] font-bold tracking-tight">
            Automation Is More Than One Task.
          </h2>
          <p className="mt-3 text-slate-300 leading-7">
            A single trigger can update systems, request payment, create work, send communications, and notify the right people - without someone manually moving each step forward.
          </p>
        </div>

        <ol className="mt-8 flex flex-col gap-3 text-sm font-semibold text-slate-100 md:flex-row md:flex-wrap md:items-center md:gap-x-4 md:gap-y-3">
          {steps.map((step, index) => (
            <li key={step} className="flex items-center gap-3">
              <span>{step}</span>
              {index < steps.length - 1 ? (
                <span className="text-slate-500 md:text-slate-600" aria-hidden="true">
                  -&gt;
                </span>
              ) : null}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
