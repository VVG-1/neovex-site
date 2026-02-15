import React from "react";
import {
  PhoneCall,
  Globe,
  MessageCircle,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

export default function Outcomes() {
  return (
    <section
      id="outcomes"
      className="relative overflow-hidden py-20 px-6 bg-white scroll-mt-28 md:scroll-mt-32"
    >
      <div className="max-w-7xl mx-auto text-center">
        {/* badge */}
        <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 text-blue-700 px-3 py-1 text-xs font-semibold ring-1 ring-blue-100 mb-4">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-blue-600" aria-hidden="true" />
          Outcomes
        </div>

        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">
          A reliable inbound ops layer — across calls and web leads
        </h2>

        <div className="mx-auto mt-3 mb-8 h-1 w-20 rounded-full bg-blue-600/60" />

        <p className="text-lg md:text-xl text-slate-700 max-w-3xl mx-auto mb-12">
          Neovex installs and runs a managed inbound operations layer that captures every inquiry,
          standardizes intake, and routes the next step inside your existing tools.
          <span className="block text-slate-500 text-base mt-2">
            We monitor performance and tune the workflow so it keeps improving.
          </span>
        </p>

        {/* Cards */}
        <ul role="list" className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <OutcomeCard
            chip="Inbound coverage"
            title="Capture every missed call"
            desc="If your team can’t answer, Neovex captures the caller, collects key details, and sends a clean summary instantly."
            icon={<PhoneCall className="w-5 h-5" />}
            variant="blue"
          />

          <OutcomeCard
            chip="Instant web response"
            title="Respond to web leads in seconds"
            desc="New inquiries get acknowledged, structured, summarized, and routed automatically — no inbox lag."
            icon={<Globe className="w-5 h-5" />}
            variant="sky"
          />

          <OutcomeCard
            chip="Follow-up control"
            title="Stop lead leakage"
            desc="Automatic follow-ups trigger based on your rules so opportunities don’t go cold between touches."
            icon={<MessageCircle className="w-5 h-5" />}
            variant="violet"
          />

          <OutcomeCard
            chip="Standardized intake"
            title="Better qualification up front"
            desc="Neovex asks the right questions every time so you call back prepared and move faster."
            icon={<Sparkles className="w-5 h-5" />}
            variant="emerald"
          />

          <OutcomeCard
            chip="Routing + visibility"
            title="Clean handoff into your tools"
            desc="Summaries route to the right person, inbox, CRM, or pipeline — with consistent formatting and context."
            icon={<ArrowIcon />}
            variant="amber"
          />

          <OutcomeCard
            chip="Managed service"
            title="We run and improve it"
            desc="Not DIY software. We set it up, test it, monitor it, and continuously refine outcomes over time."
            icon={<ShieldCheck className="w-5 h-5" />}
            variant="rose"
          />
        </ul>

        <div className="mt-10">
          <a
            href="https://meetings.hubspot.com/neovex"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800 transition"
          >
            Book an Intro Call →
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------- Card ---------- */

function OutcomeCard({ chip, title, desc, icon, variant = "blue" }) {
  const bgMap = {
    blue: "bg-blue-50 border-blue-100",
    sky: "bg-sky-50 border-sky-100",
    violet: "bg-violet-50 border-violet-100",
    emerald: "bg-emerald-50 border-emerald-100",
    amber: "bg-amber-50 border-amber-100",
    rose: "bg-rose-50 border-rose-100",
  };

  const bg = bgMap[variant] || bgMap.blue;

  return (
    <li className="h-full">
      <div className={`rounded-2xl p-6 text-center h-full border shadow-sm ${bg}`}>
        <div className="mx-auto mb-3 inline-flex items-center gap-2 rounded-full bg-white/80 text-slate-700 px-2.5 py-1 text-xs font-medium ring-1 ring-slate-200">
          {chip}
        </div>

        <div className="mx-auto w-10 h-10 rounded-full bg-white text-blue-700 flex items-center justify-center mb-3 shadow-sm ring-1 ring-slate-200">
          {icon}
        </div>

        {/* fixed heights to keep cards uniform */}
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

/* ---------- Small arrow icon ---------- */

function ArrowIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path
        d="M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
