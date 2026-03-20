import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-stone-200 bg-[#f7f4ee]">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-14 text-sm sm:grid-cols-2 lg:grid-cols-4 lg:gap-14 lg:px-10">
        
        {/* LOGO + TEXT */}
        <div className="flex flex-col items-center text-center gap-5 sm:items-start sm:text-left">
          <Image
            src="/Logowebsiteee.png"
            alt="Elektro Siegfried"
            width={220}
            height={70}
            className="h-auto w-auto"
          />

          <p className="max-w-xs leading-7 text-stone-600">
            Elektromeisterbetrieb Elektro Siegfried für Elektroinstallationen,
            Sanierung, Beleuchtung, Photovoltaik, Wallboxen, Wärmepumpen und
            Smart Home in München & Umgebung.
          </p>

          <div className="h-[2px] w-20 rounded-full bg-[#2f7d3b]" />
        </div>

        {/* NAVIGATION */}
        <div className="text-center sm:text-left">
          <h3 className="mb-4 text-base font-bold text-stone-900">
            Navigation
          </h3>
          <ul className="space-y-3 text-stone-600">
            <li>
              <Link href="/" className="block py-1 transition hover:text-[#2f7d3b]">
                Startseite
              </Link>
            </li>
            <li>
              <Link href="/leistungen" className="block py-1 transition hover:text-[#2f7d3b]">
                Leistungen
              </Link>
            </li>
            <li>
              <Link href="/referenzen" className="block py-1 transition hover:text-[#2f7d3b]">
                Referenzen
              </Link>
            </li>
            <li>
              <Link href="/ueber-uns" className="block py-1 transition hover:text-[#2f7d3b]">
                Über uns
              </Link>
            </li>
            <li>
              <Link href="/kontakt" className="block py-1 transition hover:text-[#2f7d3b]">
                Kontakt
              </Link>
            </li>
          </ul>
        </div>

        {/* LEISTUNGEN */}
        <div className="text-center sm:text-left">
          <h3 className="mb-4 text-base font-bold text-stone-900">
            Leistungen
          </h3>
          <ul className="space-y-3 text-stone-600">
            <li>Elektroinstallationen</li>
            <li>Sanierung und Modernisierung</li>
            <li>Hausverwaltungen</li>
            <li>Beleuchtung und Lichtkonzepte</li>
            <li>Photovoltaik und Wallboxen</li>
            <li>Wärmepumpen</li>
            <li>Smart Home</li>
            <li>E Check</li>
          </ul>
        </div>

        {/* KONTAKT */}
        <div className="text-center sm:text-left">
          <h3 className="mb-4 text-base font-bold text-stone-900">
            Kontakt
          </h3>

          <ul className="space-y-3 text-stone-600">
            <li>
              <a
                href="tel:+4917644481312"
                className="block py-1 transition hover:text-[#2f7d3b]"
              >
                0176 444 81312
              </a>
            </li>

            <li>
              <a
                href="mailto:info@elektro-siegfried.de"
                className="block py-1 transition hover:text-[#2f7d3b]"
              >
                info@elektro-siegfried.de
              </a>
            </li>

            <li className="py-1">München & Umgebung</li>
          </ul>

          <h3 className="mb-4 mt-8 text-base font-bold text-stone-900">
            Rechtliches
          </h3>

          <ul className="space-y-3 text-stone-600">
            <li>
              <Link href="/impressum" className="block py-1 transition hover:text-[#2f7d3b]">
                Impressum
              </Link>
            </li>
            <li>
              <Link href="/datenschutz" className="block py-1 transition hover:text-[#2f7d3b]">
                Datenschutz
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-stone-200 bg-white/60">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-3 px-6 py-6 text-center text-sm text-stone-500 sm:flex-row sm:justify-between sm:text-left lg:px-10">
          
          <p>
            © {new Date().getFullYear()} Elektromeisterbetrieb Elektro Siegfried
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <span>München & Umgebung</span>

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