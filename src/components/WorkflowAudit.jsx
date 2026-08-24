import React from "react";
import { ArrowRight, BarChart3, FileSearch, Map, UsersRound } from "lucide-react";

const MEETINGS_URL = "https://meetings.hubspot.com/neovex";

const auditSteps = [
  {
    n: "01",
    Icon: FileSearch,
    title: "Workflow Review",
    desc: "Review the current process, systems, recurring tasks, handoffs, and operational pain points.",
  },
  {
    n: "02",
    Icon: UsersRound,
    title: "Stakeholder Working Session",
    desc: "Meet with the people closest to the work to understand where time is being spent, what gets delayed, and where exceptions occur.",
  },
  {
    n: "03",
    Icon: BarChart3,
    title: "Automation Opportunity Analysis",
    desc: "Evaluate workflows based on manual effort, frequency, business impact, complexity, and automation feasibility.",
  },
  {
    n: "04",
    Icon: Map,
    title: "Prioritized Automation Roadmap",
    desc: "Identify which workflows should be automated first and define the recommended sequence for implementation.",
  },
];

const criteria = [
  {
    title: "Business Value",
    items: ["Time saved", "Revenue impact", "Customer impact", "Error/risk reduction"],
  },
  {
    title: "Automation Feasibility",
    items: ["Process consistency", "System accessibility", "Exception complexity", "Implementation effort"],
  },
];

const heatMapPoints = [
  { label: "Lead Intake", x: "72%", y: "28%" },
  { label: "Customer Onboarding", x: "63%", y: "22%" },
  { label: "Invoice Follow-Up", x: "74%", y: "42%" },
  { label: "Reporting", x: "42%", y: "48%" },
  { label: "Approvals", x: "52%", y: "64%" },
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

        <div className="rounded-lg border border-[#263247] bg-[#1B2638]/70 p-5 md:p-6">
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-300">
              Audit Process
            </div>

            <ol className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {auditSteps.map(({ n, Icon, title, desc }, index) => (
                <li key={title} className="relative">
                  {index < auditSteps.length - 1 ? (
                    <div className="hidden xl:block absolute left-[2.25rem] right-[-1rem] top-4 h-px bg-[#344055]" aria-hidden="true" />
                  ) : null}

                  <div className="relative flex items-center gap-2">
                    <span className="grid h-8 w-8 place-items-center rounded-full border border-[#344055] bg-[#172235] text-[0.72rem] font-semibold tracking-[0.12em] text-blue-300">
                      {n}
                    </span>
                    <Icon className="h-4 w-4 text-slate-300" strokeWidth={1.8} aria-hidden="true" />
                  </div>

                  <h3 className="mt-3 text-sm font-semibold leading-5 text-white">
                    {title}
                  </h3>
                  <p className="mt-1.5 text-xs leading-5 text-slate-300">
                    {desc}
                  </p>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-6 border-t border-[#344055] pt-5">
            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-300">
              Audit Output
            </div>

            <div className="mt-4 grid gap-5 xl:grid-cols-[1.05fr_0.95fr]">
              <div>
                <h3 className="text-lg font-semibold text-white">
                  Automation Opportunity Heat Map
                </h3>
                <p className="mt-1.5 text-sm leading-6 text-slate-300">
                  A visual prioritization of the workflows with the strongest combination of business value and automation potential.
                </p>

                <div className="mt-4">
                  <HeatMap />
                  <p className="mt-2 text-[11px] leading-5 text-slate-400">
                    Illustrative workflow examples only. Actual positioning is determined during the audit.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white">
                  Prioritized Automation Roadmap
                </h3>
                <p className="mt-1.5 text-sm leading-6 text-slate-300">
                  A recommended sequence showing what to automate first, what systems are involved, and what should be evaluated after launch.
                </p>

                <div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-1">
                  {criteria.map((group) => (
                    <div key={group.title} className="border-t border-[#344055] pt-3">
                      <div className="text-xs font-semibold text-slate-100">
                        {group.title}
                      </div>
                      <ul className="mt-2 space-y-1.5 text-xs leading-5 text-slate-300">
                        {group.items.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span className="mt-2 h-1 w-1 rounded-full bg-blue-300/70" aria-hidden="true" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HeatMap() {
  return (
    <div className="relative h-48 rounded-lg border border-[#344055] bg-[#172235]/55 p-4">
      <div className="absolute inset-4 rounded-md border border-[#344055]/70" aria-hidden="true" />
      <div className="absolute left-1/2 top-4 bottom-4 w-px bg-[#344055]/70" aria-hidden="true" />
      <div className="absolute left-4 right-4 top-1/2 h-px bg-[#344055]/70" aria-hidden="true" />

      <div className="absolute right-4 top-4 h-[calc(50%-1rem)] w-[calc(50%-1rem)] rounded-md border border-blue-300/25 bg-blue-300/8" aria-hidden="true" />
      <div className="absolute right-6 top-6 text-[10px] font-semibold uppercase tracking-[0.12em] text-blue-200">
        Priority Opportunities
      </div>

      <div className="absolute -left-1 top-1/2 -translate-y-1/2 -rotate-90 text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-400">
        Business Value
      </div>
      <div className="absolute bottom-1 left-1/2 -translate-x-1/2 text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-400">
        Automation Feasibility
      </div>
      <div className="absolute left-4 bottom-5 text-[10px] text-slate-500">Low</div>
      <div className="absolute right-4 bottom-5 text-[10px] text-slate-500">High</div>
      <div className="absolute left-5 bottom-4 text-[10px] text-slate-500">Low</div>
      <div className="absolute left-5 top-4 text-[10px] text-slate-500">High</div>

      {heatMapPoints.map((point) => (
        <div
          key={point.label}
          className="absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap"
          style={{ left: point.x, top: point.y }}
        >
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full border border-blue-200/60 bg-slate-200" aria-hidden="true" />
            <span className="text-[10px] leading-none text-slate-200">{point.label}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
