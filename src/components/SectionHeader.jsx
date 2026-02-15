import React from "react";

/**
 * SectionHeader
 * Consistent, reusable headers across sections.
 *
 * Props:
 * - eyebrow?: string
 * - title: string
 * - subtitle?: string | ReactNode
 * - align?: "center" | "left" (default "center")
 * - variant?: "hero" | "primary" | "secondary" (default "primary")
 * - as?: "h1" | "h2" | "h3" (default "h2")
 * - dividerClass?: string (override the default divider color/gradient)
 */
export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
  variant = "primary",
  as: HeadingTag = "h2",
  dividerClass,
}) {
  const alignCls = align === "left" ? "text-left" : "text-center";

  const titleCls = {
    hero: "text-4xl md:text-5xl",
    primary: "text-3xl md:text-4xl",
    secondary: "text-2xl md:text-3xl",
  }[variant];

  const subCls = {
    hero: "text-lg md:text-xl",
    primary: "text-lg md:text-xl",
    secondary: "text-base md:text-lg",
  }[variant];

  const defaultDivider =
    variant === "secondary" ? "bg-blue-600/60" : "bg-blue-600/60";

  return (
    <div className={alignCls}>
      {eyebrow && (
        <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 text-blue-700 px-3 py-1 text-xs font-semibold ring-1 ring-blue-100">
          <span
            className="inline-block h-1.5 w-1.5 rounded-full bg-blue-600"
            aria-hidden="true"
          />
          {eyebrow}
        </div>
      )}

      {title && (
        <HeadingTag
          className={`mt-3 font-extrabold tracking-tight text-slate-900 ${titleCls}`}
        >
          {title}
        </HeadingTag>
      )}

      <div
        className={`mx-auto mt-3 mb-8 h-1 w-20 rounded-full ${
          dividerClass ?? defaultDivider
        }`}
      />

      {subtitle ? (
        <p className={`${subCls} text-slate-700 max-w-3xl mx-auto`}>{subtitle}</p>
      ) : null}
    </div>
  );
}
