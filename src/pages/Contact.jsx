// src/pages/Contact.jsx
import React, { useMemo, useState, useEffect } from "react";

import {
  Send,
  Mail,
  Phone,
  CalendarDays,
  Shield,
  Clock,
  CheckCircle2,
  Briefcase,
  ExternalLink,
} from "lucide-react";
import Footer from "../components/Footer";
import "../styles/hubspot-form.css";


/**
 * ✅ HubSpot (Meeting link)
 * - Put your HubSpot meetings link here (or a Calendly link if you choose).
 * - This will open in a new tab and keeps your site fully branded.
 */
const BOOKING_URL = "https://meetings.hubspot.com/neovex"; // <-- update


/**
 * ✅ HubSpot (Embedded form) — optional
 * - You pasted the embed snippet already; put the portal + form ID here.
 * - This will embed the HubSpot form inside your page (best for tracking + mapping).
 * - If you prefer to keep the HTML form and rely on "non-HubSpot forms" collection,
 *   set USE_HUBSPOT_EMBED_FORM to false (but note SPA caveats).
 */
const USE_HUBSPOT_EMBED_FORM = true; // <-- recommended
const HUBSPOT_PORTAL_ID = "41132721";
const HUBSPOT_FORM_ID = "37a58c83-e222-45f8-999f-92a3d987ca1e";
const HUBSPOT_REGION = "na1";

