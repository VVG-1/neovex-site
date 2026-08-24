import React from "react";
import { MonitorPlay, Play } from "lucide-react";

const caseStudies = [
  {
    businessType: "Commercial cleaning operations",
    workflowTitle: "Lead Intake -> Quote Follow-Up",
    before:
      "New inquiries had to be reviewed, copied into the operating systems, and followed up manually by the team.",
    automation:
      "Neovex built a workflow that captures the inquiry, updates the CRM, routes the request, triggers follow-up, and notifies the owner when action is needed.",
    workflowSteps: ["Inquiry received", "CRM updated", "Follow-up triggered", "Owner notified"],
    impactMetrics: [
      { value: null, placeholder: "[X hours/month reduced]", label: "Manual work reduced / month" },
      { value: null, placeholder: "[X manual steps removed]", label: "Manual steps removed" },
      { value: null, placeholder: "[X systems connected]", label: "Systems connected" },
    ],
    videoSrc: null,
    videoPoster: null,
    caseStudyHref: null,
    orientation: "visual-left",
  },
  {
    businessType: "Customer onboarding operations",
    workflowTitle: "Agreement -> Onboarding Setup",
    before:
      "Signed agreements, payment requests, customer communication, and internal setup tasks depended on several manual handoffs.",
    automation:
      "Neovex connected the agreement trigger to payment steps, welcome communication, internal project setup, and team notifications.",
    workflowSteps: ["Agreement signed", "Deposit requested", "Project created", "Team notified"],
    impactMetrics: [
      { value: null, placeholder: "[X recurring tasks automated]", label: "Recurring tasks automated" },
      { value: null, placeholder: "[X manual steps removed]", label: "Manual steps removed" },
      { value: null, placeholder: "[X response time change]", label: "Response time before and after" },
    ],
    videoSrc: null,
    videoPoster: null,
    caseStudyHref: null,
    orientation: "visual-right",
  },
  {
    businessType: "Back-office billing operations",
    workflowTitle: "Invoice -> Collections Follow-Up",
    before:
      "Billing records, reminders, account status updates, and overdue follow-up were checked and coordinated manually.",
    automation:
      "Neovex built a managed billing workflow that creates follow-up tasks, sends reminders, updates records, and escalates overdue accounts for review.",
    workflowSteps: ["Invoice created", "Reminder sent", "Record updated", "Exception escalated"],
    impactMetrics: [
      { value: null, placeholder: "[X hours/month reduced]", label: "Administrative work reduced / month" },
      { value: null, placeholder: "[X recurring tasks automated]", label: "Recurring tasks automated" },
      { value: null, placeholder: "[X systems connected]", label: "Systems connected" },
    ],
    videoSrc: null,
    videoPoster: null,
    caseStudyHref: null,
    orientation: "visual-left",
  },
];

