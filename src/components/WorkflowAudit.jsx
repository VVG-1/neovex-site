import React from "react";
import { ArrowRight } from "lucide-react";

const AUDIT_URL = "/workflow-automation-audit";

const auditSteps = [
  {
    n: "01",
    title: "Workflow Review",
    desc: "Review the process, systems, recurring tasks, and handoffs.",
    offset: "lg:ml-0",
  },
  {
    n: "02",
    title: "Stakeholder Working Session",
    desc: "Understand where time is spent, what gets delayed, and where exceptions occur.",
    offset: "lg:ml-14",
  },
  {
    n: "03",
    title: "Opportunity Analysis",
    desc: "Evaluate workflows based on business value, manual effort, and automation feasibility.",
    offset: "lg:ml-6",
  },
  {
    n: "04",
    title: "Prioritized Roadmap",
    desc: "Identify the highest-value opportunities and what to automate first.",
    offset: "lg:ml-16",
  },
];

export default function WorkflowAudit() {
  return (
    <section id="audit" className="bg-[#172235] text-white py-20 px-6 border-t border-[#263247] scroll-mt-28 md:scroll-mt-32">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[0.95fr_1.05fr] gap-10 lg:gap-14 items-center">
        <div>
          <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-300">
            Workflow Automation Audit
          </div>

          <h2 className="mt-5 text-3xl md:text-[2.85rem] md:leading-[1.12] font-bold tracking-tight">
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
              href={AUDIT_URL}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white text-slate-950 px-5 py-3 text-sm font-semibold hover:bg-slate-100"
            >
              Start With an Audit <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center justify-center rounded-lg border border-[#344055] px-5 py-3 text-sm font-semibold text-white hover:bg-[#1B2638]"
            >
              See Engagement Options
            </a>
          </div>

          <p className="mt-5 text-sm text-slate-400">
            Already have a clearly defined workflow? You can skip the audit and start with a Workflow Build.
          </p>
        </div>

        <AuditRoadmap />
      </div>
    </section>
  );
}

function AuditRoadmap() {
  return (
    <div>
      <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-300">
        Audit Journey
      </div>

      <ol className="relative mt-5 max-w-2xl space-y-0">
        <svg
          className="pointer-events-none absolute left-4 top-8 hidden h-[17.25rem] w-28 text-[#4f6178] lg:block"
          viewBox="0 0 112 276"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M0 0 V46 L56 84 V126 L8 166 V208 L72 252"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M62 250 L72 252 L66 260"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        {auditSteps.map(({ n, title, desc, offset }) => (
          <li key={title} className="relative">
            <div className={`relative grid grid-cols-[2.5rem_minmax(0,1fr)] gap-3 py-3.5 ${offset}`}>
              <div className="relative pt-0.5">
                <span className="relative z-10 grid h-8 w-8 place-items-center rounded-full border border-blue-300/35 bg-[#172235] text-[0.72rem] font-semibold tracking-[0.12em] text-blue-200">
                  {n}
                </span>
              </div>

              <div className="min-w-0">
                <h3 className="text-sm font-semibold leading-5 text-white">
                  {title}
                </h3>
                <p className="mt-1.5 text-xs leading-5 text-slate-300">
                  {desc}
                </p>
                {n === "04" ? (
                  <div className="mt-3">
                    <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-300/80">
                      Deliverable
                    </div>
                    <p className="mt-1 text-[11px] font-medium leading-5 text-slate-200">
                      Opportunity Heat Map + Prioritized Automation Roadmap
                    </p>
                  </div>
                ) : null}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
