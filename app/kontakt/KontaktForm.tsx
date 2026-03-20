"use client";

import { FormEvent, useState } from "react";

type FormState = {
  name: string;
  telefon: string;
  email: string;
  leistung: string;
  nachricht: string;
};

const initialForm: FormState = {
  name: "",
  telefon: "",
  email: "",
  leistung: "",
  nachricht: "",
};

export default function KontaktForm() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const response = await fetch("/api/kontakt", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.message || "Beim Senden ist ein Fehler aufgetreten.");
      }

      setSuccessMessage("Vielen Dank. Ihre Anfrage wurde erfolgreich gesendet.");
      setForm(initialForm);
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Beim Senden ist ein Fehler aufgetreten.";
      setErrorMessage(message);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="rounded-[28px] bg-white">
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#2f7d3b]">
        Anfrageformular
      </p>

      <h3 className="mt-3 text-3xl font-semibold tracking-tight text-[#18181b]">
        Nachricht senden
      </h3>

      <p className="mt-3 max-w-2xl text-sm leading-7 text-[#5f5b53]">
        Teilen Sie uns die wichtigsten Informationen mit. Wir melden uns so
        schnell wie möglich bei Ihnen zurück.
      </p>

      <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-medium text-stone-700"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full rounded-xl border border-[#e7e1d7] bg-[#faf8f3] px-4 py-3.5 text-stone-900 outline-none transition duration-300 focus:border-[#2f7d3b] focus:bg-white focus:ring-4 focus:ring-[#2f7d3b]/10"
              placeholder="Ihr Name"
              required
            />
          </div>

          <div>
            <label
              htmlFor="telefon"
              className="mb-2 block text-sm font-medium text-stone-700"
            >
              Telefon
            </label>
            <input
              id="telefon"
              name="telefon"
              type="tel"
              value={form.telefon}
              onChange={(e) => setForm({ ...form, telefon: e.target.value })}
              className="w-full rounded-xl border border-[#e7e1d7] bg-[#faf8f3] px-4 py-3.5 text-stone-900 outline-none transition duration-300 focus:border-[#2f7d3b] focus:bg-white focus:ring-4 focus:ring-[#2f7d3b]/10"
              placeholder="Ihre Telefonnummer"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-stone-700"
          >
            E Mail
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full rounded-xl border border-[#e7e1d7] bg-[#faf8f3] px-4 py-3.5 text-stone-900 outline-none transition duration-300 focus:border-[#2f7d3b] focus:bg-white focus:ring-4 focus:ring-[#2f7d3b]/10"
            placeholder="info@beispiel.de"
            required
          />
        </div>

        <div>
          <label
            htmlFor="leistung"
            className="mb-2 block text-sm font-medium text-stone-700"
          >
            Gewünschte Leistung
          </label>
          <select
            id="leistung"
            name="leistung"
            value={form.leistung}
            onChange={(e) => setForm({ ...form, leistung: e.target.value })}
            className="w-full rounded-xl border border-[#e7e1d7] bg-[#faf8f3] px-4 py-3.5 text-stone-900 outline-none transition duration-300 focus:border-[#2f7d3b] focus:bg-white focus:ring-4 focus:ring-[#2f7d3b]/10"
          >
            <option value="">Bitte auswählen</option>
            <option value="Elektroinstallationen">Elektroinstallationen</option>
            <option value="Sanierung und Modernisierung">
              Sanierung und Modernisierung
            </option>
            <option value="Beleuchtung und Lichtkonzepte">
              Beleuchtung und Lichtkonzepte
            </option>
            <option value="Photovoltaik und Wallboxen">
              Photovoltaik und Wallboxen
            </option>
            <option value="Wärmepumpen">Wärmepumpen</option>
            <option value="Smart Home">Smart Home</option>
            <option value="E Check Prüfung nach DIN VDE">
              E Check Prüfung nach DIN VDE
            </option>
            <option value="Hausverwaltung">Hausverwaltung</option>
            <option value="Notdienst">Notdienst</option>
            <option value="Sonstiges">Sonstiges</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="nachricht"
            className="mb-2 block text-sm font-medium text-stone-700"
          >
            Nachricht
          </label>
          <textarea
            id="nachricht"
            name="nachricht"
            rows={6}
            value={form.nachricht}
            onChange={(e) => setForm({ ...form, nachricht: e.target.value })}
            className="w-full rounded-xl border border-[#e7e1d7] bg-[#faf8f3] px-4 py-3.5 text-stone-900 outline-none transition duration-300 focus:border-[#2f7d3b] focus:bg-white focus:ring-4 focus:ring-[#2f7d3b]/10"
            placeholder="Beschreiben Sie kurz Ihr Vorhaben"
            required
          />
        </div>

        {successMessage ? (
          <div className="rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-800">
            {successMessage}
          </div>
        ) : null}

        {errorMessage ? (
          <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {errorMessage}
          </div>
        ) : null}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-xl border border-[#18181b] bg-[#18181b] px-6 py-4 text-sm font-semibold text-white transition duration-300 hover:border-[#2f7d3b] hover:bg-[#2f7d3b] hover:text-white disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? "Wird gesendet..." : "Anfrage senden"}
        </button>
      </form>
    </div>
  );
}