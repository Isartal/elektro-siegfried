import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";

const navigationLinks = [
  { name: "Startseite", href: "/" },
  { name: "Leistungen", href: "/leistungen" },
  { name: "Referenzen", href: "/referenzen" },
  { name: "Über uns", href: "/ueber-uns" },
  { name: "Kontakt", href: "/kontakt" },
];

const serviceLinks = [
  "Elektroinstallationen",
  "Sanierung und Modernisierung",
  "Hausverwaltungen",
  "Beleuchtung und Lichtkonzepte",
  "Photovoltaik und Wallboxen",
  "Wärmepumpen",
  "Smart Home",
  "E Check",
];

export default function Footer() {
  return (
    <footer className="mt-0 border-t border-[#ece6dc] bg-[linear-gradient(180deg,#fcfaf6_0%,#f7f4ee_100%)]">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-10 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.9fr_1fr] lg:gap-12">
          {/* Brand */}
          <div className="rounded-[2rem] border border-[#ece6dc] bg-white/80 p-6 shadow-[0_16px_40px_rgba(15,23,42,0.05)] backdrop-blur-sm sm:p-7">
            <div className="flex flex-col items-start gap-4">
              <Link href="/" className="mx-auto mb-1 inline-flex items-center">
                <Image
                  src="/logogo.png"
                  alt="Elektro Siegfried"
                  width={500}
                  height={160}
                  className="h-[90px] w-auto object-contain sm:h-[100px] lg:h-[110px]"
                />
              </Link>

              <div className="mt-1 h-[3px] w-14 rounded-full bg-[#2f7d3b]" />

              <p className="max-w-sm text-sm leading-6 text-[#5f544d] sm:text-[15px] sm:leading-7">
                Elektromeisterbetrieb Elektro Siegfried für
                Elektroinstallationen, Sanierung, Beleuchtung, Photovoltaik,
                Wallboxen, Wärmepumpen und moderne Gebäudetechnik in München und
                Umgebung.
              </p>

              <div className="grid w-full gap-3 pt-2 sm:max-w-md">
                <a
                  href="tel:+4917644481312"
                  className="group inline-flex items-center gap-3 rounded-2xl border border-[#e8e3d9] bg-[#fcfaf6] px-4 py-3 text-[#2c241f] transition duration-300 hover:border-[#dbe9de] hover:bg-white"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f4faf5] text-[#2f7d3b] shadow-sm">
                    <Phone className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-semibold">0176 444 813 12</span>
                </a>

                <a
                  href="mailto:info@elektro-siegfried.de"
                  className="group inline-flex items-center gap-3 rounded-2xl border border-[#e8e3d9] bg-[#fcfaf6] px-4 py-3 text-[#2c241f] transition duration-300 hover:border-[#dbe9de] hover:bg-white"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f4faf5] text-[#2f7d3b] shadow-sm">
                    <Mail className="h-4 w-4" />
                  </span>
                  <span className="break-all text-sm font-semibold">
                    info@elektro-siegfried.de
                  </span>
                </a>

                <div className="inline-flex items-center gap-3 rounded-2xl border border-[#e8e3d9] bg-[#fcfaf6] px-4 py-3 text-[#2c241f]">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f4faf5] text-[#2f7d3b] shadow-sm">
                    <MapPin className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-semibold">
                    München und Umgebung
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-base font-bold tracking-tight text-[#1f1715]">
              Navigation
            </h3>
            <div className="mt-5 h-[2px] w-12 rounded-full bg-[#2f7d3b]/70" />

            <ul className="mt-6 space-y-3">
              {navigationLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-2 text-[#5f544d] transition duration-300 hover:text-[#2f7d3b]"
                  >
                    <span>{item.name}</span>
                    <ArrowUpRight className="h-4 w-4 opacity-0 transition duration-300 group-hover:translate-x-0.5 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Leistungen */}
          <div>
            <h3 className="text-base font-bold tracking-tight text-[#1f1715]">
              Leistungen
            </h3>
            <div className="mt-5 h-[2px] w-12 rounded-full bg-[#2f7d3b]/70" />

            <ul className="mt-6 space-y-3 text-[#5f544d]">
              {serviceLinks.map((service) => (
                <li key={service} className="leading-6">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Rechtliches */}
          <div>
            <div className="rounded-[2rem] border border-[#ece6dc] bg-white/75 p-6 shadow-[0_14px_36px_rgba(15,23,42,0.04)]">
              <h3 className="text-base font-bold tracking-tight text-[#1f1715]">
                Rechtliches
              </h3>
              <div className="mt-5 h-[2px] w-12 rounded-full bg-[#2f7d3b]/70" />

              <ul className="mt-6 space-y-3">
                <li>
                  <Link
                    href="/impressum"
                    className="inline-flex items-center gap-2 text-[#5f544d] transition duration-300 hover:text-[#2f7d3b]"
                  >
                    Impressum
                  </Link>
                </li>
                <li>
                  <Link
                    href="/datenschutz"
                    className="inline-flex items-center gap-2 text-[#5f544d] transition duration-300 hover:text-[#2f7d3b]"
                  >
                    Datenschutz
                  </Link>
                </li>
              </ul>

              <div className="mt-8 rounded-2xl border border-[#e8e3d9] bg-[#fcfaf6] p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2f7d3b]">
                  Elektro Siegfried
                </p>
                <p className="mt-3 text-sm leading-6 text-[#5f544d]">
                  Saubere Elektroarbeiten, strukturierte Abläufe und
                  zuverlässige Umsetzung für Projekte in München und Umgebung.
                </p>

                <Link
                  href="/kontakt"
                  className="mt-4 inline-flex min-h-[46px] items-center justify-center rounded-xl bg-[#2f7d3b] px-5 py-3 text-sm font-bold !text-white shadow-[0_12px_28px_rgba(47,125,59,0.18)] transition hover:bg-[#276a32]"
                >
                  Anfrage stellen
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#ece6dc] bg-white/70">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-5 text-center text-sm text-[#6b615b] sm:flex-row sm:px-6 sm:text-left lg:px-10">
          <p>© {new Date().getFullYear()} Elektromeisterbetrieb Elektro Siegfried</p>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:justify-end">
            <span>München und Umgebung</span>

            <Link
              href="/impressum"
              className="transition hover:text-[#2f7d3b]"
            >
              Impressum
            </Link>

            <Link
              href="/datenschutz"
              className="transition hover:text-[#2f7d3b]"
            >
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}