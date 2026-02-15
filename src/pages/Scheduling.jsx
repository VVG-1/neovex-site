// src/pages/Scheduler.jsx
import React from "react";
import ProductTemplate from "../components/ProductTemplate";
import {
  CalendarDays,
  ClipboardList,
  BadgeCheck,
  MessageCircle,
  Bell,
  Link2,
  UserCheck,
  DollarSign,
  Mail,
} from "lucide-react";
import SchedulingFounderPlan from "../components/SchedulingFounderPlan"; // single-price founder plan

export default function SchedulingPage() {
  return (
    <ProductTemplate
      sectionId="scheduling"
      title="Neovex Scheduler"
      subtitle="AI books jobs for you—captures details, checks eligibility, and drops confirmed appointments on your calendar 24/7."
      icon={CalendarDays}
      gradient="from-blue-600 to-sky-500"
      ctaPrimaryHref="/contact"
      ctaPrimaryText="Book a Scheduler demo"
      ctaSecondaryHref="/products"
      ctaSecondaryText="View All Products"
      integrationsTheme="light"

      /* Right-side visual: AI booking flow (not just a calendar) */
      heroFlowItems={[
        { icon: <ClipboardList className="w-6 h-6" />, grad: "from-blue-600 to-sky-500",       title: "Request captured",  desc: "Web, email, or SMS" },
        { icon: <BadgeCheck   className="w-6 h-6" />,  grad: "from-emerald-600 to-teal-500",   title: "Qualified",         desc: "Service area & rules" },
        { icon: <CalendarDays className="w-6 h-6" />,  grad: "from-violet-600 to-fuchsia-500", title: "Best slot picked",  desc: "Fills gaps, right crew" },
        { icon: <Bell         className="w-6 h-6" />,  grad: "from-amber-600 to-orange-500",   title: "Confirmed",         desc: "2-way reminders & changes" },
      ]}

      problem={{
        heading: "Back-and-forth kills bookings",
        copy: "Slow replies, bad slotting, and no-shows leave paid hours empty—especially after hours.",
        pains: [
          { icon: ClipboardList, title: "Manual ping-pong",      desc: "Endless messages to lock a time." },
          { icon: CalendarDays,  title: "Inefficient schedules", desc: "Gaps, long drives, wrong crew." },
          {                      title: "No-shows & late cancels", desc: "Revenue you don’t get back." },
          { icon: MessageCircle, title: "Admin drain",           desc: "Your team babysits the calendar." },
        ],
      }}

      solution={{
        heading: "AI that auto-books the right job at the right time",
        copy:
          "Neovex Scheduler applies your routing and availability rules to book jobs automatically—then confirms, reminds, and handles self-serve rescheduling over SMS or email.",
        points: [
          { icon: CalendarDays,  text: "Smart slotting by job length, buffers, travel time" },
          { icon: ClipboardList, text: "Eligibility & routing by territory, service line, crew skills" },
          { icon: MessageCircle, text: "2-way confirmations, reminders, and reschedules via SMS/email" },
        ],
      }}

      steps={[
        { title: "Add to your site & inbox", desc: "Drop the widget on web and connect your calendar/email.", icon: Link2 },
        { title: "Set your rules",           desc: "Service areas, job types, booking windows, and routing.", icon: ClipboardList },
        { title: "Go live",                  desc: "AI books jobs, fills gaps, and reduces no-shows.",        icon: UserCheck },
      ]}

      featuresIntro="Increase utilization and cut admin time—AI fills gaps, routes the right crew, and backfills cancellations."

      features={[
        { title: "Smart slotting & routing", desc: "Job length, buffers, travel time, crew skills, and territories.", icon: CalendarDays },
        { title: "Eligibility & intake",     desc: "Collect key details and gate by service area before booking.",    icon: ClipboardList },
        { title: "2-way SMS/email",          desc: "Confirmations, reminders, and self-serve reschedules.",           icon: MessageCircle },
        { title: "Waitlist & backfill",      desc: "Offer newly opened slots to nearby qualified leads automatically.", icon: Bell },
        { title: "Deposits (optional)",      desc: "Take a deposit or card hold to reduce no-shows.",                 icon: DollarSign },
        { title: "Calendar + CRM sync",      desc: "Google/Outlook and your CRM stay in lockstep—no manual entry.",   icon: Mail },
      ]}

      founderQuote={{
        text:
          "Schedulers should sell, not steal time. Neovex books the job, picks the right slot, routes the right crew, and keeps no-shows down.",
        variant: "white",
        founderName: "James D.",
      }}

      integrations={[
        "Google Calendar",
        "Outlook",
        "Gmail",
        "HubSpot",
        "Salesforce",
        "Slack",
        "QuickBooks",
        "Zapier",
      ]}

      afterSolution={
        <SchedulingFounderPlan
          founderPrice={99}     // single simple founder price
          months={3}
          calendarsIncluded={3} // tweak as you like
          ctaHref="/contact"
        />
      }

      faqs={[
        { id: "channels",   q: "How do customers schedule?", a: "On your website widget or by replying to scheduling email/SMS. The AI books within your rules and drops it on your calendar." },
        { id: "routing",    q: "Can it route by team, skill, or territory?", a: "Yes—configure rules by service line, geography, crew skills, and availability windows." },
        { id: "reschedule", q: "How are reschedules handled?", a: "Customers reply to SMS or email to pick a new time. We re-slot automatically and send updated confirmations." },
        { id: "no-shows",   q: "Does it reduce no-shows?", a: "Staged reminders and prep notes help. Optional deposits/card-on-file further reduce no-shows." },
        { id: "calendar",   q: "Which calendars do you support?", a: "Google Calendar and Outlook, including multi-location and team routing." },
        { id: "payments",   q: "Can we take deposits?", a: "Optional. Request a deposit or card hold before booking when your policy requires it." },
        { id: "setup",      q: "How fast can we go live?", a: "Typically under a week: rules, calendars, routing, and messaging configured for you." },
        { id: "security",   q: "Is it secure?", a: "Data is encrypted in transit and at rest. You own your data. Least-privilege access." },
      ]}
    />
  );
}
