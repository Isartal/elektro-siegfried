"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "../components/ScrollReveal";
import { ArrowRight, Phone, MapPin, ShieldCheck, Zap } from "lucide-react";

export default function ReferenzenHero() {
  return (
    <section className="relative overflow-hidden bg-[#f9f7f2]">
      <div className="relative h-[66vh] min-h-[480px] w-full sm:h-[72vh] sm:min-h-[560px] lg:h-[78vh] lg:min-h-[620px]">
        <Image
          src="/referenzeen-hero.jpg"
          alt="Referenzen von Elektro Siegfried in München und Umgebung"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[72%_center] sm:object-center"
        />

        <div className="absolute inset-0 bg-black/10 sm:bg-white/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#f9f7f2]/92 via-[#f9f7f2]/78 to-[#f9f7f2]/18 sm:from-[#f9f7f2]/35 sm:via-[#f9f7f2]/10 sm:to-black/25" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/20" />

        <div className="absolute inset-0 flex items-center px-4 sm:px-6 lg:px-10">
          <div className="mx-auto w-full max-w-7xl">
            <div className="flex justify-center lg:justify-end">
              <ScrollReveal>
                <div className="w-full max-w-[340px] rounded-[1.35rem] border border-white/60 bg-white/82 p-4 text-left shadow-[0_20px_50px_rgba(15,23,42,0.12)] backdrop-blur-md sm:max-w-3xl sm:rounded-[2rem] sm:bg-white/58 sm:p-8 sm:text-center md:p-10 lg:p-12 lg:text-right">
                  <ScrollReveal delay={0.04}>
                    <p className="inline-flex rounded-full border border-[#dbe9de] bg-[#f4faf5]/95 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#2f7d3b] sm:px-4 sm:py-2 sm:text-xs lg:ml-auto">
                      Elektromeisterbetrieb
                    </p>
                  </ScrollReveal>

                  <ScrollReveal delay={0.1}>
                    <h1 className="mt-3 text-[1.9rem] font-black leading-[1.02] tracking-tight text-[#18181b] sm:mt-6 sm:text-5xl md:text-6xl lg:text-7xl">
                      Referenzen
                      <span className="mt-1 block text-[#3f3f46]">
                        aus München und Umgebung
                      </span>
                    </h1>
                  </ScrollReveal>

                  <ScrollReveal delay={0.16}>
                    <div className="mt-3 h-[3px] w-16 rounded-full bg-[#2f7d3b] shadow-[0_0_18px_rgba(47,125,59,0.18)] sm:mt-5 sm:w-36 md:w-44 lg:ml-auto" />
                  </ScrollReveal>

                  <ScrollReveal delay={0.22}>
                    <p className="mt-3 text-[13px] leading-5 text-[#5f544d] sm:mt-6 sm:max-w-2xl sm:text-base sm:leading-8 md:text-lg lg:ml-auto">
                      Einblicke in Projekte aus Elektroinstallation,
                      Sanierung, Beleuchtung, Wallbox, Wärmepumpe und Smart Home
                      im Raum München.
                    </p>
                  </ScrollReveal>

                  <ScrollReveal delay={0.28}>
                    <div className="mt-5 flex flex-col gap-2.5 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4 lg:justify-end">
                      <a
                        href="tel:+4917644481312"
                        className="inline-flex min-h-[48px] w-full items-center justify-center rounded-xl bg-[#2f7d3b] px-5 py-3 text-sm font-bold !text-white shadow-[0_14px_30px_rgba(47,125,59,0.22)] transition duration-300 hover:bg-[#276a32] sm:min-h-[52px] sm:w-auto sm:px-8 sm:py-3.5"
                      >
                        <Phone className="mr-2 h-4 w-4" />
                        Jetzt anrufen
                      </a>

                      <Link
                        href="/kontakt"
                        className="inline-flex min-h-[48px] w-full items-center justify-center rounded-xl border border-[#d9ddd8] bg-white/94 px-5 py-3 text-sm font-semibold text-[#1f1715] shadow-sm transition duration-300 hover:bg-[#f7f5ef] sm:min-h-[52px] sm:w-auto sm:px-8 sm:py-3.5"
                      >
                        Kostenlos anfragen
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </ScrollReveal>

                  <ScrollReveal delay={0.34}>
                    <div className="mt-5 flex flex-col gap-2 sm:mt-8 sm:grid sm:grid-cols-3 sm:gap-3 lg:justify-items-end">
                      <div className="flex items-center gap-2 rounded-xl border border-[#e8e3d9] bg-white/88 px-3.5 py-2.5 text-sm text-[#27272a] shadow-sm backdrop-blur-sm">
                        <MapPin className="h-4 w-4 shrink-0 text-[#2f7d3b]" />
                        <span>München & Umgebung</span>
                      </div>

                      <div className="flex items-center gap-2 rounded-xl border border-[#e8e3d9] bg-white/88 px-3.5 py-2.5 text-sm text-[#27272a] shadow-sm backdrop-blur-sm">
                        <ShieldCheck className="h-4 w-4 shrink-0 text-[#2f7d3b]" />
                        <span>Elektromeisterbetrieb</span>
                      </div>

                      <div className="flex items-center gap-2 rounded-xl border border-[#e8e3d9] bg-white/88 px-3.5 py-2.5 text-sm text-[#27272a] shadow-sm backdrop-blur-sm">
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