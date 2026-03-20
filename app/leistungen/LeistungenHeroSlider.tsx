"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
  {
    image: "/leistungen-herooo-1.jpg",
    alt: "Elektroinstallation",
  },
  {
    image: "/leistungen-herone-2.jpg",
    alt: "Beleuchtung",
  },
  {
    image: "/leistungen-hero-3.jpg",
    alt: "Photovoltaik",
  },
];

export default function LeistungenHeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden">
      <div className="relative h-[62vh] min-h-[440px] w-full sm:h-[68vh] sm:min-h-[500px] lg:h-[70vh] lg:min-h-[520px]">
        {slides.map((slide, index) => (
          <div
            key={slide.image}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              priority={index === 0}
              className="object-cover"
              sizes="100vw"
            />

            <div className="absolute inset-0 bg-black/45" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/25 to-black/55" />
          </div>
        ))}

        <div className="absolute inset-0 flex items-center justify-center px-5 sm:px-6">
          <div className="mx-auto max-w-4xl text-center text-white">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#b7e2bf] sm:text-sm md:text-base">
              ELEKTROMEISTERBETRIEB
            </p>

            <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              UNSERE LEISTUNGEN
            </h1>

            <div className="mx-auto mt-5 h-[3px] w-[170px] rounded-full bg-[#2f7d3b] sm:w-[250px] md:w-[340px]" />

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/90 sm:text-base md:text-lg">
              Fachgerechte Elektrotechnik für Wohnbau, Sanierung, moderne
              Energielösungen und zuverlässige Projektabwicklung in
              München & Umgebung.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
              <a
                href="tel:+4917644481312"
                className="inline-flex min-h-[50px] w-full items-center justify-center rounded-xl bg-[#2f7d3b] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#256531] sm:w-auto"
              >
                Jetzt anrufen
              </a>

              <Link
                href="/kontakt"
                className="inline-flex min-h-[50px] w-full items-center justify-center rounded-xl border border-white/40 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/15 active:border-[#2f7d3b] active:bg-[#2f7d3b] sm:w-auto"
              >
                Kostenlos anfragen
              </Link>
            </div>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 text-sm font-medium text-white/90 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-3 md:text-base">
              <div className="flex items-center gap-2">
                <span className="text-[#7edc8d]">✓</span>
                <span>München & Umgebung</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-[#7edc8d]">✓</span>
                <span>Elektromeisterbetrieb</span>
              </div>

              <div className="flex items-center gap-2 text-center sm:text-left">
                <span className="text-[#7edc8d]">✓</span>
                <span>Saubere und zuverlässige Ausführung</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}