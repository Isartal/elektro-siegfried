"use client";

import { Phone, MessageCircle } from "lucide-react";

export default function MobileContactBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div className="flex">

        {/* CALL */}
        <a
          href="tel:+4917644481312"
          className="flex-1 flex items-center justify-center gap-2 bg-[#2f7d3b] py-4 text-sm font-bold text-white shadow-[0_-8px_30px_rgba(0,0,0,0.2)] transition hover:bg-[#256531]"
        >
          <Phone className="h-5 w-5" />
          Anrufen
        </a>

        {/* WHATSAPP */}
        <a
          href="https://wa.me/4917644481312?text=Hallo%20ich%20interessiere%20mich%20für%20Ihre%20Leistungen"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] py-4 text-sm font-bold text-white transition hover:bg-[#1ebe5d]"
        >
          <MessageCircle className="h-5 w-5" />
          WhatsApp
        </a>

      </div>
    </div>
  );
}