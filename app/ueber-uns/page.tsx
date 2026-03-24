import ScrollReveal from "../components/ScrollReveal";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Bolt,
  Hammer,
  Lightbulb,
  SunMedium,
  Flame,
  Home,
  ShieldCheck,
  ArrowRight,
  BadgeCheck,
  Sparkles,
  MapPin,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Über uns | Elektro Siegfried in München und Umgebung",
  description:
    "Erfahren Sie mehr über Elektro Siegfried. Elektromeisterbetrieb für Elektroinstallationen, Sanierung, Photovoltaik, Wallboxen, Wärmepumpen und moderne Gebäudetechnik in München und Umgebung.",
  keywords: [
    "Über uns Elektriker München",
    "Elektromeisterbetrieb München",
    "Elektro Siegfried München",
    "Elektriker München und Umgebung",
    "Elektroinstallation München",
    "Sanierung Elektrik München",
    "Photovoltaik Elektriker München",
    "Wallbox München",
    "Wärmepumpe Elektrik München",
  ],
  alternates: {
    canonical: "https://www.elektro-siegfried.de/ueber-uns",
  },
  openGraph: {
    title: "Über uns | Elektro Siegfried",
    description:
      "Elektromeisterbetrieb für saubere Elektroarbeiten, normgerechte Installation und moderne Gebäudetechnik in München und Umgebung.",
    url: "https://www.elektro-siegfried.de/ueber-uns",
    siteName: "Elektro Siegfried",
    images: ["/og-image.jpg"],
    locale: "de_DE",
    type: "website",
  },
};

const values = [
  {
    title: "Eingetragen in der Handwerkskammer",
    text: "Elektro Siegfried steht für fachgerechte Arbeiten im Elektrohandwerk und einen professionellen, verlässlichen Auftritt im Raum München.",
  },
  {
    title: "Normgerechte Arbeit nach DIN VDE",
    text: "Alle Arbeiten werden nach aktuellen technischen Standards und den geltenden DIN VDE Richtlinien umgesetzt, damit Sicherheit und Zuverlässigkeit langfristig gewährleistet bleiben.",
  },
  {
    title: "Saubere und zuverlässige Ausführung",
    text: "Wir legen Wert auf strukturierte Abläufe, klare Kommunikation und eine saubere Umsetzung vom ersten Kontakt bis zur Fertigstellung.",
  },
];

const services = [
  { name: "Elektroinstallationen", icon: Bolt },
  { name: "Sanierung und Modernisierung", icon: Hammer },
  { name: "Beleuchtung und Lichtkonzepte", icon: Lightbulb },
  { name: "Photovoltaik und Wallboxen", icon: SunMedium },
  { name: "Wärmepumpen", icon: Flame },
  { name: "Smart Home", icon: Home },
  { name: "E Check Prüfung nach DIN VDE", icon: ShieldCheck },
];

const badgeClass =
  "inline-flex rounded-full border border-[#dbe9de] bg-[#f4faf5] px-4 py-2 text-xs sm:text-sm font-semibold tracking-[0.08em] text-[#2f7d3b]";

const cardClass =
  "group relative h-full overflow-hidden rounded-[2rem] border border-[#ece7de] bg-white/95 p-6 sm:p-7 shadow-[0_14px_40px_rgba(15,23,42,0.06)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_rgba(15,23,42,0.10)]";

const softCardClass =
  "group relative h-full overflow-hidden rounded-[2rem] border border-[#ebe5da] bg-[linear-gradient(180deg,rgba(255,255,255,0.96)_0%,rgba(249,247,242,0.96)_100%)] p-6 sm:p-7 shadow-[0_14px_40px_rgba(15,23,42,0.05)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_rgba(15,23,42,0.09)]";

