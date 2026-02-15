import express from "express";
import crypto from "crypto";
import fetch from "node-fetch";

const router = express.Router();

router.post("/api/mailchimp/subscribe", async (req, res) => {
  try {
    const { email, firstName = "", lastName = "" } = req.body;
    if (!email) return res.status(400).json({ error: "Email required" });

    const API_KEY = process.env.MAILCHIMP_API_KEY;
    const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
    const DC = API_KEY.split("-")[1]; // us21 etc

    const subscriberHash = crypto
      .createHash("md5")
      .update(email.toLowerCase())
      .digest("hex");

    const url = `https://${DC}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members/${subscriberHash}`;

    const payload = {
      email_address: email,
      status_if_new: "subscribed",
      status: "subscribed",
      merge_fields: {
        FNAME: firstName,
        LNAME: lastName,
      },
    };

    const mcRes = await fetch(url, {
      method: "PUT",
      headers: {
        Authorization: `Basic ${Buffer.from(`any:${API_KEY}`).toString("base64")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await mcRes.json();
    if (!mcRes.ok) return res.status(400).json({ error: data });

    res.json({ ok: true });
  } catch (err) {
    console.error("Mailchimp error:", err);
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
