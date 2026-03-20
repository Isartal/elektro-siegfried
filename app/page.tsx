import Hero from "./components/Hero";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Bolt,
  Hammer,
  BatteryCharging,
  SunMedium,
  Flame,
  Lightbulb,
  Building2,
  Wrench,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Elektro Siegfried | Elektromeisterbetrieb in München und Umgebung",
  description:
    "Elektro Siegfried bietet Elektroinstallationen, Sanierung, Beleuchtung, Wallbox, Photovoltaik, Wärmepumpen und Smart Home in München und Umgebung.",
  alternates: {
    canonical: "https://www.elektro-siegfried.de",
  },
  openGraph: {
    title: "Elektro Siegfried | Elektromeisterbetrieb in München und Umgebung",
    description:
      "Fachgerechte Elektroarbeiten für Neubau, Umbau und Sanierung in München und Umgebung.",
    url: "https://www.elektro-siegfried.de",
    images: ["/og-image.jpg"],
  },
};

const serviceCards = [
  {
    title: "Elektroinstallationen",
    text: "Saubere Installationen für Altbau, Neubau und moderne Gebäude.",
    href: "/leistungen",
    icon: Bolt,
    tags: ["Altbau", "Neubau"],
  },
  {
    title: "Sanierung und Modernisierung",
    text: "Erneuerung bestehender Anlagen mit klarer Struktur und zuverlässiger Umsetzung.",
    href: "/leistungen",
    icon: Hammer,
    tags: ["Sanierung", "Modernisierung"],
  },
  {
    title: "Wallbox und E Mobilität",
    text: "Individuelle Ladelösungen für Ihr Zuhause und eine zukunftssichere Energieversorgung.",
    href: "/leistungen",
    icon: BatteryCharging,
    tags: ["Wallbox", "E Mobilität"],
  },
  {
    title: "Photovoltaik und Energie",
    text: "Effiziente Lösungen für nachhaltige Energie und mehr Unabhängigkeit.",
    href: "/leistungen",
    icon: SunMedium,
    tags: ["Photovoltaik", "Energie"],
  },
  {
    title: "Wärmepumpen",
    text: "Fachgerechte elektrische Anbindung für moderne Heizsysteme und Sanierungen.",
    href: "/leistungen",
    icon: Flame,
    tags: ["Wärmepumpen", "Integration"],
  },
  {
    title: "Smart Home und Beleuchtung",
    text: "Intelligente Steuerung und moderne Lichtkonzepte für mehr Komfort im Alltag.",
    href: "/leistungen",
    icon: Lightbulb,
    tags: ["Smart Home", "Beleuchtung"],
  },
  {
    title: "Hausverwaltungen",
    text: "Zuverlässige Betreuung von Objekten mit klarer Abstimmung und schneller Umsetzung.",
    href: "/leistungen",
    icon: Building2,
    tags: ["Objektbetreuung", "Wartung"],
  },
  {
    title: "Störung und Notdienst",
    text: "Schnelle Hilfe bei Ausfällen, Defekten und akuten Problemen vor Ort.",
    href: "/leistungen",
    icon: Wrench,
    tags: ["Störung", "Notdienst"],
  },
];

const badgeClass =
  "inline-flex rounded-full border border-[#b7d9bf] bg-[#eef7f0] px-4 py-2 text-xs sm:text-sm font-semibold tracking-[0.05em] text-[#2f7d3b]";

const lineCardClass =
  "relative overflow-hidden rounded-2xl border border-[#e7e2d8] bg-white p-5 sm:p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md before:absolute before:left-0 before:top-0 before:h-[4px] before:w-full before:bg-[#2f7d3b]";

const lineCardSoftClass =
  "relative overflow-hidden rounded-2xl border border-[#e7e2d8] bg-[#f8f6f0] p-5 sm:p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md before:absolute before:left-0 before:top-0 before:h-[4px] before:w-full before:bg-[#2f7d3b]";

