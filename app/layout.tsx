import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Mind & Soul — психологія через творчість | Портфоліо Комар М.В.",
  description:
    "Персональний сайт майбутнього практичного психолога (арттерапевтичний напрям). Творчі вправи для емоційної саморегуляції, дослідження почуттів, матеріали для дітей, підлітків, батьків і студентів.",
  keywords: [
    "арттерапія",
    "практична психологія",
    "самовираження",
    "мандалотерапія",
    "ізотерапія",
    "емоційний інтелект",
    "творчі вправи",
    "Комар Марія Володимирівна",
  ],
  authors: [{ name: "Комар Марія Володимирівна" }],
  openGraph: {
    title: "Mind & Soul — психологія через творчість",
    description: "Твій простір творчості, емоційного зцілення та самопізнання.",
    siteName: "Mind & Soul",
    locale: "uk_UA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk" className="scroll-smooth">
      <body className="antialiased min-h-screen flex flex-col relative bg-cream text-ink selection:bg-lavender selection:text-ink-dark">
        {/* Subtle Paper Grain Texture */}
        <div className="grain-overlay" aria-hidden="true" />

        {/* Ambient Gradient Blobs in background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-lavender/30 blur-[100px] animate-float-slow" />
          <div className="absolute top-1/3 -right-32 w-80 h-80 rounded-full bg-rose/25 blur-[90px] animate-float-reverse" />
          <div className="absolute -bottom-32 left-1/4 w-96 h-96 rounded-full bg-sage/20 blur-[110px] animate-pulse-gentle" />
        </div>

        {/* Top Navbar */}
        <Navbar />

        {/* Main Content Area */}
        <main className="flex-grow relative z-10 pt-24 sm:pt-28">
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
