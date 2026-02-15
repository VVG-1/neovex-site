// src/pages/Intake.jsx
import React from "react";
import ProductTemplate from "../components/ProductTemplate";
import { ClipboardList, DollarSign, CalendarDays, BadgeCheck, MessageCircle,Link2,UserCheck,Bell, } from "lucide-react"
import IntakeFounderPlan from "../components/IntakeFounderPlan";

export default function IntakePage() {
  return (
    <ProductTemplate
      sectionId="intake"
      title="Neovex Intake"
      subtitle="Turn website visitors into booked revenue—capture, qualify, quote, and auto-schedule 24/7."
      icon={ClipboardList}               // used for the mobile tile
      gradient="from-blue-600 to-sky-500"
      ctaPrimaryHref="https://meetings.hubspot.com/neovex"
      ctaPrimaryText="Book an Intro Call"
      ctaSecondaryHref="/products"
      ctaSecondaryText="All Products"

   heroFlowItems={[
  { icon: <ClipboardList className="w-6 h-6" />, grad: "from-blue-600 to-sky-500",       title: "Lead captured",     desc: "Guided intake with fewer drop-offs" },
  { icon: <BadgeCheck   className="w-6 h-6" />,  grad: "from-emerald-600 to-teal-500",   title: "Qualified",         desc: "Scored & routed automatically" },
  { icon: <DollarSign   className="w-6 h-6" />,  grad: "from-violet-600 to-fuchsia-500", title: "Quote sent",        desc: "Pricing by your rules" },
  { icon: <CalendarDays className="w-6 h-6" />,  grad: "from-amber-600 to-orange-500",   title: "Job booked",desc: "Added to your calendar" },
]}


problem={{
  heading: "Forms leak revenue",
  copy: "Visitors drop off, follow-ups lag, and details get lost—especially after hours.",
  pains: [
    { icon: ClipboardList, title: "High drop-off",            desc: "Long forms and friction make visitors quit" },
    { icon: MessageCircle, title: "Sorting instead of selling", desc: "You spend time qualifying and filtering spam" },
    { icon: CalendarDays,  title: "No instant scheduling",    desc: "Back-and-forth kills momentum" },
    {                       title: "Manual data entry",       desc: "Details are copied later—or never reach the CRM" },
  ],
}}


solution={{
  heading: "Qualify instantly. Book automatically.",
  copy:
    "Replace leaky forms with guided intake that converts—AI-powered chat or form that qualifies, quotes by your rules, and books on your calendar, then syncs to your CRM.",
  points: [
    { icon: ClipboardList, text: "Guided intake (chat or form) that converts" },
    { icon: DollarSign,    text: "Quotes from your pricing rules" },
    { icon: CalendarDays,  text: "Auto-schedules consults or estimates" },
  ],
}}


steps={[
  { title: "Add to your site", desc: "Embed on any page or link from CTAs/ads", icon: Link2 },
  { title: "Set your rules",   desc: "Questions, validation, pricing, booking windows", icon: ClipboardList },
  { title: "Go live",          desc: "Qualify, quote, and auto-schedule—synced to your CRM", icon: UserCheck },
]}


features={[
  { title: "Smart intake (chat or form)", desc: "Guided questions that reduce drop-off",                icon: MessageCircle },
  { title: "Lead scoring & routing",      desc: "Score fit and auto-route by location or service",      icon: ClipboardList },
  { title: "Instant quotes",              desc: "Use your pricing rules; send by SMS or email",         icon: DollarSign },
  { title: "Calendar booking",            desc: "Real-time availability with one-click scheduling",     icon: CalendarDays },
  { title: "Auto confirmations",          desc: "Reminders and follow-ups that cut no-shows",           icon: Bell },
  { title: "CRM & email sync",            desc: "Push details and outcomes to the tools you use",       icon: Link2 },
]}

featuresIntro="Increase booked revenue by turning more visitors into scheduled jobs—capture, qualify, quote, and book automatically."


founderQuote={{
  text:
    "We built Neovex Intake to help service businesses turn website traffic into booked jobs—qualify instantly, quote by your rules, and get on the calendar before they bounce, 24/7.",
  variant: "white",
  founderName: "James D.",
}}



      integrations={[
        "HubSpot",
        "Google Calendar",
        "Gmail",
        "Outlook",
        "QuickBooks",
        "SignWell",
        "Slack",
        "Zapier",
        "Webflow",
      ]}

afterSolution={
  <IntakeFounderPlan
    normalPrice={399}
    founderPrice={199}
    months={3}
    ctaHref="/contact"
  />
}


faqs={[
  { id: "embed", q: "Can we embed it on our website?", a: "Yes. Paste a short snippet on any CMS (Webflow, WordPress, Squarespace, custom). Or link to a hosted page." },
  { id: "chat-or-form", q: "Is it a chat or a form?", a: "Either. Use a conversational chat widget, a clean guided form, or both—per page or campaign." },
  { id: "existing-forms", q: "Does it work with our existing forms?", a: "Replace them entirely or run in parallel—route traffic by page, campaign, or time of day." },
  { id: "quoting", q: "How do quotes work?", a: "We use your pricing rules (service, size, frequency, add-ons). Quotes go out by SMS/email and are logged to your CRM. If a quote can’t be auto-priced, we flag it for review." },
  { id: "calendar", q: "Which calendars do you support?", a: "Google Calendar and Outlook. We respect booking windows, buffers, tech availability, and time zones." },
  { id: "routing", q: "Can you route by location or service?", a: "Yes. Route by zip/territory, service line, or priority—each with its own questions and scheduling rules." },
  { id: "notifications", q: "How are we notified of new leads?", a: "Instant email/SMS/Slack alerts with key details and the booking link. All activity is logged to your CRM if connected." },
  { id: "security", q: "Is it secure? Who owns the data?", a: "Data is encrypted in transit and at rest. You own your data. We follow least-privilege access and standard security practices." },
]}



    />
  );
}
