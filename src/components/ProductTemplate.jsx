import React from "react";
import { CheckCircle, ArrowRight } from "lucide-react"

import FAQ from "./FAQ";
import Footer from "./Footer";
import SectionHeader from "./SectionHeader";
import FounderQuote from "./FounderQuote";
import { HeroFlowCards } from "./HeroFlowCards";


/**
 * ProductTemplate (modern, centered + consistent headers)
 *
 * Required:
 * - problem:  { heading, copy?, pains?: [{ icon?: ReactComp, title, desc }] }
 * - solution: { heading, copy? (define WHAT the product is), points?: [{ icon?: ReactComp, text }] }
 *
 * Optional:
 * - steps:     [{ title, desc, icon?: ReactComp, number? }]
 * - features:  [{ title, desc, icon?: ReactComp }]
 * - integrations: string[]
 * - faqs:        [{ id, q, a, Icon }]
 * - outcomes:    [{ chip?, title, desc, icon?: ReactComp }]
 * - showOutcomes: boolean (default false)
 */
export default function ProductTemplate({
  sectionId = "product",
  title,
  subtitle,
  icon: Icon,
  gradient = "from-blue-600 to-sky-500",
  heroFlowItems = [],
 proofStrip = [], // ✅ ADD THIS




  // Always rendered
  problem = { heading: "The Problem", copy: "", pains: [] },
  solution = { heading: "Solution", copy: "", points: [] },

  // Optional
  steps = [],
  features = [],
featuresIntro = "Neovex is fully managed—we set it up and run it for you in the tools you already use. No dashboards to learn and no new logins; you just see booked jobs and faster cash. It’s month-to-month, so you can cancel anytime.",
  integrations = [],
    afterSolution = null,
  faqs = [],
    faqTitle = null,   // 👈 add this
  faqSubtitle = null,   // 👈 ADD THIS

  // Optional “What you get”
  outcomes = [],
  showOutcomes = false,

  // CTAs
  ctaPrimaryHref = "https://meetings.hubspot.com/neovex",
  ctaPrimaryText = "Book an Intro Call",
  ctaSecondaryHref = "/products",
  ctaSecondaryText = "See all products",

  // Footer toggle
  showFooter = true,
  founderQuote = null, // { text, variant?, founderName?, founderTitle?, brand?, headshotUrl?, logoUrl? }

}) {


const sectionClass = "relative px-6 py-16 bg-blue-50 border-y border-blue-100";
const pillClass = "bg-blue-100 text-blue-700 ring-1 ring-blue-200";
const dividerClass = "bg-gradient-to-r from-blue-600 to-sky-400";

const [showAllFaqs, setShowAllFaqs] = React.useState(false);
const FAQ_INITIAL = 10;
const faqsToShow = showAllFaqs ? faqs : faqs.slice(0, FAQ_INITIAL);
const faqTitleText = faqTitle ?? (title ? `Questions about ${title}` : "Questions");
const faqSubtitleText =
  faqSubtitle ??
  "Learn more about the product and how it can help your business.";



const btnBase =
  "w-full sm:w-auto inline-flex items-center justify-center rounded-xl px-5 py-3 h-12 text-sm font-semibold transition " +
  "focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white";

const primaryBtnClass = `${btnBase} bg-blue-600 text-white hover:bg-blue-700`;
const secondaryBtnClass = `${btnBase} border border-slate-200 bg-white text-slate-800 hover:bg-slate-50`;



  return (
    <div className="bg-white text-slate-900">
    
{/* Hero */}
<section
  id={sectionId}
  aria-labelledby="hero-title"
  className="px-6 pt-20 md:pt-24 pb-12 border-b border-slate-100"
>
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-10 relative">
    {/* optional: faint top-right glow that keeps background 'white' */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-blue-100/40 blur-3xl md:block hidden"
    />

    <div className="max-w-2xl">
    <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 text-blue-700 px-3 py-1 text-[11px] font-semibold ring-1 ring-blue-100">
  <span className="inline-block h-1.5 w-1.5 rounded-full bg-blue-600" aria-hidden="true" />
  Fully managed service • We set it up for you • No software to learn
</div>


<h1 id="hero-title" className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
        {title}
      </h1>

      {subtitle && (
        <p className="mt-4 text-lg md:text-xl text-slate-700 leading-relaxed max-w-prose">
          {subtitle}
        </p>
      )}


{Array.isArray(proofStrip) && proofStrip.length > 0 && (
  <div className="mt-5 flex flex-wrap gap-2">
    {proofStrip.map((item, i) => (
      <div
        key={i}
        className="inline-flex items-center gap-2 rounded-full bg-slate-50 text-slate-700 px-3 py-1 text-xs font-semibold ring-1 ring-slate-200"
      >
        {item.icon ? <span className="text-slate-500">{item.icon}</span> : null}
        <span>{item.text}</span>
      </div>
    ))}
  </div>
)}


<div className="mt-6">
  <a
    href={ctaPrimaryHref}
    className="inline-flex items-center justify-center rounded-xl px-5 h-12 text-sm font-semibold
               bg-blue-600 text-white hover:bg-blue-700 transition
               focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white shadow-sm"
  >
    Book an Intro Call
    <ArrowRight className="ml-2 h-4 w-4" />
  </a>
</div>


      {/* small reinforcer */}
      <p className="mt-3 text-xs text-slate-500">
        No long-term contracts. Cancel anytime.
      </p>
    </div>

    {/* Right-side visual */}
    <div className="w-full md:w-auto md:flex-1">
      {/* Mobile: icon tile for fast LCP */}
      {Icon && (
        <div className="md:hidden">
          <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${gradient} text-white flex items-center justify-center ring-1 ring-white/60 shadow-sm`}>
            <Icon className="w-9 h-9" />
          </div>
        </div>
      )}

      {/* Desktop: stacked flow cards if provided; else fallback to icon tile */}
      {heroFlowItems?.length > 0 ? (
        <div className="hidden md:block mt-8 md:mt-0">
          <HeroFlowCards items={heroFlowItems} />
        </div>
      ) : (
        Icon && (
          <div
            className={`hidden md:flex w-24 h-24 rounded-2xl bg-gradient-to-br ${gradient} text-white items-center justify-center ring-1 ring-white/60 shadow-sm`}
            aria-hidden="true"
          >
            <Icon className="w-10 h-10" />
          </div>
        )
      )}
    </div>
  </div>
</section>



      {/* Problem — centered */}
      <section className="px-6 py-14 bg-blue-50 border-y border-blue-100">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="The Problem"
            title={problem.heading}
            subtitle={problem.copy}
            variant="primary"
            align="center"
          />

          {Array.isArray(problem.pains) && problem.pains.length > 0 && (
            <ul
              role="list"
              className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {problem.pains.map((p, i) => (
                <li
                  key={i}
                  className="rounded-2xl bg-white p-6 border border-white/60 shadow-sm flex flex-col items-center text-center"
                >
                  <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center mb-3">
                    {p.icon ? (
                      <p.icon className="w-6 h-6" />
                    ) : (
                      <CheckCircle className="w-6 h-6" />
                    )}
                  </div>
                  <h3 className="text-base md:text-lg font-semibold text-slate-900">
                    {p.title}
                  </h3>
                  <p className="text-sm text-slate-600 mt-1">{p.desc}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      {/* Solution — modern, centered, subtle colored cards */}
      {solution && (
        <section className="px-6 py-16 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto">
            <SectionHeader
              eyebrow="Solution"
              title={solution.heading}
              subtitle={solution.copy}
              variant="primary"
              align="center"
              dividerClass="bg-gradient-to-r from-blue-600 to-sky-400"
            />

            {Array.isArray(solution.points) && solution.points.length > 0 && (
              <ul
                role="list"
                className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {solution.points.map((p, i) => {
                  const ramps = [
                    {
                      frame:
                        "from-blue-200/30 via-sky-200/20 to-blue-200/30",
                      ring: "ring-blue-100",
                      chip: "from-blue-600 to-sky-500",
                    },
                    {
                      frame:
                        "from-violet-200/30 via-fuchsia-200/20 to-violet-200/30",
                      ring: "ring-violet-100",
                      chip: "from-violet-600 to-fuchsia-500",
                    },
                    {
                      frame:
                        "from-emerald-200/30 via-teal-200/20 to-emerald-200/30",
                      ring: "ring-emerald-100",
                      chip: "from-emerald-600 to-teal-500",
                    },
                  ];
                  const ramp = ramps[i % ramps.length];

                  return (
                    <li key={i} className="rounded-2xl">
                      <div
                        className={`rounded-2xl p-[1px] bg-gradient-to-br ${ramp.frame}`}
                      >
                        <div
                          className={`rounded-2xl bg-white/90 backdrop-blur p-6 md:p-7 border ring-1 ${ramp.ring} shadow-sm flex flex-col items-center text-center`}
                        >
                          <div
                            className={`w-12 h-12 rounded-xl bg-gradient-to-br ${ramp.chip} text-white flex items-center justify-center ring-1 ring-white/50 shadow mb-3`}
                          >
                            {p.icon ? (
                              <p.icon className="w-6 h-6" />
                            ) : (
                              <CheckCircle className="w-6 h-6" />
                            )}
                          </div>
                          <p className="text-base md:text-lg text-slate-800">
                            {p.text}
                          </p>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </section>
      )}


{/* Optional: afterSolution slot (e.g., visual proof, pricing, etc.) */}
{afterSolution && (
  <section className="px-6 py-16 bg-blue-50 border-y border-blue-100">
    <div className="max-w-7xl mx-auto">
      {afterSolution}
    </div>
  </section>
)}





      {/* How it works — horizontal stepper */}
{Array.isArray(steps) && steps.length > 0 && (
  <section className="px-6 py-16 bg-blue-50 border-b border-blue-100">
    <div className="max-w-7xl mx-auto">
      <SectionHeader
        eyebrow="We set it up for you and manage it for you!"
        title="How it works"
        variant="primary"
        align="center"
        dividerClass="bg-gradient-to-r from-blue-600 to-sky-400"
      />
      <div className="relative mt-8">
        <div
          className="hidden md:block absolute left-0 right-0 top-6 h-[2px] bg-gradient-to-r from-blue-200 via-sky-200 to-blue-200"
          aria-hidden="true"
        />
        <ol role="list" className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {steps.map((s, i) => (
            <li key={i} className="relative flex flex-col items-center text-center">
              <div className="grid place-items-center h-12 w-12 rounded-full bg-gradient-to-br from-blue-600 to-sky-500 text-white font-semibold ring-2 ring-white shadow">
                {s.number ?? i + 1}
              </div>
              {s.icon && (
                <div className="mt-3 w-12 h-12 rounded-xl bg-white/60 backdrop-blur flex items-center justify-center ring-1 ring-blue-200 text-blue-700 shadow-sm">
                  <s.icon className="w-6 h-6" />
                </div>
              )}
              <h3 className="mt-3 text-lg font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-1 text-sm text-slate-700 max-w-xs">{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  </section>
)}



{founderQuote && (
<section className="px-6 py-8 md:py-16 bg-white border-y border-slate-100">
    <div className="max-w-7xl mx-auto">
      <FounderQuote
        quote={founderQuote.text}
        variant="white"
        founderName={founderQuote.founderName ?? "James Carter"}
        founderTitle={founderQuote.founderTitle ?? "Founder"}
        brand={founderQuote.brand ?? "Neovex AI"}
        headshotUrl={founderQuote.headshotUrl}
        logoUrl={founderQuote.logoUrl}
      />
    </div>
  </section>
)}




{/* Features (modern cards + managed paragraph) */}
{features.length > 0 && (
  <section className="px-6 py-16 bg-blue-50 border-b border-blue-100">
    <div className="max-w-7xl mx-auto">
      <SectionHeader title="What it does" variant="secondary" />
      {/* Managed promise — paragraph */}
   {featuresIntro && (
   <p className="mx-auto mb-10 max-w-3xl text-lg md:text-xl leading-relaxed text-slate-700 text-center">
     {featuresIntro}
   </p>
 )}

      <ul role="list" className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, i) => {
          const ramps = [
            { bar: "from-blue-600 to-sky-400", chip: "from-blue-600 to-sky-500" },
            { bar: "from-violet-600 to-fuchsia-400", chip: "from-violet-600 to-fuchsia-500" },
            { bar: "from-emerald-600 to-teal-400", chip: "from-emerald-600 to-teal-500" },
            { bar: "from-amber-600 to-orange-400", chip: "from-amber-600 to-orange-500" },
          ];
          const r = ramps[i % ramps.length];

          return (
    <li
  key={i}
  className="group h-full rounded-xl bg-gradient-to-br from-white to-blue-50/60 ring-1 ring-blue-200 hover:ring-blue-300 shadow-xs hover:shadow-md transition"
>
  <div className={`h-1 w-full rounded-t-xl bg-gradient-to-r ${r.bar}`} />
  <div className="p-5 text-center flex flex-col items-center">
    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${r.chip} text-white flex items-center justify-center ring-1 ring-white/40 shadow-sm mb-3`}>
      {f.icon ? <f.icon className="w-5 h-5" /> : /* fallback */ null}
    </div>
    <h3 className="text-lg font-semibold text-slate-900">{f.title}</h3>
    <p className="mt-1 text-sm text-slate-700 max-w-xs mx-auto">{f.desc}</p>
  </div>
</li>
          );
        })}
      </ul>
    </div>
  </section>
)}

