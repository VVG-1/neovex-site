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
    a: "Neovex can automate workflows across lead management, customer onboarding, scheduling, quotes, approvals, billing, collections, document routing, reporting, and administrative handoffs. The best fit is usually a repeatable process where information or next steps are still moving manually.",
    seoText: "Neovex automates repeatable workflows across lead management, onboarding, scheduling, quotes, approvals, billing, collections, documents, reporting, and administrative handoffs.",
    Icon: GitBranch,
  },
  {
    id: "replace-software",
    q: "Do we have to replace our existing software?",
    a: "Usually, no. Neovex is designed to connect the systems already involved in the process whenever practical. Compatibility depends on the software, access, and integration options available.",
    seoText: "Usually no. Neovex is designed to connect existing business systems whenever practical, depending on software access and integration options.",
    Icon: Link2,
  },
  {
    id: "tools",
    q: "What tools can Neovex connect?",
    a: "Common categories include CRM, email, calendars, forms, spreadsheets, billing systems, document tools, and internal notifications. Exact options depend on the software, permissions, and workflow requirements.",
    seoText: "Neovex can often connect CRM, email, calendars, forms, spreadsheets, billing systems, document tools, and internal notifications depending on permissions and workflow requirements.",
    Icon: Link2,
  },
  {
    id: "ai",
    q: "Does every workflow use AI?",
    a: "No. Neovex uses the simplest reliable method for the workflow, including rules, triggers, system integrations, and routing logic. AI is used only where it meaningfully improves the workflow.",
    seoText: "No. Neovex uses rules, triggers, integrations, routing logic, and AI only where it meaningfully improves the workflow.",
    Icon: Bot,
  },
  {
    id: "cost",
    q: "How much does workflow automation cost?",
    a: "A Workflow Automation Audit is $1,500. A Workflow Build starts at $4,500, an Automation System starts at $10,000, and Managed Automation starts at $1,500/month. Final scope depends on workflow complexity, systems involved, access requirements, testing, and approval logic.",
    seoText: "A Workflow Automation Audit is $1,500. A Workflow Build starts at $4,500, an Automation System starts at $10,000, and Managed Automation starts at $1,500/month.",
    Icon: DollarSign,
  },
  {
    id: "audit-first",
    q: "Do I need a Workflow Automation Audit first?",
    a: "No. The audit is best for businesses that know manual work exists but are not sure which workflows should be automated first. If the workflow is already clearly defined, Neovex can move directly into a Workflow Build.",
    seoText: "No. The audit helps businesses prioritize automation opportunities, but clearly defined workflows can move directly into a Workflow Build.",
    Icon: Settings2,
  },
  {
    id: "timeline",
    q: "How long does a workflow take to build?",
    a: "Timing depends on complexity, number of systems, access, testing, and approval requirements. A defined single workflow is usually faster than a larger system with multiple connected processes.",
    seoText: "Timing depends on workflow complexity, number of systems, access, testing, and approval requirements.",
    Icon: Clock,
  },
  {
    id: "human-judgment",
    q: "What happens when a step requires human judgment?",
    a: "The workflow can route approvals, exceptions, judgment calls, and unusual cases to the right person. Automation should remove repetitive work without eliminating human decision-making where it is needed.",
    seoText: "The workflow can route approvals, exceptions, judgment calls, and unusual cases to the right person when human decision-making is needed.",
    Icon: HelpCircle,
  },
  {
    id: "partial",
    q: "Can Neovex automate only part of a process?",
    a: "Yes. Many engagements start with one painful step or a defined workflow segment. The automation can expand later after the first workflow is tested and running.",
    seoText: "Yes. Neovex can automate one step or a defined workflow segment before expanding later.",
    Icon: CheckCircle,
  },
  {
    id: "after-launch",
    q: "What happens after launch?",
    a: "Some clients operate the completed workflow themselves where appropriate. Others use Managed Automation for monitoring, maintenance, troubleshooting, adjustments, and ongoing improvement after launch.",
    seoText: "After launch, clients can operate completed workflows themselves or use Managed Automation for monitoring, maintenance, troubleshooting, and improvements.",
    Icon: Wrench,
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
          title="Frequently Asked Questions"
          subtitle="Practical answers about automation projects, integrations, AI, pricing, and what happens after launch."
        />
        <Footer />
      </main>
    </div>
  );
}
