"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Compass, 
  Sparkles, 
  Palette, 
  ChevronDown, 
  ArrowRight, 
  Smile, 
  Heart, 
  Layers, 
  Feather, 
  ShieldCheck, 
  CircleDot 
} from "lucide-react";
import { ART_THERAPY_TYPES } from "@/lib/data";

const FAQ_ITEMS = [
  {
    q: "Чи потрібно вміти малювати, щоб займатися арттерапією?",
    a: "Абсолютно ні! В арттерапії головне — не естетичний результат чи художня точність, а щирий процес вираження ваших почуттів. Тут немає 'правильного' чи 'неправильного' малювання, а кожна пляма чи лінія має безумовну цінність.",
  },
  {
    q: "Як саме арттерапія допомагає при тривозі та стресі?",
    a: "Під час стресу раціональні зони мозку часто перевантажені або блокуються. Творчий процес задіює праве півкулля та тілесні відчуття, що природно знижує рівень кортизолу, нормалізує дихання та дозволяє 'виплеснути' напругу на аркуш паперу замість тримати її в тілі.",
  },
  {
    q: "Чим арттерапія відрізняється від звичайного уроку малювання?",
    a: "На уроках мистецтва вчать технікам, перспективі, світлотіні та оцінюють результат за критеріями естетики. В арттерапії психолог не оцінює роботу, а разом із вами досліджує внутрішній зміст образів, ваші емоційні відгуки та ресурси.",
  },
  {
    q: "Чому цей метод особливо ефективний для дітей та підлітків?",
    a: "Дітям і підліткам буває надзвичайно важко вербалізувати свої страхи чи внутрішні конфлікти через брак словникового запасу або страх осуду. Творчість є для них природною мовою, де можна розповісти про проблему безпечно — через казкового персонажа або абстрактну форму.",
  },
];

