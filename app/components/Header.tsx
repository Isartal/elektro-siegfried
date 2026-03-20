"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Startseite", href: "/" },
  { name: "Leistungen", href: "/leistungen" },
  { name: "Referenzen", href: "/referenzen" },
  { name: "Über uns", href: "/ueber-uns" },
  { name: "Kontakt", href: "/kontakt" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-[#e7e2d8] bg-[#f8f6f0]/95 backdrop-blur-md">
        <div
          className={`mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-10 transition-all duration-300 ${
            scrolled ? "py-2" : "py-3"
          }`}
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex shrink-0 items-center"
            onClick={() => setMenuOpen(false)}
          >
<Image
  src="/Logowebsiteee.png"
  alt="Elektro Siegfried"
  width={800}
  height={250}
  priority
  className={`w-auto transition-all duration-300 ${
    scrolled ? "h-20 lg:h-24" : "h-24 sm:h-28 lg:h-32"
  }`}
/>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group relative text-[16px] font-semibold tracking-[0.01em] transition duration-300 ${
                    isActive
                      ? "text-[#2f7d3b]"
                      : "text-[#2c241f] hover:text-[#2f7d3b]"
                  }`}
                >
                  {item.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-[2px] rounded-full bg-[#2f7d3b] transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Anfrage Button Desktop */}
            <Link
              href="/kontakt"
              onClick={() => setMenuOpen(false)}
              className="hidden min-h-[44px] items-center justify-center rounded-xl bg-[#2f7d3b] px-5 py-2.5 text-sm font-semibold !text-white shadow-[0_12px_30px_rgba(47,125,59,0.28)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#256531] hover:shadow-[0_16px_40px_rgba(47,125,59,0.35)] sm:inline-flex lg:px-6 lg:py-3"
            >
              <span className="lg:hidden">Anfrage</span>
              <span className="hidden lg:inline">Anfrage stellen</span>
            </Link>

            {/* Premium Mobile Burger */}
            <button
              type="button"
              aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((prev) => !prev)}
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#ddd6ca] bg-white/85 text-[#2c241f] shadow-sm transition duration-300 hover:border-[#cfc6b8] hover:bg-white lg:hidden"
            >
              <span className="relative block h-5 w-6">
                <span
                  className={`absolute left-0 top-0 h-0.5 w-6 rounded-full bg-[#2c241f] transition-all duration-300 ${
                    menuOpen ? "translate-y-2 rotate-45" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-2 h-0.5 w-6 rounded-full bg-[#2c241f] transition-all duration-300 ${
                    menuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute left-0 top-4 h-0.5 w-6 rounded-full bg-[#2c241f] transition-all duration-300 ${
                    menuOpen ? "-translate-y-2 -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Overlay */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm transition-all duration-300 lg:hidden ${
          menuOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      />

      {/* Premium Mobile Slide Menu */}
      <div
        className={`fixed right-0 top-0 z-[70] h-full w-[86%] max-w-sm border-l border-[#e7e2d8] bg-[#f8f6f0] shadow-[0_24px_80px_rgba(0,0,0,0.25)] transition-transform duration-300 ease-out lg:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col px-5 pb-6 pt-5 sm:px-6">
          {/* Top */}
          <div className="flex items-center justify-between border-b border-[#e7e2d8] pb-4">
            <div className="flex items-center gap-3">
<Image
  src="/Logowebsiteee.png"
  alt="Elektro Siegfried"
  width={320}
  height={100}
  className="h-16 w-auto sm:h-18"
/>
            </div>

            <button
              type="button"
              aria-label="Menü schließen"
              onClick={() => setMenuOpen(false)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#ddd6ca] bg-white text-[#2c241f] shadow-sm transition hover:bg-[#f3efe6]"
            >
              <span className="relative block h-5 w-5">
                <span className="absolute left-0 top-2 h-0.5 w-5 rotate-45 rounded-full bg-[#2c241f]" />
                <span className="absolute left-0 top-2 h-0.5 w-5 -rotate-45 rounded-full bg-[#2c241f]" />
              </span>
            </button>
          </div>

          {/* Nav */}
          <nav className="mt-6 flex flex-col gap-2">
            {navItems.map((item, index) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`rounded-2xl px-4 py-3.5 text-base font-semibold transition duration-300 ${
                    isActive
                      ? "bg-white text-[#2f7d3b] shadow-sm"
                      : "text-[#2c241f] hover:bg-white hover:text-[#2f7d3b]"
                  }`}
                  style={{
                    transitionDelay: menuOpen ? `${index * 40}ms` : "0ms",
                  }}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Bottom CTA */}
          <div className="mt-auto pt-6">
            <div className="rounded-[1.5rem] border border-[#e7e2d8] bg-white p-4 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2f7d3b]">
                Kontakt
              </p>

              <p className="mt-3 text-sm leading-6 text-[#4e433d]">
                Schnell erreichbar für Elektroprojekte in München & Umgebung.
              </p>

              <div className="mt-4 flex flex-col gap-3">
                <a
                  href="tel:+4917644481312"
                  onClick={() => setMenuOpen(false)}
                  className="inline-flex min-h-[48px] items-center justify-center rounded-xl bg-[#2f7d3b] px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(47,125,59,0.28)] transition duration-300 hover:bg-[#256531]"
                >
                  Direkt anrufen
                </a>

                <Link
                  href="/kontakt"
                  onClick={() => setMenuOpen(false)}
                  className="inline-flex min-h-[48px] items-center justify-center rounded-xl border border-[#d9d2c7] bg-[#f8f6f0] px-5 py-3 text-sm font-semibold text-[#2c241f] transition duration-300 hover:bg-[#f3efe6]"
                >
                  Anfrage stellen
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}