export default function WorkflowProof() {
  return (
    <section id="results" className="bg-white py-20 px-6 border-t border-slate-100 scroll-mt-28 md:scroll-mt-32">
      <div className="max-w-[1360px] mx-auto">
        <div className="max-w-[1320px]">
          <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#25638f]">
            REAL-WORLD AUTOMATION
          </div>

          <h2 className="mt-4 text-3xl md:text-[2.85rem] md:leading-[1.12] font-bold text-slate-900 tracking-tight">
            See the Workflows Running in Real Businesses
          </h2>
          <p className="mt-6 max-w-[820px] text-lg md:text-xl leading-relaxed text-slate-700">
            Businesses are already using Neovex-built automations in day-to-day operations. Explore the case studies to see what was automated, how the workflow changed, and the impact after launch.
          </p>
        </div>

        <div className="mt-14 divide-y divide-slate-200">
          {caseStudies.map((caseStudy) => (
            <CaseStudyRow key={caseStudy.workflowTitle} caseStudy={caseStudy} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseStudyRow({ caseStudy }) {
  const visualOrder = caseStudy.orientation === "visual-right" ? "lg:order-2" : "";
  const contentOrder = caseStudy.orientation === "visual-right" ? "lg:order-1" : "";

  return (
    <article className="py-12 first:pt-0 last:pb-0">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1.35fr)_minmax(360px,0.95fr)] lg:items-center lg:gap-12">
        <DemoVisual caseStudy={caseStudy} className={visualOrder} />
        <CaseStudyContent caseStudy={caseStudy} className={contentOrder} />
      </div>
    </article>
  );
}

function DemoVisual({ caseStudy, className = "" }) {
  return (
    <div className={className}>
      <div className="group relative aspect-video overflow-hidden rounded-lg border border-slate-200 bg-[#111a2b]">
        {caseStudy.videoPoster ? (
          <img
            src={caseStudy.videoPoster}
            alt={`${caseStudy.workflowTitle} workflow demo poster`}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col justify-between p-5 sm:p-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8fb6d1]">
                  Workflow Demo
                </div>
                <div className="mt-2 text-sm font-semibold text-white">{caseStudy.workflowTitle}</div>
              </div>
              <div className="text-xs text-slate-400">Poster pending</div>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {caseStudy.workflowSteps.map((step, index) => (
                <div key={step} className="min-h-20 rounded-md border border-white/10 bg-white/[0.045] p-3">
                  <div className="text-[10px] font-semibold text-[#8fb6d1]">0{index + 1}</div>
                  <div className="mt-2 text-xs leading-5 text-slate-200">{step}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div
          className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/90 text-[#172235]"
          aria-label={`${caseStudy.workflowTitle} workflow demo placeholder`}
          role="img"
        >
          <Play className="h-5 w-5 fill-current" aria-hidden="true" />
        </div>

        <div className="absolute bottom-4 left-4 flex items-center gap-2 text-xs font-medium text-slate-300">
          <MonitorPlay className="h-4 w-4 text-[#8fb6d1]" aria-hidden="true" />
          <span>Video demo placeholder</span>
        </div>
      </div>
    </div>
  );
}

function CaseStudyContent({ caseStudy, className = "" }) {
  return (
    <div className={className}>
      <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#25638f]">
        {caseStudy.businessType}
      </div>
      <h3 className="mt-3 text-2xl md:text-[2rem] md:leading-tight font-semibold tracking-tight text-slate-900">
        {caseStudy.workflowTitle}
      </h3>

      <div className="mt-6 space-y-5">
        <ProofBlock label="Before">{caseStudy.before}</ProofBlock>
        <ProofBlock label="Automation">
          {caseStudy.automation}
          <WorkflowSteps steps={caseStudy.workflowSteps} />
        </ProofBlock>
        <Impact metrics={caseStudy.impactMetrics} />
      </div>

      <CaseStudyAction caseStudy={caseStudy} />
    </div>
  );
}

function CaseStudyAction({ caseStudy }) {
  if (caseStudy.videoSrc) {
    return (
      <div className="mt-7">
        <a
          href={caseStudy.videoSrc}
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#172235] hover:text-[#25638f] focus:outline-none focus:ring-2 focus:ring-[#8fb6d1] focus:ring-offset-4"
        >
          Watch Workflow <span aria-hidden="true">-&gt;</span>
        </a>
      </div>
    );
  }

  if (caseStudy.caseStudyHref) {
    return (
      <div className="mt-7">
        <a
          href={caseStudy.caseStudyHref}
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#172235] hover:text-[#25638f] focus:outline-none focus:ring-2 focus:ring-[#8fb6d1] focus:ring-offset-4"
        >
          View Case Study <span aria-hidden="true">-&gt;</span>
        </a>
      </div>
    );
  }

  return <div className="mt-7 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Demo asset pending</div>;
}

function ProofBlock({ label, children }) {
  return (
    <div>
      <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#25638f]">{label}</div>
      <div className="mt-2 text-sm leading-6 text-slate-700">{children}</div>
    </div>
  );
}

function WorkflowSteps({ steps }) {
  return (
    <div className="mt-3 flex flex-wrap gap-x-2 gap-y-1 text-xs font-medium text-slate-600">
      {steps.map((step, index) => (
        <React.Fragment key={step}>
          <span>{step}</span>
          {index < steps.length - 1 && <span className="text-[#25638f]">-&gt;</span>}
        </React.Fragment>
      ))}
    </div>
  );
}

function Impact({ metrics }) {
  const hasVerifiedMetrics = metrics.some((metric) => metric.value);

  return (
    <div>
      <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#25638f]">Impact</div>
      {hasVerifiedMetrics ? (
        <div className="mt-3 grid grid-cols-3 gap-5">
          {metrics
            .filter((metric) => metric.value)
            .map((metric) => (
              <div key={metric.label}>
                <div className="text-2xl font-semibold text-[#172235]">{metric.value}</div>
                <div className="mt-1 text-xs leading-5 text-slate-600">{metric.label}</div>
              </div>
            ))}
        </div>
      ) : (
        <div className="mt-3 grid gap-3 sm:grid-cols-3">
          {metrics.map((metric) => (
            <div key={metric.label} className="border-t border-slate-200 pt-3">
              <div className="text-sm font-semibold text-[#172235]">{metric.placeholder}</div>
              <div className="mt-1 text-xs leading-5 text-slate-600">{metric.label}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
