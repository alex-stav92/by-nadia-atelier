'use client'

import { useReveal } from '@/hooks/useReveal'
import { AUDIENCES } from '@/data/content'

export default function WhoWeWorkWith() {
  const { ref, visible } = useReveal<HTMLDivElement>()

  return (
    <section className="border-t border-border/60 bg-background py-20 md:py-28">
      <div ref={ref} className="container-x">

        {/* HEADER */}
        <div className="mb-12 max-w-2xl md:mb-16">
          <p
            className={`text-xs uppercase tracking-[0.32em] text-accent ${
              visible ? 'animate-fade-up' : 'opacity-0'
            }`}
          >
            Сотрудничество
          </p>

          <h2
            className={`mt-4 font-serif text-4xl leading-tight tracking-tight text-foreground text-balance md:text-5xl ${
              visible ? 'animate-fade-up' : 'opacity-0'
            }`}
            style={{
              animationDelay: '100ms',
            }}
          >
            С кем мы работаем
          </h2>

          <p
            className={`mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground ${
              visible ? 'animate-fade-up' : 'opacity-0'
            }`}
            style={{
              animationDelay: '180ms',
            }}
          >
            Работаем с брендами, дизайнерами и компаниями,
            которым важно качественное производство небольших и
            средних партий.
          </p>
        </div>


        {/* AUDIENCES */}
        <div className="grid gap-px overflow-hidden rounded-2xl border border-border/70 bg-border/70 md:grid-cols-2 lg:grid-cols-4">

          {AUDIENCES.map((audience, i) => (
            <article
              key={audience.title}
              className={`group flex min-h-[260px] flex-col bg-card p-7 transition-colors duration-500 hover:bg-secondary/60 md:p-8 ${
                visible ? 'animate-fade-up' : 'opacity-0'
              }`}
              style={{
                animationDelay: `${280 + i * 90}ms`,
              }}
            >

              {/* NUMBER */}
              <span className="font-serif text-3xl text-accent/70 transition-transform duration-500 group-hover:translate-x-1">
                0{i + 1}
              </span>


              {/* TITLE */}
              <h3 className="mt-12 font-serif text-2xl leading-tight tracking-tight text-foreground md:text-[26px]">
                {audience.title}
              </h3>


              {/* DESCRIPTION */}
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
                {audience.description}
              </p>

            </article>
          ))}

        </div>

      </div>
    </section>
  )
}