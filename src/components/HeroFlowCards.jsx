// src/components/HeroFlowCards.jsx
import React from "react";

export function HeroFlowCards({ items = [], className = "" }) {
  // Default positions for stacked cards (2nd, 3rd, 4th...)
  const stackDefaults = [
    { left: "left-6",  top: "top-20", z: "z-20" },
    { left: "left-12", top: "top-40", z: "z-10" },
    { left: "left-16", top: "top-60", z: "z-0"  },
  ];

  return (
    <div className={`w-full max-w-md md:max-w-lg ${className}`} aria-hidden="true">
      <div className="relative">
        {/* Top card (non-absolute) */}
        {items.slice(0, 1).map((c, i) => (
          <Card
            key={`top-${i}`}
            className="relative z-30"
            icon={c.icon}
            grad={c.grad}
            title={c.title}
            desc={c.desc}
          />
        ))}

        {/* Absolute stack on md+ only */}
        <div className="hidden md:block">
          {items.slice(1).map((c, i) => {
            const pos = stackDefaults[i] || stackDefaults[stackDefaults.length - 1];
            // Allow per-item overrides via c.left / c.top / c.z
            const left = c.left || pos.left;
            const top  = c.top  || pos.top;
            const z    = c.z    || pos.z;

            return (
              <Card
                key={`stack-${i}`}
                absolute
                left={left}
                top={top}
                className={z}
                icon={c.icon}
                grad={c.grad}
                title={c.title}
                desc={c.desc}
              />
            );
          })}
          {/* Reserve height so the absolute cards don't collapse container */}
          <div className="invisible h-80" />
        </div>
      </div>
    </div>
  );
}

/* ---------- Card (matches your structure) ---------- */
function Card({
  absolute = false,
  left = "",
  top = "",
  className = "",
  icon,
  grad,
  title,
  desc,
}) {
  return (
    <div
      className={[
        absolute ? `absolute ${left} right-0 ${top}` : "",
        // keep widths calm: full on mobile, fixed on desktop for tidy stack
        "w-full md:w-[26rem]",
        "bg-white/85 backdrop-blur-sm ring-1 ring-slate-200/60 rounded-2xl shadow-lg p-4 md:p-5 transition motion-reduce:transform-none",
        className,
      ].join(" ")}
    >
      <div className="flex items-center gap-3">
        <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${grad} text-white flex items-center justify-center ring-1 ring-white/60 shadow-sm`}>
          {icon}
        </div>
        <div>
          <div className="text-sm font-semibold text-slate-900">{title}</div>
          <div className="text-xs text-slate-600">{desc}</div>
        </div>
      </div>
    </div>
  );
}
