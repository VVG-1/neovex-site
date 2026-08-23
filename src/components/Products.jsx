import React from "react";
import { CalendarDays, CreditCard, FileCheck2, FolderKanban, Inbox, ReceiptText } from "lucide-react";
import ProductTile from "./ProductTile";

const solutions = [
  {
    title: "Lead Management",
    desc: "Capture, qualify, route, follow up, schedule, and update the CRM.",
    icon: <Inbox className="w-7 h-7" strokeWidth={2.25} aria-hidden="true" />,
    variant: "blue",
  },
  {
    title: "Customer Onboarding",
    desc: "Trigger agreements, forms, payments, welcome communication, and internal setup.",
    icon: <FileCheck2 className="w-7 h-7" strokeWidth={2.25} aria-hidden="true" />,
    variant: "emerald",
  },
  {
    title: "Scheduling & Coordination",
    desc: "Automate bookings, reminders, assignments, confirmations, and calendar updates.",
    icon: <CalendarDays className="w-7 h-7" strokeWidth={2.25} aria-hidden="true" />,
    variant: "violet",
  },
  {
    title: "Quotes & Approvals",
    desc: "Generate, send, track, follow up, and trigger the next step after approval.",
    icon: <ReceiptText className="w-7 h-7" strokeWidth={2.25} aria-hidden="true" />,
    variant: "amber",
  },
  {
    title: "Billing & Collections",
    desc: "Create invoices, send reminders, update records, and escalate overdue accounts.",
    icon: <CreditCard className="w-7 h-7" strokeWidth={2.25} aria-hidden="true" />,
    variant: "rose",
  },
  {
    title: "Administrative Work",
    desc: "Automate email processing, data entry, document routing, reporting, and internal notifications.",
    icon: <FolderKanban className="w-7 h-7" strokeWidth={2.25} aria-hidden="true" />,
    variant: "sky",
  },
];

export default function Products() {
  return (
    <section id="solutions" className="bg-white pt-24 pb-20 px-6 border-t border-gray-100">
      <div className="max-w-7xl mx-auto text-center">
        <div className="text-sm font-semibold text-blue-600 uppercase mb-3">
          What We Automate
        </div>

        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
          Workflows Neovex Can Automate
        </h2>
        <div className="mx-auto mt-3 mb-8 h-1 w-20 rounded-full bg-gradient-to-r from-blue-600 to-sky-400" />

        <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-3xl mx-auto">
          From the first customer inquiry to back-office administration, Neovex connects the steps that are still happening manually.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {solutions.map((solution) => (
            <ProductTile key={solution.title} href="#pricing" {...solution} />
          ))}
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <a
            href="#audit"
            className="text-blue-700 font-medium hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
          >
            Start with a Workflow Automation Audit
          </a>
          <a
            href="#how-it-works"
            className="text-blue-700 font-medium hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
          >
            See how Neovex works
          </a>
        </div>
      </div>
    </section>
  );
}
