import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ReferenzenHero from "./ReferenzenHero";
import ScrollReveal from "../components/ScrollReveal";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Referenzen | Elektro Siegfried in München und Umgebung",
  description:
    "Referenzen von Elektro Siegfried in München und Umgebung. Einblicke in Projekte aus Elektroinstallation, Sanierung, Beleuchtung, Wallbox, Wärmepumpe und Smart Home.",
  keywords: [
    "Referenzen Elektriker München",
    "Elektro Siegfried München",
    "Elektroinstallation München",
    "Sanierung Elektrik München",
    "Wallbox München",
    "Wärmepumpe Elektriker München",
    "Smart Home München",
    "Beleuchtung München",
  ],
  alternates: {
    canonical: "https://www.elektro-siegfried.de/referenzen",
  },
  openGraph: {
    title: "Referenzen | Elektro Siegfried in München und Umgebung",
    description:
      "Einblicke in Projekte von Elektro Siegfried aus München und Umgebung: Elektroinstallation, Sanierung, Beleuchtung und moderne Energielösungen.",
    url: "https://www.elektro-siegfried.de/referenzen",
    images: ["/og-image.jpg"],
    type: "website",
    locale: "de_DE",
  },
};

const references = [
  {
    title: "Elektroinstallation im Neubau",
    category: "Elektroinstallationen",
    text: "Fachgerechte Elektroinstallation für ein Neubauprojekt in München mit sauberer Leitungsführung, Steckdosen, Schaltern und moderner Verteilertechnik. Elektro Siegfried realisiert zuverlässige Lösungen für Wohnobjekte in München und Umgebung.",
    image: "/referenz-1.jpg",
    alt: "Elektroinstallation im Neubau in München",
  },
  {
    title: "Sanierung einer Bestandsanlage",
    category: "Sanierung und Modernisierung",
    text: "Modernisierung einer älteren Elektroanlage in München mit neuer Absicherung, angepasster Verteilung und zeitgemäßer Installation. Ziel war eine sichere und zukunftsfähige elektrische Infrastruktur im Bestand.",
    image: "/referenz-2.jpg",
    alt: "Sanierung einer elektrischen Anlage in München",
  },
  {
    title: "Beleuchtung für Wohnbereiche",
    category: "Beleuchtung und Lichtkonzepte",
    text: "Installation moderner Beleuchtungslösungen für Innenräume in München mit Fokus auf Funktion, Atmosphäre und Energieeffizienz. Durchdachte Lichtplanung sorgt für ein stimmiges Ergebnis im Alltag.",
    image: "/referenz-3.jpg",
    alt: "Moderne Beleuchtung im Wohnbereich in München",
  },
  {
    title: "Wallbox fachgerecht installiert",
    category: "Photovoltaik und Wallboxen",
    text: "Montage und elektrische Anbindung einer Wallbox im Raum München für komfortables Laden im privaten Bereich. Die Installation wurde passend in die bestehende Anlage integriert und sauber umgesetzt.",
    image: "/referenz-4.jpg",
    alt: "Installierte Wallbox in München",
  },
  {
    title: "Technische Anbindung einer Wärmepumpe",
    category: "Wärmepumpen",
    text: "Elektrotechnische Einbindung einer Wärmepumpe in München inklusive passender Zuleitung und sicherer Integration in das vorhandene Gebäudesystem. So entsteht eine zuverlässige Grundlage für modernes Heizen.",
    image: "/referenz-5.jpg",
    alt: "Elektrische Anbindung einer Wärmepumpe in München",
  },
  {
    title: "Smart Home Vorbereitung und Installation",
    category: "Smart Home",
    text: "Technische Umsetzung moderner Smart Home Komponenten zur komfortablen Steuerung von Licht und weiteren Funktionen. Elektro Siegfried schafft zukunftssichere Lösungen für vernetztes Wohnen in München und Umgebung.",
    image: "/referenz-6.jpg",
    alt: "Smart Home Installation in München",
  },
];

