const NOTIFICATION_TO = "hello@neovexai.com";
const FROM = "Neovex Team <hello@neovexai.com>";
const ERROR_MESSAGE = "We could not send your workflow details. Please try again or email hello@neovexai.com.";

function readBody(req) {
  if (!req.body) return {};
  if (typeof req.body === "string") return JSON.parse(req.body);
  return req.body;
}

function postStr(body, key) {
  return body?.[key] ? String(body[key]).trim() : "";
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function logFailure(message, details = {}) {
  console.error("[workflow-inquiry]", message, {
    ...details,
    hasResendApiKey: Boolean(process.env.RESEND_API_KEY),
    from: FROM,
    to: NOTIFICATION_TO,
  });
}

async function sendEmail({ resendApiKey, payload, logContext }) {
  const providerResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const responseText = await providerResponse.text();
  let responseJson = null;
  try {
    responseJson = responseText ? JSON.parse(responseText) : null;
  } catch {
    responseJson = null;
  }

  if (!providerResponse.ok || !responseJson?.id) {
    logFailure("Resend rejected email", {
      status: providerResponse.status,
      response: responseText?.slice(0, 500),
      ...logContext,
    });
    return false;
  }

  return true;
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, message: "Method not allowed" });
  }

  let body;
  try {
    body = readBody(req);
  } catch {
    return res.status(400).json({ ok: false, message: "Invalid JSON body" });
  }

  const fullName = postStr(body, "fullName");
  const email = postStr(body, "email").toLowerCase();
  const company = postStr(body, "company");
  const workflow = postStr(body, "workflow");
  const tools = postStr(body, "tools");
  const manualWork = postStr(body, "manualWork");
  const startingPoint = postStr(body, "startingPoint");

  if (!fullName || !company || !workflow || !isValidEmail(email)) {
    return res.status(400).json({
      ok: false,
      message: "Please complete the required fields with a valid work email.",
    });
  }

  const resendApiKey = process.env.RESEND_API_KEY || "";

  if (!resendApiKey) {
    logFailure("Email provider is not configured", { company });
    return res.status(500).json({
      ok: false,
      message: ERROR_MESSAGE,
    });
  }

  const subject = `New Workflow Inquiry — ${company}`;
  const submittedAt = new Date().toISOString();
  const text = [
    "New workflow inquiry",
    "",
    `Company: ${company}`,
    `Name: ${fullName}`,
    `Email: ${email}`,
    `Starting point: ${startingPoint || "Not provided"}`,
    "",
    "Workflow to improve:",
    workflow,
    "",
    "Tools or systems involved:",
    tools || "Not provided",
    "",
    "Manual work today:",
    manualWork || "Not provided",
    "",
    `Submitted at: ${submittedAt}`,
  ].join("\n");

  const html = `
    <div style="font-family:Arial,sans-serif;color:#172235;line-height:1.55">
      <h1 style="font-size:22px;margin:0 0 16px">New workflow inquiry</h1>
      <p><strong>Company:</strong> ${escapeHtml(company)}</p>
      <p><strong>Name:</strong> ${escapeHtml(fullName)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Starting point:</strong> ${escapeHtml(startingPoint || "Not provided")}</p>
      <hr style="border:none;border-top:1px solid #d9dee5;margin:20px 0" />
      <h2 style="font-size:16px;margin:0 0 8px">Workflow to improve</h2>
      <p>${escapeHtml(workflow).replace(/\n/g, "<br />")}</p>
      <h2 style="font-size:16px;margin:20px 0 8px">Tools or systems involved</h2>
      <p>${escapeHtml(tools || "Not provided").replace(/\n/g, "<br />")}</p>
      <h2 style="font-size:16px;margin:20px 0 8px">Manual work today</h2>
      <p>${escapeHtml(manualWork || "Not provided").replace(/\n/g, "<br />")}</p>
      <p style="margin-top:20px;color:#607184;font-size:13px">Submitted at ${escapeHtml(submittedAt)}</p>
    </div>
  `;
  const confirmationSubject = "We received your workflow details";
  const confirmationText = [
    `Hi ${fullName},`,
    "",
    "Thanks for sharing the workflow you want to improve. We received the details and will review the process, systems involved, and where automation may help.",
    "",
    "If we have questions or see a good fit, we will follow up with next steps.",
    "",
    "Neovex Team",
  ].join("\n");
  const confirmationHtml = `
    <div style="font-family:Arial,sans-serif;color:#172235;line-height:1.55">
      <p>Hi ${escapeHtml(fullName)},</p>
      <p>Thanks for sharing the workflow you want to improve. We received the details and will review the process, systems involved, and where automation may help.</p>
      <p>If we have questions or see a good fit, we will follow up with next steps.</p>
      <p>Neovex Team</p>
    </div>
  `;

  try {
    const internalSent = await sendEmail({
      resendApiKey,
      payload: {
        from: FROM,
        to: [NOTIFICATION_TO],
        subject,
        reply_to: email,
        text,
        html,
      },
      logContext: { type: "internal_notification", company },
    });

    if (!internalSent) {
      return res.status(502).json({
        ok: false,
        message: ERROR_MESSAGE,
      });
    }

    const confirmationSent = await sendEmail({
      resendApiKey,
      payload: {
        from: FROM,
        to: [email],
        subject: confirmationSubject,
        reply_to: NOTIFICATION_TO,
        text: confirmationText,
        html: confirmationHtml,
      },
      logContext: { type: "prospect_confirmation", company },
    });

    if (!confirmationSent) {
      return res.status(502).json({
        ok: false,
        message: ERROR_MESSAGE,
      });
    }

    return res.status(200).json({ ok: true, message: "Workflow inquiry sent." });
  } catch (error) {
    logFailure("Resend request failed", {
      error: error?.message || String(error),
      company,
    });
    return res.status(502).json({
      ok: false,
      message: ERROR_MESSAGE,
    });
  }
}
