import React, { useState, useEffect } from "react";
import { PhoneCall, ChevronDown, Rocket, Settings2, CalendarCheck, DollarSign, Link2, CheckCircle, Bell, Mic, UserPlus, Zap, MessageCircle, ClipboardList, CalendarDays, BarChart2, HelpCircle } from "lucide-react";
import Hero from "../components/Hero";
import Problem from "../components/Problem";
import Products from "../components/Products";
import Outcomes from "../components/Outcomes";
import HowItWorks from "../components/HowItWorks";
import BeforeAfter from "../components/BeforeAfter";
import FounderPlan from "../components/FounderPlan";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import FounderQuote from "../components/FounderQuote";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
  







// ---- put this ABOVE your component ----
const faqs = [
  {
    id: "what-do",
    q: "What does Neovex actually do?",
    a: "Neovex captures every inbound lead — missed calls and website inquiries — responds instantly, collects key details, and routes the lead so you can quote, book, and get paid faster.",
    Icon: Zap,
  },
  {
    id: "go-live",
    q: "How fast can we go live?",
    a: "Most service teams go in about two weeks. We learn more about your business and needs, then connect your phone, website, calendar, and CRM, and configure your lead-capture rules.",
    Icon: Rocket,
  },
  {
    id: "keep-number",
    q: "Do we keep our phone number?",
    a: "Yes. Neovex answers your existing business number or acts as overflow after a few rings.",
    Icon: PhoneCall,
  },
  {
    id: "web-leads",
    q: "Does this work for website leads too?",
    a: "Yes. We instantly capture and respond to form submissions, summarize details, and notify your team so no web lead goes cold.",
    Icon: Link2,
  },
  {
    id: "integrations",
    q: "What tools do you integrate with?",
    a: "We connect with CRMs like HubSpot, calendars (Google/Microsoft), email, SMS, and accounting tools. No custom dev required.",
    Icon: Link2,
  },
  {
    id: "pricing",
    q: "How does pricing work?",
    a: "Simple monthly plan. Founder Plan members get 50% off for the first 3 months. Month-to-month, cancel anytime.",
    Icon: DollarSign,
  },
  {
    id: "security",
    q: "Is it secure?",
    a: "Yes. Data is encrypted in transit and at rest. We follow least-privilege access and standard security practices.",
    Icon: CheckCircle,
  },
];


