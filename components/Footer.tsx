"use client";

import React from "react";
import Link from "next/link";
import { Palette, Heart, Mail, Send, ShieldAlert, Sparkles, MapPin } from "lucide-react";
import { SITE_INFO } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative bg-[#F4EFE6] text-ink pt-16 pb-12 mt-24 border-t border-beige/80 overflow-hidden">
      {/* Decorative Wave Top */}
      <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-r from-lavender via-rose to-sage opacity-70" />

      {/* Decorative floating blur circles */}
      <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-lavender/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 -right-20 w-80 h-80 bg-rose/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-beige">
          {/* Col 1: Brand & Credo */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-lavender flex items-center justify-center text-lavender-deep">
                <Palette className="w-5 h-5" />
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-ink">
                Mind &amp; Soul
              </span>
            </Link>
            <p className="text-sm text-ink-light leading-relaxed">
              {SITE_INFO.subtitle} — простір психологічного самопізнання, емоційної підтримки та арттерапевтичних напрацювань.
            </p>
            <div className="p-3.5 rounded-2xl bg-white/70 border border-lavender/40 shadow-sm">
              <span className="text-xs font-semibold text-lavender-deep uppercase tracking-wider block mb-1">
                Професійне кредо
              </span>
              <p className="font-hand text-lg text-ink leading-snug">
                «{SITE_INFO.credo}»
              </p>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="flex flex-col gap-3">
            <h4 className="font-serif text-base font-bold text-ink mb-1 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-lavender-dark" />
              Навігація по сайту
            </h4>
            <ul className="space-y-2 text-sm text-ink-light">
              <li>
                <Link href="/" className="hover:text-lavender-deep transition-colors">
                  Головна сторінка
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-lavender-deep transition-colors">
                  Про мене (Моє професійне Я)
                </Link>
              </li>
              <li>
                <Link href="/art-therapy" className="hover:text-lavender-deep transition-colors">
                  Арттерапія в практичній психології
                </Link>
              </li>
              <li>
                <Link href="/workshop" className="hover:text-lavender-deep transition-colors">
                  Творча майстерня та вправи
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-lavender-deep transition-colors">
                  Корисні матеріали та статті
                </Link>
              </li>
              <li>
                <Link href="/resume" className="hover:text-lavender-deep transition-colors">
                  Резюме та кваліфікація
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-lavender-deep transition-colors">
                  Контактні дані та зворотний звʼязок
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Author & Education */}
          <div className="flex flex-col gap-3">
            <h4 className="font-serif text-base font-bold text-ink mb-1 flex items-center gap-1.5">
              <Heart className="w-4 h-4 text-rose-dark" />
              Авторка проєкту
            </h4>
            <p className="text-sm font-semibold text-ink">
              {SITE_INFO.author.fullName}
            </p>
            <p className="text-xs text-ink-light leading-relaxed">
              {SITE_INFO.author.course}
            </p>
            <div className="mt-2 flex flex-col gap-2 text-xs text-ink-light">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-sage-dark" />
                <span>{SITE_INFO.author.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-lavender-deep" />
                <a
                  href={`mailto:${SITE_INFO.author.email}`}
                  className="hover:underline truncate"
                >
                  {SITE_INFO.author.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Send className="w-3.5 h-3.5 text-indigo-500" />
                <a
                  href={`https://t.me/${SITE_INFO.author.telegram.replace("@", "")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  Telegram: {SITE_INFO.author.telegram}
                </a>
              </div>
            </div>
          </div>

          {/* Col 4: Mandatory Ethical Disclaimer */}
          <div className="flex flex-col gap-3">
            <div className="p-4 rounded-3xl bg-rose-light/70 border border-rose/80 shadow-sm flex flex-col gap-2">
              <div className="flex items-center gap-2 text-ink-dark font-semibold text-xs">
                <ShieldAlert className="w-4 h-4 text-rose-dark flex-shrink-0" />
                <span>Важливе застереження</span>
              </div>
              <p className="text-[11px] leading-relaxed text-ink-light text-justify">
                {SITE_INFO.disclaimer}
              </p>
            </div>
            <p className="text-[11px] text-ink-light italic">
              Лабораторна робота № 1 з розробки професійного портфоліо майбутнього практичного психолога.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ink-light">
          <p>© 2026 «Mind &amp; Soul — психологія через творчість». Всі права захищено.</p>
          <div className="flex items-center gap-4">
            <span className="font-hand text-base text-ink">Створено з турботою та творчістю</span>
            <div className="w-2 h-2 rounded-full bg-sage" />
            <Link href="/contact" className="hover:underline">
              Конфіденційність
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
