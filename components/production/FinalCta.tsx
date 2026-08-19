'use client'

import { useReveal } from '@/hooks/useReveal'
import { CtaButton } from '@/components/cta-button'

export default function FinalCta() {
  const { ref, visible } = useReveal<HTMLDivElement>()

  return (
    <section className="border-t border-border/60 bg-secondary/40 py-24 md:py-32">
      <div ref={ref} className="container-x">
        <div className="mx-auto max-w-3xl text-center">

          <p
            className={`text-xs uppercase tracking-[0.32em] text-accent ${
              visible ? 'animate-fade-up' : 'opacity-0'
            }`}
          >
            Обсудим проект
          </p>

          <h2
            className={`mt-5 font-serif text-4xl leading-[1.08] tracking-tight text-balance text-foreground sm:text-5xl md:text-6xl ${
              visible ? 'animate-fade-up' : 'opacity-0'
            }`}
            style={{
              animationDelay: '100ms',
            }}
          >
            Есть идея для проекта?
          </h2>

          <p
            className={`mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground ${
              visible ? 'animate-fade-up' : 'opacity-0'
            }`}
            style={{
              animationDelay: '200ms',
            }}
          >
            Расскажите, что хотите создать. Обсудим объём, материалы,
            сроки и возможности производства.
          </p>

          <div
            className={`mt-10 flex flex-col justify-center gap-3 sm:flex-row ${
              visible ? 'animate-fade-up' : 'opacity-0'
            }`}
            style={{
              animationDelay: '300ms',
            }}
          >
            <CtaButton
              href="#contact"
              size="lg"
              variant="primary"
              className="group"
            >
              Обсудить проект
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </CtaButton>

            <CtaButton
              href="#contact"
              size="lg"
              variant="outline"
            >
              Получить консультацию
            </CtaButton>
          </div>

        </div>
      </div>
    </section>
  )
}