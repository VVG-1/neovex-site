// src/pages/Privacy.jsx
import React from "react";
import SectionHeader from "../components/SectionHeader";
import Footer from "../components/Footer";

export default function PrivacyPage() {
  return (
    <div className="bg-white text-slate-900">
      {/* Hero */}
      <section className="px-6 pt-20 md:pt-24 pb-10 border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 text-blue-700 px-3 py-1 text-[11px] font-semibold ring-1 ring-blue-100">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-blue-600" />
            Privacy Policy
          </div>
          <h1 className="mt-3 text-4xl md:text-5xl font-extrabold tracking-tight">
            Your data, respected.
          </h1>
          <p className="mt-4 text-lg md:text-xl text-slate-700 max-w-3xl">
            We build automation that lives inside the tools you already use. This policy explains
            what we collect, how we use it, and the choices you have.
          </p>
          <p className="mt-3 text-sm text-slate-500">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </section>

      {/* Table of contents */}
      <section className="px-6 py-10 border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          <nav aria-label="Table of contents">
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2 text-sm">
              {[
                { id: "what-we-collect", label: "1. Information we collect" },
                { id: "how-we-use", label: "2. How we use information" },
                { id: "sharing", label: "3. How we share information" },
                { id: "retention", label: "4. Data retention" },
                { id: "security", label: "5. Security" },
                { id: "choices", label: "6. Your choices & rights" },
                { id: "subprocessors", label: "7. Service providers & subprocessors" },
                { id: "cookies", label: "8. Cookies & tracking" },
                { id: "children", label: "9. Children’s privacy" },
                { id: "international", label: "10. International transfers" },
                { id: "changes", label: "11. Changes to this policy" },
                { id: "contact", label: "12. Contact us" },
              ].map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="inline-flex items-center gap-2 rounded-lg px-3 py-2 hover:bg-slate-50 text-slate-700"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>

      {/* 1. Information we collect */}
      <section id="what-we-collect" className="px-6 py-12 border-b border-slate-100 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="1"
            title="Information we collect"
            variant="secondary"
            align="left"
          />
          <div className="prose prose-slate max-w-none">
            <ul>
              <li>
                <strong>Account & contact info:</strong> name, email, phone, company, role.
              </li>
              <li>
                <strong>Business data you choose to connect:</strong> CRM records, calendars,
                quotes/invoices metadata, and relevant configuration needed to run your workflows.
              </li>
              <li>
                <strong>Operational content:</strong> intake answers, booking details, message
                metadata (timestamps, sender/recipient), call summaries or transcripts where enabled.
              </li>
              <li>
                <strong>Usage data:</strong> product interactions, device/browser info, and
                diagnostics to improve reliability and performance.
              </li>
            </ul>
            <p className="mt-4 text-sm text-slate-600">
              Where required, we’ll request consent (e.g., call recording) and respect your org’s
              policies and regional regulations.
            </p>
          </div>
        </div>
      </section>

      {/* 2. How we use information */}
      <section id="how-we-use" className="px-6 py-12 border-b border-slate-100 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <SectionHeader eyebrow="2" title="How we use information" variant="secondary" align="left" />
          <div className="prose prose-slate max-w-none">
            <ul>
              <li>To provide and manage our products (intake, scheduling, invoicing, etc.).</li>
              <li>To configure your playbooks, pricing rules, routing, and integrations.</li>
              <li>To monitor deliverability, quality, and performance.</li>
              <li>To communicate about product updates, support, and billing.</li>
              <li>To improve the product using aggregated and de-identified insights.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. Sharing */}
      <section id="sharing" className="px-6 py-12 border-b border-slate-100 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <SectionHeader eyebrow="3" title="How we share information" variant="secondary" align="left" />
          <div className="prose prose-slate max-w-none">
            <ul>
              <li>
                <strong>With your connected tools:</strong> we sync data to your CRM, calendar,
                email, accounting, or other systems you authorize.
              </li>
              <li>
                <strong>Service providers:</strong> vetted infrastructure, communications, and
                analytics vendors under contract and confidentiality.
              </li>
              <li>
                <strong>Legal, safety, and compliance:</strong> when required by law or to protect
                our users and services from abuse or fraud.
              </li>
            </ul>
            <p className="mt-4 text-sm text-slate-600">
              We don’t sell your personal information.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Retention */}
      <section id="retention" className="px-6 py-12 border-b border-slate-100 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <SectionHeader eyebrow="4" title="Data retention" variant="secondary" align="left" />
          <p className="text-slate-700">
            We retain information for as long as needed to deliver the service and meet legal,
            tax, and accounting requirements. Where feasible, you can configure retention for items
            like transcripts or logs. Upon contract termination, we follow your offboarding
            instructions and applicable laws.
          </p>
        </div>
      </section>

      {/* 5. Security */}
      <section id="security" className="px-6 py-12 border-b border-slate-100 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <SectionHeader eyebrow="5" title="Security" variant="secondary" align="left" />
          <p className="text-slate-700">
            We use industry-standard measures including encryption in transit and at rest,
            least-privilege access, and audit controls. No system is perfectly secure; we
            continuously improve our practices and review vendors for compliance.
          </p>
        </div>
      </section>

      {/* 6. Choices & rights */}
      <section id="choices" className="px-6 py-12 border-b border-slate-100 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <SectionHeader eyebrow="6" title="Your choices & rights" variant="secondary" align="left" />
          <div className="prose prose-slate max-w-none">
            <ul>
              <li>
                <strong>Access, update, delete:</strong> contact us to access or correct your info.
                We’ll help with export or deletion requests where required.
              </li>
              <li>
                <strong>Opt-outs:</strong> you can opt out of non-essential emails. Messaging to
                your customers follows opt-out and quiet-hour rules.
              </li>
              <li>
                <strong>Regional rights:</strong> we honor applicable privacy rights (e.g., GDPR/CCPA)
                and will support your compliance needs.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 7. Subprocessors */}
      <section id="subprocessors" className="px-6 py-12 border-b border-slate-100 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="7"
            title="Service providers & subprocessors"
            variant="secondary"
            align="left"
          />
          <p className="text-slate-700">
            We work with infrastructure, communications, analytics, and support vendors. We require
            appropriate security and confidentiality commitments. A current list is available on
            request; material changes will be communicated.
          </p>
        </div>
      </section>

      {/* 8. Cookies */}
      <section id="cookies" className="px-6 py-12 border-b border-slate-100 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <SectionHeader eyebrow="8" title="Cookies & tracking" variant="secondary" align="left" />
          <p className="text-slate-700">
            We use cookies and similar technologies for authentication, preferences, and performance.
            You can control cookies in your browser. Some features may not function without them.
          </p>
        </div>
      </section>

      {/* 9. Children */}
      <section id="children" className="px-6 py-12 border-b border-slate-100 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <SectionHeader eyebrow="9" title="Children’s privacy" variant="secondary" align="left" />
          <p className="text-slate-700">
            Our services are not directed to children under 13 (or the minimum age in your region),
            and we do not knowingly collect their personal information.
          </p>
        </div>
      </section>

      {/* 10. International */}
      <section id="international" className="px-6 py-12 border-b border-slate-100 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="10"
            title="International transfers"
            variant="secondary"
            align="left"
          />
          <p className="text-slate-700">
            If data is processed outside your country, we rely on appropriate safeguards (e.g.,
            contractual clauses) consistent with applicable law.
          </p>
        </div>
      </section>

      {/* 11. Changes */}
      <section id="changes" className="px-6 py-12 border-b border-slate-100 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <SectionHeader eyebrow="11" title="Changes to this policy" variant="secondary" align="left" />
          <p className="text-slate-700">
            We may update this policy to reflect product, legal, or operational changes. We’ll post
            the revised date and, when appropriate, notify you.
          </p>
        </div>
      </section>

      {/* 12. Contact */}
      <section id="contact" className="px-6 py-16 border-b border-slate-100 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <SectionHeader eyebrow="12" title="Contact us" variant="secondary" align="left" />
          <p className="text-slate-700">
            Questions or requests? Email{" "}
            <a href="mailto:hello@neovexai.com" className="text-blue-700 underline decoration-blue-300 hover:decoration-blue-600">
              hello@neovexai.com
            </a>
            .
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
