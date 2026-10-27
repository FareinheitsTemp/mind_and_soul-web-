import React from "react";
import Link from "next/link";
import { Palette, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center p-8 rounded-4xl glass-card flex flex-col items-center gap-5">
        <div className="w-16 h-16 rounded-3xl bg-lavender/50 flex items-center justify-center text-lavender-deep">
          <Palette className="w-8 h-8" />
        </div>
        <div>
          <span className="text-xs font-bold text-lavender-deep uppercase tracking-widest">
            Помилка 404
          </span>
          <h1 className="font-serif text-3xl font-bold text-ink mt-1">
            Сторінку не знайдено
          </h1>
          <p className="text-xs sm:text-sm text-ink-light mt-2 leading-relaxed">
            Здається, цей простір ще малюється або адреса змінилася. Повернімося на затишну головну сторінку.
          </p>
        </div>
        <Link
          href="/"
          className="px-6 py-3 rounded-full bg-lavender-deep text-white font-semibold text-xs sm:text-sm shadow-card flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>На головну</span>
        </Link>
      </div>
    </div>
  );
}
