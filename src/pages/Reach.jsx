// src/pages/Reach.jsx
import React from "react";
import ProductTemplate from "../components/ProductTemplate";
import {
  Search,
  Database,
  Mail,
  CalendarDays,
  ClipboardList,
  UserCheck,
  BarChart3,
  Shield,
  Link2,
} from "lucide-react";
import ReachFounderPlan from "../components/ReachFounderPlan";

export default function ReachPage() {
  return (
    <ProductTemplate
      sectionId="reach"
      title="Neovex Reach"
      subtitle="Find and enrich the right prospects, then run targeted email sequences that turn them into booked jobs and meetings."
      icon={Mail}
      gradient="from-blue-600 to-sky-500"
      ctaPrimaryHref="/contact"
      ctaPrimaryText="Book a Reach demo"
      ctaSecondaryHref="/products"
      ctaSecondaryText="All Products"
      integrationsTheme="light"
      

      

      /* Right-side visual: stacked flow cards (email-only) */
      heroFlowItems={[
        { icon: <Search className="w-6 h-6" />,    grad: "from-blue-600 to-sky-500",       title: "Prospect found",   desc: "Matches your ICP" },
        { icon: <Database className="w-6 h-6" />,  grad: "from-emerald-600 to-teal-500",   title: "Email verified",   desc: "Validated & de-duped" },
        { icon: <Mail className="w-6 h-6" />,      grad: "from-violet-600 to-fuchsia-500", title: "Email sent",       desc: "Personalized sequences" },
        { icon: <CalendarDays className="w-6 h-6" />, grad: "from-amber-600 to-orange-500", title: "Meeting booked", desc: "On your calendar" },
      ]}

      problem={{
        heading: "Manual prospecting stalls growth",
        copy: "Bad data, slow follow-up, and generic cold email waste time and miss revenue.",
        pains: [
          { icon: Search,    title: "Empty pipeline",      desc: "Finding qualified prospects takes hours." },
          { icon: Database,  title: "Bad/old emails",      desc: "Bounces hurt domain reputation and deliverability." },
          { icon: Mail,      title: "Generic cold email",  desc: "Spray-and-pray underperforms." },
          {                   title: "Slow follow-through", desc: "Leads go cold before you reach them." },
        ],
      }}

      solution={{
        heading: "Always-on email outbound that books meetings",
        copy:
          "Neovex Reach finds and enriches the right contacts, then runs targeted email sequences to convert them—auto-booking on your calendar and syncing to your CRM.",
        points: [
          { icon: Search,       text: "Lead discovery by your ICP." },
          { icon: Database,     text: "Auto-enrichment, email validation" },
          { icon: CalendarDays, text: "Auto-booking + CRM sync" },
        ],
      }}

      steps={[
        { title: "Define your ICP & sources", desc: "Targets, geos, services, industries. Connect your lists.", icon: Link2 },
        { title: "Set your email playbook",   desc: "Messaging, personalization, cadence, handoff rules.",      icon: ClipboardList },
        { title: "Go live",                   desc: "We enrich, sequence, and book—then sync everything.",       icon: UserCheck },
      ]}

      featuresIntro="Increase booked jobs/meetings by finding the right prospects, enriching email data, and automating sequences that convert—fully managed, no new logins."

      features={[
        { title: "Lead discovery",                desc: "Prospects that fit your ICP by service, geo, or industry.",                      icon: Search },
        { title: "Email enrichment & validation", desc: "Verified emails, firmographics, and de-dupe against your CRM.",                 icon: Database },
        { title: "Email sequencing",              desc: "Personalized multi-step campaigns with throttling and reply handling.",          icon: Mail },
        { title: "Auto-booking & routing",        desc: "Drop meetings on your calendar; route by territory or rep.",                    icon: CalendarDays },
        { title: "Deliverability & compliance",   desc: "List hygiene, warm-up guardrails, unsubscribe handling, quiet hours.",          icon: Shield },
        { title: "CRM sync & reporting",          desc: "Create/update records, track replies, and see booked-revenue impact.",          icon: BarChart3 },
      ]}

      founderQuote={{
        text:
          "We built Reach to turn cold email into booked meetings—find the right people, verify emails, and follow up automatically until they convert.",
        variant: "white",
        founderName: "James D.",
      }}

      afterSolution={
        <ReachFounderPlan
          normalPrice={599}
          founderPrice={299}
          months={3}
          contactsIncluded={1000}
          fairUseEmailsPerContact={5}
          contactOverage={0.30}
          ctaHref="/contact"
        />
      }

      integrations={[
        "HubSpot",
        "Salesforce",
        "Google Calendar",
        "Outlook",
        "Gmail",
        "Slack",
        "Zapier",
        "Clearbit",
      ]}

      faqs={[
        { id: "lead-sources", q: "Where do the leads come from?", a: "We pull from reputable data sources and your own lists, filtered by your ICP (service/industry, geo, size). We de-dupe against your CRM." },
        { id: "enrichment",   q: "What enrichment do you perform?", a: "Email verification, firmographics, role/title, location, and basic tech/industry tags where available." },
        { id: "channels",     q: "Which channels are supported?", a: "Email today. SMS/calls can be added later as an optional add-on." },
        { id: "booking",      q: "How does booking work?", a: "Replies are parsed and routed; qualified leads get your booking link. Confirmations and reminders are automatic." },
        { id: "crm",          q: "Which CRMs do you support?", a: "HubSpot and Salesforce to start. We map fields, create/update records, and log activity automatically." },
        { id: "compliance",   q: "Is email compliant?", a: "We honor unsubscribes, quiet hours, and list hygiene. You control content and cadence; we provide best-practice guardrails." },
        { id: "go-live",      q: "How fast can we go live?", a: "Usually under a week: ICP setup, integrations, sequences, and a short test before scaling." },
        { id: "data",         q: "Who owns the data?", a: "You do. Enriched contacts and campaign results are yours; we sync them to your tools." },
      ]}
    />
  );
}
