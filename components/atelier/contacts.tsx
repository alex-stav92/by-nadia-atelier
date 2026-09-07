import { MapPin } from 'lucide-react'
import { Reveal } from '@/components/reveal'

import { CONTACT_LINKS, CONTACTS } from '../../components/site-data'

export function Contacts() {
  return (
    <section
      id="contacts"
      className="border-t border-border/60 bg-primary py-20 text-primary-foreground md:py-28"
    >
      <div className="container-x grid gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.32em] text-accent-foreground/70">
            Контакты
          </p>

          <h2 className="mt-4 font-serif text-4xl leading-tight text-balance md:text-5xl">
            Давайте обсудим ваш заказ
          </h2>

          <p className="mt-6 font-serif text-2xl">
            ByNadia
          </p>

          <p className="mt-2 max-w-sm text-pretty leading-relaxed text-primary-foreground/70">
            Ателье индивидуального пошива и ремонта одежды.
          </p>

          <a
            href={CONTACTS.mapsHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 flex w-fit items-start gap-3 text-primary-foreground/80 transition-colors hover:text-primary-foreground"
          >
            <MapPin className="mt-0.5 size-5 shrink-0 text-accent-foreground/80" />

            <span className="flex flex-col">
              <span className="text-sm text-primary-foreground/50">
                Адрес
              </span>

              <span className="mt-0.5 text-base">
                {CONTACTS.addressFull}
              </span>

              <span className="mt-1 text-xs text-primary-foreground/50">
                Открыть в Яндекс Картах →
              </span>
            </span>
          </a>
        </Reveal>

        <Reveal
          delay={120}
          className="flex flex-col gap-3"
        >
          {CONTACT_LINKS.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith('http') ? '_blank' : undefined}
              rel={
                c.href.startsWith('http')
                  ? 'noopener noreferrer'
                  : undefined
              }
              className="group flex items-center gap-5 rounded-2xl border border-primary-foreground/15 bg-primary-foreground/[0.06] p-5 transition-colors duration-300 hover:border-accent hover:bg-primary-foreground/[0.1]"
            >
              <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                {typeof c.icon === 'string' ? (
                  <span className="text-sm font-semibold tracking-tight">
                    {c.icon}
                  </span>
                ) : (
                  <c.icon className="size-5" />
                )}
              </span>

              <span className="flex flex-col">
                <span className="text-sm text-primary-foreground/60">
                  {c.label}
                </span>

                <span className="font-serif text-xl">
                  {c.value}
                </span>
              </span>
            </a>
          ))}
        </Reveal>
      </div>
    </section>
  )
}