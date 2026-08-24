import React from "react";
import { ArrowRight, CalendarDays, CheckCircle2, GitBranch } from "lucide-react";

export default function ContactThanks() {
  return (
    <div className="min-h-[70vh] bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-3xl mx-auto px-6 py-20 md:py-24 text-center">
        <div className="mx-auto inline-flex items-center gap-2 rounded-full bg-emerald-50 text-emerald-800 px-3 py-1 text-xs font-semibold ring-1 ring-emerald-100">
          <CheckCircle2 className="h-4 w-4" />
          Message received
        </div>

        <h1 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
          We will review your workflow.
        </h1>
        <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
          Neovex will review your request and follow up shortly, typically the same business day Monday through Friday.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="/discuss-a-workflow"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 text-white px-6 h-12 text-sm font-semibold hover:bg-black w-full sm:w-auto"
          >
            <CalendarDays className="h-4 w-4" />
            Discuss a Workflow
            <ArrowRight className="h-4 w-4" />
          </a>

          <a
            href="/#audit"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white text-slate-900 px-6 h-12 text-sm font-semibold hover:bg-slate-50 w-full sm:w-auto"
          >
            Start With an Audit
          </a>
        </div>

        <div className="mt-10 text-left">
          <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
            <div className="h-1 w-full bg-gradient-to-r from-blue-600 to-sky-400" />

            <div className="p-6 md:p-8">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 text-white">
                  <GitBranch className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-slate-900">What happens next</h2>
                  <p className="mt-1 text-sm text-slate-600">
                    We will use your note to understand the workflow, systems, and handoffs involved.
                  </p>
                </div>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {[
                  ["1. Review", "We read your message and identify the manual steps, systems, and handoffs involved."],
                  ["2. Recommend", "We suggest whether an audit, workflow build, or larger automation system is the right next step."],
                  ["3. Scope", "If you move forward, we map the workflow, confirm access needs, and define testing and launch requirements."],
                ].map(([title, desc]) => (
                  <div key={title} className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                    <div className="text-sm font-semibold text-slate-900">{title}</div>
                    <p className="mt-2 text-base leading-relaxed text-slate-700">{desc}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-xl border border-slate-200 bg-white p-4">
                <div className="text-sm font-semibold text-slate-900">While you wait</div>
                <p className="mt-2 text-base leading-relaxed text-slate-700">
                  You can review the homepage sections on workflow examples, pricing, and the audit offer.
                </p>

                <div className="mt-3 flex flex-wrap gap-2">
                  <a href="/#solutions" className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50">
                    View Solutions <ArrowRight className="h-4 w-4" />
                  </a>
                  <a href="/#pricing" className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50">
                    View Pricing <ArrowRight className="h-4 w-4" />
                  </a>
                  <a href="/faq" className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50">
                    FAQ <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>

              <p className="mt-6 text-xs text-slate-500">
                Prefer email? Reach us at{" "}
                <a className="underline hover:text-slate-700" href="mailto:hello@neovexai.com">
                  hello@neovexai.com
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
