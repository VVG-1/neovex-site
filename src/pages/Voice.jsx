// src/pages/Voice.jsx
import React from "react";
import ProductTemplate from "../components/ProductTemplate";
import {
  PhoneCall,
  MessageCircle,
  CalendarDays,
  ClipboardList,
  DollarSign,
  Bell,
  Link2,
  UserCheck,
  BadgeCheck,            // ← needed for heroFlowItems
} from "lucide-react";
import VoiceFounderPlan from "../components/VoiceFounderPlan";

export default function VoicePage() {
  return (
    <ProductTemplate
      sectionId="voice"
      title="Neovex Voice"
      subtitle="Turn every call into booked revenue—answer instantly, qualify in-call, quote by your rules, and book jobs 24/7."
      icon={PhoneCall}
      gradient="from-blue-600 to-sky-500"

      ctaPrimaryHref="/contact"
      ctaPrimaryText="Book a Voice demo"
      ctaSecondaryHref="/products"
      ctaSecondaryText="All Products"          // ← match Intake wording

      integrationsTheme="light"                // ← white section like Intake

      /* Match Intake’s right-side visual with stacked flow cards */
heroFlowItems={[
  { icon: <PhoneCall className="w-6 h-6" />,   grad: "from-blue-600 to-sky-500",       title: "Call answered",     desc: "Instant pickup—no voicemail" },
  { icon: <BadgeCheck className="w-6 h-6" />,  grad: "from-emerald-600 to-teal-500",   title: "Qualified in-call", desc: "Playbook-driven questions" },
  { icon: <DollarSign className="w-6 h-6" />,  grad: "from-violet-600 to-fuchsia-500", title: "Quote sent",        desc: "Rule-based pricing via SMS/email" },
  { icon: <CalendarDays className="w-6 h-6" />,grad: "from-amber-600 to-orange-500",   title: "Job booked",        desc: "Added to your calendar" },
]}


      /* Short, revenue-forward intro above Features (like Intake) */
      featuresIntro="Increase booked jobs by answering every call—qualify in-call, quote by your rules, and book directly to your calendar. Fully managed; month-to-month."

problem={{
  heading: "Every missed call costs you",
  copy: "When intent is highest, voicemail and slow follow-up turn revenue into churn.",
  pains: [
    { icon: PhoneCall,     title: "Voicemail dead-end",   desc: "First-try callers don’t retry." },
    { icon: ClipboardList, title: "Messy intake",         desc: "Missing fields mean bad quotes later." },
    { icon: CalendarDays,  title: "No instant booking",   desc: "Empty slots this week = lost dollars." },
    {                      title: "Inconsistent process", desc: "Different reps, different outcomes." },
  ],
}}


solution={{
  heading: "Answer instantly. Book on the call.",
  copy:
    "Neovex Voice is an always-on AI receptionist for service businesses. It answers every call, qualifies in-call, quotes by your rules, and books directly on your calendar—then logs everything to your CRM.",
  points: [
    { icon: PhoneCall,    text: "Instant pickup (24/7)" },
    { icon: DollarSign,   text: "Quotes by your rules" },
    { icon: CalendarDays, text: "Book while they’re on the line" },
  ],
}}


steps={[
  { title: "Connect your number", desc: "Forward or port your line; set hours and routing.", icon: Link2 },
  { title: "Set your playbook",   desc: "Intake questions, pricing rules, scheduling windows, transfers.", icon: ClipboardList },
  { title: "Go live",             desc: "We answer, qualify, quote, book, and log to your CRM—automatically.", icon: UserCheck },
]}



features={[
  { title: "24/7 answering",            desc: "Every call picked up instantly, including after-hours.",                 icon: PhoneCall },
  { title: "In-call qualification",     desc: "Runs your playbook and captures structured intake automatically.",       icon: ClipboardList },
  { title: "On-call quoting",           desc: "Applies your pricing rules; sends quotes by SMS or email.",              icon: DollarSign },
  { title: "Calendar booking",          desc: "Books directly to Google/Outlook with buffers and rules.",               icon: CalendarDays },
  { title: "Confirmations & reminders", desc: "Automatic texts/emails reduce no-shows and last-minute gaps.",           icon: Bell },
  { title: "CRM & inbox sync",          desc: "Logs notes, transcripts, and outcomes to your tools—no new logins.",     icon: MessageCircle },
]}


founderQuote={{
  text:
    "While you’re on the job, Voice answers for you—qualifies callers, quotes your pricing, and books the visit—so you don’t lose jobs to voicemail or after-hours calls.",
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
      ]}

      afterSolution={
<VoiceFounderPlan
  normalPrice={499}
  founderPrice={249}
  months={3}
  minutesIncluded={400}
  overage={1.25}
  ctaHref="/contact"
/>
      }

faqs={[
  {
    id: "keep-number",
    q: "Can we keep our phone number?",
    a: "Yes. We can answer your existing line or act as overflow/after-hours. We can also provision a new number if you prefer."
  },
  {
    id: "go-live",
    q: "How fast can we go live?",
    a: "Most teams are live in under a week. We connect your tools, set up intake and scheduling rules, and test your call flows."
  },
  {
    id: "quoting",
    q: "How are quotes handled on the call?",
    a: "We follow your pricing rules (service, size, frequency, add-ons). If live quotes are off, we capture details and flag your team to follow up."
  },
  {
    id: "calendar",
    q: "Which calendars are supported?",
    a: "Google Calendar and Outlook. Bookings land directly on your calendar with confirmations and reminders."
  },
  {
    id: "escalation",
    q: "Can a caller reach a human agent?",
    a: "Yes—warm transfer to your team, notify by SMS/email, or collect a callback time. You choose the path by scenario."
  },
  {
    id: "billing",
    q: "How do minutes and overage work?",
    a: "Plans include pooled minutes across your lines. Short spam/mis-dials aren’t billed, and we bill connected talk time only. If you exceed the pool, calls continue at a simple per-minute rate."
  },
  {
    id: "capacity",
    q: "How many calls can you handle at once?",
    a: "Multiple concurrent calls. No waiting for a free line—capacity scales with demand."
  },
  {
    id: "privacy",
    q: "Do you record calls or store transcripts?",
    a: "Recording is optional and consent-aware. Transcript retention is configurable. Data is encrypted in transit and at rest; we follow least-privilege access."
  }
]}

    />
  );
}
