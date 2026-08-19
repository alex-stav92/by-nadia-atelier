'use client'

import { useReveal } from '@/hooks/useReveal'

export default function Philosophy() {
  const { ref, visible } = useReveal<HTMLDivElement>()

  return (
    <section className="border-t border-border/60 bg-secondary/40 py-24 md:py-32">
      <div ref={ref} className="container-x">
        <div className="mx-auto max-w-4xl text-center">

          {/* LABEL */}
          <p
            className={`text-xs uppercase tracking-[0.32em] text-accent ${
              visible ? 'animate-fade-up' : 'opacity-0'
            }`}
          >
            Философия
          </p>

          {/* MAIN STATEMENT */}
          <h2
            className={`mt-6 font-serif text-4xl leading-[1.08] tracking-tight text-foreground text-balance sm:text-5xl md:text-6xl lg:text-7xl ${
              visible ? 'animate-fade-up' : 'opacity-0'
            }`}
            style={{
              animationDelay: '100ms',
            }}
          >
            Мы не просто шьём изделия.
          </h2>

          {/* SUBTITLE */}
          <p
            className={`mx-auto mt-8 max-w-2xl text-xl leading-relaxed text-foreground/80 md:text-2xl ${
              visible ? 'animate-fade-up' : 'opacity-0'
            }`}
            style={{
              animationDelay: '220ms',
            }}
          >
            Мы помогаем превращать идеи в готовые вещи.
          </p>

          {/* DESCRIPTION */}
          <p
            className={`mx-auto mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg ${
              visible ? 'animate-fade-up' : 'opacity-0'
            }`}
            style={{
              animationDelay: '340ms',
            }}
          >
            Для небольшого бренда важно не только получить партию одежды,
            но и иметь производство, с которым можно спокойно обсуждать
            детали, корректировать решения и постепенно развивать продукт.
            ByNadia работает именно в таком формате.
          </p>

          {/* DECORATIVE ELEMENT */}
          <div
            className={`mx-auto mt-10 h-px bg-accent transition-all duration-1000 ease-out ${
              visible ? 'w-16' : 'w-0'
            }`}
            style={{
              transitionDelay: '500ms',
            }}
          />

        </div>
      </div>
    </section>
  )
}