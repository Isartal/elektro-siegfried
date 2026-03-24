import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import LeistungenHeroSlider from "./LeistungenHeroSlider";
import ScrollReveal from "../components/ScrollReveal";
import {
  ShieldCheck,
  BadgeCheck,
  Zap,
  ArrowRight,
  Phone,
  Sparkles,
  CheckCircle2,
  Wrench,
  SunMedium,
  Lightbulb,
  Cpu,
  CircleCheckBig,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Leistungen | Elektro Siegfried",
  description:
    "Leistungen von Elektro Siegfried in München und Umgebung: Elektroinstallationen, Sanierung, Beleuchtung, Photovoltaik, Wallboxen, Wärmepumpen, Smart Home und E Check.",
  keywords: [
    "Leistungen Elektriker München",
    "Elektroinstallationen München",
    "Sanierung Elektrik München",
    "Wallbox München",
    "Photovoltaik München",
    "Wärmepumpe Elektrik München",
    "Smart Home München",
    "E Check München",
  ],
  alternates: {
    canonical: "https://www.elektro-siegfried.de/leistungen",
  },
  openGraph: {
    title: "Leistungen | Elektro Siegfried",
    description:
      "Fachgerechte Elektrotechnik in München und Umgebung: Elektroinstallationen, Sanierung, Photovoltaik, Wallboxen, Wärmepumpen und mehr.",
    url: "https://www.elektro-siegfried.de/leistungen",
    images: ["/og-image.jpg"],
    type: "website",
    locale: "de_DE",
  },
};

const services = [
  {
    title: "Elektroinstallationen",
    text: "Elektro Siegfried übernimmt Elektroinstallationen für Neubau, Umbau und Bestandsgebäude in München und Umgebung. Von der Planung über Leitungen, Steckdosen und Verteilungen bis zur Inbetriebnahme sorgen wir für eine fachgerechte, sichere und saubere Umsetzung.",
    image: "/leistung-elektroinstallationen.jpg",
    alt: "Elektroinstallationen in München und Umgebung",
    icon: Wrench,
  },
  {
    title: "Sanierung und Modernisierung",
    text: "Bestehende Elektroanlagen entsprechen häufig nicht mehr dem heutigen technischen Stand. Wir modernisieren Leitungen, Sicherungssysteme und Verteileranlagen strukturiert, sicher und zuverlässig für private und gewerbliche Objekte.",
    image: "/leistung-sanierung.jpg",
    alt: "Sanierung und Modernisierung elektrischer Anlagen",
    icon: Sparkles,
  },
  {
    title: "Beleuchtung und Lichtkonzepte",
    text: "Eine durchdachte Beleuchtung verbessert Komfort, Funktion und Atmosphäre. Von energieeffizienter LED Technik bis zu individuellen Lichtkonzepten planen und installieren wir moderne Beleuchtungssysteme für Innen und Außenbereiche.",
    image: "/leistung-beleuchtung.jpg",
    alt: "Beleuchtung und Lichtkonzepte für Wohn und Gewerbeobjekte",
    icon: Lightbulb,
  },
  {
    title: "Photovoltaik und Wallboxen",
    text: "Wir übernehmen die fachgerechte elektrische Einbindung von Photovoltaikanlagen und Wallboxen in bestehende elektrische Anlagen. So entsteht eine sichere und zukunftsfähige Lösung für nachhaltige Energie und moderne Mobilität.",
    image: "/leistung-photovoltaik-wallbox.jpg",
    alt: "Photovoltaik und Wallbox Installation in München",
    icon: SunMedium,
  },
  {
    title: "Wärmepumpen",
    text: "Wärmepumpensysteme benötigen eine zuverlässige elektrotechnische Anbindung. Wir übernehmen die fachgerechte Installation der elektrischen Komponenten und sorgen für eine sichere Integration in die Gebäudeinstallation.",
    image: "/leistung-waermepumpen.jpg",
    alt: "Elektrische Anbindung von Wärmepumpen",
    icon: Cpu,
  },
  {
    title: "Smart Home",
    text: "Mit modernen Smart Home Lösungen lassen sich Beleuchtung, Energieverbrauch und Gebäudefunktionen komfortabel steuern. Wir schaffen die technische Grundlage für intelligente und zukunftssichere Gebäudesteuerungen.",
    image: "/leistung-smart-home.jpg",
    alt: "Smart Home Installation in München und Umgebung",
    icon: CircleCheckBig,
  },
  {
    title: "E Check Prüfung nach DIN VDE",
    text: "Mit dem E Check prüfen wir elektrische Anlagen, Steckdosen, Sicherungen und Geräte nach aktuellen DIN VDE Richtlinien. Das erhöht die Sicherheit und hilft, Defekte oder Risiken frühzeitig zu erkennen.",
    image: "/leistung-echeck.jpg",
    alt: "E Check Prüfung elektrischer Anlagen in München",
    icon: CheckCircle2,
  },
];