export default function ArtTherapyPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-16 sm:gap-24">
      {/* PAGE HEADER */}
      <section className="text-center max-w-3xl mx-auto flex flex-col gap-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-lavender/40 text-xs font-semibold text-lavender-deep mx-auto shadow-soft">
          <Compass className="w-3.5 h-3.5" />
          <span>Розділ 3 • Методологія та філософія</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-ink">
          Арттерапія — психологія через творчість
        </h1>
        <p className="text-base sm:text-lg text-ink-light leading-relaxed">
          Теоретичні засади, наукові можливості та глибинний потенціал мистецьких засобів для самопізнання й підтримки ментального здоров'я.
        </p>
      </section>

      {/* DEFINITION & WHY THIS FIELD */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="p-8 sm:p-10 rounded-4xl bg-white/80 border border-beige shadow-card flex flex-col gap-5">
          <div className="flex items-center gap-2 text-xs font-bold text-lavender-deep uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>Сутність напряму</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink">
            Що таке арттерапія?
          </h2>

          <p className="text-sm sm:text-base text-ink-light leading-relaxed">
            <strong className="text-ink">Арттерапія</strong> — це напрям практичної психологічної допомоги, який використовує творчі засоби для вираження емоцій, самопізнання, психологічної розрядки та підтримки.
          </p>

          <p className="text-sm sm:text-base text-ink-light leading-relaxed">
            До арсеналу арттерапевта належать малювання, ліплення, робота з фактурами, створення тематичних колажів, мандал та інтуїтивних колірних образів.
          </p>

          <div className="p-4 rounded-2xl bg-lavender-light/40 border border-lavender/40 flex items-start gap-3">
            <Heart className="w-5 h-5 text-lavender-deep flex-shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm text-ink-light leading-relaxed">
              Цінність напряму полягає в тому, що творчі заняття допомагають краще розуміти власні почуття, розвивати уяву, підтримувати самопізнання та знаходити конструктивні способи вираження переживань без страху осуду.
            </p>
          </div>
        </div>

        <div className="p-8 sm:p-10 rounded-4xl bg-gradient-to-br from-cream via-white to-rose-light/40 border border-rose/40 shadow-card flex flex-col gap-5">
          <div className="flex items-center gap-2 text-xs font-bold text-rose-dark uppercase tracking-wider">
            <Feather className="w-4 h-4" />
            <span>Особистий вибір</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink">
            Чому я обрала саме арттерапію?
          </h2>

          <p className="text-sm sm:text-base text-ink-light leading-relaxed">
            Мене глибоко цікавить внутрішній світ людини, її емоційні переживання та способи їх проживання. Творчість є універсальним засобом самовираження — особливо в ті миті, коли людині надзвичайно важко знайти точні слова.
          </p>

          <p className="text-sm sm:text-base text-ink-light leading-relaxed">
            Арттерапевтичні вправи дають змогу працювати з підсвідомістю через символи, форми й кольори. Це створює відчуття повної свободи й довіри, які є фундаментом для психологічного зцілення.
          </p>

          <div className="pt-2 border-t border-beige flex items-center justify-between text-xs text-ink-light">
            <span className="font-semibold text-ink">Комар Марія</span>
            <span className="font-hand text-lg text-lavender-deep">«Творчість лікує душу»</span>
          </div>
        </div>
      </section>

      {/* 5 MAIN MODALITIES / TYPES OF ART THERAPY */}
      <section className="flex flex-col gap-8">
        <div className="text-center max-w-2xl mx-auto flex flex-col gap-2">
          <span className="text-xs font-bold uppercase tracking-widest text-lavender-deep">
            Види та методики
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink">
            Основні модальності арттерапевтичної роботи
          </h2>
          <p className="text-sm text-ink-light leading-relaxed">
            Різноманіття матеріалів дозволяє підібрати найм'якший і найбезпечніший шлях взаємодії для кожного клієнта.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ART_THERAPY_TYPES.map((type) => (
            <div
              key={type.id}
              className="p-6 sm:p-7 rounded-3xl bg-white/80 hover:bg-white border border-beige/80 hover:border-lavender shadow-soft hover:shadow-card transition-all flex flex-col justify-between gap-6 group"
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-lavender/30 text-lavender-deep">
                    {type.tag}
                  </span>
                  <Palette className="w-5 h-5 text-lavender-dark group-hover:rotate-12 transition-transform" />
                </div>

                <h3 className="font-serif text-xl font-bold text-ink group-hover:text-lavender-deep transition-colors">
                  {type.title}
                </h3>

                <p className="text-xs sm:text-sm text-ink-light leading-relaxed">
                  {type.desc}
                </p>
              </div>

              <div className="p-3 rounded-2xl bg-cream border border-beige/60 text-xs text-ink">
                <span className="font-bold text-lavender-deep block mb-0.5">Ефект:</span>
                <span className="text-ink-light">{type.benefits}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SPECIAL SECTION: ART THERAPY FOR CHILDREN & TEENAGERS */}
      <section className="p-8 sm:p-12 rounded-4xl bg-gradient-to-r from-lavender/25 via-white to-sage/20 border border-lavender/40 shadow-soft">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 flex flex-col gap-4">
            <span className="text-xs font-bold uppercase tracking-wider text-sage-dark flex items-center gap-2">
              <Smile className="w-4 h-4" />
              Особливий віковий фокус
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink">
              Арттерапія в роботі з дітьми та підлітками
            </h2>

            <p className="text-sm sm:text-base text-ink-light leading-relaxed">
              У своїй підготовці я приділяю особливу увагу саме дитячій та підлітковій психології. Для дитини малювання, ліплення та казки — це не штучна терапія, а її природне щоденне буття.
            </p>

            <ul className="space-y-2 text-xs sm:text-sm text-ink-light">
              <li className="flex items-start gap-2">
                <CircleDot className="w-4 h-4 text-lavender-deep mt-0.5 flex-shrink-0" />
                <span><strong>Зняття тривожності:</strong> вільне малювання допомагає дитині безпечно вивільнити страхи.</span>
              </li>
              <li className="flex items-start gap-2">
                <CircleDot className="w-4 h-4 text-rose-dark mt-0.5 flex-shrink-0" />
                <span><strong>Простір автономії для підлітка:</strong> створення мандал і колажів без критики дає відчуття контролю над власним життям.</span>
              </li>
              <li className="flex items-start gap-2">
                <CircleDot className="w-4 h-4 text-sage-dark mt-0.5 flex-shrink-0" />
                <span><strong>Розвиток емоційного інтелекту:</strong> навчання розпізнаванню власних почуттів через палітру кольорів.</span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-4 p-6 rounded-3xl bg-white/90 border border-beige shadow-sm">
            <h3 className="font-serif text-lg font-bold text-ink">
              Пам'ятка для дорослих
            </h3>
            <p className="text-xs text-ink-light leading-relaxed">
              Ніколи не запитуйте дитину: «Що за каляку-маляку ти намалював?». Натомість запитайте:
            </p>
            <div className="space-y-2 text-xs font-hand text-lg text-ink bg-cream p-4 rounded-2xl border border-beige/60">
              <p>• «Розкажи мені історію цього малюнка?»</p>
              <p>• «Який колір тут найвеселіший, а який найвтомленіший?»</p>
              <p>• «Що ми можемо домалювати, щоб цьому дереву стало тепліше?»</p>
            </div>
          </div>
        </div>
      </section>

      {/* ACCORDION FAQ */}
      <section className="flex flex-col gap-8 max-w-4xl mx-auto w-full">
        <div className="text-center flex flex-col gap-2">
          <span className="text-xs font-bold uppercase tracking-widest text-lavender-deep">
            Часті запитання
          </span>
          <h2 className="font-serif text-3xl font-bold text-ink">
            Все, що ви хотіли знати про процес
          </h2>
        </div>

        <div className="space-y-4">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="rounded-3xl bg-white/80 border border-beige/80 overflow-hidden shadow-2xs transition-all"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-cream/50 transition-colors"
                >
                  <span className="font-serif text-base sm:text-lg font-bold text-ink">
                    {item.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-lavender/30 flex items-center justify-center text-lavender-deep transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? "rotate-180 bg-lavender" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-ink-light leading-relaxed border-t border-beige/50 animate-fadeIn">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA TO WORKSHOP */}
      <section className="text-center p-8 rounded-4xl bg-lavender-light/40 border border-lavender/50 flex flex-col items-center gap-4">
        <h3 className="font-serif text-2xl font-bold text-ink">
          Готові перейти від теорії до практики?
        </h3>
        <p className="text-xs sm:text-sm text-ink-light max-w-md">
          Завітайте до творчої майстерні: спробуйте цифрове полотно, дослідіть карту настрою або виконайте одну з авторських вправ.
        </p>
        <Link
          href="/workshop"
          className="px-6 py-3 rounded-full bg-lavender-deep hover:bg-lavender-deep/90 text-white font-semibold text-sm shadow-card flex items-center gap-2"
        >
          <Palette className="w-4 h-4" />
          <span>Перейти до творчої майстерні</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </div>
  );
}
