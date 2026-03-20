import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ReferenzenHero from "./ReferenzenHero";

export const metadata: Metadata = {
  title: "Referenzen | Elektro-Siegfried",
  description:
    "Referenzen von Elektromeisterbetrieb Elektro-Siegfried in München und Umgebung. Einblicke in Projekte aus Elektroinstallation, Sanierung, Beleuchtung und modernen Energielösungen.",
};

const references = [
  {
    title: "Elektroinstallation im Neubau",
    category: "Elektroinstallationen",
    text: "Fachgerechte Elektroinstallation für ein Neubauprojekt mit sauberer Leitungsführung, Steckdosen, Schaltern und moderner Verteilertechnik. Elektromeisterbetrieb Elektro-Siegfried realisiert zuverlässige Lösungen für Wohnobjekte in München und Umgebung.",
    image: "/referenz-1.jpg",
    alt: "Elektroinstallation im Neubau in München",
  },
  {
    title: "Sanierung einer Bestandsanlage",
    category: "Sanierung und Modernisierung",
    text: "Modernisierung einer älteren Elektroanlage mit neuer Absicherung, angepasster Verteilung und zeitgemäßer Installation. Ziel war eine sichere und zukunftsfähige elektrische Infrastruktur im Bestand.",
    image: "/referenz-2.jpg",
    alt: "Sanierung einer elektrischen Anlage",
  },
  {
    title: "Beleuchtung für Wohnbereiche",
    category: "Beleuchtung und Lichtkonzepte",
    text: "Installation moderner Beleuchtungslösungen für Innenräume mit Fokus auf Funktion, Atmosphäre und Energieeffizienz. Durchdachte Lichtplanung sorgt für ein stimmiges Ergebnis im Alltag.",
    image: "/referenz-3.jpg",
    alt: "Moderne Beleuchtung im Wohnbereich",
  },
  {
    title: "Wallbox fachgerecht installiert",
    category: "Photovoltaik und Wallboxen",
    text: "Montage und elektrische Anbindung einer Wallbox für komfortables Laden im privaten Bereich. Die Installation wurde passend in die bestehende Anlage integriert und sauber umgesetzt.",
    image: "/referenz-4.jpg",
    alt: "Installierte Wallbox in München",
  },
  {
    title: "Technische Anbindung einer Wärmepumpe",
    category: "Wärmepumpen",
    text: "Elektrotechnische Einbindung einer Wärmepumpe inklusive passender Zuleitung und sicherer Integration in das vorhandene Gebäudesystem. So entsteht eine zuverlässige Grundlage für modernes Heizen.",
    image: "/referenz-5.jpg",
    alt: "Elektrische Anbindung einer Wärmepumpe",
  },
  {
    title: "Smart Home Vorbereitung und Installation",
    category: "Smart Home",
    text: "Technische Umsetzung moderner Smart Home Komponenten zur komfortablen Steuerung von Licht und weiteren Funktionen. Elektromeisterbetrieb Elektro-Siegfried schafft zukunftssichere Lösungen für vernetztes Wohnen.",
    image: "/referenz-6.jpg",
    alt: "Smart Home Installation in München",
  },
];

const galleryImages = [
  { src: "/galerie-1.jpg", alt: "Referenzprojekt Elektromeisterbetrieb Siegfried 1" },
  { src: "/galerie-2.jpg", alt: "Referenzprojekt Elektromeisterbetrieb Siegfried 2" },
  { src: "/galerie-3.jpg", alt: "Referenzprojekt Elektromeisterbetrieb Siegfried 3" },
  { src: "/galerie-4.jpg", alt: "Referenzprojekt Elektromeisterbetrieb Siegfried 4" },
  { src: "/galerie-5.jpg", alt: "Referenzprojekt Elektromeisterbetrieb Siegfried 5" },
  { src: "/galerie-6.jpg", alt: "Referenzprojekt Elektromeisterbetrieb Siegfried 6" },
  { src: "/galerie-7.jpg", alt: "Referenzprojekt Elektromeisterbetrieb Siegfried 7" },
  { src: "/galerie-8.jpg", alt: "Referenzprojekt Elektromeisterbetrieb Siegfried 8" },
  { src: "/galerie-9.jpg", alt: "Referenzprojekt Elektromeisterbetrieb Siegfried 9" },
  { src: "/galerie-10.jpg", alt: "Referenzprojekt Elektromeisterbetrieb Siegfried 10" },
  { src: "/galerie-11.jpg", alt: "Referenzprojekt Elektromeisterbetrieb Siegfried 11" },
  { src: "/galerie-12.jpg", alt: "Referenzprojekt Elektromeisterbetrieb Siegfried 12" },
];

