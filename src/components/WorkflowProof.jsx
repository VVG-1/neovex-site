import React from "react";
import { MonitorPlay } from "lucide-react";

const examples = [
  {
    label: "Business example 01",
    workflow: "Customer request to scheduled work",
    desc: "A customer inquiry is captured, routed, followed up, and reflected in the operating systems without manual re-entry.",
  },
  {
    label: "Business example 02",
    workflow: "Agreement to onboarding",
    desc: "Signed documents trigger payment requests, internal setup, welcome communication, and next-step assignment.",
  },
  {
    label: "Business example 03",
    workflow: "Invoice to collections follow-up",
    desc: "Billing records, reminders, account status, and escalation tasks move through a managed workflow.",
  },
];

const outcomePlaceholders = [
  "Hours of manual work reduced per month",
  "Manual steps removed",
  "Response time before and after",
  "Systems connected",
  "Recurring tasks automated",
];

export default function WorkflowProof() {
  return (
    <section id="results" className="bg-white py-20 px-6 border-t border-slate-100 scroll-mt-28 md:scroll-mt-32">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 text-blue-700 px-3 py-1 text-xs font-semibold ring-1 ring-blue-100">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-blue-600" aria-hidden="true" />
            Real Automation
          </div>

          <h2 className="mt-4 text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            See the Workflows in Action
          </h2>
          <div className="mx-auto mt-3 mb-8 h-1 w-20 rounded-full bg-gradient-to-r from-blue-600 to-sky-400" />
          <p className="text-lg md:text-xl text-slate-700">
            Demo areas are ready for deployed workflow walkthroughs, before-and-after states, and measurable outcomes from operating businesses.
          </p>
        </div>

        <div className="mt-12 grid lg:grid-cols-3 gap-6">
          {examples.map((example) => (
            <article key={example.workflow} className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
              <div className="aspect-video bg-slate-950 flex items-center justify-center relative">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-600 to-sky-400" />
                <div className="text-center">
                  <div className="mx-auto w-14 h-14 rounded-2xl bg-white/10 text-blue-200 flex items-center justify-center ring-1 ring-white/10">
                    <MonitorPlay className="w-7 h-7" />
                  </div>
                  <div className="mt-3 text-sm font-semibold text-white">Video demo placeholder</div>
                  <div className="mt-1 text-xs text-slate-400">Add real walkthrough asset</div>
                </div>
              </div>

              <div className="p-6">
                <div className="text-xs font-semibold uppercase tracking-wide text-blue-700">
                  {example.label}
                </div>
                <h3 className="mt-2 text-xl font-semibold text-slate-900">{example.workflow}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{example.desc}</p>

                <div className="mt-5 grid gap-3">
                  <State label="Before state" value="Manual handoff details to be added." tone="manual" />
                  <State label="Automated state" value="Automated workflow details to be added." tone="auto" />
                </div>

                <div className="mt-5 rounded-xl bg-blue-50 border border-blue-100 p-4">
                  <div className="text-xs font-semibold uppercase tracking-wide text-blue-700">
                    Measurable outcome
                  </div>
                  <ul className="mt-3 space-y-2 text-sm text-slate-700">
                    {outcomePlaceholders.slice(0, 3).map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-600 shrink-0" />
                        <span>{item}: placeholder</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function State({ label, value, tone }) {
  const styles = tone === "manual" ? "bg-rose-50 border-rose-100 text-rose-800" : "bg-emerald-50 border-emerald-100 text-emerald-800";

  return (
    <div className={`rounded-xl border p-3 ${styles}`}>
      <div className="text-[11px] font-semibold uppercase tracking-wide">{label}</div>
      <div className="mt-1 text-sm">{value}</div>
    </div>
  );
}
