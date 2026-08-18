'use client';
import { useState, type FormEvent } from 'react';
import { useReveal } from '@/hooks/useReveal';
import { CONTACTS } from '@/data/content';

type FormField = {
  name: string;
  label: string;
  type: string;
  placeholder: string;
  required?: boolean;
};

const FORM_FIELDS: FormField[] = [
  { name: 'name', label: 'Имя', type: 'text', placeholder: 'Ваше имя', required: true },
  { name: 'company', label: 'Компания / бренд', type: 'text', placeholder: 'Название бренда или компании' },
  { name: 'contact', label: 'Телефон / Telegram', type: 'text', placeholder: 'Как с вами связаться', required: true },
  { name: 'product', label: 'Что нужно произвести?', type: 'text', placeholder: 'Например: худи, футболки, мерч' },
  { name: 'volume', label: 'Примерный объём', type: 'text', placeholder: 'Например: 30–50 шт.' },
];

export default function Contact() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-py bg-cream-100">
      <div ref={ref} className="container-px">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left: info */}
          <div className="lg:col-span-5">
            <p
              className={`eyebrow mb-5 reveal-fade ${visible ? 'is-visible' : ''}`}
              style={{ animationDelay: '0.1s' }}
            >
              Контакты
            </p>
            <h2
              className={`heading-serif text-[32px] sm:text-[40px] md:text-[48px] text-ink reveal ${visible ? 'is-visible' : ''}`}
              style={{ animationDelay: '0.2s' }}
            >
              Будем рады обсудить ваш проект.
            </h2>

            <div
              className={`mt-10 space-y-6 reveal ${visible ? 'is-visible' : ''}`}
              style={{ animationDelay: '0.35s' }}
            >
              <div>
                <p className="font-sans text-[10px] uppercase tracking-wide-3 text-ink/40 mb-1">
                  Локация
                </p>
                <p className="font-sans text-[15px] text-ink">{CONTACTS.city}</p>
              </div>
              <div>
                <p className="font-sans text-[10px] uppercase tracking-wide-3 text-ink/40 mb-1">
                  Телефон
                </p>
                <a
                  href={CONTACTS.phoneHref}
                  className="font-sans text-[15px] text-ink transition-colors hover:text-burgundy"
                >
                  {CONTACTS.phone}
                </a>
              </div>
              <div>
                <p className="font-sans text-[10px] uppercase tracking-wide-3 text-ink/40 mb-1">
                  Мессенджеры
                </p>
                <div className="flex flex-col gap-1">
                  <a
                    href={CONTACTS.telegramHref}
                    className="font-sans text-[15px] text-ink transition-colors hover:text-burgundy"
                  >
                    Telegram — {CONTACTS.telegram}
                  </a>
                  <a
                    href={CONTACTS.whatsappHref}
                    className="font-sans text-[15px] text-ink transition-colors hover:text-burgundy"
                  >
                    {CONTACTS.whatsapp}
                  </a>
                </div>
              </div>
              <div>
                <p className="font-sans text-[10px] uppercase tracking-wide-3 text-ink/40 mb-1">
                  Email
                </p>
                <a
                  href={CONTACTS.emailHref}
                  className="font-sans text-[15px] text-ink transition-colors hover:text-burgundy"
                >
                  {CONTACTS.email}
                </a>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-7">
            <div
              className={`bg-cream-50 p-6 sm:p-8 md:p-10 reveal ${visible ? 'is-visible' : ''}`}
              style={{ animationDelay: '0.45s' }}
            >
              {submitted ? (
                <div className="py-16 text-center">
                  <div className="mx-auto mb-6 flex items-center justify-center w-14 h-14 rounded-full bg-burgundy/10">
                    <span className="heading-serif text-[24px] text-burgundy">✓</span>
                  </div>
                  <h3 className="heading-serif text-[26px] text-ink">Запрос отправлен</h3>
                  <p className="mt-4 font-sans text-[14px] text-ink/55 max-w-sm mx-auto leading-relaxed">
                    Спасибо за обращение. Мы свяжемся с вами в ближайшее время,
                    чтобы обсудить детали проекта.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {FORM_FIELDS.map((field) => (
                      <div
                        key={field.name}
                        className={field.name === 'product' || field.name === 'volume' ? 'sm:col-span-1' : 'sm:col-span-2'}
                      >
                        <label
                          htmlFor={field.name}
                          className="block font-sans text-[11px] uppercase tracking-wide-2 text-ink/50 mb-2.5"
                        >
                          {field.label}
                          {field.required && <span className="text-burgundy"> *</span>}
                        </label>
                        <input
                          id={field.name}
                          name={field.name}
                          type={field.type}
                          placeholder={field.placeholder}
                          required={field.required}
                          className="w-full bg-transparent border-b border-ink/20 py-3 font-sans text-[15px] text-ink placeholder:text-ink/30 focus:outline-none focus:border-burgundy transition-colors"
                        />
                      </div>
                    ))}
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="comment"
                        className="block font-sans text-[11px] uppercase tracking-wide-2 text-ink/50 mb-2.5"
                      >
                        Комментарий
                      </label>
                      <textarea
                        id="comment"
                        name="comment"
                        rows={3}
                        placeholder="Дополнительные детали проекта"
                        className="w-full bg-transparent border-b border-ink/20 py-3 font-sans text-[15px] text-ink placeholder:text-ink/30 focus:outline-none focus:border-burgundy transition-colors resize-none"
                      />
                    </div>
                  </div>
                  <div className="pt-2">
                    <button type="submit" className="btn-primary w-full sm:w-auto">
                      Отправить запрос
                    </button>
                  </div>
                  <p className="font-sans text-[11px] text-ink/35 leading-relaxed">
                    Нажимая «Отправить запрос», вы соглашаетесь на обработку
                    данных для связи по проекту.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
