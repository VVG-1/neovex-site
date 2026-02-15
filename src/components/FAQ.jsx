import React, { useEffect, useMemo, useState } from "react";
import { ChevronDown } from "lucide-react";

/**
 * FAQ Section
 * - Supports deep links: #faq-<id>
 * - JSON-LD uses seoText (string) to avoid JSX issues
 */
export default function FAQ({
  faqs = [],
  id = "faq",
  title = "Frequently asked questions",
  subtitle = "Quick answers about setup, security, and how Neovex fits your stack.",
  jsonLd = true,
  defaultOpenId,
  bg = "blue", // 👈 add this
}) {
  const initial = defaultOpenId !== undefined ? defaultOpenId : (faqs[0]?.id ?? null);
  const [openId, setOpenId] = useState(initial);

  // Deep-link: #faq-<id> opens that item on load
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

    // Only set hash when opening an item; when closing, go back to #faq
    const newHash = next ? `#${id}-${next}` : `#${id}`;
    window.history.replaceState(null, "", newHash);
  };

  // Build JSON-LD safely using seoText (string)
  const faqJsonLd = useMemo(() => {
    if (!jsonLd || faqs.length === 0) return null;

    // Expect seoText to be a plain string. Fall back to q-only if missing.
    const entities = faqs
      .filter((f) => f.q)
      .map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: typeof f.seoText === "string" ? f.seoText : "",
        },
      }));

    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: entities,
    };
  }, [faqs, jsonLd]);

return (
  <section
    id={id}
    className={`relative overflow-hidden py-20 px-6 scroll-mt-28 md:scroll-mt-32 ${
      bg === "white"
        ? "bg-white border-t border-slate-100"
        : "bg-blue-50 border-t border-blue-100"
    }`}
  >

      <div className="max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 text-blue-700 px-3 py-1 text-xs font-semibold ring-1 ring-blue-100">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-blue-600" aria-hidden="true" />
          FAQ
        </div>

        <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
          {title}
        </h2>
        <div className="mx-auto mt-3 mb-8 h-1 w-20 rounded-full bg-gradient-to-r from-blue-600 to-sky-400" />

        {subtitle && (
          <p className="text-base md:text-lg text-slate-700 max-w-3xl mx-auto">
            {subtitle}
          </p>
        )}

        <ul role="list" className="mt-10 max-w-3xl mx-auto space-y-4 text-left">
          {faqs.map(({ id: itemId, q, a, Icon }) => {
            const isOpen = openId === itemId;
            return (
              <li
                key={itemId}
                id={`${id}-${itemId}`}
                className={`rounded-2xl border overflow-hidden transition shadow-sm ${
                  isOpen ? "border-blue-200 ring-1 ring-blue-100 bg-white" : "border-slate-200 bg-white"
                }`}
              >
                <button
                  id={`faq-header-${itemId}`}
                  aria-controls={`faq-panel-${itemId}`}
                  aria-expanded={isOpen}
                  onClick={() => handleToggle(itemId, isOpen)}
                  className="w-full flex justify-between items-start px-6 py-4 text-left text-base md:text-lg font-medium text-slate-800 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                >
                  <span className="flex items-start gap-3 pr-3">
                    {Icon ? (
                      <Icon className={`w-5 h-5 mt-0.5 ${isOpen ? "text-blue-600" : "text-slate-400"}`} />
                    ) : null}
                    <span>{q}</span>
                  </span>

                  <ChevronDown
                    className={`w-5 h-5 mt-0.5 motion-safe:transition-transform ${
                      isOpen ? "rotate-180 text-blue-600" : "text-slate-400"
                    }`}
                  />
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
            Didn’t see your question? Book an Intro Call →
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
