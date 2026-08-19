'use client'

import { useReveal } from '@/hooks/useReveal'
import { SERVICES } from '@/data/content'

export default function Services() {
  const { ref, visible } = useReveal<HTMLDivElement>()

  return (
    <section
      id="services"
      className="border-t border-border/60 py-20 md:py-28"
    >
      <div ref={ref} className="container-x">

        {/* =================================================
            HEADER
        ================================================= */}

        <div
          className={`max-w-2xl ${
            visible ? 'animate-fade-up' : 'opacity-0'
          }`}
        >
          <p className="text-xs uppercase tracking-[0.32em] text-accent">
            Производство
          </p>

          <h2 className="mt-4 font-serif text-4xl leading-tight tracking-tight text-balance text-foreground md:text-5xl">
            Что мы можем производить
          </h2>

          <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">
            От небольших тестовых партий до производства одежды,
            мерча и индивидуальных проектов.
          </p>
        </div>


        {/* =================================================
            SERVICES
        ================================================= */}

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border/70 bg-border/70 sm:grid-cols-2">

          {SERVICES.map((service, i) => (
            <article
              key={service.id}
              className={`group flex min-h-[320px] flex-col bg-card p-8 transition-colors duration-300 hover:bg-secondary/60 md:p-10 ${
                visible ? 'animate-fade-up' : 'opacity-0'
              }`}
              style={{
                animationDelay: `${120 + i * 90}ms`,
              }}
            >

              {/* NUMBER + TITLE */}

              <div className="flex items-baseline gap-3">

                <span className="font-serif text-xl text-accent">
                  0{i + 1}
                </span>

                <h3 className="font-serif text-2xl tracking-tight text-foreground md:text-3xl">
                  {service.title}
                </h3>

              </div>


              {/* DESCRIPTION */}

              <p className="mt-4 max-w-md text-pretty leading-relaxed text-muted-foreground">
                {service.description}
              </p>


              {/* ITEMS */}

              <ul className="mt-auto flex flex-wrap gap-2 pt-8">

                {service.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-border bg-background px-3.5 py-1.5 text-sm text-foreground/80 transition-colors duration-300 group-hover:border-accent/40"
                  >
                    {item}
                  </li>
                ))}

              </ul>

            </article>
          ))}

        </div>


        {/* =================================================
            BOTTOM NOTE
        ================================================= */}

        <div
          className={`mt-8 flex flex-col gap-3 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between ${
            visible ? 'animate-fade-up' : 'opacity-0'
          }`}
          style={{
            animationDelay: '550ms',
          }}
        >
          <p>
            Нужен нестандартный проект?
          </p>

          <a
            href="#contact"
            className="font-medium text-foreground underline underline-offset-4 transition-colors hover:text-accent"
          >
            Обсудить задачу →
          </a>
        </div>

      </div>
    </section>
  )
}