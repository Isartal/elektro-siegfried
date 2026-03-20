"use client";

import { useEffect, useState } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white shadow-xl border-t border-stone-200">
      <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

        <p className="text-sm text-stone-700">
          Diese Website verwendet Cookies, um die Nutzung zu verbessern.
          Weitere Informationen finden Sie in unserer{" "}
          <a href="/datenschutz" className="text-[#2f7d3b] font-semibold">
            Datenschutzerklärung
          </a>.
        </p>

        <div className="flex gap-3">

          <button
            onClick={declineCookies}
            className="rounded-lg border border-stone-300 px-4 py-2 text-sm font-semibold text-stone-700 hover:bg-stone-100"
          >
            Ablehnen
          </button>

          <button
            onClick={acceptCookies}
            className="rounded-lg bg-[#2f7d3b] px-4 py-2 text-sm font-semibold text-white hover:bg-[#256531]"
          >
            Akzeptieren
          </button>

        </div>
      </div>
    </div>
  );
}