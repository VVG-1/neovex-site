// src/pages/Products.jsx
import React from "react";
import {
  PhoneCall,
  ClipboardList,
  MessageCircle,
  CalendarDays,
  DollarSign,
  Megaphone,
  Search,
  BadgeCheck,
  ThumbsUp,
  ArrowRight,
} from "lucide-react";

import Footer from "../components/Footer";
import SectionHeader from "../components/SectionHeader";
import { HeroFlowCards } from "../components/HeroFlowCards";

function Tile({ title, desc, icon, href, grad, highlights = [] }) {
  return (
    <a
      href={href}
      aria-label={`Open ${title}`}
      className="group h-full rounded-2xl bg-white ring-1 ring-slate-200 hover:ring-slate-300 shadow-sm hover:shadow-md transition overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
    >
      {/* accent bar */}
      <div className={`h-1 w-full bg-gradient-to-r ${grad}`} />
      {/* body */}
      <div className="p-6 flex flex-col items-center text-center gap-3">
        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${grad} text-white grid place-items-center ring-1 ring-white/60 shadow-sm`}>
          {icon}
        </div>
        <h3 className="text-base md:text-lg font-semibold text-slate-900">{title}</h3>
        <p className="text-sm md:text-base text-slate-600">{desc}</p>

        {highlights.length > 0 && (
          <ul className="mt-1 space-y-1 text-xs text-slate-600">
            {highlights.map((h, i) => (
              <li key={i} className="flex items-center gap-2 justify-center">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-blue-400" />
                {h}
              </li>
            ))}
          </ul>
        )}

        <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-blue-700">
          View product
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </a>
  );
}

export default function ProductsIndex() {
  const heroFlowItems = [
    { icon: <Search className="w-6 h-6" />,         grad: "from-blue-600 to-sky-500",     title: "Found",     desc: "Right prospects & traffic" },
    { icon: <ClipboardList className="w-6 h-6" />,  grad: "from-violet-600 to-fuchsia-500", title: "Captured", desc: "Guided intake, less drop-off" },
    { icon: <PhoneCall className="w-6 h-6" />,      grad: "from-emerald-600 to-teal-500", title: "Answered",  desc: "Instant response 24/7" },
    { icon: <CalendarDays className="w-6 h-6" />,   grad: "from-amber-600 to-orange-500", title: "Booked",    desc: "On your calendar" },
    { icon: <DollarSign className="w-6 h-6" />,     grad: "from-cyan-600 to-blue-500",    title: "Paid",      desc: "Faster collections" },
    { icon: <ThumbsUp className="w-6 h-6" />,       grad: "from-pink-600 to-rose-500",    title: "Social proof", desc: "Reviews & presence" },
  ];

  const integrations = [
    "HubSpot",
    "Salesforce",
    "Google Calendar",
    "Outlook",
    "Gmail",
    "Slack",
    "QuickBooks",
    "Stripe",
    "Twilio",
    "Zapier",
    "Webflow",
    "Facebook",
    "Instagram",
    "Google Business Profile",
    "LinkedIn",
    "X (Twitter)",
  ];

  return (
    <div className="bg-white text-slate-900">
      {/* Hero */}
      <section
        id="products"
        aria-labelledby="hero-title"
        className="px-6 pt-20 md:pt-24 pb-12 border-b border-slate-100"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-10 relative">
          {/* subtle glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-blue-100/40 blur-3xl md:block hidden"
          />
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 text-blue-700 px-3 py-1 text-[11px] font-semibold ring-1 ring-blue-100">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-blue-600" />
              Neovex Suite
            </div>
            <h1 id="hero-title" className="mt-3 text-4xl md:text-5xl font-extrabold tracking-tight">
              Products that turn intent into booked revenue
            </h1>
            <p className="mt-4 text-lg md:text-xl text-slate-700 leading-relaxed max-w-prose">
              From first touch to paid invoice—answer faster, qualify better, book sooner, collect quicker. Fully managed. No new logins. Live in a week.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href="/contact"
                aria-label="Talk to us"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl px-5 h-12 text-sm font-semibold bg-blue-600 text-white hover:bg-blue-700 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white shadow-sm"
              >
                Talk to us
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href="/case-studies"
                aria-label="See Outcomes"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl px-5 h-12 text-sm font-semibold border border-slate-300 bg-white text-slate-800 hover:bg-slate-50 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white shadow-sm"
              >
                See outcomes
                <ArrowRight className="ml-2 h-4 w-4 opacity-70" />
              </a>
            </div>

            <p className="mt-3 text-xs text-slate-500">Month-to-month. Cancel anytime.</p>
          </div>

          {/* Right-side visual */}
          <div className="hidden md:block mt-8 md:mt-0">
            <HeroFlowCards items={heroFlowItems} />
          </div>
        </div>
      </section>

      {/* Why Neovex (brief) */}
      <section className="px-6 py-14 bg-blue-50 border-y border-blue-100">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="Why Neovex"
            title="One stack, measurable impact"
            subtitle="Answer instantly, qualify precisely, book faster, collect sooner, and keep your brand active—without adding headcount."
            variant="primary"
            align="center"
          />
        </div>
      </section>

      {/* Products grid */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Tile
            title="Neovex Voice"
            desc="Answer instantly and book jobs—24/7."
            icon={<PhoneCall className="w-7 h-7" />}
            href="/products/voice"
            grad="from-blue-600 to-sky-500"
            highlights={["Live answering", "In-call qualification", "Calendar booking"]}
          />
          <Tile
            title="Neovex Intake"
            desc="Replace leaky forms with guided intake, quotes, and auto-booking."
            icon={<ClipboardList className="w-7 h-7" />}
            href="/products/intake"
            grad="from-violet-600 to-fuchsia-500"
            highlights={["Chat or form", "Instant quotes", "CRM sync"]}
          />
          <Tile
            title="Neovex Reach"
            desc="Find & enrich prospects, then run email sequences that book meetings."
            icon={<MessageCircle className="w-7 h-7" />}
            href="/products/reach"
            grad="from-emerald-600 to-teal-500"
            highlights={["ICP targeting", "Enriched contacts", "Auto-booking"]}
          />
          <Tile
            title="Neovex Scheduling"
            desc="AI scheduling that books, reschedules, and reminds—without the back-and-forth."
            icon={<CalendarDays className="w-7 h-7" />}
            href="/products/scheduling"
            grad="from-amber-600 to-orange-500"
            highlights={["Web & SMS", "Calendar-aware", "No-show reduction"]}
          />
          <Tile
            title="Neovex Invoicing"
            desc="Send invoices, nudge gently, and collect faster—automatically."
            icon={<DollarSign className="w-7 h-7" />}
            href="/products/invoicing"
            grad="from-cyan-600 to-blue-500"
            highlights={["One-tap pay links", "Auto reminders", "QuickBooks/Stripe"]}
          />
          <Tile
            title="Neovex Social"
            desc="AI-drafted posts you 1-click approve—we publish, request reviews, and track impact."
            icon={<Megaphone className="w-7 h-7" />}
            href="/products/social"
            grad="from-pink-600 to-rose-500"
            highlights={["On-brand drafts", "Cross-posting", "DM/review help"]}
          />
        </div>
      </section>

{/* Integrations marquee (blue theme) */}
<section className="relative px-6 py-20 border-y bg-blue-50 border-blue-100">
  <div className="relative max-w-7xl mx-auto text-center">
    {/* Eyebrow pill */}
    <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 text-blue-700 px-3 py-1 text-xs font-semibold ring-1 ring-blue-200">
      <span className="inline-block h-1.5 w-1.5 rounded-full bg-blue-600" />
      Works with your tools
    </div>

    <h3 className="mt-3 text-2xl md:text-3xl font-extrabold text-slate-900">Integrations</h3>
    <div className="mx-auto mt-3 mb-8 h-1 w-20 rounded-full bg-gradient-to-r from-blue-600 to-sky-400" />

    <div className="relative overflow-hidden mt-8">
      <ul className="flex gap-4 w-max animate-[marquee_32s_linear_infinite] hover:[animation-play-state:paused]">
        {[...integrations, ...integrations].map((name, i) => {
          const pastel = [
            "from-blue-50 to-sky-50",
            "from-violet-50 to-fuchsia-50",
            "from-emerald-50 to-teal-50",
            "from-amber-50 to-orange-50",
          ];
          const tone = pastel[i % pastel.length];

          return (
            <li key={`${name}-${i}`} className="h-full">
              <div className="group relative rounded-2xl border border-blue-100 bg-white shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
                {/* hover accent */}
                <span className="pointer-events-none absolute inset-x-0 top-0 h-[3px] rounded-t-2xl bg-gradient-to-r from-blue-600 to-sky-400 opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="px-4 py-3 flex items-center gap-3">
                  <div className={`grid place-items-center h-10 w-10 rounded-lg bg-gradient-to-br ${tone} ring-1 ring-blue-100 text-slate-700 text-xs font-semibold`}>
                    {name[0]}
                  </div>
                  <span className="text-sm md:text-base font-medium text-slate-900">{name}</span>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>

    <p className="mt-8 text-sm text-slate-700">
      Don’t see your tool?{" "}
      <a
        href="/contact"
        className="text-blue-700 font-semibold underline decoration-blue-400/60 hover:decoration-blue-600"
      >
        Ask us
      </a>{" "}
      — we probably integrate.
    </p>
  </div>

  <style>{`
    @keyframes marquee { 0% {transform: translateX(0%);} 100% {transform: translateX(-50%);} }
  `}</style>
</section>


{/* CTA band */}
<section className="px-6 py-16 bg-white border-y border-slate-100">
  <div className="max-w-7xl mx-auto text-center">
    <SectionHeader
      eyebrow="Get started"
      title="Not sure where to start?"
      subtitle="Tell us your goals and current stack—we’ll recommend the fastest path to booked revenue."
      variant="primary"
      align="center"
    />
    <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
      <a
        href="/contact"
        className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl px-5 h-12 text-sm font-semibold bg-blue-600 text-white hover:bg-blue-700 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white shadow-sm"
      >
        Book a consult
        <ArrowRight className="ml-2 h-4 w-4" />
      </a>
      <a
        href="/products/intake"
        className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl px-5 h-12 text-sm font-semibold border border-slate-300 bg-white text-slate-800 hover:bg-slate-50 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white shadow-sm"
      >
        Start with Intake
        <ArrowRight className="ml-2 h-4 w-4 opacity-70" />
      </a>
    </div>
  </div>
</section>



      <Footer />
    </div>
  );
}
