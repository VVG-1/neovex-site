function LeadSummaryVisual() {
  return (
    <section className="bg-white py-20 px-6 border-t border-gray-100">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT: Copy */}
        <div>
          <p className="text-sm font-semibold text-blue-600 uppercase mb-3">
            What You Receive
          </p>

          <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
            A Clean Lead Summary — Delivered Instantly
          </h2>

          <p className="text-lg text-gray-600 mb-6">
            When you can’t answer, Neovex captures the caller’s details in a natural
            conversation and sends you a structured summary immediately by text, email,
            or CRM—so you can call back fast and close.
          </p>

          <ul className="space-y-4 text-base text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold">✓</span>
              Who they are and how to reach them
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold">✓</span>
              What they need and where the job is
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold">✓</span>
              Urgency, timing, and intent signals
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold">✓</span>
              Clear next step (callback window / booking / quote request)
            </li>
          </ul>

          <p className="mt-6 text-sm text-gray-500 italic">
            No guessing. No voicemail hunting. Just call back with context.
          </p>
        </div>

        {/* RIGHT: Visual */}
        <div className="bg-gray-50 rounded-2xl border border-gray-200 shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="text-xs font-semibold text-gray-500">
              📩 New Inbound Lead — Missed Call Captured
            </div>
            <div className="text-xs text-gray-400">
              Delivered in <span className="font-semibold text-gray-700">8s</span>
            </div>
          </div>

          <div className="space-y-3 text-sm">
            <Row label="Name" value="Sarah M." />
            <Row label="Phone" value="(312) 555-0194" />
            <Row label="Service" value="Office Cleaning" />
            <Row label="Location" value="West Loop, Chicago" />
            <Row
              label="Urgency"
              value={<span className="font-semibold text-amber-600">Needs service this week</span>}
            />

            <div className="pt-4 border-t border-gray-200">
              <p className="text-gray-600">
                <strong>Notes:</strong> Looking for recurring weekly cleaning for a ~3,000 sq ft office.
                Asked about pricing and availability. Prefers mornings.
              </p>
            </div>

            <div className="pt-4 border-t border-gray-200 flex flex-wrap gap-2">
              <span className="text-xs bg-white border border-gray-200 rounded-full px-3 py-1 text-gray-600">
                ✅ Qualified
              </span>
              <span className="text-xs bg-white border border-gray-200 rounded-full px-3 py-1 text-gray-600">
                📍 In service area
              </span>
              <span className="text-xs bg-white border border-gray-200 rounded-full px-3 py-1 text-gray-600">
                ⏱️ Callback requested
              </span>
            </div>

            <div className="mt-4 flex gap-3">
              <button className="flex-1 bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-xl hover:bg-blue-700 transition">
                Call Back
              </button>
              <button className="flex-1 bg-white border border-gray-200 text-gray-800 text-sm font-semibold px-4 py-2 rounded-xl hover:bg-gray-100 transition">
                View in CRM
              </button>
            </div>
          </div>

          <div className="mt-4 text-xs text-gray-400">
            Sent via SMS / Email / HubSpot (if connected)
          </div>
        </div>
      </div>
    </section>
  );
}

function Row({ label, value }) {
  return (
    <div className="flex justify-between gap-4">
      <span className="text-gray-500">{label}</span>
      <span className="font-medium text-gray-900 text-right">{value}</span>
    </div>
  );
}
