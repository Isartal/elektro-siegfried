import Hero from "./components/Hero";
import ScrollReveal from "./components/ScrollReveal";
import ServicesCanvas from "./components/ServicesCanvas";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Bolt,
  ShieldCheck,
  PhoneCall,
  MapPin,
  BadgeCheck,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Elektro Siegfried | Elektromeisterbetrieb in München und Umgebung",
  description:
    "Elektro Siegfried bietet Elektroinstallationen, Sanierung, Wallbox, Photovoltaik, Wärmepumpen und moderne Gebäudetechnik in München und Umgebung.",
  keywords: [
    "Elektriker München",
    "Elektroinstallation München",
    "Wallbox München",
    "Photovoltaik München",
    "Wärmepumpe Elektrik München",
    "Elektromeisterbetrieb München",
    "Sanierung Elektrik München",
  ],
  alternates: {
    canonical: "https://www.elektro-siegfried.de",
  },
  openGraph: {
    title: "Elektro Siegfried | Elektromeisterbetrieb in München und Umgebung",
    description:
      "Saubere Elektroarbeiten für Neubau, Sanierung und moderne Gebäudetechnik in München und Umgebung.",
    url: "https://www.elektro-siegfried.de",
    images: ["/og-image.jpg"],
    type: "website",
    locale: "de_DE",
  },
};

const serviceCards = [
  {
    title: "Elektroinstallationen",
    text: "Saubere Installationen für Altbau, Neubau und moderne Gebäude mit klaren Abläufen und zuverlässiger Ausführung.",
    href: "/leistungen",
    icon: "bolt",
    tags: ["Altbau", "Neubau"],
  },
  {
    title: "Sanierung und Modernisierung",
    text: "Erneuerung bestehender Anlagen mit strukturierter Planung und sauberer Umsetzung im Bestand.",
    href: "/leistungen",
    icon: "hammer",
    tags: ["Sanierung", "Modernisierung"],
  },
  {
    title: "Wallbox und E Mobilität",
    text: "Individuelle Ladelösungen für Zuhause und die passende elektrische Vorbereitung für moderne Mobilität.",
    href: "/leistungen",
    icon: "battery",
    tags: ["Wallbox", "E Mobilität"],
  },
  {
    title: "Photovoltaik und Energie",
    text: "Zukunftssichere Lösungen für nachhaltige Energie, mehr Effizienz und mehr Unabhängigkeit im Alltag.",
    href: "/leistungen",
    icon: "sun",
    tags: ["Photovoltaik", "Energie"],
  },
  {
    title: "Wärmepumpen",
    text: "Fachgerechte elektrische Anbindung für moderne Heizsysteme und anspruchsvolle Sanierungsprojekte.",
    href: "/leistungen",
    icon: "flame",
    tags: ["Wärmepumpen", "Integration"],
  },
  {
    title: "Smart Home und Beleuchtung",
    text: "Intelligente Steuerung und moderne Lichtkonzepte für mehr Komfort, Funktion und Atmosphäre.",
    href: "/leistungen",
    icon: "lightbulb",
    tags: ["Smart Home", "Beleuchtung"],
  },
  {
    title: "Hausverwaltungen",
    text: "Zuverlässige Betreuung von Objekten mit klarer Abstimmung, schneller Reaktion und sauberer Ausführung.",
    href: "/leistungen",
    icon: "building",
    tags: ["Objektbetreuung", "Wartung"],
  },
  {
    title: "Störung und Notdienst",
    text: "Schnelle Hilfe bei Defekten, Ausfällen und akuten Problemen vor Ort mit strukturierter Fehlersuche.",
    href: "/leistungen",
    icon: "wrench",
    tags: ["Störung", "Notdienst"],
  },
] as const;

const audienceCards = [
  {
    title: "Privatkunden",
    text: "Moderne Elektroinstallationen, Umbauten und Sanierungen mit persönlicher Betreuung und sauberer Umsetzung.",
  },
  {
    title: "Hausverwaltungen",
    text: "Zuverlässige Unterstützung bei Instandhaltung, Modernisierung und laufenden Elektroarbeiten im Objekt.",
  },
  {
    title: "Sanierung und Umbau",
    text: "Strukturierte Planung und fachgerechte Umsetzung bei Bestandsgebäuden und anspruchsvollen Umbauten.",
  },
  {
    title: "Schnelle Hilfe",
    text: "Unterstützung bei Störungen, Defekten und akuten Problemen mit klarer Fehlersuche vor Ort.",
  },
];

