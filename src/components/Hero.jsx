import React from "react";
import { PhoneCall, ClipboardList, CalendarDays, DollarSign } from "lucide-react";

export default function Hero() {
  return (
<section
  id="about"
  className="relative px-6 pt-14 md:pt-16 pb-12 md:pb-16
    max-w-7xl mx-auto
    flex flex-col md:flex-row
    items-center justify-between
    gap-8 md:gap-10
    scroll-mt-20 md:scroll-mt-24
    overflow-hidden
  "
>
      {/* subtle background */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-tr from-blue-50 via-white to-slate-50" />
      <div className="pointer-events-none absolute -top-24 right-0 translate-x-1/3 h-72 w-72 md:h-[22rem] md:w-[22rem] rounded-full bg-blue-200/40 blur-3xl -z-10" />

      {/* Copy */}
      <div className="text-left max-w-xl">
        {/* badge */}
        <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 text-blue-700 px-3 py-1 text-[11px] font-semibold ring-1 ring-blue-100">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-blue-600" />
          Fully managed • Live in a day • No software to learn
        </div>

        {/* H1 */}
        <h1 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.05] text-slate-900 [text-wrap:balance] hyphens-none">
          We Install & Manage AI Systems for{" "}
          <span className="whitespace-normal sm:whitespace-nowrap">
            Service Businesses
          </span>
        </h1>

        {/* subhead */}
        <p className="mt-4 text-lg md:text-xl text-slate-600 max-w-[56ch]">
Neovex installs and runs automation that captures, qualifies, and routes every inbound lead — so more calls turn into booked jobs.        </p>

        {/* CTAs */}
        <div className="mt-5 md:mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <a
            href="https://meetings.hubspot.com/neovex"
            aria-label="Book an Intro Call with Neovex AI"
            className="w-full sm:w-auto bg-blue-600 text-white px-6 py-3 text-base rounded-xl hover:bg-blue-700 transition inline-flex items-center justify-center"
          >
            Book an Intro Call
          </a>
          <a
            href="#solutions"
            aria-label="Explore Neovex AI products"
            className="w-full sm:w-auto bg-white border border-slate-200 text-slate-700 px-6 py-3 text-base rounded-xl hover:bg-slate-50 transition inline-flex items-center justify-center"
          >
            View Solutions
          </a>
        </div>
      </div>

      {/* Visual */}
      <div className="w-full max-w-md md:max-w-lg mt-0">
        {/* MOBILE: simple vertical stack */}
        <div className="md:hidden mt-6 space-y-3">
          <Card
            icon={<PhoneCall className="w-6 h-6" />}
            grad="from-blue-600 to-sky-500"
            title="Leads captured"
            desc="No voicemail. Instant response."
          />
          <Card
            icon={<ClipboardList className="w-6 h-6" />}
            grad="from-violet-600 to-fuchsia-500"
            title="Quotes delivered instantly"
            desc="Texted or emailed in seconds."
          />
          <Card
            icon={<CalendarDays className="w-6 h-6" />}
            grad="from-emerald-600 to-teal-500"
            title="Jobs booked automatically"
            desc="Added straight to your calendar."
          />
          <Card
            icon={<DollarSign className="w-6 h-6" />}
            grad="from-amber-600 to-orange-500"
            title="Payments collected"
            desc="Reminders and follow-ups sent automatically."
          />
        </div>

        {/* DESKTOP: stacked absolute layout (FIXED WIDTH, NO STRETCH) */}
        <div className="hidden md:block relative">
          <Card
            className="relative z-30"
            widthClass="w-[420px] max-w-full"
            icon={<PhoneCall className="w-6 h-6" />}
            grad="from-blue-600 to-sky-500"
            title="Leads captured"
            desc="No voicemail. Instant response."
          />

          <Card
            absolute
            left="left-6"
            top="top-20"
            className="z-20"
            widthClass="w-[420px] max-w-full"
            icon={<ClipboardList className="w-6 h-6" />}
            grad="from-violet-600 to-fuchsia-500"
            title="Quotes delivered instantly"
            desc="Texted or emailed in seconds."
          />

          <Card
            absolute
            left="left-12"
            top="top-40"
            className="z-10"
            widthClass="w-[420px] max-w-full"
            icon={<CalendarDays className="w-6 h-6" />}
            grad="from-emerald-600 to-teal-500"
            title="Jobs booked automatically"
            desc="Added straight to your calendar."
          />

          <Card
            absolute
            left="left-16"
            top="top-60"
            className="z-0"
            widthClass="w-[420px] max-w-full"
            icon={<DollarSign className="w-6 h-6" />}
            grad="from-amber-600 to-orange-500"
            title="Payments collected"
            desc="Reminders and follow-ups sent automatically."
          />

          {/* keeps container height for absolute stack */}
          <div className="invisible h-80" />
        </div>
      </div>
    </section>
  );
}

/* ---------- small components ---------- */
function Card({
  absolute = false,
  left = "",
  top = "",
  className = "",
  widthClass = "w-full",
  icon,
  grad,
  title,
  desc,
}) {
  return (
    <div
      className={[
        absolute ? `absolute ${left} ${top}` : "",
        widthClass,
        "bg-white/80 backdrop-blur-sm ring-1 ring-slate-200/60 rounded-2xl shadow-lg p-3 md:p-5 transition motion-reduce:transform-none",
        className,
      ].join(" ")}
    >
      <div className="flex items-center gap-3">
        <div
          className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${grad} text-white flex items-center justify-center ring-1 ring-white/60`}
        >
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
