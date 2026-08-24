'use client'

import { useState, type FormEvent } from 'react'
import { useReveal } from '@/hooks/useReveal'
import { CONTACTS } from '@/data/content'
import { CtaButton } from '@/components/cta-button'

type FormField = {
  name: string
  label: string
  type: string
  placeholder: string
  required?: boolean
}

const FORM_FIELDS: FormField[] = [
  {
    name: 'name',
    label: 'Имя',
    type: 'text',
    placeholder: 'Ваше имя',
    required: true,
  },
  {
    name: 'company',
    label: 'Компания / бренд',
    type: 'text',
    placeholder: 'Название бренда или компании',
  },
  {
    name: 'contact',
    label: 'Телефон / Telegram',
    type: 'text',
    placeholder: 'Как с вами связаться',
    required: true,
  },
  {
    name: 'product',
    label: 'Что нужно произвести?',
    type: 'text',
    placeholder: 'Например: худи, футболки, мерч',
  },
  {
    name: 'volume',
    label: 'Примерный объём',
    type: 'text',
    placeholder: 'Например: 30–50 шт.',
  },
]

export default function Contact() {
  const { ref, visible } = useReveal<HTMLDivElement>()
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section
      id="contact"
      className="border-t border-border/60 bg-background py-0 sm:py-8 md:py-12 lg:py-20"
    >
      <div ref={ref} className="container-x">

        {/* HEADER / CONTENT */}
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">

          {/* LEFT */}
          <div>
            <p
              className={`text-xs uppercase tracking-[0.32em] text-accent ${
                visible ? 'animate-fade-up' : 'opacity-0'
              }`}
            >
              Контакты
            </p>

            <h2
              className={`mt-4 font-serif text-4xl leading-[1.08] tracking-tight text-balance text-foreground sm:text-5xl ${
                visible ? 'animate-fade-up' : 'opacity-0'
              }`}
              style={{
                animationDelay: '100ms',
              }}
            >
              Будем рады обсудить ваш проект.
            </h2>

            <p
              className={`mt-6 max-w-md text-lg leading-relaxed text-muted-foreground ${
                visible ? 'animate-fade-up' : 'opacity-0'
              }`}
              style={{
                animationDelay: '180ms',
              }}
            >
              Расскажите о задаче — обсудим возможности производства,
              объём, сроки и детали заказа.
            </p>

            {/* CONTACTS */}
            <div
              className={`mt-10 space-y-7 ${
                visible ? 'animate-fade-up' : 'opacity-0'
              }`}
              style={{
                animationDelay: '260ms',
              }}
            >

              {/* LOCATION */}
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  Локация
                </p>

                <p className="mt-2 text-sm text-foreground">
                  {CONTACTS.city}
                </p>
              </div>

              {/* PHONE */}
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  Телефон
                </p>

                <a
                  href={CONTACTS.phoneHref}
                  className="mt-2 inline-block text-sm text-foreground transition-colors duration-300 hover:text-accent"
                >
                  {CONTACTS.phone}
                </a>
              </div>

              {/* MESSENGERS */}
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  Мессенджеры
                </p>

                <div className="mt-2 flex flex-col gap-1.5">
                  <a
                    href={CONTACTS.telegramHref}
                    className="w-fit text-sm text-foreground transition-colors duration-300 hover:text-accent"
                  >
                    Telegram — {CONTACTS.telegram}
                  </a>

                  <a
                    href={CONTACTS.whatsappHref}
                    className="w-fit text-sm text-foreground transition-colors duration-300 hover:text-accent"
                  >
                    {CONTACTS.whatsapp}
                  </a>
                </div>
              </div>

              {/* EMAIL */}
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  Email
                </p>

                <a
                  href={CONTACTS.emailHref}
                  className="mt-2 inline-block text-sm text-foreground transition-colors duration-300 hover:text-accent"
                >
                  {CONTACTS.email}
                </a>
              </div>
            </div>
          </div>


          {/* RIGHT — FORM */}
          <div
            className={`rounded-2xl border border-border bg-secondary/30 p-6 sm:p-8 md:p-10 ${
              visible ? 'animate-fade-up' : 'opacity-0'
            }`}
            style={{
              animationDelay: '320ms',
            }}
          >

            {submitted ? (
              <div className="flex min-h-[520px] flex-col items-center justify-center text-center">

                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-accent/30 bg-accent/10">
                  <span className="font-serif text-xl text-accent">
                    ✓
                  </span>
                </div>

                <h3 className="mt-6 font-serif text-2xl text-foreground">
                  Запрос отправлен
                </h3>

                <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
                  Спасибо за обращение. Мы свяжемся с вами,
                  чтобы обсудить детали проекта.
                </p>

              </div>
            ) : (

              <form onSubmit={handleSubmit}>

                <div className="mb-8">
                  <p className="text-xs uppercase tracking-[0.28em] text-accent">
                    Заявка
                  </p>

                  <h3 className="mt-3 font-serif text-2xl text-foreground md:text-3xl">
                    Расскажите о проекте
                  </h3>
                </div>


                {/* FIELDS */}
                <div className="grid gap-x-6 gap-y-7 sm:grid-cols-2">

                  {FORM_FIELDS.map((field) => (
                    <div
                      key={field.name}
                      className={
                        field.name === 'product' || field.name === 'volume'
                          ? 'sm:col-span-1'
                          : 'sm:col-span-2'
                      }
                    >
                      <label
                        htmlFor={field.name}
                        className="mb-2 block text-[10px] uppercase tracking-[0.22em] text-muted-foreground"
                      >
                        {field.label}
                        {field.required && (
                          <span className="ml-1 text-accent">*</span>
                        )}
                      </label>

                      <input
                        id={field.name}
                        name={field.name}
                        type={field.type}
                        placeholder={field.placeholder}
                        required={field.required}
                        className="w-full border-b border-border bg-transparent py-3 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-colors duration-300 focus:border-accent"
                      />
                    </div>
                  ))}


                  {/* COMMENT */}
                  <div className="sm:col-span-2">

                    <label
                      htmlFor="comment"
                      className="mb-2 block text-[10px] uppercase tracking-[0.22em] text-muted-foreground"
                    >
                      Комментарий
                    </label>

                    <textarea
                      id="comment"
                      name="comment"
                      rows={4}
                      placeholder="Дополнительные детали проекта"
                      className="w-full resize-none border-b border-border bg-transparent py-3 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-colors duration-300 focus:border-accent"
                    />

                  </div>
                </div>


                {/* ACTION */}
                <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">

                  <CtaButton
                    href="#contact"
                    size="lg"
                    variant="primary"
                    className="group w-full sm:w-auto"
                    onClick={(e) => {
                      e.preventDefault()

                      const form = e.currentTarget.closest('form')

                      if (form?.checkValidity()) {
                        form.requestSubmit()
                      } else {
                        form?.reportValidity()
                      }
                    }}
                  >
                    Отправить запрос

                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </CtaButton>

                  <p className="max-w-xs text-[11px] leading-relaxed text-muted-foreground">
                    Нажимая кнопку, вы соглашаетесь на обработку
                    данных для связи по проекту.
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