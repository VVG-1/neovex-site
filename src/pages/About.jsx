// src/pages/About.jsx
import React from "react";
import { Link } from "react-router-dom";
import SectionHeader from "../components/SectionHeader";
import FounderQuote from "../components/FounderQuote";
import Footer from "../components/Footer";
import {
  ArrowRight,
  Shield,
  Sparkles,
  CalendarDays,
  Handshake,
  PhoneCall,
  ClipboardList,
  DollarSign,
  Megaphone,
  Send,
} from "lucide-react";
import { HeroFlowCards } from "../components/HeroFlowCards";


export default function AboutPage() {
  return (
    <div className="bg-white text-slate-900">
      
     {/* Hero */}
<section className="px-6 pt-20 md:pt-24 pb-12 border-b border-slate-100">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-10 relative">
    {/* Left: copy + CTAs */}
    <div className="max-w-2xl">
      <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 text-blue-700 px-3 py-1 text-[11px] font-semibold ring-1 ring-blue-100">
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-blue-600" />
        About Neovex
      </div>

<h1 className="mt-3 text-4xl md:text-5xl font-extrabold tracking-tight">
  We help service businesses grow revenue with AI automation
</h1>

<p className="mt-4 text-lg md:text-xl text-slate-700 max-w-2xl">
  Neovex installs and manages AI automations that capture missed calls and website leads, qualify them, and route clean summaries to your team—so you respond faster and win more jobs.
</p>





<div className="mt-6 flex flex-col sm:flex-row gap-3">
  <a
    href="https://meetings.hubspot.com/neovex"
    className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl px-5 h-12 text-sm font-semibold
               bg-blue-600 text-white hover:bg-blue-700 shadow-sm
               focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
  >
    Book an Intro Call <ArrowRight className="ml-2 h-4 w-4" />
  </a>

  <a
    href="/#solutions"
    className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl px-5 h-12 text-sm font-semibold
               border border-slate-300 bg-white text-slate-800 hover:bg-slate-50 shadow-sm
               focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
  >
    See solutions <ArrowRight className="ml-2 h-4 w-4 opacity-70" />
  </a>
</div>

    </div>

    {/* Right: stacked flow cards (below on mobile, right on desktop) */}
    <div className="w-full md:w-auto md:flex-1">
      <div className="mt-8 md:mt-0">
<HeroFlowCards
  items={[
    { 
      icon: <PhoneCall className="w-6 h-6" />,   
      grad: "from-blue-600 to-sky-500",     
      title: "Lead captured", 
      desc: "Missed calls & web inquiries"
    },
    { 
      icon: <ClipboardList className="w-6 h-6" />,
      grad: "from-emerald-600 to-teal-500", 
      title: "Lead qualified",       
      desc: "We collect key job details"
    },
    { 
      icon: <CalendarDays className="w-6 h-6" />, 
      grad: "from-amber-600 to-orange-500", 
      title: "Job booked",      
      desc: "Scheduled automatically"
    },
    { 
      icon: <DollarSign className="w-6 h-6" />,   
      grad: "from-violet-600 to-fuchsia-500", 
      title: "You get paid",         
      desc: "Invoice & payment handled"
    },
  ]}
/>

      </div>
    </div>
  </div>
</section>


{/* Our mission */}
<section className="px-6 py-12 md:py-16 bg-blue-50 border-y border-blue-100">
  <div className="max-w-5xl mx-auto">
    <SectionHeader
      eyebrow="Our mission"
      title="Booked revenue. Zero busywork."
      subtitle="No service business should lose jobs because of missed calls, slow follow-ups, or manual intake. We build and manage the automation that fixes that."
      variant="primary"
      align="center"
      dividerClass="bg-gradient-to-r from-blue-600 to-sky-400"
    />
  </div>
</section>




{/* What we build */}
<section className="px-6 py-12 md:py-16 bg-white border-b border-slate-100">
  <div className="max-w-6xl mx-auto">
    <SectionHeader
      eyebrow="Our solutions"
      title="Two entry points. One outcome: booked revenue."
      subtitle="We install and manage AI-powered lead capture that turns inbound interest into scheduled, paying jobs."
      variant="secondary"
      align="center"
    />

    <ul className="mt-10 grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
      
      {/* Missed Call Capture */}
      <li>
        <Link
          to="/products/missed-call-capture"
          className="group block rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
        >
          <div className="rounded-2xl p-[1px] bg-gradient-to-br from-blue-200/60 via-sky-200/30 to-blue-200/60">
            <div className="rounded-2xl bg-white p-6 border ring-1 ring-slate-100 shadow-sm group-hover:shadow-md transition">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-sky-500 text-white flex items-center justify-center ring-1 ring-white/50 shadow mb-4">
                <PhoneCall className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">
                Missed Call Capture
              </h3>
              <p className="text-sm text-slate-600 mt-2">
                Turn missed calls into qualified leads with instant summaries and structured intake — so no job slips through the cracks.
              </p>
              <div className="mt-5 h-[3px] w-full rounded-full bg-gradient-to-r from-blue-600 to-sky-400" />
            </div>
          </div>
        </Link>
      </li>

      {/* Web Lead Capture */}
      <li>
        <Link
          to="/products/web-capture"
          className="group block rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
        >
          <div className="rounded-2xl p-[1px] bg-gradient-to-br from-emerald-200/60 via-teal-200/30 to-emerald-200/60">
            <div className="rounded-2xl bg-white p-6 border ring-1 ring-slate-100 shadow-sm group-hover:shadow-md transition">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-500 text-white flex items-center justify-center ring-1 ring-white/50 shadow mb-4">
                <ClipboardList className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">
                Website Lead Capture
              </h3>
              <p className="text-sm text-slate-600 mt-2">
                Turn website inquiries into structured, high-priority leads — delivered instantly so you can respond before competitors do.
              </p>
              <div className="mt-5 h-[3px] w-full rounded-full bg-gradient-to-r from-emerald-600 to-teal-400" />
            </div>
          </div>
        </Link>
      </li>

    </ul>
  </div>
</section>


{/* How we work */}
<section className="px-6 py-12 md:py-16 bg-blue-50 border-y border-blue-100">
  <div className="max-w-6xl mx-auto">
    <SectionHeader
      eyebrow="How we work"
      title="Fully managed automation — built for revenue, not complexity"
      subtitle="We install it, configure it, and continuously optimize it — so you get the upside without managing another tool."
      variant="primary"
      align="center"
    />

    <ul className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {[
        {
          icon: Sparkles,
          title: "Revenue first",
          desc: "Every workflow is designed to capture more inbound leads and convert them into booked jobs.",
        },
        {
          icon: CalendarDays,
          title: "Live in under a week",
          desc: "We connect your tools, configure your intake, test it with you, and launch quickly.",
        },
        {
          icon: Shield,
          title: "Secure by design",
          desc: "Encrypted connections and least-privilege access to your existing systems.",
        },
        {
          icon: Handshake,
          title: "We manage it for you",
          desc: "No dashboards to babysit. We monitor, refine, and improve performance over time.",
        },
      ].map((f, i) => (
        <li
          key={i}
          className="rounded-2xl bg-white p-6 border border-blue-100 shadow-sm text-center hover:shadow-md transition"
        >
          <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center mx-auto mb-4">
            <f.icon className="w-6 h-6" />
          </div>
          <h3 className="text-base md:text-lg font-semibold text-slate-900">
            {f.title}
          </h3>
          <p className="text-sm text-slate-600 mt-2 leading-relaxed">
            {f.desc}
          </p>
        </li>
      ))}
    </ul>
  </div>
</section>


{/* Founder quote (white band) */}
<section className="px-6 py-16 bg-white border-y border-slate-100">

  <div className="max-w-7xl mx-auto">
<FounderQuote
  quote="Service businesses don’t lose jobs because they lack skill — they lose them because they miss calls, respond too slowly, or rely on manual intake. We built Neovex to fix that. We install the automation, run it for you, and turn inbound demand into booked revenue."
  variant="white"
  className="py-0"
/>

  </div>
</section>

{/* CTA band (light blue) */}
<section className="px-6 py-16 bg-blue-50 border-y border-blue-100">
  <div className="max-w-7xl mx-auto text-center">
<SectionHeader
  eyebrow="Ready to capture more revenue?"
  title="Stop losing jobs to missed calls and slow follow-up"
  subtitle="We’ll install and manage the automation that captures, qualifies, and routes your leads — live in under a week."
  variant="primary"
  align="center"
/>


    <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
      <a
        href="https://meetings.hubspot.com/neovex"
        className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl px-5 h-12 text-sm font-semibold
                   bg-blue-600 text-white hover:bg-blue-700 shadow-sm
                   focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:ring-offset-blue-50"
      >
        Book an 15 Min Intro Call <ArrowRight className="ml-2 h-4 w-4" />
      </a>

      <a
        href="#solutions"
        className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl px-5 h-12 text-sm font-semibold
                   border border-blue-200 bg-white text-blue-700 hover:bg-blue-50 shadow-sm
                   focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:ring-offset-blue-50"
      >
        See How It Works <ArrowRight className="ml-2 h-4 w-4 opacity-70" />
      </a>
    </div>
  </div>
</section>
 


      <Footer />
    </div>
  );
}
