import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "edge";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, topic, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    const { error } = await resend.emails.send({
      from: "Contact Form <info@chambersofvanshikamittal.com>",
      replyTo: email,
      to: process.env.CONTACT_EMAIL || "office@chambersofvanshikamittal.com",
      subject: `Contact Form: ${topic || "General Enquiry"} - ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Topic: ${topic}`,
        ``,
        `Message:`,
        message,
      ].join("\n"),
    });

    if (error) {
      console.error("[contact]", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error("[contact]", err);
    return NextResponse.json({ error: "Failed to send message." }, { status: 500 });
  }
}
