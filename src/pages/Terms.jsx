// src/pages/Terms.jsx
import React from "react";
import SectionHeader from "../components/SectionHeader";
import Footer from "../components/Footer";

export default function TermsPage() {
  return (
    <div className="bg-white text-slate-900">
      {/* Hero */}
      <section className="px-6 pt-20 md:pt-24 pb-10 border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 text-blue-700 px-3 py-1 text-[11px] font-semibold ring-1 ring-blue-100">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-blue-600" />
            Terms of Service
          </div>
          <h1 className="mt-3 text-4xl md:text-5xl font-extrabold tracking-tight">
            The rules of using Neovex
          </h1>
          <p className="mt-4 text-lg md:text-xl text-slate-700 max-w-3xl">
            Thanks for choosing Neovex. These terms explain your rights and responsibilities when
            using our products and services.
          </p>
          <p className="mt-3 text-sm text-slate-500">
            Last updated: {new Date().toLocaleDateString()} • This is general information and not legal advice.
          </p>
        </div>
      </section>

      {/* Table of contents */}
      <section className="px-6 py-10 border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          <nav aria-label="Table of contents">
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2 text-sm">
              {[
                { id: "agreement", label: "1. Agreement & scope" },
                { id: "eligibility", label: "2. Accounts & eligibility" },
                { id: "use", label: "3. Acceptable use" },
                { id: "customer-data", label: "4. Customer data & privacy" },
                { id: "integrations", label: "5. Integrations & third parties" },
                { id: "ai", label: "6. AI features & content" },
                { id: "fees", label: "7. Fees, billing & taxes" },
                { id: "trials", label: "8. Trials, discounts & changes" },
                { id: "term", label: "9. Term, suspension & termination" },
                { id: "confidentiality", label: "10. Confidentiality" },
                { id: "security", label: "11. Security" },
                { id: "ip", label: "12. IP ownership" },
                { id: "feedback", label: "13. Feedback" },
                { id: "warranty", label: "14. Warranties & disclaimers" },
                { id: "liability", label: "15. Limitation of liability" },
                { id: "indemnity", label: "16. Indemnification" },
                { id: "changes", label: "17. Changes to services or terms" },
                { id: "law", label: "18. Governing law & venue" },
                { id: "contact", label: "19. Contact" },
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

      {/* 1. Agreement */}
      <section id="agreement" className="px-6 py-12 border-b border-slate-100 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <SectionHeader eyebrow="1" title="Agreement & scope" variant="secondary" align="left" />
          <p className="text-slate-700">
            These Terms of Service (“Terms”) are a binding agreement between you and Neovex regarding
            your access to and use of our websites, products, and services (“Services”). By using the
            Services, you agree to these Terms and our{" "}
            <a href="/privacy" className="text-blue-700 underline decoration-blue-300 hover:decoration-blue-600">
              Privacy Policy
            </a>.
          </p>
        </div>
      </section>

      {/* 2. Eligibility */}
      <section id="eligibility" className="px-6 py-12 border-b border-slate-100 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <SectionHeader eyebrow="2" title="Accounts & eligibility" variant="secondary" align="left" />
          <ul className="prose prose-slate max-w-none">
            <li>You must have authority to bind the organization you represent.</li>
            <li>You are responsible for the security of your accounts and credentials.</li>
            <li>Provide accurate info and keep it current.</li>
          </ul>
        </div>
      </section>

      {/* 3. Acceptable use */}
      <section id="use" className="px-6 py-12 border-b border-slate-100 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <SectionHeader eyebrow="3" title="Acceptable use" variant="secondary" align="left" />
          <ul className="prose prose-slate max-w-none">
            <li>No unlawful, harmful, or abusive activities.</li>
            <li>No interfering with the Service, reverse engineering, or bypassing safeguards.</li>
            <li>Respect anti-spam, opt-out, and quiet-hour rules for messaging features.</li>
            <li>Only use data you have a right to use; comply with applicable laws and regulations.</li>
          </ul>
        </div>
      </section>

      {/* 4. Customer data */}
      <section id="customer-data" className="px-6 py-12 border-b border-slate-100 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <SectionHeader eyebrow="4" title="Customer data & privacy" variant="secondary" align="left" />
          <p className="text-slate-700">
            “Customer Data” is content you or your org provides to the Services (e.g., CRM records,
            intake answers, bookings, invoices, transcripts where enabled). You retain ownership of
            Customer Data. We process it to deliver the Services in line with our{" "}
            <a href="/privacy" className="text-blue-700 underline decoration-blue-300 hover:decoration-blue-600">
              Privacy Policy
            </a>.
          </p>
        </div>
      </section>

      {/* 5. Integrations */}
      <section id="integrations" className="px-6 py-12 border-b border-slate-100 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <SectionHeader eyebrow="5" title="Integrations & third-party services" variant="secondary" align="left" />
          <p className="text-slate-700">
            The Services may connect to your third-party tools (e.g., CRM, calendar, email, payments).
            Your use of those tools is governed by their terms. We are not responsible for third-party
            services, but we’ll make reasonable efforts to maintain stable integrations.
          </p>
        </div>
      </section>

      {/* 6. AI */}
      <section id="ai" className="px-6 py-12 border-b border-slate-100 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <SectionHeader eyebrow="6" title="AI features & content" variant="secondary" align="left" />
          <ul className="prose prose-slate max-w-none">
            <li>AI outputs may be generated from prompts, templates, or connected data.</li>
            <li>You’re responsible for reviewing outputs before acting on them where appropriate.</li>
            <li>Do not input sensitive personal data unless your policies allow it.</li>
          </ul>
        </div>
      </section>

      {/* 7. Fees */}
      <section id="fees" className="px-6 py-12 border-b border-slate-100 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <SectionHeader eyebrow="7" title="Fees, billing & taxes" variant="secondary" align="left" />
          <ul className="prose prose-slate max-w-none">
            <li>Plans are billed in advance; usage-based fees (if any) are billed in arrears.</li>
            <li>Unless stated otherwise, fees are exclusive of taxes; you’re responsible for applicable taxes.</li>
            <li>Late payments may result in pause or suspension after notice.</li>
          </ul>
        </div>
      </section>

      {/* 8. Trials */}
      <section id="trials" className="px-6 py-12 border-b border-slate-100 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <SectionHeader eyebrow="8" title="Trials, discounts & changes" variant="secondary" align="left" />
          <p className="text-slate-700">
            Trials and promotional prices are time-limited. We may modify plan features or pricing
            prospectively; we’ll notify you in advance for material changes.
          </p>
        </div>
      </section>

      {/* 9. Termination */}
      <section id="term" className="px-6 py-12 border-b border-slate-100 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <SectionHeader eyebrow="9" title="Term, suspension & termination" variant="secondary" align="left" />
          <ul className="prose prose-slate max-w-none">
            <li>Either party may terminate for convenience at end of the current billing period (unless otherwise agreed).</li>
            <li>We may suspend or terminate for breach, unlawful use, or risk to the Service.</li>
            <li>Upon termination, we’ll follow your offboarding instructions consistent with law.</li>
          </ul>
        </div>
      </section>

      {/* 10. Confidentiality */}
      <section id="confidentiality" className="px-6 py-12 border-b border-slate-100 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <SectionHeader eyebrow="10" title="Confidentiality" variant="secondary" align="left" />
          <p className="text-slate-700">
            Each party may access confidential information of the other. Both will use it only as
            needed to perform under these Terms and protect it with reasonable safeguards.
          </p>
        </div>
      </section>

      {/* 11. Security */}
      <section id="security" className="px-6 py-12 border-b border-slate-100 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <SectionHeader eyebrow="11" title="Security" variant="secondary" align="left" />
          <p className="text-slate-700">
            We implement industry-standard measures (encryption in transit/at rest, least-privilege,
            audit). No method is perfectly secure; we continuously improve our controls.
          </p>
        </div>
      </section>

      {/* 12. IP */}
      <section id="ip" className="px-6 py-12 border-b border-slate-100 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <SectionHeader eyebrow="12" title="Intellectual property ownership" variant="secondary" align="left" />
          <p className="text-slate-700">
            We own the Services, software, and related IP. You own your Customer Data. No rights are
            granted except as expressly stated in these Terms.
          </p>
        </div>
      </section>

      {/* 13. Feedback */}
      <section id="feedback" className="px-6 py-12 border-b border-slate-100 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <SectionHeader eyebrow="13" title="Feedback" variant="secondary" align="left" />
          <p className="text-slate-700">
            If you provide feedback or suggestions, you grant Neovex a royalty-free, perpetual
            license to use it to improve the Services with no obligation to you.
          </p>
        </div>
      </section>

      {/* 14. Warranty */}
      <section id="warranty" className="px-6 py-12 border-b border-slate-100 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="14"
            title="Warranties & disclaimers"
            variant="secondary"
            align="left"
          />
          <p className="text-slate-700">
            THE SERVICES ARE PROVIDED “AS IS.” EXCEPT AS REQUIRED BY LAW, WE DISCLAIM ALL WARRANTIES,
            EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
            NON-INFRINGEMENT.
          </p>
        </div>
      </section>

      {/* 15. Liability */}
      <section id="liability" className="px-6 py-12 border-b border-slate-100 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="15"
            title="Limitation of liability"
            variant="secondary"
            align="left"
          />
          <p className="text-slate-700">
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, NEOVEX AND ITS SUPPLIERS WILL NOT BE LIABLE FOR
            INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR FOR LOST PROFITS,
            REVENUE, OR DATA. NEOVEX’S TOTAL LIABILITY FOR ANY CLAIM IS LIMITED TO THE AMOUNTS PAID
            BY YOU FOR THE SERVICES IN THE 12 MONTHS PRECEDING THE EVENT GIVING RISE TO THE CLAIM.
          </p>
        </div>
      </section>

      {/* 16. Indemnity */}
      <section id="indemnity" className="px-6 py-12 border-b border-slate-100 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <SectionHeader eyebrow="16" title="Indemnification" variant="secondary" align="left" />
          <p className="text-slate-700">
            You agree to defend, indemnify, and hold Neovex harmless from claims arising out of your
            unlawful use of the Services or violation of these Terms.
          </p>
        </div>
      </section>

      {/* 17. Changes */}
      <section id="changes" className="px-6 py-12 border-b border-slate-100 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="17"
            title="Changes to services or terms"
            variant="secondary"
            align="left"
          />
          <p className="text-slate-700">
            We may modify the Services or these Terms. We’ll post updates with an effective date,
            and, where changes are material, provide reasonable notice.
          </p>
        </div>
      </section>

      {/* 18. Law */}
      <section id="law" className="px-6 py-12 border-b border-slate-100 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="18"
            title="Governing law & venue"
            variant="secondary"
            align="left"
          />
          <p className="text-slate-700">
            These Terms are governed by the laws of your contracting Neovex entity’s jurisdiction,
            without regard to conflicts of law. Venue lies in the courts of that jurisdiction.
          </p>
        </div>
      </section>

      {/* 19. Contact */}
      <section id="contact" className="px-6 py-16 border-b border-slate-100 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <SectionHeader eyebrow="19" title="Contact us" variant="secondary" align="left" />
          <p className="text-slate-700">
            Questions about these Terms? Email{" "}
            <a
              href="mailto:hello@neovex.ai"
              className="text-blue-700 underline decoration-blue-300 hover:decoration-blue-600"
            >
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