// Keep these aligned to what a service-business owner actually says.
const CHALLENGE_OPTIONS = [
  "We miss calls (busy or after hours)",
  "Website inquiries sit in an inbox",
  "Slow follow-up to new leads",
  "Not enough details to quote",
  "People reach out but don’t book",
  "I’m not sure — I just want more booked jobs",
];

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  // For the plain HTML form (if you ever use it).
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    company: "",
    challenges: [],
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const canSubmit = useMemo(() => {
    return (
      formData.firstname.trim() &&
      formData.lastname.trim() &&
      formData.email.trim() &&
      formData.message.trim()
    );
  }, [formData]);

  function setField(field, value) {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }

  function toggleChallenge(label) {
    setFormData((prev) => {
      const exists = prev.challenges.includes(label);
      const next = exists
        ? prev.challenges.filter((x) => x !== label)
        : [...prev.challenges, label];
      return { ...prev, challenges: next };
    });
  }

  async function onSubmit(e) {
    e.preventDefault();
    setError("");

    if (!canSubmit) {
      setError("Please complete the required fields.");
      return;
    }

    try {
      setSubmitting(true);

      /**
       * If you use HubSpot EMBED FORM (recommended), you typically do NOT
       * need this HTML submit handler at all.
       *
       * If you choose to keep this HTML form and rely on HubSpot "non-HubSpot forms"
       * collection, you would let the browser submit normally (no preventDefault),
       * and ensure:
       *  - hubspot tracking code is installed site-wide
       *  - non-hubspot forms collection enabled in HubSpot
       *  - form is static + present on initial page load
       *
       * Since this is a React page (SPA route), you will often get better reliability
       * by using the HubSpot embed form instead.
       */

      // Fake submit success for now:
      await new Promise((r) => setTimeout(r, 450));
      setSent(true);

      // Optional: clear fields
      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        company: "",
        challenges: [],
        message: "",
      });
    } catch (err) {
      setError("Something went wrong. Please try again or email us directly.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="bg-white text-slate-900">
      {/* Hero */}
      <section className="px-6 pt-20 md:pt-24 pb-12 border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 text-blue-700 px-3 py-1 text-[11px] font-semibold ring-1 ring-blue-100">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-blue-600" />
            Contact
          </div>

          <h1 className="mt-3 text-4xl md:text-5xl font-extrabold tracking-tight">
            Let’s get you more booked jobs
          </h1>
          <p className="mt-3 text-lg md:text-xl text-slate-700 max-w-3xl">
            Tell us what’s leaking revenue (missed calls, slow follow-up, website
            inquiries sitting in an inbox). We’ll recommend the fastest fix and
            set it up for you—fully managed.
          </p>

          {/* quick proof chips */}
          <div className="mt-5 flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-slate-200">
              <Clock className="h-3.5 w-3.5 text-blue-600" />
              Same-day response (M–F)
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-slate-200">
              <Shield className="h-3.5 w-3.5 text-blue-600" />
              Works with your existing tools
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-slate-200">
              <Briefcase className="h-3.5 w-3.5 text-blue-600" />
              Fully managed setup
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-slate-200">
              <CalendarDays className="h-3.5 w-3.5 text-blue-600" />
              Live fast (typically ≤ 7 days)
            </span>
          </div>
        </div>
      </section>

      {/* Main grid */}
      <section className="px-6 py-14">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10">
          {/* Form card */}
          <div className="relative rounded-2xl border border-slate-200 bg-white p-6 md:p-8 pt-8 md:pt-9 shadow-sm">
            <span className="pointer-events-none absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r from-blue-600 to-sky-400" />

            <h2 className="text-xl font-semibold text-slate-900">Contact Us</h2>
            <p className="mt-1 text-sm text-slate-600">
              Complete the form below and we'll get back to you shortly (typically the same business day, Monday–Friday).
            </p>

            {sent ? (
              <div
                role="status"
                aria-live="polite"
                className="mt-6 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-800"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 mt-0.5" />
                  <div>
                    <p className="font-semibold">Message received!</p>
                    <p className="text-sm">
                      Thanks—our team will follow up shortly (usually same day
                      M–F).
                    </p>
                  </div>
                </div>
              </div>
            ) : USE_HUBSPOT_EMBED_FORM ? (



              <HubSpotFormEmbed
                portalId={HUBSPOT_PORTAL_ID}
                formId={HUBSPOT_FORM_ID}
                region={HUBSPOT_REGION}
onSubmitted={() => setSent(true)}
                

              />
            ) : (
              <form className="mt-6 space-y-5" onSubmit={onSubmit}>
                {/* Name */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-800 mb-1">
                      First name
                    </label>
                    <input
                      name="firstname"
                      required
                      value={formData.firstname}
                      onChange={(e) => setField("firstname", e.target.value)}
                      className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
                      placeholder="Alex"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-800 mb-1">
                      Last name
                    </label>
                    <input
                      name="lastname"
                      required
                      value={formData.lastname}
                      onChange={(e) => setField("lastname", e.target.value)}
                      className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
                      placeholder="Rivera"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-slate-800 mb-1">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setField("email", e.target.value)}
                    className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="you@company.com"
                  />
                </div>

                {/* Phone + Business */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-800 mb-1">
                      Phone number (optional)
                    </label>
                    <input
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setField("phone", e.target.value)}
                      className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
                      placeholder="(312)-898-2809"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-800 mb-1">
                      Business name
                    </label>
                    <input
                      name="company"
                      value={formData.company}
                      onChange={(e) => setField("company", e.target.value)}
                      className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
                      placeholder="Your business"
                    />
                  </div>
                </div>

                {/* Biggest challenge */}
                <fieldset>
                  <legend className="block text-sm font-medium text-slate-800 mb-2">
                    What best describes your biggest challenge?
                  </legend>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {CHALLENGE_OPTIONS.map((label) => (
                      <label
                        key={label}
                        className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
                      >
                        <input
                          type="checkbox"
                          checked={formData.challenges.includes(label)}
                          onChange={() => toggleChallenge(label)}
                          className="accent-blue-600"
                        />
                        {label}
                      </label>
                    ))}
                  </div>

                  <p className="mt-2 text-xs text-slate-500">
                    Pick all that apply — we’ll recommend the fastest fix.
                  </p>
                </fieldset>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-slate-800 mb-1">
                    Anything else we should know?
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setField("message", e.target.value)}
                    className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Example: ‘We miss calls after 4pm.’ ‘Website leads sit in email.’ Include your service type + city."
                  />
                </div>

                {error ? (
                  <div className="rounded-xl border border-rose-200 bg-rose-50 p-3 text-sm text-rose-800">
                    {error}
                  </div>
                ) : null}

                {/* Honeypot (basic spam check) */}
                <input
                  type="text"
                  name="company_website"
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  aria-hidden="true"
                />

                <div className="flex flex-wrap items-center gap-3">
                  <button
                    type="submit"
                    disabled={submitting}
className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 h-11 text-sm font-semibold text-white shadow-sm hover:bg-black focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    <Send className="h-4 w-4" />
                    {submitting ? "Sending..." : "Send message"}
                  </button>

                  <a
                    href="mailto:hello@neovex.ai"
                    className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 h-11 text-sm font-semibold text-slate-800 hover:bg-slate-50"
                  >
                    <Mail className="h-4 w-4" />
                    Email us instead
                  </a>
                </div>

                <p className="text-xs text-slate-500">
                  By contacting us, you agree we may email you about your
                  request. We respect opt-outs.
                </p>
              </form>
            )}
          </div>

          {/* Booking & direct info (equal-height stack) */}
          <div className="grid gap-6 auto-rows-fr">
         {/* Booking card */}
<div className="relative rounded-2xl border border-slate-200 bg-white shadow-sm h-full flex flex-col">
  <span className="pointer-events-none absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r from-violet-600 to-fuchsia-500" />

  <div className="p-6 md:p-8 pt-8 md:pt-9 flex flex-col h-full">
    <h2 className="text-xl font-semibold text-slate-900 flex items-center gap-2">
      <CalendarDays className="h-5 w-5 text-violet-600" />
      Prefer to book a quick call?
    </h2>
    <p className="mt-1 text-sm text-slate-600">
      We’ll ask a few questions, show the best-fit setup, and outline what “go live” looks like.
    </p>

    {/* Add content so the height feels intentional */}



    <div className="mt-6 grid sm:grid-cols-2 gap-4">
      <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
        <div className="text-xs font-semibold text-slate-700">What we’ll cover</div>
        <ul className="mt-2 space-y-1.5 text-sm text-slate-600">
          <li>• Your current lead flow</li>
          <li>• What’s leaking revenue</li>
          <li>• Best-fit setup + next steps</li>
        </ul>
      </div>
      <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
        <div className="text-xs font-semibold text-slate-700">Call details</div>
        <ul className="mt-2 space-y-1.5 text-sm text-slate-600">
          <li>• 10–15 minutes</li>
          <li>• No sales pressure</li>
          <li>• Get a clear plan</li>
        </ul>
      </div>
    </div>

    {/* CTA pinned to bottom */}
    <div className="mt-auto pt-6">
      <a
        href={BOOKING_URL}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 text-white px-5 h-11 text-sm font-semibold hover:bg-black w-full sm:w-auto"
      >
        Book a call <ExternalLink className="h-4 w-4" />
      </a>
      <p className="mt-2 text-xs text-slate-500">Opens our booking page in a new tab.</p>
    </div>
  </div>
</div>


            {/* Direct info card */}
            <div className="relative rounded-2xl border border-slate-200 bg-white shadow-sm h-full">
              <span className="pointer-events-none absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r from-blue-600 to-sky-400" />

              <div className="p-6 md:p-8 pt-8 md:pt-9">
                <h3 className="text-xl font-semibold text-slate-900 flex items-center gap-2">
                  <Mail className="h-5 w-5 text-blue-600" />
                  Reach us
                </h3>
                <p className="mt-1 text-sm text-slate-600">
                  Quick ways to get in touch — we typically respond same day
                  (M–F).
                </p>

                <ul className="mt-5 space-y-3 text-sm text-slate-700">
                  <li className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-blue-600" />
                    <a className="hover:underline" href="mailto:hello@neovex.ai">
                      hello@neovex.ai
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-blue-600" />
                    <a className="hover:underline" href="tel:+13128982809">
                      +1 (312) 588-6278
                    </a>
                  </li>
                </ul>

   <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-4">
  <div className="text-sm font-semibold text-slate-900">Response time</div>
  <p className="mt-1 text-sm text-slate-600">
    We typically respond within a few business hours.  
    If you reach out after hours, we’ll follow up the next business day.
  </p>
</div>


                <div className="mt-6 rounded-xl border border-slate-300
 bg-slate-50 p-4">
<div className="text-sm font-semibold text-slate-900">
                    Privacy
                  </div>
                  <p className="mt-1 text-xs text-slate-600">
                    We only use your info to respond to this inquiry. See our{" "}
                    <a
                      href="/privacy"
                      className="text-blue-700 underline decoration-blue-300 hover:decoration-blue-600"
                    >
                      Privacy Policy
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

/**
 * HubSpot form embed component
 * - Loads the HubSpot embed script once
 * - Renders the form inside this page
 * - Calls onSubmitted when the form is submitted
 */
function HubSpotFormEmbed({ portalId, formId, region = "na1", onSubmitted }) {
  const [status, setStatus] = useState("loading"); // loading | ready | error
  const [errorMsg, setErrorMsg] = useState("");
  const [submitted, setSubmitted] = useState(false);



  useEffect(() => {
    const SCRIPT_ID = "hs-forms-v2";
    let cancelled = false;
    let observer = null;
    let fallbackTimer = null;

    const loadScriptOnce = () =>
      new Promise((resolve, reject) => {
        const existing = document.getElementById(SCRIPT_ID);
        if (existing) return resolve();

        const script = document.createElement("script");
        script.id = SCRIPT_ID;
        script.src = "https://js.hsforms.net/forms/v2.js";
        script.async = true;

        script.onload = resolve;
        script.onerror = () =>
          reject(
            new Error("HubSpot script failed to load (blocked or network error).")
          );

        document.body.appendChild(script);
      });

    const waitForHubSpot = (timeoutMs = 6000, intervalMs = 50) =>
      new Promise((resolve, reject) => {
        const start = Date.now();
        const tick = () => {
          if (cancelled) return;

          const ready = !!window.hbspt?.forms?.create;
          if (ready) return resolve(true);

          if (Date.now() - start > timeoutMs) {
            return reject(
              new Error(
                "HubSpot loaded but hbspt.forms.create never became available. This is usually blocked by an adblocker / privacy extension / CSP."
              )
            );
          }
          setTimeout(tick, intervalMs);
        };
        tick();
      });

    const createForm = () => {
      const target = document.getElementById("hs-form-target");
      if (!target) throw new Error("Target #hs-form-target not found.");

      // Clear any previous embeds on route changes / hot reload
      target.innerHTML = "";

// ✅ Watch for HubSpot injecting the form and hide the loader when it exists
observer?.disconnect();
observer = new MutationObserver(() => {
  if (cancelled) return;
  const hasEmbed =
    !!target.querySelector("iframe") ||
    !!target.querySelector("form") ||
    target.childElementCount > 0;

  if (hasEmbed) {
    setStatus("ready");
    observer?.disconnect();
  }
});
observer.observe(target, { childList: true, subtree: true });

window.hbspt.forms.create({
  portalId,
  formId,
  region,
  target: "#hs-form-target",
  onFormReady: () => {
    if (cancelled) return;

    // ✅ Hard force: add a class directly to the submit button after render
    const target = document.getElementById("hs-form-target");
    const btn =
      target?.querySelector('input[type="submit"]') ||
      target?.querySelector('button[type="submit"]') ||
      target?.querySelector(".hs-button");

    if (btn) {
      btn.classList.add("neovex-hs-submit");

      // inline style fallback (wins even if HubSpot injects new css later)
      btn.style.backgroundColor = "#2563eb";
      btn.style.color = "#ffffff";
      btn.style.border = "none";
      btn.style.borderRadius = "0.75rem";
      btn.style.height = "44px";
      btn.style.lineHeight = "44px";
      btn.style.fontWeight = "700";
      btn.style.fontSize = "0.875rem";
      btn.style.padding = "0 20px";
      btn.style.cursor = "pointer";
    }

    setStatus("ready");
  },

onFormSubmitted: () => {
  if (cancelled) return;

  // ✅ flip React state
  setSubmitted(true);

  // ✅ tell parent (ContactPage) to show your custom "sent" UI
  if (typeof onSubmitted === "function") onSubmitted();

  // ✅ nuke HubSpot’s injected confirmation UI so it can’t show
  const t = document.getElementById("hs-form-target");
  if (t) t.innerHTML = "";
},


});

      // ✅ Fallback: if the form is already there quickly, flip ready
      fallbackTimer = window.setTimeout(() => {
        if (cancelled) return;
const hasEmbed =
  !!target.querySelector("iframe") ||
  !!target.querySelector("form") ||
  target.childElementCount > 0;

if (hasEmbed) setStatus("ready");
      }, 250);
    };

    (async () => {
      try {
        setStatus("loading");
        setErrorMsg("");

        await loadScriptOnce();
        await waitForHubSpot();

        if (cancelled) return;
        createForm();
      } catch (err) {
        console.error("[HubSpot] embed failed:", err);
        if (cancelled) return;
        setStatus("error");
        setErrorMsg(err?.message || "HubSpot form failed to load.");
      }
    })();

    return () => {
      cancelled = true;
      if (observer) observer.disconnect();
      if (fallbackTimer) window.clearTimeout(fallbackTimer);
    };
  }, [portalId, formId, region, onSubmitted]);



if (submitted) {
  return (
    <div className="mt-6 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-800">
      <div className="flex items-start gap-3">
        <CheckCircle2 className="h-5 w-5 mt-0.5" />
        <div>
          <p className="font-semibold">Message received!</p>
          <p className="text-sm">
            Thanks—our team will follow up shortly (usually same day M–F).
          </p>

          <div className="mt-4">
            <a
              href="https://meetings.hubspot.com/neovex"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-slate-900 text-white px-4 h-10 text-sm font-semibold hover:bg-black"
            >
              Book a quick call <ExternalLink className="h-4 w-4" />
            </a>
            <p className="mt-2 text-xs text-emerald-700/80">
              Optional — if you want to move faster.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

return (
  <div className="mt-6 hs-form-styles">
 {status !== "ready" ? (
  <div className="mt-6 space-y-3 animate-pulse">
    <div className="h-10 rounded-xl bg-slate-100" />
    <div className="h-10 rounded-xl bg-slate-100" />
    <div className="h-10 rounded-xl bg-slate-100" />
    <div className="h-28 rounded-xl bg-slate-100" />
    <div className="h-11 w-40 rounded-xl bg-slate-100" />
  </div>
) : null}

{/* form mount (fade in when ready) */}
<div
  id="hs-form-target"
  className={`mt-6 transition-opacity duration-300 ${
    status === "ready" ? "opacity-100" : "opacity-0"
  }`}
/>

    {status === "error" ? (
      <div className="rounded-xl border border-rose-200 bg-rose-50 p-4 text-sm text-rose-800">
        Couldn’t load the form. Please email{" "}
        <a className="underline" href="mailto:hello@neovex.ai">
          hello@neovex.ai
        </a>
        .
        <div className="mt-2 text-xs text-rose-700">{errorMsg}</div>
      </div>
    ) : null}

    <div id="hs-form-target" />

  </div>
);
}