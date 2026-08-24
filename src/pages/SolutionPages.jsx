import React, { useEffect } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import BeforeAfter from "../components/BeforeAfter";
import Footer from "../components/Footer";
import WorkflowProof from "../components/WorkflowProof";

const MEETINGS_URL = "https://meetings.hubspot.com/neovex";

const automationCategories = [
  ["Lead Management", "Capture, qualify, route, follow up, schedule, and update the CRM."],
  ["Customer Onboarding", "Trigger agreements, forms, payments, welcome communication, and internal setup."],
  ["Scheduling & Coordination", "Automate bookings, reminders, assignments, confirmations, and calendar updates."],
  ["Quotes & Approvals", "Generate, send, track, follow up, and trigger the next step after approval."],
  ["Billing & Collections", "Create invoices, send reminders, update records, and escalate overdue accounts."],
  ["Administrative Work", "Automate email processing, data entry, document routing, reporting, and internal notifications."],
];

const processSteps = [
  ["01", "Discovery Call", "Walk through the process, systems involved, and where work is manual today."],
  ["02", "Workflow Design", "Map the process and define triggers, routing, approvals, and exceptions."],
  ["03", "Build & Launch", "Connect systems, configure automation, test scenarios, and launch."],
  ["04", "Manage & Improve", "Monitor, maintain, troubleshoot, and adjust the workflow as the business changes."],
];

const heroJourney = [
  ["01", "Review the process", "Understand how the workflow currently moves."],
  ["02", "Connect the systems", "Link the tools and data already involved."],
  ["03", "Automate the handoffs", "Configure triggers, routing, approvals, and next steps."],
  ["04", "Manage after launch", "Monitor, maintain, and improve the workflow."],
];

const workflowComparisonRows = [
  { stage: "Lead Intake", manual: "Someone reviews the inquiry and enters the details", auto: "Captured and structured automatically" },
  { stage: "Follow-Up", manual: "Someone remembers to email, text, or call", auto: "Follow-up triggers automatically" },
  { stage: "Scheduling", manual: "Dates and availability are coordinated manually", auto: "Booking steps and confirmations are triggered" },
  { stage: "Customer Approval", manual: "Approval is chased through email or messages", auto: "Sent, tracked, and used to trigger the next step" },
  { stage: "Payment / Deposit", manual: "Someone sends the request and checks status", auto: "Payment requests trigger and status updates automatically" },
  { stage: "Internal Handoff", manual: "Information is passed from person to person", auto: "The right person receives the context automatically" },
  { stage: "Exceptions", manual: "Problems are noticed when someone catches them", auto: "Exceptions are flagged for human attention" },
];

const auditSteps = [
  ["01", "Workflow Review", "Review the process, systems, recurring tasks, and handoffs."],
  ["02", "Stakeholder Working Session", "Understand where time is spent, what gets delayed, and where exceptions occur."],
  ["03", "Opportunity Analysis", "Evaluate workflows based on business value, manual effort, and automation feasibility."],
  ["04", "Prioritized Roadmap", "Identify the highest-value opportunities and what to automate first."],
];

const managedItems = [
  ["Monitoring", "Watch workflow behavior and identify failures or unusual activity."],
  ["Integration Maintenance", "Maintain connections between the systems involved."],
  ["Troubleshooting", "Investigate and resolve workflow issues."],
  ["Workflow Adjustments", "Update rules, routing, timing, and handoffs as the process changes."],
  ["Optimization", "Identify opportunities to reduce additional manual work."],
  ["Minor Improvements", "Make small workflow enhancements without treating every adjustment as a new project."],
];

function Seo({ title, description }) {
  useEffect(() => {
    const previousTitle = document.title;
    const meta = document.querySelector('meta[name="description"]');
    const previousDescription = meta?.getAttribute("content");

    document.title = title;
    if (meta) meta.setAttribute("content", description);

    return () => {
      document.title = previousTitle;
      if (meta && previousDescription) meta.setAttribute("content", previousDescription);
    };
  }, [title, description]);

  return null;
}

function Eyebrow({ children, light = false }) {
  return (
    <div className={`text-[11px] font-semibold uppercase tracking-[0.18em] ${light ? "text-blue-300" : "text-[#25638f]"}`}>
      {children}
    </div>
  );
}

