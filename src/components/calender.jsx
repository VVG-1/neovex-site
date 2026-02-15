// src/components/Calendar.jsx (or src/pages/Calendar.jsx — wherever you keep it)
import React, { useEffect } from "react";
import { CalendarDays, ExternalLink } from "lucide-react";

const BOOKING_URL = "https://meetings.hubspot.com/neovex"; // ✅ your meetings link
const EMBED_URL = "https://meetings.hubspot.com/neovex?embed=true";

// Loads HubSpot Meetings embed script once per page-load
function useHubSpotMeetingsEmbed() {
  useEffect(() => {
    const SCRIPT_ID = "hubspot-meetings-embed-script";
    const existing = document.getElementById(SCRIPT_ID);
    if (existing) return;

    const script = document.createElement("script");
    script.id = SCRIPT_ID;
    script.src =
      "https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js";
    script.async = true;
    script.defer = true;

    document.body.appendChild(script);
  }, []);
}

export default function Calendar() {
  useHubSpotMeetingsEmbed();

  return (
    <div className="relative rounded-2xl border border-slate-200 bg-white shadow-sm h-full flex flex-col">
      <span className="pointer-events-none absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r from-violet-600 to-fuchsia-500" />

      <div className="p-6 md:p-8 pt-8 md:pt-9 flex flex-col h-full">
        <h2 className="text-xl font-semibold text-slate-900 flex items-center gap-2">
          <CalendarDays className="h-5 w-5 text-violet-600" />
          Prefer to book a quick call?
        </h2>

        <p className="mt-1 text-sm text-slate-600">
          We’ll ask a few questions, show the best-fit setup, and outline what “go
          live” looks like.
        </p>

        {/* What we cover + call details */}
        <div className="mt-6 grid sm:grid-cols-2 gap-4">
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <div className="text-xs font-semibold text-slate-700">
              What we’ll cover
            </div>
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

        {/* Embedded HubSpot Meetings calendar */}
        <div className="mt-6 flex-1 overflow-hidden rounded-xl border border-slate-200 bg-white">
          <div
            className="meetings-iframe-container w-full"
            data-src={EMBED_URL}
          />
        </div>

        {/* Fallback link */}
        <p className="mt-3 text-xs text-slate-500">
          Trouble loading the calendar?{" "}
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-2 hover:text-slate-700 inline-flex items-center gap-1"
          >
            Open it in a new tab <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </p>
      </div>
    </div>
  );
}