const badgeClass =
  "inline-flex rounded-full border border-[#dbe9de] bg-[#f4faf5] px-4 py-2 text-xs sm:text-sm font-semibold tracking-[0.08em] text-[#2f7d3b]";

const sectionCardClass =
  "rounded-[2.2rem] border border-[#e3eee5] bg-[linear-gradient(180deg,rgba(255,255,255,0.98)_0%,rgba(244,250,245,0.92)_100%)] shadow-[0_18px_50px_rgba(15,23,42,0.045)]";

const softCardClass =
  "rounded-[1.8rem] border border-[#e4eee6] bg-white/90 shadow-[0_10px_30px_rgba(15,23,42,0.03)]";

export default function LeistungenPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Electrician",
    name: "Elektro Siegfried",
    url: "https://www.elektro-siegfried.de/leistungen",
    areaServed: "München und Umgebung",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Leistungen",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.text,
        },
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />

      <LeistungenHeroSlider />

      <section
        id="leistungen"
        className="relative overflow-hidden bg-[#fcfbf8] py-16 sm:py-20 md:py-24 lg:py-28"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(47,125,59,0.05),transparent_34%)]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <ScrollReveal className="mx-auto max-w-3xl text-center">
            <p className={badgeClass}>Unsere Leistungen</p>

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl md:text-5xl lg:text-6xl">
              Elektrotechnik für
              <span className="block text-stone-700">
                Wohnbau, Bestand und moderne Energielösungen
              </span>
            </h2>

            <p className="mt-6 text-base leading-7 text-stone-600 sm:text-lg sm:leading-8 md:text-xl">
              Wir begleiten Projekte in München und Umgebung mit fachgerechter
              Ausführung, klaren Abläufen und einem hohen Anspruch an saubere,
              nachhaltige Ergebnisse.
            </p>
          </ScrollReveal>

          <div className="mt-14 space-y-10 sm:mt-16 sm:space-y-12 md:mt-20 md:space-y-16 lg:space-y-20">
            {services.map((service, index) => {
              const Icon = service.icon;
              const imageFirst = index % 2 === 0;

              return (
                <ScrollReveal key={service.title} delay={index * 0.06}>
                  <div
                    className={`group grid items-center gap-8 ${sectionCardClass} p-4 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(15,23,42,0.07)] sm:p-5 md:gap-10 md:p-7 lg:grid-cols-2 lg:gap-14 lg:p-8`}
                  >
                    <div className={`${!imageFirst ? "lg:order-2" : ""}`}>
                      <div className="relative overflow-hidden rounded-[1.9rem] border border-white/70 bg-[#f7f5ef] shadow-[0_10px_30px_rgba(15,23,42,0.04)]">
                        <div className="absolute inset-0 z-10 bg-[linear-gradient(135deg,rgba(0,0,0,0.08),transparent_35%,rgba(255,255,255,0.10))]" />
                        <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_top_left,rgba(47,125,59,0.10),transparent_28%)]" />

                        <Image
                          src={service.image}
                          alt={service.alt}
                          width={900}
                          height={650}
                          className="h-[240px] w-full object-cover transition duration-700 group-hover:scale-[1.04] sm:h-[280px] md:h-[360px] lg:h-[420px]"
                        />

                        <div className="absolute inset-x-0 bottom-0 z-20 h-24 bg-gradient-to-t from-black/18 via-black/6 to-transparent" />
                      </div>
                    </div>

                    <div className={`px-1 md:px-2 ${!imageFirst ? "lg:order-1" : ""}`}>
                      <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-[1rem] border border-[#dce8de] bg-[#f4faf5] text-[#2f7d3b] shadow-sm transition duration-300 group-hover:scale-105 group-hover:bg-[#2f7d3b] group-hover:text-white">
                          <Icon className="h-5 w-5" />
                        </div>

                        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#2f7d3b]">
                          Leistung
                        </p>
                      </div>

                      <h3 className="mt-5 text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl md:text-4xl">
                        {service.title}
                      </h3>

                      <div className="mt-5 h-[2px] w-24 rounded-full bg-[#2f7d3b]/35" />

                      <p className="mt-6 text-base leading-7 text-stone-600 md:text-lg md:leading-8">
                        {service.text}
                      </p>

                      <div className="mt-7 flex flex-wrap gap-2">
                        <span className="rounded-full border border-[#dce8de] bg-white px-3 py-1 text-xs font-semibold text-[#2f7d3b]">
                          Fachgerecht
                        </span>
                        <span className="rounded-full border border-[#dce8de] bg-white px-3 py-1 text-xs font-semibold text-[#2f7d3b]">
                          Sauber
                        </span>
                        <span className="rounded-full border border-[#dce8de] bg-white px-3 py-1 text-xs font-semibold text-[#2f7d3b]">
                          Zuverlässig
                        </span>
                      </div>

                      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
                        <Link
                          href="/kontakt"
                          className="inline-flex min-h-[48px] w-full items-center justify-center rounded-xl bg-[#2f7d3b] px-6 py-3 text-sm font-bold !text-white shadow-[0_12px_30px_rgba(47,125,59,0.18)] transition hover:bg-[#276a32] sm:w-auto"
                        >
                          Anfrage stellen
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>

                        <a
                          href="tel:+4917644481312"
                          className="inline-flex min-h-[48px] w-full items-center justify-center rounded-xl border border-[#d9ddd8] bg-white px-6 py-3 text-sm font-bold text-[#1f1715] transition hover:bg-[#f7f5ef] sm:w-auto"
                        >
                          <Phone className="mr-2 h-4 w-4" />
                          Direkt anrufen
                        </a>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#f8faf8] py-16 sm:py-20 md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(47,125,59,0.04),transparent_28%)]" />

        <div className="relative mx-auto max-w-5xl px-6 lg:px-10">
          <ScrollReveal>
            <div className={`${sectionCardClass} p-6 sm:p-8 md:p-12 lg:p-14`}>
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center rounded-full border border-[#dbe9de] bg-[#f4faf5] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#2f7d3b]">
                  Meisterbetrieb
                </span>
              </div>

              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.24em] text-[#2f7d3b]">
                Sicherheit & Verantwortung
              </p>

              <div className="mt-4 h-[2px] w-24 rounded-full bg-[#2f7d3b]/40" />

              <h2 className="mt-6 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl md:text-4xl lg:text-5xl">
                Fachgerechte Elektrotechnik
                <span className="block text-stone-700">
                  mit Qualität, Sicherheit und Verantwortung
                </span>
              </h2>

              <p className="mt-6 max-w-3xl text-base leading-7 text-stone-600 sm:text-lg sm:leading-8 md:text-xl">
                Elektrotechnische Arbeiten erfordern höchste Sorgfalt, saubere
                Planung und eine normgerechte Umsetzung. Elektro Siegfried steht
                für zuverlässige Ausführung, aktuelle Standards und ein Ergebnis,
                das technisch wie optisch überzeugt.
              </p>

              <div className="mt-10 grid items-stretch gap-5 md:grid-cols-3">
  <ScrollReveal delay={0.04} className="h-full">
    <div
      className={`${softCardClass} flex h-full flex-col p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(15,23,42,0.06)]`}
    >
      <div className="inline-flex h-12 w-12 items-center justify-center rounded-[1rem] bg-[#eef6f0] text-[#2f7d3b] transition-all duration-300 group-hover:scale-105">
        <ShieldCheck className="h-6 w-6" />
      </div>

      <h3 className="mt-4 text-lg font-bold text-stone-900">
        Sichere Ausführung
      </h3>

      <p className="mt-3 flex-grow text-sm leading-7 text-stone-600">
        Jede Arbeit wird mit Blick auf Sicherheit, Langlebigkeit und eine
        fachgerechte elektrische Integration umgesetzt.
      </p>
    </div>
  </ScrollReveal>

  <ScrollReveal delay={0.1} className="h-full">
    <div
      className={`${softCardClass} flex h-full flex-col p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(15,23,42,0.06)]`}
    >
      <div className="inline-flex h-12 w-12 items-center justify-center rounded-[1rem] bg-[#eef6f0] text-[#2f7d3b] transition-all duration-300 group-hover:scale-105">
        <BadgeCheck className="h-6 w-6" />
      </div>

      <h3 className="mt-4 text-lg font-bold text-stone-900">
        Normgerechte Qualität
      </h3>

      <p className="mt-3 flex-grow text-sm leading-7 text-stone-600">
        Unsere Leistungen orientieren sich an aktuellen technischen
        Anforderungen und einer strukturierten, sauberen Umsetzung.
      </p>
    </div>
  </ScrollReveal>

  <ScrollReveal delay={0.16} className="h-full">
    <div
      className={`${softCardClass} flex h-full flex-col p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(15,23,42,0.06)]`}
    >
      <div className="inline-flex h-12 w-12 items-center justify-center rounded-[1rem] bg-[#eef6f0] text-[#2f7d3b] transition-all duration-300 group-hover:scale-105">
        <Zap className="h-6 w-6" />
      </div>

      <h3 className="mt-4 text-lg font-bold text-stone-900">
        Zuverlässige Projektabwicklung
      </h3>

      <p className="mt-3 flex-grow text-sm leading-7 text-stone-600">
        Von der Vorbereitung bis zur finalen Umsetzung begleiten wir Ihr
        Projekt mit klaren Abläufen und hoher Verbindlichkeit.
      </p>
    </div>
  </ScrollReveal>
</div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#f4faf5] py-16 text-[#1f1715] sm:py-20 md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(47,125,59,0.08),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(47,125,59,0.06),transparent_34%)]" />

        <div className="relative mx-auto max-w-4xl px-6">
          <ScrollReveal>
            <div className="rounded-[2.2rem] border border-[#dfe9e1] bg-white/88 px-6 py-12 text-center shadow-[0_24px_70px_rgba(0,0,0,0.06)] backdrop-blur-sm sm:px-8 md:px-14 md:py-14">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#2f7d3b]">
                Kontakt
              </p>

              <div className="mx-auto mt-4 h-[2px] w-24 rounded-full bg-[#2f7d3b]/60" />

              <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Bereit für Ihr Projekt?
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#5f544d] sm:text-lg sm:leading-8">
                Wir begleiten Elektroprojekte in München und Umgebung mit klarer
                Struktur, fachlicher Präzision und einer sauberen, zuverlässigen
                Umsetzung.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:justify-center">
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
    </>
  );
}