// src/pages/Social.jsx
import React from "react";
import ProductTemplate from "../components/ProductTemplate";
import {
  Megaphone,
  Sparkles,
  CalendarDays,
  MessageCircle,
  ThumbsUp,
  BarChart3,
  Mail,
  Link2,
  ClipboardList,
  BadgeCheck,
} from "lucide-react";
import SocialFounderPlan from "../components/SocialFounderPlan";

export default function SocialPage() {
  return (
    <ProductTemplate
      sectionId="social"
      title="Neovex Social"
      subtitle="Automated, on-brand posts that turn followers into booked jobs—AI drafts, you 1-click approve, we publish & engage."
      icon={Megaphone}
      gradient="from-blue-600 to-sky-500"
      ctaPrimaryHref="/contact"
      ctaPrimaryText="Book a Social demo"
      ctaSecondaryHref="/products"
      ctaSecondaryText="All Products"
      integrationsTheme="light"

      heroFlowItems={[
        { icon: <Sparkles className="w-6 h-6" />,     grad: "from-blue-600 to-sky-500",       title: "Post drafted",  desc: "On-brand options in seconds" },
        { icon: <BadgeCheck className="w-6 h-6" />,   grad: "from-emerald-600 to-teal-500",   title: "Approved",      desc: "1-click via email/SMS (no login)" },
        { icon: <CalendarDays className="w-6 h-6" />, grad: "from-violet-600 to-fuchsia-500", title: "Published",     desc: "Scheduled & cross-posted" },
        { icon: <ThumbsUp className="w-6 h-6" />,     grad: "from-amber-600 to-orange-500",   title: "Reviews & DMs", desc: "Requests sent, replies drafted" },
      ]}

      problem={{
        heading: "Inconsistent posting = missed revenue",
        copy: "Busy teams fall off cadence, approvals lag, and DMs go unanswered—so prospects forget you.",
        pains: [
          { icon: Megaphone,     title: "No steady cadence",     desc: "Weeks go by without posting." },
          { icon: ClipboardList, title: "Slow approvals",        desc: "Too many steps; work stalls." },
          { icon: MessageCircle, title: "Missed replies/DMs",    desc: "Leads cool off while waiting." },
          {                       title: "Weak social proof",     desc: "Too few fresh reviews showing up." },
        ],
      }}

      solution={{
        heading: "AI posts, you approve, we publish & engage",
        copy:
          "Neovex Social drafts on-brand content, sends 1-click approval links, schedules across channels, nudges reviews, and helps you reply—then logs results to your tools.",
        points: [
          { icon: Sparkles,      text: "On-brand AI drafts & variations" },
          { icon: CalendarDays,  text: "Auto-schedule & cross-post everywhere" },
          { icon: MessageCircle, text: "Replies & review requests handled" },
        ],
      }}

      steps={[
        { title: "Connect channels",      desc: "Facebook, Instagram, Google Business Profile, LinkedIn, X.",       icon: Link2 },
        { title: "Set voice & guardrails", desc: "Tone, pillars, do/don’t phrases, approval routing, quiet hours.",  icon: ClipboardList },
        { title: "Go live",                desc: "We draft, you 1-click approve, it posts & reports automatically.", icon: BadgeCheck },
      ]}

      featuresIntro="Turn social into booked jobs—not just likes. AI drafts posts, you approve in one click, we publish across channels and keep you responsive."

      features={[
        { title: "AI post drafts",               desc: "On-brand captions & variations from your services, promos, and FAQs.", icon: Megaphone },
        { title: "Auto-schedule & cross-post",   desc: "Queue once; publish to Facebook, Instagram, GBP, LinkedIn, and X.",     icon: CalendarDays },
        { title: "1-click approvals (no login)", desc: "Approve via email/SMS links—fast reviews, no new portal.",              icon: Mail },
        { title: "Reply to comments & DMs",      desc: "Drafted responses for quick send from Slack/email; context synced.",     icon: MessageCircle },
        { title: "Review requests",              desc: "Send branded SMS/email links to drive Google/Facebook reviews.",         icon: ThumbsUp },
        { title: "Performance insights",         desc: "See reach, clicks, and booked results tied back to campaigns.",          icon: BarChart3 },
      ]}

      founderQuote={{
        text:
          "We built Neovex Social so staying active doesn’t steal your day—AI drafts the work, you approve with one click, and bookings rise with steady presence and reviews.",
        variant: "white",
        founderName: "James D.",
      }}

      afterSolution={
        <SocialFounderPlan
          founderPrice={199}
          months={3}
          ctaHref="/contact"
        />
      }

      integrations={[
        "Facebook",
        "Instagram",
        "Google Business Profile",
        "LinkedIn",
        "X (Twitter)",
        "Gmail",
        "Outlook",
        "Slack",
        "HubSpot",
        "Zapier",
      ]}

      faqs={[
        { id: "channels",   q: "Which channels are supported?", a: "Facebook, Instagram, Google Business Profile, LinkedIn, and X (Twitter). More by request." },
        { id: "approvals",  q: "How do approvals work without a portal?", a: "We send a secure email/SMS link. Click approve or request edits—no login needed." },
        { id: "brand",      q: "Can you match our brand voice?", a: "Yes—set tone, content pillars, and do/do-not phrases. We learn from your past posts." },
        { id: "content",    q: "Where do post ideas come from?", a: "Your services, promos, FAQs, reviews, photos, and seasonal moments. We propose a monthly plan." },
        { id: "reviews",    q: "How do review requests work?", a: "We send branded links via SMS/email to customers you choose, nudging them to leave Google/Facebook reviews." },
        { id: "replies",    q: "Who replies to comments and DMs?", a: "You can reply from Slack/email, or we draft suggested replies for 1-click send." },
        { id: "golive",     q: "How fast can we go live?", a: "Usually under a week—connect channels, set voice, approve the first batch, and we start posting." },
        { id: "security",   q: "Is it secure? Who owns the content?", a: "We use least-privilege access and encrypt data in transit/at rest. All content and results are yours." },
      ]}
    />
  );
}
