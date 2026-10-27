"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  User, 
  HeartHandshake, 
  UserCheck, 
  ShieldCheck, 
  Sparkles, 
  Smile, 
  GraduationCap, 
  Compass, 
  BookOpen, 
  ArrowRight, 
  CheckCircle2, 
  Award, 
  Layers 
} from "lucide-react";
import { SITE_INFO, VALUES, RESUME_DATA } from "@/lib/data";

const VALUE_ICONS: Record<string, React.ElementType> = {
  HeartHandshake,
  UserCheck,
  ShieldCheck,
  Sparkles,
  Smile,
  GraduationCap,
};

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState<"vision" | "values" | "journey">("vision");

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-16 sm:gap-20">
      {/* PAGE HEADER */}
      <section className="text-center max-w-3xl mx-auto flex flex-col gap-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-lavender/40 text-xs font-semibold text-lavender-deep mx-auto shadow-soft">
          <User className="w-3.5 h-3.5" />
          <span>Розділ 2 • Персональне портфоліо</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-ink">
          Моє професійне Я
        </h1>
        <p className="text-base sm:text-lg text-ink-light leading-relaxed">
          Шлях у практичну психологію, академічне навчання, ключові цінності та прагнення поєднувати науку з творчим зціленням.
        </p>
      </section>

      {/* MAIN BIO & STUDY FOCUS */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Side: Profile & Details */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="p-8 rounded-4xl bg-gradient-to-br from-white via-cream to-lavender-light/40 border border-lavender/50 shadow-card flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-3xl bg-lavender flex items-center justify-center text-lavender-deep shadow-sm">
                <GraduationCap className="w-8 h-8" />
              </div>
              <div>
                <h2 className="font-serif text-2xl font-bold text-ink">
                  {SITE_INFO.author.fullName}
                </h2>
                <span className="text-xs font-medium text-lavender-deep">
                  {SITE_INFO.author.course}
                </span>
              </div>
            </div>

            <div className="space-y-3 pt-2 text-xs sm:text-sm text-ink-light leading-relaxed border-t border-beige">
              <p>
                Я навчаюся на другому курсі за напрямом підготовки «Психологія». Під час навчання досліджую закономірності психічного розвитку людини, вікові кризи, особливості емоційної сфери, поведінки та міжособистісних стосунків.
              </p>
              <p>
                Особливий інтерес для мене становлять <strong className="text-ink">практична психологія, психологічне консультування, психодіагностика</strong> та застосування <strong className="text-ink">арттерапевтичних методик</strong> у роботі з різними віковими категоріями.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/80 border border-beige/70 flex items-center gap-3">
              <Award className="w-5 h-5 text-rose-dark flex-shrink-0" />
              <div className="text-xs">
                <span className="font-bold text-ink block">Спеціалізація:</span>
                <span className="text-ink-light">Арттерапія та емоційне благополуччя</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Professional Purpose & Creed */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="p-8 rounded-4xl glass-card flex flex-col gap-6">
            <div className="flex items-center gap-2 text-lavender-deep font-semibold text-xs uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>Покликання та місія</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ink">
              Поєднання психологічних знань з творчими методами роботи
            </h3>

            <p className="text-sm sm:text-base text-ink-light leading-relaxed">
              Мене приваблює можливість використовувати малювання, кольори, образи й створення творчих робіт як інструмент для самовираження, розвитку емоційного інтелекту та психологічної підтримки.
            </p>

            <p className="text-sm sm:text-base text-ink-light leading-relaxed">
              <strong className="text-ink">Моя професійна мета</strong> — стати висококомпетентним практичним психологом, постійно поглиблювати знання з арттерапії та опановувати сучасні методи психологічної допомоги, які дбайливо враховують індивідуальні особливості кожної людини.
            </p>

            {/* Credo badge */}
            <div className="p-5 rounded-3xl bg-lavender-light/40 border border-lavender/40">
              <span className="text-xs font-bold text-lavender-deep uppercase tracking-wider block mb-1">
                Ключове професійне переконання:
              </span>
              <p className="font-hand text-xl sm:text-2xl text-ink leading-snug">
                «{SITE_INFO.credo}»
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROFESSIONAL VALUES GRID */}
      <section className="flex flex-col gap-8">
        <div className="text-center max-w-2xl mx-auto flex flex-col gap-2">
          <span className="text-xs font-bold uppercase tracking-widest text-lavender-deep">
            Етичний фундамент
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink">
            Мої професійні цінності
          </h2>
          <p className="text-sm text-ink-light leading-relaxed">
            Принципи, якими я керуюся під час навчання, науково-дослідницької роботи та взаємодії з людьми.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {VALUES.map((val, idx) => {
            const Icon = VALUE_ICONS[val.icon] || Sparkles;
            return (
              <div
                key={idx}
                className="group p-6 sm:p-7 rounded-3xl bg-white/75 hover:bg-white border border-beige/80 hover:border-lavender shadow-soft hover:shadow-card transition-all duration-300 flex flex-col gap-4"
              >
                <div className="w-12 h-12 rounded-2xl bg-cream group-hover:bg-lavender/30 flex items-center justify-center text-lavender-deep transition-all duration-300">
                  <Icon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-ink mb-1.5 group-hover:text-lavender-deep transition-colors">
                    {val.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-ink-light leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* TIMELINE OF ACADEMIC & PROFESSIONAL GROWTH */}
      <section className="flex flex-col gap-8">
        <div className="text-center max-w-2xl mx-auto flex flex-col gap-2">
          <span className="text-xs font-bold uppercase tracking-widest text-lavender-deep">
            Покроковий розвиток
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink">
            Етапи формування професійної майстерності
          </h2>
        </div>

        <div className="relative border-l-2 border-lavender/60 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-8 max-w-4xl mx-auto w-full">
          {RESUME_DATA.timeline.map((item, idx) => (
            <div key={idx} className="relative group">
              {/* Dot */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-5 h-5 rounded-full bg-cream border-4 border-lavender-deep group-hover:scale-125 transition-transform" />
              
              <div className="p-6 rounded-3xl bg-white/80 border border-beige/70 shadow-sm hover:shadow-card transition-all">
                <span className="text-xs font-bold text-lavender-deep px-3 py-1 rounded-full bg-lavender/25 inline-block mb-2">
                  {item.period}
                </span>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-ink">
                  {item.title}
                </h3>
                <span className="text-xs font-medium text-ink-light block mb-2">
                  {item.institution}
                </span>
                <p className="text-xs sm:text-sm text-ink-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA TO ART THERAPY & RESUME */}
      <section className="p-8 sm:p-12 rounded-4xl bg-gradient-to-r from-cream via-lavender-light/40 to-rose-light/40 border border-lavender/40 text-center flex flex-col items-center gap-6">
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ink max-w-xl">
          Бажаєте ознайомитися з основами арттерапії чи переглянути детальне резюме?
        </h3>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/art-therapy"
            className="px-6 py-3 rounded-full bg-lavender-deep hover:bg-lavender-deep/90 text-white font-semibold text-sm shadow-card flex items-center gap-2"
          >
            <Compass className="w-4 h-4" />
            <span>Дізнатися про арттерапію</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            href="/resume"
            className="px-6 py-3 rounded-full bg-white hover:bg-cream text-ink border border-beige font-semibold text-sm flex items-center gap-2 shadow-2xs"
          >
            <Layers className="w-4 h-4 text-lavender-dark" />
            <span>Переглянути повне резюме</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
