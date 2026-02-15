import React, { useState } from "react";
import { ChevronDown, Zap, CalendarCheck, CheckCircle, BarChart2 } from "lucide-react";
import Footer from "../components/Footer.jsx";

export default function FAQ() {
  const [open, setOpen] = useState(null);

const faqs = [
  {
    q: "What does Neovex AI actually do?",
    a: "We help service businesses stop losing leads. Neovex is a fully managed automation service that captures missed calls and website inquiries, qualifies leads, and follows up automatically—so you book more jobs without hiring more admin help..",
    Icon: Zap,
  },
  {
    q: "Who is this best for?",
    a: "Owner-operators and small teams who get inbound leads (calls + web forms) and want faster follow-up, better booking rates, and less time spent on admin. If you’re missing calls or your inbox is a mess, it’s a fit.",
    Icon: BarChart2,
  },
  {
    q: "What problems does it solve first?",
    a: "Most teams start with missed call capture and lead follow-up. From there we can add intake questions, booking links, quote/estimate workflows, and post-visit follow-ups—based on what’s leaking revenue for you.",
    Icon: CheckCircle,
  },
  {
    q: "How does onboarding work?",
    a: "You tell us your current process and tools. We map your lead flow, write the scripts and rules, connect your systems (CRM, calendar, email/SMS), and test everything before we turn it on.",
    Icon: CalendarCheck,
  },
  {
    q: "How fast can we go live?",
    a: "Simple setups can be live quickly (often within a few days). If you need quoting logic, multiple services, or deeper CRM workflows, it can take longer. We’ll give you a clear timeline after a quick review.",
    Icon: CalendarCheck,
  },
  {
    q: "What tools do you integrate with?",
    a: "We typically connect to your CRM, calendar, email/SMS, and invoicing tools. If you already use HubSpot, Google Calendar, QuickBooks, or similar, we can usually plug in without changing your stack.",
    Icon: Zap,
  },
  {
    q: "What results should I expect?",
    a: "Most clients see faster response times, more booked calls/appointments, and fewer leads slipping through the cracks. The biggest win is consistency—every lead gets handled the same way, every time.",
    Icon: BarChart2,
  },
  {
    q: "Do you replace my team or work with them?",
    a: "We work with your team. Neovex handles the repetitive parts (capture, qualify, follow up), and your team focuses on delivery and high-touch conversations. You stay in control of the rules.",
    Icon: CheckCircle,
  },
  {
    q: "Is my data secure?",
    a: "We use secure, least-privilege access and keep integrations locked down. We only collect what’s needed to run your workflow, and we can walk you through exactly what’s stored and where.",
    Icon: CheckCircle,
  },
];

  return (
    <div className="bg-white text-slate-900">
      <section className="px-6 py-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm font-semibold text-blue-600 uppercase mb-3">FAQ</p>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Questions, answered</h1>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl">Everything you need to know about Neovex AI.</p>
        </div>
      </section>


      

      <section className="px-6 py-16">
        <div className="max-w-5xl mx-auto space-y-4">
          {faqs.map(({ q, a, Icon }, i) => (
            <div key={i} className="border border-slate-200 rounded-2xl overflow-hidden">
              <button
                className="w-full flex justify-between items-center px-6 py-4 text-left text-base md:text-lg font-medium hover:bg-slate-50"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <div className="flex items-center gap-2">
                  <Icon className="w-5 h-5 text-blue-600" />
                  <span>{q}</span>
                </div>
                <ChevronDown className={`w-5 h-5 transition-transform ${open === i ? "rotate-180" : ""}`} />
              </button>
              {open === i && <div className="px-6 pb-6 text-sm md:text-base text-slate-600">{a}</div>}
            </div>
          ))}
        </div>
      </section>
       <Footer /> {/* ✅ add this */}
    </div>
  );
}
