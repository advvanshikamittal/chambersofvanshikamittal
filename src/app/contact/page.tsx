"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactPage() {
  const [status, setStatus] = useState<Status>("idle");
  const [msg, setMsg] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setMsg("");

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
          <input className="input" name="email" type="email" required maxLength={160} />
        </label>

        <label className="label">
          Phone *
          <input className="input" name="phone" required inputMode="tel" maxLength={30} />
        </label>

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