'use client'

import { useState, type FormEvent } from 'react'
import { useReveal } from '@/hooks/useReveal'
import { CONTACTS } from '@/data/content'

type FormData = {
  name: string
  company: string
  contact: string
  product: string
  volume: string
  comment: string
}

const INITIAL_FORM: FormData = {
  name: '',
  company: '',
  contact: '',
  product: '',
  volume: '',
  comment: '',
}

export default function Contact() {
  const { ref, visible } = useReveal<HTMLDivElement>()
  const [form, setForm] = useState<FormData>(INITIAL_FORM)
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const updateField = (
    field: keyof FormData,
    value: string
  ) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSubmit = async (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault()

    if (isSubmitting) return

    setIsSubmitting(true)

    /*
     * Здесь можно подключить реальную отправку:
     * Telegram / почта / API / Formspree / собственный backend.
     *
     * Пока сохраняем существующую механику интерфейса.
     */

    await new Promise((resolve) => setTimeout(resolve, 500))

    setIsSubmitting(false)
    setSubmitted(true)
  }

  return (
    <section
      id="contacts"
      className="border-t border-border/60 bg-background py-16 sm:py-20 md:py-24 lg:py-28"
    >
      <div
        ref={ref}
        className="container-x"
      >
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-20 xl:gap-28">

          {/* LEFT */}
          <div>
            <p
              className={`text-xs uppercase tracking-[0.28em] text-accent transition-opacity ${
                visible
                  ? 'animate-fade-up'
                  : 'opacity-0'
              }`}
            >
              Контакты
            </p>

            <h2
              className={`mt-4 max-w-xl font-serif text-4xl leading-[1.05] tracking-tight text-foreground text-balance sm:text-5xl lg:text-[3.4rem] ${
                visible
                  ? 'animate-fade-up'
                  : 'opacity-0'
              }`}
              style={{
                animationDelay: '100ms',
              }}
            >
              Обсудим производство вашего проекта.
            </h2>

            <p
              className={`mt-6 max-w-lg text-base leading-7 text-muted-foreground sm:text-lg ${
                visible
                  ? 'animate-fade-up'
                  : 'opacity-0'
              }`}
              style={{
                animationDelay: '180ms',
              }}
            >
              Расскажите, что нужно сшить, какой объём
              и сроки. Обсудим возможности производства,
              рассчитаем заказ и предложим оптимальный
              вариант.
            </p>

            {/* CONTACT INFORMATION */}
            <div
              className={`mt-10 grid gap-8 sm:grid-cols-2 lg:mt-12 lg:grid-cols-1 ${
                visible
                  ? 'animate-fade-up'
                  : 'opacity-0'
              }`}
              style={{
                animationDelay: '260ms',
              }}
            >
              {/* LOCATION */}
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-muted-foreground">
                  Адрес
                </p>

                <p className="mt-2 text-sm leading-6 text-foreground">
                  {CONTACTS.city}
                </p>

                <p className="text-sm leading-6 text-foreground">
                  ул. 50 лет ВЛКСМ, 33
                </p>
              </div>

              {/* PHONE */}
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-muted-foreground">
                  Телефон
                </p>

                <a
                  href={CONTACTS.phoneHref}
                  className="mt-2 inline-block text-sm text-foreground underline decoration-border underline-offset-4 transition-colors duration-300 hover:text-accent hover:decoration-accent"
                >
                  {CONTACTS.phone}
                </a>
              </div>

              {/* MESSENGERS */}
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-muted-foreground">
                  Мессенджеры
                </p>

                <div className="mt-2 flex flex-col gap-2">
                  <a
                    href={CONTACTS.telegramHref}
                    target="_blank"
                    rel="noreferrer"
                    className="w-fit text-sm text-foreground underline decoration-border underline-offset-4 transition-colors duration-300 hover:text-accent hover:decoration-accent"
                  >
                    Telegram — {CONTACTS.telegram}
                  </a>

                  <a
                    href={CONTACTS.whatsappHref}
                    target="_blank"
                    rel="noreferrer"
                    className="w-fit text-sm text-foreground underline decoration-border underline-offset-4 transition-colors duration-300 hover:text-accent hover:decoration-accent"
                  >
                    WhatsApp — {CONTACTS.whatsapp}
                  </a>
                </div>
              </div>

              {/* EMAIL */}
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-muted-foreground">
                  Email
                </p>

                <a
                  href={CONTACTS.emailHref}
                  className="mt-2 inline-block break-all text-sm text-foreground underline decoration-border underline-offset-4 transition-colors duration-300 hover:text-accent hover:decoration-accent"
                >
                  {CONTACTS.email}
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT — FORM */}
          <div
            className={`rounded-2xl border border-border bg-secondary/30 p-6 sm:p-8 lg:p-10 ${
              visible
                ? 'animate-fade-up'
                : 'opacity-0'
            }`}
            style={{
              animationDelay: '320ms',
            }}
          >
            {submitted ? (
              /* SUCCESS */
              <div className="flex min-h-[520px] flex-col items-center justify-center px-4 text-center">

                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-accent/30 bg-accent/10">
                  <span className="font-serif text-2xl text-accent">
                    ✓
                  </span>
                </div>

                <h3 className="mt-7 font-serif text-3xl tracking-tight text-foreground">
                  Спасибо за заявку
                </h3>

                <p className="mt-4 max-w-md text-sm leading-7 text-muted-foreground">
                  Мы получили информацию о проекте.
                  Свяжемся с вами, чтобы обсудить детали,
                  сроки и стоимость производства.
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false)
                    setForm(INITIAL_FORM)
                  }}
                  className="mt-8 text-xs uppercase tracking-[0.2em] text-accent transition-opacity hover:opacity-70"
                >
                  Отправить ещё одну заявку
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col"
              >
                {/* FORM HEADER */}
                <div className="mb-8">
                  <p className="text-xs uppercase tracking-[0.28em] text-accent">
                    Заявка
                  </p>

                  <h3 className="mt-3 max-w-md font-serif text-3xl leading-tight tracking-tight text-foreground">
                    Расскажите о вашем проекте
                  </h3>

                  <p className="mt-3 max-w-lg text-sm leading-6 text-muted-foreground">
                    Чем больше информации вы оставите,
                    тем точнее сможем сориентировать вас
                    по производству.
                  </p>
                </div>

                {/* FIELDS */}
                <div className="grid gap-x-6 gap-y-6 sm:grid-cols-2">

                  {/* NAME */}
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground"
                    >
                      Имя
                      <span className="ml-1 text-accent">
                        *
                      </span>
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={(e) =>
                        updateField('name', e.target.value)
                      }
                      placeholder="Ваше имя"
                      required
                      autoComplete="name"
                      className="w-full border-b border-border bg-transparent py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-accent"
                    />
                  </div>

                  {/* COMPANY */}
                  <div>
                    <label
                      htmlFor="company"
                      className="mb-2 block text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground"
                    >
                      Компания / бренд
                    </label>

                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={form.company}
                      onChange={(e) =>
                        updateField(
                          'company',
                          e.target.value
                        )
                      }
                      placeholder="Название бренда"
                      autoComplete="organization"
                      className="w-full border-b border-border bg-transparent py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-accent"
                    />
                  </div>

                  {/* CONTACT */}
                  <div>
                    <label
                      htmlFor="contact"
                      className="mb-2 block text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground"
                    >
                      Телефон / Telegram
                      <span className="ml-1 text-accent">
                        *
                      </span>
                    </label>

                    <input
                      id="contact"
                      name="contact"
                      type="text"
                      value={form.contact}
                      onChange={(e) =>
                        updateField(
                          'contact',
                          e.target.value
                        )
                      }
                      placeholder="+7 или @username"
                      required
                      autoComplete="tel"
                      className="w-full border-b border-border bg-transparent py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-accent"
                    />
                  </div>

                  {/* VOLUME */}
                  <div>
                    <label
                      htmlFor="volume"
                      className="mb-2 block text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground"
                    >
                      Примерный объём
                    </label>

                    <input
                      id="volume"
                      name="volume"
                      type="text"
                      value={form.volume}
                      onChange={(e) =>
                        updateField(
                          'volume',
                          e.target.value
                        )
                      }
                      placeholder="30–50 шт."
                      className="w-full border-b border-border bg-transparent py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-accent"
                    />
                  </div>

                  {/* PRODUCT */}
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="product"
                      className="mb-2 block text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground"
                    >
                      Что нужно произвести?
                    </label>

                    <input
                      id="product"
                      name="product"
                      type="text"
                      value={form.product}
                      onChange={(e) =>
                        updateField(
                          'product',
                          e.target.value
                        )
                      }
                      placeholder="Например: худи, футболки, костюмы, мерч"
                      className="w-full border-b border-border bg-transparent py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-accent"
                    />
                  </div>

                  {/* COMMENT */}
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="comment"
                      className="mb-2 block text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground"
                    >
                      Комментарий
                    </label>

                    <textarea
                      id="comment"
                      name="comment"
                      rows={4}
                      value={form.comment}
                      onChange={(e) =>
                        updateField(
                          'comment',
                          e.target.value
                        )
                      }
                      placeholder="Расскажите о задаче, сроках или особенностях заказа"
                      className="w-full resize-none border-b border-border bg-transparent py-3 text-sm leading-6 text-foreground outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-accent"
                    />
                  </div>
                </div>

                {/* ACTION */}
                <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-foreground px-7 py-4 text-sm font-medium text-background transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
                  >
                    {isSubmitting
                      ? 'Отправляем...'
                      : 'Обсудить проект'}

                    {!isSubmitting && (
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    )}
                  </button>

                  <p className="max-w-sm text-[11px] leading-5 text-muted-foreground">
                    Оставляя заявку, вы соглашаетесь
                    на обработку персональных данных
                    для связи по вашему проекту.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}