import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz | Elektromeisterbetrieb Elektro Siegfried",
  description:
    "Datenschutzerklärung von Elektromeisterbetrieb Elektro Siegfried in München.",
};

export default function DatenschutzPage() {
  return (
    <section className="bg-[#f8f6f0] py-20">
      <div className="mx-auto max-w-4xl px-6 lg:px-10">

        <h1 className="text-4xl font-bold text-stone-900">
          Datenschutzerklärung
        </h1>

        <div className="mt-6 h-[4px] w-40 bg-[#2f7d3b]" />

        <div className="mt-10 space-y-10 text-lg leading-8 text-stone-700">

          <div>
            <h2 className="text-xl font-bold text-stone-900">
              1. Datenschutz auf einen Blick
            </h2>

            <p className="mt-3">
              Die folgenden Hinweise geben einen einfachen Überblick darüber,
              was mit Ihren personenbezogenen Daten passiert, wenn Sie unsere
              Website besuchen. Personenbezogene Daten sind alle Daten, mit
              denen Sie persönlich identifiziert werden können.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-stone-900">
              2. Verantwortliche Stelle
            </h2>

            <p className="mt-3">
              Verantwortlich für die Datenverarbeitung auf dieser Website ist:
            </p>

            <p className="mt-4">
              Elektromeisterbetrieb Elektro Siegfried<br />
              Sekandar Bakhtar<br />
              Elektromeister<br />
              Linkstraße 57<br />
              80933 München<br />
              Deutschland<br />
              E Mail: info@elektrosiegfried.de
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-stone-900">
              3. Hosting
            </h2>

            <p className="mt-3">
              Diese Website wird bei einem externen Dienstleister gehostet.
              Die personenbezogenen Daten, die auf dieser Website erfasst werden,
              werden auf den Servern des Hosting Anbieters gespeichert.
            </p>

            <p className="mt-3">
              Hierbei kann es sich insbesondere um IP Adressen,
              Kontaktanfragen, Meta und Kommunikationsdaten,
              Kontaktdaten sowie Websitezugriffe handeln.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-stone-900">
              4. Server Log Dateien
            </h2>

            <p className="mt-3">
              Der Provider der Seiten erhebt und speichert automatisch
              Informationen in sogenannten Server Log Dateien,
              die Ihr Browser automatisch übermittelt.
            </p>

            <ul className="mt-4 list-disc pl-6 space-y-1">
              <li>IP Adresse</li>
              <li>Datum und Uhrzeit der Anfrage</li>
              <li>Browsertyp</li>
              <li>Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Hostname des zugreifenden Rechners</li>
            </ul>

            <p className="mt-3">
              Diese Daten dienen ausschließlich der technischen
              Überwachung und Verbesserung der Website.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-stone-900">
              5. Kontaktformular
            </h2>

            <p className="mt-3">
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen,
              werden Ihre Angaben aus dem Formular inklusive der von Ihnen
              angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage
              und für den Fall von Anschlussfragen bei uns gespeichert.
            </p>

            <p className="mt-3">
              Die Verarbeitung dieser Daten erfolgt auf Grundlage von
              Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der
              Erfüllung eines Vertrags oder vorvertraglicher Maßnahmen
              zusammenhängt.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-stone-900">
              6. Google Maps
            </h2>

            <p className="mt-3">
              Diese Website nutzt den Kartendienst Google Maps.
              Anbieter ist Google Ireland Limited, Gordon House,
              Barrow Street, Dublin 4, Irland.
            </p>

            <p className="mt-3">
              Zur Nutzung der Funktionen von Google Maps ist es notwendig,
              Ihre IP Adresse zu speichern.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-stone-900">
              7. Ihre Rechte
            </h2>

            <p className="mt-3">
              Sie haben jederzeit das Recht auf Auskunft über Ihre
              gespeicherten personenbezogenen Daten sowie auf
              Berichtigung oder Löschung dieser Daten.
            </p>

            <p className="mt-3">
              Außerdem haben Sie das Recht auf Einschränkung der
              Verarbeitung und auf Datenübertragbarkeit.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-stone-900">
              8. Widerspruchsrecht
            </h2>

            <p className="mt-3">
              Sie können eine bereits erteilte Einwilligung zur
              Datenverarbeitung jederzeit widerrufen.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-stone-900">
              9. Datensicherheit
            </h2>

            <p className="mt-3">
              Diese Website nutzt aus Sicherheitsgründen und zum Schutz
              der Übertragung vertraulicher Inhalte eine SSL Verschlüsselung.
            </p>

            <p className="mt-3">
              Eine verschlüsselte Verbindung erkennen Sie daran,
              dass die Adresszeile des Browsers von http auf https wechselt.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}