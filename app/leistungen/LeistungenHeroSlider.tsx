"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "../components/ScrollReveal";
import { ArrowRight, Phone, MapPin, ShieldCheck, Zap } from "lucide-react";

export default function LeistungenHeroSlider() {
  return (
    <section className="relative overflow-hidden bg-[#f9f7f2]">
      <div className="relative h-[64vh] min-h-[460px] w-full sm:h-[70vh] sm:min-h-[520px] lg:h-[74vh] lg:min-h-[580px]">
        <Image
          src="/leistungen-herone-2.jpg"
          alt="Leistungen von Elektro Siegfried"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />

        <div className="absolute inset-0 bg-white/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#f9f7f2]/65 via-[#f9f7f2]/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/15" />

        <div className="absolute inset-0 flex items-center px-5 sm:px-6 lg:px-10">
          <div className="mx-auto w-full max-w-7xl">
            <ScrollReveal>
              <div className="max-w-3xl rounded-[2rem] border border-white/40 bg-white/55 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.10)] backdrop-blur-md sm:p-8 md:p-10 lg:p-12">
                <ScrollReveal delay={0.04}>
                  <p className="inline-flex rounded-full border border-[#dbe9de] bg-[#f4faf5]/92 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#2f7d3b] sm:text-xs">
                    Elektromeisterbetrieb
                  </p>
                </ScrollReveal>

                <ScrollReveal delay={0.1}>
                  <h1 className="mt-6 text-4xl font-black leading-[0.98] tracking-tight text-[#18181b] sm:text-5xl md:text-6xl lg:text-7xl">
                    Unsere Leistungen
                  </h1>
                </ScrollReveal>

                <ScrollReveal delay={0.16}>
                  <div className="mt-5 h-[3px] w-28 rounded-full bg-[#2f7d3b] shadow-[0_0_18px_rgba(47,125,59,0.18)] sm:w-36 md:w-44" />
                </ScrollReveal>

                <ScrollReveal delay={0.22}>
                  <p className="mt-6 max-w-2xl text-sm leading-7 text-[#5f544d] sm:text-base sm:leading-8 md:text-lg">
                    Fachgerechte Elektrotechnik für Wohnbau, Sanierung, moderne
                    Energielösungen und zuverlässige Projektabwicklung in
                    München und Umgebung.
                  </p>
                </ScrollReveal>

                <ScrollReveal delay={0.28}>
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
                    <a
                      href="tel:+4917644481312"
                      className="inline-flex min-h-[52px] items-center justify-center rounded-xl bg-[#2f7d3b] px-8 py-3.5 text-sm font-bold !text-white shadow-[0_14px_30px_rgba(47,125,59,0.22)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#276a32]"
                    >
                      <Phone className="mr-2 h-4 w-4" />
                      Jetzt anrufen
                    </a>

                    <Link
                      href="/kontakt"
                      className="inline-flex min-h-[52px] items-center justify-center rounded-xl border border-[#d9ddd8] bg-white/90 px-8 py-3.5 text-sm font-semibold text-[#1f1715] shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-[#f7f5ef]"
                    >
                      Kostenlos anfragen
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.34}>
                  <div className="mt-8 grid gap-3 text-sm text-[#27272a] sm:grid-cols-3">
                    <div className="flex items-center gap-2 rounded-xl border border-[#e8e3d9] bg-white/82 px-4 py-3 shadow-sm backdrop-blur-sm">
                      <MapPin className="h-4 w-4 text-[#2f7d3b]" />
                      <span>München & Umgebung</span>
                    </div>

                    <div className="flex items-center gap-2 rounded-xl border border-[#e8e3d9] bg-white/82 px-4 py-3 shadow-sm backdrop-blur-sm">
                      <ShieldCheck className="h-4 w-4 text-[#2f7d3b]" />
                      <span>Elektromeisterbetrieb</span>
                    </div>

                    <div className="flex items-center gap-2 rounded-xl border border-[#e8e3d9] bg-white/82 px-4 py-3 shadow-sm backdrop-blur-sm">
                      <Zap className="h-4 w-4 text-[#2f7d3b]" />
                      <span>Sauber & zuverlässig</span>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}