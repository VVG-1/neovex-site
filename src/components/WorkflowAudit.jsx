import React from "react";
import { ArrowRight, BarChart3, FileSearch, Map, UsersRound } from "lucide-react";

const MEETINGS_URL = "https://meetings.hubspot.com/neovex";

const auditSteps = [
  {
    n: "01",
    Icon: FileSearch,
    title: "Workflow Review",
    desc: "Review the current process, systems, recurring tasks, and handoffs.",
    position: "left-[4%] top-[6%] max-w-[14rem]",
  },
  {
    n: "02",
    Icon: UsersRound,
    title: "Stakeholder Working Session",
    desc: "Understand where time is being spent, what gets delayed, and where exceptions occur.",
    position: "left-[18%] top-[53%] max-w-[17rem]",
  },
  {
    n: "03",
    Icon: BarChart3,
    title: "Opportunity Analysis",
    desc: "Evaluate workflows based on manual effort, business value, and automation feasibility.",
    position: "right-[11%] top-[16%] max-w-[15rem]",
  },
  {
    n: "04",
    Icon: Map,
    title: "Prioritized Roadmap",
    desc: "Identify the highest-value automation opportunities and deliver a prioritized roadmap and opportunity heat map.",
    position: "right-[4%] top-[60%] max-w-[16rem]",
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
    <div className="rounded-lg border border-[#263247] bg-[#1B2638]/55 p-5 md:p-6">
      <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-300">
        Audit Journey
      </div>

      <div className="relative mt-5 hidden min-h-[25rem] lg:block">
        <svg
          className="absolute inset-0 h-full w-full text-[#4f6178]"
          viewBox="0 0 680 420"
          fill="none"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M74 70 C150 84 118 204 226 226 C330 248 340 86 452 92 C560 98 544 285 615 318"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M602 308 L615 318 L600 323"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        {auditSteps.map(({ n, Icon, title, desc, position }) => (
          <div key={title} className={`absolute ${position}`}>
            <div className="flex items-center gap-2">
              <span className="grid h-8 w-8 place-items-center rounded-full border border-blue-300/35 bg-[#172235] text-[0.72rem] font-semibold tracking-[0.12em] text-blue-200">
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

            {n === "04" ? (
              <p className="mt-3 border-t border-[#344055] pt-3 text-[11px] font-semibold leading-5 text-blue-200">
                Output: Automation Opportunity Heat Map + Prioritized Roadmap
              </p>
            ) : null}
          </div>
        ))}
      </div>

      <ol className="mt-5 space-y-0 border-y border-[#344055] lg:hidden">
        {auditSteps.map(({ n, Icon, title, desc }, index) => (
          <li key={title} className={index === 0 ? "" : "border-t border-[#344055]"}>
            <div className="grid grid-cols-[2.5rem_minmax(0,1fr)] gap-3 py-4">
              <div className="pt-0.5">
                <span className="grid h-8 w-8 place-items-center rounded-full border border-blue-300/35 bg-[#172235] text-[0.72rem] font-semibold tracking-[0.12em] text-blue-200">
                  {n}
                </span>
              </div>

              <div>
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
                    Output: Automation Opportunity Heat Map + Prioritized Roadmap
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
