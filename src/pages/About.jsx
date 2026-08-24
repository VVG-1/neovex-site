import React from "react";
import { ArrowRight, GitBranch, Handshake, Link2, Settings2 } from "lucide-react";
import Footer from "../components/Footer";

const MEETINGS_URL = "https://meetings.hubspot.com/neovex";

const workflowSteps = [
  {
    n: "01",
    title: "Process reviewed",
    desc: "Current workflow, systems, and handoffs mapped",
  },
  {
    n: "02",
    title: "Systems connected",
    desc: "Existing tools, data, and triggers linked",
  },
  {
    n: "03",
    title: "Workflow launched",
    desc: "Rules, routing, approvals, and next steps activated",
  },
  {
    n: "04",
    title: "Automation managed",
    desc: "Workflow monitored, maintained, and improved",
  },
];

const buildItems = [
  { icon: GitBranch, title: "Workflow mapping", desc: "We understand how the process moves today and where manual work slows it down." },
  { icon: Link2, title: "System connection", desc: "We connect the tools that already hold the information and trigger the next steps." },
  { icon: Settings2, title: "Automation build", desc: "We configure rules, routing, handoffs, approvals, and repeatable workflow logic." },
  { icon: Handshake, title: "Launch & management", desc: "We test, launch, monitor, maintain, and improve the workflow after it is live." },
];

