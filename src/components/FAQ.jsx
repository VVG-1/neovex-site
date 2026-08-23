import React, { useEffect, useMemo, useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ({
  faqs = [],
  id = "faq",
  title = "Frequently asked questions",
  subtitle = "Quick answers about workflow automation and how Neovex fits your stack.",
  jsonLd = true,
  defaultOpenId,
  bg = "blue",
}) {
  const initial = defaultOpenId !== undefined ? defaultOpenId : (faqs[0]?.id ?? null);
  const [openId, setOpenId] = useState(initial);

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash.startsWith(`${id}-`)) {
      const target = hash.slice(id.length + 1);
      if (faqs.some((f) => f.id === target)) setOpenId(target);
    }
  }, [faqs, id]);

  const handleToggle = (idToOpen, isOpen) => {
    const next = isOpen ? null : idToOpen;
    setOpenId(next);
    window.history.replaceState(null, "", next ? `#${id}-${next}` : `#${id}`);
  };

  const faqJsonLd = useMemo(() => {
    if (!jsonLd || faqs.length === 0) return null;

    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs
        .filter((f) => f.q)
        .map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: typeof f.seoText === "string" ? f.seoText : typeof f.a === "string" ? f.a : "",
          },
        })),
    };
  }, [faqs, jsonLd]);

  return (
    <section
      id={id}
      className={`relative overflow-hidden py-20 px-6 scroll-mt-28 md:scroll-mt-32 ${
        bg === "white" ? "bg-white border-t border-stone-200" : "bg-[#F7F6F2] border-t border-stone-200"
      }`}
    >
      <div className="max-w-7xl mx-auto text-center">
        <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-700">
          FAQ
        </div>

        <h2 className="mt-4 text-3xl md:text-[2.45rem] md:leading-[1.14] font-bold text-slate-900 tracking-tight">
          {title}
        </h2>

        {subtitle ? (
          <p className="mt-6 text-base md:text-lg text-slate-700 max-w-3xl mx-auto">
            {subtitle}
          </p>
        ) : null}

        <ul role="list" className="mt-10 max-w-3xl mx-auto space-y-4 text-left">
          {faqs.map(({ id: itemId, q, a, Icon }) => {
            const isOpen = openId === itemId;
            return (
              <li
                key={itemId}
                id={`${id}-${itemId}`}
                className={`rounded-lg border overflow-hidden transition ${
                  isOpen ? "border-stone-300 bg-white" : "border-stone-200 bg-white"
                }`}
              >
                <button
                  id={`faq-header-${itemId}`}
                  aria-controls={`faq-panel-${itemId}`}
                  aria-expanded={isOpen}
                  onClick={() => handleToggle(itemId, isOpen)}
                  className="w-full flex justify-between items-start px-6 py-4 text-left text-base md:text-lg font-medium text-slate-800 hover:bg-stone-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                >
                  <span className="flex items-start gap-3 pr-3">
                    {Icon ? <Icon className={`w-5 h-5 mt-0.5 ${isOpen ? "text-slate-700" : "text-slate-400"}`} /> : null}
                    <span>{q}</span>
                  </span>

                  <ChevronDown className={`w-5 h-5 mt-0.5 motion-safe:transition-transform ${isOpen ? "rotate-180 text-slate-700" : "text-slate-400"}`} />
                </button>

                <div
                  id={`faq-panel-${itemId}`}
                  role="region"
                  aria-labelledby={`faq-header-${itemId}`}
                  hidden={!isOpen}
                  className="px-6 pb-6 text-base text-slate-600"
                >
                  {a}
                </div>
              </li>
            );
          })}
        </ul>

        <div className="mt-10">
          <a
            href="https://meetings.hubspot.com/neovex"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800 transition"
          >
            Did not see your question? Discuss a Workflow
          </a>
        </div>
      </div>

      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
    </section>
  );
}
