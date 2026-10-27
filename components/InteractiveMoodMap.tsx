"use client";

import React, { useState } from "react";
import { Sparkles, Heart, Compass, ArrowRight, Check } from "lucide-react";
import { MOOD_COLORS, MoodColor } from "@/lib/data";

export default function InteractiveMoodMap() {
  const [selectedColor, setSelectedColor] = useState<MoodColor>(MOOD_COLORS[0]);

  return (
    <div
      className="p-6 sm:p-10 rounded-4xl glass-card transition-all duration-700 relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${selectedColor.hex}18 0%, rgba(255,255,255,0.85) 100%)`,
      }}
    >
      {/* Decorative background glow */}
      <div
        className="absolute -top-12 -right-12 w-64 h-64 rounded-full blur-3xl opacity-40 transition-colors duration-700 pointer-events-none"
        style={{ backgroundColor: selectedColor.hex }}
      />

      <div className="relative z-10 flex flex-col gap-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-lavender/40 text-xs font-semibold text-lavender-deep mb-3 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Інтерактивна психологічна вправа</span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ink">
            Карта настрою: який колір кличе вас зараз?
          </h3>
          <p className="text-sm text-ink-light mt-1.5 max-w-2xl leading-relaxed">
            В арттерапії вибір кольору — це пряме звернення до підсвідомості. Оберіть відтінок, який найбільше відгукується вашому тілу й серцю просто зараз:
          </p>
        </div>

        {/* Color Palette Selector */}
        <div className="flex flex-wrap gap-3 sm:gap-4 items-center">
          {MOOD_COLORS.map((col) => {
            const isSelected = selectedColor.name === col.name;
            return (
              <button
                key={col.name}
                onClick={() => setSelectedColor(col)}
                className={`group flex items-center gap-2.5 px-4 py-2.5 rounded-2xl transition-all duration-300 ${
                  isSelected
                    ? "bg-white shadow-card scale-105 ring-2 ring-lavender-dark"
                    : "bg-white/60 hover:bg-white hover:scale-102 border border-beige/60"
                }`}
              >
                <span
                  className="w-5 h-5 rounded-full shadow-inner flex items-center justify-center transition-transform group-hover:scale-110"
                  style={{ backgroundColor: col.hex }}
                >
                  {isSelected && <Check className="w-3 h-3 text-white drop-shadow" />}
                </span>
                <span className="text-xs sm:text-sm font-semibold text-ink">
                  {col.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Card for the selected mood */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          {/* Col 1: Emotion & Psychology */}
          <div className="p-5 rounded-3xl bg-white/85 border border-beige/80 shadow-sm flex flex-col gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-lavender-deep flex items-center gap-1.5">
              <Compass className="w-4 h-4" />
              Емоційний відгук
            </span>
            <h4 className="font-serif text-lg font-bold text-ink">
              {selectedColor.emotion}
            </h4>
            <p className="text-xs text-ink-light leading-relaxed">
              {selectedColor.meaning}
            </p>
          </div>

          {/* Col 2: Soothing Affirmation */}
          <div className="p-5 rounded-3xl bg-white/85 border border-beige/80 shadow-sm flex flex-col gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-dark flex items-center gap-1.5">
              <Heart className="w-4 h-4" />
              Афірмація підтримки
            </span>
            <div className="my-auto">
              <p className="font-hand text-xl sm:text-2xl text-ink leading-snug">
                {selectedColor.affirmation}
              </p>
            </div>
            <span className="text-[11px] text-ink-light italic">
              Повторіть повільно під час вдиху та видиху
            </span>
          </div>

          {/* Col 3: Creative Prompt */}
          <div className="p-5 rounded-3xl bg-white/85 border border-beige/80 shadow-sm flex flex-col justify-between gap-3">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-sage-dark flex items-center gap-1.5 mb-1.5">
                <Sparkles className="w-4 h-4" />
                Творча підказка
              </span>
              <p className="text-xs text-ink leading-relaxed">
                {selectedColor.creativePrompt}
              </p>
            </div>

            <a
              href="#canvas-section"
              className="inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-white bg-lavender-deep hover:bg-lavender-deep/90 shadow-sm transition-all"
            >
              <span>Спробувати намалювати</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
