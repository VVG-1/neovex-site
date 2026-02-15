// src/components/ProductTile.jsx
import React from "react";

export default function ProductTile({
  title,
  desc,
  icon,
  href = "#",
  variant = "blue",
  tone = "tint",
  managed = true, // NEW: allow turning badge on/off if needed
}) {
  const iconGradients = {
    blue: "from-blue-600 to-sky-500",
    violet: "from-violet-600 to-fuchsia-500",
    emerald: "from-emerald-600 to-teal-500",
    rose: "from-rose-600 to-pink-500",
    amber: "from-amber-600 to-orange-500",
    sky: "from-sky-600 to-blue-500",
  };

  const bgStyles = {
    blue:   { tint: "from-blue-50 to-sky-50",       solid: "from-blue-600 to-sky-500" },
    violet: { tint: "from-violet-50 to-fuchsia-50", solid: "from-violet-600 to-fuchsia-500" },
    emerald:{ tint: "from-emerald-50 to-teal-50",   solid: "from-emerald-600 to-teal-500" },
    rose:   { tint: "from-rose-50 to-pink-50",      solid: "from-rose-600 to-pink-500" },
    amber:  { tint: "from-amber-50 to-orange-50",   solid: "from-amber-600 to-orange-500" },
    sky:    { tint: "from-sky-50 to-blue-50",       solid: "from-sky-600 to-blue-500" },
  };

  const iconGradient = iconGradients[variant] || iconGradients.blue;
  const bg = (bgStyles[variant] || bgStyles.blue)[tone === "solid" ? "solid" : "tint"];
  const isSolid = tone === "solid";

  return (
    <a
      href={href}
      aria-label={title}
      className={[
        "group relative block h-full overflow-hidden rounded-2xl p-6 md:p-7 transition-all",
        "bg-gradient-to-br", bg,
        isSolid
          ? "text-white shadow-md ring-1 ring-white/15 hover:shadow-lg"
          : "text-slate-900 border border-gray-100 bg-clip-padding shadow-sm hover:-translate-y-0.5 hover:shadow-md",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 focus-visible:ring-offset-2",
        isSolid ? "focus-visible:ring-offset-transparent" : "focus-visible:ring-offset-white",
      ].join(" ")}
    >
      <div className="flex h-full flex-col items-center text-center gap-3">

        {/* NEW: Managed badge */}
        {managed && (
          <div className="mb-1 inline-flex items-center gap-1 rounded-full bg-blue-600/10 text-blue-700 px-3 py-1 text-xs font-semibold ring-1 ring-blue-600/20">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
            Fully Managed
          </div>
        )}

        <div
          className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${iconGradient} text-white
          flex items-center justify-center ring-1 ring-white/60 shadow-sm
          transition-transform duration-200 group-hover:scale-105`}
        >
          {icon}
        </div>

        <h3 className={(isSolid ? "text-white" : "text-gray-900") + " text-base md:text-lg font-semibold"}>
          {title}
        </h3>

        <p className={(isSolid ? "text-white/90" : "text-gray-600") + " text-sm md:text-base leading-6"}>
          {desc}
        </p>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-blue-600 to-sky-500" />
    </a>
  );
}
