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
} from "lucide-react";

export const metadata: Metadata = {
  title: "Über uns | Elektro Siegfried",
  description:
    "Elektromeisterbetrieb Siegfried in München und Umgebung. Fachgerechte Elektroarbeiten, normgerechte Installation nach DIN VDE und zuverlässige Umsetzung.",
};

const values = [
  {
    title: "Eingetragen in der Handwerkskammer",
    text: "Elektromeisterbetrieb Siegfried ist in der Handwerkskammer für München und Oberbayern eingetragen und steht für fachgerechte Arbeiten im Elektrohandwerk.",
  },
  {
    title: "Normgerechte Arbeit nach DIN VDE",
    text: "Alle Arbeiten werden nach aktuellen technischen Standards und den geltenden DIN VDE Richtlinien umgesetzt, damit Sicherheit und Zuverlässigkeit langfristig gewährleistet sind.",
  },
  {
    title: "Saubere und zuverlässige Ausführung",
    text: "Wir legen großen Wert auf strukturierte Abläufe, saubere Arbeit und eine zuverlässige Umsetzung vom ersten Kontakt bis zur Fertigstellung.",
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
  "inline-flex rounded-full border border-[#b7d9bf] bg-[#eef7f0] px-4 py-2 text-xs sm:text-sm font-semibold tracking-[0.05em] text-[#2f7d3b]";

const lineCardSoftClass =
  "relative overflow-hidden rounded-2xl border border-[#e7e2d8] bg-[#f8f6f0] p-5 sm:p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md before:absolute before:left-0 before:top-0 before:h-[4px] before:w-full before:bg-[#2f7d3b]";

export default function UeberUnsPage() {
  return (
    <>
      <section className="bg-[#f8f6f0] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#2f7d3b] sm:text-sm md:text-base">
              Elektromeisterbetrieb
            </p>

            <h1 className="mt-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl md:text-5xl lg:text-6xl">
              <span className="tracking-[0.06em] sm:tracking-wider">
                ELEKTRO
              </span>

              <span className="flex items-center justify-center">
                <svg
                  className="h-9 w-7 animate-lightning drop-shadow-md sm:h-10 sm:w-8 md:h-12 md:w-10 lg:h-14 lg:w-12"
                  viewBox="0 0 24 24"
                  fill="#2f7d3b"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M14 2L5 12h5l-1 10 10-12h-5l0-8z" />
                </svg>
              </span>

              <span className="tracking-[0.06em] sm:tracking-wider">
                SIEGFRIED
              </span>
            </h1>

            <div className="mx-auto mt-5 h-[3px] w-[170px] rounded-full bg-[#2f7d3b] sm:w-[240px] md:w-[340px]" />
          </div>

          <div className="mt-12 grid items-center gap-10 sm:mt-14 md:gap-12 lg:mt-16 lg:grid-cols-2">
            <div className="group relative overflow-hidden rounded-[2rem] border border-stone-200/80 bg-white shadow-[0_24px_70px_rgba(15,23,42,0.08)]">
              <div className="absolute inset-0 z-10 bg-gradient-to-tr from-black/20 via-transparent to-white/10" />
              <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_top_left,rgba(47,125,59,0.16),transparent_35%)]" />
              <Image
                src="/ueber-uns.jpg"
                alt="Elektromeisterbetrieb Siegfried bei der Arbeit"
                width={900}
                height={700}
                className="h-[260px] w-full object-cover transition duration-700 group-hover:scale-[1.04] sm:h-[320px] md:h-[380px] lg:h-[420px]"
              />
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#2f7d3b]">
                Über uns
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl md:text-5xl">
                Elektromeisterbetrieb
                <span className="block text-stone-700">mit klarer Haltung</span>
              </h2>

              <div className="mt-5 h-[1px] w-24 bg-stone-300" />

              <p className="mt-6 text-base leading-7 text-stone-600 md:text-lg md:leading-8">
                Elektromeisterbetrieb Siegfried steht für fachgerechte
                Elektroarbeiten, saubere Ausführung und zuverlässige Umsetzung.
                Unser Betrieb ist in München und Umgebung tätig und unterstützt
                Privatkunden sowie gewerbliche Auftraggeber bei
                unterschiedlichen elektrotechnischen Projekten.
              </p>

              <p className="mt-6 text-base leading-7 text-stone-600 md:text-lg md:leading-8">
                Von klassischen Elektroinstallationen über Modernisierungen bis
                hin zu modernen Energielösungen begleiten wir Projekte
                strukturiert und mit einem hohen Anspruch an Qualität. Dabei
                legen wir großen Wert auf eine saubere Arbeitsweise,
                transparente Kommunikation und technisch sinnvolle Lösungen.
              </p>

              <p className="mt-6 text-base leading-7 text-stone-600 md:text-lg md:leading-8">
                Als Elektromeisterbetrieb arbeiten wir nach aktuellen
                technischen Standards und setzen alle Arbeiten normgerecht nach
                den geltenden DIN VDE Richtlinien um.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className={badgeClass}>Qualität und Vertrauen</p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl md:text-5xl">
              Wofür wir stehen
              <span className="block text-stone-700">
                bei jedem einzelnen Projekt
              </span>
            </h2>

            <p className="mt-5 text-base leading-7 text-stone-600 sm:text-lg sm:leading-8">
              Fachgerechte Umsetzung, normgerechte Arbeit und ein hoher Anspruch
              an saubere Ergebnisse stehen bei jedem Projekt im Mittelpunkt.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:mt-14 md:grid-cols-3 md:gap-8">
            {values.map((value) => (
              <div key={value.title} className={lineCardSoftClass}>
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#2f7d3b] text-xl text-white shadow-sm sm:h-14 sm:w-14 sm:text-2xl">
                  ✓
                </div>

                <h3 className="mt-5 text-lg font-bold text-stone-900 sm:text-xl">
                  {value.title}
                </h3>

                <p className="mt-3 leading-7 text-stone-600">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f3f0e8] py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className={badgeClass}>Unsere Leistungen</p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl md:text-5xl">
              Elektrotechnik
              <span className="block text-stone-700">
                für Wohnbau und Bestand
              </span>
            </h2>

            <p className="mt-5 text-base leading-7 text-stone-600 sm:text-lg sm:leading-8">
              Von klassischen Installationen bis zu modernen Energielösungen
              begleiten wir Projekte mit Struktur, Sorgfalt und einer sauberen
              technischen Umsetzung.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <Link
                  key={service.name}
                  href="/leistungen"
                  className="group relative overflow-hidden rounded-[1.6rem] border border-stone-200/90 bg-white px-4 py-4 shadow-[0_12px_32px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(15,23,42,0.09)] sm:px-5 sm:py-5"
                >
                  <div className="absolute left-0 top-0 h-[4px] w-full bg-[#2f7d3b]" />

                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#eef6f0] text-[#2f7d3b] transition duration-300 group-hover:bg-[#2f7d3b] group-hover:text-white sm:h-12 sm:w-12">
                      <Icon className="h-5 w-5" />
                    </div>

                    <div className="flex flex-1 items-center justify-between gap-3">
                      <span className="text-[15px] font-semibold leading-6 text-stone-800">
                        {service.name}
                      </span>

                      <span className="text-sm font-semibold text-[#2f7d3b] transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/leistungen"
              className="inline-flex min-h-[48px] w-full items-center justify-center rounded-xl bg-[#2f7d3b] px-7 py-3.5 text-sm font-bold !text-white shadow-[0_12px_30px_rgba(47,125,59,0.22)] transition hover:bg-[#256531] hover:shadow-[0_16px_36px_rgba(47,125,59,0.28)] sm:w-auto"
            >
              Leistungen ansehen
            </Link>
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

            <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              Bereit für
              <span className="block text-white/80">Ihr Projekt?</span>
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