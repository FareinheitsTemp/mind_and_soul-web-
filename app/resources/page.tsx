"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  BookOpen, 
  Search, 
  Sparkles, 
  Clock, 
  UserCheck, 
  FileText, 
  Video, 
  ChevronRight, 
  CheckCircle2, 
  Download, 
  Tag 
} from "lucide-react";
import { ARTICLES, Article } from "@/lib/data";

const CATEGORIES = ["Всі", "Статті", "Поради", "Презентації", "Відео"];
const AUDIENCES = ["Всі", "Діти", "Батьки", "Студенти", "Для всіх"];

export default function ResourcesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Всі");
  const [selectedAudience, setSelectedAudience] = useState("Всі");
  const [expandedArticle, setExpandedArticle] = useState<string | null>(null);

  const filteredArticles = ARTICLES.filter((art) => {
    const matchesSearch =
      art.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      art.summary.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "Всі" || art.category === selectedCategory;
    const matchesAudience =
      selectedAudience === "Всі" || art.audience === selectedAudience;
    return matchesSearch && matchesCategory && matchesAudience;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-14 sm:gap-20">
      {/* PAGE HEADER */}
      <section className="text-center max-w-3xl mx-auto flex flex-col gap-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-lavender/40 text-xs font-semibold text-lavender-deep mx-auto shadow-soft">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Розділ 5 • Бібліотека знань</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-ink">
          Корисні матеріали — Простір натхнення
        </h1>
        <p className="text-base sm:text-lg text-ink-light leading-relaxed">
          Науково обґрунтовані статті, практичні поради, відеоматеріали та рекомендації для батьків, підлітків і студентів.
        </p>
      </section>

      {/* SEARCH AND FILTERS TOOLBAR */}
      <section className="p-6 sm:p-8 rounded-4xl bg-white/85 border border-beige shadow-soft flex flex-col gap-6">
        {/* Search input */}
        <div className="relative w-full">
          <Search className="w-5 h-5 text-ink-light absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Пошук за темою, ключовим словом або назвою статті..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-cream/70 border border-beige focus:border-lavender-dark focus:bg-white outline-none text-sm text-ink placeholder:text-ink-light transition-all"
          />
        </div>

        {/* Filters: Category and Audience */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-2 border-t border-beige/60">
          {/* Format / Type */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-ink-light mr-1 flex items-center gap-1">
              <FileText className="w-3.5 h-3.5 text-lavender-deep" />
              Тип:
            </span>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                  selectedCategory === cat
                    ? "bg-lavender-deep text-white shadow-sm"
                    : "bg-cream hover:bg-white text-ink border border-beige/70"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Target Audience */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-ink-light mr-1 flex items-center gap-1">
              <UserCheck className="w-3.5 h-3.5 text-sage-dark" />
              Аудиторія:
            </span>
            {AUDIENCES.map((aud) => (
              <button
                key={aud}
                onClick={() => setSelectedAudience(aud)}
                className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                  selectedAudience === aud
                    ? "bg-sage-dark text-white shadow-sm"
                    : "bg-cream hover:bg-white text-ink border border-beige/70"
                }`}
              >
                {aud}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ARTICLES LIST */}
      <section className="flex flex-col gap-6">
        {filteredArticles.length === 0 ? (
          <div className="p-12 text-center rounded-3xl bg-white/70 border border-beige">
            <p className="text-base font-serif text-ink font-semibold">
              Матеріалів за цим запитом не знайдено
            </p>
            <p className="text-xs text-ink-light mt-1">
              Спробуйте змінити фільтри або скинути рядок пошуку
            </p>
          </div>
        ) : (
          filteredArticles.map((art) => {
            const isExpanded = expandedArticle === art.id;
            return (
              <article
                key={art.id}
                className="p-6 sm:p-8 rounded-4xl bg-white/80 border border-beige hover:border-lavender shadow-soft transition-all flex flex-col gap-5"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-lavender/30 text-lavender-deep">
                      {art.category}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-sage/20 text-sage-dark">
                      Для кого: {art.audience}
                    </span>
                  </div>

                  <span className="flex items-center gap-1.5 text-xs text-ink-light">
                    <Clock className="w-3.5 h-3.5" />
                    {art.readTime}
                  </span>
                </div>

                <div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink">
                    {art.title}
                  </h2>
                  <p className="text-sm sm:text-base text-ink-light leading-relaxed mt-2">
                    {art.summary}
                  </p>
                </div>

                {/* Key Takeaways */}
                <div className="p-4 rounded-2xl bg-cream border border-beige/70">
                  <span className="text-xs font-bold uppercase tracking-wider text-lavender-deep block mb-2 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    Ключові тези:
                  </span>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-ink">
                    {art.keyTakeaways.map((takeaway, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-sage-dark mt-0.5 flex-shrink-0" />
                        <span>{takeaway}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Expanded full reading content */}
                {isExpanded && (
                  <div className="pt-4 border-t border-beige space-y-4 animate-fadeIn">
                    <h3 className="font-serif text-lg font-bold text-ink">
                      Повний текст матеріалу:
                    </h3>
                    {art.content.map((p, idx) => (
                      <p
                        key={idx}
                        className="text-sm sm:text-base text-ink-light leading-relaxed"
                      >
                        {p}
                      </p>
                    ))}
                  </div>
                )}

                <div className="flex items-center justify-between pt-2">
                  <button
                    onClick={() =>
                      setExpandedArticle(isExpanded ? null : art.id)
                    }
                    className="text-xs sm:text-sm font-semibold text-lavender-deep hover:underline flex items-center gap-1.5"
                  >
                    <span>{isExpanded ? "Згорнути матеріал" : "Читати повністю"}</span>
                    <ChevronRight
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isExpanded ? "-rotate-90" : "rotate-90"
                      }`}
                    />
                  </button>

                  <button
                    onClick={() => {
                      alert("Матеріал збережено для автономного читання.");
                    }}
                    className="p-2 rounded-xl bg-cream hover:bg-white text-ink-light hover:text-ink border border-beige transition-all text-xs flex items-center gap-1.5 shadow-2xs"
                    title="Зберегти статтю"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Зберегти</span>
                  </button>
                </div>
              </article>
            );
          })
        )}
      </section>

      {/* DOWNLOADABLE PSYCHOLOGICAL GUIDES */}
      <section className="p-8 sm:p-12 rounded-4xl bg-gradient-to-r from-cream via-lavender-light/30 to-rose-light/30 border border-lavender/40 shadow-soft flex flex-col gap-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-lavender-deep">
            Корисні чеклісти
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink mt-1">
            Пам'ятки з емоційної саморегуляції
          </h2>
          <p className="text-xs sm:text-sm text-ink-light mt-1">
            Створені для швидкої допомоги під час стресу або перевтоми.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="p-5 rounded-3xl bg-white/90 border border-beige shadow-sm flex flex-col justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-lavender-deep">Для підлітків</span>
              <h3 className="font-serif text-lg font-bold text-ink mt-1">
                «5 кроків при емоційній втомі»
              </h3>
              <p className="text-xs text-ink-light mt-2 leading-relaxed">
                Швидка тілесна техніка 'Заземлення 5-4-3-2-1' та кольорове дихання.
              </p>
            </div>
            <Link
              href="/workshop"
              className="py-2 px-3 text-center rounded-xl bg-cream hover:bg-lavender/30 text-xs font-semibold text-ink border border-beige"
            >
              Виконати вправу →
            </Link>
          </div>

          <div className="p-5 rounded-3xl bg-white/90 border border-beige shadow-sm flex flex-col justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-rose-dark">Для батьків</span>
              <h3 className="font-serif text-lg font-bold text-ink mt-1">
                «Як розмовляти про дитячі малюнки»
              </h3>
              <p className="text-xs text-ink-light mt-2 leading-relaxed">
                Добірка екологічних запитань без тиску, які допоможуть дитині відкритися.
              </p>
            </div>
            <Link
              href="/art-therapy"
              className="py-2 px-3 text-center rounded-xl bg-cream hover:bg-rose/30 text-xs font-semibold text-ink border border-beige"
            >
              Читати рекомендації →
            </Link>
          </div>

          <div className="p-5 rounded-3xl bg-white/90 border border-beige shadow-sm flex flex-col justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-sage-dark">Для студентів</span>
              <h3 className="font-serif text-lg font-bold text-ink mt-1">
                «Творчий щоденник емоцій»
              </h3>
              <p className="text-xs text-ink-light mt-2 leading-relaxed">
                Шаблон 10-хвилинного ведення щоденника настрою за допомогою мазків фарби.
              </p>
            </div>
            <Link
              href="/workshop"
              className="py-2 px-3 text-center rounded-xl bg-cream hover:bg-sage/30 text-xs font-semibold text-ink border border-beige"
            >
              Спробувати полотно →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
