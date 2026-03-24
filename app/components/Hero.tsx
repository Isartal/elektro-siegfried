"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone, ShieldCheck, Zap, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#f9f7f2]">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/projekt-3.png"
          alt="Elektroarbeiten in München und Umgebung"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-[0.82]"
        />
      </div>

      {/* Ultra clean overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#f9f7f2]/92 via-[#f9f7f2]/78 to-[#f9f7f2]/18" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.7),transparent_34%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.18),rgba(255,255,255,0.05),rgba(255,255,255,0.12))]" />

      <div className="relative z-10 mx-auto flex min-h-[82vh] max-w-7xl items-center px-6 py-20 lg:min-h-[88vh] lg:px-10">
        <div className="grid w-full items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)]">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.06 }}
              className="inline-flex rounded-full border border-[#dbe9de] bg-white/85 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#2f7d3b] shadow-sm sm:text-xs"
            >
              Elektromeisterbetrieb in München und Umgebung
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.12 }}
              className="mt-6 text-4xl font-black leading-[0.98] tracking-tight text-[#18181b] sm:text-5xl md:text-6xl xl:text-[4.35rem]"
            >
              Moderne Elektrotechnik
              <span className="mt-2 block text-[#4b5563]">
                sauber, klar und zuverlässig umgesetzt
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, scaleX: 0.75 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.55, delay: 0.18 }}
              className="mt-6 h-[3px] w-28 origin-left rounded-full bg-[#2f7d3b] shadow-[0_0_16px_rgba(47,125,59,0.18)] sm:w-36"
            />

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.24 }}
              className="mt-6 max-w-2xl text-base leading-7 text-[#5f544d] sm:text-lg sm:leading-8"
            >
              Elektro Siegfried begleitet Neubau, Sanierung, Wallbox,
              Photovoltaik und moderne Gebäudetechnik mit sauberer Ausführung,
              klaren Abläufen und persönlicher Betreuung.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.32 }}
              className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap"
            >
              <a
                href="tel:+4917644481312"
                className="inline-flex min-h-[52px] items-center justify-center rounded-xl bg-[#2f7d3b] px-8 py-3.5 font-bold !text-white shadow-[0_14px_28px_rgba(47,125,59,0.20)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#276a32]"
              >
                <Phone className="mr-2 h-4 w-4" />
                Jetzt anrufen
              </a>

              <Link
                href="/kontakt"
                className="inline-flex min-h-[52px] items-center justify-center rounded-xl border border-[#dddcd6] bg-white/92 px-8 py-3.5 font-semibold text-[#1f1715] shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-white"
              >
                Anfrage stellen
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.4 }}
              className="mt-10 grid gap-3 text-sm sm:grid-cols-3"
            >
              <div className="flex items-center gap-2 rounded-xl border border-[#e8e3d9] bg-white/88 px-4 py-3 text-[#27272a] shadow-sm backdrop-blur-sm">
                <MapPin className="h-4 w-4 text-[#2f7d3b]" />
                <span>München & Umgebung</span>
              </div>

              <div className="flex items-center gap-2 rounded-xl border border-[#e8e3d9] bg-white/88 px-4 py-3 text-[#27272a] shadow-sm backdrop-blur-sm">
                <ShieldCheck className="h-4 w-4 text-[#2f7d3b]" />
                <span>Meisterbetrieb</span>
              </div>

              <div className="flex items-center gap-2 rounded-xl border border-[#e8e3d9] bg-white/88 px-4 py-3 text-[#27272a] shadow-sm backdrop-blur-sm">
                <Zap className="h-4 w-4 text-[#2f7d3b]" />
                <span>Sauber & zuverlässig</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right visual panel */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.16, ease: "easeOut" }}
            className="hidden lg:block"
          >
            <div className="relative ml-auto max-w-[33rem] rounded-[2rem] border border-white/55 bg-white/40 p-4 shadow-[0_30px_70px_rgba(15,23,42,0.10)] backdrop-blur-md">
              <div className="relative overflow-hidden rounded-[1.5rem]">
                <Image
                  src="/projekt-3.png"
                  alt="Projekt von Elektro Siegfried"
                  width={900}
                  height={1100}
                  className="h-[34rem] w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/10" />
              </div>

              <div className="absolute -bottom-5 -left-5 rounded-2xl border border-[#dfe9e1] bg-white/92 px-5 py-4 shadow-[0_16px_35px_rgba(15,23,42,0.10)] backdrop-blur-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2f7d3b]">
                  Elektro Siegfried
                </p>
                <p className="mt-2 text-sm leading-6 text-[#4e433d]">
                  Strukturierte Elektroarbeiten für Neubau, Sanierung und
                  moderne Gebäudetechnik.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}