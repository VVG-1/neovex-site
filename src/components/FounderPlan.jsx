// src/components/FounderPlan.jsx
import React from "react";

/**
 * Positioning update (mid-market service teams):
 * - Ops-led teams with real inbound volume + multiple office staff
 * - Frame as a managed "AI inbound operations layer"
 * - Emphasize routing, CRM hygiene, SLA, after-hours coverage, and reporting
 * - Keep pricing + founder plan structure the same
 */

export default function FounderPlan({
  showPricing = true,
  priceMonthly = "$349/mo",
  setupFee = "$399 setup",
  pricingNote = "Includes Missed Call Capture + Web Lead Capture. Month-to-month. Cancel anytime.",
  meetingHref = "https://meetings.hubspot.com/neovex",
}) {
  return (
    <section
      id="founder-plan"
      className="relative overflow-hidden py-20 px-6 bg-blue-50 border-t border-blue-100 scroll-mt-28 md:scroll-mt-32"
    >
      <div className="max-w-7xl mx-auto text-center">
        {/* badge */}
        <div className="inline-flex items-center gap-2 rounded-full bg-white/70 text-blue-700 px-3 py-1 text-xs font-semibold ring-1 ring-blue-100 mb-4">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-blue-600" aria-hidden="true" />
          Founder Plan · AI Inbound Ops Layer
        </div>

        {/* headline */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">
          Install a managed inbound operations layer — so every lead is captured and routed.
        </h2>
        <div className="mx-auto mt-3 mb-6 h-1 w-20 rounded-full bg-blue-600/60" />

        {/* subhead */}
        <p className="text-lg md:text-xl text-slate-700 max-w-3xl mx-auto">
          Built for service teams where inbound is daily ops —{" "}
          <span className="font-semibold text-slate-900">calls + web inquiries every day</span>{" "}
          and your office team is juggling response times, scheduling, and CRM updates. Neovex installs and manages{" "}
          <span className="font-semibold text-slate-900">24/7 call + web capture</span>{" "}
          so every inquiry is captured, standardized, summarized, and routed into the right next step (and synced to your CRM).
          No dev required.
        </p>

        {/* micro-assurances */}
        <div className="mt-3 text-sm text-slate-700">
          White-glove setup · Managed monitoring + improvements · Month-to-month · No dev required
        </div>

        {/* pricing */}
        {showPricing && (
          <div className="mt-8 mx-auto max-w-xl rounded-2xl border border-blue-100 bg-white/90 backdrop-blur p-6 shadow-sm">
            <div className="text-sm font-semibold text-blue-700">Founder pricing</div>

            <div className="mt-2 flex flex-col sm:flex-row sm:items-end sm:justify-center gap-2">
              <div className="text-3xl md:text-4xl font-extrabold text-slate-900">{priceMonthly}</div>
              {setupFee && <div className="text-sm font-semibold text-slate-700">· {setupFee}</div>}
            </div>

            <div className="mt-2 text-sm text-slate-700">{pricingNote}</div>

            <div className="mt-3 text-xs text-slate-600">
              Includes: 24/7 coverage, standardized intake, automated routing, CRM sync, and continuous optimization.
            </div>
          </div>
        )}

        {/* CTAs */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href={meetingHref}
            target="_blank"
            rel="noreferrer"
            aria-label="Get started with the Neovex Founder Plan"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-xl text-sm font-semibold hover:bg-blue-700"
          >
            Book an Intro Call
          </a>

          <a
            href="/#how-it-works"
            aria-label="See how Neovex works"
            className="inline-flex items-center gap-2 bg-white text-blue-700 border border-blue-200 px-5 py-3 rounded-xl text-sm font-semibold hover:bg-blue-50"
          >
            See How It Works
          </a>
        </div>

        {/* perks grid */}
        <ul role="list" className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <li className="rounded-2xl border border-blue-100 bg-white/90 backdrop-blur p-6 shadow-sm flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center mb-3" aria-hidden="true">
              <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 1v22M19 5H9a4 4 0 0 0-4 4v0a4 4 0 0 0 4 4h6a4 4 0 0 1 0 8H5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="text-base md:text-lg font-semibold text-slate-900">Founder pricing</h3>
            <p className="text-sm text-slate-700">Limited onboarding spots for early teams.</p>
          </li>

          <li className="rounded-2xl border border-blue-100 bg-white/90 backdrop-blur p-6 shadow-sm flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center mb-3" aria-hidden="true">
              <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 12h16M12 4v16" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="text-base md:text-lg font-semibold text-slate-900">Done-for-you setup</h3>
            <p className="text-sm text-slate-700">
              We connect phone + web capture, configure intake, and set routing rules for your team.
            </p>
          </li>

          <li className="rounded-2xl border border-blue-100 bg-white/90 backdrop-blur p-6 shadow-sm flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center mb-3" aria-hidden="true">
              <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 20l9-16-9 6-9-6 9 16z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="text-base md:text-lg font-semibold text-slate-900">Managed operations</h3>
            <p className="text-sm text-slate-700">
              Monitoring + continuous improvements so your routing and intake stay sharp.
            </p>
          </li>

          <li className="rounded-2xl border border-blue-100 bg-white/90 backdrop-blur p-6 shadow-sm flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center mb-3" aria-hidden="true">
              <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 7h18M3 12h18M3 17h18" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="text-base md:text-lg font-semibold text-slate-900">Month-to-month</h3>
            <p className="text-sm text-slate-700">No lock-in. Cancel anytime.</p>
          </li>
        </ul>

        <p className="mt-6 text-xs text-slate-700">
          Limited spots.{" "}
          <a href="/terms#founder-plan" className="underline hover:no-underline">
            Terms apply
          </a>
          .
        </p>
      </div>
    </section>
  );
}
