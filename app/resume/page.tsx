"use client";

import React from "react";
import Link from "next/link";
import { 
  FileText, 
  GraduationCap, 
  Download, 
  Sparkles, 
  CheckCircle2, 
  Award, 
  Briefcase, 
  Heart, 
  Mail, 
  Send, 
  Calendar 
} from "lucide-react";
import { RESUME_DATA, SITE_INFO } from "@/lib/data";

export default function ResumePage() {
  const handlePrintOrDownload = () => {
    window.print();
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-12 sm:gap-16">
      {/* PAGE HEADER */}
      <section className="text-center max-w-2xl mx-auto flex flex-col gap-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-lavender/40 text-xs font-semibold text-lavender-deep mx-auto shadow-soft">
          <FileText className="w-3.5 h-3.5" />
          <span>Розділ 6 • Академічне та професійне резюме</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-ink">
          Мій шлях у професію
        </h1>
        <p className="text-sm sm:text-base text-ink-light leading-relaxed">
          Систематизований огляд освіти, ключових навичок, практичних напрацювань та планів професійного зростання.
        </p>
      </section>

      {/* MAIN RESUME CARD */}
      <div className="p-8 sm:p-12 rounded-4xl bg-white/90 border border-beige shadow-card flex flex-col gap-10">
        {/* RESUME HEADER */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-8 border-b border-beige gap-6">
          <div className="flex flex-col gap-1.5">
            <span className="text-xs font-bold text-lavender-deep uppercase tracking-widest">
              Резюме майбутнього фахівця
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink">
              {RESUME_DATA.name}
            </h2>
            <p className="text-sm text-ink-light">
              {RESUME_DATA.status} • Напрям: «Практична психологія та арттерапія»
            </p>
          </div>

          <button
            onClick={handlePrintOrDownload}
            className="px-6 py-3 rounded-full bg-lavender-deep hover:bg-lavender-deep/90 text-white font-semibold text-xs sm:text-sm shadow-card hover:shadow-hover transition-all flex items-center gap-2 self-start sm:self-center"
          >
            <Download className="w-4 h-4 animate-bounce" />
            <span>Завантажити CV (Друк)</span>
          </button>
        </div>

        {/* SECTION: OBJECTIVE */}
        <div className="flex flex-col gap-3">
          <h3 className="font-serif text-xl font-bold text-ink flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-lavender-dark" />
            Професійна мета
          </h3>
          <p className="text-sm sm:text-base text-ink-light leading-relaxed p-5 rounded-2xl bg-cream/70 border border-beige/60">
            {RESUME_DATA.objective}
          </p>
        </div>

        {/* SECTION: EDUCATION */}
        <div className="flex flex-col gap-4">
          <h3 className="font-serif text-xl font-bold text-ink flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-lavender-deep" />
            Освіта та академічна підготовка
          </h3>
          <div className="p-6 rounded-3xl bg-lavender-light/30 border border-lavender/40 flex flex-col gap-2">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h4 className="font-serif text-lg font-bold text-ink">
                Бакалаврат за спеціальністю 053 «Психологія»
              </h4>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white text-lavender-deep border border-lavender/40">
                2024 — 2028 (2-й курс)
              </span>
            </div>
            <p className="text-xs sm:text-sm text-ink-light leading-relaxed">
              Вивчення вікової психології, нейрофізіології, психодіагностики, психології особистості, етики психологічного консультування та основ арттерапевтичної допомоги.
            </p>
          </div>
        </div>

        {/* SECTION: KEY SKILLS */}
        <div className="flex flex-col gap-4">
          <h3 className="font-serif text-xl font-bold text-ink flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-sage-dark" />
            Професійні навички та компетентності
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {RESUME_DATA.skills.map((skill, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-white border border-beige/80 shadow-2xs flex flex-col gap-2"
              >
                <div className="flex items-center justify-between text-xs font-medium text-ink">
                  <span>{skill.name}</span>
                  <span className="font-mono text-lavender-deep font-bold">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full h-2 rounded-full bg-cream overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-lavender to-lavender-deep transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION: PERSONAL & PROFESSIONAL QUALITIES */}
        <div className="flex flex-col gap-4">
          <h3 className="font-serif text-xl font-bold text-ink flex items-center gap-2">
            <Heart className="w-5 h-5 text-rose-dark" />
            Особистісні та фахові якості
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {RESUME_DATA.qualities.map((qual, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-2xl bg-cream/70 border border-beige flex items-center gap-2.5 text-xs font-semibold text-ink"
              >
                <CheckCircle2 className="w-4 h-4 text-sage-dark flex-shrink-0" />
                <span>{qual}</span>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION: TIMELINE OF COURSES & MILESTONES */}
        <div className="flex flex-col gap-4">
          <h3 className="font-serif text-xl font-bold text-ink flex items-center gap-2">
            <Calendar className="w-5 h-5 text-lavender-dark" />
            Курси, сертифікати та участь у заходах
          </h3>
          <div className="space-y-4">
            {RESUME_DATA.timeline.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white border border-beige/80 flex flex-col gap-1"
              >
                <div className="flex flex-wrap items-center justify-between gap-1 text-xs">
                  <span className="font-bold text-lavender-deep">{item.period}</span>
                  <span className="text-ink-light italic">{item.institution}</span>
                </div>
                <h4 className="font-serif text-base font-bold text-ink">
                  {item.title}
                </h4>
                <p className="text-xs text-ink-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* PRIVACY & ETHICS NOTE */}
        <div className="p-4 rounded-2xl bg-cream border border-beige text-xs text-ink-light leading-relaxed">
          <strong className="text-ink">Примітка щодо конфіденційності:</strong> Персональні дані, сертифікати та контакти наведені з навчальною метою в межах лабораторної роботи № 1. Дані оновлюються в процесі подальшого навчання.
        </div>
      </div>
    </div>
  );
}
