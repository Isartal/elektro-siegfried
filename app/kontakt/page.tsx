import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt | Elektro Siegfried",
  description:
    "Kontaktieren Sie Elektro Siegfried für Elektroinstallationen, Sanierung, Beleuchtung, Photovoltaik, Wallboxen, Wärmepumpen und Notdienst in München und Umgebung.",
};

export default function KontaktPage() {
  return (
    <main className="bg-[#f7f5ef] text-[#18181b]">
      {/* INTRO */}
      <section className="relative overflow-hidden bg-[#f7f5ef] py-16 sm:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(47,125,59,0.06),transparent_35%)]" />

        <div className="relative mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-[#2f7d3b]">
              Kontakt
            </p>

            <div className="mb-5 h-[2px] w-24 rounded-full bg-[#2f7d3b]" />

            <h1 className="mb-6 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl md:text-5xl lg:text-6xl">
              Kontakt für Projekte
              <span className="block text-stone-700">
                in München & Umgebung
              </span>
            </h1>

            <p className="text-base leading-7 text-stone-600 sm:text-lg sm:leading-8">
              Sprechen Sie mit Elektro Siegfried über Ihr Vorhaben. Wir melden
              uns zeitnah persönlich bei Ihnen zurück und stimmen die nächsten
              Schritte klar mit Ihnen ab.
            </p>
          </div>
        </div>
      </section>

      {/* KONTAKT + FORM */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
            {/* DIREKTKONTAKT */}
            <div className="group relative overflow-hidden rounded-[2rem] border border-stone-200/80 bg-[#fffdfa] p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_80px_rgba(15,23,42,0.1)] sm:p-8">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(47,125,59,0.08),transparent_35%)]" />
              <div className="absolute left-0 top-0 h-[4px] w-full bg-[#2f7d3b]" />

              <div className="relative">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#2f7d3b]">
                  Direktkontakt
                </p>

                <h2 className="mb-8 text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">
                  Schnell erreichbar
                  <span className="block text-stone-700">
                    und klar abgestimmt
                  </span>
                </h2>

                <div className="space-y-8">
                  <div>
                    <p className="mb-2 text-sm text-stone-500">Telefon</p>
                    <a
                      href="tel:+4917644481312"
                      className="break-words text-xl font-semibold !text-stone-900 transition-colors duration-200 hover:!text-[#2f7d3b] sm:text-2xl"
                    >
                      0176 444 81312
                    </a>
                  </div>

                  <div>
                    <p className="mb-2 text-sm text-stone-500">E Mail</p>
                    <a
                      href="mailto:info@elektro-siegfried.de"
                      className="break-all text-lg font-semibold !text-stone-900 transition-colors duration-200 hover:!text-[#2f7d3b] sm:text-xl"
                    >
                      info@elektro-siegfried.de
                    </a>
                  </div>

                  <div>
                    <p className="mb-2 text-sm text-stone-500">Einsatzgebiet</p>
                    <p className="text-lg font-semibold text-stone-900 sm:text-xl">
                      München & Umgebung
                    </p>
                  </div>
                </div>

                <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
                  <a
                    href="tel:+4917644481312"
                    className="inline-flex min-h-[48px] w-full items-center justify-center rounded-xl bg-[#2f7d3b] px-6 py-3 font-bold !text-white shadow-[0_12px_30px_rgba(47,125,59,0.22)] transition hover:bg-[#256531] hover:shadow-[0_16px_36px_rgba(47,125,59,0.28)] sm:w-auto"
                  >
                    Anrufen
                  </a>

                  <a
                    href="mailto:info@elektro-siegfried.de"
                    className="inline-flex min-h-[48px] w-full items-center justify-center rounded-xl border border-stone-300 bg-white px-6 py-3 font-bold text-stone-700 transition hover:border-[#2f7d3b] hover:text-[#2f7d3b] sm:w-auto"
                  >
                    E Mail senden
                  </a>
                </div>
              </div>
            </div>

            {/* FORMULAR */}
            <div className="group relative overflow-hidden rounded-[2rem] border border-stone-200/80 bg-[#fffdfa] p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_80px_rgba(15,23,42,0.1)] sm:p-8">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(47,125,59,0.08),transparent_35%)]" />
              <div className="absolute left-0 top-0 h-[4px] w-full bg-[#2f7d3b]" />

              <div className="relative">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#2f7d3b]">
                  Anfrage
                </p>

                <h2 className="mb-8 text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">
                  Projekt unverbindlich
                  <span className="block text-stone-700">anfragen</span>
                </h2>

                <form className="space-y-5">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-stone-600">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Ihr Name"
                      className="w-full rounded-xl border border-stone-200 bg-[#fbfaf7] px-4 py-3 outline-none transition focus:border-[#2f7d3b] focus:ring-4 focus:ring-[#2f7d3b]/10"
                    />
                  </div>

                  <div className="grid gap-5 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-stone-600">
                        Telefon
                      </label>
                      <input
                        type="text"
                        placeholder="Ihre Telefonnummer"
                        className="w-full rounded-xl border border-stone-200 bg-[#fbfaf7] px-4 py-3 outline-none transition focus:border-[#2f7d3b] focus:ring-4 focus:ring-[#2f7d3b]/10"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium text-stone-600">
                        E Mail
                      </label>
                      <input
                        type="email"
                        placeholder="Ihre E Mail"
                        className="w-full rounded-xl border border-stone-200 bg-[#fbfaf7] px-4 py-3 outline-none transition focus:border-[#2f7d3b] focus:ring-4 focus:ring-[#2f7d3b]/10"
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-stone-600">
                        Leistungsbereich
                      </label>
                      <select className="w-full rounded-xl border border-stone-200 bg-[#fbfaf7] px-4 py-3 outline-none transition focus:border-[#2f7d3b] focus:ring-4 focus:ring-[#2f7d3b]/10">
                        <option>Bitte auswählen</option>
                        <option>Elektroinstallationen</option>
                        <option>Sanierung und Modernisierung</option>
                        <option>Beleuchtung und Lichtkonzepte</option>
                        <option>Photovoltaik und Wallboxen</option>
                        <option>Wärmepumpen</option>
                        <option>Smart Home</option>
                        <option>E Check Prüfung nach DIN VDE</option>
                        <option>Notdienst / Störung</option>
                        <option>Sonstiges</option>
                      </select>
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium text-stone-600">
                        Art der Anfrage
                      </label>
                      <select className="w-full rounded-xl border border-stone-200 bg-[#fbfaf7] px-4 py-3 outline-none transition focus:border-[#2f7d3b] focus:ring-4 focus:ring-[#2f7d3b]/10">
                        <option>Bitte auswählen</option>
                        <option>Beratung</option>
                        <option>Neues Projekt</option>
                        <option>Sanierung</option>
                        <option>Wartung</option>
                        <option>Störung</option>
                        <option>Rückrufwunsch</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-stone-600">
                      Ort / Objekt
                    </label>
                    <input
                      type="text"
                      placeholder="Zum Beispiel München, Wohnung, Haus oder Gewerbeobjekt"
                      className="w-full rounded-xl border border-stone-200 bg-[#fbfaf7] px-4 py-3 outline-none transition focus:border-[#2f7d3b] focus:ring-4 focus:ring-[#2f7d3b]/10"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-stone-600">
                      Nachricht
                    </label>
                    <textarea
                      rows={6}
                      placeholder="Kurz Ihr Projekt beschreiben, Ort, Zeitraum und gewünschte Leistung"
                      className="w-full rounded-xl border border-stone-200 bg-[#fbfaf7] px-4 py-3 outline-none transition focus:border-[#2f7d3b] focus:ring-4 focus:ring-[#2f7d3b]/10"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-xl bg-[#2f7d3b] py-4 font-bold text-white shadow-[0_12px_30px_rgba(47,125,59,0.22)] transition hover:bg-[#256531] hover:shadow-[0_16px_36px_rgba(47,125,59,0.28)]"
                  >
                    Anfrage senden
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f7f5ef] py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="relative overflow-hidden rounded-[2rem] border border-[#d4e4d6] bg-[#e3f1e5] p-6 text-center shadow-[0_20px_50px_rgba(47,125,59,0.12)] sm:p-8 md:p-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.55),transparent_32%)]" />

            <div className="relative">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#2f7d3b]">
                Schnelle Rückmeldung
              </p>

              <h2 className="mb-4 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
                Wir melden uns
                <span className="block text-stone-700">
                  zeitnah bei Ihnen
                </span>
              </h2>

              <p className="mx-auto mb-8 max-w-3xl text-base leading-7 text-stone-600 sm:text-lg sm:leading-8">
                Ob Elektroinstallation oder Modernisierung: Wir beraten Sie
                persönlich, strukturiert und zuverlässig.
              </p>

              <div className="flex flex-col justify-center gap-4 sm:flex-row sm:flex-wrap">
                <a
                  href="tel:+4917644481312"
                  className="inline-flex min-h-[48px] w-full items-center justify-center rounded-xl bg-[#2f7d3b] px-6 py-3 font-bold !text-white shadow-[0_12px_30px_rgba(47,125,59,0.22)] transition hover:bg-[#256531] hover:shadow-[0_16px_36px_rgba(47,125,59,0.28)] sm:w-auto"
                >
                  Anrufen
                </a>

                <a
                  href="mailto:info@elektro-siegfried.de"
                  className="inline-flex min-h-[48px] w-full items-center justify-center rounded-xl border border-[#2f7d3b] bg-white px-6 py-3 font-bold text-[#2f7d3b] transition hover:bg-[#2f7d3b] hover:text-white sm:w-auto"
                >
                  E Mail senden
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GOOGLE MAP */}
      <section className="bg-[#f1eee6] py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-8 max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#2f7d3b]">
              Standort
            </p>

            <h2 className="mb-4 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
              In München
              <span className="block text-stone-700">
                und Umgebung für Sie im Einsatz
              </span>
            </h2>

            <p className="text-base leading-7 text-stone-600 sm:text-lg sm:leading-8">
              Wir betreuen Projekte im Raum München schnell, zuverlässig und mit
              klarer Abstimmung.
            </p>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-[0_16px_40px_rgba(0,0,0,0.05)]">
            <iframe
              src="https://www.google.com/maps?q=München&output=embed"
              width="100%"
              height="420"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
}