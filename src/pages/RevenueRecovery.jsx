// src/pages/RevenueRecovery.jsx
import React from "react";
import ProductTemplate from "../components/ProductTemplate";
import {
  ShieldCheck,
  DollarSign,
  Clock,
  PhoneCall,
  BadgeCheck,
  FileText,
  Bell,
  Link2,
  UserCheck,
  Building2,
  Shield,
  ClipboardCheck,
  FileSearch,
} from "lucide-react";

export default function RevenueRecoveryPage() {
  return (
    <ProductTemplate
      sectionId="revenue-recovery"
      title="Neovex Revenue Recovery"
      subtitle="Recover stuck insurance revenue—without adding headcount. We run payer follow-ups on denied & aged AR (60–180 days) so you get cash recovered, AR days reduced, and staff time back."
      icon={DollarSign}
      gradient="from-emerald-600 to-teal-500"
      theme="emerald"
      heroPillText="Fully managed • Shadow-mode pilot • Outcome-based • Audit trail"
      heroNoteText="Start with a shadow-mode pilot. Pay only when value is delivered."
      ctaPrimaryHref="/contact"
      ctaPrimaryText="Get a Recovery Assessment"
      ctaSecondaryHref="/products"
      ctaSecondaryText="How the Pilot Works"
      heroFlowItems={[
        {
          icon: <FileText className="w-6 h-6" />,
          grad: "from-slate-700 to-slate-500",
          title: "Aged AR identified",
          desc: "Denied & 60–180 day claims prioritized for recovery",
        },
        {
          icon: <PhoneCall className="w-6 h-6" />,
          grad: "from-emerald-600 to-teal-500",
          title: "Payers chased",
          desc: "IVR + rep follow-ups handled with documented outcomes",
        },
        {
          icon: <BadgeCheck className="w-6 h-6" />,
          grad: "from-violet-600 to-fuchsia-500",
          title: "Claims cleared",
          desc: "Missing items resolved; exceptions escalated with audit trail",
        },
        {
          icon: <DollarSign className="w-6 h-6" />,
          grad: "from-amber-600 to-orange-500",
          title: "Cash recovered",
          desc: "Recovered dollars + AR movement reported weekly",
        },
      ]}
      problem={{
        heading: "Aged AR is cash you already earned—just not collected.",
        copy:
          "Denied and aged claims create avoidable cash-flow pressure. Follow-ups stall, payer calls pile up, and billing teams burn out chasing reimbursements that should already be paid.",
        pains: [
          {
            icon: Clock,
            title: "AR keeps aging",
            desc: "Claims sit 60–180+ days while cash flow tightens",
          },
          {
            icon: PhoneCall,
            title: "Endless payer calls",
            desc: "IVRs, hold times, and rep handoffs consume staff hours",
          },
          {
            icon: FileText,
            title: "Missing documentation",
            desc: "Small gaps trigger denials and slow resubmissions",
          },
          {
            icon: Building2,
            title: "Staffing & turnover",
            desc: "RCM roles churn fast; the work is repetitive and stressful",
          },
        ],
      }}
      solution={{
        heading: "Follow-ups done for you. Outcomes you can measure.",
        copy:
          "Neovex Revenue Recovery is a fully managed service. We operate payer follow-ups end-to-end, document every outcome, and surface only true exceptions—so your team gets time back and your practice gets paid. You don’t add software or change workflows. You get recovered revenue and clear reporting.",
        points: [
          {
            icon: PhoneCall,
            text: "Payer follow-ups handled (IVR + reps) by AI + human agents",
          },
          {
            icon: BadgeCheck,
            text: "Clean documentation + audit trail with clear next-step routing",
          },
          {
            icon: DollarSign,
            text: "Recovered dollars + AR movement, reported weekly (CFO-ready)",
          },
        ],
      }}
      trustChips={[
        { label: "Non-clinical workflow", icon: ClipboardCheck },
        { label: "Audit trail + documentation", icon: FileSearch },
        { label: "Shadow-mode pilot (2–4 weeks)", icon: Shield },
        { label: "Human-in-the-loop exceptions", icon: BadgeCheck },
        { label: "BAA available", icon: ShieldCheck },
      ]}
      steps={[
        {
          title: "Connect (lightweight)",
          desc: "Start with a secure export (CSV) of denied & aged AR—no deep integration required for the pilot.",
          icon: Link2,
        },
        {
          title: "Shadow-mode pilot",
          desc: "We run follow-ups alongside your team for 2–4 weeks to validate ROI with zero disruption.",
          icon: ShieldCheck,
        },
        {
          title: "Go live + recover",
          desc: "We operate the workflow end-to-end; your team only reviews flagged exceptions.",
          icon: UserCheck,
        },
      ]}
      features={[
        {
          title: "Denial & aged AR triage",
          desc: "Prioritize claims by payer, age, and recovery likelihood.",
          icon: Clock,
        },
        {
          title: "Voice follow-up agents",
          desc: "IVR navigation, rep calls, and outcome capture—handled for you.",
          icon: PhoneCall,
        },
        {
          title: "Documentation & audit trail",
          desc: "Every action logged with outcomes, timestamps, and next steps.",
          icon: FileText,
        },
        {
          title: "Human-in-the-loop exceptions",
          desc: "Edge cases routed safely to your team (or ours) for review.",
          icon: BadgeCheck,
        },
        {
          title: "Weekly ROI reporting",
          desc: "CFO-ready summaries: dollars recovered, AR movement, time saved.",
          icon: DollarSign,
        },
        {
          title: "Alerts & escalation routing",
          desc: "Instant notifications for approvals, requests, or urgent actions.",
          icon: Bell,
        },
      ]}
      featuresIntro="Neovex Revenue Recovery is fully managed—we run payer follow-ups end-to-end and deliver weekly reporting on recovered dollars, AR movement, and exception rates. No new portal required for the pilot."
      founderQuote={{
        text:
          "We built Neovex Revenue Recovery to take the most painful part of revenue cycle—payer follow-ups—and run it end-to-end. You get cash recovered, AR days reduced, and staff time back.",
        variant: "white",
        founderName: "James D.",
      }}
      integrations={[
        "RCM exports (CSV)",
        "Secure file intake",
        "Slack / Email alerts",
        "Zapier",
        "Redox (optional)",
        "EHR/PM systems (pilot → integration)",
      ]}
      faqs={[
        {
          id: "what-is-it",
          q: "Is this software or a managed service?",
          a: "Managed service. We operate the workflow and deliver outcomes. No new portal required for the pilot.",
        },
        {
          id: "pilot",
          q: "How does the pilot work?",
          a: "We start in shadow-mode for 2–4 weeks using denied & aged AR exports. We measure recovered dollars, AR movement, and exception rates before going live.",
        },
        {
          id: "scope",
          q: "What claims do you start with?",
          a: "Aged AR (60–180 days) with a narrow payer scope so ROI is clear and operations are predictable. Then we expand.",
        },
        {
          id: "hipaa",
          q: "Is it HIPAA-compliant?",
          a: "We support HIPAA-aligned workflows, sign a BAA when required, and use encryption in transit and at rest with least-privilege access.",
        },
        {
          id: "coding",
          q: "Do you do medical coding or clinical decisions?",
          a: "No. We focus strictly on administrative follow-up, documentation capture, and routing. Clinical and coding decisions remain with your team.",
        },
        {
          id: "pricing",
          q: "How is pricing structured?",
          a: "Typically a monthly base plus a percentage of recovered revenue. Pricing is outcome-aligned—you pay when value is delivered.",
        },
      ]}
    />
  );
}
