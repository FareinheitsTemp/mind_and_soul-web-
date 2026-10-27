"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import { 
  Mail, 
  Send, 
  MapPin, 
  Heart, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  MessageSquare, 
  AlertCircle 
} from "lucide-react";
import { SITE_INFO } from "@/lib/data";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Питання щодо арттерапевтичних вправ",
    message: "",
    consent: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError("Будь ласка, заповніть усі обов'язкові поля.");
      return;
    }
    if (!formData.consent) {
      setError("Необхідно підтвердити згоду на обробку даних для відповіді.");
      return;
    }

    setError(null);
    setSubmitted(true);

    // Launch cheerful petal confetti
    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.7 },
        colors: ["#C9B8E8", "#F5D5DD", "#A9BFA3", "#FAF6EF"],
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-14 sm:gap-20">
      {/* PAGE HEADER */}
      <section className="text-center max-w-3xl mx-auto flex flex-col gap-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-lavender/40 text-xs font-semibold text-lavender-deep mx-auto shadow-soft">
          <Mail className="w-3.5 h-3.5" />
          <span>Розділ 7 • Зворотний зв’язок</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-ink">
          Будьмо на зв’язку
        </h1>
        <p className="text-base sm:text-lg text-ink-light leading-relaxed">
          Маєте запитання щодо арттерапевтичних технік, пропозиції для співпраці чи бажаєте поділитися враженнями від вправ? Буду рада щирому діалогу.
        </p>
      </section>

      {/* GRID: FORM + CONTACT INFORMATION */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Contact Info Cards */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="p-8 rounded-4xl bg-white/90 border border-beige shadow-card flex flex-col gap-6">
            <h2 className="font-serif text-2xl font-bold text-ink">
              Прямі контакти
            </h2>

            <p className="text-xs sm:text-sm text-ink-light leading-relaxed">
              Ви можете написати мені на пошту або зв'язатися через месенджер. Я намагаюся відповідати протягом 24 годин.
            </p>

            <div className="space-y-4 pt-2 border-t border-beige">
              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-cream/70 border border-beige/60">
                <Mail className="w-5 h-5 text-lavender-deep flex-shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="font-bold text-ink block">Електронна пошта:</span>
                  <a
                    href={`mailto:${SITE_INFO.author.email}`}
                    className="text-lavender-deep font-medium hover:underline break-all"
                  >
                    {SITE_INFO.author.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-cream/70 border border-beige/60">
                <Send className="w-5 h-5 text-indigo-500 flex-shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="font-bold text-ink block">Telegram:</span>
                  <a
                    href={`https://t.me/${SITE_INFO.author.telegram.replace("@", "")}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-indigo-600 font-medium hover:underline"
                  >
                    {SITE_INFO.author.telegram}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-cream/70 border border-beige/60">
                <Heart className="w-5 h-5 text-rose-dark flex-shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="font-bold text-ink block">Instagram:</span>
                  <span className="text-rose-dark font-medium">
                    {SITE_INFO.author.instagram}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-cream/70 border border-beige/60">
                <MapPin className="w-5 h-5 text-sage-dark flex-shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="font-bold text-ink block">Локація:</span>
                  <span className="text-ink-light">{SITE_INFO.author.location}</span>
                </div>
              </div>
            </div>

            {/* Privacy note */}
            <div className="p-4 rounded-2xl bg-lavender-light/40 border border-lavender/40 text-xs text-ink-light flex items-start gap-2.5">
              <ShieldCheck className="w-4 h-4 text-lavender-deep flex-shrink-0 mt-0.5" />
              <p>
                Повна повага до конфіденційності: ваші повідомлення та контактні адреси не передаються жодним стороннім особам.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-7">
          <div className="p-8 sm:p-10 rounded-4xl glass-card flex flex-col gap-6">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-lavender-deep">
              <MessageSquare className="w-4 h-4" />
              <span>Форма зворотного зв’язку</span>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink">
              Напишіть мені повідомлення
            </h2>

            {submitted ? (
              <div className="p-8 rounded-3xl bg-sage-light/60 border border-sage flex flex-col items-center text-center gap-4 animate-fadeIn">
                <div className="w-14 h-14 rounded-full bg-sage-dark text-white flex items-center justify-center shadow-md">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-ink">
                    Дякую за повідомлення!
                  </h3>
                  <p className="text-xs sm:text-sm text-ink-light mt-1.5 max-w-md">
                    Ваш запит успішно отримано. Я відповім на вказану пошту <strong className="text-ink">{formData.email}</strong> найближчим часом.
                  </p>
                </div>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: "",
                      email: "",
                      subject: "Питання щодо арттерапевтичних вправ",
                      message: "",
                      consent: false,
                    });
                  }}
                  className="px-6 py-2.5 rounded-full bg-white text-ink text-xs font-semibold border border-beige hover:bg-cream transition-all shadow-sm"
                >
                  Надіслати ще одне повідомлення
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {error && (
                  <div className="p-3.5 rounded-2xl bg-rose-light text-rose-dark border border-rose text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-ink">
                      Ваше ім'я *
                    </label>
                    <input
                      type="text"
                      placeholder="Оксана чи Максим"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="px-4 py-3 rounded-2xl bg-white border border-beige focus:border-lavender-dark outline-none text-xs sm:text-sm text-ink transition-all"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-ink">
                      Ваш Email *
                    </label>
                    <input
                      type="email"
                      placeholder="example@mail.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="px-4 py-3 rounded-2xl bg-white border border-beige focus:border-lavender-dark outline-none text-xs sm:text-sm text-ink transition-all"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-ink">
                    Тема звернення
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    className="px-4 py-3 rounded-2xl bg-white border border-beige focus:border-lavender-dark outline-none text-xs sm:text-sm text-ink transition-all"
                  >
                    <option>Питання щодо арттерапевтичних вправ</option>
                    <option>Відгук про сайт «Mind &amp; Soul»</option>
                    <option>Пропозиція співпраці / воркшопу</option>
                    <option>Інше психологічне питання</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-ink">
                    Текст повідомлення *
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Напишіть ваші думки, питання чи враження від творчих методик..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="px-4 py-3 rounded-2xl bg-white border border-beige focus:border-lavender-dark outline-none text-xs sm:text-sm text-ink transition-all resize-none"
                  />
                </div>

                <div className="flex items-start gap-2.5 pt-2">
                  <input
                    type="checkbox"
                    id="consent"
                    checked={formData.consent}
                    onChange={(e) =>
                      setFormData({ ...formData, consent: e.target.checked })
                    }
                    className="mt-1 w-4 h-4 accent-lavender-deep rounded cursor-pointer"
                  />
                  <label
                    htmlFor="consent"
                    className="text-xs text-ink-light cursor-pointer leading-relaxed"
                  >
                    Я даю згоду на використання зазначених контактних даних виключно для відповіді на моє звернення з дотриманням принципів конфіденційності.
                  </label>
                </div>

                <button
                  type="submit"
                  className="mt-3 py-3.5 px-6 rounded-full bg-lavender-deep hover:bg-lavender-deep/90 text-white font-semibold text-sm shadow-card hover:shadow-hover transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Надіслати повідомлення</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
