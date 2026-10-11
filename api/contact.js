const TO = "blueframedigital0@gmail.com";
const FROM = "Blueframe Digital <hello@blueframedigital.co.uk>";

const NEEDS = new Set([
  "Website",
  "Website redesign",
  "Online store",
  "Social media",
  "Both",
  "Something else",
]);

const BUDGETS = new Set([
  "Website from £199",
  "Website from £399",
  "Online store from £15/month",
  "Custom website",
  "Social media from £99/month",
  "Not sure yet",
]);

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE = /^[0-9+\s()-]{8,40}$/;

function text(value, max) {
  return String(value ?? "")
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, "")
    .trim()
    .slice(0, max);
}

function readBody(req) {
  if (!req.body) return {};
  if (typeof req.body === "string") {
    try {
      return JSON.parse(req.body);
    } catch {
      return null;
    }
  }
  return req.body;
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed." });
  }

  const body = readBody(req);
  if (!body || typeof body !== "object") {
    return res.status(400).json({ error: "Please check the form and try again." });
  }

  if (text(body.bf_hp, 200) || text(body.company, 200)) {
    console.error("contact honeypot");
    return res.status(200).json({ ok: true });
  }

  const name = text(body.name, 80);
  const business = text(body.business, 120);
  const email = text(body.email, 254);
  const phone = text(body.phone, 40);
  const need = text(body.need, 40);
  const budget = text(body.budget, 80);
  const message = text(body.message, 4000);

  const invalid =
    !name ||
    !EMAIL.test(email) ||
    (phone && !PHONE.test(phone)) ||
    !NEEDS.has(need) ||
    !BUDGETS.has(budget) ||
    !message;

  if (invalid) {
    return res.status(400).json({ error: "Please check the form and try again." });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set");
    return res.status(500).json({ error: "We couldn't send your message. Please try again." });
  }

  const from = process.env.RESEND_FROM || FROM;
  const to = TO;
  const subject = `New project enquiry — ${business || name}`;
  const content = [
    `Name: ${name}`,
    `Business: ${business || "—"}`,
    `Email: ${email}`,
    `Phone: ${phone || "—"}`,
    `What they need: ${need}`,
    `Budget: ${budget}`,
    "",
    message,
  ].join("\n");

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject,
        text: content,
      }),
    });

    const result = await response.json().catch(() => ({}));
    if (!response.ok) {
      console.error("Resend rejected the enquiry", response.status, result.name || "unknown");
      return res.status(502).json({ error: "We couldn't send your message. Please try again." });
    }

    console.log("enquiry queued", result.id || "no-id", to);
    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error("Resend request failed", error instanceof Error ? error.name : "Error");
    return res.status(502).json({ error: "We couldn't send your message. Please try again." });
  }
}
