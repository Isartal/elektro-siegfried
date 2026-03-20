import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum | Elektromeisterbetrieb Siegfried",
  description:
    "Impressum von Elektromeisterbetrieb Siegfried in München.",
};

export default function ImpressumPage() {
  return (
    <section className="bg-[#f8f6f0] py-20">
      <div className="mx-auto max-w-4xl px-6 lg:px-10">

        <h1 className="text-4xl font-bold text-stone-900">
          Impressum
        </h1>

        <div className="mt-6 h-[4px] w-40 bg-[#2f7d3b]" />

        <div className="mt-10 space-y-10 text-lg leading-8 text-stone-700">

          <div>
            <h2 className="text-xl font-bold text-stone-900">
              Angaben gemäß § 5 TMG
            </h2>

            <p className="mt-4">
              Elektromeisterbetrieb Elektro Siegfried<br />
              Inhaber: Sekandar Bakhtar<br />
              Elektromeister<br />
              Linkstraße 57<br />
              80933 München<br />
              Deutschland
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-stone-900">
              Kontakt
            </h2>

            <p className="mt-4">
              Telefon: 0176 444 81312<br />
              E Mail: info@elektrosiegfried.de
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-stone-900">
              Handwerkskammer
            </h2>

            <p className="mt-4">
              Eingetragen in der Handwerkskammer für München und Oberbayern
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-stone-900">
              Berufsbezeichnung
            </h2>

            <p className="mt-4">
              Elektromeister<br />
              Verliehen in Deutschland
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-stone-900">
              Verantwortlich für den Inhalt gemäß § 55 Abs. 2 RStV
            </h2>

            <p className="mt-4">
              Sekandar Bakhtar<br />
              Linkstraße 57<br />
              80933 München
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-stone-900">
              Haftung für Inhalte
            </h2>

            <p className="mt-4">
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene
              Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
              verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
              Diensteanbieter jedoch nicht verpflichtet, übermittelte
              oder gespeicherte fremde Informationen zu überwachen
              oder nach Umständen zu forschen, die auf eine
              rechtswidrige Tätigkeit hinweisen.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-stone-900">
              Haftung für Links
            </h2>

            <p className="mt-4">
              Unser Angebot enthält Links zu externen Websites Dritter,
              auf deren Inhalte wir keinen Einfluss haben.
              Deshalb können wir für diese fremden Inhalte auch
              keine Gewähr übernehmen.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-stone-900">
              Urheberrecht
            </h2>

            <p className="mt-4">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke
              auf diesen Seiten unterliegen dem deutschen Urheberrecht.
              Die Vervielfältigung, Bearbeitung, Verbreitung und jede
              Art der Verwertung außerhalb der Grenzen des
              Urheberrechtes bedürfen der schriftlichen Zustimmung
              des jeweiligen Autors bzw. Erstellers.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}