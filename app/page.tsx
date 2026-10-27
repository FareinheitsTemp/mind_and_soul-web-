"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Sparkles, 
  Palette, 
  Heart, 
  ArrowRight, 
  BookOpen, 
  Compass, 
  User, 
  FileText, 
  Smile, 
  RefreshCw, 
  CheckCircle2, 
  Flower2, 
  Feather 
} from "lucide-react";
import { SITE_INFO, EXERCISES } from "@/lib/data";
import InteractiveMoodMap from "@/components/InteractiveMoodMap";
import ExerciseModal from "@/components/ExerciseModal";
import { Exercise } from "@/lib/data";

const INSPIRATIONAL_QUOTES = [
  {
    quote: "Творчість — це голос тієї частини душі, яка не знає слів, але глибоко відчуває світ.",
    author: "Арттерапевтична мудрість",
  },
  {
    quote: "У малюнку немає помилок. Кожна лінія — це слід вашого живого дихання.",
    author: "Принцип ізотерапії",
  },
  {
    quote: "Коли ми даємо форму своїй тривозі, вона перестає бути безмежною й стає зрозумілою.",
    author: "Практична психологія",
  },
  {
    quote: "Бути в контакті з собою — це дозволити собі відчувати всі кольори веселки, навіть найтемніші.",
    author: "Психоемоційний баланс",
  },
];

const SECTIONS_PREVIEW = [
  {
    href: "/about",
    title: "Моє професійне Я",
    desc: "Навчання на 2 курсі, наукові інтереси, цінності та прагнення в практичній психології.",
    icon: User,
    color: "from-amber-50 to-orange-50 border-amber-200/60",
    badge: "Про авторку",
  },
  {
    href: "/art-therapy",
    title: "Арттерапія",
    desc: "Що таке терапія творчістю, її види (ізо-, мандали, колаж) та робота з дітьми й підлітками.",
    icon: Compass,
    color: "from-purple-50 to-indigo-50 border-purple-200/60",
    badge: "Теорія & Метод",
  },
  {
    href: "/workshop",
    title: "Творча майстерня",
    desc: "Галерея робіт, інтерактивне полотно для малювання, карта настрою та практичні вправи.",
    icon: Palette,
    color: "from-pink-50 to-rose-50 border-pink-200/60",
    badge: "Практикум",
  },
  {
    href: "/resources",
    title: "Корисні матеріали",
    desc: "Статті, психологічні пам'ятки, вебінари та рекомендації для батьків і студентів.",
    icon: BookOpen,
    color: "from-emerald-50 to-teal-50 border-emerald-200/60",
    badge: "Бібліотека",
  },
  {
    href: "/resume",
    title: "Моє резюме",
    desc: "Освіта, професійні навички, якості, таймлайн розвитку та прагнення в професії.",
    icon: FileText,
    color: "from-blue-50 to-cyan-50 border-blue-200/60",
    badge: "Кваліфікація",
  },
  {
    href: "/contact",
    title: "Зв’язок зі мною",
    desc: "Контактні дані, форми зворотного звʼязку, соціальні мережі та дотримання конфіденційності.",
    icon: Heart,
    color: "from-rose-50 to-lavender/30 border-rose-200/60",
    badge: "Контакти",
  },
];

