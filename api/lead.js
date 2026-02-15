// api/lead.js
import crypto from "crypto";

export default async function handler(req, res) {
  // ----------------------------
  // Only allow POST
  // ----------------------------
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, message: "Method not allowed" });
  }

  // ----------------------------
  // Origin/Referer allowlist (CSRF-lite)
  // ----------------------------
  const allowedHosts = ["neovexai.com", "www.neovexai.com"];
  const origin = (req.headers.origin || "").toLowerCase();
  const referer = (req.headers.referer || "").toLowerCase();
  const hasOriginOrReferer = Boolean(origin || referer);

  const allowed = allowedHosts.some(
    (h) => (origin && origin.includes(h)) || (referer && referer.includes(h))
  );

  // allow if origin/referer absent; block if present but not allowed
  if (hasOriginOrReferer && !allowed) {
    return res.status(403).json({ ok: false, message: "Blocked." });
  }

  // ----------------------------
  // Parse JSON body
  // ----------------------------
  let body;
  try {
    body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
  } catch {
    return res.status(400).json({ ok: false, message: "Invalid JSON body" });
  }

  const postStr = (k) => (body?.[k] ? String(body[k]).trim() : "");
  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const safeDomain = (raw) => {
    let s = String(raw || "").trim().toLowerCase();
    if (!s) return "";
    s = s.replace(/^https?:\/\//, "").replace(/\/.*$/, "").replace(/[^a-z0-9.\-]/g, "");
    if (!s.includes(".")) return "";
    if (s.startsWith(".") || s.endsWith(".")) return "";
    return s;
  };

  // ----------------------------
  // Spam controls (honeypot)
  // ----------------------------
  const honeypot = postStr("website");
  if (honeypot) {
    // Return 200 so bots don't learn
    return res.status(200).json({ ok: true, message: "Thanks!" });
  }

  // Anti-bot timestamp (must take at least 2 seconds)
  const now = Date.now();
  const formTime = Number(postStr("form_time") || "0");
  if (!formTime || Number.isNaN(formTime) || now - formTime < 2000) {
    return res.status(200).json({ ok: true, message: "Thanks!" });
  }

  // ----------------------------
  // Inputs (Neovex Lead)
  // ----------------------------
  const firstName = postStr("first_name");
  const lastName = postStr("last_name");
  const email = postStr("email").toLowerCase();
  const phone = postStr("phone");
  const companyName = postStr("company_name");
  const companyDomain = safeDomain(postStr("company_domain"));
  const message = postStr("message");

  // Checkbox group: array of strings
  const challengesArr = Array.isArray(body?.challenges)
    ? body.challenges.map((x) => String(x).trim()).filter(Boolean)
    : [];
  const challenges = challengesArr.length ? challengesArr.join(", ") : "";

  // Optional (if you add later)
  const interest = postStr("interest"); // "Voice" | "Intake" | "Both" etc.

  // ----------------------------
  // Validate required
  // ----------------------------
  if (!firstName || !lastName) {
    return res.status(400).json({ ok: false, message: "Please enter your name." });
  }
  if (!isValidEmail(email)) {
    return res.status(400).json({ ok: false, message: "Please enter a valid email." });
  }
  if (!companyName) {
    return res.status(400).json({ ok: false, message: "Please enter your company name." });
  }

  // ----------------------------
  // ENV config
  // ----------------------------
  const DEBUG = process.env.DEBUG === "1";

  // Mailchimp
  const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY || "";
  const MAILCHIMP_LIST_ID = process.env.MAILCHIMP_LIST_ID || "";
  const MAILCHIMP_TAG = process.env.MAILCHIMP_TAG || "Neovex Lead";

  // HubSpot
  const HUBSPOT_TOKEN = process.env.HUBSPOT_ACCESS_TOKEN || "";
  const HUBSPOT_PIPELINE_ID = process.env.HUBSPOT_PIPELINE_ID || "";
  const HUBSPOT_DEALSTAGE_ID = process.env.HUBSPOT_DEALSTAGE_ID || "";

  // ----------------------------
  // Fetch helper
  // ----------------------------
  const http = async (url, opts) => {
    const r = await fetch(url, opts);
    const txt = await r.text();
    return { ok: r.ok, status: r.status, text: txt };
  };

  // ----------------------------
  // 1) Mailchimp upsert + tag
  // ----------------------------
  let mailchimpOk = null;
  let mailchimpErr = null;

  const mailchimpEnabled =
    MAILCHIMP_API_KEY &&
    MAILCHIMP_LIST_ID &&
    MAILCHIMP_API_KEY.includes("-") &&
    !MAILCHIMP_API_KEY.includes("YOUR_");

  if (mailchimpEnabled) {
    const dc = MAILCHIMP_API_KEY.split("-")[1];
    const memberHash = crypto.createHash("md5").update(email).digest("hex");

    const baseUrl = `https://${dc}.api.mailchimp.com/3.0`;
    const memberUrl = `${baseUrl}/lists/${MAILCHIMP_LIST_ID}/members/${memberHash}`;

    // NOTE: merge field keys must exist in Mailchimp Audience settings
    // You can remove any that you don't have.
    const payload = {
      email_address: email,
      status_if_new: "subscribed",
      status: "subscribed",
      merge_fields: {
        FNAME: firstName,
        LNAME: lastName,
        PHONE: phone,
        COMPANY: companyName,
        DOMAIN: companyDomain,
        CHALLENGE: challenges, // create this merge field in Mailchimp if you want it
        INTEREST: interest,
      },
    };

    const auth = Buffer.from(`anystring:${MAILCHIMP_API_KEY}`).toString("base64");

    const upsert = await http(memberUrl, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${auth}`,
      },
      body: JSON.stringify(payload),
    });

    mailchimpOk = upsert.ok;
    if (!upsert.ok) {
      mailchimpErr = `Mailchimp HTTP ${upsert.status}: ${upsert.text?.slice(0, 300)}`;
    }

    if (upsert.ok && MAILCHIMP_TAG) {
      const tagUrl = `${baseUrl}/lists/${MAILCHIMP_LIST_ID}/members/${memberHash}/tags`;
      await http(tagUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${auth}`,
        },
        body: JSON.stringify({ tags: [{ name: MAILCHIMP_TAG, status: "active" }] }),
      });
    }
  }

  // ----------------------------
  // 2) HubSpot upsert contact + optional company + deal + associations
  // ----------------------------
  const hubspotEnabled = HUBSPOT_TOKEN && HUBSPOT_TOKEN.startsWith("pat-");
  const hubspot = {
    enabled: hubspotEnabled,
    ok: null,
    contact_id: null,
    company_id: null,
    deal_id: null,
    error: null,
  };

  const hsHeaders = () => ({
    "Content-Type": "application/json",
    Authorization: `Bearer ${HUBSPOT_TOKEN}`,
  });

  const hsSearch = async (objectPlural, filters) => {
    const url = `https://api.hubapi.com/crm/v3/objects/${objectPlural}/search`;
    return http(url, {
      method: "POST",
      headers: hsHeaders(),
      body: JSON.stringify({ filterGroups: [{ filters }], limit: 1 }),
    });
  };

  const hsCreate = async (objectPlural, properties) => {
    const url = `https://api.hubapi.com/crm/v3/objects/${objectPlural}`;
    return http(url, {
      method: "POST",
      headers: hsHeaders(),
      body: JSON.stringify({ properties }),
    });
  };

  const hsUpdate = async (objectPlural, id, properties) => {
    const url = `https://api.hubapi.com/crm/v3/objects/${objectPlural}/${id}`;
    return http(url, {
      method: "PATCH",
      headers: hsHeaders(),
      body: JSON.stringify({ properties }),
    });
  };

  const hsAssociateDefault = async (fromTypeSingular, fromId, toTypeSingular, toId) => {
    const url = `https://api.hubapi.com/crm/v4/objects/${fromTypeSingular}/${fromId}/associations/default/${toTypeSingular}/${toId}`;
    return http(url, { method: "PUT", headers: hsHeaders() });
  };

  if (hubspotEnabled) {
    try {
      // --- Contact upsert ---
      const searchC = await hsSearch("contacts", [
        { propertyName: "email", operator: "EQ", value: email },
      ]);

      let contactId = null;
      if (searchC.ok) {
        const decoded = JSON.parse(searchC.text || "{}");
        contactId = decoded?.results?.[0]?.id || null;
      }

      const contactProps = {
        email,
        firstname: firstName,
        lastname: lastName,
        phone,
        lifecyclestage: "lead",
        // Optional: if you create custom props in HubSpot, add them here:
        // lead_source: "Website",
        // neovex_challenges: challenges,
        // neovex_interest: interest,
      };

      if (!contactId) {
        const created = await hsCreate("contacts", contactProps);

        if (created.ok) {
          const d = JSON.parse(created.text || "{}");
          contactId = d?.id || null;
          if (!contactId) throw new Error("Contact create succeeded but missing id");
        } else if (created.status === 409) {
          // already exists; re-search and update
          const searchAgain = await hsSearch("contacts", [
            { propertyName: "email", operator: "EQ", value: email },
          ]);
          if (searchAgain.ok) {
            const d2 = JSON.parse(searchAgain.text || "{}");
            contactId = d2?.results?.[0]?.id || null;
          }
          if (!contactId) {
            throw new Error(`Contact exists (409) but could not resolve ID: ${created.text?.slice(0, 300)}`);
          }
          await hsUpdate("contacts", contactId, contactProps);
        } else {
          throw new Error(`Contact create failed HTTP ${created.status}: ${created.text?.slice(0, 300)}`);
        }
      } else {
        await hsUpdate("contacts", contactId, contactProps);
      }

      hubspot.contact_id = contactId;

      // --- Company optional ---
      let companyId = null;
      if (companyDomain || companyName) {
        const searchCo = companyDomain
          ? await hsSearch("companies", [{ propertyName: "domain", operator: "EQ", value: companyDomain }])
          : await hsSearch("companies", [{ propertyName: "name", operator: "EQ", value: companyName }]);

        if (searchCo.ok) {
          const d = JSON.parse(searchCo.text || "{}");
          companyId = d?.results?.[0]?.id || null;
        }

        if (!companyId) {
          const coProps = { name: companyName || companyDomain };
          if (companyDomain) coProps.domain = companyDomain;

          const createCo = await hsCreate("companies", coProps);
          if (!createCo.ok) {
            throw new Error(`Company create failed HTTP ${createCo.status}: ${createCo.text?.slice(0, 300)}`);
          }

          const d = JSON.parse(createCo.text || "{}");
          companyId = d?.id || null;
          if (!companyId) throw new Error("Company create failed: missing id");
        }

        hubspot.company_id = companyId;
        await hsAssociateDefault("contact", contactId, "company", companyId);
      }

      // --- Deal create (always) ---
      const dealName = `Neovex AI Lead — ${firstName} ${lastName}${companyName ? ` (${companyName})` : ""}`;

      const dealProps = {
        dealname: dealName,
        description:
          `Neovex lead\n` +
          `Name: ${firstName} ${lastName}\n` +
          `Email: ${email}\n` +
          `Phone: ${phone || "—"}\n` +
          `Company: ${companyName}\n` +
          `Domain: ${companyDomain || "—"}\n` +
          `Challenges: ${challenges || "—"}\n` +
          `Interest: ${interest || "—"}\n\n` +
          `Message:\n${message || "—"}\n`,
      };

      if (HUBSPOT_PIPELINE_ID) dealProps.pipeline = HUBSPOT_PIPELINE_ID;
      if (HUBSPOT_DEALSTAGE_ID) dealProps.dealstage = HUBSPOT_DEALSTAGE_ID;

      const createD = await hsCreate("deals", dealProps);
      if (!createD.ok) {
        throw new Error(`Deal create failed HTTP ${createD.status}: ${createD.text?.slice(0, 300)}`);
      }

      const d = JSON.parse(createD.text || "{}");
      const dealId = d?.id || null;
      if (!dealId) throw new Error("Deal create failed: missing id");

      hubspot.deal_id = dealId;

      await hsAssociateDefault("contact", contactId, "deal", dealId);
      if (hubspot.company_id) {
        await hsAssociateDefault("company", hubspot.company_id, "deal", dealId);
      }

      hubspot.ok = true;
    } catch (e) {
      hubspot.ok = false;
      hubspot.error = e?.message || String(e);
    }
  }

  // ----------------------------
  // Respond to browser
  // ----------------------------
  const response = {
    ok: true,
    message: "Thanks — we got your request. You’ll receive an email shortly.",
  };

  if (DEBUG) {
    response.debug = {
      mailchimp: { ok: mailchimpOk, error: mailchimpErr },
      hubspot,
    };
  }

  return res.status(200).json(response);
}
