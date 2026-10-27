"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  Palette, 
  Sparkles, 
  Filter, 
  Eye, 
  X, 
  Clock, 
  ArrowRight, 
  ShieldAlert, 
  CheckCircle2, 
  Layers 
} from "lucide-react";
import { GALLERY_ITEMS, EXERCISES, GalleryItem, Exercise } from "@/lib/data";
import ArtCanvas from "@/components/ArtCanvas";
import InteractiveMoodMap from "@/components/InteractiveMoodMap";
import ExerciseModal from "@/components/ExerciseModal";

const CATEGORIES = ["Все", "Малюнки", "Колажі", "Мандали", "Вправи"];

export default function WorkshopPage() {
  const [selectedCategory, setSelectedCategory] = useState("Все");
  const [activeLightbox, setActiveLightbox] = useState<GalleryItem | null>(null);
  const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(null);

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (selectedCategory === "Все") return true;
    if (selectedCategory === "Малюнки") return item.category === "Малювання";
    if (selectedCategory === "Колажі") return item.category === "Колаж";
    if (selectedCategory === "Мандали") return item.category === "Мандали";
    if (selectedCategory === "Вправи") return item.category === "Вправи";
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-16 sm:gap-24">
      {/* PAGE HEADER */}
      <section className="text-center max-w-3xl mx-auto flex flex-col gap-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-lavender/40 text-xs font-semibold text-lavender-deep mx-auto shadow-soft">
          <Palette className="w-3.5 h-3.5" />
          <span>Розділ 4 • Практичні напрацювання</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-ink">
          Творча майстерня — Світ у кольорах
        </h1>
        <p className="text-base sm:text-lg text-ink-light leading-relaxed">
          Простір практичної арттерапії: авторські творчі вправи, інтуїтивне цифрове полотно, карта настрою та навчальна галерея робіт.
        </p>
      </section>

      {/* INTERACTIVE DIGITAL ART CANVAS */}
      <section className="flex flex-col gap-6">
        <ArtCanvas />
      </section>

      {/* INTERACTIVE MOOD MAP */}
      <section className="flex flex-col gap-6">
        <InteractiveMoodMap />
      </section>

      {/* SIGNATURE ART THERAPY EXERCISES */}
      <section className="flex flex-col gap-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-lavender-deep">
              Практикум самопізнання
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink mt-1">
              Творчі вправи для емоційної саморегуляції
            </h2>
            <p className="text-xs sm:text-sm text-ink-light mt-1">
              Оберіть вправу, щоб відкрити покрокову інструкцію, перелік матеріалів та питання для рефлексії.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {EXERCISES.map((ex) => (
            <div
              key={ex.id}
              className="p-6 rounded-3xl bg-white/85 border border-beige hover:border-lavender shadow-soft hover:shadow-card transition-all flex flex-col justify-between gap-5 group"
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="px-3 py-1 rounded-full bg-lavender/30 text-lavender-deep font-semibold">
                    {ex.category}
                  </span>
                  <span className="text-ink-light flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {ex.duration}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-bold text-ink group-hover:text-lavender-deep transition-colors">
                  «{ex.title}»
                </h3>

                <p className="text-xs text-ink-light leading-relaxed">
                  {ex.tagline}
                </p>

                <div className="p-3 rounded-2xl bg-cream border border-beige/60 text-[11px] text-ink-light">
                  <span className="font-bold text-ink block mb-0.5">Мета:</span>
                  {ex.goal}
                </div>
              </div>

              <button
                onClick={() => setSelectedExercise(ex)}
                className="w-full py-2.5 rounded-xl bg-lavender-deep hover:bg-lavender-deep/90 text-white text-xs font-semibold shadow-sm transition-all flex items-center justify-center gap-2"
              >
                <span>Розпочати вправу</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY OF ARTWORKS & REFLECTIONS */}
      <section className="flex flex-col gap-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-lavender-deep">
              Експозиція робіт
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink mt-1">
              Навчальні та творчі напрацювання
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? "bg-lavender-deep text-white shadow-card scale-105"
                    : "bg-white/80 hover:bg-white text-ink border border-beige"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveLightbox(item)}
              className="group cursor-pointer rounded-3xl bg-white/80 border border-beige hover:border-lavender overflow-hidden shadow-soft hover:shadow-card transition-all duration-300 flex flex-col"
            >
              <div className="relative h-60 w-full overflow-hidden bg-cream">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-ink/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="px-4 py-2 rounded-full bg-white/90 backdrop-blur-md text-xs font-bold text-ink flex items-center gap-2 shadow-lg">
                    <Eye className="w-3.5 h-3.5 text-lavender-deep" />
                    <span>Розглянути деталі</span>
                  </div>
                </div>

                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[11px] font-bold text-lavender-deep shadow-sm">
                  {item.category}
                </div>
              </div>

              <div className="p-5 flex flex-col justify-between flex-grow gap-3">
                <div>
                  <h3 className="font-serif text-lg font-bold text-ink group-hover:text-lavender-deep transition-colors">
                    {item.title}
                  </h3>
                  <span className="text-[11px] text-ink-light block mt-0.5">
                    Техніка: {item.technique}
                  </span>
                  <p className="text-xs text-ink-light mt-2 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-beige flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    {item.palette.map((c, i) => (
                      <span
                        key={i}
                        className="w-3.5 h-3.5 rounded-full border border-white shadow-2xs"
                        style={{ backgroundColor: c }}
                      />
                    ))}
                  </div>
                  <span className="text-xs font-medium text-lavender-deep group-hover:underline">
                    Рефлексія →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MANDATORY DISCLAIMER BOX */}
      <section className="p-6 rounded-3xl bg-rose-light/50 border border-rose/80 flex items-start gap-4">
        <ShieldAlert className="w-6 h-6 text-rose-dark flex-shrink-0 mt-0.5" />
        <div className="text-xs sm:text-sm text-ink-light leading-relaxed">
          <strong className="text-ink font-semibold block mb-1">
            Психологічне застереження:
          </strong>
          Всі представлені вправи мають виключно творчий, розвивальний та гармонізуючий характер. Їх результати не розглядаються як самостійна підстава для встановлення психіатричного чи клінічного діагнозу. У разі гострого емоційного болю зверніться до ліцензованого фахівця.
        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      {activeLightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/60 backdrop-blur-md animate-fadeIn"
          onClick={() => setActiveLightbox(null)}
        >
          <div
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-cream rounded-4xl p-6 sm:p-8 shadow-2xl border border-lavender/60 flex flex-col gap-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveLightbox(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/80 hover:bg-white text-ink shadow-sm transition-all"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-full h-80 sm:h-96 rounded-3xl overflow-hidden shadow-inner bg-cream">
              <img
                src={activeLightbox.image}
                alt={activeLightbox.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-lavender/40 text-lavender-deep">
                  {activeLightbox.category}
                </span>
                <span className="text-xs text-ink-light">
                  {activeLightbox.technique}
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ink">
                {activeLightbox.title}
              </h3>

              <p className="text-sm text-ink-light leading-relaxed">
                {activeLightbox.description}
              </p>

              <div className="p-4 rounded-2xl bg-lavender-light/40 border border-lavender/40 mt-2">
                <span className="text-xs font-bold text-lavender-deep uppercase tracking-wider block mb-1">
                  Психологічна рефлексія авторки:
                </span>
                <p className="font-hand text-xl text-ink leading-snug">
                  «{activeLightbox.reflection}»
                </p>
              </div>

              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-ink-light">Палітра емоцій:</span>
                  <div className="flex items-center gap-1.5">
                    {activeLightbox.palette.map((c, i) => (
                      <span
                        key={i}
                        className="w-5 h-5 rounded-full border border-white shadow-sm"
                        style={{ backgroundColor: c }}
                        title={c}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* EXERCISE MODAL */}
      <ExerciseModal
        exercise={selectedExercise}
        onClose={() => setSelectedExercise(null)}
      />
    </div>
  );
}
