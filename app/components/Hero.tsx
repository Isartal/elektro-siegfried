"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const [frameFinished, setFrameFinished] = useState(false);
  const [showFinalFrame, setShowFinalFrame] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const stopTimer = setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.pause();
      }
      setFrameFinished(true);

      setTimeout(() => {
        setShowFinalFrame(true);
      }, 80);
    }, 4000);

    return () => clearTimeout(stopTimer);
  }, []);

  return (
    <section className="relative min-h-[82vh] overflow-hidden sm:min-h-[88vh] lg:min-h-[92vh]">
      <div className="absolute inset-0 scale-[1.03]">
        <Image
          src="/heronen-elektro.jpg"
          alt="Moderne Beleuchtung und Elektrotechnik"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="absolute inset-0 bg-black/35" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/30 to-black/60" />
      <div className="absolute inset-0 bg-[#2f7d3b]/20 mix-blend-multiply" />

      <div className="pointer-events-none absolute inset-0 z-[2]">
        {!frameFinished && (
          <video
            ref={videoRef}
            autoPlay
            muted
            playsInline
            className="h-full w-full object-cover opacity-90 transition-opacity duration-700"
          >
            <source src="/frame-hero-animation.mp4" type="video/mp4" />
          </video>
        )}

        <Image
          src="/frame-hero-final.png"
          alt="Rahmen"
          fill
          className={`object-cover transition-opacity duration-1000 ${
            showFinalFrame ? "opacity-90" : "opacity-0"
          }`}
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[82vh] max-w-7xl items-center justify-center px-5 py-20 sm:min-h-[88vh] sm:px-6 sm:py-24 lg:min-h-[92vh] lg:px-10">
        <div className="max-w-5xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#b7e2bf] sm:text-sm md:text-base">
            Elektromeisterbetrieb
          </p>

          <h1 className="mt-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-3xl font-black tracking-tight text-white sm:text-5xl md:gap-x-4 md:text-6xl lg:text-7xl">
            <span className="tracking-[0.06em] sm:tracking-[0.08em]">
              ELEKTRO
            </span>

            <span className="flex items-center justify-center">
              <svg
                className="h-10 w-8 animate-lightning drop-shadow-[0_0_25px_rgba(47,125,59,0.6)] sm:h-14 sm:w-10 md:h-16 md:w-11 lg:h-20 lg:w-12"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M13 2L4 14h6l-2 8 10-12h-6l1-8z"
                  fill="#2f7d3b"
                />
              </svg>
            </span>

            <span className="tracking-[0.06em] sm:tracking-[0.08em]">
              SIEGFRIED
            </span>
          </h1>

          <div className="mx-auto mt-5 h-[3px] w-[170px] rounded-full bg-[#2f7d3b] shadow-[0_0_20px_rgba(47,125,59,0.35)] sm:w-[240px] md:w-[320px]" />

          <p className="mt-6 text-base font-semibold leading-7 tracking-[0.02em] text-white sm:text-lg md:text-2xl">
            Elektroarbeiten ohne Stress. Schnell. Sauber. Zuverlässig.
          </p>

          <p className="mx-auto mt-5 max-w-xs text-sm leading-7 text-white/85 sm:max-w-xl sm:text-base">
            Ihr Elektromeisterbetrieb für Neubau, Sanierung und moderne
            Gebäudetechnik in München & Umgebung.
            <br />
            <span className="font-semibold text-white">
              Klare Abläufe, saubere Ausführung und schnelle Umsetzung.
            </span>
          </p>

          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <a
              href="tel:+4917644481312"
              className="inline-flex min-h-[50px] w-full items-center justify-center rounded-xl bg-[#2f7d3b] px-8 py-3.5 text-sm font-semibold !text-white shadow-[0_12px_30px_rgba(47,125,59,0.28)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#256531] sm:min-w-[190px] sm:w-auto"
            >
              Direkt anrufen
            </a>

            <Link
              href="/leistungen"
              className="inline-flex min-h-[50px] w-full items-center justify-center rounded-xl border border-white/25 bg-white/10 px-8 py-3.5 text-sm font-semibold !text-white backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:bg-white/20 sm:min-w-[190px] sm:w-auto"
            >
              Leistungen ansehen
            </Link>
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 text-sm font-medium text-white sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-3 md:text-base">
            <div className="flex items-center gap-2">
              <span className="text-[#9fddb0]">✓</span>
              München & Umgebung
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[#9fddb0]">✓</span>
              Elektromeisterbetrieb
            </div>

            <div className="flex items-center gap-2 text-center sm:text-left">
              <span className="text-[#9fddb0]">✓</span>
              Saubere und zuverlässige Ausführung
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}