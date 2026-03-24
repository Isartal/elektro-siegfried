"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "../components/ScrollReveal";
import { ArrowRight, Phone, MapPin, ShieldCheck, Zap } from "lucide-react";

export default function ReferenzenHero() {
  return (
    <section className="relative overflow-hidden bg-[#f9f7f2]">
      <div className="relative h-[78vh] min-h-[560px] w-full sm:h-[74vh] sm:min-h-[560px] lg:h-[78vh] lg:min-h-[620px]">
        <Image
          src="/referenzeen-hero.jpg"
          alt="Referenzen von Elektro Siegfried in München und Umgebung"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[65%_center] sm:object-center"
        />

        <div className="absolute inset-0 bg-white/20 sm:bg-white/12" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#f9f7f2]/85 via-[#f9f7f2]/45 to-[#f9f7f2]/10 sm:from-[#f9f7f2]/28 sm:via-transparent sm:to-black/28" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(47,125,59,0.14),transparent_35%)]" />

        <div className="absolute inset-0 flex items-center px-4 sm:px-6 lg:px-10">
          <div className="mx-auto w-full max-w-7xl">
            <div className="flex justify-center lg:justify-end">
              <ScrollReveal>
                <div className="max-w-[92%] rounded-[1.6rem] border border-white/50 bg-white/72 p-5 text-center shadow-[0_20px_60px_rgba(15,23,42,0.10)] backdrop-blur-md sm:max-w-3xl sm:rounded-[2rem] sm:bg-white/56 sm:p-8 md:p-10 lg:p-12 lg:text-right">
                  
                  <ScrollReveal delay={0.04}>
                    <p className="inline-flex rounded-full border border-[#dbe9de] bg-[#f4faf5]/95 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#2f7d3b] sm:px-4 sm:py-2 sm:text-xs lg:ml-auto">
                      Elektromeisterbetrieb
                    </p>
                  </ScrollReveal>

                  <ScrollReveal delay={0.1}>
                    <h1 className="mt-4 text-[2rem] font-black leading-[1.02] tracking-tight text-[#18181b] sm:mt-6 sm:text-5xl md:text-6xl lg:text-7xl">
                      Referenzen
                      <span className="block text-[#3f3f46]">
                        aus München und Umgebung
                      </span>
                    </h1>
                  </ScrollReveal>

                  <ScrollReveal delay={0.16}>
                    <div className="mt-4 h-[3px] w-20 rounded-full bg-[#2f7d3b] shadow-[0_0_18px_rgba(47,125,59,0.18)] sm:mt-5 sm:w-36 md:w-44 lg:ml-auto" />
                  </ScrollReveal>

                  <ScrollReveal delay={0.22}>
                    <p className="mt-4 max-w-2xl text-[14px] leading-6 text-[#5f544d] sm:mt-6 sm:text-base sm:leading-8 md:text-lg lg:ml-auto">
                      Einblicke in Projekte aus Elektroinstallation,
                      Sanierung, Beleuchtung, Wallbox, Wärmepumpe und Smart Home
                      mit Fokus auf saubere, fachgerechte und zuverlässige
                      Umsetzung im Raum München.
                    </p>
                  </ScrollReveal>

                  <ScrollReveal delay={0.28}>
                    <div className="mt-6 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4 lg:justify-end">
                      <a
                        href="tel:+4917644481312"
                        className="inline-flex min-h-[50px] w-full items-center justify-center rounded-xl bg-[#2f7d3b] px-6 py-3 text-sm font-bold !text-white shadow-[0_14px_30px_rgba(47,125,59,0.22)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#276a32] sm:min-h-[52px] sm:w-auto sm:px-8 sm:py-3.5"
                      >
                        <Phone className="mr-2 h-4 w-4" />
                        Jetzt anrufen
                      </a>

                      <Link
                        href="/kontakt"
                        className="inline-flex min-h-[50px] w-full items-center justify-center rounded-xl border border-[#d9ddd8] bg-white/92 px-6 py-3 text-sm font-semibold text-[#1f1715] shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-[#f7f5ef] sm:min-h-[52px] sm:w-auto sm:px-8 sm:py-3.5"
                      >
                        Kostenlos anfragen
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </ScrollReveal>

                  <ScrollReveal delay={0.34}>
                    <div className="mt-6 grid grid-cols-1 gap-2.5 text-sm text-[#27272a] sm:mt-8 sm:grid-cols-3 sm:gap-3 lg:justify-items-end">
                      <div className="flex items-center gap-2 rounded-xl border border-[#e8e3d9] bg-white/86 px-4 py-3 shadow-sm backdrop-blur-sm">
                        <MapPin className="h-4 w-4 shrink-0 text-[#2f7d3b]" />
                        <span>München & Umgebung</span>
                      </div>

                      <div className="flex items-center gap-2 rounded-xl border border-[#e8e3d9] bg-white/86 px-4 py-3 shadow-sm backdrop-blur-sm">
                        <ShieldCheck className="h-4 w-4 shrink-0 text-[#2f7d3b]" />
                        <span>Elektromeisterbetrieb</span>
                      </div>

                      <div className="flex items-center gap-2 rounded-xl border border-[#e8e3d9] bg-white/86 px-4 py-3 shadow-sm backdrop-blur-sm">
                        <Zap className="h-4 w-4 shrink-0 text-[#2f7d3b]" />
                        <span>Sauber & zuverlässig</span>
                      </div>
                    </div>
                  </ScrollReveal>

                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}