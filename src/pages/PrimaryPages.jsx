import React, { useEffect, useMemo, useState } from "react";
import { ArrowRight, ChevronDown, MonitorPlay, Play } from "lucide-react";
import Footer from "../components/Footer.jsx";

const MEETINGS_URL = "https://meetings.hubspot.com/neovex";
const COOL = "bg-[#F3F5F7]";

const journey = [
  ["01", "Discovery Call", "Walk through the process, systems involved, where work is manual today, and what needs to change."],
  ["02", "Workflow Design", "Map the process, define triggers, routing, approvals, handoffs, and human exceptions."],
  ["03", "Build & Launch", "Connect systems, configure the workflow, test real scenarios, and launch once it is working reliably."],
  ["04", "Manage & Improve", "Monitor integrations, troubleshoot issues, adjust rules, and improve the workflow as the business changes."],
];

const caseStudies = [
  {
    slug: "lead-intake-quote-follow-up",
    businessType: "Commercial cleaning operations",
    title: "Lead Intake -> Quote Follow-Up",
    description: "A workflow that captures a new inquiry, updates the CRM, routes the request, triggers follow-up, and notifies the owner when action is needed.",
    before: "New inquiries had to be reviewed, copied into the operating systems, and followed up manually by the team.",
    automation: "Neovex built a workflow that captures the inquiry, updates the CRM, routes the request, triggers follow-up, and notifies the owner when action is needed.",
    steps: ["Inquiry received", "CRM updated", "Follow-up triggered", "Owner notified"],
    exceptions: "Requests that need owner review can be flagged instead of forced through the workflow.",
    after: "The intake and quote follow-up process moves forward with less manual copying and fewer memory-based next steps.",
  },
  {
    slug: "agreement-onboarding",
    businessType: "Customer onboarding operations",
    title: "Agreement -> Onboarding Setup",
    description: "A workflow that connects an agreement trigger to payment steps, welcome communication, internal project setup, and team notifications.",
    before: "Signed agreements, payment requests, customer communication, and internal setup tasks depended on several manual handoffs.",
    automation: "Neovex connected the agreement trigger to payment steps, welcome communication, internal project setup, and team notifications.",
    steps: ["Agreement signed", "Deposit requested", "Project created", "Team notified"],
    exceptions: "Missing information or unusual customer requirements can be routed to a person before the workflow continues.",
    after: "Onboarding steps begin from one trigger instead of waiting for someone to move each task forward manually.",
  },
  {
    slug: "invoice-collections-follow-up",
    businessType: "Back-office billing operations",
    title: "Invoice -> Collections Follow-Up",
    description: "A managed billing workflow that sends reminders, updates records, creates follow-up tasks, and escalates overdue accounts for review.",
    before: "Billing records, reminders, account status updates, and overdue follow-up were checked and coordinated manually.",
    automation: "Neovex built a managed billing workflow that creates follow-up tasks, sends reminders, updates records, and escalates overdue accounts for review.",
    steps: ["Invoice created", "Reminder sent", "Record updated", "Exception escalated"],
    exceptions: "Overdue accounts and unusual billing conditions can be escalated for human attention.",
    after: "Recurring billing follow-up and status updates become easier to track without relying on manual checks.",
  },
];

const pricingOptions = [
  {
    title: "Workflow Automation Audit",
    price: "$1,500",
    description: "For businesses that want to identify and prioritize the highest-value automation opportunities.",
    items: ["Workflow review", "Stakeholder working session", "Automation opportunity heat map", "Prioritized roadmap", "Recommended next steps"],
    cta: "Start With an Audit",
    href: MEETINGS_URL,
    best: "Best when the opportunity is not yet clearly defined.",
  },
  {
    title: "Workflow Build",
    price: "Starting at $4,500",
    description: "For a defined process that is ready to automate.",
    items: ["Workflow design", "Integration setup", "Automation build", "Testing", "Launch", "Documentation"],
    cta: "Discuss a Workflow",
    href: MEETINGS_URL,
    best: "Best when you already know which workflow needs to change.",
  },
  {
    title: "Automation System",
    price: "Starting at $10,000",
    description: "For multiple connected workflows or a larger operational process.",
    items: ["Multiple workflows", "Cross-system automation", "Rules and decision logic", "AI where appropriate", "Testing and implementation", "Documentation"],
    cta: "Discuss a System",
    href: MEETINGS_URL,
    best: "Best when several workflows need to operate together.",
  },
  {
    title: "Managed Automation",
    price: "Starting at $1,500/month",
    description: "For ongoing monitoring, maintenance, and workflow improvements after launch.",
    items: ["Monitoring", "Integration maintenance", "Troubleshooting", "Workflow adjustments", "Optimization", "Minor workflow improvements"],
    cta: "Discuss Management",
    href: MEETINGS_URL,
    best: "Best when you want Neovex to stay involved after launch.",
  },
];

