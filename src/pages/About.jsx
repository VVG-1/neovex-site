import React from "react";
import { ArrowRight, ClipboardList, GitBranch, Handshake, Link2, Settings2, Shield } from "lucide-react";
import Footer from "../components/Footer";

const MEETINGS_URL = "https://meetings.hubspot.com/neovex";

const workflowSteps = ["Process reviewed", "Systems connected", "Workflow launched", "Automation managed"];

const buildItems = [
  { icon: GitBranch, title: "Workflow mapping", desc: "We understand how the process moves today and where manual work slows it down." },
  { icon: Link2, title: "System connection", desc: "We connect the tools that already hold the information and trigger the next steps." },
  { icon: Settings2, title: "Automation build", desc: "We configure rules, routing, handoffs, approvals, and repeatable workflow logic." },
  { icon: Handshake, title: "Managed launch", desc: "We test, launch, monitor, maintain, and improve the workflow after it is live." },
];

const principles = [
  {
    icon: ClipboardList,
    title: "Built around your process",
    desc: "We start with the work itself: the people involved, the systems in use, the handoffs, and the places where human judgment still belongs.",
  },
  {
    icon: Shield,
    title: "Managed after launch",
    desc: "We maintain integrations, monitor workflow behavior, troubleshoot issues, and adjust the automation as the business changes.",
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
            We help teams identify where manual work is slowing the business down, then build managed workflows that connect systems, trigger next steps, and keep exceptions visible.
          </p>
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
              Neovex uses automation, integrations, rules, and AI where appropriate. The objective is the right workflow, not hype for its own sake.
            </p>
          </div>

          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {principles.map((item) => (
              <article key={item.title} className="rounded-lg border border-slate-200 bg-white p-6">
                <item.icon className="h-5 w-5 text-[#25638f]" strokeWidth={1.9} aria-hidden="true" />
                <h3 className="mt-4 text-xl font-semibold text-[#172235]">{item.title}</h3>
                <p className="mt-2 text-base leading-7 text-slate-700">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
