import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import LeistungenHeroSlider from "./LeistungenHeroSlider";
import { ShieldCheck, BadgeCheck, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Leistungen | Elektro Siegfried",
  description:
    "Leistungen von Elektromeisterbetrieb Elektro-Siegfried in München und Umgebung: Elektroinstallationen, Sanierung, Beleuchtung, Photovoltaik, Wallboxen, Wärmepumpen, Smart Home und E Check.",
};

const services = [
  {
    title: "Elektroinstallationen",
    text: "Elektromeisterbetrieb Elektro-Siegfried übernimmt Elektroinstallationen für Neubauten, Umbauten und Bestandsgebäude in München und Umgebung. Von der Planung über die Installation von Leitungen, Steckdosen und Verteilern bis zur finalen Inbetriebnahme sorgen wir für eine fachgerechte und sichere Umsetzung nach aktuellen VDE Richtlinien. Unser Ziel ist eine saubere, zuverlässige und zukunftssichere elektrische Infrastruktur für Wohn und Gewerbeobjekte.",
    image: "/leistung-elektroinstallationen.jpg",
    alt: "Elektroinstallationen in München und Umgebung",
  },
  {
    title: "Sanierung und Modernisierung",
    text: "Viele bestehende Elektroanlagen entsprechen nicht mehr dem heutigen technischen Stand. Im Rahmen einer elektrotechnischen Sanierung modernisieren wir Leitungen, Sicherungssysteme und Verteileranlagen nach aktuellen Sicherheitsanforderungen. Elektromeisterbetrieb Elektro-Siegfried unterstützt Eigentümer und Bauherren in München und Umgebung bei der sicheren und strukturierten Modernisierung ihrer elektrischen Anlage.",
    image: "/leistung-sanierung.jpg",
    alt: "Sanierung und Modernisierung elektrischer Anlagen",
  },
  {
    title: "Beleuchtung und Lichtkonzepte",
    text: "Eine durchdachte Beleuchtung verbessert Komfort, Funktionalität und Atmosphäre. Elektromeisterbetrieb Elektro-Siegfried plant und installiert moderne Beleuchtungssysteme für Wohnräume, Gewerbeflächen und Außenbereiche. Von energieeffizienter LED Technik bis zu individuellen Lichtkonzepten sorgen wir für eine optimale Verbindung aus Technik, Design und Alltagstauglichkeit.",
    image: "/leistung-beleuchtung.jpg",
    alt: "Beleuchtung und Lichtkonzepte für Wohn und Gewerbeobjekte",
  },
  {
    title: "Photovoltaik und Wallboxen",
    text: "Moderne Energielösungen gewinnen zunehmend an Bedeutung. Elektromeisterbetrieb Elektro-Siegfried übernimmt die fachgerechte elektrische Installation und Einbindung von Photovoltaikanlagen sowie Wallboxen für Elektrofahrzeuge. So entsteht eine sichere Integration in bestehende elektrische Anlagen und eine zukunftsfähige Lösung für nachhaltige Energie und Elektromobilität.",
    image: "/leistung-photovoltaik-wallbox.jpg",
    alt: "Photovoltaik und Wallbox Installation in München",
  },
  {
    title: "Wärmepumpen",
    text: "Wärmepumpensysteme benötigen eine zuverlässige elektrotechnische Anbindung. Elektromeisterbetrieb Elektro-Siegfried übernimmt die fachgerechte Installation der elektrischen Komponenten und sorgt für eine sichere Integration der Wärmepumpe in die bestehende Gebäudeinstallation. So entsteht eine effiziente und langfristig stabile Lösung für moderne Heizsysteme.",
    image: "/leistung-waermepumpen.jpg",
    alt: "Elektrische Anbindung von Wärmepumpen",
  },
  {
    title: "Smart Home",
    text: "Mit modernen Smart Home Lösungen lassen sich Beleuchtung, Energieverbrauch und verschiedene Gebäudefunktionen komfortabel steuern. Elektromeisterbetrieb Elektro-Siegfried schafft die technische Grundlage für intelligente Gebäudesteuerungen und sorgt für eine zuverlässige Installation der notwendigen Systeme. So entstehen vernetzte und zukunftssichere Lösungen für Wohn und Gewerbeobjekte.",
    image: "/leistung-smart-home.jpg",
    alt: "Smart Home Installation in München und Umgebung",
  },
  {
    title: "E Check Prüfung nach DIN VDE",
    text: "Mit dem E Check prüft Elektromeisterbetrieb Elektro-Siegfried elektrische Anlagen, Steckdosen, Sicherungen und Geräte nach aktuellen DIN VDE Richtlinien. Die Prüfung erhöht die Sicherheit in Wohn und Gewerbeobjekten und hilft, mögliche Defekte oder Brandrisiken frühzeitig zu erkennen. Der E Check wird fachgerecht durchgeführt und dokumentiert den Zustand der elektrischen Anlage zuverlässig.",
    image: "/leistung-echeck.jpg",
    alt: "E Check Prüfung elektrischer Anlagen in München",
  },
];

