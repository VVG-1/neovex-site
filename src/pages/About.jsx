import React from "react";
import { ArrowRight, ClipboardList, GitBranch, Handshake, Link2, Settings2, Shield } from "lucide-react";
import SectionHeader from "../components/SectionHeader";
import Footer from "../components/Footer";

const MEETINGS_URL = "https://meetings.hubspot.com/neovex";

export default function AboutPage() {
  return (
    <div className="bg-white text-slate-900">
      <section className="px-6 pt-20 md:pt-24 pb-12 border-b border-slate-100">
        <div className="max-w-7xl mx-auto grid md:grid-cols-[1fr_0.85fr] gap-10 items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 text-blue-700 px-3 py-1 text-[11px] font-semibold ring-1 ring-blue-100">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-blue-600" />
              About Neovex
            </div>

            <h1 className="mt-3 text-3xl md:text-5xl font-extrabold tracking-tight">
              Workflow automation for growing businesses.
            </h1>

            <p className="mt-4 text-lg md:text-xl text-slate-700 max-w-2xl">
              Neovex designs, builds, and manages automated workflows across the tools businesses already use, reducing repetitive work, manual handoffs, and administrative overhead.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href={MEETINGS_URL}
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl px-5 h-12 text-sm font-semibold bg-blue-600 text-white hover:bg-blue-700 shadow-sm"
              >
                Discuss a Workflow <ArrowRight className="ml-2 h-4 w-4" />
              </a>

              <a
                href="/#audit"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl px-5 h-12 text-sm font-semibold border border-slate-300 bg-white text-slate-800 hover:bg-slate-50 shadow-sm"
              >
                Start With an Audit <ArrowRight className="ml-2 h-4 w-4 opacity-70" />
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
            <div className="h-1 bg-gradient-to-r from-blue-600 to-sky-400" />
            <div className="p-6 space-y-4">
              {["Process reviewed", "Systems connected", "Next steps automated", "Workflow managed"].map((item, index) => (
                <div key={item} className="flex items-center gap-3 rounded-xl bg-slate-50 border border-slate-200 p-4">
                  <div className="w-9 h-9 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-sm font-semibold">
                    {index + 1}
                  </div>
                  <div className="text-sm font-semibold text-slate-900">{item}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-12 md:py-16 bg-blue-50 border-y border-blue-100">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            eyebrow="Our mission"
            title="Make operational work move without constant manual effort."
            subtitle="We help teams identify where manual work is slowing the business down, then build managed workflows that connect systems, trigger next steps, and keep exceptions visible."
            variant="primary"
            align="center"
            dividerClass="bg-gradient-to-r from-blue-600 to-sky-400"
          />
        </div>
      </section>

      <section className="px-6 py-12 md:py-16 bg-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="What we build"
            title="Automated workflows, not another system to babysit."
            subtitle="Neovex works across the tools you already use and automates the movement of work between people, systems, decisions, and next steps."
            variant="secondary"
            align="center"
          />

          <ul className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: GitBranch, title: "Workflow mapping", desc: "We understand how the process moves today." },
              { icon: Link2, title: "System connection", desc: "We connect the tools that already hold the information." },
              { icon: Settings2, title: "Automation build", desc: "We automate repetitive steps, routing, and triggers." },
              { icon: Handshake, title: "Managed launch", desc: "We monitor, maintain, and improve the workflow." },
            ].map((f) => (
              <li key={f.title} className="rounded-2xl bg-white p-6 border border-slate-200 shadow-sm text-center hover:shadow-md transition">
                <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center mx-auto mb-4">
                  <f.icon className="w-6 h-6" />
                </div>
                <h3 className="text-base md:text-lg font-semibold text-slate-900">{f.title}</h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">{f.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-6 py-16 bg-blue-50 border-y border-blue-100">
        <div className="max-w-7xl mx-auto text-center">
          <SectionHeader
            eyebrow="How we work"
            title="Practical, operational, implementation-focused."
            subtitle="Neovex uses automation, integrations, rules, and AI where appropriate. The objective is the right workflow, not hype for its own sake."
            variant="primary"
            align="center"
          />

          <div className="mt-10 grid md:grid-cols-2 gap-6 max-w-4xl mx-auto text-left">
            <div className="rounded-2xl bg-white border border-blue-100 p-6 shadow-sm">
              <ClipboardList className="w-6 h-6 text-blue-700" />
              <h3 className="mt-3 text-lg font-semibold text-slate-900">Built around your process</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                We start by understanding the work, the handoffs, the systems, and where human judgment still belongs.
              </p>
            </div>
            <div className="rounded-2xl bg-white border border-blue-100 p-6 shadow-sm">
              <Shield className="w-6 h-6 text-blue-700" />
              <h3 className="mt-3 text-lg font-semibold text-slate-900">Managed after launch</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                We maintain integrations, monitor workflow behavior, troubleshoot issues, and improve the automation as the business changes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
