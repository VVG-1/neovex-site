import React from "react";
import { Bot, CheckCircle, Clock, DollarSign, GitBranch, HelpCircle, Link2, Settings2, Wrench } from "lucide-react";
import Hero from "../components/Hero";
import Problem from "../components/Problem";
import Products from "../components/Products";
import WorkflowAudit from "../components/WorkflowAudit";
import HowItWorks from "../components/HowItWorks";
import WorkflowProof from "../components/WorkflowProof";
import Outcomes from "../components/Outcomes";
import BeforeAfter from "../components/BeforeAfter";
import ExampleWorkflow from "../components/ExampleWorkflow";
import FounderPlan from "../components/FounderPlan";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

const faqs = [
  {
    id: "kinds",
    q: "What kinds of workflows can Neovex automate?",
    a: "Neovex can automate workflows across lead management, customer onboarding, scheduling, quotes, approvals, billing, collections, document routing, reporting, and administrative handoffs.",
    seoText: "Neovex automates workflows across lead management, customer onboarding, scheduling, quotes, approvals, billing, collections, document routing, reporting, and administrative handoffs.",
    Icon: GitBranch,
  },
  {
    id: "replace-software",
    q: "Do we have to replace our existing software?",
    a: "Usually, no. Neovex typically works across the systems your company already uses. The goal is to connect the tools and automate the work between them, not force a software replacement.",
    seoText: "Usually no. Neovex typically works across existing business systems and automates the work between them instead of forcing software replacement.",
    Icon: Link2,
  },
  {
    id: "tools",
    q: "What tools can Neovex connect?",
    a: "Neovex can often connect CRMs, calendars, email, forms, spreadsheets, billing tools, document tools, and team communication systems. Exact options depend on the software, available integrations, permissions, and workflow requirements.",
    seoText: "Neovex can often connect CRMs, calendars, email, forms, spreadsheets, billing tools, document tools, and team communication systems depending on available integrations and permissions.",
    Icon: Link2,
  },
  {
    id: "ai",
    q: "Does every workflow use AI?",
    a: "No. Neovex uses automation, integrations, rules, and AI where appropriate. The objective is to build the right workflow, not force AI into every process.",
    seoText: "No. Neovex uses automation, integrations, rules, and AI where appropriate. The objective is to build the right workflow.",
    Icon: Bot,
  },
  {
    id: "timeline",
    q: "How long does a workflow take to build?",
    a: "Timing depends on complexity, number of systems, access, testing, and approval requirements. A defined single workflow is usually faster than a larger system with multiple connected processes.",
    seoText: "Timing depends on complexity, number of systems, access, testing, and approval requirements.",
    Icon: Clock,
  },
  {
    id: "human-judgment",
    q: "What happens when a step requires human judgment?",
    a: "The workflow can pause for approval, route an exception to the right person, request a decision, or escalate the task. Human-in-the-loop steps are designed into the process when judgment is required.",
    seoText: "The workflow can pause for approval, route an exception, request a decision, or escalate the task when human judgment is required.",
    Icon: HelpCircle,
  },
  {
    id: "partial",
    q: "Can Neovex automate only part of a process?",
    a: "Yes. Many engagements start with one painful step or a defined workflow segment, then expand after the first automation is tested and running.",
    seoText: "Yes. Neovex can automate one step or a defined workflow segment before expanding.",
    Icon: CheckCircle,
  },
  {
    id: "after-launch",
    q: "What happens after launch?",
    a: "After launch, Neovex tests the workflow in production, monitors performance, maintains integrations, troubleshoots issues, and can adjust or improve the workflow through Managed Automation.",
    seoText: "After launch, Neovex tests, monitors, maintains integrations, troubleshoots issues, and improves workflows through Managed Automation.",
    Icon: Wrench,
  },
  {
    id: "cost",
    q: "How much does workflow automation cost?",
    a: "A Workflow Automation Audit starts at $750. A defined Workflow Build starts at $2,500. Larger automation systems are custom scoped, and Managed Automation is available as a monthly plan.",
    seoText: "A Workflow Automation Audit starts at $750. A Workflow Build starts at $2,500. Larger systems are custom scoped, and Managed Automation is available monthly.",
    Icon: DollarSign,
  },
  {
    id: "audit-first",
    q: "Do I need a Workflow Automation Audit first?",
    a: "No. If you already know what you want automated, you can begin with a Workflow Build. The audit is for businesses that want help finding and prioritizing the best automation opportunity.",
    seoText: "No. Businesses that already know what they want automated can begin with a Workflow Build.",
    Icon: Settings2,
  },
];

export default function CompanyHome() {
  return (
    <div className="bg-white text-gray-900 overflow-x-hidden">
      <main id="main">
        <Hero />
        <Problem />
        <Products />
        <WorkflowAudit />
        <HowItWorks />
        <WorkflowProof />
        <Outcomes />
        <BeforeAfter />
        <ExampleWorkflow />
        <FounderPlan />
        <FAQ
          faqs={faqs}
          bg="white"
          title="Workflow Automation FAQ"
          subtitle="Practical answers about automation projects, integrations, AI, pricing, and what happens after launch."
        />
        <Footer />
      </main>
    </div>
  );
}
