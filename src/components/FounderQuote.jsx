import React from "react";

export default function FounderQuote({
  quote = "Neovex is a managed automation team for your revenue intake—capturing calls and web leads, qualifying them, and routing the next step inside the tools you already use.",
  founderName = "James D.",
  founderTitle = "Founder",
  brand = "Neovex AI",
  headshotUrl = "",
  logoUrl = "",
  variant = "white",          // "white" | "blue" | "footer"
  glows,                      // optional override
  accent,                     // optional override (top blue strip)
  className = "",
}) {
  const initials = founderName
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  const isFooter = variant === "footer";
const isBlue = variant === "blue";
  const isWhite = variant === "white"; 

  // backgrounds
  const sectionBg = isFooter
    ? "bg-slate-950"
    : isBlue
    ? "bg-blue-50 border-y border-blue-100"
    : "bg-white";

  const cardBorder = isFooter ? "border-slate-800" : isBlue ? "border-blue-100" : "border-slate-200";
  const cardBg     = isFooter ? "bg-slate-900/70" : isBlue ? "bg-white/90" : "bg-white";
  const quoteColor = isFooter ? "text-slate-100" : "text-slate-900";
  const capColor   = isFooter ? "text-slate-400" : "text-slate-600";
  const ringColor  = isFooter ? "ring-slate-950" : "ring-white";

  // Defaults:
  // - blue/footer: glows + accent ON
  // - white: glows + accent OFF (unless explicitly enabled)
  const showGlowsDefault  = isBlue || isFooter;
  const showAccentDefault = isBlue || isFooter;

  const finalShowGlows  = typeof glows === "boolean"  ? glows  : showGlowsDefault;
  const finalShowAccent = typeof accent === "boolean" ? accent : showAccentDefault;

  // Force white to be clean unless explicitly enabled
  const showGlows  = isWhite ? !!glows  : finalShowGlows;
  const showAccent = isWhite ? !!accent : finalShowAccent;

  return (
    <section className={["relative overflow-hidden py-16 px-6", className, sectionBg].join(" ")}>
      {/* soft glows */}
      {showGlows && (
        <>
          <div
            className={[
              "pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full blur-3xl",
              isFooter ? "bg-blue-600/20" : "bg-blue-200/40",
            ].join(" ")}
            aria-hidden="true"
          />
          <div
            className={[
              "pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 rounded-full blur-3xl",
              isFooter ? "bg-sky-500/20" : "bg-sky-200/40",
            ].join(" ")}
            aria-hidden="true"
          />
        </>
      )}

      <div className="max-w-4xl mx-auto">
        <figure className={["relative rounded-2xl p-6 md:p-8 shadow-sm border", cardBorder, cardBg].join(" ")}>
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
            {/* Avatar / Logo / Headshot */}
            <div className="shrink-0">
              {headshotUrl ? (
                <img
                  src={headshotUrl}
                  alt={`${founderName} headshot`}
                  className={`h-20 w-20 md:h-24 md:w-24 rounded-full object-cover ${ringColor} ring-2 shadow`}
                  loading="lazy"
                />
              ) : logoUrl ? (
                <div className={`h-20 w-20 md:h-24 md:w-24 rounded-full bg-white grid place-items-center ${ringColor} ring-2 shadow overflow-hidden`}>
                  <img src={logoUrl} alt={`${brand} logo`} className="h-12 w-12 object-contain opacity-90" loading="lazy" />
                </div>
              ) : (
                <div className={`h-20 w-20 md:h-24 md:w-24 rounded-full bg-gradient-to-br from-blue-600 to-sky-500 text-white grid place-items-center ${ringColor} ring-2 shadow text-xl md:text-2xl font-semibold`}>
                  {initials}
                </div>
              )}
            </div>

            {/* Quote */}
            <blockquote className="text-center md:text-left">
              <p className={`text-lg md:text-xl font-medium leading-snug ${quoteColor}`}>“{quote}”</p>
            </blockquote>
          </div>

          <figcaption className={`mt-3 md:mt-4 text-sm ${capColor} text-center md:text-left md:ml-[calc(5rem+2rem)]`}>
            <span className={isFooter ? "font-semibold text-white" : "font-semibold text-slate-900"}>{founderName}</span>{" "}
            • {founderTitle}, {brand}
          </figcaption>

          {/* top accent strip */}
          {showAccent && (
            <div className="pointer-events-none absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r from-blue-500 to-sky-400" />
          )}
        </figure>
      </div>
    </section>
  );
}
