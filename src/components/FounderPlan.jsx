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
    accent: "from-blue-600 to-sky-500",
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
    accent: "from-emerald-600 to-teal-500",
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
    accent: "from-violet-600 to-fuchsia-500",
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
    accent: "from-amber-600 to-orange-500",
  },
];

export default function FounderPlan() {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden py-20 px-6 bg-blue-50 border-t border-blue-100 scroll-mt-28 md:scroll-mt-32"
    >
      <div className="max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/70 text-blue-700 px-3 py-1 text-xs font-semibold ring-1 ring-blue-100 mb-4">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-blue-600" aria-hidden="true" />
          Pricing
        </div>

        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900">
          Ways to Work With Neovex
        </h2>
        <div className="mx-auto mt-3 mb-6 h-1 w-20 rounded-full bg-blue-600/60" />

        <p className="text-lg md:text-xl text-slate-700 max-w-3xl mx-auto">
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
    <article className="rounded-2xl border border-blue-100 bg-white/90 backdrop-blur shadow-sm overflow-hidden flex flex-col">
      <div className={`h-1 bg-gradient-to-r ${offer.accent}`} />
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-semibold text-slate-900">{offer.title}</h3>
        <p className="mt-2 text-sm leading-6 text-slate-600">{offer.audience}</p>

        <div className="mt-5 text-2xl font-extrabold text-slate-900">{offer.price}</div>

        <ul className="mt-5 space-y-3 text-sm text-slate-700 flex-1">
          {offer.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <a
          href={MEETINGS_URL}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex items-center justify-center rounded-xl bg-blue-600 text-white px-4 py-3 text-sm font-semibold hover:bg-blue-700"
        >
          {offer.cta}
        </a>
      </div>
    </article>
  );
}
