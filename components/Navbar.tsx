"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Palette, 
  Menu, 
  X, 
  Sparkles, 
  Heart, 
  Volume2, 
  VolumeX, 
  BookOpen, 
  User, 
  Compass, 
  FileText, 
  Mail,
  ChevronRight,
  Send
} from "lucide-react";
import { SITE_INFO } from "@/lib/data";

const NAV_LINKS = [
  { href: "/", label: "Головна", icon: Sparkles, desc: "Простір творчості" },
  { href: "/about", label: "Про мене", icon: User, desc: "Моє професійне Я" },
  { href: "/art-therapy", label: "Арттерапія", icon: Compass, desc: "Методи & Модальності" },
  { href: "/workshop", label: "Майстерня", icon: Palette, desc: "Полотно & Вправи" },
  { href: "/resources", label: "Матеріали", icon: BookOpen, desc: "Статті & Поради" },
  { href: "/resume", label: "Резюме", icon: FileText, desc: "Освіта & Навички" },
  { href: "/contact", label: "Контакти", icon: Mail, desc: "Будьмо на зв'язку" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open & listen for ESC key
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") setMobileMenuOpen(false);
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileMenuOpen]);

  // Ambient sound synthesizer using Web Audio API (gentle therapeutic bell chime at 432 Hz)
  const toggleSound = () => {
    if (!soundEnabled) {
      try {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        const ctx = new AudioCtx();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(432, ctx.currentTime); // 432 Hz healing harmonic
        gain.gain.setValueAtTime(0.01, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.12, ctx.currentTime + 0.4);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 3.2);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 3.3);
      } catch (e) {
        console.error(e);
      }
      setSoundEnabled(true);
    } else {
      setSoundEnabled(false);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "py-3 glass-panel shadow-soft border-b border-lavender/30"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="group flex items-center gap-3 transition-transform duration-200 hover:scale-105"
            >
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-lavender to-rose flex items-center justify-center shadow-sm text-ink-dark group-hover:rotate-6 transition-transform">
                <Palette className="w-5 h-5 text-lavender-deep" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-ink flex items-center gap-1.5">
                  Mind &amp; Soul
                  <span className="inline-block w-2 h-2 rounded-full bg-lavender-dark animate-pulse" />
                </span>
                <span className="text-[11px] font-medium text-ink-light tracking-wide -mt-1 hidden sm:block">
                  психологія через творчість
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 bg-white/70 backdrop-blur-md px-4 py-1.5 rounded-full border border-beige/60 shadow-sm">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-3.5 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "text-ink-dark font-semibold bg-lavender/40 shadow-sm"
                        : "text-ink-light hover:text-ink hover:bg-cream"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-lavender-deep rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right actions: Audio chime & CTA */}
            <div className="hidden sm:flex items-center gap-3">
              <button
                onClick={toggleSound}
                title={soundEnabled ? "Вимкнути атмосферний звук" : "Увімкнути атмосферний звук (432 Hz)"}
                className={`p-2.5 rounded-full border transition-all ${
                  soundEnabled
                    ? "bg-lavender text-lavender-deep border-lavender-dark shadow-sm"
                    : "bg-white/60 text-ink-light border-beige hover:bg-white"
                }`}
              >
                {soundEnabled ? (
                  <Volume2 className="w-4 h-4 animate-bounce" />
                ) : (
                  <VolumeX className="w-4 h-4" />
                )}
              </button>

              <Link
                href="/workshop"
                className="px-4 py-2 text-sm font-semibold text-white bg-lavender-deep hover:bg-lavender-deep/90 rounded-full shadow-sm hover:shadow-card transition-all duration-200 flex items-center gap-1.5"
              >
                <Heart className="w-3.5 h-3.5 fill-rose text-rose" />
                <span>Творча майстерня</span>
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={toggleSound}
                className="p-2.5 rounded-2xl bg-white/70 backdrop-blur border border-beige text-ink"
                aria-label="Звуковий ефект"
              >
                {soundEnabled ? (
                  <Volume2 className="w-4 h-4 text-lavender-deep animate-bounce" />
                ) : (
                  <VolumeX className="w-4 h-4 text-ink-light" />
                )}
              </button>

              <button
                onClick={() => setMobileMenuOpen(true)}
                className="p-2.5 rounded-2xl bg-white/80 backdrop-blur border border-beige text-ink hover:bg-white transition-all shadow-sm"
                aria-label="Відкрити меню"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* FULL-SCREEN PREMIUM MOBILE MENU OVERLAY (z-[100]) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-cream/98 backdrop-blur-2xl lg:hidden flex flex-col justify-between p-5 sm:p-7 overflow-y-auto animate-fadeIn">
          {/* Top Bar of Mobile Menu */}
          <div className="flex items-center justify-between pb-5 border-b border-beige/80">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-lavender to-rose flex items-center justify-center text-lavender-deep shadow-sm">
                <Palette className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold text-ink">Mind &amp; Soul</span>
                <span className="text-[10px] text-ink-light -mt-0.5 font-medium">
                  психологія через творчість
                </span>
              </div>
            </Link>

            <div className="flex items-center gap-2">
              <button
                onClick={toggleSound}
                className={`p-2.5 rounded-2xl border transition-all ${
                  soundEnabled
                    ? "bg-lavender text-lavender-deep border-lavender-dark shadow-sm"
                    : "bg-white text-ink-light border-beige"
                }`}
                title="Атмосферний звук 432 Hz"
              >
                {soundEnabled ? (
                  <Volume2 className="w-4 h-4 animate-bounce" />
                ) : (
                  <VolumeX className="w-4 h-4" />
                )}
              </button>

              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-2xl bg-white hover:bg-rose-light text-ink border border-beige shadow-sm transition-all"
                aria-label="Закрити меню"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Navigation Links with large tap targets and descriptive subtitles */}
          <div className="py-6 flex flex-col gap-2">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-2xl transition-all ${
                    isActive
                      ? "bg-lavender/50 text-ink-dark font-bold shadow-sm border border-lavender/60"
                      : "text-ink-light hover:bg-white/90 hover:text-ink border border-transparent"
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                        isActive
                          ? "bg-lavender text-lavender-deep shadow-2xs"
                          : "bg-white text-ink-light border border-beige/60"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="text-base font-semibold leading-tight text-ink">
                        {link.label}
                      </span>
                      <span className="text-[11px] text-ink-light font-normal">
                        {link.desc}
                      </span>
                    </div>
                  </div>

                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${
                      isActive ? "text-lavender-deep translate-x-1" : "text-beige"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* Bottom Card: Credo, CTA & Quick Contacts */}
          <div className="pt-5 border-t border-beige/80 flex flex-col gap-4">
            <div className="text-center p-3.5 rounded-2xl bg-white/70 border border-beige/70">
              <span className="text-[10px] font-bold text-lavender-deep uppercase tracking-widest block mb-0.5">
                Професійне кредо
              </span>
              <p className="font-hand text-xl text-ink leading-snug">
                «{SITE_INFO.slogan}»
              </p>
            </div>

            <Link
              href="/workshop"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3.5 text-center text-sm font-semibold text-white bg-lavender-deep hover:bg-lavender-deep/90 rounded-2xl shadow-card transition-all flex items-center justify-center gap-2"
            >
              <Heart className="w-4 h-4 fill-rose text-rose" />
              <span>Відкрити творчу майстерню</span>
            </Link>

            <div className="flex items-center justify-center gap-4 text-xs text-ink-light pt-1">
              <a
                href={`mailto:${SITE_INFO.author.email}`}
                className="hover:underline flex items-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5 text-lavender-deep" />
                <span>Email</span>
              </a>
              <span>•</span>
              <a
                href={`https://t.me/${SITE_INFO.author.telegram.replace("@", "")}`}
                target="_blank"
                rel="noreferrer"
                className="hover:underline flex items-center gap-1.5"
              >
                <Send className="w-3.5 h-3.5 text-indigo-500" />
                <span>Telegram</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
