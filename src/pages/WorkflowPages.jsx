import React, { useEffect } from "react";
import { ArrowRight, MonitorPlay, Play } from "lucide-react";
import Footer from "../components/Footer.jsx";

const DISCUSS_URL = "/discuss-a-workflow";
const COOL = "bg-[#F3F5F7]";

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

function WorkflowHero({ eyebrow, title, copy, primary, secondary, secondaryHref, steps }) {
  return (
    <section className="px-6 pt-24 md:pt-28 pb-16 bg-white">
      <div className="max-w-7xl mx-auto grid gap-10 lg:grid-cols-[0.55fr_0.45fr] lg:items-center lg:gap-14">
        <div className="max-w-3xl">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-4 text-4xl md:text-6xl md:leading-[1.08] font-bold tracking-tight text-slate-900">{title}</h1>
          <p className="mt-6 text-lg md:text-xl leading-8 text-slate-700">{copy}</p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a href={DISCUSS_URL} className="inline-flex items-center justify-center rounded-lg bg-[#172235] px-6 py-3 text-base font-semibold text-white hover:bg-[#1B2638]">
              {primary} <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a href={secondaryHref} className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-800 hover:bg-slate-50">
              {secondary}
            </a>
          </div>
        </div>
        <VerticalFlow steps={steps} />
      </div>
    </section>
  );
}

