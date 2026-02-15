// src/pages/Intake.jsx
import React from "react";
import ProductTemplate from "../components/ProductTemplate";
import {
  ClipboardList,
  CalendarDays,
  BadgeCheck,
  MessageCircle,
  Link2,
  UserCheck,
  Bell,
  PhoneCall,
  PhoneOff,
  BarChart2,
  Zap,
} from "lucide-react";
import IntakeFounderPlan from "../components/IntakeFounderPlan";

export default function IntakePage() {
  return (
    <ProductTemplate
      sectionId="intake"
      title="Neovex Inbound Lead Capture"
      subtitle="Never miss another inbound lead—always-on call answering + smart intake built for service businesses that rely on inbound calls."
      icon={PhoneCall} // used for the mobile tile
      gradient="from-blue-600 to-sky-500"
      ctaPrimaryHref="https://meetings.hubspot.com/neovex"
      ctaPrimaryText="Book an Intro Call"
      ctaSecondaryHref="/products"
      ctaSecondaryText="All Products"

      heroFlowItems={[
        {
          icon: <PhoneCall className="w-6 h-6" />,
          grad: "from-blue-600 to-sky-500",
          title: "Inbound answered",
          desc: "No voicemail black hole",
        },
        {
          icon: <ClipboardList className="w-6 h-6" />,
          grad: "from-emerald-600 to-teal-500",
          title: "Lead captured",
          desc: "Details collected automatically",
        },
        {
          icon: <BadgeCheck className="w-6 h-6" />,
          grad: "from-violet-600 to-fuchsia-500",
          title: "Qualified",
          desc: "Scored + prioritized by rules",
        },
        {
          icon: <Bell className="w-6 h-6" />,
          grad: "from-amber-600 to-orange-500",
          title: "Instant handoff",
          desc: "Summary sent to you + CRM",
        },
      ]}

      problem={{
        heading: "Inbound calls are your pipeline—and they’re leaking",
        copy:
          "Service businesses win by answering fast. But when you’re on a job, driving, or after hours, callers don’t wait. They call the next company.",
        pains: [
          {
            icon: PhoneOff,
            title: "Missed inbound leads",
            desc: "If you don’t answer, the job often goes elsewhere",
          },
          {
            icon: BarChart2,
            title: "Slow speed-to-lead",
            desc: "Late callbacks reduce close rates and increase price shopping",
          },
          {
            icon: MessageCircle,
            title: "Unclear details",
            desc: "Voicemails lack scope, urgency, and next steps",
          },
          {
            title: "Admin overload",
            desc: "You spend time chasing calls instead of closing jobs",
          },
        ],
      }}

      solution={{
        heading: "Always-on inbound coverage. Real lead handoff.",
        copy:
          "Neovex ensures every inbound lead gets answered and captured. It runs a natural conversation to collect the right details, qualifies the request, and sends you a structured summary instantly (text/email/CRM) so you can call back and close.",
        points: [
          { icon: Zap, text: "Answer every inbound lead instantly (busy + after-hours)" },
          { icon: ClipboardList, text: "Smart intake tailored to your services and service area" },
          { icon: Bell, text: "Immediate owner handoff + CRM logging (HubSpot supported)" },
        ],
      }}

      steps={[
        {
          title: "Connect your phone line",
          desc: "Forward missed calls, after-hours, or all inbound—your choice",
          icon: Link2,
        },
        {
          title: "Set your rules",
          desc: "What to ask, what counts as qualified, and how to route notifications",
          icon: ClipboardList,
        },
        {
          title: "Go live",
          desc: "Inbound leads answered, captured, qualified, and handed off automatically",
          icon: UserCheck,
        },
      ]}

      features={[
        {
          title: "Always answer inbound leads",
          desc: "Neovex answers when you can’t—so inbound calls don’t turn into lost revenue",
          icon: PhoneCall,
        },
        {
          title: "Smart intake (voice conversation)",
          desc: "Captures name, contact, service type, location, urgency, and preferred timing",
          icon: MessageCircle,
        },
        {
          title: "Lead qualification & prioritization",
          desc: "Flags high-intent requests and prioritizes urgent or high-value leads",
          icon: BadgeCheck,
        },
        {
          title: "Instant owner handoff",
          desc: "You get a clean summary by SMS/email so you can respond fast and close",
          icon: Bell,
        },
        {
          title: "Optional next-step scheduling",
          desc: "If you want, Neovex can propose a callback window or book a consult",
          icon: CalendarDays,
        },
        {
          title: "CRM & email sync",
          desc: "Push lead details and outcomes to HubSpot (or your tools) automatically",
          icon: Link2,
        },
      ]}

      featuresIntro="Never miss another inbound lead. Neovex answers, captures the details, qualifies the request, and hands it to you instantly—built for service businesses that win on inbound calls."

      founderQuote={{
        text:
          "Service businesses live and die by inbound calls. Neovex is built to ensure you never miss another inbound lead—every call gets answered, details get captured, and you get an instant handoff so you can close the job.",
        variant: "white",
        founderName: "James D.",
      }}

      integrations={[
        "HubSpot",
        "Google Calendar",
        "Gmail",
        "Outlook",
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
        {
          id: "positioning",
          q: "Is this for missed calls only—or all inbound calls?",
          a: "Either. You can use Neovex only for missed calls, after-hours, overflow, or as full inbound coverage—whatever matches your operation.",
        },
        {
          id: "service-businesses",
          q: "Who is this built for?",
          a: "Service businesses that rely on inbound calls to win jobs—cleaning, junk removal, HVAC, plumbing, electricians, roofing, landscaping, and more.",
        },
        {
          id: "handoff",
          q: "How do I receive the lead?",
          a: "Instant SMS/email/Slack alerts with a structured summary. If connected, we also log everything to your CRM (HubSpot supported).",
        },
        {
          id: "qualification",
          q: "How does qualification work?",
          a: "We define your qualification rules (service area, job type, urgency, budget signals). Neovex scores and flags priority leads and routes accordingly.",
        },
        {
          id: "crm",
          q: "Will it sync with HubSpot?",
          a: "Yes. We can push lead fields and notes into HubSpot pipelines automatically. If you don’t want an integration, email/SMS summaries work great too.",
        },
        {
          id: "caller-experience",
          q: "Will callers know it’s AI?",
          a: "It can be transparent or framed as an assistant—your choice. Either way, it’s designed to feel natural and helpful, not like a phone tree.",
        },
        {
          id: "security",
          q: "Is it secure? Who owns the data?",
          a: "Data is encrypted in transit and at rest. You own your data. We follow least-privilege access and standard security practices.",
        },
        {
          id: "pricing",
          q: "You said outcomes-based—what does that mean?",
          a: "We align pricing to results—typically tied to qualified leads captured and successfully delivered. You’re paying for outcomes, not seats or dashboards.",
        },
      ]}
    />
  );
}
