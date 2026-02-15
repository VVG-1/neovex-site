import React, { useState } from "react";
import { PhoneCall, ChevronDown, CreditCard,Rocket,Settings2,AlertTriangle,CalendarCheck, DollarSign, Link2, CheckCircle, Bell, ArrowRightCircle, Mic, UserPlus, Zap, MessageCircle, ClipboardList, CalendarDays,PhoneOff,BarChart2 } from "lucide-react";




export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);


  const faqs = [
    {
      q: "What is Neovex AI?",
      a: "Neovex AI is an automation platform for service businesses, offering products like Voice, Intake, and Integrations to streamline your operations with advanced AI.",
      Icon: Zap,
    },
    {
      q: "How can Neovex AI help my business?",
      a: "Neovex AI automates call answering, lead intake, quoting, scheduling, CRM sync, and follow-ups—so you never miss a lead or opportunity.",
      Icon: BarChart2,
    },
    {
      q: "What products does Neovex AI offer?",
      a: "Our platform includes Neovex Voice (AI call answering), Intake (lead management), and Integrations with tools like HubSpot, QuickBooks, and more.",
      Icon: Link2,
    },
    {
      q: "Is Neovex AI easy to set up?",
      a: "Yes! Most businesses are live in under a day, with no technical skills required.",
      Icon: Rocket,
    },
    {
      q: "Can I try Neovex AI before committing?",
      a: "Absolutely. Book an Intro Call or try our voice demo to see Neovex AI in action.",
      Icon: CalendarCheck,
    },
    {
      q: "Is my data secure?",
      a: "We use industry-standard security practices to keep your business data safe and private.",
      Icon: CheckCircle,
    },
  ];


  return (
    <div className="bg-white text-gray-900">
      {/* Header Navigation */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">Neovex AI</div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10 text-base font-medium text-gray-700">
            <a href="#about" className="hover:text-blue-600 transition">About</a>
            <a href="#products" className="hover:text-blue-600 transition">Products</a>
            <a href="#features" className="hover:text-blue-600 transition">Features</a>
            <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
          </nav>

          <div className="hidden md:block">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white shadow-inner px-6 py-4 space-y-2">
            <a href="#features" className="block text-base text-gray-700 hover:text-blue-600 transition">Features</a>
            <a href="#demo" className="block text-base text-gray-700 hover:text-blue-600 transition">Demo</a>
            <a href="#pricing" className="block text-base text-gray-700 hover:text-blue-600 transition">Pricing</a>
            <a href="#contact" className="block text-base text-gray-700 hover:text-blue-600 transition">Contact</a>
            <button className="w-full mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700">
              Get Started
            </button>
          </div>
        )}
      </header>



      {/* Hero Section */}
<section
  id="hero"
  className="relative px-6 pt-44 pb-28 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 scroll-mt-28"
>
  <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-blue-100 via-white to-gray-100" />

  <div className="text-left max-w-xl">
    <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6 text-gray-900">
      The Managed Automation Engine for Service Businesses
    </h1>

    <p className="text-lg md:text-xl text-gray-600 mb-10">
      We capture missed calls and web leads, follow up instantly, and help customers book—so you win more jobs without more admin work.
    </p>

    <div className="flex flex-col sm:flex-row justify-start gap-4">
      <a
        href="https://meetings.hubspot.com/neovex"
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-4 text-lg rounded-xl hover:bg-blue-700 transition"
      >
        Book an Intro Call
      </a>

      <a
        href="/#how-it-works"
        className="inline-flex items-center justify-center bg-white border border-blue-600 text-blue-600 px-8 py-4 text-lg rounded-xl hover:bg-blue-50 transition"
      >
        See how it works
      </a>
    </div>
  </div>

  <div className="hidden md:flex justify-end items-center w-full max-w-md">
    <img
      src="/ai-receptionist-illustration.svg"
      alt="Neovex AI virtual receptionist illustration"
      className="w-full h-auto rounded-xl shadow-lg transition hover:scale-105 duration-300"
      loading="lazy"
    />
  </div>
