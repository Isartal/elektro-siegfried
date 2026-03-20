"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
  {
    src: "/elektroinstallation-muenchen.jpg",
    alt: "Elektroinstallation in München",
  },
  {
    src: "/wallbox-installation-muenchen.jpg",
    alt: "Wallbox Installation in München",
  },
  {
    src: "/solar-muenchen.jpg",
    alt: "Solaranlage in München",
  },
  {
    src: "/smart-home-muenchen.jpg",
    alt: "Smart Home Lösung in München",
  },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3500);

    return () => clearInterval(slider);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {images.map((image, i) => (
        <div
          key={image.src}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority={i === 0}
            sizes="100vw"
            className="object-cover brightness-110"
          />
        </div>
      ))}

      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-3">
        {images.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIndex(i)}
            className={`h-3 w-3 rounded-full transition ${
              i === index ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Slide ${i + 1} anzeigen`}
          />
        ))}
      </div>
    </div>
  );
}