export default function HomePage() {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(null);

  const nextQuote = () => {
    setQuoteIndex((prev) => (prev + 1) % INSPIRATIONAL_QUOTES.length);
  };

  return (
    <div className="flex flex-col gap-20 sm:gap-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* HERO SECTION */}
      <section className="relative pt-6 sm:pt-12 pb-8 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Left Column: Greeting, Credo & CTA */}
        <div className="flex-1 flex flex-col gap-6 text-center lg:text-left z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-lavender/50 text-xs sm:text-sm font-semibold text-lavender-deep shadow-soft mx-auto lg:mx-0 w-fit">
            <Sparkles className="w-4 h-4 text-lavender-dark" />
            <span>Твій простір творчості та самопізнання</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-ink leading-[1.15]">
            Психологія через <span className="marker-highlight">творчість</span> та внутрішній спокій
          </h1>

          <p className="text-base sm:text-lg text-ink-light leading-relaxed max-w-2xl">
            Вітаю у моєму просторі! Я — <span className="font-semibold text-ink">{SITE_INFO.author.fullName}</span>, майбутній практичний психолог. Тут я ділюся навчальними напрацюваннями з арттерапії, корисними вправами для емоційної саморегуляції та дослідження власного «Я».
          </p>

          {/* Credo Callout */}
          <div className="p-5 rounded-3xl bg-gradient-to-r from-lavender/25 via-rose/20 to-cream border border-lavender/40 shadow-sm relative overflow-hidden">
            <div className="flex items-start gap-3">
              <Flower2 className="w-5 h-5 text-lavender-deep flex-shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-lavender-deep block mb-1">
                  Професійне кредо
                </span>
                <p className="font-hand text-xl sm:text-2xl text-ink leading-snug">
                  «{SITE_INFO.credo}»
                </p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
            <Link
              href="/workshop"
              className="px-6 py-3.5 rounded-full bg-lavender-deep hover:bg-lavender-deep/90 text-white font-semibold text-sm sm:text-base shadow-card hover:shadow-hover transition-all duration-300 flex items-center gap-2"
            >
              <Palette className="w-4 h-4" />
              <span>Спробувати творчі вправи</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/about"
              className="px-6 py-3.5 rounded-full bg-white/80 hover:bg-white text-ink border border-beige hover:border-lavender font-semibold text-sm sm:text-base transition-all duration-300 flex items-center gap-2 shadow-2xs"
            >
              <User className="w-4 h-4 text-lavender-dark" />
              <span>Дізнатися більше про мене</span>
            </Link>
          </div>

          {/* Quick Credo Badges */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-4 text-xs font-medium text-ink-light border-t border-beige/60">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-sage-dark" />
              Без оцінок та критики
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-lavender-deep" />
              М'яка підтримка емоцій
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-rose-dark" />
              Доступно для кожного
            </span>
          </div>
        </div>

        {/* Right Column: Organic Artistic Avatar Card & Levitation Elements */}
        <div className="flex-1 w-full max-w-md lg:max-w-none flex justify-center relative">
          <div className="relative w-72 h-80 sm:w-96 sm:h-[440px]">
            {/* Background glowing blob */}
            <div className="absolute inset-0 bg-gradient-to-tr from-lavender via-rose to-beige rounded-4xl blur-xl opacity-70 animate-pulse-gentle" />

            {/* Main Portrait Card with organic rounded blob framing */}
            <div className="relative w-full h-full rounded-4xl overflow-hidden border-4 border-white/80 shadow-2xl glass-card flex flex-col justify-end p-6">
              {/* Photo representation */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
                style={{
                  backgroundImage: "url('/images/maria_avatar.jpg')",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
              </div>

              {/* Float badge bottom */}
              <div className="relative z-10 p-4 rounded-3xl bg-white/90 backdrop-blur-md border border-white/60 shadow-card">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-lavender-deep block">
                      Авторське портфоліо
                    </span>
                    <h2 className="font-serif text-lg font-bold text-ink">
                      {SITE_INFO.author.fullName}
                    </h2>
                  </div>
                  <div className="w-10 h-10 rounded-2xl bg-lavender/40 flex items-center justify-center text-lavender-deep">
                    <Feather className="w-5 h-5" />
                  </div>
                </div>
                <p className="text-xs text-ink-light mt-1">
                  2 курс • Психологія • Арттерапевтичний фокус
                </p>
              </div>
            </div>

            {/* Floating micro-badges */}
            <div className="absolute -top-4 -left-6 p-3 rounded-2xl bg-white/95 backdrop-blur-md shadow-card border border-beige flex items-center gap-2.5 animate-float-slow hidden sm:flex">
              <span className="w-3 h-3 rounded-full bg-sage" />
              <span className="text-xs font-bold text-ink">Арттерапія</span>
            </div>

            <div className="absolute -bottom-4 -right-6 p-3.5 rounded-2xl bg-white/95 backdrop-blur-md shadow-card border border-beige flex items-center gap-2 animate-float-reverse hidden sm:flex">
              <Heart className="w-4 h-4 text-rose-dark fill-rose" />
              <span className="text-xs font-bold text-ink">Емоційне відновлення</span>
            </div>
          </div>
        </div>
      </section>

      {/* INSPIRATION QUOTE OF THE DAY */}
      <section className="relative p-6 sm:p-8 rounded-4xl bg-gradient-to-r from-lavender-light/60 via-white/80 to-rose-light/50 border border-lavender/40 shadow-soft">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-lavender flex items-center justify-center text-lavender-deep flex-shrink-0 shadow-sm">
              <Smile className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-lavender-deep block mb-1">
                Натхнення дня • {INSPIRATIONAL_QUOTES[quoteIndex].author}
              </span>
              <p className="font-hand text-2xl sm:text-3xl text-ink leading-snug">
                «{INSPIRATIONAL_QUOTES[quoteIndex].quote}»
              </p>
            </div>
          </div>

          <button
            onClick={nextQuote}
            className="px-4 py-2 rounded-2xl bg-white hover:bg-lavender/20 text-ink-light hover:text-ink text-xs font-medium border border-beige flex items-center gap-2 transition-all flex-shrink-0 shadow-2xs"
          >
            <RefreshCw className="w-3.5 h-3.5 text-lavender-dark" />
            <span>Інша думка</span>
          </button>
        </div>
      </section>

      {/* SECTIONS PREVIEW GRID */}
      <section className="flex flex-col gap-10">
        <div className="text-center max-w-2xl mx-auto flex flex-col gap-2">
          <span className="text-xs font-bold uppercase tracking-widest text-lavender-deep">
            Карта портфоліо
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink">
            Досліджуйте розділи простору «Mind &amp; Soul»
          </h2>
          <p className="text-sm text-ink-light leading-relaxed">
            Кожна сторінка сайту розкриває окремий аспект моєї професійної підготовки, творчих методик та корисних психологічних матеріалів.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SECTIONS_PREVIEW.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Link
                key={idx}
                href={item.href}
                className="group p-6 sm:p-7 rounded-3xl bg-white/70 hover:bg-white border border-beige/80 hover:border-lavender shadow-soft hover:shadow-hover transition-all duration-300 flex flex-col justify-between gap-6"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-cream group-hover:bg-lavender/30 flex items-center justify-center text-lavender-deep transition-colors">
                      <Icon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                    </div>
                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-cream border border-beige text-ink-light">
                      {item.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-serif text-xl font-bold text-ink group-hover:text-lavender-deep transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-ink-light mt-2 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-bold text-lavender-deep group-hover:translate-x-1.5 transition-transform">
                  <span>Перейти до розділу</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* INTERACTIVE MOOD MAP EMBED */}
      <section className="flex flex-col gap-6">
        <InteractiveMoodMap />
      </section>

      {/* FEATURED EXERCISES */}
      <section className="flex flex-col gap-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-lavender-deep">
              Практичні методики
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink mt-1">
              Творчі вправи для щоденної підтримки
            </h2>
          </div>
          <Link
            href="/workshop"
            className="text-xs sm:text-sm font-semibold text-lavender-deep hover:underline flex items-center gap-1.5"
          >
            <span>Всі вправи у майстерні</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {EXERCISES.map((ex) => (
            <div
              key={ex.id}
              className="p-5 rounded-3xl bg-white/70 border border-beige hover:border-lavender/70 shadow-sm hover:shadow-card transition-all flex flex-col justify-between gap-4 group"
            >
              <div className="flex flex-col gap-2.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="px-2.5 py-1 rounded-full bg-lavender/30 text-lavender-deep font-semibold">
                    {ex.category}
                  </span>
                  <span className="text-ink-light">{ex.duration}</span>
                </div>

                <h3 className="font-serif text-lg font-bold text-ink group-hover:text-lavender-deep transition-colors">
                  «{ex.title}»
                </h3>

                <p className="text-xs text-ink-light leading-relaxed line-clamp-3">
                  {ex.tagline}
                </p>
              </div>

              <button
                onClick={() => setSelectedExercise(ex)}
                className="w-full py-2.5 rounded-xl bg-cream hover:bg-lavender/40 text-ink text-xs font-semibold border border-beige/80 transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Читати інструкцію</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Modal Dialog for Exercise Detail */}
      <ExerciseModal
        exercise={selectedExercise}
        onClose={() => setSelectedExercise(null)}
      />
    </div>
  );
}
