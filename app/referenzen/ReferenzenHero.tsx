"use client";

import Image from "next/image";
import Link from "next/link";

export default function ReferenzenHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative h-[68vh] min-h-[500px] w-full sm:h-[74vh] sm:min-h-[560px] lg:h-[78vh] lg:min-h-[620px]">
        <Image
          src="/referenzeen-hero.jpg"
          alt="Referenzen von Elektromeisterbetrieb Siegfried"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.35),rgba(0,0,0,0.45),rgba(0,0,0,0.65))] lg:bg-[linear-gradient(to_right,rgba(0,0,0,0.55),rgba(0,0,0,0.25),rgba(0,0,0,0.55))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(47,125,59,0.18),transparent_35%)]" />

        <div className="relative z-10 flex h-full items-center">
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-10">
            <div className="flex justify-center lg:justify-end">
              <div className="max-w-3xl text-center text-white lg:text-right">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#8fd29b] sm:text-sm md:text-base">
                  Elektromeisterbetrieb
                </p>

                <div className="mx-auto mt-4 h-[2px] w-24 rounded-full bg-[#2f7d3b] lg:ml-auto lg:mr-0 lg:w-28" />

                <h1 className="mt-6 text-3xl font-bold leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
                  Referenzen
                  <span className="block text-white/90">
                    aus München & Umgebung
                  </span>
                </h1>

                <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/85 sm:text-lg sm:leading-8 md:text-xl lg:ml-auto lg:mr-0">
                  Einblicke in ausgewählte Projekte aus Elektroinstallation,
                  Sanierung, Beleuchtung und modernen Energielösungen mit Fokus
                  auf saubere und zuverlässige Umsetzung.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4 lg:justify-end">
                  <a
                    href="tel:+4917644481312"
                    className="inline-flex min-h-[50px] w-full items-center justify-center rounded-xl bg-[#2f7d3b] px-8 py-3 text-sm font-bold !text-white shadow-[0_14px_34px_rgba(47,125,59,0.28)] transition hover:bg-[#256531] sm:w-auto"
                  >
                    Jetzt anrufen
                  </a>

                  <Link
                    href="/kontakt"
                    className="inline-flex min-h-[50px] w-full items-center justify-center rounded-xl border border-white/30 bg-white/10 px-8 py-3 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white/15 sm:w-auto"
                  >
                    Kostenlos anfragen
                  </Link>
                </div>

                <div className="mt-8 flex flex-col items-center gap-3 text-sm text-white/85 sm:mt-10 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-6 sm:gap-y-3 md:text-base lg:justify-end">
                  <span className="flex items-center gap-2">
                    <span className="text-[#8fd29b]">✓</span>
                    München & Umgebung
                  </span>

                  <span className="flex items-center gap-2">
                    <span className="text-[#8fd29b]">✓</span>
                    Elektromeisterbetrieb
                  </span>

                  <span className="flex items-center gap-2 text-center sm:text-left">
                    <span className="text-[#8fd29b]">✓</span>
                    Saubere und zuverlässige Ausführung
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}