"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactPage() {
  const [status, setStatus] = useState<Status>("idle");
  const [msg, setMsg] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const fd = new FormData(form);

    // Honeypot: bots often fill hidden fields
    const company = String(fd.get("company") || "").trim();
    if (company) {
      setStatus("sent");
      setMsg("Thanks, your message has been sent.");
      form.reset();
      return;
    }

    const payload = {
      name: String(fd.get("name") || "").trim(),
      email: String(fd.get("email") || "").trim(),
      phone: String(fd.get("phone") || "").trim(),
      topic: String(fd.get("topic") || "").trim(),
      message: String(fd.get("message") || "").trim()
    };
    const countryCode = String(fd.get("countryCode") || "").trim();
    const localPhone = String(fd.get("phone") || "").trim();

    if (!/^[^\s@]+@[^\s@]+\.com$/i.test(payload.email)) {
      setStatus("error");
      setMsg("Please enter a valid .com email address.");
      return;
    }

    if (!/^\+\d{1,3}$/.test(countryCode) || !/^\d{10}$/.test(localPhone)) {
      setStatus("error");
      setMsg("Please enter a country code and a 10-digit phone number.");
      return;
    }

    payload.phone = `${countryCode} ${localPhone}`;

    setStatus("sending");
    setMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) throw new Error(data?.error || "Unable to send message.");

      setStatus("sent");
      setMsg("Thanks, your message has been sent.");
      form.reset();
    } catch (err: any) {
      setStatus("error");
      setMsg(err?.message || "Something went wrong.");
    }
  }

  return (
    <>
      <h1 className="h1">Contact Us</h1>
      <p className="lead">Send an enquiry and we’ll get back to you via email or phone.</p>

      <hr className="hr" />

      <form className="form" onSubmit={onSubmit}>

        <label className="label">
          Name *
          <input className="input" name="name" required maxLength={120} />
        </label>

        <label className="label">
          Email *
          <input
            className="input"
            name="email"
            type="email"
            required
            maxLength={160}
            pattern="[^\s@]+@[^\s@]+\.com"
            title="Enter an email address ending in .com"
          />
        </label>

        <div className="phone-fields">
          <label className="label">
            Country code *
            <input
              className="input"
              name="countryCode"
              required
              inputMode="tel"
              maxLength={4}
              pattern="\+\d{1,3}"
              placeholder="+91"
              title="Enter a country code such as +91"
            />
          </label>

          <label className="label">
            Phone number *
            <input
              className="input"
              name="phone"
              required
              inputMode="numeric"
              maxLength={10}
              pattern="\d{10}"
              title="Enter exactly 10 digits"
            />
          </label>
        </div>

        <label className="label">
          Topic *
          <select className="select" name="topic" required>
            <option value="">Select…</option>
            <option value="Consultation">Consultation</option>
            <option value="Legal Notice">Legal Notice</option>
            <option value="Civil Matter">Civil Matter</option>
            <option value="Family Matter">Family Matter</option>
            <option value="Corporate Matter">Corporate Matter</option>
            <option value="Other">Other</option>
          </select>
        </label>

        <label className="label">
          Message *
          <textarea className="textarea" name="message" required maxLength={5000} />
        </label>

        <button className="button" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Send message"}
        </button>

        {status !== "idle" && (
          <div className={`notice ${status === "sent" ? "ok" : status === "error" ? "err" : ""}`}>
            {msg}
          </div>
        )}
      </form>
    </>
  );
}