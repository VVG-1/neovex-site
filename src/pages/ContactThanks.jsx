// src/pages/ContactThanks.jsx
import React from "react";
import { CheckCircle2, CalendarDays, ArrowRight, Sparkles } from "lucide-react";

export default function ContactThanks() {
  return (
    <div className="min-h-[70vh] bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-3xl mx-auto px-6 py-20 md:py-24 text-center">
        {/* Top badge */}
        <div className="mx-auto inline-flex items-center gap-2 rounded-full bg-emerald-50 text-emerald-800 px-3 py-1 text-xs font-semibold ring-1 ring-emerald-100">
          <CheckCircle2 className="h-4 w-4" />
          Message received
        </div>

        <h1 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
          You’re all set <span className="align-middle">🎉</span>
        </h1>
        <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
          We’ll review your request and follow up shortly (typically the same business day, Monday–Friday).
        </p>

        {/* Primary CTA */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="https://meetings.hubspot.com/neovex"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 text-white px-6 h-12 text-sm font-semibold hover:bg-black w-full sm:w-auto"
          >
            <CalendarDays className="h-4 w-4" />
            Book a quick call
            <ArrowRight className="h-4 w-4" />
          </a>

          <a
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white text-slate-900 px-6 h-12 text-sm font-semibold hover:bg-slate-50 w-full sm:w-auto"
          >
            Back to home
          </a>
        </div>

        {/* Card */}
        <div className="mt-10 text-left">
          <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
            <div className="h-1 w-full bg-gradient-to-r from-blue-600 to-sky-400" />

            <div className="p-6 md:p-8">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 text-white">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-slate-900">What happens next</h2>
                  <p className="mt-1 text-sm text-slate-600">
                    Here’s exactly what we’ll do after your submission.
                  </p>
                </div>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-3">

<div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
  <div className="text-sm font-semibold text-slate-900">
    1) Review
  </div>
  <p className="mt-2 text-base leading-relaxed text-slate-700">
    We’ll read your message and identify the biggest leak
    (missed calls, slow follow-up, etc.).
  </p>
</div>





                <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                  <div className="text-sm font-semibold text-slate-900">2) Recommend</div>
                  <p className="mt-2 text-base leading-relaxed text-slate-700">
                    We’ll send the simplest fix first — no overbuilding, no fluff.
                  </p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                  <div className="text-sm font-semibold text-slate-900">3) Go live</div>
                  <p className="mt-2 text-base leading-relaxed text-slate-700">
                    If you want to move forward, we’ll map your tools and get you live fast.
                  </p>
                </div>
              </div>

              {/* While you wait */}
              <div className="mt-6 rounded-xl border border-slate-200 bg-white p-4">
                <div className="text-sm font-semibold text-slate-900">While you wait</div>


   <p className="mt-2 text-base leading-relaxed text-slate-700">
  Want to see what we typically implement? Explore:
</p>



                <div className="mt-3 flex flex-wrap gap-2">
                  <a
                    href="/products"
                    className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50"
                  >
                    View Solutions <ArrowRight className="h-4 w-4" />
                  </a>
                  <a
                    href="/about"
                    className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50"
                  >
                    How it works <ArrowRight className="h-4 w-4" />
                  </a>
                  <a
                    href="/faq"
                    className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50"
                  >
                    FAQ <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>

              {/* Contact line */}
              <p className="mt-6 text-xs text-slate-500">
                Prefer email? Reply to the confirmation email, or reach us at{" "}
                <a className="underline hover:text-slate-700" href="mailto:hello@neovex.ai">
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
