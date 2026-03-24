import "./globals.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import MobileContactBar from "@/app/components/MobileContactBar";
import IntroOverlay from "@/app/components/IntroOverlay";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.elektro-siegfried.de"),
  title: "Elektro Siegfried",
  description: "Elektromeisterbetrieb in München und Umgebung",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="de">
      <body className="bg-[#f9f7f2] text-[#1f1715] antialiased">
        <IntroOverlay />
        <Header />
        <main className="pb-24 md:pb-0">{children}</main>
        <Footer />
        <MobileContactBar />
      </body>
    </html>
  );
}