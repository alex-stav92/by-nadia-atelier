'use client'

import { useReveal } from '@/hooks/useReveal'

const TRUST_POINTS = [
  'Небольшие партии',
  'Гибкое производство',
  'Прямое общение',
  'Ставрополь',
]

export default function IntroTrust() {
  const { ref, visible } = useReveal<HTMLDivElement>()

  return (
    <section className="border-t border-border/60 py-20 md:py-28">
      <div
        ref={ref}
        className="container-x"
      >
        <div className="grid gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">

          {/* TEXT */}
          <div>
            <p
              className={`text-xs uppercase tracking-[0.32em] text-accent ${
                visible ? 'animate-fade-up' : 'opacity-0'
              }`}
            >
              О производстве
            </p>

            <h2
              className={`mt-4 font-serif text-4xl leading-tight text-balance text-foreground md:text-5xl ${
                visible ? 'animate-fade-up' : 'opacity-0'
              }`}
              style={{ animationDelay: '100ms' }}
            >
              Производство без лишней сложности.
            </h2>

            <p
              className={`mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground ${
                visible ? 'animate-fade-up' : 'opacity-0'
              }`}
              style={{ animationDelay: '200ms' }}
            >
              Работаем с брендами, дизайнерами и компаниями,
              которым важно получить качественный результат
              без необходимости обращаться на крупную фабрику.
            </p>
          </div>

          {/* TRUST */}
          <div
            className={`grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border/70 bg-border/70 ${
              visible ? 'animate-fade-up' : 'opacity-0'
            }`}
            style={{ animationDelay: '300ms' }}
          >
            {TRUST_POINTS.map((point, i) => (
              <div
                key={point}
                className="bg-card p-6 transition-colors duration-300 hover:bg-secondary/60 md:p-8"
              >
                <span className="font-serif text-xl text-accent">
                  0{i + 1}
                </span>

                <p className="mt-3 text-sm font-medium leading-relaxed text-foreground">
                  {point}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}