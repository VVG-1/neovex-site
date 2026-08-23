import React from "react";

export default function ProductTile({
  title,
  desc,
  icon,
  href = "#",
}) {
  return (
    <a
      href={href}
      aria-label={title}
      className={[
        "group relative block h-full rounded-xl border border-slate-200 bg-white p-5 md:p-6",
        "text-left transition-colors hover:border-blue-200 hover:bg-slate-50/40",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-white",
      ].join(" ")}
    >
      <div className="flex h-full flex-col">
        <div className="mb-5 flex h-9 w-9 items-center justify-center rounded-lg border border-blue-100 bg-blue-50 text-blue-700">
          {icon}
        </div>

        <h3 className="text-lg md:text-xl font-semibold tracking-tight text-slate-900">
          {title}
        </h3>

        <p className="mt-3 text-sm md:text-base leading-7 text-slate-600">
          {desc}
        </p>
      </div>
    </a>
  );
}
