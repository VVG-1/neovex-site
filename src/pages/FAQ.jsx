import React from "react";
import Footer from "../components/Footer.jsx";
import FAQ from "../components/FAQ.jsx";
import { Bot, CheckCircle, Clock, DollarSign, GitBranch, HelpCircle, Link2, Settings2, Wrench } from "lucide-react";

const faqs = [
  {
    id: "kinds",
    q: "What kinds of workflows can Neovex automate?",
    a: "Neovex can automate workflows across lead management, customer onboarding, scheduling, quotes, approvals, billing, collections, document routing, reporting, and administrative handoffs.",
    Icon: GitBranch,
  },
  {
    id: "software",
    q: "Do we have to replace our existing software?",
    a: "Usually, no. Neovex typically works across the systems your company already uses and automates the work between them.",
    Icon: Link2,
  },
  {
    id: "tools",
    q: "What tools can Neovex connect?",
    a: "Neovex can often connect CRMs, calendars, email, forms, spreadsheets, billing tools, document tools, and team communication systems. Exact options depend on the software and permissions available.",
    Icon: Link2,
  },
  {
    id: "ai",
    q: "Does every workflow use AI?",
    a: "No. Neovex uses automation, integrations, rules, and AI where appropriate. The objective is to build the right workflow, not force AI into every process.",
    Icon: Bot,
  },
  {
    id: "timeline",
    q: "How long does a workflow take to build?",
    a: "Timing depends on complexity, number of systems, access, testing, and approval requirements.",
    Icon: Clock,
  },
  {
    id: "judgment",
    q: "What happens when a step requires human judgment?",
    a: "The workflow can pause for approval, route an exception, request a decision, or escalate the task to the right person.",
    Icon: HelpCircle,
  },
  {
    id: "part",
    q: "Can Neovex automate only part of a process?",
    a: "Yes. Many projects start with one painful step or workflow segment, then expand after the first automation is running.",
    Icon: CheckCircle,
  },
  {
    id: "launch",
    q: "What happens after launch?",
    a: "Neovex tests, monitors, maintains integrations, troubleshoots issues, and can improve the workflow through Managed Automation.",
    Icon: Wrench,
  },
  {
    id: "cost",
    q: "How much does workflow automation cost?",
    a: "A Workflow Automation Audit starts at $750. A defined Workflow Build starts at $2,500. Larger systems are custom scoped, and Managed Automation is available monthly.",
    Icon: DollarSign,
  },
  {
    id: "audit",
    q: "Do I need a Workflow Automation Audit first?",
    a: "No. If you already know what you want automated, you can begin with a Workflow Build.",
    Icon: Settings2,
  },
];

export default function FAQPage() {
  return (
    <div className="bg-white text-slate-900">
      <section className="px-6 py-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm font-semibold text-blue-600 uppercase mb-3">FAQ</p>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Questions, answered</h1>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl">
            Everything you need to know about workflow automation with Neovex.
          </p>
        </div>
      </section>

      <FAQ faqs={faqs} bg="white" title="Workflow Automation FAQ" subtitle="" />
      <Footer />
    </div>
  );
}