</section>


 {/* Problem Section */}
      <section className="bg-gray-50 py-20 px-6 border-t border-gray-100">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex flex-col items-center mb-4">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <PhoneOff className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="text-5xl font-extrabold text-gray-900 leading-tight">
              Missed Calls = Missed Revenue
            </h2>
          </div>

          <div className="relative w-full max-w-md mx-auto h-6 bg-gray-200 rounded-full mb-4">
            <div className="absolute left-0 top-0 h-6 bg-blue-600 rounded-full" style={{ width: '62%' }}></div>
          </div>

          <p className="text-base inline-flex items-center gap-2 font-medium text-blue-700 bg-blue-50 px-5 py-2 rounded-full mb-6">
            <BarChart2 className="w-4 h-4" />
            62% of service business calls go unanswered
          </p>

          <p className="text-lg text-gray-800 mb-4">
            That’s thousands in lost jobs, unhappy customers, and missed growth.
          </p>
          <p className="text-lg text-gray-900 font-medium max-w-3xl mx-auto">
            <span className="font-semibold text-blue-600">Neovex</span> answers every call — instantly — with a voice-first AI that books jobs, qualifies leads, and keeps you in control.
          </p>
        </div>
      </section>

<section id="products" className="bg-white py-16 px-6 border-t border-gray-100">
  <div className="max-w-7xl mx-auto text-center">
    <div className="text-sm font-semibold text-blue-600 uppercase mb-4">Our Products</div>
    <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
      AI Automation for Every Step
    </h2>
    <p className="text-lg text-gray-600 mb-12">
      Neovex AI offers Voice, Intake, and Integrations—covering your entire client journey from first call to follow-up.
    </p>

    {/* Flow Overview */}
    <div className="flex justify-center items-center gap-2 text-sm font-medium text-gray-500 mb-12 flex-wrap">
      <span className="text-blue-600">Call Answered</span>
      <span>→</span>
      <span className="text-blue-600">Smart Intake</span>
      <span>→</span>
      <span className="text-blue-600">Quote Given</span>
      <span>→</span>
      <span className="text-blue-600">Job Scheduled</span>
      <span>→</span>
      <span className="text-blue-600">CRM Synced</span>
      <span>→</span>
      <span className="text-blue-600">Follow-Up Sent</span>
    </div>

    {/* Product Cards */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
      <FeatureCard
        title="Neovex Voice"
        desc="Answer every call, qualify leads, and book jobs—24/7, with AI that sounds human."
        icon={<CenteredIcon><PhoneCall className="w-8 h-8 text-blue-600" /></CenteredIcon>}
      />
      <FeatureCard
        title="Neovex Intake"
        desc="From lead to signed contract, automate intake, quoting, and onboarding."
        icon={<CenteredIcon><ClipboardList className="w-8 h-8 text-blue-600" /></CenteredIcon>}
      />
      <FeatureCard
        title="Integrations"
        desc="Connect with HubSpot, QuickBooks, SignWell, Mailchimp, and more."
        icon={<CenteredIcon><Link2 className="w-8 h-8 text-blue-600" /></CenteredIcon>}
      />
    </div>

    {/* Inline CTA */}
    <div className="mt-12">
      <a href="#how-it-works" className="text-blue-600 font-medium hover:underline">
        See the full Neovex Voice experience →
      </a>
    </div>
  </div>
</section>

   {/* Why Neovex Section */}
<section className="bg-gray-50 py-28 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-extrabold text-gray-900 mb-6">The First Fully Managed AI Voice Assistant for Service Businesses</h2>
            <p className="text-lg text-gray-600 mb-6">
              We built Neovex Voice to bring real-time automation to your phone line. While others sell you bots, we deliver outcomes: a fully managed AI receptionist that answers, qualifies, quotes, and follows up — automatically.
            </p>
            <ul className="space-y-4 text-base text-gray-700">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-600 mt-1" />
                Answers every call — 24/7
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-600 mt-1" />
                Quotes and schedules jobs instantly
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-600 mt-1" />
                Fully managed setup — no tech headaches
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-600 mt-1" />
                Built for cleaning, junk removal, and more
              </li>
            </ul>
          </div>
          <div className="text-center md:text-left">
            <blockquote className="text-xl italic text-gray-500 border-l-4 border-blue-600 pl-4">
              “Most service businesses lose money on missed calls. We fix that instantly.”
            </blockquote>
            <p className="text-sm text-gray-400 mt-3">— Jameson, Founder of Neovex AI</p>
          </div>
        </div>
      </section>


<section id="how-it-works" className="bg-white-50 py-16 px-6 border-t border-gray-100">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-4xl font-extrabold text-gray-900 mb-6">How Neovex Voice Works</h2>
    <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-16">
      From first ring to follow-up — Neovex automates every call so your cleaning business never misses a lead.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
      {/* Phase 1: Answer */}
      <div className="bg-white p-6 md:p-10 rounded-2xl border border-gray-200 shadow-md" data-aos="fade-up">
        <span className="inline-block bg-blue-100 text-blue-700 text-xs font-medium px-3 py-1 rounded-full mb-4 uppercase tracking-wide">Phase 1: Answer</span>
        <h3 className="text-xl font-bold text-blue-600 mb-4">Capture the Call</h3>
        <div className="space-y-6">
          <Step icon={<PhoneCall className="w-4 h-4 sm:w-5 sm:h-5" />} title="Call Answered" desc="Every call is picked up instantly by your AI receptionist." />
          <hr className="block md:hidden border-gray-200 my-4" />
          <Step icon={<Mic className="w-4 h-4 sm:w-5 sm:h-5" />} title="Smart Intake" desc="The AI collects caller info, needs, and urgency through natural conversation." />
          <hr className="block md:hidden border-gray-200 my-4" />
          <Step icon={<ClipboardList className="w-4 h-4 sm:w-5 sm:h-5" />} title="Lead Profile Created" desc="Caller data is saved and matched to your systems." />
        </div>
      </div>

      {/* Phase 2: Qualify */}
      <div className="bg-white p-6 md:p-10 rounded-2xl border border-gray-200 shadow-md" data-aos="fade-up">
        <span className="inline-block bg-blue-100 text-blue-700 text-xs font-medium px-3 py-1 rounded-full mb-4 uppercase tracking-wide">Phase 2: Qualify</span>
        <h3 className="text-xl font-bold text-blue-600 mb-4">Understand the Need</h3>
        <div className="space-y-6">
          <Step icon={<DollarSign className="w-4 h-4 sm:w-5 sm:h-5" />} title="Quote Generated" desc="Accurate pricing is calculated on the spot based on your logic." />
          <hr className="block md:hidden border-gray-200 my-4" />
          <Step icon={<CalendarCheck className="w-4 h-4 sm:w-5 sm:h-5" />} title="Walkthrough Scheduled" desc="If needed, a walkthrough is automatically booked to qualify the job." />
          <hr className="block md:hidden border-gray-200 my-4" />
          <Step icon={<MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />} title="Customer Updated" desc="The AI shares next steps via SMS or email instantly." />
        </div>
      </div>

      {/* Phase 3: Sync */}
      <div className="bg-white p-6 md:p-10 rounded-2xl border border-gray-200 shadow-md" data-aos="fade-up">
        <span className="inline-block bg-blue-100 text-blue-700 text-xs font-medium px-3 py-1 rounded-full mb-4 uppercase tracking-wide">Phase 3: Sync</span>
        <h3 className="text-xl font-bold text-blue-600 mb-4">Log & Follow-Up</h3>
        <div className="space-y-6">
          <Step icon={<Link2 className="w-4 h-4 sm:w-5 sm:h-5" />} title="CRM Synced" desc="All caller details and outcomes are logged to your CRM or spreadsheet." />
          <hr className="block md:hidden border-gray-200 my-4" />
          <Step icon={<Bell className="w-4 h-4 sm:w-5 sm:h-5" />} title="Follow-Up Sent" desc="Missed callers get automatic follow-ups via text or email." />
          <hr className="block md:hidden border-gray-200 my-4" />
          <Step icon={<UserPlus className="w-4 h-4 sm:w-5 sm:h-5" />} title="New Lead Captured" desc="You wake up to booked jobs and new qualified leads — done automatically." />
        </div>
      </div>
    </div>

    <div className="mt-16 text-center">
      <a href="#pricing" className="text-blue-600 font-medium hover:underline">
        Explore pricing plans →
      </a>
    </div>
  </div>
</section>

<section id="how-it-works" className="bg-gray-50 py-20 px-6 border-t border-gray-100">
  <div className="max-w-7xl mx-auto text-center">
    <div className="text-sm font-semibold text-blue-600 uppercase mb-4">Getting Started</div>
    <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
      Go Live with Neovex in Under a Day
    </h2>
    <p className="text-lg text-gray-600 mb-16 max-w-2xl mx-auto">
      Simple setup. Instant results. Get fully automated voice coverage in just a few easy steps.
    </p>

    {/* Step Flow Overview */}
    <div className="flex justify-center items-center gap-2 text-sm font-medium text-gray-500 mb-12 flex-wrap">
      <span className="text-blue-600">Book Demo</span>
      <span>→</span>
      <span className="text-blue-600">Create Account</span>
      <span>→</span>
      <span className="text-blue-600">Connect Tools</span>
      <span>→</span>
      <span className="text-blue-600">Go Live</span>
    </div>

    <div className="grid md:grid-cols-4 gap-10 text-left">
      {[ 
        {
          icon: <CalendarDays className="w-6 h-6 text-white" />, 
          title: "Book an Intro Call", 
          desc: "We'll walk you through the voice experience, answer questions, and tailor Neovex to your business."
        },
        {
          icon: <UserPlus className="w-6 h-6 text-white" />, 
          title: "Create Your Account", 
          desc: "Sign up with your business phone number and a few details — it only takes a minute."
        },
        {
          icon: <Link2 className="w-6 h-6 text-white" />, 
          title: "Connect Your Tools", 
          desc: "Easily integrate your calendar, CRM, or quote system — no dev required."
        },
        {
          icon: <Zap className="w-6 h-6 text-white" />, 
          title: "Go Live Instantly", 
          desc: "Your AI receptionist is ready to take calls, qualify leads, and book jobs 24/7."
        },
      ].map((step, index) => (
        <div key={index} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm flex flex-col items-center text-center hover:shadow-md transition">
          <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4">
            {step.icon}
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{index + 1}. {step.title}</h3>
          <p className="text-sm text-gray-600">{step.desc}</p>
        </div>
      ))}
    </div>

    {/* CTA */}
    <div className="mt-12">
      <a href="#demo" className="text-blue-600 font-medium hover:underline">
        Try the voice demo now →
      </a>
    </div>
  </div>
</section>

<section className="bg-white py-24 px-6 border-t border-gray-100">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-4xl font-extrabold text-gray-900 mb-4">What Changes with Neovex Voice?</h2>
    <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-16">
      A side-by-side look at how AI voice support upgrades your client experience and internal workflow.
    </p>

    {/* Table view for medium+ screens */}
    <div className="hidden md:block overflow-x-auto">
      <table className="w-full text-left border-collapse rounded-xl overflow-hidden shadow-md min-w-[640px]">
        <thead>
          <tr className="bg-blue-50">
            <th className="p-4 text-sm font-semibold text-gray-700">Workflow Stage</th>
            <th className="p-4 text-sm font-semibold text-gray-700">❌ Manual Process</th>
            <th className="p-4 text-sm font-semibold text-gray-700">✅ Neovex Voice</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-gray-100">
            <td className="p-4 font-medium text-gray-800 flex items-center gap-2">📞 <span>Call Handling</span></td>
            <td className="p-4 text-gray-600">Missed calls, voicemail backlog</td>
            <td className="p-4 text-blue-700 font-semibold">📲 Instantly answered by AI</td>
          </tr>
          <tr className="border-b border-gray-100">
            <td className="p-4 font-medium text-gray-800 flex items-center gap-2">🧠 <span>Lead Intake</span></td>
            <td className="p-4 text-gray-600">Manual note-taking or receptionist transfer</td>
            <td className="p-4 text-blue-700 font-semibold">🗣️ Smart intake during live call</td>
          </tr>
          <tr className="border-b border-gray-100">
            <td className="p-4 font-medium text-gray-800 flex items-center gap-2">💬 <span>Quote Delivery</span></td>
            <td className="p-4 text-gray-600">Verbal or emailed later</td>
            <td className="p-4 text-blue-700 font-semibold">⚡ Texted or emailed instantly</td>
          </tr>
          <tr className="border-b border-gray-100">
            <td className="p-4 font-medium text-gray-800 flex items-center gap-2">📅 <span>Job Scheduling</span></td>
            <td className="p-4 text-gray-600">Callback and calendar coordination</td>
            <td className="p-4 text-blue-700 font-semibold">📆 Scheduled during the call</td>
          </tr>
          <tr className="border-b border-gray-100">
            <td className="p-4 font-medium text-gray-800 flex items-center gap-2">📂 <span>CRM Logging</span></td>
            <td className="p-4 text-gray-600">Manually added after call</td>
            <td className="p-4 text-blue-700 font-semibold">🔄 Synced automatically</td>
          </tr>
          <tr>
            <td className="p-4 font-medium text-gray-800 flex items-center gap-2">🔁 <span>Follow-Up</span></td>
            <td className="p-4 text-gray-600">Depends on team bandwidth</td>
            <td className="p-4 text-blue-700 font-semibold">📩 Sent automatically via text/email</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Card view for mobile screens */}
    <div className="md:hidden grid gap-6 text-left">
      {[
        {
          stage: "📞 Call Handling",
          manual: "Missed calls, voicemail backlog",
          automated: "📲 Instantly answered by AI"
        },
        {
          stage: "🧠 Lead Intake",
          manual: "Manual note-taking or receptionist transfer",
          automated: "🗣️ Smart intake during live call"
        },
        {
          stage: "💬 Quote Delivery",
          manual: "Verbal or emailed later",
          automated: "⚡ Texted or emailed instantly"
        },
        {
          stage: "📅 Job Scheduling",
          manual: "Callback and calendar coordination",
          automated: "📆 Scheduled during the call"
        },
        {
          stage: "📂 CRM Logging",
          manual: "Manually added after call",
          automated: "🔄 Synced automatically"
        },
        {
          stage: "🔁 Follow-Up",
          manual: "Depends on team bandwidth",
          automated: "📩 Sent automatically via text/email"
        },
      ].map((item, idx) => (
        <div key={idx} className="border border-gray-200 rounded-xl p-5 shadow-sm">
          <h3 className="text-base font-semibold text-gray-800 mb-1">{item.stage}</h3>
          <p className="text-sm text-gray-500 mb-1">
            <span className="font-medium text-gray-700">❌ Manual: </span>{item.manual}
          </p>
          <p className="text-sm text-blue-700">
            <span className="font-medium">✅ Automated: </span>{item.automated}
          </p>
        </div>
      ))}
    </div>

    <div className="mt-10">
      <a href="#pricing" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800 transition">
        Start Automating Today →
      </a>
    </div>
  </div>
