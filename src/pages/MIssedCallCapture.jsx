// src/pages/MissedCallCapture.jsx
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
  PhoneOff,
  BarChart2,
  Briefcase,
  ShieldCheck,
} from "lucide-react";

const MEETINGS_URL = "https://meetings.hubspot.com/neovex";

export default function MissedCallCapturePage() {
  return (
    <ProductTemplate
      sectionId="missed-call-capture"
      title="Managed Missed Call Capture"
      subtitle="When you miss a call, Neovex responds instantly, captures job details, and routes a clean summary to your dispatcher or team—so you call back faster and convert more inquiries."
      gradient="from-blue-600 to-sky-500"
      faqTitle="Common questions about missed call capture"
      faqSubtitle="Everything you need to know about setup, call handling, routing, and data privacy."
      ctaPrimaryHref={MEETINGS_URL}
      ctaPrimaryText="Book a 10-min Intro"
      ctaSecondaryHref="/#founder-plan"
      ctaSecondaryText="Founder Plan (Calls + Web)"
      proofStrip={[
        { icon: <Briefcase className="w-4 h-4" />, text: "Built for field service teams with real inbound volume" },
  
      ]}

     
     
     
heroFlowItems={[
  {
    icon: <PhoneOff className="w-6 h-6" />,
    grad: "from-blue-600 to-sky-500",
    title: "Call missed",
    desc: "Neovex answers instantly — no voicemail",
  },
  {
    icon: <ClipboardList className="w-6 h-6" />,
    grad: "from-emerald-600 to-teal-500",
    title: "Structured intake",
    desc: "Job type, location, urgency, fit",
  },
  {
    icon: <BadgeCheck className="w-6 h-6" />,
    grad: "from-violet-600 to-fuchsia-500",
    title: "Lead qualification",
    desc: "Service area + job criteria verified",
  },
  {
    icon: <Bell className="w-6 h-6" />,
    grad: "from-amber-600 to-orange-500",
    title: "Team routing",
    desc: "Summary sent to dispatcher + CRM",
  },
]}


    problem={{
  heading: "Missed calls quietly leak revenue",
  copy:
    "When your team misses inbound calls—during peak hours, after-hours, or while dispatch is overloaded—prospects don’t wait. They call the next company. Voicemail rarely converts high-intent leads.",
  pains: [
    {
      icon: PhoneOff,
      title: "Inbound calls go unanswered",
      desc: "Overflow, busy lines, or after-hours gaps",
    },
    {
      icon: BarChart2,
      title: "Delayed response time",
      desc: "By the time someone calls back, the job is already booked elsewhere",
    },
    {
      icon: MessageCircle,
      title: "Unstructured intake",
      desc: "Voicemails lack job type, urgency, service area, and fit details",
    },
    {
      icon: ClipboardList,
      title: "Manual follow-up burden",
      desc: "Dispatchers spend time chasing callbacks instead of booking work",
    },
  ],
}}

     solution={{
  heading: "Turn missed calls into qualified, routed opportunities",
  copy:
    "When your team misses a call, Neovex steps in immediately, captures structured job details, qualifies the lead based on your rules, and routes a clean summary into your workflow — so your team responds fast and closes more work.",
  points: [
    { icon: PhoneOff, text: "Instant response to missed + after-hours calls" },
    { icon: ClipboardList, text: "Structured intake tailored to your services and service area" },
    { icon: Link2, text: "Seamless integration with your existing phone number and CRM" },
  ],
}}

      // Insert pricing + lead summary visual after solution
      afterSolution={
        <>
     
          <LeadSummaryVisual />
               <PricingCard />
        </>
      }
steps={[
  {
    title: "Connect your existing phone line",
    desc: "We configure missed-call and after-hours routing — no number change required",
    icon: Link2,
  },
  {
    title: "Define your intake + qualification rules",
    desc: "We tailor structured job questions and fit criteria to your services and service area",
    icon: ClipboardList,
  },
  {
    title: "Go live with managed inbound coverage",
    desc: "Missed calls are captured, qualified, summarized, and routed to your team instantly",
    icon: UserCheck,
  },
]}
featuresIntro="If you miss 3–5 calls a week, that’s dozens of jobs per year walking to competitors. Neovex installs an inbound safety net — so missed calls turn into real opportunities instead of lost revenue."
features={[
  {
    title: "Instant missed-call coverage",
    desc: "Calls are answered immediately when you're busy or after-hours — reducing lost jobs during peak hours.",
    icon: PhoneOff,
  },
  {
    title: "Structured job intake",
    desc: "Captures name, contact info, service type, location, urgency, and custom questions — so you call back prepared, not guessing.",
    icon: MessageCircle,
  },
  {
    title: "Fit + priority filtering",
    desc: "Applies your service-area and job-type rules to highlight high-value leads and reduce wasted callbacks.",
    icon: BadgeCheck,
  },
  {
    title: "Ready-to-close summaries",
    desc: "Instant SMS/email notifications with structured details so your team can respond within minutes — not hours.",
    icon: Bell,
  },
  {
    title: "Callback window collection",
    desc: "Collects preferred callback times to reduce phone tag and increase connection rates.",
    icon: CalendarDays,
  },
  {
    title: "CRM logging (optional)",
    desc: "Pushes structured lead data directly into HubSpot or your existing tools for visibility and tracking.",
    icon: Link2,
  },
]}

founderQuote={{
  text:
    "Growing service teams don’t lose jobs because of bad work — they lose them because they miss calls. Neovex ensures every inbound opportunity is captured, structured, and routed instantly, so your team responds fast and closes more of the work you’re already earning.",
  variant: "white",
  founderName: "James D.",
}}

      integrations={[
        "Phone Line",
        "SMS/Text",
        "Email",
        "Google Calendar",
        "Outlook Calendar",
        "HubSpot CRM",
      ]}
   faqs={[
  {
    id: "how-works",
    q: "How does missed call capture work?",
    a: "If your team doesn’t answer, Neovex responds instantly. It captures structured job details, checks qualification rules you define, and delivers a clean summary to your team via SMS, email, or CRM — so follow-up happens fast with context.",
  },
  {
    id: "busy-afterhours",
    q: "Can we use it only when lines are busy or after hours?",
    a: "Yes. You can route only missed calls, only after-hours calls, or use Neovex as a backup layer during peak volume. It adapts to your team’s workflow.",
  },
  {
    id: "existing-number",
    q: "Do we need to change our phone number?",
    a: "No. Neovex works with your existing number. We configure missed-call and/or after-hours routing so calls are only handled when you want them to be.",
  },
  {
    id: "what-collected",
    q: "What details does Neovex collect?",
    a: "Caller name, phone number, service type, location, urgency, preferred timing, plus any custom intake questions you define (property size, budget signals, photos link, etc.). The intake is structured — not just a voicemail.",
  },
  {
    id: "handoff",
    q: "How does the lead handoff work?",
    a: "Your team receives an instant, structured summary via SMS or email, and optionally in your CRM. The goal is simple: reduce response time and increase close rate.",
  },
  {
    id: "fit-check",
    q: "How does qualification work?",
    a: "We define simple rules for what qualifies as a good lead (service area, job type, urgency, volume thresholds). Neovex flags priority opportunities and can route them differently if needed.",
  },
  {
    id: "crm",
    q: "Will it sync with our CRM?",
    a: "Yes. We support HubSpot natively. If you use another CRM, we can connect it or deliver structured summaries your team can process immediately. Setup is handled for you.",
  },
  {
    id: "caller-experience",
    q: "What does the caller experience feel like?",
    a: "Professional, clear, and conversational — not a phone tree. The assistant reflects your brand tone and asks only the questions required to capture the job properly.",
  },
  {
    id: "security",
    q: "Who owns the data?",
    a: "You do. Your data is used solely to deliver your service. We do not sell it, share it, or use it to train external AI systems. Access is restricted to authorized support staff for setup and maintenance.",
  },
  {
    id: "pricing",
    q: "How is pricing structured?",
    a: "Missed Call Capture starts at $179/month based on call volume, plus a one-time onboarding fee. For teams that want calls and web leads covered together, the Founder Plan bundles both under one managed system.",
  },
]}

    />
  );
}

