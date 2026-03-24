"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";

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
      setScrolled(window.scrollY > 18);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header className="sticky top-0 z-50">
        <div
          className={`border-b border-[#f0ece4] bg-white/92 backdrop-blur-xl transition-all duration-300 ${
            scrolled
              ? "shadow-[0_10px_35px_rgba(15,23,42,0.05)]"
              : "shadow-[0_6px_18px_rgba(15,23,42,0.03)]"
          }`}
        >
          <div
            className={`mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-10 transition-all duration-300 ${
              scrolled ? "py-3" : "py-4"
            }`}
          >
            {/* Logo */}
            <Link
              href="/"
              className="flex shrink-0 items-center"
              onClick={() => setMenuOpen(false)}
            >
              <Image
                src="/logogo.png"
                alt="Elektro Siegfried"
                width={900}
                height={280}
                priority
                className={`w-auto object-contain transition-all duration-300 ${
                  scrolled
                    ? "h-[70px] sm:h-[78px] lg:h-[85px]"
                    : "h-[80px] sm:h-[90px] lg:h-[100px]"
                }`}
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden items-center gap-7 xl:flex">
              {navItems.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`group relative text-[15px] font-semibold transition duration-300 ${
                      isActive
                        ? "text-[#2f7d3b]"
                        : "text-[#2c241f] hover:text-[#2f7d3b]"
                    }`}
                  >
                    {item.name}
                    <span
                      className={`absolute -bottom-1.5 left-0 h-[2px] rounded-full bg-[#2f7d3b] transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* Anfrage Button */}
            <div className="flex items-center gap-2 sm:gap-3">
              <Link
                href="/kontakt"
                onClick={() => setMenuOpen(false)}
                className="hidden min-h-[46px] items-center justify-center rounded-xl bg-[#2f7d3b] px-6 py-2.5 text-sm font-bold !text-white shadow-[0_12px_30px_rgba(47,125,59,0.18)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#276a32] sm:inline-flex"
              >
                Anfrage stellen
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>

              {/* Burger */}
              <button
                type="button"
                aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen((prev) => !prev)}
                className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#e3ddd2] bg-white text-[#2c241f] shadow-sm transition duration-300 hover:bg-[#f9f7f2] xl:hidden"
              >
                <span className="relative block h-5 w-6">
                  <span
                    className={`absolute left-0 top-0 h-0.5 w-6 rounded-full bg-[#2c241f] transition-all duration-300 ${
                      menuOpen ? "translate-y-2 rotate-45" : ""
                    }`}
                  />
                  <span
                    className={`absolute left-0 top-2 h-0.5 w-6 rounded-full bg-[#2c241f] transition-all duration-300 ${
                      menuOpen ? "opacity-0" : ""
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
        </div>
      </header>

      {/* Overlay */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 z-[60] bg-black/20 transition-all duration-300 xl:hidden ${
          menuOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      />

      {/* Mobile Menü */}
      <div
        className={`fixed right-0 top-0 z-[70] h-full w-[88%] max-w-sm bg-white shadow-[0_24px_80px_rgba(0,0,0,0.15)] transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col px-6 pb-6 pt-6">
          {/* Logo oben */}
          <div className="flex items-center justify-between border-b border-[#f0ece4] pb-5">
            <Image
              src="/Logowebsit.png"
              alt="Elektro Siegfried"
              width={420}
              height={130}
              className="h-[58px] w-auto object-contain"
            />

            <button
              onClick={() => setMenuOpen(false)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#e3ddd2] bg-white text-[#2c241f] transition hover:bg-[#f9f7f2]"
            >
              ✕
            </button>
          </div>

          {/* Navigation */}
          <nav className="mt-6 flex flex-col gap-3">
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`rounded-xl px-4 py-3 font-semibold transition ${
                    isActive
                      ? "bg-[#f4faf5] text-[#2f7d3b]"
                      : "text-[#2c241f] hover:bg-[#f9f7f2]"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Button unten */}
          <div className="mt-auto">
            <Link
              href="/kontakt"
              onClick={() => setMenuOpen(false)}
              className="flex min-h-[48px] items-center justify-center rounded-xl bg-[#2f7d3b] py-3 text-center font-bold text-white shadow-[0_12px_28px_rgba(47,125,59,0.18)] transition hover:bg-[#276a32]"
            >
              Anfrage stellen
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}