const faqs = [
  ["kinds", "What kinds of workflows can Neovex automate?", "Neovex automates repeatable workflows where information, handoffs, follow-up, approvals, scheduling, billing, reporting, or administrative tasks still move manually. Common areas include lead management, customer onboarding, quotes, approvals, billing, collections, document routing, and internal notifications."],
  ["software", "Do we have to replace our existing software?", "Usually, no. Neovex generally works with the systems already in place where practical, then automates the handoffs between them. Compatibility depends on the tools, permissions, available APIs, and workflow requirements."],
  ["tools", "What tools can Neovex connect?", "Common categories include CRM, email, calendars, forms, spreadsheets, billing systems, document tools, and team notifications. Neovex does not assume every tool can be integrated; the right approach depends on access, software capabilities, and the process being automated."],
  ["ai", "Does every workflow use AI?", "No. Many strong workflows are built with rules, integrations, triggers, APIs, and routing logic. AI is used where it meaningfully improves the workflow, not as a requirement for every process."],
  ["cost", "How much does workflow automation cost?", "A Workflow Automation Audit is $1,500. A Workflow Build starts at $4,500, an Automation System starts at $10,000, and Managed Automation starts at $1,500/month. Final scope depends on workflow complexity, systems involved, access requirements, testing, approval logic, and ongoing support needs."],
  ["audit", "Do I need a Workflow Automation Audit first?", "No. The audit is useful when there is too much manual work but priorities are unclear. If the workflow is already defined, Neovex can move directly into a Workflow Build."],
  ["timeline", "How long does a workflow take to build?", "Timing depends on the complexity of the process, number of systems, access, testing, and approval requirements. A defined single workflow is usually faster than a larger automation system with multiple connected processes."],
  ["judgment", "What happens when a step requires human judgment?", "The workflow can route approvals, exceptions, judgment calls, and unusual cases to the right person. Automation should remove repetitive work while keeping human decision-making where it belongs."],
  ["partial", "Can Neovex automate only part of a process?", "Yes. Many projects start with one painful step or a clearly defined workflow segment. The automation can expand later after the first workflow is tested and running."],
  ["after", "What happens after launch?", "Some clients operate completed workflows themselves where appropriate. Others use Managed Automation for monitoring, maintenance, troubleshooting, adjustments, and ongoing improvement after launch."],
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

function Eyebrow({ children }) {
  return <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#25638f]">{children}</div>;
}

function Hero({ eyebrow, title, copy, primary = "Discuss a Workflow", secondary, secondaryHref = "/workflow-automation-audit" }) {
  return (
    <section className="px-6 pt-24 md:pt-28 pb-16 bg-white">
      <div className="max-w-7xl mx-auto grid gap-10 lg:grid-cols-[0.55fr_0.45fr] lg:items-center lg:gap-14">
        <div className="max-w-3xl">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-4 text-4xl md:text-6xl md:leading-[1.08] font-bold tracking-tight text-slate-900">{title}</h1>
          <p className="mt-6 text-lg md:text-xl leading-8 text-slate-700">{copy}</p>
          <div className="mt-7 flex flex-col sm:flex-row gap-3">
            <a href={MEETINGS_URL} className="inline-flex items-center justify-center rounded-lg bg-[#172235] px-6 py-3 text-base font-semibold text-white hover:bg-[#1B2638]">
              {primary} <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            {secondary ? (
              <a href={secondaryHref} className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-800 hover:bg-slate-50">
                {secondary}
              </a>
            ) : null}
          </div>
        </div>
        <HeroJourney />
      </div>
    </section>
  );
}

function HeroJourney() {
  const items = [
    ["01", "Review the process", "Understand how the workflow currently moves."],
    ["02", "Connect the systems", "Link the tools and data already involved."],
    ["03", "Automate the handoffs", "Configure triggers, routing, approvals, and next steps."],
    ["04", "Manage after launch", "Monitor, maintain, and improve the workflow."],
  ];

  return (
    <div className="border-y border-slate-200 py-5">
      {items.map(([n, title, desc], index) => (
        <div key={title} className="grid grid-cols-[34px_minmax(0,1fr)] gap-4 border-b border-slate-200 py-3.5 last:border-b-0">
          <div className="relative">
            <div className="flex h-7 w-7 items-center justify-center rounded-full border border-[#25638f]/35 text-[10px] font-semibold text-[#25638f]">{n}</div>
            {index < items.length - 1 ? <div className="absolute left-[13px] top-8 h-[calc(100%-0.5rem)] w-px bg-slate-200" aria-hidden="true" /> : null}
          </div>
          <div>
            <div className="text-lg font-semibold text-[#172235]">{title}</div>
            <p className="mt-1 text-sm leading-6 text-slate-600">{desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function SectionIntro({ eyebrow, title, copy }) {
  return (
    <div className="max-w-3xl">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-4 text-3xl md:text-[2.85rem] md:leading-[1.12] font-bold tracking-tight text-slate-900">{title}</h2>
      {copy ? <p className="mt-5 text-lg md:text-xl leading-8 text-slate-700">{copy}</p> : null}
    </div>
  );
}

function Connector() {
  return (
    <div className="flex justify-start py-1 text-[#607184] md:justify-center md:pt-2" aria-hidden="true">
      <svg className="hidden h-5 w-14 md:block" viewBox="0 0 56 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 10H48" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M43 5L48 10L43 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <svg className="ml-3 h-10 w-5 md:hidden" viewBox="0 0 20 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 4V32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M5 27L10 32L15 27" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

function ProcessJourney({ stages }) {
  return (
    <div className="relative mt-12">
      <div className="absolute left-0 right-0 top-[18px] hidden h-px bg-slate-300 lg:block" aria-hidden="true" />
      <ol className="relative grid gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-7">
        {stages.map(([n, title, desc]) => (
          <li key={title} className="relative">
            <div className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full border border-[#25638f]/40 bg-white text-xs font-semibold text-[#25638f]">{n}</div>
            <h3 className="mt-5 text-xl font-semibold text-[#172235]">{title}</h3>
            <p className="mt-2 max-w-sm text-sm leading-6 text-slate-700">{desc}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

function FlowModel() {
  const columns = [
    ["Your Tools", ["Website", "Email", "CRM", "Forms", "Calendars", "Payment systems"]],
    ["Neovex Workflow", ["Triggers", "Rules", "Routing", "Approvals", "Handoffs", "Exceptions"]],
    ["Automated Next Steps", ["Update records", "Send follow-up", "Create tasks", "Schedule", "Notify team", "Trigger payment or approval"]],
  ];

  return (
    <div className="mt-11 grid gap-6 lg:grid-cols-[minmax(0,1fr)_88px_minmax(0,1fr)_88px_minmax(0,1fr)] lg:items-start">
      {columns.map(([label, items], index) => (
        <React.Fragment key={label}>
          <div className={index === 1 ? "lg:text-center" : ""}>
            <div className="text-lg md:text-xl font-bold uppercase tracking-[0.08em] text-[#172235]">{label}</div>
            <div className={`mt-4 flex flex-col gap-2 text-base leading-7 text-slate-700 ${index === 1 ? "lg:items-center" : ""}`}>
              {items.map((item) => <div key={item} className="font-medium">{item}</div>)}
            </div>
          </div>
          {index < columns.length - 1 ? <Connector /> : null}
        </React.Fragment>
      ))}
    </div>
  );
}

function HumanFlow() {
  const flow = ["Automated workflow", "Exception / approval", "Human review", "Workflow continues"];
  return (
    <div className="mt-8 grid gap-4 md:grid-cols-[minmax(0,1fr)_52px_minmax(0,1fr)_52px_minmax(0,1fr)_52px_minmax(0,1fr)] md:items-center">
      {flow.map((item, index) => (
        <React.Fragment key={item}>
          <div className="text-base font-semibold text-[#172235]">{item}</div>
          {index < flow.length - 1 ? <Connector /> : null}
        </React.Fragment>
      ))}
    </div>
  );
}

function FinalLightCta({ eyebrow, title, copy, primary = "Discuss a Workflow", secondary = "Start With an Audit" }) {
  return (
    <section className="px-6 py-16 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="mt-4 max-w-3xl text-3xl md:text-[2.7rem] md:leading-[1.12] font-bold tracking-tight text-slate-900">{title}</h2>
          {copy ? <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-700">{copy}</p> : null}
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a href={MEETINGS_URL} className="inline-flex items-center justify-center rounded-lg bg-[#172235] px-5 py-3 text-sm font-semibold text-white hover:bg-[#1B2638]">{primary}</a>
          <a href="/workflow-automation-audit" className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50">{secondary}</a>
        </div>
      </div>
    </section>
  );
}

function DemoVisual({ study }) {
  return (
    <div className="relative aspect-video overflow-hidden rounded-lg border border-slate-200 bg-[#111a2b]">
      <div className="absolute inset-0 flex flex-col justify-between p-5 sm:p-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8fb6d1]">Workflow Demo</div>
            <div className="mt-2 text-sm font-semibold text-white">{study.title}</div>
          </div>
          <div className="text-xs text-slate-400">Demo asset pending</div>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {study.steps.map((step, index) => (
            <div key={step} className="min-h-20 rounded-md border border-white/10 bg-white/[0.045] p-3">
              <div className="text-[10px] font-semibold text-[#8fb6d1]">0{index + 1}</div>
              <div className="mt-2 text-xs leading-5 text-slate-200">{step}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/90 text-[#172235]" aria-hidden="true">
        <Play className="h-5 w-5 fill-current" />
      </div>
      <div className="absolute bottom-4 left-4 flex items-center gap-2 text-xs font-medium text-slate-300">
        <MonitorPlay className="h-4 w-4 text-[#8fb6d1]" aria-hidden="true" />
        <span>Video demo placeholder</span>
      </div>
    </div>
  );
}

function CaseStudyRow({ study, index }) {
  const visualFirst = index % 2 === 0;
  return (
    <section className={`${index % 2 === 0 ? COOL : "bg-white"} px-6 py-20 md:py-24`}>
      <article className="max-w-[1360px] mx-auto">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.28fr)_minmax(360px,0.95fr)] lg:items-center lg:gap-14">
          <div className={`${visualFirst ? "" : "lg:order-2"} hidden lg:block`}>
            <DemoVisual study={study} />
          </div>
          <div className={visualFirst ? "" : "lg:order-1"}>
            <Eyebrow>{study.businessType}</Eyebrow>
            <h2 className="mt-3 text-3xl md:text-[2.35rem] md:leading-tight font-bold tracking-tight text-slate-900">{study.title}</h2>
            <div className="mt-7 lg:hidden">
              <DemoVisual study={study} />
            </div>
            <div className="mt-7 space-y-5">
              <ProofBlock label="Context">{study.description}</ProofBlock>
              <ProofBlock label="Before">{study.before}</ProofBlock>
              <ProofBlock label="Automation">{study.automation}</ProofBlock>
              <ProofBlock label="Impact">{study.after}</ProofBlock>
            </div>
            <a href={`/case-studies/${study.slug}`} className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#25638f] hover:text-[#172235]">
              View Case Study <span aria-hidden="true">-&gt;</span>
            </a>
          </div>
        </div>
      </article>
    </section>
  );
}

function ProofBlock({ label, children }) {
  return (
    <div>
      <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#25638f]">{label}</div>
      <div className="mt-2 text-sm leading-6 text-slate-700">{children}</div>
    </div>
  );
}

export function HowItWorksPage() {
  return (
    <div className="bg-white text-slate-900">
      <Seo title="How It Works | Neovex" description="See what happens when a business hires Neovex to design, build, launch, and manage workflow automation." />
      <Hero eyebrow="HOW IT WORKS" title="From Manual Process to Managed Workflow." copy="Neovex takes you from identifying the workflow to designing, building, launching, and managing the automation across the tools your business already uses." secondary="Start With an Audit" />

      <section className={`${COOL} px-6 py-16`}>
        <div className="max-w-7xl mx-auto">
          <SectionIntro eyebrow="WHERE TO START" title="Start With the Workflow - or Start With the Problem." />
          <div className="mt-10 grid gap-8 border-y border-slate-200 md:grid-cols-2">
            <div className="py-7 md:pr-8">
              <h3 className="text-2xl font-semibold text-[#172235]">You Know What Needs to Be Automated</h3>
              <p className="mt-3 text-base leading-7 text-slate-700">If the process is already clearly defined, Neovex can move directly into workflow design and build.</p>
              <a href={MEETINGS_URL} className="mt-5 inline-flex text-sm font-semibold text-[#25638f] hover:text-[#172235]">Discuss a Workflow -&gt;</a>
            </div>
            <div className="border-t border-slate-200 py-7 md:border-l md:border-t-0 md:pl-8">
              <h3 className="text-2xl font-semibold text-[#172235]">You Are Not Sure What to Automate First</h3>
              <p className="mt-3 text-base leading-7 text-slate-700">If several manual processes are competing for attention, start with a Workflow Automation Audit to identify and prioritize the strongest opportunities.</p>
              <a href="/workflow-automation-audit" className="mt-5 inline-flex text-sm font-semibold text-[#25638f] hover:text-[#172235]">Explore the Audit -&gt;</a>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionIntro eyebrow="THE PROCESS" title="From Discovery to Ongoing Improvement." />
          <ProcessJourney stages={journey} />
        </div>
      </section>

      <section className={`${COOL} px-6 py-16`}>
        <div className="max-w-7xl mx-auto">
          <SectionIntro eyebrow="YOUR EXISTING TOOLS" title="We Connect the Systems Already Involved in the Work." />
          <FlowModel />
        </div>
      </section>

      <section className="px-6 py-16 bg-white">
        <div className="max-w-7xl mx-auto grid gap-10 lg:grid-cols-[0.42fr_0.58fr] lg:items-center lg:gap-14">
          <SectionIntro eyebrow="HUMANS STAY IN THE LOOP" title="Not Every Step Should Be Automated." copy="Approvals, exceptions, judgment calls, and unusual cases can be routed to the right person instead of being forced through automation." />
          <HumanFlow />
        </div>
      </section>

      <section className={`${COOL} px-6 py-16`}>
        <div className="max-w-7xl mx-auto">
          <SectionIntro eyebrow="AFTER LAUNCH" title="The Workflow Does Not Have to Become Another System Your Team Babysits." copy="Clients can operate the workflow themselves where appropriate or use Managed Automation for ongoing monitoring, maintenance, troubleshooting, and improvements." />
          <a href="/managed-automation" className="mt-6 inline-flex text-sm font-semibold text-[#25638f] hover:text-[#172235]">Explore Managed Automation -&gt;</a>
        </div>
      </section>

      <section className="px-6 py-16 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
          <SectionIntro eyebrow="SEE THE WORK" title="See the Workflows Running in Real Businesses." copy="Explore real examples of Neovex-built workflows and how day-to-day operations changed after automation." />
          <a href="/case-studies" className="inline-flex items-center justify-center rounded-lg bg-[#172235] px-5 py-3 text-sm font-semibold text-white hover:bg-[#1B2638]">View Case Studies</a>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export function CaseStudiesPage() {
  return (
    <div className="bg-white text-slate-900">
      <Seo title="Case Studies | Neovex" description="Explore Neovex-built workflow automation examples running in real businesses." />
      <section className="px-6 pt-24 md:pt-28 pb-14 bg-white">
        <div className="max-w-7xl mx-auto max-w-4xl">
          <Eyebrow>CASE STUDIES</Eyebrow>
          <h1 className="mt-4 text-4xl md:text-6xl md:leading-[1.08] font-bold tracking-tight text-slate-900">Workflow Automation Running in Real Businesses.</h1>
          <p className="mt-6 text-lg md:text-xl leading-8 text-slate-700">See how Neovex-built workflows connect systems, remove repetitive work, and keep day-to-day processes moving with less manual intervention.</p>
        </div>
      </section>
      {caseStudies.map((study, index) => <CaseStudyRow key={study.slug} study={study} index={index} />)}
      <Footer />
    </div>
  );
}

export function CaseStudyDetailPage({ slug }) {
  const study = caseStudies.find((item) => item.slug === slug) || caseStudies[0];
  return (
    <div className="bg-white text-slate-900">
      <Seo title={`${study.title} | Neovex Case Study`} description={`Workflow automation case study: ${study.title}.`} />
      <section className="px-6 pt-24 md:pt-28 pb-16 bg-white">
        <div className="max-w-7xl mx-auto grid gap-10 lg:grid-cols-[0.52fr_0.48fr] lg:items-center">
          <div>
            <Eyebrow>{study.businessType}</Eyebrow>
            <h1 className="mt-4 text-4xl md:text-6xl md:leading-[1.08] font-bold tracking-tight text-slate-900">{study.title}</h1>
            <p className="mt-6 text-lg md:text-xl leading-8 text-slate-700">{study.description}</p>
          </div>
          <DemoVisual study={study} />
        </div>
      </section>
      <section className={`${COOL} px-6 py-16`}>
        <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <DetailBlock title="Workflow overview">{study.description}</DetailBlock>
          <DetailBlock title="Before">{study.before}</DetailBlock>
          <DetailBlock title="What was automated">{study.automation}</DetailBlock>
          <DetailBlock title="Systems / steps involved">{study.steps.join(" -> ")}</DetailBlock>
          <DetailBlock title="Human exceptions">{study.exceptions}</DetailBlock>
          <DetailBlock title="After">{study.after}</DetailBlock>
          <DetailBlock title="Verified outcome / metrics">Verified outcome metrics pending. No estimated or fabricated results are shown.</DetailBlock>
          <DetailBlock title="Video or workflow demo">Workflow demo asset pending.</DetailBlock>
          <DetailBlock title="CTA"><a href={MEETINGS_URL} className="font-semibold text-[#25638f] hover:text-[#172235]">Discuss a Workflow -&gt;</a></DetailBlock>
        </div>
      </section>
      <Footer />
    </div>
  );
}

function DetailBlock({ title, children }) {
  return (
    <article className="border-t border-slate-200 pt-5">
      <h2 className="text-xl font-semibold text-[#172235]">{title}</h2>
      <div className="mt-3 text-sm leading-6 text-slate-700">{children}</div>
    </article>
  );
}

export function PricingPage() {
  const startHere = pricingOptions.slice(0, 2);
  const laterOptions = pricingOptions.slice(2);
  const decisions = [
    ["YOU KNOW THE WORKFLOW", "The process is already defined and ready to automate.", "Workflow Build"],
    ["YOU KNOW THERE IS TOO MUCH MANUAL WORK", "The problem is obvious, but the strongest automation opportunity is not.", "Workflow Automation Audit"],
    ["YOU NEED MULTIPLE WORKFLOWS CONNECTED", "Several processes or systems need to operate together.", "Automation System"],
    ["YOU WANT ONGOING SUPPORT", "The workflow is live and you want monitoring, maintenance, and improvements.", "Managed Automation"],
  ];

  return (
    <div className="bg-white text-slate-900">
      <Seo title="Pricing | Neovex" description="Neovex pricing for workflow automation audits, builds, systems, and managed automation." />
      <section className="px-6 pt-24 md:pt-28 pb-16 bg-white">
        <div className="max-w-7xl mx-auto max-w-4xl">
          <Eyebrow>PRICING</Eyebrow>
          <h1 className="mt-4 text-4xl md:text-6xl md:leading-[1.08] font-bold tracking-tight text-slate-900">Choose the Engagement That Fits the Problem.</h1>
          <p className="mt-6 text-lg md:text-xl leading-8 text-slate-700">Start with a focused audit, a defined workflow build, a larger automation system, or ongoing management after launch.</p>
        </div>
      </section>
      <section className={`${COOL} px-6 py-16`}>
        <div className="max-w-7xl mx-auto">
          <SectionIntro eyebrow="START HERE" title="Two Ways to Begin." />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {startHere.map((option) => <OfferBlock key={option.title} option={option} prominent />)}
          </div>
        </div>
      </section>
      <section className="px-6 py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionIntro eyebrow="LARGER & ONGOING ENGAGEMENTS" title="When the Work Is Bigger or Continues After Launch." />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {laterOptions.map((option) => <OfferBlock key={option.title} option={option} />)}
          </div>
          <p className="mt-8 max-w-4xl text-sm leading-6 text-slate-600">Final scope depends on workflow complexity, systems involved, access requirements, testing, approval logic, and ongoing support needs.</p>
        </div>
      </section>
      <section className={`${COOL} px-6 py-16`}>
        <div className="max-w-7xl mx-auto">
          <SectionIntro eyebrow="WHICH OPTION IS RIGHT?" title="Not Sure Where to Start?" />
          <div className="mt-10 grid gap-0 border-y border-slate-200 md:grid-cols-2">
            {decisions.map(([label, prompt, answer], index) => (
              <div key={label} className={`${index > 0 ? "border-t border-slate-200 md:border-t-0" : ""} ${index % 2 === 1 ? "md:border-l" : ""} py-7 md:px-7`}>
                <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#25638f]">{label}</div>
                <p className="mt-3 text-base leading-7 text-slate-700">{prompt}</p>
                <div className="mt-4 text-xl font-semibold text-[#172235]">-&gt; {answer}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

function OfferBlock({ option, prominent = false }) {
  return (
    <article className={`rounded-lg border border-slate-200 bg-white p-7 md:p-8 ${prominent ? "lg:p-9" : ""}`}>
      <h2 className="text-2xl font-bold text-slate-900">{option.title}</h2>
      <div className={`${prominent ? "text-3xl md:text-4xl" : "text-3xl"} mt-3 font-bold tracking-tight text-[#172235]`}>{option.price}</div>
      <p className="mt-4 text-base leading-7 text-slate-700">{option.description}</p>
      {option.best ? <p className="mt-3 text-sm leading-6 text-slate-600">{option.best}</p> : null}
      <div className="mt-6 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#25638f]">Includes</div>
      <ul className="mt-3 grid gap-2 text-sm text-slate-700 sm:grid-cols-2">
        {option.items.map((item) => (
          <li key={item} className="border-t border-slate-100 pt-2">{item}</li>
        ))}
      </ul>
      <a href={option.href} className="mt-7 inline-flex items-center justify-center rounded-lg bg-[#172235] px-5 py-3 text-sm font-semibold text-white hover:bg-[#1B2638]">{option.cta}</a>
    </article>
  );
}

export function FaqPage() {
  const [openId, setOpenId] = useState(faqs[0][0]);
  const faqJsonLd = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(([, q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
  }), []);

  return (
    <div className="bg-white text-slate-900">
      <Seo title="FAQ | Neovex" description="Practical answers about workflow automation, integrations, AI, pricing, implementation, and what happens after launch." />
      <section className="px-6 pt-24 md:pt-28 pb-16 bg-white">
        <div className="max-w-7xl mx-auto max-w-4xl">
          <Eyebrow>FAQ</Eyebrow>
          <h1 className="mt-4 text-4xl md:text-6xl md:leading-[1.08] font-bold tracking-tight text-slate-900">Frequently Asked Questions.</h1>
          <p className="mt-6 text-lg md:text-xl leading-8 text-slate-700">Practical answers about workflow automation, integrations, AI, pricing, implementation, and what happens after launch.</p>
        </div>
      </section>
      <section className={`${COOL} px-6 py-16`}>
        <div className="max-w-3xl mx-auto">
          <ul className="space-y-3">
            {faqs.map(([id, question, answer]) => {
              const open = openId === id;
              return (
                <li key={id} className="rounded-lg border border-slate-200 bg-white">
                  <button onClick={() => setOpenId(open ? null : id)} className="flex w-full items-start justify-between gap-4 px-5 py-4 text-left text-base font-semibold text-[#172235]">
                    <span>{question}</span>
                    <ChevronDown className={`mt-0.5 h-5 w-5 shrink-0 text-slate-500 transition ${open ? "rotate-180" : ""}`} />
                  </button>
                  {open ? <div className="px-5 pb-5 text-base leading-7 text-slate-700">{answer}</div> : null}
                </li>
              );
            })}
          </ul>
          <div className="mt-10 text-sm text-slate-700">
            Did not see your question?
            <a href={MEETINGS_URL} className="ml-2 font-semibold text-[#25638f] hover:text-[#172235]">Discuss a Workflow -&gt;</a>
          </div>
        </div>
      </section>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
    </div>
  );
}
