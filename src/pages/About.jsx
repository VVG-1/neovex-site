import React from "react";
import { ArrowRight, GitBranch, Handshake, Link2, Settings2 } from "lucide-react";
import Footer from "../components/Footer";

const MEETINGS_URL = "https://meetings.hubspot.com/neovex";

const workflowSteps = ["Process reviewed", "Systems connected", "Workflow launched", "Automation managed"];

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
    desc: "A workflow may use integrations, rules, APIs, or AI. We use the approach that makes the process work reliably rather than adding unnecessary complexity.",
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

          <div className="border-y border-slate-200">
            {workflowSteps.map((item, index) => (
              <div key={item} className="flex items-center gap-4 border-b border-slate-200 py-5 last:border-b-0">
                <div className="text-sm font-bold tracking-[0.18em] text-[#25638f]">0{index + 1}</div>
                <div className="text-lg font-semibold text-[#172235]">{item}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-14 md:py-16 bg-[#F5F6F7] border-b border-slate-200">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[0.42fr_0.58fr] gap-10 lg:gap-14">
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#25638f]">
              OUR MISSION
            </div>
            <h2 className="mt-4 text-3xl md:text-[2.8rem] md:leading-[1.14] font-bold tracking-tight text-slate-900">
              Make operational work move without constant manual effort.
            </h2>
          </div>

          <p className="text-lg md:text-xl leading-8 text-slate-700">
            We believe automation should remove unnecessary work without making the business harder to run. That means working with the systems already in place, keeping people involved where judgment matters, and building workflows that are understandable, maintainable, and useful after launch.
          </p>
        </div>
      </section>

      <section className="px-6 py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[minmax(0,0.62fr)_minmax(300px,0.38fr)] gap-10 lg:gap-14 items-start">
          <div className="max-w-4xl">
            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#25638f]">
              BUILT FROM OPERATING EXPERIENCE
            </div>
            <h2 className="mt-4 text-3xl md:text-[2.85rem] md:leading-[1.12] font-bold tracking-tight text-slate-900">
              Built by automating real operational work.
            </h2>
            <div className="mt-6 space-y-5 text-lg leading-8 text-slate-700">
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

          <div className="border-y border-slate-200 py-4">
            {["Process first", "Human judgment preserved", "Repeatable work automated", "Managed after launch"].map((item) => (
              <div key={item} className="border-b border-slate-200 py-4 last:border-b-0">
                <div className="text-base font-semibold text-[#172235]">{item}</div>
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

          <div className="mt-10 grid md:grid-cols-3 border-y border-slate-200">
            {principles.map((item, index) => (
              <article
                key={item.title}
                className={`${index > 0 ? "border-t border-slate-200 md:border-t-0 md:border-l" : ""} border-slate-200 py-6 md:px-6`}
              >
                <h3 className="text-xl font-semibold text-[#172235]">{item.title}</h3>
                <p className="mt-2 text-base leading-7 text-slate-700">{item.desc}</p>
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
