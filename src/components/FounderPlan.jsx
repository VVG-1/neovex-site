import React from "react";
import { CheckCircle2 } from "lucide-react";

const MEETINGS_URL = "https://meetings.hubspot.com/neovex";

export const workflowOffers = [
  {
    title: "Workflow Automation Audit",
    audience: "For businesses that want to identify and prioritize automation opportunities.",
    price: "Starting at $750",
    cta: "Start With an Audit",
    features: [
      "Workflow review",
      "Automation opportunity mapping",
      "Prioritized recommendations",
      "Roadmap",
    ],
  },
  {
    title: "Workflow Build",
    audience: "For a defined process that is ready to automate.",
    price: "Starting at $2,500",
    cta: "Discuss a Workflow",
    features: [
      "Workflow design",
      "Integration setup",
      "Automation build",
      "Testing",
      "Launch",
      "Documentation",
    ],
  },
  {
    title: "Automation System",
    audience: "For multiple connected workflows or a larger operational process.",
    price: "Custom Scope",
    cta: "Talk to Neovex",
    features: [
      "Multiple workflows",
      "Cross-system automation",
      "Rules and decision logic",
      "AI where appropriate",
      "Testing and implementation",
    ],
  },
  {
    title: "Managed Automation",
    audience: "For ongoing monitoring, maintenance, and workflow improvements.",
    price: "Monthly plans available",
    cta: "Learn About Management",
    features: [
      "Monitoring",
      "Integration maintenance",
      "Troubleshooting",
      "Workflow adjustments",
      "Optimization",
    ],
  },
];

export default function FounderPlan() {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden py-20 px-6 bg-[#F7F6F2] border-t border-stone-200 scroll-mt-28 md:scroll-mt-32"
    >
      <div className="max-w-7xl mx-auto text-center">
        <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#25638f] mb-4">
          Pricing
        </div>

        <h2 className="text-3xl md:text-[2.85rem] md:leading-[1.12] font-bold text-slate-900">
          Ways to Work With Neovex
        </h2>

        <p className="mt-6 text-lg md:text-xl text-slate-700 max-w-3xl mx-auto">
          Start with a focused audit, a defined workflow build, a larger automation system, or ongoing management after launch.
        </p>

        <div className="mt-10 grid md:grid-cols-2 xl:grid-cols-4 gap-6 text-left">
          {workflowOffers.map((offer) => (
            <OfferCard key={offer.title} offer={offer} />
          ))}
        </div>

        <p className="mt-6 text-sm text-slate-700">
          Scope depends on workflow complexity, systems involved, access, testing requirements, and approval steps.
        </p>
      </div>
    </section>
  );
}

function OfferCard({ offer }) {
  return (
    <article className="rounded-lg border border-stone-200 bg-white overflow-hidden flex flex-col">
      <div className="h-px bg-[#25638f]/45" />
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-semibold text-slate-900">{offer.title}</h3>
        <p className="mt-2 text-sm leading-6 text-slate-600">{offer.audience}</p>

        <div className="mt-5 text-2xl font-bold text-slate-900">{offer.price}</div>

        <ul className="mt-5 space-y-3 text-sm text-slate-700 flex-1">
          {offer.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#25638f] mt-0.5 shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <a
          href={MEETINGS_URL}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex items-center justify-center rounded-lg bg-slate-950 text-white px-4 py-3 text-sm font-semibold hover:bg-slate-800"
        >
          {offer.cta}
        </a>
      </div>
    </article>
  );
}
