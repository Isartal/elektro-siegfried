import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ContactBody = {
  name?: string;
  telefon?: string;
  email?: string;
  leistung?: string;
  nachricht?: string;
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as ContactBody;

    const name = body.name?.trim() || "";
    const telefon = body.telefon?.trim() || "";
    const email = body.email?.trim() || "";
    const leistung = body.leistung?.trim() || "";
    const nachricht = body.nachricht?.trim() || "";

    if (!name || !email || !nachricht) {
      return NextResponse.json(
        { message: "Bitte füllen Sie alle Pflichtfelder aus." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const recipient = process.env.CONTACT_RECEIVER_EMAIL || process.env.SMTP_USER;

    const subject = `Neue Anfrage von ${name}`;

    const text = `
Neue Kontaktanfrage

Name: ${name}
Telefon: ${telefon || "Nicht angegeben"}
E Mail: ${email}
Leistung: ${leistung || "Nicht ausgewählt"}

Nachricht:
${nachricht}
    `.trim();

    const html = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #222;">
        <h2 style="margin-bottom: 16px;">Neue Kontaktanfrage</h2>

        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Telefon:</strong> ${escapeHtml(telefon || "Nicht angegeben")}</p>
        <p><strong>E Mail:</strong> ${escapeHtml(email)}</p>
        <p><strong>Leistung:</strong> ${escapeHtml(leistung || "Nicht ausgewählt")}</p>

        <p style="margin-top: 20px;"><strong>Nachricht:</strong></p>
        <p style="white-space: pre-line;">${escapeHtml(nachricht)}</p>
      </div>
    `;

    await transporter.sendMail({
      from: `"Elektro Siegfried Website" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
      to: recipient,
      replyTo: email,
      subject,
      text,
      html,
    });

    return NextResponse.json(
      { message: "Nachricht erfolgreich gesendet." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Kontaktformular Fehler:", error);

    return NextResponse.json(
      { message: "Beim Senden der Nachricht ist ein Fehler aufgetreten." },
      { status: 500 }
    );
  }
}