export default function Home() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Electrician",
    name: "Elektro Siegfried",
    image: "https://www.elektro-siegfried.de/og-image.jpg",
    url: "https://www.elektro-siegfried.de",
    telephone: "+4917644481312",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />

      <main className="min-h-screen bg-[#f8f6f0] pb-24 text-[#1f1715] md:pb-0">
        <Hero />

        {/* Intro / Schnellvertrauen */}
        <section className="border-b border-[#e7e2d8] bg-white py-10">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid gap-4 md:grid-cols-3">
              <div className={lineCardSoftClass}>
                <p className="mb-2 text-sm font-semibold tracking-[0.08em] text-[#2f7d3b]">
                  Anspruch
                </p>
                <p className="text-[#3c342f]">
                  Saubere Ausführung mit klaren Abläufen und verlässlicher
                  Abstimmung.
                </p>
              </div>

              <div className={lineCardSoftClass}>
                <p className="mb-2 text-sm font-semibold tracking-[0.08em] text-[#2f7d3b]">
                  Region
                </p>
                <p className="text-[#3c342f]">
                  Elektroarbeiten in München und Umgebung mit persönlichem
                  Ansprechpartner.
                </p>
              </div>

              <div className={lineCardSoftClass}>
                <p className="mb-2 text-sm font-semibold tracking-[0.08em] text-[#2f7d3b]">
                  Zusammenarbeit
                </p>
                <p className="text-[#3c342f]">
                  Strukturierte Unterstützung für Neubau, Umbau, Sanierung und
                  Modernisierung.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Leistungsbereiche */}
        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="mx-auto max-w-3xl text-center">
              <p className={badgeClass}>Leistungsbereiche</p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl md:text-5xl">
                Strukturierte Lösungen
                <span className="block text-stone-700">
                  für moderne Elektrotechnik
                </span>
              </h2>

              <p className="mt-5 text-base leading-7 text-[#6e625c] sm:text-lg sm:leading-8">
                Elektro Siegfried verbindet klassische Elektroarbeiten mit
                modernen Lösungen für Energie, Komfort und zukunftssichere
                Gebäudetechnik.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {serviceCards.map((card) => {
                const Icon = card.icon;

                return (
                  <Link
                    key={card.title}
                    href={card.href}
                    className="group relative flex h-full min-h-[320px] flex-col overflow-hidden rounded-2xl border border-[#e7e2d8] bg-[#f3efe6] p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:p-6 md:min-h-[360px]"
                  >
                    <div className="absolute left-0 top-0 h-[4px] w-full bg-[#2f7d3b]" />

                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white text-[#2f7d3b] shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:bg-[#2f7d3b] group-hover:text-white">
                      <Icon className="h-6 w-6" />
                    </div>

                    <div className="mt-6 flex flex-1 flex-col">
                      <h3 className="text-xl font-semibold leading-snug text-[#1f1715]">
                        {card.title}
                      </h3>

                      <p className="mt-4 text-sm leading-7 text-[#4e433d]">
                        {card.text}
                      </p>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {card.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-[#d8e8dc] bg-[#fbfcfb] px-3 py-1 text-xs font-semibold text-[#2f7d3b]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="mt-auto pt-6 text-sm font-semibold text-[#2f7d3b] transition-transform duration-300 group-hover:translate-x-1">
                        Mehr erfahren →
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Für wen wir arbeiten */}
        <section className="bg-[#f3f0e8] py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="mx-auto max-w-3xl text-center">
              <p className={badgeClass}>Für wen wir arbeiten</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl md:text-5xl">
                Passende Lösungen
                <span className="block text-stone-700">
                  für unterschiedliche Projekte
                </span>
              </h2>
              <p className="mt-5 text-base leading-7 text-[#6e625c] sm:text-lg sm:leading-8">
                Wir unterstützen private Auftraggeber, Hausverwaltungen,
                Sanierungen im Bestand sowie Bauprojekte, bei denen
                zuverlässige Elektroarbeiten, saubere Abstimmung und schnelle
                Hilfe gefragt sind.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              <div className={lineCardClass}>
                <h3 className="text-xl font-semibold text-[#1f1715]">
                  Privatkunden
                </h3>
                <p className="mt-4 text-[#3c342f]">
                  Ob Modernisierung, Umbau oder neue Elektroinstallation: Wir
                  begleiten private Projekte mit klarer Kommunikation und
                  sauberer Ausführung.
                </p>
              </div>

              <div className={lineCardClass}>
                <h3 className="text-xl font-semibold text-[#1f1715]">
                  Hausverwaltungen
                </h3>
                <p className="mt-4 text-[#3c342f]">
                  Für Hausverwaltungen übernehmen wir Elektroarbeiten,
                  Instandhaltung, Modernisierung und eine saubere Abstimmung bei
                  laufenden Objekten.
                </p>
              </div>

              <div className={lineCardClass}>
                <h3 className="text-xl font-semibold text-[#1f1715]">
                  Sanierung & Umbau
                </h3>
                <p className="mt-4 text-[#3c342f]">
                  Gerade im Bestand sind strukturierte Planung und zuverlässige
                  Umsetzung besonders wichtig. Wir begleiten Sanierung und Umbau
                  fachgerecht und lösungsorientiert.
                </p>
              </div>

              <div className={lineCardClass}>
                <h3 className="text-xl font-semibold text-[#1f1715]">
                  Notdienst & schnelle Hilfe
                </h3>
                <p className="mt-4 text-[#3c342f]">
                  Bei Störungen, Defekten oder akuten Problemen unterstützen wir
                  schnell, zuverlässig und mit klarer Fehlersuche.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* So arbeiten wir */}
        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="mx-auto max-w-3xl text-center">
              <p className={badgeClass}>So arbeiten wir</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl md:text-5xl">
                Klar strukturierte Abläufe
                <span className="block text-stone-700">
                  von der Anfrage bis zur Umsetzung
                </span>
              </h2>
              <p className="mt-5 text-base leading-7 text-[#6e625c] sm:text-lg sm:leading-8">
                Ein sauberer Projektablauf sorgt für Planungssicherheit. Deshalb
                legen wir Wert auf klare Abstimmung, fachgerechte Vorbereitung
                und zuverlässige Ausführung.
              </p>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
              <div className={lineCardSoftClass}>
                <div className="text-2xl font-bold text-[#2f7d3b]">1</div>
                <h3 className="mt-3 text-lg font-semibold text-[#1f1715]">
                  Anfrage & Beratung
                </h3>
                <p className="mt-2 text-[#3c342f]">
                  Zu Beginn klären wir Ihr Vorhaben, den Umfang der Arbeiten und
                  die wichtigsten Rahmenbedingungen.
                </p>
              </div>

              <div className={lineCardSoftClass}>
                <div className="text-2xl font-bold text-[#2f7d3b]">2</div>
                <h3 className="mt-3 text-lg font-semibold text-[#1f1715]">
                  Planung & Vorbereitung
                </h3>
                <p className="mt-2 text-[#3c342f]">
                  Anschließend strukturieren wir die nächsten Schritte und
                  bereiten die Umsetzung fachgerecht und effizient vor.
                </p>
              </div>

              <div className={lineCardSoftClass}>
                <div className="text-2xl font-bold text-[#2f7d3b]">3</div>
                <h3 className="mt-3 text-lg font-semibold text-[#1f1715]">
                  Ausführung vor Ort
                </h3>
                <p className="mt-2 text-[#3c342f]">
                  Die Arbeiten werden sauber, zuverlässig und mit Blick auf
                  klare Abläufe auf der Baustelle umgesetzt.
                </p>
              </div>

              <div className={lineCardSoftClass}>
                <div className="text-2xl font-bold text-[#2f7d3b]">4</div>
                <h3 className="mt-3 text-lg font-semibold text-[#1f1715]">
                  Abschluss & Übergabe
                </h3>
                <p className="mt-2 text-[#3c342f]">
                  Nach Fertigstellung erfolgt die saubere Übergabe und eine
                  klare Abstimmung zum Abschluss des Projekts.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Warum Elektro Siegfried */}
        <section className="relative overflow-hidden bg-[#f3f0e8] py-16 sm:py-20">
          <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
            <div className="h-full w-full bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]" />
          </div>

          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="mx-auto max-w-3xl text-center">
              <p className={badgeClass}>Warum ELEKTRO SIEGFRIED</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl md:text-5xl">
                Fachgerechte Elektrotechnik
                <span className="block text-stone-700">
                  mit klarer Struktur
                </span>
              </h2>
              <p className="mt-5 text-base leading-7 text-[#6e625c] sm:text-lg sm:leading-8">
                Klare Abläufe, saubere Umsetzung und zuverlässige
                Projektbegleitung stehen bei uns im Mittelpunkt.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              <div className={lineCardClass}>
                <h3 className="text-lg font-semibold text-[#1f1715]">
                  Strukturierte Projektabwicklung
                </h3>
                <p className="mt-3 text-[#3c342f]">
                  Von Planung bis Umsetzung sorgen wir für klare Abläufe und
                  transparente Kommunikation.
                </p>
              </div>

              <div className={lineCardClass}>
                <h3 className="text-lg font-semibold text-[#1f1715]">
                  Moderne Elektrotechnik
                </h3>
                <p className="mt-3 text-[#3c342f]">
                  Neben klassischen Elektroarbeiten begleiten wir auch moderne
                  Lösungen wie Wallbox, Photovoltaik, Wärmepumpen und Smart
                  Home.
                </p>
              </div>

              <div className={lineCardClass}>
                <h3 className="text-lg font-semibold text-[#1f1715]">
                  Zuverlässigkeit
                </h3>
                <p className="mt-3 text-[#3c342f]">
                  Termine, Qualität und saubere Ausführung stehen im Fokus jeder
                  Projektphase.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Vertrauen */}
        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="mx-auto max-w-3xl text-center">
              <p className={badgeClass}>Vertrauen</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl md:text-5xl">
                Zuverlässige Umsetzung
                <span className="block text-stone-700">
                  für Elektroprojekte
                </span>
              </h2>
              <p className="mt-5 text-base leading-7 text-[#6e625c] sm:text-lg sm:leading-8">
                Saubere Ausführung, strukturierte Abläufe und klare
                Kommunikation stehen bei jedem Projekt im Mittelpunkt.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              <div className={lineCardSoftClass}>
                <p className="text-[#3c342f]">
                  Saubere Arbeitsweise, verlässliche Terminabstimmung und klare
                  Kommunikation sind die Grundlage professioneller
                  Elektroarbeiten.
                </p>
              </div>

              <div className={lineCardSoftClass}>
                <p className="text-[#3c342f]">
                  Wir arbeiten strukturiert und lösungsorientiert, damit
                  Baustellen und Umbauten möglichst reibungslos umgesetzt
                  werden.
                </p>
              </div>

              <div className={lineCardSoftClass}>
                <p className="text-[#3c342f]">
                  Elektro Siegfried steht für verlässliche Unterstützung in den
                  Bereichen Elektroinstallation, Sanierung und moderne
                  Gebäudetechnik in München und Umgebung.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Einsatzgebiet */}
        <section className="bg-[#f3f0e8] py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="mx-auto max-w-3xl text-center">
              <p className={badgeClass}>Einsatzgebiet</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl md:text-5xl">
                Elektrotechnik
                <span className="block text-stone-700">
                  in München und Umgebung
                </span>
              </h2>
              <p className="mt-5 text-base leading-7 text-[#6e625c] sm:text-lg sm:leading-8">
                Wir begleiten Projekte im Raum München und in umliegenden
                Regionen mit klarer Struktur und zuverlässiger Ausführung.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              <div className={lineCardClass}>
                <h3 className="text-lg font-semibold text-[#1f1715]">
                  München
                </h3>
                <p className="mt-3 text-[#3c342f]">
                  Projekte im Stadtgebiet mit Fokus auf saubere Ausführung und
                  verlässliche Abläufe.
                </p>
              </div>

              <div className={lineCardClass}>
                <h3 className="text-lg font-semibold text-[#1f1715]">
                  Umland
                </h3>
                <p className="mt-3 text-[#3c342f]">
                  Je nach Projektumfang unterstützen wir auch Bauvorhaben in
                  umliegenden Regionen rund um München.
                </p>
              </div>

              <div className={lineCardClass}>
                <h3 className="text-lg font-semibold text-[#1f1715]">
                  Sanierung & Umbau
                </h3>
                <p className="mt-3 text-[#3c342f]">
                  Besonders bei Bestandsobjekten sind strukturierte Vorbereitung
                  und saubere Abstimmung entscheidend.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden bg-[#1f4f28] py-20 text-white sm:py-24 md:py-28">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.14),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_34%)]" />

          <div className="relative mx-auto max-w-4xl px-6">
            <div className="rounded-[2rem] border border-white/15 bg-white/10 px-6 py-12 text-center shadow-[0_30px_90px_rgba(0,0,0,0.22)] backdrop-blur-sm sm:px-8 md:px-14 md:py-14">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/85">
                Kontakt
              </p>

              <div className="mx-auto mt-4 h-[2px] w-24 rounded-full bg-white/70" />

              <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
                Bereit für
                <span className="block text-white/80">Ihr Projekt?</span>
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
                Wir begleiten Elektroprojekte in München und Umgebung mit klarer
                Struktur, fachlicher Präzision und einer sauberen,
                zuverlässigen Umsetzung.
              </p>

              <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row sm:flex-wrap">
                <a
                  href="tel:+4917644481312"
                  className="inline-flex min-h-[48px] w-full items-center justify-center rounded-xl bg-white px-8 py-3 font-bold !text-[#1f4f28] shadow-[0_12px_30px_rgba(255,255,255,0.18)] transition hover:bg-[#f3f0e8] sm:w-auto"
                >
                  Jetzt anrufen
                </a>

                <Link
                  href="/kontakt"
                  className="inline-flex min-h-[48px] w-full items-center justify-center rounded-xl border border-white/60 px-8 py-3 font-bold text-white transition hover:bg-white/10 sm:w-auto"
                >
                  Kontaktformular
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile Call Button */}
        <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
          <a
            href="tel:+4917644481312"
            className="block bg-[#2f7d3b] py-4 text-center text-lg font-semibold text-white shadow-lg"
          >
            📞 Jetzt anrufen: 0176 444 81312
          </a>
        </div>
      </main>
    </>
  );
}