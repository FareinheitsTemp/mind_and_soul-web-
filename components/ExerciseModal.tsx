"use client";

import React from "react";
import { X, Clock, Sparkles, CheckCircle2, HelpCircle, Palette } from "lucide-react";
import { Exercise } from "@/lib/data";

interface ExerciseModalProps {
  exercise: Exercise | null;
  onClose: () => void;
}

export default function ExerciseModal({ exercise, onClose }: ExerciseModalProps) {
  if (!exercise) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/40 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-cream rounded-4xl p-6 sm:p-8 shadow-2xl border border-lavender/50 flex flex-col gap-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/80 hover:bg-white text-ink-light hover:text-ink shadow-sm transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-lavender/40 text-lavender-deep">
              {exercise.category}
            </span>
            <span className="flex items-center gap-1 text-xs text-ink-light">
              <Clock className="w-3.5 h-3.5" />
              {exercise.duration}
            </span>
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ink">
            {exercise.title}
          </h3>
          <p className="text-sm text-ink-light italic">
            {exercise.tagline}
          </p>
        </div>

        {/* Goal & For Who */}
        <div className="p-4 rounded-2xl bg-white/80 border border-beige/80 flex flex-col gap-2">
          <div className="flex items-start gap-2">
            <Sparkles className="w-4 h-4 text-lavender-dark mt-0.5 flex-shrink-0" />
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-ink block mb-0.5">
                Мета вправи:
              </span>
              <p className="text-xs sm:text-sm text-ink-light leading-relaxed">
                {exercise.goal}
              </p>
            </div>
          </div>
          <div className="pt-2 border-t border-beige/60 text-xs text-ink-light">
            <span className="font-semibold text-ink">Рекомендовано:</span> {exercise.forWho}
          </div>
        </div>

        {/* Materials */}
        <div>
          <h4 className="font-serif text-base font-bold text-ink mb-2 flex items-center gap-2">
            <Palette className="w-4 h-4 text-rose-dark" />
            Необхідні матеріали:
          </h4>
          <div className="flex flex-wrap gap-2">
            {exercise.materials.map((mat, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 rounded-xl bg-white text-xs font-medium text-ink-light border border-beige shadow-2xs"
              >
                • {mat}
              </span>
            ))}
          </div>
        </div>

        {/* Steps */}
        <div>
          <h4 className="font-serif text-base font-bold text-ink mb-3 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-sage-dark" />
            Покрокова інструкція:
          </h4>
          <div className="space-y-3">
            {exercise.steps.map((step, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3 rounded-2xl bg-white/70 border border-beige/50">
                <span className="w-6 h-6 rounded-full bg-lavender/50 text-lavender-deep text-xs font-bold flex items-center justify-center flex-shrink-0">
                  {idx + 1}
                </span>
                <p className="text-xs sm:text-sm text-ink-light leading-relaxed">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Reflection Questions */}
        <div className="p-4 rounded-3xl bg-lavender-light/60 border border-lavender/50">
          <h4 className="font-serif text-base font-bold text-ink mb-2 flex items-center gap-2">
            <HelpCircle className="w-4 h-4 text-lavender-deep" />
            Запитання для рефлексії після вправи:
          </h4>
          <ul className="space-y-1.5 text-xs sm:text-sm text-ink-light list-disc list-inside">
            {exercise.reflectionQuestions.map((q, idx) => (
              <li key={idx} className="leading-relaxed">
                {q}
              </li>
            ))}
          </ul>
        </div>

        <button
          onClick={onClose}
          className="w-full py-3 rounded-2xl bg-lavender-deep hover:bg-lavender-deep/90 text-white font-semibold text-sm transition-all shadow-card"
        >
          Зрозуміло, перейти до виконання
        </button>
      </div>
    </div>
  );
}
