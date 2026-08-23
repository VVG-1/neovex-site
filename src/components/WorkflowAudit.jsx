import React from "react";
import { ArrowRight, ClipboardCheck, GitBranch, ListChecks, Map, SearchCheck, TimerReset } from "lucide-react";

const MEETINGS_URL = "https://meetings.hubspot.com/neovex";

const auditItems = [
  { Icon: SearchCheck, label: "Workflow review" },
  { Icon: ClipboardCheck, label: "Manual-step identification" },
  { Icon: GitBranch, label: "Systems and handoff mapping" },
  { Icon: ListChecks, label: "Automation opportunities" },
  { Icon: TimerReset, label: "Estimated time or effort reduction" },
  { Icon: Map, label: "Automation roadmap" },
];

export default function WorkflowAudit() {
  return (
    <section id="audit" className="bg-slate-950 text-white py-20 px-6 border-t border-slate-900 scroll-mt-28 md:scroll-mt-32">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[0.95fr_1.05fr] gap-10 lg:gap-14 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 text-blue-300 px-3 py-1 text-xs font-semibold ring-1 ring-blue-500/20">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-blue-400" aria-hidden="true" />
            Workflow Automation Audit
          </div>

          <h2 className="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight">
            Not Sure What to Automate First?
          </h2>

          <p className="mt-5 text-xl text-slate-200 font-semibold">
            Start with a Workflow Automation Audit.
          </p>
          <p className="mt-3 text-base md:text-lg text-slate-300 leading-8">
            We review how work moves through your business, identify repetitive and manual steps, and prioritize the workflows with the strongest automation opportunity.
          </p>

          <div className="mt-7 flex flex-col sm:flex-row gap-3">
            <a
              href={MEETINGS_URL}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-slate-900 px-5 py-3 text-sm font-semibold hover:bg-slate-100"
            >
              Start With an Audit <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center justify-center rounded-xl border border-slate-700 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-900"
            >
              View Ways to Work
            </a>
          </div>

          <p className="mt-5 text-sm text-slate-400">
            Already have a clearly defined workflow? You can skip the audit and start with a Workflow Build.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 md:p-6 shadow-xl">
          <div className="grid sm:grid-cols-2 gap-4">
            {auditItems.map(({ Icon, label }) => (
              <div key={label} className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                <Icon className="w-5 h-5 text-blue-300" />
                <div className="mt-3 text-sm font-semibold text-white">{label}</div>
              </div>
            ))}
          </div>

          <div className="mt-4 rounded-xl border border-blue-500/20 bg-blue-500/10 p-4">
            <div className="text-xs font-semibold uppercase tracking-wide text-blue-300">
              Output
            </div>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              A prioritized roadmap showing which workflow to automate first, what systems are involved, and what effort reduction should be evaluated after launch.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
