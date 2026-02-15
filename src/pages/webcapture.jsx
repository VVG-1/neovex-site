// src/pages/WebCapture.jsx
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
  BarChart2,
  Briefcase,
  ShieldCheck,
  MousePointerClick,
  Globe,
  Mail,
  Zap,
  FileText,
} from "lucide-react";

export default function WebCapturePage() {
  return (
    <ProductTemplate
      sectionId="web-capture"
      title="Web Lead Capture (Managed)"
      subtitle="When someone submits your website form, Neovex responds instantly, captures the right details, qualifies the lead, and routes a clean summary to your team—so you reply fast and convert more inquiries."
      gradient="from-blue-600 to-sky-500"
      faqTitle="Common questions about web lead capture"
      faqSubtitle="Everything you need to know about setup, forms, routing, and data privacy."

      ctaPrimaryHref={MEETINGS_URL}     // if you want it consistent with the other page
      ctaPrimaryText="Book a Setup Call"
      ctaSecondaryHref="/#founder-plan" // optional: bundle anchor
      ctaSecondaryText="Founder Plan (Calls + Web)"

      proofStrip={[
        {
          icon: <Briefcase className="w-4 h-4" />,
          text: "Built for field service teams with real inbound volume",
        },
     
      ]}


heroFlowItems={[
  {
    icon: <MousePointerClick className="w-6 h-6" />,
    grad: "from-blue-600 to-sky-500",
    title: "Form submitted",
    desc: "New quote / service request hits your site",
  },
  {
    icon: <ClipboardList className="w-6 h-6" />,
    grad: "from-emerald-600 to-teal-500",
    title: "Details captured",
    desc: "Job type, location, timing, and contact info",
  },
  {
    icon: <BadgeCheck className="w-6 h-6" />,
    grad: "from-violet-600 to-fuchsia-500",
    title: "Qualified + categorized",
    desc: "Checks fit (service area, job type, urgency)",
  },
  {
    icon: <Bell className="w-6 h-6" />,
    grad: "from-amber-600 to-orange-500",
    title: "Routed instantly",
    desc: "Text/email + clean summary (and CRM sync if enabled)",
  },
]}


problem={{
  heading: "Website leads don’t convert themselves",
  copy:
    "When someone submits a form, speed matters. If the inquiry sits in an inbox, lacks key details, or isn’t routed correctly, you lose the job to the company that responds first.",
  pains: [
    {
      icon: Globe,
      title: "Form emails get buried",
      desc: "Leads land in a shared inbox with no routing or ownership",
    },
    {
      icon: BarChart2,
      title: "Slow speed-to-lead",
      desc: "Delays kill conversions — most buyers contact multiple companies",
    },
    {
      icon: FileText,
      title: "Incomplete job details",
      desc: "Basic forms miss size, scope, urgency, and qualification signals",
    },
    {
      icon: Zap,
      title: "No lead prioritization",
      desc: "High-intent buyers aren’t flagged or routed differently",
    },
  ],
}}


solution={{
  heading: "Capture the lead. Qualify it. Respond first.",
  copy:
    "When someone submits your website form, Neovex enriches the inquiry, checks fit against your rules, and sends you a structured lead summary instantly—so you can respond in minutes, not hours.",
  points: [
    { icon: ClipboardList, text: "Structured intake tailored to your services and job types" },
    { icon: BadgeCheck, text: "Automatic fit checks (service area, scope, urgency)" },
    { icon: Link2, text: "Connects to your existing website form — no rebuild required" },
  ],
}}


afterSolution={
  <>
    <WebLeadSummaryVisual />
    <PricingCard />
  </>
}


steps={[
  {
    title: "Connect your website form",
    desc: "Keep your current form — we plug Neovex in for you",
    icon: Globe,
  },
  {
    title: "Tell us what to ask",
    desc: "We set up the questions that get you the details you need",
    icon: ClipboardList,
  },
  {
    title: "Start getting better inquiries",
    desc: "You’ll get instant text summaries so you can call and book",
    icon: UserCheck,
  },
]}


   features={[
  {
    title: "Every inquiry is captured",
    desc: "No more buried emails or missed form fills — every website lead is tracked and handled",
    icon: MousePointerClick,
  },
  {
    title: "Collects quote-ready details",
    desc: "Captures name, contact, service type, location, urgency, and any custom fields you require",
    icon: ClipboardList,
  },
  {
    title: "Qualifies before you call",
    desc: "Checks service area, job type, and urgency so your team focuses on real opportunities",
    icon: BadgeCheck,
  },
  {
    title: "Instant lead summaries by text",
    desc: "Receive a structured summary immediately so you can respond first and book faster",
    icon: Bell,
  },
  {
    title: "Automatic customer confirmation",
    desc: "Sends a quick, professional acknowledgment so buyers know you received their request",
    icon: MessageCircle,
  },
  {
    title: "CRM-ready and organized",
    desc: "Pushes inquiries into HubSpot (or your tools) so your pipeline stays clean and trackable",
    icon: Link2,
  },
]}



featuresIntro="Website buyers expect fast responses. Neovex captures every inquiry, gathers quote-ready details, and sends you a structured summary instantly — so you can respond first and win more jobs."
      
founderQuote={{
  text:
    "Every website inquiry is someone raising their hand to hire you. Neovex ensures you see it instantly, get the right details, and respond before your competitor does.",
  variant: "white",
  founderName: "James D.",
}}


integrations={[
  "Your Existing Website Form",
  "SMS / Text Notifications",
  "Email Notifications",
  "HubSpot CRM",
  "Google Calendar",
  "Outlook Calendar",
]}

faqs={[
  {
    id: "how-works",
    q: "How does website capture work?",
    a: "When someone submits your website form, Neovex captures the inquiry instantly, gathers structured job details, applies your qualification rules, and sends your team a clean summary via SMS, email, and/or CRM.",
  },
  {
    id: "existing-forms",
    q: "Do we need to change our website form?",
    a: "No. We connect directly to your existing form behind the scenes. If needed, we can also help optimize your form to collect better qualification data.",
  },
  {
    id: "what-collected",
    q: "What information does it collect?",
    a: "Name, phone/email, service requested, location, urgency, preferred timing, and any custom fields you require (e.g., square footage, budget range, photos, etc.).",
  },
  {
    id: "routing",
    q: "How does our team receive the inquiry?",
    a: "Your team receives an instant structured summary via SMS and/or email, and it can be logged directly into HubSpot or your CRM for tracking.",
  },
  {
    id: "fit-check",
    q: "How does qualification work?",
    a: "We define simple rules together — such as service area, job type, urgency, and other criteria. Neovex flags high-priority inquiries so your team focuses on the right work first.",
  },
  {
    id: "follow-up",
    q: "Does the customer receive confirmation?",
    a: "Yes. Neovex can send an immediate confirmation message so the customer knows their request was received and your team will follow up.",
  },
  {
    id: "crm",
    q: "Does it integrate with HubSpot or other tools?",
    a: "Yes. We support HubSpot natively. If you use other systems, we can route structured summaries via SMS/email or connect via integration.",
  },
  {
    id: "security",
    q: "How is our data handled?",
    a: "You own your data. Neovex only uses it to deliver your service. We do not sell, share, or use customer data to train external AI models.",
  },
  {
    id: "pricing",
    q: "How is pricing structured?",
    a: "Pricing is monthly and based on website inquiry volume. You can start at a lower tier and scale as inbound demand grows.",
  },
]}


    />
  );
}

