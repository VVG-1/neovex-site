import React, { useEffect, useMemo, useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer.jsx";

const MEETINGS_URL = "https://meetings.hubspot.com/neovex";
const EMAIL = "hello@neovexai.com";
const PHONE = "(833) 312-1335";
const PHONE_TEL = "+18333121335";

const startingPoints = [
  "I know the workflow I want automated",
  "I know there is too much manual work, but I am not sure where to start",
  "I am interested in ongoing management of an existing automation",
  "Not sure",
];

function Seo({ title, description }) {
  useEffect(() => {
    const previousTitle = document.title;
    const meta = document.querySelector('meta[name="description"]');
    const previousDescription = meta?.getAttribute("content");

    document.title = title;
    if (meta) meta.setAttribute("content", description);

    return () => {
      document.title = previousTitle;
      if (meta && previousDescription) meta.setAttribute("content", previousDescription);
    };
  }, [title, description]);

  return null;
}

function Eyebrow({ children }) {
  return <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#25638f]">{children}</div>;
}

export function DiscussWorkflowPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    workflow: "",
    tools: "",
    manualWork: "",
    startingPoint: "",
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const canSubmit = useMemo(() => {
    return formData.fullName.trim() && formData.email.trim() && formData.company.trim() && formData.workflow.trim();
  }, [formData]);

  function setField(field, value) {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  }

  function validate() {
    const nextErrors = {};
    if (!formData.fullName.trim()) nextErrors.fullName = "Full name is required.";
    if (!formData.company.trim()) nextErrors.company = "Company is required.";
    if (!formData.workflow.trim()) nextErrors.workflow = "Tell us which workflow you want to improve.";
    if (!formData.email.trim()) {
      nextErrors.email = "Work email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      nextErrors.email = "Enter a valid work email.";
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  async function onSubmit(event) {
    event.preventDefault();
    if (submitting) return;
    if (!validate()) return;

    setSubmitting(true);
    try {
      sessionStorage.setItem(
        "neovexWorkflowIntake",
        JSON.stringify({ ...formData, submittedAt: new Date().toISOString() })
      );
      await new Promise((resolve) => setTimeout(resolve, 350));
      navigate("/discuss-a-workflow/thank-you");
    } catch {
      setErrors({ form: "Something went wrong. Please try again or email hello@neovexai.com." });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="bg-white text-slate-900">
      <Seo title="Discuss a Workflow | Neovex" description="Tell Neovex about a workflow that is taking too much manual work. Share the process, systems involved, and where automation may help." />
      <section className="px-6 pt-24 md:pt-28 pb-16 bg-white">
        <div className="max-w-7xl mx-auto grid gap-10 lg:grid-cols-[0.42fr_0.58fr] lg:items-start lg:gap-16">
          <div className="max-w-xl">
            <Eyebrow>Discuss a Workflow</Eyebrow>
            <h1 className="mt-4 text-4xl md:text-6xl md:leading-[1.08] font-bold tracking-tight text-slate-900">
              Tell Us What Is Taking Too Much Manual Work.
            </h1>
            <p className="mt-6 text-lg md:text-xl leading-8 text-slate-700">
              Share a little about the process you want to improve. We'll review the workflow, the systems involved, and where automation may help.
            </p>
            <p className="mt-5 text-base leading-7 text-slate-600">
              You do not need a finished automation plan. A rough description of the process is enough.
            </p>

            <div className="mt-8 border-t border-slate-200 pt-6">
              <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#25638f]">Contact</div>
              <div className="mt-3 space-y-2 text-sm text-slate-700">
                <a href={`mailto:${EMAIL}`} className="block font-medium hover:text-[#172235]">{EMAIL}</a>
                <a href={`tel:${PHONE_TEL}`} className="block font-medium hover:text-[#172235]">{PHONE}</a>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-6 md:p-8">
            <form noValidate onSubmit={onSubmit} className="space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                <Field label="Full Name" id="fullName" value={formData.fullName} error={errors.fullName} required onChange={(value) => setField("fullName", value)} />
                <Field label="Work Email" id="email" type="email" value={formData.email} error={errors.email} required onChange={(value) => setField("email", value)} />
              </div>

              <Field label="Company" id="company" value={formData.company} error={errors.company} required onChange={(value) => setField("company", value)} />

              <TextArea
                label="What workflow are you trying to improve?"
                id="workflow"
                value={formData.workflow}
                error={errors.workflow}
                required
                rows={5}
                placeholder="Tell us what happens today and where the process feels manual, slow, or repetitive."
                onChange={(value) => setField("workflow", value)}
              />

              <Field
                label="What tools or systems are involved?"
                id="tools"
                value={formData.tools}
                placeholder="For example: QuickBooks, HubSpot, Gmail, Google Sheets, forms, scheduling tools, CRM, etc."
                onChange={(value) => setField("tools", value)}
              />

              <TextArea
                label="What is happening manually today?"
                id="manualWork"
                value={formData.manualWork}
                rows={3}
                placeholder="For example: data entry, follow-up, routing, approvals, quoting, invoicing, handoffs, reporting, or scheduling."
                onChange={(value) => setField("manualWork", value)}
              />

              <div>
                <label htmlFor="startingPoint" className="block text-sm font-semibold text-[#172235]">
                  What best describes where you are?
                </label>
                <select
                  id="startingPoint"
                  value={formData.startingPoint}
                  onChange={(event) => setField("startingPoint", event.target.value)}
                  className="mt-2 h-12 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm text-slate-900 outline-none focus:border-[#25638f] focus:ring-2 focus:ring-[#25638f]/20"
                >
                  <option value="">Select one</option>
                  {startingPoints.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>

              {errors.form ? <p className="text-sm font-medium text-red-700">{errors.form}</p> : null}

              <button
                type="submit"
                disabled={submitting || !canSubmit}
                className="inline-flex w-full items-center justify-center rounded-lg bg-[#172235] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1B2638] disabled:cursor-not-allowed disabled:bg-slate-400 sm:w-auto"
              >
                {submitting ? "Sending..." : "Send Workflow Details"}
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </button>
            </form>

            <div className="mt-8 border-t border-slate-200 pt-6">
              <Eyebrow>What Happens Next</Eyebrow>
              <ol className="mt-4 grid gap-3 text-sm leading-6 text-slate-700">
                {["We review the workflow", "We follow up with any questions", "If there is a good fit, we schedule a conversation"].map((step, index) => (
                  <li key={step} className="flex gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#25638f]/30 text-[10px] font-semibold text-[#25638f]">
                      {index + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export function DiscussWorkflowThanksPage() {
  return (
    <div className="bg-white text-slate-900">
      <Seo title="Thanks | Neovex" description="Thanks for sharing your workflow details with Neovex." />
      <section className="px-6 pt-24 md:pt-28 pb-16 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-[#25638f]/20 bg-[#F3F5F7] text-[#25638f]">
            <CheckCircle2 className="h-6 w-6" aria-hidden="true" />
          </div>
          <Eyebrow>Workflow Received</Eyebrow>
          <h1 className="mt-4 text-4xl md:text-6xl md:leading-[1.08] font-bold tracking-tight text-slate-900">
            Thanks - We'll Review Your Workflow.
          </h1>
          <p className="mt-6 text-lg md:text-xl leading-8 text-slate-700">
            We've received the details. We'll review the process and follow up with any questions or next steps.
          </p>

          <div className="mt-8 rounded-lg border border-slate-200 bg-[#F3F5F7] p-6">
            <h2 className="text-xl font-semibold text-[#172235]">Ready to talk now?</h2>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Ready to talk now? You can also choose a time that works for you.
            </p>
            <a
              href={MEETINGS_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center justify-center rounded-lg bg-[#172235] px-5 py-3 text-sm font-semibold text-white hover:bg-[#1B2638]"
            >
              Schedule a Conversation
            </a>
          </div>

          <Link to="/" className="mt-7 inline-flex text-sm font-semibold text-[#25638f] hover:text-[#172235]">
            Return home -&gt;
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}

function Field({ id, label, value, onChange, type = "text", placeholder = "", error, required = false }) {
  const errorId = `${id}-error`;
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-[#172235]">
        {label}{required ? <span className="text-[#25638f]"> *</span> : null}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        placeholder={placeholder}
        required={required}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        onChange={(event) => onChange(event.target.value)}
        className="mt-2 h-12 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-[#25638f] focus:ring-2 focus:ring-[#25638f]/20"
      />
      {error ? <p id={errorId} className="mt-2 text-sm text-red-700">{error}</p> : null}
    </div>
  );
}

function TextArea({ id, label, value, onChange, placeholder = "", error, required = false, rows = 4 }) {
  const errorId = `${id}-error`;
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-[#172235]">
        {label}{required ? <span className="text-[#25638f]"> *</span> : null}
      </label>
      <textarea
        id={id}
        name={id}
        value={value}
        rows={rows}
        placeholder={placeholder}
        required={required}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        onChange={(event) => onChange(event.target.value)}
        className="mt-2 w-full resize-y rounded-lg border border-slate-300 bg-white px-3 py-3 text-sm leading-6 text-slate-900 outline-none placeholder:text-slate-400 focus:border-[#25638f] focus:ring-2 focus:ring-[#25638f]/20"
      />
      {error ? <p id={errorId} className="mt-2 text-sm text-red-700">{error}</p> : null}
    </div>
  );
}