</section>

  



<section id="pricing" className="bg-gradient-to-tr from-blue-700 to-blue-600 text-white py-20 px-6">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">

    <div className="max-w-xl">
      <div className="inline-block bg-white/10 text-sm font-semibold uppercase tracking-wider px-4 py-1 rounded-full mb-2">
        Founder Plan
      </div>
      <p className="text-sm text-blue-100 mt-0 mb-4">Founder pricing — limited early access</p>
      <h2 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
        Answer Every Call. Book More Jobs.
      </h2>
      <p className="text-sm text-blue-100 mb-1">Less than the cost of one missed lead — per month.</p>
      <p className="text-5xl font-extrabold mb-2 text-white">
        $99<span className="text-lg font-medium text-blue-100">/month</span>
      </p>
      <p className="text-lg mb-6 text-blue-100">
        Get a 24/7 AI receptionist that qualifies leads, delivers quotes, and schedules jobs — instantly.
      </p>
      <p className="text-sm text-blue-100 mt-0 italic mb-4">No setup fees. Cancel anytime.</p>
  <a
  href="https://meetings.hubspot.com/neovex"
  target="_blank"
  rel="noreferrer"
  className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-full hover:bg-blue-100 transition inline-flex items-center gap-2 w-full sm:w-auto justify-center"