/* ---------- Added sections ---------- */


function LeadSummaryVisual() {
  return (
    <section className="bg-blue-50 py-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6">
        
        {/* LEFT */}
        <div>
          <p className="text-sm font-semibold text-blue-600 uppercase mb-3">
            What Your Team Receives
          </p>

          <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
            A Structured Lead Summary — Delivered in Seconds
          </h2>

          <p className="text-lg text-gray-600 mb-6">
            Neovex captures structured intake data — not just a voicemail — so your team
            can respond immediately with full context and close faster.
          </p>

          <ul className="space-y-4 text-base text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold">✓</span>
              Caller identity + verified contact info
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold">✓</span>
              Service request + job location
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold">✓</span>
              Urgency + requested timeline
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold">✓</span>
              Qualification status + next action
            </li>
          </ul>

          <p className="mt-6 text-sm text-gray-500 italic">
            Faster response times. Higher close rates. No callback guesswork.
          </p>
        </div>

        {/* RIGHT */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
          
          <div className="flex items-center justify-between mb-4">
            <div className="text-xs font-semibold text-gray-500">
              New Qualified Lead — Missed Call Captured
            </div>
            <div className="text-xs text-gray-400">
              Delivered in <span className="font-semibold text-gray-700">8 seconds</span>
            </div>
          </div>

          <div className="space-y-3 text-sm">
            <Row label="Caller" value="Sarah M." />
            <Row label="Phone" value="(312) 555-0194" />
            <Row label="Service" value="Office Cleaning — Recurring" />
            <Row label="Location" value="West Loop, Chicago" />
            <Row
              label="Priority"
              value={
                <span className="font-semibold text-amber-600">
                  High — Needs service this week
                </span>
              }
            />

            <div className="pt-4 border-t border-gray-200">
              <p className="text-gray-600">
                <strong>Summary:</strong> ~3,000 sq ft office. Interested in weekly
                recurring service. Morning availability preferred.
              </p>
            </div>

            <div className="pt-4 border-t border-gray-200 flex flex-wrap gap-2">
              <span className="text-xs border border-gray-200 rounded-full px-3 py-1 text-gray-600">
                ✅ In service area
              </span>
              <span className="text-xs border border-gray-200 rounded-full px-3 py-1 text-gray-600">
                📅 Callback requested
              </span>
              <span className="text-xs border border-gray-200 rounded-full px-3 py-1 text-gray-600">
                🔎 Meets qualification rules
              </span>
            </div>
          </div>

          <div className="mt-4 text-xs text-gray-400">
            Delivered via SMS · Email · CRM (HubSpot supported)
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

function PricingCard() {
  return (
    <section
      className="
        relative left-1/2 right-1/2 w-screen
        -ml-[50vw] -mr-[50vw]
        bg-white border-t border-slate-100
        py-20
      "
    >
      <div className="px-6">
        <div className="mx-auto max-w-5xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm text-left">

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            
            <div>
              <div className="text-sm font-semibold text-blue-700 uppercase tracking-wide">
                Missed Call Capture
              </div>

              <div className="mt-2 text-3xl md:text-4xl font-extrabold text-slate-900">
                Starting at $179<span className="text-lg font-semibold text-slate-500">/mo</span>
              </div>

              <div className="mt-2 text-sm text-slate-600">
                Scales with call volume · + $399 one-time onboarding
              </div>

              <div className="mt-4 text-sm text-slate-500">
                Often pays for itself with a single recovered job.
              </div>
            </div>

            <a
              href={MEETINGS_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center bg-slate-900 text-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-black transition"
            >
              Book a Setup Call
            </a>
          </div>

          <ul className="mt-8 grid sm:grid-cols-2 gap-4 text-sm text-slate-700">
            <li>✓ Instant missed-call response (busy + after-hours)</li>
            <li>✓ Structured intake + lead qualification</li>
            <li>✓ Real-time SMS/email summaries</li>
            <li>✓ CRM sync (HubSpot supported)</li>
          </ul>

          <div className="mt-6 text-sm text-slate-600">
            Need web leads covered too?{" "}
            <a
              className="text-blue-700 font-semibold hover:underline"
              href="/#founder-plan"
            >
              Explore the Founder Plan
            </a>
            .
          </div>
        </div>
      </div>
    </section>
  );
}
