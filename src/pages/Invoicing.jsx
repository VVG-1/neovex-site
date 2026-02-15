import React from "react";
import ProductTemplate from "../components/ProductTemplate";
import {
  ClipboardList,
  FileText,
  DollarSign,
  Mail,
  MessageCircle,
  Bell,
  Link2,
  UserCheck,
  BadgeCheck,
  Shield,
} from "lucide-react";
import InvoicingFounderPlan from "../components/InvoicingFounderPlan";


export default function InvoicingPage() {
  return (
    <ProductTemplate
      sectionId="invoicing"
      title="Neovex Invoicing"
      subtitle="Get paid faster—AI turns finished jobs into invoices, sends by email/SMS, nudges until paid, and syncs to QuickBooks."
      icon={FileText}
      gradient="from-blue-600 to-sky-500"
      ctaPrimaryHref="/contact"
      ctaPrimaryText="Book an Invoicing demo"
      ctaSecondaryHref="/products"
      ctaSecondaryText="All Products"
      integrationsTheme="light"

      /* Right-side visual: job → invoice → sent → paid */
      heroFlowItems={[
        { icon: <ClipboardList className="w-6 h-6" />, grad: "from-blue-600 to-sky-500",       title: "Job captured",    desc: "From Intake/Voice/CRM" },
        { icon: <FileText      className="w-6 h-6" />,  grad: "from-emerald-600 to-teal-500",   title: "Invoice built",   desc: "Line items, tax, discounts" },
        { icon: <Mail          className="w-6 h-6" />,  grad: "from-violet-600 to-fuchsia-500", title: "Sent & reminded", desc: "Email/SMS with pay link" },
        { icon: <BadgeCheck    className="w-6 h-6" />,  grad: "from-amber-600 to-orange-500",   title: "Paid & synced",   desc: "Posted to QuickBooks" },
      ]}

      problem={{
        heading: "Chasing invoices delays cash",
        copy: "Manual invoicing, slow follow-up, and missed reminders leave revenue on the table.",
        pains: [
          { icon: FileText,       title: "Late or forgotten invoices", desc: "Jobs sit unbilled for days." },
          { icon: ClipboardList,  title: "Manual entry errors",       desc: "Wrong totals, missing line items." },
          { icon: MessageCircle,  title: "Slow follow-up",            desc: "Payments drift without nudges." },
          {                       title: "Systems out of sync",       desc: "CRM and QuickBooks don’t match." },
        ],
      }}

      solution={{
        heading: "AI that invoices, follows up, and reconciles",
        copy:
          "Neovex builds itemized invoices from your job data, sends them automatically with 1-click pay links, follows up with smart reminders, and posts payments back to your books.",
        points: [
          { icon: FileText,    text: "Auto line items from services, rates, taxes, and rules" },
          { icon: DollarSign,  text: "1-click pay via email/SMS; deposits & partials supported" },
          { icon: Shield,      text: "QuickBooks sync for invoices, customers, and payments" },
        ],
      }}

      steps={[
        { title: "Connect your tools",  desc: "QuickBooks + email/SMS; import products and tax rules.", icon: Link2 },
        { title: "Set your policies",   desc: "Templates, taxes, deposits, and reminder cadence.",      icon: ClipboardList },
        { title: "Go live",             desc: "AI creates, sends, reminds, and reconciles automatically.", icon: UserCheck },
      ]}

      featuresIntro="Shorten your cash cycle—AI builds accurate invoices, gets them paid, and keeps your books in lockstep."

features={[
  { title: "Auto itemization",          desc: "Services, hours, materials, taxes, and discounts—by your rules.",          icon: FileText },
  { title: "1-click pay links",         desc: "Email/SMS checkout with deposits and partial payments supported.",         icon: DollarSign },
  { title: "Smart reminders & dunning", desc: "Staged nudges, friendly escalations, and optional late fees.",            icon: Bell },
  { title: "Invoice from anywhere",     desc: "Trigger from Intake, Voice, CRM, or job completion events.",               icon: ClipboardList },
  { title: "Secure pay page",           desc: "Each invoice has a unique link to view & pay—no login or portal required.",icon: Link2 },
  { title: "QuickBooks sync",           desc: "Customers, invoices, and payments stay fully reconciled.",                 icon: Shield },
]}

      founderQuote={{
        text:
          "Billing shouldn’t be a second job. Neovex creates the invoice the moment work is done, gets it paid, and keeps your books clean.",
        variant: "white",
        founderName: "James D.",
      }}

      integrations={[
        "QuickBooks",
        "Stripe",
        "Gmail",
        "Outlook",
        "HubSpot",
        "Slack",
        "Zapier",
      ]}

      afterSolution={
        <InvoicingFounderPlan
          founderPrice={99}    // simple single-price founder offer
          normalPrice={199}
          months={3}
          ctaHref="/contact"
        />
      }

      faqs={[
        { id: "processors", q: "Which payment processors work?", a: "Use your existing processor (e.g., Stripe or QuickBooks Payments). We attach a secure pay link to each invoice." },
        { id: "deposits",   q: "Can we take deposits or partial payments?", a: "Yes. Request a deposit up front, take partials, and auto-reconcile the balance when paid." },
        { id: "tax-rules",  q: "How are taxes, fees, and discounts handled?", a: "We apply your configured tax rates, fees, and discount rules automatically to each invoice." },
        { id: "reminders",  q: "How do reminders work?", a: "Set your cadence (e.g., 3/7/14 days). We send friendly nudges and optional late-fee notices until paid." },
        { id: "quickbooks", q: "What syncs with QuickBooks?", a: "Customers, invoices, and payments. We de-dupe to avoid duplicates and keep balances accurate." },
        { id: "branding",   q: "Can invoices match our brand?", a: "Yes—logo, colors, terms, and templates are configurable. Attach photos or PDFs when needed." },
        { id: "setup",      q: "How fast can we go live?", a: "Usually under a week: connect QuickBooks and email/SMS, import items and taxes, approve templates." },
        { id: "security",   q: "Is it secure? Who owns the data?", a: "Encrypted in transit and at rest; you own your data. We follow least-privilege access best practices." },
      ]}
    />
  );
}