{integrations.length > 0 && (
<section className={`${sectionClass} bg-white border-y border-slate-100`}>
    <div className="relative max-w-7xl mx-auto text-center">
      {/* Eyebrow pill */}
      <div className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ${pillClass}`}>
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-white" aria-hidden="true" />
        Works with your tools
      </div>

      <h3 className="mt-3 text-2xl md:text-3xl font-extrabold text-slate-900">Integrations</h3>
      <div className={`mx-auto mt-3 mb-8 h-1 w-20 rounded-full ${dividerClass}`} />

      {/* marquee lane */}
      <div className="relative overflow-hidden mt-8">
        <ul className="flex gap-4 w-max animate-[marquee_32s_linear_infinite] hover:[animation-play-state:paused]">
          {[...integrations, ...integrations].map((it, i) => {
            const item = typeof it === "string" ? { name: it } : it;

            const pastel = [
              "from-blue-50 to-sky-50",
              "from-violet-50 to-fuchsia-50",
              "from-emerald-50 to-teal-50",
              "from-amber-50 to-orange-50",
            ];
            const tone = pastel[i % pastel.length];

            const Tile = (
              <div className="group relative rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
                <span className="pointer-events-none absolute inset-x-0 top-0 h-[3px] rounded-t-2xl bg-gradient-to-r from-blue-600 to-sky-400 opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="px-3 py-2.5 sm:px-4 sm:py-3 flex items-center gap-3">
                  {item.logo ? (
                    <div className="grid place-items-center h-10 w-10 rounded-lg ring-1 ring-slate-200 bg-white">
                      <img
                        src={item.logo}
                        alt={`${item.name ?? ""} logo`}
                        className="h-5 w-5 sm:h-6 sm:w-6 object-contain grayscale group-hover:grayscale-0 transition"
                        loading="lazy"
                      />
                    </div>
                  ) : (
                    <div className={`grid place-items-center h-10 w-10 rounded-lg bg-gradient-to-br ${tone} ring-1 ring-slate-200 text-slate-700 text-xs font-semibold`}>
                      {item.name?.[0] ?? "•"}
                    </div>
                  )}

                  <div className="min-w-0 flex items-center gap-2">
                    <span className="truncate max-w-[14ch] sm:max-w-[22ch] md:max-w-none text-sm md:text-base font-medium text-slate-900">
                      {item.name}
                    </span>
                    {item.badge && (
                      <span className="inline-flex items-center rounded-full bg-blue-50 text-blue-700 px-1.5 py-0.5 text-[10px] font-semibold ring-1 ring-blue-100">
                        {item.badge}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );

            return (
              <li key={i} className="h-full">
                {item.href ? (
                  <a
                    href={item.href}
                    aria-label={`Open ${item.name}`}
                    className="block rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:ring-offset-blue-50"
                  >
                    {Tile}
                  </a>
                ) : (
                  Tile
                )}
              </li>
            );
          })}
        </ul>
      </div>

      <p className="mt-8 text-sm text-slate-700">
        Don’t see your tool?{" "}
        <a
          href="/contact"
          className="text-blue-700 font-semibold underline decoration-blue-400/60 hover:decoration-blue-600"
        >
          Ask us
        </a>{" "}
        — we probably integrate.
      </p>
    </div>

    <style>{`
      @keyframes marquee { 0% {transform: translateX(0%);} 100% {transform: translateX(-50%);} }
      @media (prefers-reduced-motion: reduce) {
        .animate-[marquee_32s_linear_infinite] { animation: none !important; }
      }
    `}</style>
  </section>
)}




      {/* What you get (optional) */}
      {showOutcomes && outcomes.length > 0 && (
        <section className="px-6 py-14 bg-blue-50/60 border-b border-slate-100">
          <div className="max-w-7xl mx-auto">
            <SectionHeader title="What you get" variant="secondary" />
            <ul
              role="list"
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-left"
            >
              {outcomes.map((o, i) => (
                <li
                  key={i}
                  className="rounded-2xl bg-white p-6 border border-white/60 shadow-sm"
                >
                  {o.chip && (
                    <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 text-slate-700 px-2.5 py-1 text-xs font-medium ring-1 ring-slate-200 mb-3">
                      {o.chip}
                    </div>
                  )}
                  <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center mb-3">
                    {o.icon ? (
                      <o.icon className="w-5 h-5" />
                    ) : (
                      <CheckCircle className="w-5 h-5" />
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-1">
                    {o.title}
                  </h3>
                  <p className="text-sm text-slate-600">{o.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}



  


      


{faqsToShow.length > 0 && (
<section className="px-6 py-8 md:py-20 bg-blue-50 border-t border-blue-100">
    <div className="max-w-7xl mx-auto">
      <FAQ
        id="faq-product"
        title={faqTitleText}
        subtitle={faqSubtitleText}
        faqs={faqsToShow}
        jsonLd
      />

      {faqs.length > FAQ_INITIAL && (
        <div className="mt-6 flex justify-center">
          <button
            onClick={() => setShowAllFaqs((s) => !s)}
            className="inline-flex items-center rounded-xl px-4 py-2 text-sm font-semibold
                       text-blue-700 bg-white ring-1 ring-blue-200 hover:bg-blue-100"
          >
            {showAllFaqs ? "Show fewer questions" : "Show more questions"}
          </button>
        </div>
      )}
    </div>
  </section>
)}



      {showFooter && <Footer />}
    </div>
  );
}