const processCards = [
  {
    step: "1",
    title: "Anfrage und Beratung",
    text: "Wir klären Ihr Vorhaben, den Umfang der Arbeiten und die wichtigsten Rahmenbedingungen.",
  },
  {
    step: "2",
    title: "Planung und Vorbereitung",
    text: "Die nächsten Schritte werden sauber strukturiert und fachgerecht vorbereitet.",
  },
  {
    step: "3",
    title: "Ausführung vor Ort",
    text: "Die Umsetzung erfolgt zuverlässig, sauber und mit klaren Abläufen auf der Baustelle.",
  },
  {
    step: "4",
    title: "Abschluss und Übergabe",
    text: "Nach Fertigstellung folgt die saubere Übergabe mit klarer Abstimmung zum Projektabschluss.",
  },
];

const badgeClass =
  "inline-flex rounded-full border border-[#dbe9de] bg-[#f4faf5] px-3 py-2 text-[11px] sm:px-4 sm:text-xs md:text-sm font-semibold tracking-[0.08em] text-[#2f7d3b]";

const cardClass =
  "group relative h-full overflow-hidden rounded-[1.6rem] sm:rounded-[2rem] border border-[#ece7de] bg-white/95 p-5 sm:p-6 md:p-7 shadow-[0_14px_40px_rgba(15,23,42,0.06)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_rgba(15,23,42,0.10)]";

const softCardClass =
  "group relative h-full overflow-hidden rounded-[1.6rem] sm:rounded-[2rem] border border-[#ebe5da] bg-[linear-gradient(180deg,rgba(255,255,255,0.96)_0%,rgba(249,247,242,0.96)_100%)] p-5 sm:p-6 md:p-7 shadow-[0_14px_40px_rgba(15,23,42,0.05)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_rgba(15,23,42,0.09)]";

