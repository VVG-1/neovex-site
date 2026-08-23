import React from "react";
import { Bell, CheckCircle2, ClipboardList, CreditCard, Users } from "lucide-react";

const MEETINGS_URL = "https://meetings.hubspot.com/neovex";

const workflowCards = [
  {
    icon: <ClipboardList className="w-6 h-6" />,
    grad: "from-blue-600 to-sky-500",
    title: "New request received",
    desc: "Captured and routed automatically.",
  },
  {
    icon: <CheckCircle2 className="w-6 h-6" />,
    grad: "from-emerald-600 to-teal-500",
    title: "Customer approved",
    desc: "Documents and next steps triggered.",
  },
  {
    icon: <CreditCard className="w-6 h-6" />,
    grad: "from-violet-600 to-fuchsia-500",
    title: "Invoice created",
    desc: "Billing workflow begins automatically.",
  },
  {
    icon: <Bell className="w-6 h-6" />,
    grad: "from-amber-600 to-orange-500",
    title: "Team notified",
    desc: "The right person receives the next task.",
  },
];

export default function Hero() {
  return (
    <section
      id="about"
      className="relative px-6 pt-14 md:pt-16 pb-12 md:pb-16 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-10 scroll-mt-20 md:scroll-mt-24 overflow-hidden"
    >
      <div className="absolute inset-0 -z-20 bg-gradient-to-tr from-blue-50 via-white to-slate-50" />
      <div className="pointer-events-none absolute -top-24 right-0 translate-x-1/3 h-72 w-72 md:h-[22rem] md:w-[22rem] rounded-full bg-blue-200/40 blur-3xl -z-10" />

      <div className="text-left max-w-xl w-full min-w-0">
        <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 text-blue-700 px-3 py-1 text-[11px] font-semibold ring-1 ring-blue-100">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-blue-600" />
          DESIGNED &bull; BUILT &bull; MANAGED BY NEOVEX
        </div>

        <h1 className="mt-3 max-w-[13ch] sm:max-w-none text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.08] text-slate-900 [text-wrap:balance] hyphens-none">
          Automate the Work Behind Your Business.
        </h1>

        <p className="mt-4 text-base md:text-xl text-slate-600 max-w-[32ch] sm:max-w-[56ch]">
          Neovex designs, builds, and manages automated workflows across the tools your business already uses - reducing repetitive work, manual handoffs, and administrative overhead.
        </p>

        <div className="mt-5 md:mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <a
            href={MEETINGS_URL}
            aria-label="Discuss a workflow with Neovex"
            className="w-full sm:w-auto bg-blue-600 text-white px-6 py-3 text-base rounded-xl hover:bg-blue-700 transition inline-flex items-center justify-center"
          >
            Discuss a Workflow
          </a>
          <a
            href="#solutions"
            aria-label="See what Neovex automates"
            className="w-full sm:w-auto bg-white border border-slate-200 text-slate-700 px-6 py-3 text-base rounded-xl hover:bg-slate-50 transition inline-flex items-center justify-center"
          >
            See What We Automate
          </a>
        </div>
      </div>

      <div className="w-full max-w-md md:max-w-lg mt-0 min-w-0">
        <div className="md:hidden mt-6 space-y-3">
          {workflowCards.map((card) => (
            <Card key={card.title} {...card} />
          ))}
        </div>

        <div className="hidden md:block relative">
          {workflowCards.map((card, index) => (
            <Card
              key={card.title}
              {...card}
              absolute={index > 0}
              left={["", "left-6", "left-12", "left-16"][index]}
              top={["", "top-20", "top-40", "top-60"][index]}
              className={["relative z-30", "z-20", "z-10", "z-0"][index]}
              widthClass="w-[420px] max-w-full"
            />
          ))}

          <div className="absolute -left-3 top-10 bottom-10 w-px bg-gradient-to-b from-blue-200 via-slate-300 to-blue-200" />
          <div className="absolute right-2 top-4 rounded-2xl border border-slate-200 bg-white/70 px-3 py-2 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur">
            <span className="inline-flex items-center gap-2">
              <Users className="w-4 h-4 text-blue-600" />
              Work moves between systems
            </span>
          </div>
          <div className="invisible h-80" />
        </div>
      </div>
    </section>
  );
}

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
        <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${grad} text-white flex items-center justify-center ring-1 ring-white/60`}>
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
