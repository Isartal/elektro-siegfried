"use client";

import { useEffect, useState } from "react";

export default function IntroOverlay() {
  const [visible, setVisible] = useState(true);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const alreadyPlayed = sessionStorage.getItem("introPlayed");

    if (alreadyPlayed) {
      setVisible(false);
      return;
    }

    const fadeTimer = setTimeout(() => {
      setHide(true);
    }, 1600);

    const removeTimer = setTimeout(() => {
      sessionStorage.setItem("introPlayed", "true");
      setVisible(false);
    }, 2300);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-black transition-opacity duration-700 ${
        hide ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <div className="relative flex flex-col items-center justify-center">
        <div className="absolute h-40 w-40 rounded-full bg-[#2f7d3b]/20 blur-3xl" />

        <div className="animate-intro-pop relative flex items-center justify-center">
          <svg
            className="h-24 w-24 drop-shadow-[0_0_30px_rgba(47,125,59,0.7)] sm:h-28 sm:w-28"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M13 2L4 14h6l-2 8 10-12h-6l1-8z"
              fill="#2f7d3b"
            />
          </svg>
        </div>

        <p className="mt-6 animate-intro-text text-center text-xs font-semibold uppercase tracking-[0.35em] text-white/85 sm:text-sm">
          Elektro Siegfried
        </p>
      </div>
    </div>
  );
}