export default function CompanyHome() {

const integrationsA = [
  { name: "HubSpot" },
  { name: "QuickBooks" },
  { name: "Mailchimp" },
  { name: "SignWell" },
  { name: "Google Calendar" },
  { name: "Zapier" },
  { name: "Airtable" },
];

const integrationsB = [
  { name: "Pipedrive" },
  { name: "Salesforce" },
  { name: "Slack" },
  { name: "Gmail" },
  { name: "Outlook" },
  { name: "Stripe" },
  { name: "Notion" },
];

// pill chip
function Chip({ label }) {
  return (
    <span className="shrink-0 inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur px-3.5 py-2 text-sm font-medium text-slate-700 ring-1 ring-slate-200 shadow-sm hover:bg-white transition">
      {/* decorative dot */}
      <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
      {label}
    </span>
  );
}


   return (
    <div className="bg-white text-gray-900">
 

      <main id="main">
        <Hero />
        <Problem />
        <Products />

   <section id="how-it-works" className="scroll-mt-14">
  <HowItWorks />
</section>

<section id="outcomes" className="scroll-mt-24">
  <Outcomes />
</section>

   
<BeforeAfter />
<FounderQuote
  quote="Neovex is a managed inbound operations layer—capturing missed calls and web inquiries, standardizing intake, and routing the next step inside the tools you already use."
  founderName="James D."
  founderTitle="Founder"
  variant="white"
/>
<FounderPlan />
<FAQ faqs={faqs} bg="white" />
<Footer />

      </main>
    </div>
  );
}
function ProductTile({ title, desc, icon, href = "#", variant = "blue", tone = "tint" }) {
  const iconGradients = {
    blue: "from-blue-600 to-sky-500",
    violet: "from-violet-600 to-fuchsia-500",
    emerald: "from-emerald-600 to-teal-500",
    rose: "from-rose-600 to-pink-500",
    amber: "from-amber-600 to-orange-500",
    sky: "from-sky-600 to-sky-500",
  };

  // Background styles per variant for tint/solid
  const bgStyles = {
    blue:   { tint: "from-blue-50 to-sky-50",       solid: "from-blue-600 to-sky-500" },
    violet: { tint: "from-violet-50 to-fuchsia-50", solid: "from-violet-600 to-fuchsia-500" },
    emerald:{ tint: "from-emerald-50 to-teal-50",   solid: "from-emerald-600 to-teal-500" },
    rose:   { tint: "from-rose-50 to-pink-50",      solid: "from-rose-600 to-pink-500" },
    amber:  { tint: "from-amber-50 to-orange-50",   solid: "from-amber-600 to-orange-500" },
    sky:    { tint: "from-sky-50 to-blue-50",       solid: "from-sky-600 to-blue-500" },
  };

  const iconGradient = iconGradients[variant] || iconGradients.blue;
  const bg = (bgStyles[variant] || bgStyles.blue)[tone === "solid" ? "solid" : "tint"];
  const isSolid = tone === "solid";

  return (
    <a
      href={href}
      aria-label={title}
      className={[
        "group relative block overflow-hidden rounded-2xl p-6 md:p-7 transition-all",
        "bg-gradient-to-br", bg,
        isSolid
          ? "text-white shadow-md ring-1 ring-white/15 hover:shadow-lg"
          : "text-slate-900 border border-gray-100 bg-clip-padding shadow-sm hover:-translate-y-0.5 hover:shadow-md",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 focus-visible:ring-offset-2",
        isSolid ? "focus-visible:ring-offset-transparent" : "focus-visible:ring-offset-white",
      ].join(" ")}
    >
      <div className="flex flex-col items-center text-center gap-3">
        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${iconGradient} text-white
                         flex items-center justify-center ring-1 ring-white/60 shadow-sm
                         transition-transform duration-200 group-hover:scale-105`}>
          {icon}
        </div>

        <h3 className={(isSolid ? "text-white" : "text-gray-900") + " text-base md:text-lg font-semibold"}>
          {title}
        </h3>

        <p className={(isSolid ? "text-white/90" : "text-gray-600") + " text-sm md:text-base leading-6"}>
          {desc}
        </p>
      </div>

      {/* single, shared designer strip (consistent across all variants) */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-blue-600 to-sky-500" />
    </a>
  );
}




function ValueCard({ icon, title, desc }) {
  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
      <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center mb-3">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-1 text-gray-900">{title}</h3>
      <p className="text-sm text-gray-600">{desc}</p>
    </div>
  );
}

function Step({ icon, title, desc }) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center shrink-0 text-white">{icon}</div>
      <div>
        <h4 className="text-sm font-semibold text-gray-900 mb-1">{title}</h4>
        <p className="text-sm text-gray-600">{desc}</p>
      </div>
    </div>
  );
}

function FeatureCard({ title, desc, icon }) {
  return (
    <div className="flex flex-col items-center text-center bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition">
      <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
      <p className="text-sm text-gray-600">{desc}</p>
    </div>
  );
}

function CenteredIcon({ children }) {
return (
<div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
{children}
</div>
);
}

function PainCard({ icon, title, desc, variant = "blue" }) {
  const palettes = {
    blue: "from-blue-600 to-sky-500",         // Voice
    violet: "from-violet-600 to-fuchsia-500", // Intake
    emerald: "from-emerald-600 to-teal-500",  // Scheduling
    rose: "from-rose-600 to-pink-500",        // Outbound/Social
    amber: "from-amber-600 to-orange-500",
  };
  const gradient = palettes[variant] || palettes.blue;

  return (
    <div className="group relative rounded-2xl border border-gray-100 bg-white/70 backdrop-blur p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex flex-col items-center text-center gap-3">
        <div className="relative mb-1">
          <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient} text-white flex items-center justify-center shadow-sm ring-1 ring-white/60`}>
            {icon}
          </div>
        </div>
        <h3 className="text-base md:text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-sm md:text-base leading-6 text-gray-600">{desc}</p>
      </div>
    </div>
  );
}

function LogoChip({ label, logoSrc }) {
  return (
    <span className="group relative inline-flex min-w-[160px] items-center justify-center rounded-2xl p-[1px] bg-gradient-to-br from-slate-100 to-slate-200/60 shadow-sm">
      <span className="relative w-full rounded-[14px] border border-slate-200/70 bg-white/80 backdrop-blur-sm px-4 py-2 text-sm font-medium text-slate-700
                       transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
        <span className="inline-flex items-center gap-2">
          {/* If/when you swap to real logos: use <img src={logoSrc} alt={label} className="h-5 w-auto grayscale group-hover:grayscale-0 transition" /> */}
          <span className="opacity-90 group-hover:opacity-100">{label}</span>
        </span>

        {/* subtle shimmer on hover */}
        <span className="pointer-events-none absolute inset-y-0 -left-1 w-1/3 opacity-0 group-hover:opacity-100 transition-opacity"
              style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,.65), transparent)", transform: "skewX(-12deg)" }} />
      </span>
    </span>
  );
}

function OutcomeCard({ chip, title, desc, icon }) {
  return (
    <div className="rounded-2xl bg-white p-6 border border-white/60 shadow-sm text-center">
      <div className="mx-auto mb-3 inline-flex items-center gap-2 rounded-full bg-slate-100 text-slate-700 px-2.5 py-1 text-xs font-medium ring-1 ring-slate-200">
        {chip}
      </div>
      <div className="mx-auto w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center mb-3">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-slate-900 mb-1">{title}</h3>
      <p className="text-sm text-slate-600">{desc}</p>
    </div>
  );
}

