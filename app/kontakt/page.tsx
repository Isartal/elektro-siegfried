import ScrollReveal from "../components/ScrollReveal";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock3,
  ArrowRight,
  BadgeCheck,
  Sparkles,
  Send,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Kontakt | Elektro Siegfried in München und Umgebung",
  description:
    "Kontakt zu Elektro Siegfried. Ihr Ansprechpartner für Elektroinstallationen, Sanierung, Wallboxen, Photovoltaik, Wärmepumpen, Hausverwaltungen und moderne Gebäudetechnik in München und Umgebung.",
  keywords: [
    "Kontakt Elektriker München",
    "Elektro Siegfried Kontakt",
    "Elektriker München Telefonnummer",
    "Elektroinstallation Anfrage München",
    "Wallbox Elektriker München",
    "Photovoltaik Kontakt München",
    "Hausverwaltung Elektriker München",
  ],
  alternates: {
    canonical: "https://www.elektro-siegfried.de/kontakt",
  },
  openGraph: {
    title: "Kontakt | Elektro Siegfried",
    description:
      "Jetzt Kontakt aufnehmen für Elektroarbeiten in München und Umgebung.",
    url: "https://www.elektro-siegfried.de/kontakt",
    siteName: "Elektro Siegfried",
    images: ["/og-image.jpg"],
    locale: "de_DE",
    type: "website",
  },
};

const badgeClass =
  "inline-flex rounded-full border border-[#dbe9de] bg-[#f4faf5] px-4 py-2 text-xs sm:text-sm font-semibold tracking-[0.08em] text-[#2f7d3b]";

const cardClass =
  "group relative h-full overflow-hidden rounded-[2rem] border border-[#ece7de] bg-white/95 p-6 sm:p-7 shadow-[0_14px_40px_rgba(15,23,42,0.06)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_rgba(15,23,42,0.10)]";

const softCardClass =
  "group relative h-full overflow-hidden rounded-[2rem] border border-[#ebe5da] bg-[linear-gradient(180deg,rgba(255,255,255,0.96)_0%,rgba(249,247,242,0.96)_100%)] p-6 sm:p-7 shadow-[0_14px_40px_rgba(15,23,42,0.05)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_rgba(15,23,42,0.09)]";