const principles = [
  {
    title: "Start with the work",
    desc: "We map what actually happens before deciding what should be automated.",
  },
  {
    title: "Use the simplest reliable solution",
    desc: "A workflow may use integrations, rules, APIs, or AI. We use the approach that makes the process work reliably without unnecessary complexity.",
  },
  {
    title: "Stay accountable after launch",
    desc: "Workflows are tested against real scenarios, monitored after deployment, and adjusted as the process or systems change.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-white text-slate-900">
      <section className="px-6 pt-24 md:pt-28 pb-14 border-b border-slate-100">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[minmax(0,0.56fr)_minmax(0,0.44fr)] gap-10 lg:gap-14 items-center">
          <div className="max-w-2xl">
            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#25638f]">
              ABOUT NEOVEX
            </div>

            <h1 className="mt-4 text-4xl md:text-6xl md:leading-[1.08] font-bold tracking-tight text-slate-900">
              Workflow automation built around how your business already works.
            </h1>

            <p className="mt-6 text-lg md:text-xl leading-8 text-slate-700 max-w-2xl">
              Neovex designs, builds, and manages automated workflows across the tools businesses already use, reducing repetitive work, manual handoffs, and administrative overhead.
            </p>

            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <a
                href={MEETINGS_URL}
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg px-6 py-3 text-base font-semibold bg-[#172235] text-white hover:bg-[#1B2638]"
              >
                Discuss a Workflow <ArrowRight className="ml-2 h-4 w-4" />
              </a>

              <a
                href="/#audit"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg px-6 py-3 text-base font-semibold border border-stone-300 bg-white text-slate-800 hover:bg-stone-50"
              >
                Start With an Audit <ArrowRight className="ml-2 h-4 w-4 opacity-70" />
              </a>
            </div>
          </div>

          <ImplementationJourney />
        </div>
      </section>

      <section className="px-6 py-16 md:py-[4.5rem] bg-[#F5F6F7] border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#25638f]">
            WHAT WE BELIEVE
          </div>

          <h2 className="mt-8 max-w-5xl text-4xl md:text-[3.6rem] md:leading-[1.08] font-bold tracking-tight text-slate-900">
            Automation should remove work - not create more work to manage.
          </h2>

          <p className="mt-7 max-w-[760px] text-lg md:text-xl leading-8 text-slate-700">
            Neovex works with the systems already in place, keeps people involved where judgment matters, and builds workflows that are understandable, maintainable, and useful after launch.
          </p>
        </div>
      </section>

      <section className="px-6 py-16 bg-[#172235] text-white border-b border-[#263247]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[minmax(0,0.56fr)_minmax(300px,0.38fr)] gap-10 lg:gap-16 items-start">
          <div className="max-w-3xl">
            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-300">
              BUILT FROM OPERATING EXPERIENCE
            </div>
            <h2 className="mt-4 text-3xl md:text-[2.85rem] md:leading-[1.12] font-bold tracking-tight text-white">
              Built by automating real operational work.
            </h2>
            <div className="mt-6 space-y-5 text-base md:text-lg leading-8 text-slate-300">
              <p>
                Neovex grew out of a practical need: reducing the repetitive administrative work required to run real businesses.
              </p>
              <p>
                Before offering workflow automation as a service, Neovex-built automations were deployed across operating businesses to handle work such as intake, follow-up, scheduling, customer communication, administrative handoffs, and back-office processes.
              </p>
              <p>
                That experience shapes how we approach client work today: understand the process first, identify what should remain human, automate the repeatable work, and make sure the workflow keeps working after launch.
              </p>
            </div>
          </div>

          <div className="border-y border-white/15 py-2">
            {[
              {
                title: "Built in operating businesses",
                desc: "Automations were first developed around actual day-to-day workflows.",
              },
              {
                title: "Designed around existing tools",
                desc: "The goal was to remove repetitive work without replacing every system.",
              },
              {
                title: "Maintained after launch",
                desc: "The workflows had to keep working as processes, tools, and requirements changed.",
              },
            ].map((item) => (
              <div key={item.title} className="border-b border-white/15 py-6 last:border-b-0">
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm md:text-base leading-7 text-slate-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#25638f]">
              WHAT WE BUILD
            </div>
            <h2 className="mt-4 text-3xl md:text-[2.85rem] md:leading-[1.12] font-bold tracking-tight text-slate-900">
              Automated workflows, not another system to babysit.
            </h2>
            <p className="mt-5 text-lg md:text-xl leading-8 text-slate-700">
              Neovex works across the tools you already use and automates the movement of work between people, systems, decisions, and next steps.
            </p>
          </div>

          <ul className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 border-y border-slate-200">
            {buildItems.map((item, index) => (
              <li
                key={item.title}
                className={`${index > 0 ? "border-t border-slate-200 md:border-t-0 md:border-l" : ""} border-slate-200`}
              >
                <div className="py-6 md:px-6">
                  <item.icon className="h-5 w-5 text-slate-600" strokeWidth={1.9} aria-hidden="true" />
                  <h3 className="mt-4 text-xl font-semibold text-[#172235]">{item.title}</h3>
                  <p className="mt-2 text-base leading-7 text-slate-700">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-6 py-16 bg-[#F5F6F7] border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#25638f]">
              HOW WE WORK
            </div>
            <h2 className="mt-4 text-3xl md:text-[2.85rem] md:leading-[1.12] font-bold tracking-tight text-slate-900">
              Practical, operational, implementation-focused.
            </h2>
            <p className="mt-5 text-lg md:text-xl leading-8 text-slate-700">
              Neovex uses automation, integrations, rules, APIs, and AI where appropriate. The objective is the right workflow - not technology for its own sake.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {principles.map((item) => (
              <article
                key={item.title}
                className="rounded-lg border border-slate-200 bg-white p-7 md:p-8"
              >
                <div className="mb-5 h-px w-12 bg-slate-300" aria-hidden="true" />
                <h3 className="text-xl font-semibold text-[#172235]">{item.title}</h3>
                <p className="mt-3 text-base leading-7 text-slate-700">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-14 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className="max-w-3xl">
            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#25638f]">
              SEE THE WORK
            </div>
            <h2 className="mt-4 text-3xl md:text-[2.6rem] md:leading-[1.12] font-bold tracking-tight text-slate-900">
              See the workflows running in real businesses.
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-700">
              Explore how Neovex-built workflows have changed day-to-day operations, reduced manual steps, and connected work across existing systems.
            </p>
          </div>

          <a
            href="/#results"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg px-6 py-3 text-base font-semibold bg-[#172235] text-white hover:bg-[#1B2638]"
          >
            View Case Studies <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </section>

      <section className="px-6 py-14 bg-[#F5F6F7] border-b border-slate-200">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[0.3fr_0.7fr] gap-8 lg:gap-12">
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#25638f]">
              LEADERSHIP
            </div>
          </div>

          <div className="max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900">
              Jameson Dixon
            </h2>
            <div className="mt-2 text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
              Founder, Neovex
            </div>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              Jameson founded Neovex after building automation into the day-to-day operations of businesses he operates and seeing how much repetitive administrative work could be removed when systems were designed to work together. His background spans business operations, recruiting operations, workflow design, automation, and AI-enabled processes.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function ImplementationJourney() {
  return (
    <div className="w-full max-w-[480px] lg:justify-self-end">
      <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#25638f]">
        FROM REVIEW TO MANAGEMENT
      </div>

      <ol className="relative mt-6">
        <div className="absolute left-[3.15rem] top-3 bottom-3 w-px bg-[#607184]/35" aria-hidden="true" />

        {workflowSteps.map((step) => (
          <li key={step.n} className="relative grid grid-cols-[2.4rem_1.5rem_minmax(0,1fr)] gap-3 pb-7 last:pb-0">
            <div className="pt-0.5 text-sm font-semibold tracking-[0.16em] text-[#25638f]">
              {step.n}
            </div>

            <div className="relative z-10 flex justify-center pt-1.5">
              <span className="h-3 w-3 rounded-full border border-[#25638f]/45 bg-white ring-4 ring-white" aria-hidden="true" />
            </div>

            <div>
              <h2 className="text-xl font-semibold tracking-tight text-[#172235]">{step.title}</h2>
              <p className="mt-1.5 text-sm leading-6 text-slate-600">{step.desc}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