const galleryImages = [
  { src: "/galerie-1.jpg", alt: "Referenzprojekt Elektro Siegfried in München 1" },
  { src: "/galerie-2.jpg", alt: "Referenzprojekt Elektro Siegfried in München 2" },
  { src: "/galerie-3.jpg", alt: "Referenzprojekt Elektro Siegfried in München 3" },
  { src: "/galerie-4.jpg", alt: "Referenzprojekt Elektro Siegfried in München 4" },
  { src: "/galerie-5.jpg", alt: "Referenzprojekt Elektro Siegfried in München 5" },
  { src: "/galerie-6.jpg", alt: "Referenzprojekt Elektro Siegfried in München 6" },
  { src: "/galerie-7.jpg", alt: "Referenzprojekt Elektro Siegfried in München 7" },
  { src: "/galerie-8.jpg", alt: "Referenzprojekt Elektro Siegfried in München 8" },
  { src: "/galerie-9.jpg", alt: "Referenzprojekt Elektro Siegfried in München 9" },
  { src: "/galerie-10.jpg", alt: "Referenzprojekt Elektro Siegfried in München 10" },
  { src: "/galerie-11.jpg", alt: "Referenzprojekt Elektro Siegfried in München 11" },
  { src: "/galerie-12.jpg", alt: "Referenzprojekt Elektro Siegfried in München 12" },
];

const badgeClass =
  "inline-flex rounded-full border border-[#dbe9de] bg-[#f4faf5] px-4 py-2 text-xs sm:text-sm font-semibold tracking-[0.08em] text-[#2f7d3b]";

