import React from "react";
import { ArrowRight, BarChart3, FileSearch, Map, UsersRound } from "lucide-react";

const MEETINGS_URL = "https://meetings.hubspot.com/neovex";

const auditSteps = [
  {
    n: "01",
    Icon: FileSearch,
    title: "Workflow Review",
    desc: "Review the process, systems, recurring tasks, and handoffs.",
    offset: "lg:ml-0",
  },
  {
    n: "02",
    Icon: UsersRound,
    title: "Stakeholder Working Session",
    desc: "Understand where time is spent, what gets delayed, and where exceptions occur.",
    offset: "lg:ml-20",
  },
  {
    n: "03",
    Icon: BarChart3,
    title: "Opportunity Analysis",
    desc: "Evaluate workflows based on business value, manual effort, and automation feasibility.",
    offset: "lg:ml-8",
  },
  {
    n: "04",
    Icon: Map,
    title: "Prioritized Roadmap",
    desc: "Identify the highest-value opportunities and what to automate first.",
    offset: "lg:ml-24",
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
              href={MEETINGS_URL}
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
    <div className="rounded-lg border border-[#263247] bg-[#1B2638]/45 p-5 md:p-6">
      <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-300">
        Audit Journey
      </div>

      <ol className="mt-5 max-w-2xl space-y-0 border-y border-[#344055]">
        {auditSteps.map(({ n, Icon, title, desc, offset }, index) => (
          <li key={title} className="relative">
            <div className={`relative grid grid-cols-[2.5rem_minmax(0,1fr)] gap-3 py-4 ${offset}`}>
              <div className="relative pt-0.5">
                <span className="relative z-10 grid h-8 w-8 place-items-center rounded-full border border-blue-300/35 bg-[#172235] text-[0.72rem] font-semibold tracking-[0.12em] text-blue-200">
                  {n}
                </span>

                {index < auditSteps.length - 1 ? (
                  <div
                    className={[
                      "pointer-events-none absolute left-4 top-9 h-10 w-16 border-t border-[#4f6178]",
                      index === 1 ? "-rotate-[28deg]" : "rotate-[28deg]",
                    ].join(" ")}
                    aria-hidden="true"
                  >
                    <span className="absolute right-0 top-[-3px] h-1.5 w-1.5 rotate-45 border-r border-t border-[#4f6178]" />
                  </div>
                ) : null}
              </div>

              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <Icon className="h-4 w-4 text-slate-300" strokeWidth={1.8} aria-hidden="true" />
                  <h3 className="text-sm font-semibold leading-5 text-white">
                    {title}
                  </h3>
                </div>
                <p className="mt-1.5 text-xs leading-5 text-slate-300">
                  {desc}
                </p>
                {n === "04" ? (
                  <p className="mt-3 border-t border-[#344055] pt-3 text-[11px] font-semibold leading-5 text-blue-200">
                    Output: Opportunity Heat Map + Prioritized Automation Roadmap
                  </p>
                ) : null}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
