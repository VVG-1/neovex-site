import React from "react";
import { ArrowRight } from "lucide-react";

const steps = [
  "Signed agreement",
  "Deposit request",
  "CRM updated",
  "Project created",
  "Welcome message sent",
  "Team notified",
];

export default function ExampleWorkflow() {
  return (
    <section className="bg-slate-950 text-white py-16 px-6 border-t border-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-8 items-center">
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-300">
              Example Workflow
            </div>
            <h2 className="mt-4 text-3xl md:text-[2.45rem] md:leading-[1.14] font-bold tracking-tight">
              One approval can start the next five steps.
            </h2>
            <p className="mt-3 text-slate-300 leading-7">
              The value is not a single task. It is the chain of work that starts automatically once the right condition is met.
            </p>
          </div>

          <ol className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {steps.map((step, index) => (
              <li key={step} className="rounded-lg border border-slate-800 bg-slate-900/70 p-4">
                <div className="text-xs font-semibold text-blue-300">0{index + 1}</div>
                <div className="mt-2 flex items-center justify-between gap-3">
                  <span className="text-sm font-semibold text-white">{step}</span>
                  {index < steps.length - 1 ? <ArrowRight className="w-4 h-4 text-slate-500 shrink-0" /> : null}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