function WebLeadSummaryVisual() {
  return (
<section className="bg-blue-50 py-12 md:py-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6">
        {/* LEFT */}
        <div>
          <p className="text-sm font-semibold text-blue-600 uppercase mb-3">
            What You Receive
          </p>

          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
            A Clean Lead Summary — Delivered Instantly
          </h2>

          <p className="text-lg text-gray-600 mb-6">
            Neovex doesn’t just forward a form email. It turns the submission into
            a structured summary so you can respond fast and quote confidently.
          </p>

          <ul className="space-y-4 text-base text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold">✓</span> Name + phone/email
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold">✓</span> Service requested + location
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold">✓</span> Urgency + preferred timing
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold">✓</span> Qualifiers (size, budget signals, notes)
            </li>
          </ul>

          <p className="mt-6 text-sm text-gray-500 italic">
            No digging through inboxes. Just take action.
          </p>
        </div>

        {/* RIGHT */}
        <div className="space-y-4">
          {/* SMS Notification */}
          <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
            <div className="px-4 py-3 border-b border-slate-100 flex items-center justify-between">
              <div className="text-xs font-semibold text-slate-600">
                📲 SMS — New Website Lead
              </div>
              <div className="text-xs text-slate-400">
                delivered in <span className="font-semibold text-slate-700">5s</span>
              </div>
            </div>

            <div className="p-4">
              {/* bubble */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-sm text-slate-700 leading-6">
                <div className="font-semibold text-slate-900 mb-2">
                  Web Lead: Jordan K. (River North)
                </div>

                <div className="space-y-1">
                  <div>
                    <span className="text-slate-500">Service:</span>{" "}
                    <span className="font-medium text-slate-900">Office Cleaning</span>
                  </div>
                  <div>
                    <span className="text-slate-500">Email:</span>{" "}
                    <span className="font-medium text-slate-900">jordan@company.com</span>
                  </div>
                  <div>
                    <span className="text-slate-500">Phone:</span>{" "}
                    <span className="font-medium text-slate-900">(312) 555-0142</span>
                  </div>
                  <div>
                    <span className="text-slate-500">Urgency:</span>{" "}
                    <span className="font-semibold text-amber-600">Wants pricing this week</span>
                  </div>
                </div>

                <div className="mt-3 pt-3 border-t border-slate-200 text-slate-600">
                  <span className="font-semibold text-slate-900">Notes:</span>{" "}
                  Recurring 2x/week cleaning (~4,500 sq ft). Interested in evenings.
                  Asked for next available start date.
                </div>

                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="text-xs bg-white border border-slate-200 rounded-full px-3 py-1 text-slate-600">
                    ✅ Fits criteria
                  </span>
                  <span className="text-xs bg-white border border-slate-200 rounded-full px-3 py-1 text-slate-600">
                    📍 In service area
                  </span>
                  <span className="text-xs bg-white border border-slate-200 rounded-full px-3 py-1 text-slate-600">
                    ⚡ High intent
                  </span>
                </div>
              </div>

              <div className="mt-3 text-xs text-slate-400">
                Sent via SMS / Email / HubSpot (if connected)
              </div>
            </div>
          </div>

          {/* CRM Note (optional extra card for “premium” feel) */}
          <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
            <div className="px-4 py-3 border-b border-slate-100 flex items-center justify-between">
              <div className="text-xs font-semibold text-slate-600">
                🗂️ CRM — Lead Logged
              </div>
              <div className="text-xs text-slate-400">auto-created</div>
            </div>

            <div className="p-4 text-sm text-slate-700">
              <div className="flex items-center justify-between">
                <div className="font-semibold text-slate-900">Jordan K. — Web Inquiry</div>
                <span className="text-xs rounded-full bg-blue-50 text-blue-700 ring-1 ring-blue-100 px-2.5 py-1 font-semibold">
                  New
                </span>
              </div>

              <div className="mt-2 text-slate-600">
                Source: Website form • Location: River North • Service: Office Cleaning
              </div>

              <div className="mt-3 flex flex-wrap gap-2">
                <span className="text-xs bg-white border border-slate-200 rounded-full px-3 py-1 text-slate-600">
                  Next step: Call within 10 minutes
                </span>
                <span className="text-xs bg-white border border-slate-200 rounded-full px-3 py-1 text-slate-600">
                  Priority: High
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



function Row({ label, value }) {
  return (
    <div className="flex justify-between gap-4">
      <span className="text-gray-500">{label}</span>
      <span className="font-medium text-gray-900 text-right">{value}</span>
    </div>
  );
}

const MEETINGS_URL = "https://meetings.hubspot.com/neovex";

function PricingCard() {
  return (
    <section
      className="
        relative left-1/2 right-1/2 w-screen
        -ml-[50vw] -mr-[50vw]
        bg-white border-y border-slate-100
        py-16
      "
    >
      <div className="px-6">
        <div className="mx-auto max-w-4xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm text-left">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div className="text-sm font-semibold text-blue-700">
                Web Capture Pricing
              </div>
              <div className="mt-1 text-2xl md:text-3xl font-extrabold text-slate-900">
                Starting at $149/mo
              </div>
              <div className="mt-1 text-sm text-slate-600">
                Based on inquiry volume · + $399 one-time setup
              </div>
            </div>

            <a
              href={MEETINGS_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center bg-blue-600 text-white px-5 py-3 rounded-xl text-sm font-semibold hover:bg-blue-700"
            >
              Get Started
            </a>
          </div>

          <ul className="mt-5 grid sm:grid-cols-2 gap-3 text-sm text-slate-700">
            <li>✅ Instant SMS/email lead summaries</li>
            <li>✅ Fit check rules (service area, job type)</li>
            <li>✅ Customer confirmation message</li>
            <li>✅ Optional CRM sync (HubSpot)</li>
          </ul>

          <div className="mt-4 text-sm text-slate-600">
            Want calls + web leads covered?{" "}
            <a className="text-blue-700 font-semibold hover:underline" href="/#founder-plan">
              See the Founder Plan
            </a>
            .
          </div>
        </div>
      </div>
    </section>
  );
}