export default function ReferenzenPage() {
  const referencesSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Referenzen | Elektro Siegfried",
    url: "https://www.elektro-siegfried.de/referenzen",
    description:
      "Referenzen und Projektbeispiele von Elektro Siegfried in München und Umgebung.",
    about: {
      "@type": "Electrician",
      name: "Elektro Siegfried",
      areaServed: "München und Umgebung",
      telephone: "+4917644481312",
      url: "https://www.elektro-siegfried.de",
      address: {
        "@type": "PostalAddress",
        addressLocality: "München",
        addressCountry: "DE",
      },
    },
    hasPart: references.map((reference) => ({
      "@type": "CreativeWork",
      name: reference.title,
      description: reference.text,
      about: reference.category,
      image: `https://www.elektro-siegfried.de${reference.image}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(referencesSchema),
        }}
      />

      <ReferenzenHero />

      <section className="relative overflow-hidden bg-[#f8f5ef] py-16 sm:py-20 md:py-24 lg:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(47,125,59,0.05),transparent_34%)]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <ScrollReveal className="mx-auto max-w-3xl text-center">
            <p className={badgeClass}>Unsere Referenzen</p>

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl md:text-5xl lg:text-6xl">
              Einblicke in Projekte
              <span className="block text-stone-700">
                mit Präzision und sauberer Umsetzung
              </span>
            </h2>

            <p className="mt-6 text-base leading-7 text-stone-600 sm:text-lg sm:leading-8 md:text-xl">
              Ob Elektroinstallation, Sanierung, Beleuchtung oder moderne
              Energielösungen. Hier finden Sie ausgewählte Einblicke in unsere
              Arbeit in München und Umgebung.
            </p>
          </ScrollReveal>

          <div className="mt-14 grid gap-6 sm:mt-16 md:grid-cols-2 xl:grid-cols-3">
            {references.map((reference, index) => (
              <ScrollReveal
                key={reference.title}
                delay={index * 0.06}
                className="h-full"
              >
                <article className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-[#ebe5da] bg-[linear-gradient(180deg,rgba(255,255,255,0.98)_0%,rgba(249,247,242,0.96)_100%)] shadow-[0_14px_40px_rgba(15,23,42,0.06)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_rgba(15,23,42,0.10)]">
                  <div className="relative overflow-hidden">
                    <div className="absolute inset-0 z-10 bg-[linear-gradient(135deg,rgba(0,0,0,0.10),transparent_40%,rgba(255,255,255,0.12))]" />
                    <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_top_left,rgba(47,125,59,0.12),transparent_30%)]" />

                    <Image
                      src={reference.image}
                      alt={reference.alt}
                      width={900}
                      height={700}
                      className="h-[230px] w-full object-cover transition duration-700 group-hover:scale-[1.06] sm:h-[260px] lg:h-[280px]"
                    />

                    <div className="absolute inset-x-0 bottom-0 z-20 h-24 bg-gradient-to-t from-black/18 via-black/6 to-transparent" />
                  </div>

                  <div className="flex h-full flex-col p-6 sm:p-7">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#2f7d3b]">
                      {reference.category}
                    </p>

                    <h3 className="mt-4 text-xl font-bold tracking-tight text-[#1f1715] sm:text-2xl">
                      {reference.title}
                    </h3>

                    <div className="mt-4 h-[2px] w-20 rounded-full bg-[#2f7d3b]/30" />

                    <p className="mt-5 flex-grow text-sm leading-7 text-[#5f544d] sm:text-base sm:leading-8">
                      {reference.text}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      <span className="rounded-full border border-[#dce8de] bg-[#f4faf5] px-3 py-1 text-xs font-semibold text-[#2f7d3b]">
                        München
                      </span>
                      <span className="rounded-full border border-[#dce8de] bg-white px-3 py-1 text-xs font-semibold text-[#2f7d3b]">
                        Referenzprojekt
                      </span>
                      <span className="rounded-full border border-[#dce8de] bg-white px-3 py-1 text-xs font-semibold text-[#2f7d3b]">
                        Saubere Umsetzung
                      </span>
                    </div>

                    <div className="mt-7">
                      <Link
                        href="/kontakt"
                        className="group inline-flex min-h-[50px] w-full items-center justify-center gap-2 rounded-2xl bg-[#2f7d3b] px-6 py-3 text-sm font-bold !text-white shadow-[0_14px_34px_rgba(47,125,59,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#276a32] hover:shadow-[0_18px_40px_rgba(47,125,59,0.28)]"
                      >
                        Anfrage stellen
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white py-16 sm:py-20 md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(47,125,59,0.04),transparent_30%)]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <ScrollReveal className="mx-auto max-w-3xl text-center">
            <p className={badgeClass}>Projekt Galerie</p>

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl md:text-5xl">
              Weitere Einblicke in unsere Arbeit
            </h2>

            <p className="mt-6 text-base leading-7 text-stone-600 sm:text-lg sm:leading-8">
              Eindrücke aus Projekten von Elektro Siegfried in München und
              Umgebung.
            </p>
          </ScrollReveal>

          <div className="mt-12 grid grid-cols-2 gap-3 sm:mt-16 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
            {galleryImages.map((image, index) => (
              <ScrollReveal key={image.src} delay={index * 0.03}>
                <div
                  className={`group relative overflow-hidden rounded-[1.5rem] border border-[#ebe5da] bg-[linear-gradient(180deg,rgba(255,255,255,0.98)_0%,rgba(249,247,242,0.96)_100%)] p-1 shadow-[0_14px_40px_rgba(15,23,42,0.05)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(15,23,42,0.08)] ${
                    index === 0 || index === 5 || index === 10
                      ? "md:col-span-2"
                      : ""
                  }`}
                >
                  <div className="relative overflow-hidden rounded-[1.2rem]">
                    <div className="absolute inset-0 z-10 bg-[linear-gradient(135deg,rgba(0,0,0,0.08),transparent_35%,rgba(255,255,255,0.10))]" />
                    <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_top_left,rgba(47,125,59,0.10),transparent_28%)]" />

                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={900}
                      height={900}
                      className={`w-full object-cover transition duration-700 group-hover:scale-[1.05] ${
                        index === 0 || index === 5 || index === 10
                          ? "h-[180px] sm:h-[220px] md:h-[260px]"
                          : "h-[180px] sm:h-[220px] md:h-[240px]"
                      }`}
                    />

                    <div className="absolute inset-x-0 bottom-0 z-20 h-20 bg-gradient-to-t from-black/15 via-black/5 to-transparent" />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
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

      <section className="bg-[#fcfbf8] py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-10">
          <ScrollReveal>
            <p className="text-base leading-7 text-stone-600 sm:text-lg sm:leading-8">
              Elektro Siegfried begleitet Projekte im Raum München, Schwabing,
              Bogenhausen, Sendling, Giesing, Pasing und Umgebung. Unsere
              Referenzen zeigen saubere Elektroinstallationen, Modernisierung,
              Beleuchtung, Wallbox Lösungen, Wärmepumpen Anbindungen und Smart
              Home Vorbereitungen für private und gewerbliche Objekte.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}