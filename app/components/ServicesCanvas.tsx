"use client";

import Link from "next/link";
import {
  ArrowRight,
  Bolt,
  Hammer,
  BatteryCharging,
  SunMedium,
  Flame,
  Lightbulb,
  Building2,
  Wrench,
} from "lucide-react";

type IconName =
  | "bolt"
  | "hammer"
  | "battery"
  | "sun"
  | "flame"
  | "lightbulb"
  | "building"
  | "wrench";

type ServiceCard = {
  title: string;
  text: string;
  href: string;
  icon: IconName;
  tags: string[];
};

type ServicesCanvasProps = {
  cards: ServiceCard[];
};

const iconMap = {
  bolt: Bolt,
  hammer: Hammer,
  battery: BatteryCharging,
  sun: SunMedium,
  flame: Flame,
  lightbulb: Lightbulb,
  building: Building2,
  wrench: Wrench,
};

export default function ServicesCanvas({ cards }: ServicesCanvasProps) {
  const duplicatedCards = [...cards, ...cards];

  return (
    <section className="relative overflow-hidden">
      {/* Desktop Leinwand */}
      <div className="hidden lg:block">
        <div className="group relative overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white via-white/80 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white via-white/80 to-transparent" />

          <div className="services-marquee flex w-max gap-6 py-2 group-hover:[animation-play-state:paused]">
            {duplicatedCards.map((card, index) => {
              const Icon = iconMap[card.icon];

              return (
                <Link
                  key={`${card.title}-${index}`}
                  href={card.href}
                  className="group/card relative flex min-h-[380px] w-[360px] shrink-0 flex-col overflow-hidden rounded-[2rem] border border-[#ebe5da] bg-[linear-gradient(180deg,rgba(255,255,255,0.98)_0%,rgba(249,247,242,0.98)_100%)] p-7 shadow-[0_14px_40px_rgba(15,23,42,0.06)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_28px_70px_rgba(15,23,42,0.12)]"
                >
                  <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#2f7d3b]/10 blur-3xl transition-all duration-500 group-hover/card:scale-125 group-hover/card:bg-[#2f7d3b]/20" />
                  <div className="absolute -left-8 bottom-0 h-24 w-24 rounded-full bg-[#dff0e3]/60 blur-2xl transition-all duration-500 group-hover/card:scale-110" />

                  <div className="relative flex h-16 items-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-[1.2rem] border border-[#dce8de] bg-[#f4faf5] text-[#2f7d3b] shadow-sm transition-all duration-500 group-hover/card:scale-110 group-hover/card:-rotate-3 group-hover/card:bg-[#2f7d3b] group-hover/card:text-white group-hover/card:shadow-[0_16px_35px_rgba(47,125,59,0.25)]">
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>

                  <div className="relative mt-5 flex flex-1 flex-col">
                    <h3 className="text-[1.25rem] font-semibold leading-[1.35] text-[#1f1715] transition duration-300 group-hover/card:text-[#2f7d3b]">
                      {card.title}
                    </h3>

                    <p className="mt-4 text-[15px] leading-7 text-[#4e433d]">
                      {card.text}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {card.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-[#e2efe5] bg-[#f8fdf9] px-3 py-1 text-[11px] font-semibold text-[#2f7d3b] sm:text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto pt-7">
                      <div className="flex items-center gap-2 text-sm font-semibold text-[#2f7d3b] opacity-0 transition-all duration-300 group-hover/card:translate-x-1 group-hover/card:opacity-100">
                        Mehr erfahren
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mobile / Tablet */}
      <div className="lg:hidden">
        <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-1 pb-3 pt-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {cards.map((card) => {
            const Icon = iconMap[card.icon];

            return (
              <Link
                key={card.title}
                href={card.href}
                className="group/card relative flex min-h-[320px] w-[88vw] max-w-[340px] snap-start shrink-0 flex-col overflow-hidden rounded-[1.5rem] border border-[#ebe5da] bg-[linear-gradient(180deg,rgba(255,255,255,0.98)_0%,rgba(249,247,242,0.98)_100%)] p-5 sm:p-6 shadow-[0_14px_40px_rgba(15,23,42,0.06)] transition-all duration-500"
              >
                <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-[#2f7d3b]/10 blur-3xl" />
                <div className="absolute -left-8 bottom-0 h-20 w-20 rounded-full bg-[#dff0e3]/50 blur-2xl" />

                <div className="relative flex h-14 items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-[1rem] border border-[#dce8de] bg-[#f4faf5] text-[#2f7d3b] shadow-sm sm:h-14 sm:w-14 sm:rounded-[1.2rem]">
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                </div>

                <div className="relative mt-4 flex flex-1 flex-col">
                  <h3 className="text-lg font-semibold leading-[1.35] text-[#1f1715] sm:text-xl">
                    {card.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#4e433d] sm:mt-4 sm:leading-7">
                    {card.text}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2 sm:mt-5">
                    {card.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[#e2efe5] bg-[#f8fdf9] px-3 py-1 text-[11px] font-semibold text-[#2f7d3b] sm:text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto pt-6">
                    <div className="flex items-center gap-2 text-sm font-semibold text-[#2f7d3b]">
                      Mehr erfahren
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .services-marquee {
          animation: services-marquee 52s linear infinite;
        }

        @keyframes services-marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-50% - 12px));
          }
        }
      `}</style>
    </section>
  );
}