>
  <ArrowRightCircle className="w-5 h-5" />
  Book an Intro Call
</a>

      <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left text-sm text-blue-100">
        <li className="flex items-center gap-2">
          <CheckCircle className="w-4 h-4 text-white" />
          Unlimited Calls
        </li>
        <li className="flex items-center gap-2">
          <CheckCircle className="w-4 h-4 text-white" />
          Quote Delivery via SMS/Email
        </li>
        <li className="flex items-center gap-2">
          <CheckCircle className="w-4 h-4 text-white" />
          CRM Auto-Sync
        </li>
        <li className="flex items-center gap-2">
          <CheckCircle className="w-4 h-4 text-white" />
          Job Scheduling
        </li>
        <li className="flex items-center gap-2">
          <CheckCircle className="w-4 h-4 text-white" />
          Automated Follow-Ups
        </li>
        <li className="flex items-center gap-2">
          <CheckCircle className="w-4 h-4 text-white" />
          Custom Voice Prompts & Logic
        </li>
      </ul>
    </div>

    <div className="w-full md:w-2/5">
      <img
        src="/cta-voice-demo.svg"
        alt="Neovex Voice Plan"
        className="w-full h-auto rounded-xl shadow-xl"
      />
    </div>
  </div>
</section>

      {/* FAQ Section */}
      <section id="faq" className="bg-gray py-28 px-6 border-t border-gray-100">
        <div className="max-w-5xl mx-auto text-center">