export default function ReferenzenPage() {
  return (
    <>
      <ReferenzenHero />

      <section className="relative overflow-hidden bg-[#f7f4ee] py-16 sm:py-20 md:py-28 lg:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(47,125,59,0.06),transparent_35%)]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#2f7d3b]">
              Unsere Referenzen
            </p>

            <div className="mx-auto mt-4 h-[2px] w-28 rounded-full bg-[#2f7d3b]" />

            <h2 className="mt-6 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl md:text-5xl lg:text-6xl">
              Einblicke in Projekte
              <span className="block text-stone-700">
                mit Anspruch, Präzision und sauberer Umsetzung
              </span>
            </h2>

            <p className="mt-6 text-base leading-7 text-stone-600 sm:text-lg sm:leading-8 md:text-xl">
              Ob Elektroinstallation, Sanierung, Beleuchtung oder moderne
              Energielösungen. Hier finden Sie ausgewählte Einblicke in unsere
              Arbeit in München und Umgebung.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:mt-16 md:grid-cols-2 xl:grid-cols-3">
            {references.map((reference) => (
              <article
                key={reference.title}
                className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-stone-200/80 bg-white/90 shadow-[0_18px_50px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(15,23,42,0.1)]"
              >
                <div className="relative overflow-hidden">
                  <div className="absolute inset-0 z-10 bg-gradient-to-tr from-black/10 via-transparent to-white/10" />
                  <Image
                    src={reference.image}
                    alt={reference.alt}
                    width={900}
                    height={700}
                    className="h-[230px] w-full object-cover transition duration-700 group-hover:scale-[1.05] sm:h-[260px] lg:h-[280px]"
                  />
                </div>

                <div className="flex h-full flex-col p-5 sm:p-6 md:p-7">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2f7d3b]">
                    {reference.category}
                  </p>

                  <h3 className="mt-4 text-xl font-bold tracking-tight text-stone-900 sm:text-2xl md:text-[1.75rem]">
                    {reference.title}
                  </h3>

                  <div className="mt-5 h-[1px] w-20 bg-stone-300" />

                  <p className="mt-5 text-base leading-7 text-stone-600">
                    {reference.text}
                  </p>

                  <div className="mt-auto pt-7">
                    <Link
                      href="/kontakt"
                      className="inline-flex min-h-[48px] w-full items-center justify-center rounded-xl bg-[#2f7d3b] px-6 py-3 text-sm font-bold !text-white shadow-[0_12px_30px_rgba(47,125,59,0.18)] transition hover:bg-[#256531] hover:shadow-[0_16px_36px_rgba(47,125,59,0.24)] sm:w-auto"
                    >
                      Anfrage stellen
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white py-16 sm:py-20 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(47,125,59,0.04),transparent_30%)]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#2f7d3b]">
              Projekt Galerie
            </p>

            <div className="mx-auto mt-4 h-[2px] w-24 rounded-full bg-[#2f7d3b]" />

            <h2 className="mt-6 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl md:text-5xl">
              Weitere Einblicke in unsere Arbeit
            </h2>

            <p className="mt-6 text-base leading-7 text-stone-600 sm:text-lg sm:leading-8">
              Eindrücke aus Projekten von Elektromeisterbetrieb Elektro-Siegfried
              in München & Umgebung.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-3 sm:mt-16 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
            {galleryImages.map((image, index) => (
              <div
                key={image.src}
                className={`group relative overflow-hidden rounded-[1.25rem] sm:rounded-[1.5rem] ${
                  index === 0 || index === 5 || index === 10
                    ? "md:col-span-2"
                    : ""
                }`}
              >
                <div className="absolute inset-0 z-10 bg-gradient-to-tr from-black/10 via-transparent to-white/10" />
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={900}
                  height={900}
                  className={`w-full object-cover transition duration-700 group-hover:scale-[1.04] ${
                    index === 0 || index === 5 || index === 10
                      ? "h-[180px] sm:h-[220px] md:h-[260px]"
                      : "h-[180px] sm:h-[220px] md:h-[240px]"
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#1f4f28] py-16 text-white sm:py-20 md:py-24 lg:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.14),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_34%)]" />

        <div className="relative mx-auto max-w-4xl px-6">
          <div className="rounded-[2rem] border border-white/15 bg-white/10 px-6 py-12 text-center shadow-[0_30px_90px_rgba(0,0,0,0.22)] backdrop-blur-sm sm:px-8 md:px-14 md:py-14">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/85">
              Kontakt
            </p>

            <div className="mx-auto mt-4 h-[2px] w-24 rounded-full bg-white/70" />

            <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Bereit für Ihr Projekt?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
              Wir begleiten Elektroprojekte in München und Umgebung mit klarer
              Struktur, fachlicher Präzision und einer sauberen, zuverlässigen
              Umsetzung.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:justify-center">
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
    </>
  );
}