function VerticalFlow({ steps }) {
  return (
    <div className="border-y border-slate-200 py-5">
      {steps.map((step, index) => (
        <div key={step} className="grid grid-cols-[34px_minmax(0,1fr)] gap-4 border-b border-slate-200 py-3.5 last:border-b-0">
          <div className="relative">
            <div className="flex h-7 w-7 items-center justify-center rounded-full border border-[#25638f]/35 text-[10px] font-semibold text-[#25638f]">0{index + 1}</div>
            {index < steps.length - 1 ? <div className="absolute left-[13px] top-8 h-[calc(100%-0.5rem)] w-px bg-slate-200" aria-hidden="true" /> : null}
          </div>
          <div className="text-lg font-semibold text-[#172235]">{step}</div>
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

function TextGrid({ items, cols = "lg:grid-cols-4" }) {
  return (
    <div className={`mt-10 grid md:grid-cols-2 ${cols} border-y border-slate-200`}>
      {items.map(([title, desc], index) => (
        <article key={title} className={`${index > 0 ? "border-t border-slate-200 md:border-t-0 md:border-l" : ""} py-6 md:px-6`}>
          <h3 className="text-xl font-semibold text-[#172235]">{title}</h3>
          <p className="mt-2 text-base leading-7 text-slate-700">{desc}</p>
        </article>
      ))}
    </div>
  );
}

function HorizontalFlow({ steps }) {
  return (
    <div className="mt-11 flex flex-col gap-3 md:flex-row md:flex-wrap md:items-center md:gap-4">
      {steps.map((step, index) => (
        <React.Fragment key={step}>
          <div className="max-w-[12rem] text-base font-semibold text-[#172235]">{step}</div>
          {index < steps.length - 1 ? <Connector /> : null}
        </React.Fragment>
      ))}
    </div>
  );
}

function HumanLoop({ eyebrow, title, copy, steps }) {
  return (
    <section className={`${COOL} px-6 py-16`}>
      <div className="max-w-7xl mx-auto grid gap-10 lg:grid-cols-[0.42fr_0.58fr] lg:items-center lg:gap-14">
        <SectionIntro eyebrow={eyebrow} title={title} copy={copy} />
        <HorizontalFlow steps={steps} />
      </div>
    </section>
  );
}

function Comparison({ title, rows }) {
  return (
    <section className={`${COOL} px-6 py-16`}>
      <div className="max-w-7xl mx-auto">
        <SectionIntro eyebrow="BEFORE / AFTER" title={title} />
        <div className="mt-10 overflow-hidden rounded-lg border border-slate-200 bg-white">
          <table className="hidden w-full table-fixed text-left text-sm leading-6 md:table">
            <thead className="bg-slate-50">
              <tr>
                <th className="p-4 font-semibold text-slate-700">Workflow Step</th>
                <th className="p-4 font-semibold text-slate-700">Manual Today</th>
                <th className="p-4 font-semibold text-[#25638f]">With Neovex</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {rows.map(([step, manual, neovex]) => (
                <tr key={step}>
                  <th className="p-4 font-semibold text-[#172235]">{step}</th>
                  <td className="p-4 text-slate-600">{manual}</td>
                  <td className="p-4 font-semibold text-[#25638f]">{neovex}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="divide-y divide-slate-100 md:hidden">
            {rows.map(([step, manual, neovex]) => (
              <div key={step} className="p-5">
                <h3 className="text-lg font-semibold text-[#172235]">{step}</h3>
                <div className="mt-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">Manual Today</div>
                <p className="mt-1 text-sm leading-6 text-slate-700">{manual}</p>
                <div className="mt-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#25638f]">With Neovex</div>
                <p className="mt-1 text-sm leading-6 font-semibold text-[#25638f]">{neovex}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function DemoVisual({ title, steps }) {
  return (
    <div className="relative aspect-video overflow-hidden rounded-lg border border-slate-200 bg-[#111a2b]">
      <div className="absolute inset-0 flex flex-col justify-between p-5 sm:p-6">
        <div>
          <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8fb6d1]">Workflow Demo</div>
          <div className="mt-2 text-sm font-semibold text-white">{title}</div>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {steps.map((step, index) => (
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

function StartSection({ title, primary, auditText, auditLinkLabel = "Explore the Workflow Automation Audit" }) {
  return (
    <section className="px-6 py-16 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <h2 className="max-w-3xl text-3xl md:text-[2.7rem] md:leading-[1.12] font-bold tracking-tight text-slate-900">{title}</h2>
        <div>
          <a href={DISCUSS_URL} className="inline-flex items-center justify-center rounded-lg bg-[#172235] px-5 py-3 text-sm font-semibold text-white hover:bg-[#1B2638]">{primary}</a>
          <p className="mt-4 text-sm leading-6 text-slate-600">
            {auditText}
            <br />
            <a href="/workflow-automation-audit" className="font-semibold text-[#25638f] hover:text-[#172235]">{auditLinkLabel} -&gt;</a>
          </p>
        </div>
      </div>
    </section>
  );
}

export function LeadManagementAutomationPage() {
  const capabilities = [
    ["Lead Capture", "Capture lead details from forms, email, or other approved sources."],
    ["Qualification", "Apply defined rules to determine fit, priority, location, service need, or next step."],
    ["Routing", "Assign the lead to the right person, team, territory, or workflow."],
    ["Immediate Response", "Trigger confirmation, next-step communication, or scheduling instructions."],
    ["Scheduling", "Send booking options, confirmations, and reminders."],
    ["CRM Updates", "Create or update records as the lead progresses."],
    ["Quote Follow-Up", "Trigger reminders after a quote or estimate is sent."],
    ["Stale Lead Follow-Up", "Identify leads that have not progressed and trigger the appropriate follow-up."],
  ];
  const comparison = [
    ["Lead Capture", "Someone enters the information", "Lead details are captured automatically"],
    ["Ownership", "Someone decides who should handle it", "Routing follows defined rules"],
    ["Initial Response", "Response waits until someone sees the lead", "The next response can trigger immediately"],
    ["Scheduling", "Dates are coordinated manually", "Scheduling steps and confirmations are triggered"],
    ["CRM", "Someone updates status manually", "Records update as the workflow progresses"],
    ["Follow-Up", "Someone has to remember", "Follow-up triggers based on workflow status"],
  ];

  return (
    <div className="bg-white text-slate-900">
      <Seo title="Lead Management Automation | Neovex" description="Neovex automates lead capture, qualification, routing, follow-up, scheduling, CRM updates, and next sales steps." />
      <WorkflowHero
        eyebrow="LEAD MANAGEMENT AUTOMATION"
        title="Automate What Happens After a New Lead Comes In."
        copy="Neovex connects lead intake, qualification, routing, follow-up, scheduling, CRM updates, and next steps so new opportunities keep moving without depending on someone remembering every action."
        primary="Discuss Your Lead Workflow"
        secondary="See Lead Automation Examples"
        secondaryHref="#lead-proof"
        steps={["New Inquiry", "Qualified", "Routed", "Follow-Up", "Scheduled", "Next Sales Step"]}
      />

      <section className={`${COOL} px-6 py-16`}>
        <div className="max-w-7xl mx-auto">
          <SectionIntro eyebrow="WHERE LEADS GET STUCK" title="A Lead Comes In. Then the Manual Work Starts." copy="New inquiries may arrive through forms, email, calls, ads, referrals, or other channels. From there, someone often has to enter the information, decide who owns it, respond, schedule, update the CRM, and remember when to follow up again." />
          <TextGrid cols="lg:grid-cols-3" items={[
            ["Lead details entered manually", "Information has to be copied before the workflow can move."],
            ["Ownership decided manually", "Someone has to determine who should handle the opportunity."],
            ["Initial response delayed", "The next message waits until someone sees the lead."],
            ["Scheduling handled back and forth", "Availability and confirmations are coordinated manually."],
            ["CRM status updated manually", "Records lag behind what already happened."],
            ["Quote follow-up depends on memory", "Next steps can stall after the estimate is sent."],
          ]} />
        </div>
      </section>

      <section className="px-6 py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionIntro eyebrow="THE WORKFLOW" title="From New Inquiry to the Next Sales Step." />
          <HorizontalFlow steps={["New Lead", "Lead Captured", "Qualified", "Routed", "Immediate Response", "Scheduled / Follow-Up", "CRM Updated", "Quote or Next Step", "Ongoing Follow-Up"]} />
        </div>
      </section>

      <section className={`${COOL} px-6 py-16`}>
        <div className="max-w-7xl mx-auto">
          <SectionIntro eyebrow="WHAT NEOVEX CAN AUTOMATE" title="The Repetitive Work Between Inquiry and Follow-Up." />
          <TextGrid items={capabilities} />
        </div>
      </section>

      <HumanLoop eyebrow="WHEN A PERSON SHOULD STEP IN" title="Automate the Repeatable Steps. Route the Exceptions." copy="A lead can be routed to a person when qualification is unclear, the request is unusual, pricing requires judgment, the opportunity is high-value, or the customer asks for something outside normal rules." steps={["Lead Workflow", "Exception Detected", "Human Review", "Workflow Continues"]} />
      <Comparison title="What Changes When Lead Management Is Automated." rows={comparison} />

      <section id="lead-proof" className="px-6 py-16 bg-white">
        <div className="max-w-7xl mx-auto grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <DemoVisual title="Lead Intake -> Quote Follow-Up" steps={["Inquiry received", "CRM updated", "Follow-up triggered", "Owner notified"]} />
          <div>
            <SectionIntro eyebrow="REAL-WORLD LEAD AUTOMATION" title="See Lead Workflows Running in Real Businesses." />
            <div className="mt-6 space-y-5">
              <Proof label="Before">New inquiries had to be reviewed, copied into the operating systems, and followed up manually by the team.</Proof>
              <Proof label="Automation">Neovex built a workflow that captures the inquiry, updates the CRM, routes the request, triggers follow-up, and notifies the owner when action is needed.</Proof>
              <Proof label="Impact">The intake and quote follow-up process moves forward with less manual copying and fewer memory-based next steps.</Proof>
            </div>
            <a href="/case-studies/lead-intake-quote-follow-up" className="mt-7 inline-flex text-sm font-semibold text-[#25638f] hover:text-[#172235]">View Case Study -&gt;</a>
          </div>
        </div>
      </section>

      <StartSection title="Have a Lead Workflow That Still Depends on Manual Follow-Up?" primary="Discuss Your Lead Workflow" auditText="Not sure what to automate first?" />
      <Footer />
    </div>
  );
}

export function QuoteApprovalAutomationPage() {
  const capabilities = [
    ["Information Collection", "Capture the details required to price the work."],
    ["Pricing Calculation", "Apply approved business rules to calculate a price, range, or service tier."],
    ["Estimate / Quote Creation", "Generate or prepare the next customer-facing pricing step."],
    ["Approval Tracking", "Detect acceptance and trigger the appropriate next action."],
    ["Invoice / Deposit Creation", "Create the appropriate invoice or payment request in the connected accounting/payment system."],
    ["Contract Delivery", "Trigger the agreement once approval requirements are met."],
    ["Status Updates", "Keep systems updated as quote, payment, and signature status changes."],
    ["Operational Handoff", "Notify the right person or trigger onboarding / fulfillment after approval."],
  ];
  const comparison = [
    ["Pricing", "Someone calculates the price separately", "Approved pricing rules calculate the price or range"],
    ["Quote", "Someone prepares and sends the estimate", "The next pricing step is triggered from the workflow"],
    ["Approval", "Someone checks whether the customer accepted", "Acceptance triggers the next action"],
    ["Invoice", "Someone creates the invoice after approval", "The invoice or deposit request can be created automatically"],
    ["Contract", "Someone sends the agreement separately", "The contract is triggered when requirements are met"],
    ["Handoff", "Someone tells operations the job is ready", "The next operational step is triggered automatically"],
  ];

  return (
    <div className="bg-white text-slate-900">
      <Seo title="Quote & Approval Automation | Neovex" description="Neovex automates quote, approval, invoice, contract, and next-step workflows using approved business rules." />
      <WorkflowHero
        eyebrow="QUOTE & APPROVAL AUTOMATION"
        title="Automate the Steps Between Pricing a Job and Getting It Approved."
        copy="Neovex can connect customer inputs, pricing rules, estimates, approvals, invoices, contracts, and next steps into one workflow - reducing the manual work required to move an opportunity toward approved work."
        primary="Discuss Your Quote Workflow"
        secondary="See How It Works"
        secondaryHref="#quote-workflow"
        steps={["Customer Details", "Price Calculated", "Quote / Estimate", "Approved", "Invoice", "Contract", "Next Step"]}
      />

      <section className={`${COOL} px-6 py-16`}>
        <div className="max-w-7xl mx-auto">
          <SectionIntro eyebrow="WHERE THE PROCESS BREAKS DOWN" title="Pricing the Work Is Only the Beginning." copy="For many businesses, the customer provides information, someone calculates the price, sends an estimate, checks for approval, creates an invoice, sends a contract, confirms payment or signature, and then hands the job off manually." />
          <TextGrid cols="lg:grid-cols-4" items={[
            ["Customer information collected manually", "Details are gathered outside the workflow."],
            ["Pricing calculated separately", "The pricing step depends on a person or separate file."],
            ["Quote created and sent manually", "Customer-facing pricing takes another handoff."],
            ["Approval checked manually", "Someone has to look for acceptance."],
            ["Invoice created after acceptance", "Billing waits for the approval to be noticed."],
            ["Contract sent separately", "Paperwork is triggered outside the main process."],
            ["Payment / signature checked", "Status is verified manually."],
            ["Operations notified manually", "The handoff depends on someone sending the next message."],
          ]} />
        </div>
      </section>

      <section id="quote-workflow" className="px-6 py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionIntro eyebrow="THE WORKFLOW" title="From Customer Information to Approved Work." />
          <HorizontalFlow steps={["Customer Details", "Pricing Rules", "Price / Range Calculated", "Estimate or Quote", "Customer Approval", "Invoice / Deposit Created", "Contract Sent", "Payment / Signature Confirmed", "Job / Onboarding Triggered"]} />
        </div>
      </section>

      <section className={`${COOL} px-6 py-16`}>
        <div className="max-w-7xl mx-auto grid gap-10 lg:grid-cols-[0.42fr_0.58fr] lg:items-center">
          <SectionIntro eyebrow="PRICING LOGIC" title="The Workflow Can Apply the Rules Your Business Already Uses." copy="Customer inputs can be evaluated against defined business rules to calculate a price, range, service tier, quantity, deposit, or next-step requirement before the workflow continues." />
          <div>
            <HorizontalFlow steps={["Customer Inputs", "Business Rules", "Price / Range", "Next Step"]} />
            <div className="mt-8 grid gap-2 text-sm leading-6 text-slate-700 sm:grid-cols-2">
              {["service type", "location", "size / quantity", "frequency", "selected options", "add-ons", "minimums", "pricing ranges", "deposit requirements"].map((item) => <div key={item} className="border-t border-slate-200 pt-2">{item}</div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionIntro eyebrow="WHAT NEOVEX CAN AUTOMATE" title="Connect Pricing, Approval, Payment, and Paperwork." />
          <TextGrid items={capabilities} />
        </div>
      </section>

      <HumanLoop eyebrow="WHEN PRICING NEEDS JUDGMENT" title="Not Every Quote Should Be Fully Automatic." copy="Human review can be required when scope falls outside normal rules, pricing exceeds thresholds, a discount is requested, information is missing, a request is unusual, or approval authority is required." steps={["Pricing Workflow", "Exception", "Human Review", "Quote Continues"]} />

      <section className="px-6 py-16 bg-white">
        <div className="max-w-7xl mx-auto grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <DemoVisual title="Lead Intake -> Quote Follow-Up" steps={["Inquiry received", "CRM updated", "Follow-up triggered", "Owner notified"]} />
          <div>
            <SectionIntro eyebrow="REAL-WORLD EXAMPLE" title="See a Quote Workflow Running in an Operating Business." />
            <div className="mt-6 space-y-5">
              <Proof label="Before">New inquiries had to be reviewed, copied into the operating systems, and followed up manually by the team.</Proof>
              <Proof label="Automation">Neovex built a workflow that captures the inquiry, updates the CRM, routes the request, triggers follow-up, and notifies the owner when action is needed.</Proof>
              <Proof label="Impact">The intake and quote follow-up process moves forward with less manual copying and fewer memory-based next steps.</Proof>
            </div>
            <a href="/case-studies/lead-intake-quote-follow-up" className="mt-7 inline-flex text-sm font-semibold text-[#25638f] hover:text-[#172235]">View Case Study -&gt;</a>
          </div>
        </div>
      </section>

      <Comparison title="What Changes When the Quote Workflow Is Connected." rows={comparison} />

      <section className="px-6 py-14 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionIntro eyebrow="CONNECTED WORKFLOWS" title="Lead Management Does Not Have to Stop at the Quote." copy="Neovex can automate one part of the process or connect multiple workflows as the operation grows." />
          <HorizontalFlow steps={["New Lead", "Lead Management Automation", "Qualified Opportunity", "Quote & Approval Automation", "Approved Work"]} />
          <a href="/workflows/lead-management-automation" className="mt-7 inline-flex text-sm font-semibold text-[#25638f] hover:text-[#172235]">Explore Lead Management Automation -&gt;</a>
        </div>
      </section>

      <StartSection title="Still Calculating, Sending, and Chasing Quotes Manually?" primary="Discuss Your Quote Workflow" auditText="Not sure where the best opportunity is?" auditLinkLabel="Start With a Workflow Automation Audit" />
      <Footer />
    </div>
  );
}

function Proof({ label, children }) {
  return (
    <div>
      <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#25638f]">{label}</div>
      <div className="mt-2 text-sm leading-6 text-slate-700">{children}</div>
    </div>
  );
}