export default function UeberUnsPage() {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "Electrician",
    name: "Elektro Siegfried",
    image: "https://www.elektro-siegfried.de/og-image.jpg",
    url: "https://www.elektro-siegfried.de/ueber-uns",
    telephone: "+4917644481312",
    areaServed: "München und Umgebung",
    address: {
      "@type": "PostalAddress",
      addressLocality: "München",
      addressCountry: "DE",
    },
    description:
      "Elektromeisterbetrieb für Elektroinstallationen, Sanierung, Wallboxen, Photovoltaik, Wärmepumpen und moderne Gebäudetechnik in München und Umgebung.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutSchema),
        }}
      />

      <main className="min-h-screen bg-[#f9f7f2] text-[#1f1715]">
        {/* HERO / INTRO */}
        <section className="relative overflow-hidden bg-[#f8f5ef] py-16 sm:py-20 lg:py-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(47,125,59,0.06),transparent_34%)]" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
            <ScrollReveal className="mx-auto max-w-3xl text-center">
              <p className={badgeClass}>Über uns</p>

              <h1 className="mt-4 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl md:text-5xl lg:text-6xl">
                Elektromeisterbetrieb mit
                <span className="block text-stone-700">
                  klarer Haltung und sauberer Umsetzung
                </span>
              </h1>

              <p className="mt-5 text-base leading-7 text-[#6e625c] sm:text-lg sm:leading-8">
                Elektro Siegfried steht für fachgerechte Elektroarbeiten,
                zuverlässige Ausführung und moderne Lösungen für München und
                Umgebung.
              </p>
            </ScrollReveal>

            <div className="mt-12 grid items-center gap-8 lg:mt-16 lg:grid-cols-[1.02fr_0.98fr] lg:gap-12">
              <ScrollReveal>
                <div className="group relative overflow-hidden rounded-[2rem] border border-[#e9e3d8] bg-white shadow-[0_24px_70px_rgba(15,23,42,0.08)]">
                  <div className="absolute inset-0 z-10 bg-[linear-gradient(135deg,rgba(0,0,0,0.10),transparent_40%,rgba(255,255,255,0.12))]" />
                  <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_top_left,rgba(47,125,59,0.14),transparent_34%)]" />

                  <Image
                    src="/ueber-uns.jpg"
                    alt="Elektromeisterbetrieb Siegfried bei der Arbeit in München"
                    width={1200}
                    height={900}
                    priority
                    className="h-[260px] w-full object-cover transition duration-700 group-hover:scale-[1.04] sm:h-[340px] lg:h-[470px]"
                  />

                  <div className="absolute inset-x-0 bottom-0 z-20 h-28 bg-gradient-to-t from-black/20 via-black/5 to-transparent" />
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.08}>
                <div className={softCardClass}>
                  <p className="text-sm font-semibold tracking-[0.08em] text-[#2f7d3b]">
                    Elektromeisterbetrieb in München und Umgebung
                  </p>

                  <h2 className="mt-4 text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl md:text-4xl">
                    Fachgerechte Elektrotechnik
                    <span className="block text-stone-700">
                      mit Anspruch an Qualität
                    </span>
                  </h2>

                  <div className="mt-5 h-[2px] w-20 rounded-full bg-[#2f7d3b]/30" />

                  <p className="mt-6 text-[15px] leading-7 text-[#4e433d] sm:text-base md:text-lg md:leading-8">
                    Elektro Siegfried begleitet Privatkunden, Hausverwaltungen
                    und gewerbliche Auftraggeber bei elektrotechnischen
                    Projekten mit einer sauberen, strukturierten und verlässlichen
                    Arbeitsweise.
                  </p>

                  <p className="mt-5 text-[15px] leading-7 text-[#4e433d] sm:text-base md:text-lg md:leading-8">
                    Von klassischen Elektroinstallationen über Modernisierung
                    im Bestand bis hin zu Photovoltaik, Wallboxen, Wärmepumpen
                    und Smart Home Lösungen setzen wir auf technisch sinnvolle
                    Konzepte und eine fachgerechte Umsetzung.
                  </p>

                  <p className="mt-5 text-[15px] leading-7 text-[#4e433d] sm:text-base md:text-lg md:leading-8">
                    Entscheidend sind für uns klare Kommunikation, normgerechte
                    Arbeit nach aktuellen Standards und Ergebnisse, die auch
                    langfristig überzeugen.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* WERTE */}
        <section className="relative bg-white py-16 sm:py-20 lg:py-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(47,125,59,0.04),transparent_30%)]" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
            <ScrollReveal className="mx-auto max-w-3xl text-center">
              <p className={badgeClass}>Qualität und Vertrauen</p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl md:text-5xl">
                Wofür wir stehen
                <span className="block text-stone-700">
                  bei jedem einzelnen Projekt
                </span>
              </h2>

              <p className="mt-5 text-base leading-7 text-[#6e625c] sm:text-lg sm:leading-8">
                Fachgerechte Ausführung, normgerechte Arbeit und ein hoher
                Anspruch an saubere Ergebnisse prägen unsere tägliche Arbeit.
              </p>
            </ScrollReveal>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {values.map((value, index) => (
                <ScrollReveal key={value.title} delay={index * 0.06}>
                  <div className={softCardClass}>
                    <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#2f7d3b]/7 blur-2xl" />

                    <div className="relative flex h-14 w-14 items-center justify-center rounded-[1.2rem] border border-[#dce8de] bg-[#f4faf5] text-[#2f7d3b] shadow-[0_8px_18px_rgba(47,125,59,0.10)] transition-all duration-300 group-hover:scale-105 group-hover:bg-[#2f7d3b] group-hover:text-white">
                      <BadgeCheck className="h-6 w-6" />
                    </div>

                    <h3 className="relative mt-5 text-xl font-semibold text-[#1f1715]">
                      {value.title}
                    </h3>

                    <p className="relative mt-4 leading-7 text-[#4e433d]">
                      {value.text}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* LOKAL / VERTRAUEN */}
        <section className="bg-[#f8f5ef] py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <ScrollReveal>
                <div className={cardClass}>
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-[1.2rem] border border-[#dce8de] bg-[#f4faf5] text-[#2f7d3b] shadow-sm">
                    <MapPin className="h-6 w-6" />
                  </div>

                  <h2 className="text-2xl font-bold tracking-tight text-[#1f1715] sm:text-3xl">
                    Elektro Siegfried in München und Umgebung
                  </h2>

                  <p className="mt-4 leading-7 text-[#4e433d]">
                    Unser Fokus liegt auf fachgerechten Elektroarbeiten,
                    moderner Gebäudetechnik und einer sauberen Umsetzung im
                    Raum München. Dazu gehören Elektroinstallationen,
                    Modernisierung, Beleuchtung, Wallboxen, Photovoltaik,
                    Wärmepumpen und intelligente Lösungen für Gebäude.
                  </p>
                </div>
              </ScrollReveal>

              <div className="grid gap-6 sm:grid-cols-2">
                <ScrollReveal delay={0.06}>
                  <div className={softCardClass}>
                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-[1.2rem] border border-[#dce8de] bg-[#f4faf5] text-[#2f7d3b] shadow-sm">
                      <BadgeCheck className="h-6 w-6" />
                    </div>

                    <h3 className="text-lg font-semibold text-[#1f1715]">
                      Saubere Ausführung
                    </h3>

                    <p className="mt-3 leading-7 text-[#4e433d]">
                      Verlässliche Umsetzung mit klaren Abläufen, sauberer
                      Arbeit und transparenter Kommunikation.
                    </p>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.12}>
                  <div className={softCardClass}>
                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-[1.2rem] border border-[#dce8de] bg-[#f4faf5] text-[#2f7d3b] shadow-sm">
                      <Sparkles className="h-6 w-6" />
                    </div>

                    <h3 className="text-lg font-semibold text-[#1f1715]">
                      Moderne Technik
                    </h3>

                    <p className="mt-3 leading-7 text-[#4e433d]">
                      Zukunftssichere Lösungen für Energie, Komfort und
                      Funktion im Gebäude.
                    </p>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* 7 LEISTUNGSKÄSTEN */}
        <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(249,247,242,0.65)_100%)]" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
            <ScrollReveal className="mx-auto max-w-3xl text-center">
              <p className={badgeClass}>Unsere Leistungen</p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl md:text-5xl">
                Elektrotechnik für
                <span className="block text-stone-700">
                  Wohnbau, Bestand und moderne Energie
                </span>
              </h2>

              <p className="mt-5 text-base leading-7 text-[#6e625c] sm:text-lg sm:leading-8">
                Von klassischen Installationen bis zu modernen Energielösungen
                begleiten wir Projekte mit Struktur, Präzision und fachgerechter
                Ausführung.
              </p>
            </ScrollReveal>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {services.map((service, index) => {
                const Icon = service.icon;

                return (
                  <ScrollReveal key={service.name} delay={index * 0.04}>
                    <Link
                      href="/leistungen"
                      className="group relative block overflow-hidden rounded-[1.6rem] border border-[#e7e1d6] bg-white px-5 py-5 shadow-[0_12px_32px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(15,23,42,0.09)]"
                    >
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(47,125,59,0.05),transparent_28%)]" />
                      <div className="absolute left-0 top-0 h-[4px] w-full bg-[#2f7d3b]" />

                      <div className="relative flex items-center gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#eef6f0] text-[#2f7d3b] transition duration-300 group-hover:bg-[#2f7d3b] group-hover:text-white">
                          <Icon className="h-5 w-5" />
                        </div>

                        <div className="flex flex-1 items-center justify-between gap-3">
                          <span className="text-sm font-semibold leading-6 text-stone-800 sm:text-[15px]">
                            {service.name}
                          </span>

                          <ArrowRight className="h-4 w-4 shrink-0 text-[#2f7d3b] transition-transform duration-300 group-hover:translate-x-1" />
                        </div>
                      </div>
                    </Link>
                  </ScrollReveal>
                );
              })}
            </div>

            <ScrollReveal delay={0.12} className="mt-10 text-center">
              <Link
                href="/leistungen"
                className="inline-flex min-h-[48px] items-center justify-center rounded-xl bg-[#2f7d3b] px-8 py-3 font-bold !text-white shadow-[0_12px_25px_rgba(47,125,59,0.18)] transition hover:bg-[#276a32]"
              >
                Alle Leistungen ansehen
              </Link>
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
                  Kontakt
                </p>

                <div className="mx-auto mt-4 h-[2px] w-24 rounded-full bg-[#2f7d3b]/60" />

                <h2 className="mt-6 text-3xl font-bold tracking-tight text-[#1f1715] sm:text-4xl md:text-5xl">
                  Bereit für Ihr Projekt in
                  <span className="block text-[#4e433d]">
                    München und Umgebung?
                  </span>
                </h2>

                <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#5f544d] sm:text-lg sm:leading-8">
                  Elektro Siegfried begleitet Ihr Vorhaben mit klarer Struktur,
                  fachlicher Präzision und einer sauberen, zuverlässigen
                  Umsetzung.
                </p>

                <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row sm:flex-wrap">
                  <a
                    href="tel:+4917644481312"
                    className="inline-flex min-h-[48px] w-full items-center justify-center rounded-xl bg-[#2f7d3b] px-8 py-3 font-bold !text-white shadow-[0_12px_28px_rgba(47,125,59,0.18)] transition hover:bg-[#276a32] sm:w-auto"
                  >
                    Jetzt anrufen
                  </a>

                  <Link
                    href="/kontakt"
                    className="inline-flex min-h-[48px] w-full items-center justify-center rounded-xl border border-[#d9ddd8] bg-white px-8 py-3 font-bold text-[#1f1715] transition hover:bg-[#f7f5ef] sm:w-auto"
                  >
                    Kontaktformular
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