export default function Home() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Electrician",
    name: "Elektro Siegfried",
    image: "https://www.elektro-siegfried.de/og-image.jpg",
    url: "https://www.elektro-siegfried.de",
    telephone: "+4917644481312",
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
          __html: JSON.stringify(localBusinessSchema),
        }}
      />

      <main className="min-h-screen bg-[#f9f7f2] pb-24 text-[#1f1715] md:pb-0">
        <Hero />

        {/* 3 Karten unter dem Hero */}
        <section className="relative border-b border-[#ece6dc] bg-[#fffdf9] py-8 sm:py-10 lg:py-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(47,125,59,0.05),transparent_26%)]" />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
            <div className="grid items-stretch gap-4 sm:gap-5 md:grid-cols-3">
              <ScrollReveal>
                <div
                  className={`${softCardClass} flex flex-col hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(15,23,42,0.10)]`}
                >
                  <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#2f7d3b]/8 blur-2xl transition-all duration-500 group-hover:scale-125 group-hover:bg-[#2f7d3b]/12" />
                  <div className="absolute inset-0 rounded-[1.6rem] sm:rounded-[2rem] bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(47,125,59,0.03)_100%)] opacity-0 transition duration-500 group-hover:opacity-100" />
                  <div className="relative flex h-14 sm:h-16 items-center">
                    <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-[1rem] sm:rounded-[1.2rem] border border-[#dce8de] bg-[#f4faf5] text-[#2f7d3b] shadow-[0_8px_18px_rgba(47,125,59,0.10)] transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3 group-hover:bg-[#2f7d3b] group-hover:text-white group-hover:shadow-[0_16px_35px_rgba(47,125,59,0.22)]">
                      <ShieldCheck className="h-5 w-5 sm:h-6 sm:w-6" />
                    </div>
                  </div>
                  <div className="relative flex flex-1 flex-col">
                    <p className="mt-3 sm:mt-4 text-sm font-semibold tracking-[0.08em] text-[#2f7d3b] transition duration-300 group-hover:text-[#276a32]">
                      Meisterbetrieb
                    </p>
                    <p className="mt-2 sm:mt-3 text-sm leading-6 sm:text-base sm:leading-7 text-[#4e433d]">
                      Fachgerechte Elektroarbeiten mit sauberer Ausführung und verlässlicher Abstimmung.
                    </p>
                    <div className="mt-auto pt-4" />
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.08}>
                <div
                  className={`${softCardClass} flex flex-col hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(15,23,42,0.10)]`}
                >
                  <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#2f7d3b]/8 blur-2xl transition-all duration-500 group-hover:scale-125 group-hover:bg-[#2f7d3b]/12" />
                  <div className="absolute inset-0 rounded-[1.6rem] sm:rounded-[2rem] bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(47,125,59,0.03)_100%)] opacity-0 transition duration-500 group-hover:opacity-100" />
                  <div className="relative flex h-14 sm:h-16 items-center">
                    <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-[1rem] sm:rounded-[1.2rem] border border-[#dce8de] bg-[#f4faf5] text-[#2f7d3b] shadow-[0_8px_18px_rgba(47,125,59,0.10)] transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3 group-hover:bg-[#2f7d3b] group-hover:text-white group-hover:shadow-[0_16px_35px_rgba(47,125,59,0.22)]">
                      <Bolt className="h-5 w-5 sm:h-6 sm:w-6" />
                    </div>
                  </div>
                  <div className="relative flex flex-1 flex-col">
                    <p className="mt-3 sm:mt-4 text-sm font-semibold tracking-[0.08em] text-[#2f7d3b] transition duration-300 group-hover:text-[#276a32]">
                      Moderne Lösungen
                    </p>
                    <p className="mt-2 sm:mt-3 text-sm leading-6 sm:text-base sm:leading-7 text-[#4e433d]">
                      Von klassischer Elektroinstallation bis Wallbox, Photovoltaik und smarter Gebäudetechnik.
                    </p>
                    <div className="mt-auto pt-4" />
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.16}>
                <div
                  className={`${softCardClass} flex flex-col hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(15,23,42,0.10)]`}
                >
                  <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#2f7d3b]/8 blur-2xl transition-all duration-500 group-hover:scale-125 group-hover:bg-[#2f7d3b]/12" />
                  <div className="absolute inset-0 rounded-[1.6rem] sm:rounded-[2rem] bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(47,125,59,0.03)_100%)] opacity-0 transition duration-500 group-hover:opacity-100" />
                  <div className="relative flex h-14 sm:h-16 items-center">
                    <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-[1rem] sm:rounded-[1.2rem] border border-[#dce8de] bg-[#f4faf5] text-[#2f7d3b] shadow-[0_8px_18px_rgba(47,125,59,0.10)] transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3 group-hover:bg-[#2f7d3b] group-hover:text-white group-hover:shadow-[0_16px_35px_rgba(47,125,59,0.22)]">
                      <PhoneCall className="h-5 w-5 sm:h-6 sm:w-6" />
                    </div>
                  </div>
                  <div className="relative flex flex-1 flex-col">
                    <p className="mt-3 sm:mt-4 text-sm font-semibold tracking-[0.08em] text-[#2f7d3b] transition duration-300 group-hover:text-[#276a32]">
                      München und Umgebung
                    </p>
                    <p className="mt-2 sm:mt-3 text-sm leading-6 sm:text-base sm:leading-7 text-[#4e433d]">
                      Persönliche Betreuung, klare Kommunikation und zuverlässige Umsetzung für private und gewerbliche Projekte.
                    </p>
                    <div className="mt-auto pt-4" />
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Leistungen Leinwand */}
        <section className="relative bg-white py-14 sm:py-16 lg:py-24">
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(249,247,242,0.65)_100%)]" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
            <ScrollReveal className="mx-auto max-w-3xl text-center">
              <p className={badgeClass}>Leistungsbereiche</p>
              <h2 className="mt-4 text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
                Unsere Leistungen
                <span className="block text-stone-700">
                  im Überblick
                </span>
              </h2>
              <p className="mt-4 sm:mt-5 max-w-2xl mx-auto text-sm leading-6 sm:text-base sm:leading-7 lg:text-lg lg:leading-8 text-[#6e625c]">
                Entdecken Sie unsere Leistungen für Neubau, Sanierung, Modernisierung und moderne Gebäudetechnik in München und Umgebung.
              </p>
            </ScrollReveal>

            <div className="mt-10 sm:mt-12">
              <ServicesCanvas cards={serviceCards} />
            </div>

            <ScrollReveal delay={0.12} className="mt-8 sm:mt-10 text-center">
              <Link
                href="/leistungen"
                className="inline-flex min-h-[48px] items-center justify-center rounded-xl bg-[#2f7d3b] px-6 sm:px-8 py-3 font-bold !text-white shadow-[0_12px_25px_rgba(47,125,59,0.18)] transition hover:bg-[#276a32]"
              >
                Alle Leistungen ansehen
              </Link>
            </ScrollReveal>
          </div>
        </section>

        {/* Für wen */}
        <section className="relative bg-[#f8f5ef] py-14 sm:py-16 lg:py-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(47,125,59,0.05),transparent_24%)]" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
            <ScrollReveal className="mx-auto max-w-3xl text-center">
              <p className={badgeClass}>Für wen wir arbeiten</p>
              <h2 className="mt-4 text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
                Passende Lösungen für
                <span className="block text-stone-700">
                  private und gewerbliche Projekte
                </span>
              </h2>
              <p className="mt-4 sm:mt-5 text-sm leading-6 sm:text-base sm:leading-7 lg:text-lg lg:leading-8 text-[#6e625c]">
                Ob Privatkunde, Hausverwaltung oder Sanierung im Bestand. Entscheidend sind klare Abstimmung, zuverlässige Ausführung und saubere Ergebnisse.
              </p>
            </ScrollReveal>

            <div className="mt-10 sm:mt-12 grid gap-4 sm:gap-6 md:grid-cols-2 xl:grid-cols-4">
              {audienceCards.map((item, index) => (
                <ScrollReveal key={item.title} delay={index * 0.06}>
                  <div className={cardClass}>
                    <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#2f7d3b]/7 blur-2xl" />
                    <h3 className="relative text-lg sm:text-xl font-semibold text-[#1f1715]">
                      {item.title}
                    </h3>
                    <p className="relative mt-3 sm:mt-4 text-sm leading-6 sm:text-base sm:leading-7 text-[#4e433d]">
                      {item.text}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Ablauf */}
        <section className="relative bg-white py-14 sm:py-16 lg:py-24">
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(244,250,245,0.35)_100%)]" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
            <ScrollReveal className="mx-auto max-w-3xl text-center">
              <p className={badgeClass}>So arbeiten wir</p>
              <h2 className="mt-4 text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
                Klarer Ablauf von der Anfrage
                <span className="block text-stone-700">
                  bis zur sauberen Umsetzung
                </span>
              </h2>
              <p className="mt-4 sm:mt-5 text-sm leading-6 sm:text-base sm:leading-7 lg:text-lg lg:leading-8 text-[#6e625c]">
                Ein strukturierter Projektablauf schafft Sicherheit. Deshalb legen wir Wert auf saubere Vorbereitung, klare Kommunikation und zuverlässige Ausführung.
              </p>
            </ScrollReveal>

            <div className="mt-10 sm:mt-12 grid gap-4 sm:gap-6 md:grid-cols-2 xl:grid-cols-4">
              {processCards.map((item, index) => (
                <ScrollReveal key={item.step} delay={index * 0.06}>
                  <div className={softCardClass}>
                    <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#2f7d3b]/7 blur-2xl" />
                    <div className="relative flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-[1rem] sm:rounded-[1.2rem] border border-[#dce8de] bg-[#f4faf5] text-base sm:text-lg font-bold text-[#2f7d3b] shadow-[0_8px_18px_rgba(47,125,59,0.10)] transition-all duration-300 group-hover:scale-105 group-hover:bg-[#2f7d3b] group-hover:text-white">
                      {item.step}
                    </div>
                    <h3 className="relative mt-4 sm:mt-5 text-base sm:text-lg font-semibold text-[#1f1715]">
                      {item.title}
                    </h3>
                    <p className="relative mt-2 sm:mt-3 text-sm leading-6 sm:text-base sm:leading-7 text-[#4e433d]">
                      {item.text}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* SEO / Local trust */}
        <section className="bg-[#f8f5ef] py-14 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
            <div className="grid gap-4 sm:gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <ScrollReveal>
                <div className={cardClass}>
                  <div className="mb-4 sm:mb-5 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-[1rem] sm:rounded-[1.2rem] border border-[#dce8de] bg-[#f4faf5] text-[#2f7d3b] shadow-sm">
                    <MapPin className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-[#1f1715]">
                    Elektroarbeiten in München und Umgebung
                  </h2>
                  <p className="mt-3 sm:mt-4 text-sm leading-6 sm:text-base sm:leading-7 text-[#4e433d]">
                    Elektro Siegfried begleitet Projekte im Raum München mit sauberer Ausführung, klarer Kommunikation und moderner Elektrotechnik. Dazu gehören Elektroinstallationen, Sanierung, Wallbox, Photovoltaik, Wärmepumpen und intelligente Gebäudetechnik.
                  </p>
                </div>
              </ScrollReveal>

              <div className="grid gap-4 sm:gap-6 sm:grid-cols-2">
                <ScrollReveal delay={0.06}>
                  <div className={softCardClass}>
                    <div className="mb-4 sm:mb-5 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-[1rem] sm:rounded-[1.2rem] border border-[#dce8de] bg-[#f4faf5] text-[#2f7d3b] shadow-sm">
                      <BadgeCheck className="h-5 w-5 sm:h-6 sm:w-6" />
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-[#1f1715]">
                      Saubere Ausführung
                    </h3>
                    <p className="mt-2 sm:mt-3 text-sm leading-6 sm:text-base sm:leading-7 text-[#4e433d]">
                      Verlässliche Umsetzung mit strukturierten Abläufen und klarer Abstimmung.
                    </p>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.12}>
                  <div className={softCardClass}>
                    <div className="mb-4 sm:mb-5 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-[1rem] sm:rounded-[1.2rem] border border-[#dce8de] bg-[#f4faf5] text-[#2f7d3b] shadow-sm">
                      <Sparkles className="h-5 w-5 sm:h-6 sm:w-6" />
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-[#1f1715]">
                      Moderne Technik
                    </h3>
                    <p className="mt-2 sm:mt-3 text-sm leading-6 sm:text-base sm:leading-7 text-[#4e433d]">
                      Zukunftssichere Lösungen für Energie, Komfort und Funktion im Gebäude.
                    </p>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#f3faf4] via-[#eef7f0] to-[#f8f6f0] py-14 sm:py-16 md:py-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(47,125,59,0.10),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(47,125,59,0.08),transparent_34%)]" />

          <div className="relative mx-auto max-w-4xl px-4 sm:px-6">
            <ScrollReveal>
              <div className="rounded-[1.6rem] sm:rounded-[2rem] border border-[#dfe9e1] bg-white/85 px-5 py-10 sm:px-8 sm:py-12 md:px-14 md:py-14 text-center shadow-[0_30px_90px_rgba(0,0,0,0.08)] backdrop-blur-sm">
                <p className="text-[11px] sm:text-sm font-semibold uppercase tracking-[0.24em] text-[#2f7d3b]">
                  Kontakt
                </p>

                <div className="mx-auto mt-4 h-[2px] w-20 sm:w-24 rounded-full bg-[#2f7d3b]/60" />

                <h2 className="mt-5 sm:mt-6 text-2xl font-bold tracking-tight text-[#1f1715] sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
                  Bereit für Ihr Projekt in
                  <span className="block text-[#4e433d]">
                    München und Umgebung?
                  </span>
                </h2>

                <p className="mx-auto mt-4 sm:mt-5 max-w-2xl text-sm leading-6 sm:text-base sm:leading-7 lg:text-lg lg:leading-8 text-[#5f544d]">
                  Elektro Siegfried begleitet Ihr Vorhaben mit klarer Struktur, fachlicher Präzision und einer sauberen, zuverlässigen Umsetzung.
                </p>

                <div className="mt-8 sm:mt-10 flex flex-col justify-center gap-3 sm:gap-4 sm:flex-row sm:flex-wrap">
                  <a
                    href="tel:+4917644481312"
                    className="inline-flex min-h-[48px] w-full items-center justify-center rounded-xl bg-[#2f7d3b] px-6 sm:px-8 py-3 font-bold !text-white shadow-[0_12px_28px_rgba(47,125,59,0.18)] transition hover:bg-[#276a32] sm:w-auto"
                  >
                    Jetzt anrufen
                  </a>

                  <Link
                    href="/kontakt"
                    className="inline-flex min-h-[48px] w-full items-center justify-center rounded-xl border border-[#d9ddd8] bg-white px-6 sm:px-8 py-3 font-bold text-[#1f1715] transition hover:bg-[#f7f5ef] sm:w-auto"
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