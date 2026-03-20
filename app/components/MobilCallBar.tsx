"use client";

export default function MobileCallBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <a
        href="tel:+4917644481312"
        className="flex items-center justify-center gap-2 bg-[#2f7d3b] py-4 text-center text-base font-bold text-white shadow-[0_-8px_30px_rgba(0,0,0,0.2)] transition hover:bg-[#256531]"
      >
        📞 Jetzt anrufen
        <span className="font-semibold">0176 444 81312</span>
      </a>
    </div>
  );
}