export default function KontaktPage() {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "Electrician",
    name: "Elektro Siegfried",
    url: "https://www.elektro-siegfried.de/kontakt",
    telephone: "+4917644481312",
    email: "info@elektro-siegfried.de",
    areaServed: "München und Umgebung",
    address: {
      "@type": "PostalAddress",
      addressLocality: "München",
      addressCountry: "DE",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactSchema),
        }}
      />

      <main className="min-h-screen bg-[#f9f7f2] text-[#1f1715]">
        {/* HERO */}
        <section className="relative overflow-hidden bg-[#f8f5ef] py-16 sm:py-20 lg:py-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(47,125,59,0.06),transparent_34%)]" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
            <ScrollReveal className="mx-auto max-w-3xl text-center">
              <p className={badgeClass}>Kontakt</p>

              <h1 className="mt-4 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl md:text-5xl lg:text-6xl">
                Ihr direkter Kontakt zu
                <span className="block text-stone-700">
                  Elektro Siegfried
                </span>
              </h1>

              <p className="mt-5 text-base leading-7 text-[#6e625c] sm:text-lg sm:leading-8">
                Für Elektroinstallationen, Sanierung, Wallboxen, Photovoltaik,
                Wärmepumpen, Hausverwaltungen und moderne Gebäudetechnik in
                München und Umgebung.
              </p>
            </ScrollReveal>

            <div className="mt-12 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
              <ScrollReveal>
                <div className={cardClass}>
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-[1.2rem] border border-[#dce8de] bg-[#f4faf5] text-[#2f7d3b] shadow-sm">
                    <Phone className="h-6 w-6" />
                  </div>

                  <h2 className="text-2xl font-bold tracking-tight text-[#1f1715] sm:text-3xl">
                    Schnell erreichbar für Ihr Projekt
                  </h2>

                  <p className="mt-4 leading-7 text-[#4e433d]">
                    Ob Anfrage, Rückrufwunsch oder konkretes Vorhaben:
                    Elektro Siegfried begleitet Projekte mit klarer Abstimmung,
                    fachlicher Präzision und sauberer Umsetzung.
                  </p>

                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    <a
                      href="tel:+4917644481312"
                      className="inline-flex min-h-[52px] items-center justify-center rounded-xl bg-[#2f7d3b] px-6 py-3 font-bold !text-white shadow-[0_12px_28px_rgba(47,125,59,0.18)] transition hover:bg-[#276a32]"
                    >
                      Jetzt anrufen
                    </a>

                    <a
                      href="mailto:info@elektro-siegfried.de"
                      className="inline-flex min-h-[52px] items-center justify-center rounded-xl border border-[#d9ddd8] bg-white px-6 py-3 font-bold text-[#1f1715] transition hover:bg-[#f7f5ef]"
                    >
                      E Mail senden
                    </a>
                  </div>
                </div>
              </ScrollReveal>

              <div className="grid gap-6 sm:grid-cols-2">
                <ScrollReveal delay={0.06}>
                  <div className={softCardClass}>
                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-[1.2rem] border border-[#dce8de] bg-[#f4faf5] text-[#2f7d3b] shadow-sm">
                      <Phone className="h-6 w-6" />
                    </div>

                    <h3 className="text-lg font-semibold text-[#1f1715]">
                      Telefon
                    </h3>

                    <a
                      href="tel:+4917644481312"
                      className="mt-3 block leading-7 text-[#4e433d] transition hover:text-[#2f7d3b]"
                    >
                      0176 444 81312
                    </a>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.12}>
                  <div className={softCardClass}>
                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-[1.2rem] border border-[#dce8de] bg-[#f4faf5] text-[#2f7d3b] shadow-sm">
                      <Mail className="h-6 w-6" />
                    </div>

                    <h3 className="text-lg font-semibold text-[#1f1715]">
                      E Mail
                    </h3>

                    <a
                      href="mailto:info@elektro-siegfried.de"
                      className="mt-3 block break-all leading-7 text-[#4e433d] transition hover:text-[#2f7d3b]"
                    >
                      info@elektro-siegfried.de
                    </a>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.18}>
                  <div className={softCardClass}>
                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-[1.2rem] border border-[#dce8de] bg-[#f4faf5] text-[#2f7d3b] shadow-sm">
                      <MapPin className="h-6 w-6" />
                    </div>

                    <h3 className="text-lg font-semibold text-[#1f1715]">
                      Einsatzgebiet
                    </h3>

                    <p className="mt-3 leading-7 text-[#4e433d]">
                      München und Umgebung
                    </p>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.24}>
                  <div className={softCardClass}>
                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-[1.2rem] border border-[#dce8de] bg-[#f4faf5] text-[#2f7d3b] shadow-sm">
                      <Clock3 className="h-6 w-6" />
                    </div>

                    <h3 className="text-lg font-semibold text-[#1f1715]">
                      Rückmeldung
                    </h3>

                    <p className="mt-3 leading-7 text-[#4e433d]">
                      Schnelle und klare Abstimmung zu Ihrem Anliegen
                    </p>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* FORMULAR */}
        <section className="relative bg-white py-16 sm:py-20 lg:py-24">
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(244,250,245,0.35)_100%)]" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <ScrollReveal>
                <div className={cardClass}>
                  <p className={badgeClass}>Anfrage senden</p>

                  <h2 className="mt-5 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
                    Schreiben Sie uns
                    <span className="block text-stone-700">
                      bequem über das Formular
                    </span>
                  </h2>

                  <p className="mt-5 leading-7 text-[#4e433d]">
                    Nutzen Sie das Kontaktformular für Ihre Anfrage. Teilen Sie
                    uns kurz mit, worum es geht. Wir melden uns schnell und
                    abgestimmt bei Ihnen zurück.
                  </p>

                  <div className="mt-8 space-y-4">
                    <div className="flex items-start gap-3 rounded-2xl border border-[#e8e2d8] bg-[#fcfbf8] px-4 py-4">
                      <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#2f7d3b]" />
                      <p className="text-sm leading-6 text-[#4e433d]">
                        Saubere und persönliche Abstimmung zu Ihrem Vorhaben
                      </p>
                    </div>

                    <div className="flex items-start gap-3 rounded-2xl border border-[#e8e2d8] bg-[#fcfbf8] px-4 py-4">
                      <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-[#2f7d3b]" />
                      <p className="text-sm leading-6 text-[#4e433d]">
                        Für Privatkunden, Hausverwaltungen und gewerbliche
                        Projekte
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.08}>
                <div className={softCardClass}>
                  <form className="space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="name"
                          className="mb-2 block text-sm font-semibold text-[#1f1715]"
                        >
                          Name
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Ihr Name"
                          className="w-full rounded-xl border border-[#ddd8cf] bg-white px-4 py-3 text-[#1f1715] outline-none transition placeholder:text-[#8a7f78] focus:border-[#2f7d3b] focus:ring-4 focus:ring-[#2f7d3b]/10"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="telefon"
                          className="mb-2 block text-sm font-semibold text-[#1f1715]"
                        >
                          Telefon
                        </label>
                        <input
                          id="telefon"
                          name="telefon"
                          type="tel"
                          placeholder="Ihre Telefonnummer"
                          className="w-full rounded-xl border border-[#ddd8cf] bg-white px-4 py-3 text-[#1f1715] outline-none transition placeholder:text-[#8a7f78] focus:border-[#2f7d3b] focus:ring-4 focus:ring-[#2f7d3b]/10"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-semibold text-[#1f1715]"
                      >
                        E Mail
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Ihre E Mail Adresse"
                        className="w-full rounded-xl border border-[#ddd8cf] bg-white px-4 py-3 text-[#1f1715] outline-none transition placeholder:text-[#8a7f78] focus:border-[#2f7d3b] focus:ring-4 focus:ring-[#2f7d3b]/10"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="betreff"
                        className="mb-2 block text-sm font-semibold text-[#1f1715]"
                      >
                        Betreff
                      </label>
                      <input
                        id="betreff"
                        name="betreff"
                        type="text"
                        placeholder="Worum geht es"
                        className="w-full rounded-xl border border-[#ddd8cf] bg-white px-4 py-3 text-[#1f1715] outline-none transition placeholder:text-[#8a7f78] focus:border-[#2f7d3b] focus:ring-4 focus:ring-[#2f7d3b]/10"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="nachricht"
                        className="mb-2 block text-sm font-semibold text-[#1f1715]"
                      >
                        Nachricht
                      </label>
                      <textarea
                        id="nachricht"
                        name="nachricht"
                        rows={7}
                        placeholder="Beschreiben Sie kurz Ihr Anliegen"
                        className="w-full rounded-xl border border-[#ddd8cf] bg-white px-4 py-3 text-[#1f1715] outline-none transition placeholder:text-[#8a7f78] focus:border-[#2f7d3b] focus:ring-4 focus:ring-[#2f7d3b]/10"
                      />
                    </div>

                    <button
                      type="submit"
                      className="inline-flex min-h-[50px] w-full items-center justify-center gap-2 rounded-xl bg-[#2f7d3b] px-8 py-3 font-bold !text-white shadow-[0_12px_28px_rgba(47,125,59,0.18)] transition hover:bg-[#276a32]"
                    >
                      Nachricht senden
                      <Send className="h-4 w-4" />
                    </button>
                  </form>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ABLAUF */}
        <section className="relative bg-[#f8f5ef] py-16 sm:py-20 lg:py-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(47,125,59,0.05),transparent_24%)]" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
            <ScrollReveal className="mx-auto max-w-3xl text-center">
              <p className={badgeClass}>So läuft es ab</p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl md:text-5xl">
                Klarer Kontakt von der
                <span className="block text-stone-700">
                  ersten Anfrage bis zur Umsetzung
                </span>
              </h2>

              <p className="mt-5 text-base leading-7 text-[#6e625c] sm:text-lg sm:leading-8">
                Eine gute Abstimmung ist die Grundlage für saubere
                Elektroarbeiten. Deshalb setzen wir auf klare Kommunikation und
                strukturierte Abläufe.
              </p>
            </ScrollReveal>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <ScrollReveal>
                <div className={softCardClass}>
                  <div className="relative flex h-14 w-14 items-center justify-center rounded-[1.2rem] border border-[#dce8de] bg-[#f4faf5] text-lg font-bold text-[#2f7d3b] shadow-[0_8px_18px_rgba(47,125,59,0.10)]">
                    1
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-[#1f1715]">
                    Anfrage stellen
                  </h3>
                  <p className="mt-3 leading-7 text-[#4e433d]">
                    Sie melden sich telefonisch, per E Mail oder direkt über das
                    Kontaktformular.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.06}>
                <div className={softCardClass}>
                  <div className="relative flex h-14 w-14 items-center justify-center rounded-[1.2rem] border border-[#dce8de] bg-[#f4faf5] text-lg font-bold text-[#2f7d3b] shadow-[0_8px_18px_rgba(47,125,59,0.10)]">
                    2
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-[#1f1715]">
                    Beratung und Abstimmung
                  </h3>
                  <p className="mt-3 leading-7 text-[#4e433d]">
                    Umfang, Rahmenbedingungen und die nächsten Schritte werden
                    sauber geklärt.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.12}>
                <div className={softCardClass}>
                  <div className="relative flex h-14 w-14 items-center justify-center rounded-[1.2rem] border border-[#dce8de] bg-[#f4faf5] text-lg font-bold text-[#2f7d3b] shadow-[0_8px_18px_rgba(47,125,59,0.10)]">
                    3
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-[#1f1715]">
                    Saubere Umsetzung
                  </h3>
                  <p className="mt-3 leading-7 text-[#4e433d]">
                    Die Arbeiten werden fachgerecht, zuverlässig und sauber
                    durchgeführt.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

                {/* GOOGLE MAP */}
        <section className="relative bg-[#f8f5ef] py-16 sm:py-20 lg:py-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(47,125,59,0.05),transparent_24%)]" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
            <ScrollReveal className="mx-auto max-w-3xl text-center">
              <p className={badgeClass}>Standort</p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl md:text-5xl">
                Für Sie in
                <span className="block text-stone-700">
                  München und Umgebung im Einsatz
                </span>
              </h2>

              <p className="mt-5 text-base leading-7 text-[#6e625c] sm:text-lg sm:leading-8">
                Elektro Siegfried betreut Projekte im Raum München und Umgebung
                mit klarer Abstimmung, sauberer Ausführung und moderner
                Elektrotechnik.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.08} className="mt-12">
              <div className="overflow-hidden rounded-[2rem] border border-[#e7e1d6] bg-white p-3 shadow-[0_20px_60px_rgba(15,23,42,0.08)] sm:p-4">
                <div className="overflow-hidden rounded-[1.5rem]">
                  <iframe
                    title="Google Karte München Elektro Siegfried"
                    src="https://www.google.com/maps?q=M%C3%BCnchen&z=11&output=embed"
                    width="100%"
                    height="480"
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    className="h-[320px] w-full border-0 sm:h-[420px] lg:h-[500px]"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        
        {/* CTA */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#f3faf4] via-[#eef7f0] to-[#f8f6f0] py-16 sm:py-20 md:py-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(47,125,59,0.10),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(47,125,59,0.08),transparent_34%)]" />

          <div className="relative mx-auto max-w-4xl px-6">
            <ScrollReveal>
              <div className="rounded-[2rem] border border-[#dfe9e1] bg-white/85 px-6 py-12 text-center shadow-[0_30px_90px_rgba(0,0,0,0.08)] backdrop-blur-sm sm:px-8 md:px-14 md:py-14">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#2f7d3b]">
                  Elektro Siegfried
                </p>

                <div className="mx-auto mt-4 h-[2px] w-24 rounded-full bg-[#2f7d3b]/60" />

                <h2 className="mt-6 text-3xl font-bold tracking-tight text-[#1f1715] sm:text-4xl md:text-5xl">
                  Bereit für Ihr Projekt in
                  <span className="block text-[#4e433d]">
                    München und Umgebung?
                  </span>
                </h2>

                <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#5f544d] sm:text-lg sm:leading-8">
                  Nehmen Sie jetzt Kontakt auf und lassen Sie Ihr Vorhaben
                  sauber, zuverlässig und fachgerecht begleiten.
                </p>

                <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row sm:flex-wrap">
                  <a
                    href="tel:+4917644481312"
                    className="inline-flex min-h-[48px] w-full items-center justify-center rounded-xl bg-[#2f7d3b] px-8 py-3 font-bold !text-white shadow-[0_12px_28px_rgba(47,125,59,0.18)] transition hover:bg-[#276a32] sm:w-auto"
                  >
                    Jetzt anrufen
                  </a>

                  <a
                    href="mailto:info@elektro-siegfried.de"
                    className="inline-flex min-h-[48px] w-full items-center justify-center rounded-xl border border-[#d9ddd8] bg-white px-8 py-3 font-bold text-[#1f1715] transition hover:bg-[#f7f5ef] sm:w-auto"
                  >
                    E Mail senden
                  </a>

                  <Link
                    href="/leistungen"
                    className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl border border-[#d9ddd8] bg-white px-8 py-3 font-bold text-[#1f1715] transition hover:bg-[#f7f5ef] sm:w-auto"
                  >
                    Leistungen ansehen
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
    </>
  );
}