<h2 className="text-4xl font-extrabold text-gray-900 mb-2">Frequently Asked Questions</h2>
<p className="text-gray-600 text-lg mb-10">Got questions? Here are the most common ones we hear from cleaning pros and operators like you.</p>          <div className="space-y-4 text-left">
            {faqs.map(({ q, a, Icon }, i) => (
              <div
                key={i}
                className="border border-gray-200 rounded-xl overflow-hidden"
              >
                <button
                  className="w-full flex justify-between items-center px-6 py-4 text-left text-lg font-medium text-gray-800 hover:bg-gray-50 focus:outline-none"
                  onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                >
                  <div className="flex items-center gap-2">
                    <Icon className="w-5 h-5 text-blue-600" />
                    <span>{q}</span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 transform transition-transform duration-200 ${activeIndex === i ? "rotate-180" : "rotate-0"}`}
                  />
                </button>
                {activeIndex === i && (
                  <div className="px-6 pb-6 text-base text-gray-600">
                    {a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>


  <footer className="bg-gray-900 text-gray-400 py-16 px-6">
    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
      <div>
        <h3 className="text-white text-lg font-semibold mb-4">Neovex AI</h3>
        <p className="text-sm">
          The automation engine for service businesses. Voice, Intake, and Integrations—AI that works for you.
        </p>
      </div>
      <div>
        <h4 className="text-white text-sm font-bold uppercase mb-3">Platform</h4>
        <ul className="space-y-2 text-sm">
          <li><a href="#features" className="hover:text-white">Features</a></li>
          <li><a href="#how-it-works" className="hover:text-white">How It Works</a></li>
          <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
          <li><a href="#demo" className="hover:text-white">Demo</a></li>
        </ul>
      </div>
      <div>
        <h4 className="text-white text-sm font-bold uppercase mb-3">Company</h4>
        <ul className="space-y-2 text-sm">
          <li><a href="#" className="hover:text-white">About</a></li>
          <li><a href="#" className="hover:text-white">Careers</a></li>
          <li><a href="mailto:hello@neovexai.com" className="hover:text-white" rel="noopener noreferrer">Contact</a></li>
        </ul>
      </div>
      <div>
        <h4 className="text-white text-sm font-bold uppercase mb-3">Legal</h4>
        <ul className="space-y-2 text-sm">
          <li><a href="/privacy" className="hover:text-white" rel="noopener noreferrer">Privacy Policy</a></li>
          <li><a href="/terms" className="hover:text-white" rel="noopener noreferrer">Terms of Service</a></li>
        </ul>
      </div>
    </div>

    {/* Social Icons */}
    <div className="mt-10 w-full flex justify-center items-center gap-6 text-center">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.84 7.94 9.8v-6.93H7.08v-2.87h2.86V9.6c0-2.83 1.69-4.4 4.27-4.4 1.24 0 2.53.22 2.53.22v2.79h-1.42c-1.4 0-1.84.87-1.84 1.76v2.12h3.14l-.5 2.87h-2.64v6.93C18.56 20.84 22 16.84 22 12z"/></svg>
      </a>
      <a href="https://linkedin.com/company/neovex" target="_blank" rel="noopener noreferrer" className="hover:text-white">
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M4.98 3.5C3.34 3.5 2 4.84 2 6.48s1.34 2.98 2.98 2.98 2.98-1.34 2.98-2.98S6.62 3.5 4.98 3.5zM2.4 8.9h5.2V21H2.4V8.9zM9.4 8.9h4.98v1.65h.07c.69-1.31 2.38-2.7 4.9-2.7 5.24 0 6.2 3.45 6.2 7.94V21h-5.2v-6.36c0-1.52-.03-3.48-2.12-3.48-2.13 0-2.46 1.66-2.46 3.38V21h-5.2V8.9z"/></svg>
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.4 1a9.03 9.03 0 0 1-2.88 1.1A4.51 4.51 0 0 0 16.11 0c-2.49 0-4.51 2.02-4.51 4.51 0 .35.04.69.12 1.01C7.69 5.39 4.07 3.58 1.64.66a4.51 4.51 0 0 0-.61 2.27c0 1.57.8 2.96 2.03 3.77A4.52 4.52 0 0 1 .96 6v.05c0 2.2 1.57 4.04 3.65 4.45-.38.1-.78.15-1.19.15-.29 0-.57-.03-.85-.08.57 1.78 2.23 3.08 4.2 3.11A9.05 9.05 0 0 1 0 19.54a12.78 12.78 0 0 0 6.92 2.03c8.3 0 12.85-6.88 12.85-12.85 0-.2-.01-.4-.02-.6A9.16 9.16 0 0 0 23 3z"/></svg>
      </a>
    </div>

    <div className="w-full text-center text-xs text-gray-500 mt-12">&copy; {new Date().getFullYear()} Neovex. All rights reserved.</div>
  </footer>

    </div>
  );
}

function Step({ icon, title, desc }) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center shrink-0">
        {icon}
      </div>
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
      <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
        {icon}
      </div>
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