function PageHero({ eyebrow, title, copy, primary, secondary, secondaryHref = "#details", journeyItems }) {
  return (
    <section className="px-6 pt-24 md:pt-28 pb-14 bg-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[minmax(0,0.56fr)_minmax(0,0.44fr)] gap-10 lg:gap-14 items-center">
        <div className="max-w-2xl">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-4 text-4xl md:text-6xl md:leading-[1.08] font-bold tracking-tight text-slate-900">
            {title}
          </h1>
          <p className="mt-6 text-lg md:text-xl leading-8 text-slate-700">{copy}</p>
          <div className="mt-7 flex flex-col sm:flex-row gap-3">
            <a href={MEETINGS_URL} className="inline-flex items-center justify-center rounded-lg bg-[#172235] px-6 py-3 text-base font-semibold text-white hover:bg-[#1B2638]">
              {primary} <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a href={secondaryHref} className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-800 hover:bg-slate-50">
              {secondary}
            </a>
          </div>
        </div>

        {journeyItems ? (
          <div className="border-y border-slate-200 py-5">
            {journeyItems.map(([n, item, desc], index, items) => (
              <div key={item} className="relative grid grid-cols-[34px_minmax(0,1fr)] gap-4 border-b border-slate-200 py-3.5 last:border-b-0">
                <div className="relative">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full border border-[#25638f]/35 text-[10px] font-semibold text-[#25638f]">
                    {n}
                  </div>
                  {index < items.length - 1 ? (
                    <div className="absolute left-[13px] top-8 h-[calc(100%-0.5rem)] w-px bg-slate-200" aria-hidden="true" />
                  ) : null}
                </div>
                <div>
                  <div className="text-lg font-semibold text-[#172235]">{item}</div>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="border-y border-slate-200 py-4">
            {["Review the process", "Connect the systems", "Automate the handoffs", "Manage after launch"].map((item) => (
              <div key={item} className="border-b border-slate-200 py-4 last:border-b-0">
                <div className="text-lg font-semibold text-[#172235]">{item}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function BuildJourneySection() {
  return (
    <section className="px-6 py-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <SectionIntro eyebrow="FROM DISCOVERY TO LAUNCH" title="From Manual Process to Managed Workflow." />
        <div className="relative mt-12">
          <div className="absolute left-0 right-0 top-[18px] hidden h-px bg-slate-300 lg:block" aria-hidden="true" />
          <ol className="relative grid gap-8 lg:grid-cols-4 lg:gap-6">
            {processSteps.map(([n, step, desc]) => (
              <li key={step} className="relative">
                <div className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full border border-[#25638f]/40 bg-white text-xs font-semibold text-[#25638f]">
                  {n}
                </div>
                <h3 className="mt-5 text-xl font-semibold text-[#172235]">{step}</h3>
                <p className="mt-2 max-w-sm text-sm leading-6 text-slate-700">{desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function AuditJourneySection() {
  return (
    <section className="px-6 py-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <SectionIntro eyebrow="AUDIT JOURNEY" title="Review, Discuss, Analyze, Prioritize." />
        <div className="relative mt-12">
          <div className="absolute left-0 right-0 top-[18px] hidden h-px bg-slate-300 lg:block" aria-hidden="true" />
          <ol className="relative grid gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-7">
            {auditSteps.map(([n, step, desc]) => (
              <li key={step} className="relative">
                <div className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full border border-[#25638f]/40 bg-white text-xs font-semibold text-[#25638f]">
                  {n}
                </div>
                <h3 className="mt-5 text-xl font-semibold text-[#172235]">{step}</h3>
                <p className="mt-2 max-w-sm text-sm leading-6 text-slate-700">{desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function AuditDeliverablesSection() {
  const deliverables = [
    ["Automation Opportunity Heat Map", "Prioritizes opportunities based on business value and automation feasibility."],
    ["Prioritized Workflow Roadmap", "Shows what should be automated first and what can wait."],
    ["Recommended Next Steps", "Defines whether the opportunity should move into a Workflow Build, larger Automation System, or remain manual."],
  ];

  return (
    <section className="px-6 py-16 md:py-20 bg-[#F3F5F7]">
      <div className="max-w-7xl mx-auto">
        <SectionIntro eyebrow="WHAT YOU RECEIVE" title="A Clear Automation Roadmap." />
        <div className="mt-11 grid gap-0 border-y border-slate-200 bg-white/55 md:grid-cols-3">
          {deliverables.map(([title, desc], index) => (
            <article key={title} className={`${index > 0 ? "border-t border-slate-200 md:border-l md:border-t-0" : ""} py-7 md:px-7 lg:py-9`}>
              <h3 className="text-2xl font-semibold tracking-tight text-[#172235]">{title}</h3>
              <p className="mt-4 text-base leading-7 text-slate-700">{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function AuditPricingBlock() {
  const items = ["Workflow review", "Stakeholder working session", "Automation opportunity heat map", "Prioritized roadmap", "Recommended next steps"];

  return (
    <section className="px-6 py-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <article className="rounded-lg border border-slate-200 bg-white p-7 md:p-9 lg:grid lg:grid-cols-[0.42fr_0.58fr] lg:gap-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Workflow Automation Audit</h2>
            <div className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-[#172235]">$1,500</div>
            <p className="mt-4 max-w-md text-base leading-7 text-slate-700">
              A focused assessment to identify and prioritize the strongest automation opportunities.
            </p>
            <a href={MEETINGS_URL} className="mt-7 inline-flex items-center justify-center rounded-lg bg-[#172235] px-5 py-3 text-sm font-semibold text-white hover:bg-[#1B2638]">
              Start With an Audit
            </a>
          </div>

          <div className="mt-9 lg:mt-0">
            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#25638f]">What&apos;s included</div>
            <ul className="mt-5 grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
              {items.map((item) => (
                <li key={item} className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#25638f]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-7 border-t border-slate-200 pt-5 text-sm leading-6 text-slate-600">
              Already know exactly what needs to be automated?
              <br />
              <a href="/#pricing" className="font-semibold text-[#25638f] hover:text-[#172235]">
                Start with a Workflow Build -&gt;
              </a>
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}

function HumanLoopSection() {
  const flow = ["Automated workflow", "Exception / approval", "Human review", "Workflow continues"];

  return (
    <section className="px-6 py-16 bg-[#F3F5F7]">
      <div className="max-w-7xl mx-auto grid gap-10 lg:grid-cols-[0.42fr_0.58fr] lg:items-center lg:gap-14">
        <SectionIntro eyebrow="HUMANS STAY IN THE LOOP" title="Automation Should Know When to Stop." />
        <div>
          <p className="max-w-2xl text-lg leading-8 text-slate-700">
            Approvals, exceptions, judgment calls, and unusual cases can be routed to the right person instead of being forced through automation.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-[minmax(0,1fr)_52px_minmax(0,1fr)_52px_minmax(0,1fr)_52px_minmax(0,1fr)] md:items-center">
            {flow.map((item, index) => (
              <React.Fragment key={item}>
                <div className="text-base font-semibold text-[#172235]">{item}</div>
                {index < flow.length - 1 ? <Connector /> : null}
              </React.Fragment>
            ))}
          </div>
          <p className="mt-8 max-w-2xl text-base leading-7 text-slate-700">
            The goal is to remove repetitive work while keeping human decision-making where it belongs.
          </p>
        </div>
      </div>
    </section>
  );
}

function ManagedLifecycleSection() {
  const stages = [
    ["01", "Workflow Build", "Design and build the automation."],
    ["02", "Launch", "Test and move the workflow into production."],
    ["03", "Managed Automation", "Monitor, maintain, troubleshoot, and adjust."],
    ["04", "Ongoing Improvement", "Refine the workflow as the business changes."],
  ];

  return (
    <section id="how-it-fits" className="px-6 py-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <SectionIntro
          eyebrow="HOW IT FITS TOGETHER"
          title="Workflow Build, Launch, Managed Automation, Ongoing Improvement."
          copy="Managed Automation is optional after launch. Some clients operate completed workflows themselves, while others keep Neovex involved for monitoring, maintenance, troubleshooting, adjustments, and improvement."
        />
        <div className="relative mt-12">
          <div className="absolute left-0 right-0 top-[18px] hidden h-px bg-slate-300 lg:block" aria-hidden="true" />
          <ol className="relative grid gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-7">
            {stages.map(([n, title, desc]) => (
              <li key={title} className="relative">
                <div className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full border border-[#25638f]/40 bg-white text-xs font-semibold text-[#25638f]">
                  {n}
                </div>
                <h3 className="mt-5 text-xl font-semibold text-[#172235]">{title}</h3>
                <p className="mt-2 max-w-sm text-sm leading-6 text-slate-700">{desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function ManagedPricingBlock() {
  const items = ["Monitoring", "Integration maintenance", "Troubleshooting", "Workflow adjustments", "Optimization", "Minor workflow improvements"];

  return (
    <section className="px-6 py-16 bg-[#F3F5F7]">
      <div className="max-w-7xl mx-auto">
        <article className="rounded-lg border border-slate-200 bg-white p-7 md:p-9 lg:grid lg:grid-cols-[0.42fr_0.58fr] lg:gap-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Managed Automation</h2>
            <div className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-[#172235]">Starting at $1,500/month</div>
            <p className="mt-4 max-w-md text-base leading-7 text-slate-700">
              Ongoing monitoring, maintenance, troubleshooting, and workflow improvements after launch.
            </p>
            <a href={MEETINGS_URL} className="mt-7 inline-flex items-center justify-center rounded-lg bg-[#172235] px-5 py-3 text-sm font-semibold text-white hover:bg-[#1B2638]">
              Discuss Management
            </a>
          </div>

          <div className="mt-9 lg:mt-0">
            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#25638f]">What&apos;s included</div>
            <ul className="mt-5 grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
              {items.map((item) => (
                <li key={item} className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#25638f]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-7 border-t border-slate-200 pt-5 text-sm leading-6 text-slate-600">
              Final scope depends on workflow complexity, systems involved, and the level of ongoing support required.
            </p>
            <p className="mt-4 text-sm leading-6 text-slate-600">
              Need a workflow built first?
              <br />
              <a href="/workflow-automation" className="font-semibold text-[#25638f] hover:text-[#172235]">
                Explore Workflow Automation -&gt;
              </a>
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}

function SectionIntro({ eyebrow, title, copy, light = false }) {
  return (
    <div className="max-w-3xl">
      <Eyebrow light={light}>{eyebrow}</Eyebrow>
      <h2 className={`mt-4 text-3xl md:text-[2.85rem] md:leading-[1.12] font-bold tracking-tight ${light ? "text-white" : "text-slate-900"}`}>
        {title}
      </h2>
      {copy ? <p className={`mt-5 text-lg md:text-xl leading-8 ${light ? "text-slate-300" : "text-slate-700"}`}>{copy}</p> : null}
    </div>
  );
}

function TextGrid({ items, cols = "lg:grid-cols-3", dark = false }) {
  return (
    <div className={`mt-10 grid md:grid-cols-2 ${cols} border-y ${dark ? "border-white/15" : "border-slate-200"}`}>
      {items.map(([title, desc], index) => (
        <article
          key={title}
          className={`${index > 0 ? `${dark ? "border-white/15" : "border-slate-200"} border-t md:border-t-0 md:border-l` : ""} py-6 md:px-6`}
        >
          <h3 className={`text-xl font-semibold ${dark ? "text-white" : "text-[#172235]"}`}>{title}</h3>
          <p className={`mt-2 text-base leading-7 ${dark ? "text-slate-300" : "text-slate-700"}`}>{desc}</p>
        </article>
      ))}
    </div>
  );
}

function FlowGraphic({
  tools = ["Website", "Email", "CRM", "Forms", "Calendars", "Payment systems"],
  workflow = ["Triggers", "Rules", "Routing", "Approvals", "Handoffs", "Exceptions"],
  next = ["Update records", "Send follow-up", "Create tasks", "Schedule", "Notify team", "Trigger payment or approval"],
}) {
  return (
    <div className="mt-11 grid gap-6 lg:grid-cols-[minmax(0,1fr)_88px_minmax(0,1fr)_88px_minmax(0,1fr)] lg:items-start">
      <FlowZone label="Your Tools" items={tools} />
      <Connector />
      <FlowZone label="Neovex Workflow" items={workflow} centered />
      <Connector />
      <FlowZone label="Automated Next Steps" items={next} />
    </div>
  );
}

function FlowZone({ label, items, centered = false }) {
  return (
    <div className={centered ? "lg:text-center" : ""}>
      <div className="text-lg md:text-xl font-bold uppercase tracking-[0.08em] text-[#172235]">{label}</div>
      <div className={`mt-4 flex flex-col gap-2 text-base leading-7 text-slate-700 ${centered ? "lg:items-center" : ""}`}>
        {items.map((item) => <div key={item} className="font-medium">{item}</div>)}
      </div>
    </div>
  );
}

function Connector() {
  return (
    <div className="flex justify-start py-1 text-[#607184] lg:justify-center lg:pt-2" aria-hidden="true">
      <svg className="hidden h-5 w-16 lg:block" viewBox="0 0 64 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 10H56" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M51 5L56 10L51 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <svg className="ml-3 h-10 w-5 lg:hidden" viewBox="0 0 20 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 4V32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M5 27L10 32L15 27" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

function StepBand({ eyebrow, title, steps }) {
  return (
    <section className="px-6 py-16 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto">
        <SectionIntro eyebrow={eyebrow} title={title} />
        <ol className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 border-y border-slate-200">
          {steps.map(([n, step, desc], index) => (
            <li key={step} className={`${index > 0 ? "border-t border-slate-200 md:border-t-0 md:border-l" : ""} border-slate-200 py-6 md:px-6`}>
              <div className="text-sm font-semibold tracking-[0.16em] text-[#25638f]">{n}</div>
              <h3 className="mt-4 text-xl font-semibold text-[#172235]">{step}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">{desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function PricingPanel({ title, price, items, cta, note }) {
  return (
    <section className="px-6 py-16 bg-[#F5F6F7] border-b border-slate-200">
      <div className="max-w-7xl mx-auto">
        <article className="max-w-3xl rounded-lg border border-slate-200 bg-white p-7 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">{title}</h2>
          <div className="mt-3 text-2xl font-bold text-[#172235]">{price}</div>
          <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-sm text-slate-700">
            {items.map((item) => (
              <li key={item} className="flex gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#25638f]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          {note ? <p className="mt-6 text-sm leading-6 text-slate-600">{note}</p> : null}
          <a href={MEETINGS_URL} className="mt-7 inline-flex items-center justify-center rounded-lg bg-[#172235] px-5 py-3 text-sm font-semibold text-white hover:bg-[#1B2638]">
            {cta}
          </a>
        </article>
      </div>
    </section>
  );
}

function FinalCta({ title, primary, secondary, secondaryHref, sectionClassName = "px-6 py-16 bg-white border-b border-slate-100" }) {
  return (
    <section className={sectionClassName}>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        <h2 className="max-w-3xl text-3xl md:text-[2.7rem] md:leading-[1.12] font-bold tracking-tight text-slate-900">{title}</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <a href={MEETINGS_URL} className="inline-flex items-center justify-center rounded-lg bg-[#172235] px-5 py-3 text-sm font-semibold text-white hover:bg-[#1B2638]">{primary}</a>
          <a href={secondaryHref} className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50">{secondary}</a>
        </div>
      </div>
    </section>
  );
}

export function WorkflowAutomationPage() {
  return (
    <div className="bg-white text-slate-900">
      <Seo title="Workflow Automation | Neovex" description="Neovex designs, builds, and manages automated workflows across the tools businesses already use." />
      <PageHero
        eyebrow="WORKFLOW AUTOMATION"
        title="Automate the Work Moving Between Your People and Systems."
        copy="Neovex designs, builds, and manages workflows that connect the tools your business already uses - reducing repetitive work, manual handoffs, missed follow-up, and administrative overhead."
        primary="Discuss a Workflow"
        secondary="See What We Automate"
        secondaryHref="#what-we-automate"
        journeyItems={heroJourney}
      />

      <section id="what-we-automate" className="px-6 py-16 bg-[#F3F5F7]">
        <div className="max-w-7xl mx-auto">
          <SectionIntro eyebrow="WHAT WE AUTOMATE" title="Workflows That Still Depend on Someone Remembering the Next Step." />
          <TextGrid items={automationCategories} />
        </div>
      </section>

      <section id="details" className="px-6 py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionIntro eyebrow="HOW IT WORKS" title="We Connect the Tools Already Involved in the Process." />
          <FlowGraphic />
        </div>
      </section>

      <BeforeAfter
        eyebrow="Before / After"
        title="What Changes When the Workflow Is Automated."
        subhead="A compact look at how familiar workflow steps change when handoffs, follow-up, and exceptions are connected by automation."
        rows={workflowComparisonRows}
        sectionClassName="bg-[#F3F5F7] py-16 px-6 scroll-mt-28 md:scroll-mt-32"
        compact
      />
      <BuildJourneySection />

      <WorkflowProof
        copy="Explore how Neovex-built workflows have changed day-to-day operations, reduced manual work, and connected systems across real businesses."
        sectionClassName="bg-[#F3F5F7] py-20 px-6 scroll-mt-28 md:scroll-mt-32"
        showHeaderCta
      />

      <Footer />
    </div>
  );
}

export function WorkflowAutomationAuditPage() {
  return (
    <div className="bg-white text-slate-900">
      <Seo title="Workflow Automation Audit | Neovex" description="Neovex reviews manual workflows and prioritizes automation opportunities by business value and feasibility." />
      <PageHero
        eyebrow="WORKFLOW AUTOMATION AUDIT"
        title="Find the Best Workflow to Automate First."
        copy="Neovex reviews how work moves through your business, identifies repetitive and manual steps, and prioritizes the automation opportunities with the strongest combination of business value and feasibility."
        primary="Start With an Audit"
        secondary="Discuss Your Process"
        secondaryHref={MEETINGS_URL}
        journeyItems={heroJourney}
      />

      <section className="px-6 py-16 bg-[#F3F5F7]">
        <div className="max-w-7xl mx-auto">
          <SectionIntro eyebrow="WHEN AN AUDIT MAKES SENSE" title="You Know There Is Too Much Manual Work. You Just Do Not Know Where to Start." />
          <TextGrid items={[
            ["Manual movement", "Work moves between several people or systems manually."],
            ["Repeated entry", "Staff copy information between tools."],
            ["Memory-based follow-up", "Follow-up depends on someone remembering the next step."],
            ["Stuck approvals", "Approvals get delayed in email or messages."],
            ["Administrative drag", "Recurring administrative work consumes too much time."],
            ["Unclear priorities", "Several workflows could be automated, but priorities are unclear."],
          ]} />
        </div>
      </section>

      <AuditJourneySection />
      <AuditDeliverablesSection />
      <AuditPricingBlock />
      <Footer />
    </div>
  );
}

export function ManagedAutomationPage() {
  return (
    <div className="bg-white text-slate-900">
      <Seo title="Managed Automation | Neovex" description="Neovex monitors, maintains, and improves automated workflows after launch so they keep working as the business changes." />
      <PageHero
        eyebrow="MANAGED AUTOMATION"
        title="Automation That Keeps Working After Launch."
        copy="Neovex monitors, maintains, and improves the workflows we build so integrations stay connected, rules stay current, and changes in your business do not quietly break the process."
        primary="Discuss Management"
        secondary="See How It Works"
        secondaryHref="#how-it-fits"
        journeyItems={heroJourney}
      />

      <section className="px-6 py-16 bg-[#F3F5F7]">
        <div className="max-w-7xl mx-auto">
          <SectionIntro eyebrow="AFTER LAUNCH" title="Workflows Change Because Businesses Change." copy="Systems get updated. Processes change. Team responsibilities shift. Exceptions appear. Managed Automation gives your workflow ongoing attention instead of leaving your team to troubleshoot it internally." />
        </div>
      </section>

      <section className="px-6 py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionIntro eyebrow="WHAT IS MANAGED" title="The Workflow Gets Ongoing Attention." />
          <TextGrid items={managedItems} cols="lg:grid-cols-3" />
        </div>
      </section>

      <HumanLoopSection />
      <ManagedLifecycleSection />
      <ManagedPricingBlock />
      <Footer />
    </div>
  );
}