export default function LeistungenPage() {
  return (
    <>
      <LeistungenHeroSlider />

      <section
        id="leistungen"
        className="relative overflow-hidden bg-[#f7f4ee] py-16 sm:py-20 md:py-28 lg:py-32"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(47,125,59,0.07),transparent_35%)]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#2f7d3b]">
              Unsere Leistungen
            </p>

            <div className="mx-auto mt-4 h-[2px] w-28 rounded-full bg-[#2f7d3b]" />

            <h2 className="mt-6 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl md:text-5xl lg:text-6xl">
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
          </div>

          <div className="mt-14 space-y-10 sm:mt-16 sm:space-y-12 md:mt-20 md:space-y-16 lg:space-y-20">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`group grid items-center gap-8 rounded-[2rem] border border-stone-200/80 bg-white/90 p-4 shadow-[0_20px_60px_rgba(15,23,42,0.06)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_80px_rgba(15,23,42,0.1)] sm:p-5 md:gap-10 md:p-7 lg:grid-cols-2 lg:gap-14 lg:p-8 ${
                  index % 2 !== 0 ? "lg:[&>div:first-child]:order-2" : ""
                }`}
              >
                <div className="relative overflow-hidden rounded-[1.8rem]">
                  <div className="absolute inset-0 z-10 bg-gradient-to-tr from-black/15 via-transparent to-white/10" />
                  <Image
                    src={service.image}
                    alt={service.alt}
                    width={900}
                    height={650}
                    className="h-[240px] w-full object-cover transition duration-700 group-hover:scale-[1.05] sm:h-[280px] md:h-[360px] lg:h-[420px]"
                  />
                </div>

                <div className="px-1 md:px-2">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#2f7d3b]">
                    Leistung
                  </p>

                  <h3 className="mt-4 text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl md:text-4xl">
                    {service.title}
                  </h3>

                  <div className="mt-5 h-[1px] w-24 bg-stone-300" />

                  <p className="mt-6 text-base leading-7 text-stone-600 md:text-lg md:leading-8">
                    {service.text}
                  </p>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
                    <Link
                      href="/kontakt"
                      className="inline-flex min-h-[48px] w-full items-center justify-center rounded-xl bg-[#2f7d3b] px-6 py-3 text-sm font-bold !text-white shadow-[0_12px_30px_rgba(47,125,59,0.22)] transition hover:bg-[#256531] hover:shadow-[0_16px_36px_rgba(47,125,59,0.28)] sm:w-auto"
                    >
                      Anfrage stellen
                    </Link>

                    <a
                      href="tel:+4917644481312"
                      className="inline-flex min-h-[48px] w-full items-center justify-center rounded-xl border border-stone-300 bg-white px-6 py-3 text-sm font-bold text-stone-700 transition hover:border-[#2f7d3b] hover:text-[#2f7d3b] sm:w-auto"
                    >
                      Direkt anrufen
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#f3efe7] py-16 sm:py-20 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.08),transparent_30%)]" />

        <div className="relative mx-auto max-w-5xl px-6 lg:px-10">
          <div className="rounded-[2rem] border border-stone-200/80 bg-white/85 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.06)] backdrop-blur-sm sm:p-8 md:p-12 lg:p-14">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-full border border-[#d4af37]/30 bg-[#fff9e8] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#8a6a16]">
                Zertifizierter Meisterbetrieb
              </span>
            </div>

            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.24em] text-[#2f7d3b]">
              Sicherheit & Verantwortung
            </p>

            <div className="mt-4 h-[2px] w-24 rounded-full bg-[#d4af37]" />

            <h2 className="mt-6 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl md:text-4xl lg:text-5xl">
              Fachgerechte Elektrotechnik
              <span className="block text-stone-700">
                mit Qualität, Sicherheit und Verantwortung
              </span>
            </h2>

            <p className="mt-6 max-w-3xl text-base leading-7 text-stone-600 sm:text-lg sm:leading-8 md:text-xl">
              Elektrotechnische Arbeiten erfordern höchste Sorgfalt, saubere
              Planung und eine normgerechte Umsetzung. Elektromeisterbetrieb
              ELEKTRO-SIEGFRIED steht für zuverlässige Ausführung, aktuelle VDE
              Standards und ein Ergebnis, das technisch wie optisch überzeugt.
            </p>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              <div className="group rounded-2xl border border-stone-200 bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(0,0,0,0.08)]">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#eef6f0] text-[#2f7d3b]">
                  <ShieldCheck className="h-6 w-6" />
                </div>

                <h3 className="mt-4 text-lg font-bold text-stone-900">
                  Sichere Ausführung
                </h3>

                <p className="mt-3 text-sm leading-7 text-stone-600">
                  Jede Arbeit wird mit Blick auf Sicherheit, Langlebigkeit und
                  eine fachgerechte elektrische Integration umgesetzt.
                </p>
              </div>

              <div className="group rounded-2xl border border-stone-200 bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(0,0,0,0.08)]">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#fff8e7] text-[#b68b1e]">
                  <BadgeCheck className="h-6 w-6" />
                </div>

                <h3 className="mt-4 text-lg font-bold text-stone-900">
                  Normgerechte Qualität
                </h3>

                <p className="mt-3 text-sm leading-7 text-stone-600">
                  Unsere Leistungen orientieren sich an aktuellen technischen
                  Anforderungen und einer strukturierten, sauberen Umsetzung.
                </p>
              </div>

              <div className="group rounded-2xl border border-stone-200 bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(0,0,0,0.08)]">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#eef6f0] text-[#2f7d3b]">
                  <Zap className="h-6 w-6" />
                </div>

                <h3 className="mt-4 text-lg font-bold text-stone-900">
                  Zuverlässige Projektabwicklung
                </h3>

                <p className="mt-3 text-sm leading-7 text-stone-600">
                  Von der Vorbereitung bis zur finalen Umsetzung begleiten wir
                  Ihr Projekt mit klaren Abläufen und hoher Verbindlichkeit.
                </p>
              </div>
            </div>
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