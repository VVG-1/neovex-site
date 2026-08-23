import React from "react";
import { ClipboardCheck, Eye, HandCoins, MessageCircle, MoveRight, UserCheck } from "lucide-react";

const outcomes = [
  {
    chip: "Data movement",
    title: "Less Manual Entry",
    desc: "Information moves between systems automatically.",
    icon: <ClipboardCheck className="w-5 h-5" />,
  },
  {
    chip: "Next steps",
    title: "Faster Follow-Up",
    desc: "Messages and next steps trigger when they should.",
    icon: <MessageCircle className="w-5 h-5" />,
  },
  {
    chip: "Routing",
    title: "Cleaner Handoffs",
    desc: "The right person receives the right information at the right time.",
    icon: <MoveRight className="w-5 h-5" />,
  },
  {
    chip: "Reliability",
    title: "Fewer Dropped Tasks",
    desc: "Work does not disappear because someone forgot a step.",
    icon: <UserCheck className="w-5 h-5" />,
  },
  {
    chip: "Visibility",
    title: "Better Visibility",
    desc: "See where the workflow is and what has already happened.",
    icon: <Eye className="w-5 h-5" />,
  },
  {
    chip: "Team capacity",
    title: "More Capacity",
    desc: "Teams spend less time moving information around and more time on higher-value work.",
    icon: <HandCoins className="w-5 h-5" />,
  },
];

export default function Outcomes() {
  return (
    <section
      id="outcomes"
      className="relative overflow-hidden py-20 px-6 bg-white scroll-mt-28 md:scroll-mt-32"
    >
      <div className="max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 text-blue-700 px-3 py-1 text-xs font-semibold ring-1 ring-blue-100 mb-4">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-blue-600" aria-hidden="true" />
          Outcomes
        </div>

        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900">
          What Changes When the Workflow Runs Itself
        </h2>

        <div className="mx-auto mt-3 mb-8 h-1 w-20 rounded-full bg-blue-600/60" />

        <p className="text-lg md:text-xl text-slate-700 max-w-3xl mx-auto mb-12">
          Automated workflows reduce the repetitive movement of information, keep next steps visible, and make handoffs more consistent.
        </p>

        <ul role="list" className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {outcomes.map((outcome) => (
            <OutcomeCard key={outcome.title} {...outcome} />
          ))}
        </ul>

        <div className="mt-10">
          <a
            href="https://meetings.hubspot.com/neovex"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800 transition"
          >
            Discuss a Workflow
          </a>
        </div>
      </div>
    </section>
  );
}

function OutcomeCard({ chip, title, desc, icon }) {
  return (
    <li className="h-full">
      <div className="rounded-lg p-6 text-center h-full border border-stone-200 bg-stone-50/45 shadow-sm">
        <div className="mx-auto mb-3 inline-flex items-center gap-2 rounded-full bg-white text-slate-700 px-2.5 py-1 text-xs font-medium ring-1 ring-stone-200">
          {chip}
        </div>

        <div className="mx-auto w-10 h-10 rounded-md bg-white text-blue-700 flex items-center justify-center mb-3 shadow-sm ring-1 ring-stone-200">
          {icon}
        </div>

        <h3 className="text-lg font-semibold text-slate-900 mb-1 leading-snug min-h-[3rem]">
          {title}
        </h3>

        <p className="text-sm text-slate-700 leading-6 min-h-[4.5rem]">
          {desc}
        </p>
      </div>
    </li>
  );
}
