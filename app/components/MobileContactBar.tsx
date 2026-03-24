"use client";

import { Phone, MessageCircle } from "lucide-react";

export default function MobileContactBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div className="bg-gradient-to-t from-[#f9f7f2] via-[#f9f7f2]/90 to-transparent pt-3">
        
        <div className="mx-auto max-w-md px-4 pb-4">
          <div className="grid grid-cols-2 gap-3 rounded-[1.4rem] border border-white/60 bg-white/90 p-3 shadow-[0_-10px_40px_rgba(15,23,42,0.18)] backdrop-blur-xl">
            
            {/* CALL */}
            <a
              href="tel:+4917644481312"
              className="flex min-h-[54px] items-center justify-center gap-2 rounded-[1rem] bg-[#2f7d3b] px-4 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(47,125,59,0.28)] transition hover:bg-[#276a32] active:scale-[0.97]"
            >
              <Phone className="h-4 w-4" />
              Anrufen
            </a>

            {/* WHATSAPP */}
            <a
              href="https://wa.me/4917644481312?text=Hallo%20ich%20interessiere%20mich%20für%20Ihre%20Leistungen"
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-[54px] items-center justify-center gap-2 rounded-[1rem] border border-[#d8eadc] bg-[#f4faf5] px-4 text-sm font-semibold text-[#2f7d3b] transition hover:bg-[#ebf6ed] active:scale-[0.97]"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>

          </div>
        </div>

      </div>
    </div>
  );
}