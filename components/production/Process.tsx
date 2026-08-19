'use client'

import { useReveal } from '@/hooks/useReveal'
import { PROCESS_STEPS } from '@/data/content'

export default function Process() {
  const { ref, visible } = useReveal<HTMLDivElement>()

  return (
    <section className="border-t border-border/60 bg-secondary/40 py-20 md:py-28">
      <div ref={ref} className="container-x">

        {/* =================================================
            HEADER
        ================================================= */}

        <div className="mb-12 max-w-2xl md:mb-16">
          <p
            className={`text-xs uppercase tracking-[0.32em] text-accent ${
              visible ? 'animate-fade-up' : 'opacity-0'
            }`}
          >
            Процесс
          </p>

          <h2
            className={`mt-4 font-serif text-4xl leading-tight tracking-tight text-foreground text-balance md:text-5xl ${
              visible ? 'animate-fade-up' : 'opacity-0'
            }`}
            style={{
              animationDelay: '100ms',
            }}
          >
            Как мы работаем
          </h2>

          <p
            className={`mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground ${
              visible ? 'animate-fade-up' : 'opacity-0'
            }`}
            style={{
              animationDelay: '180ms',
            }}
          >
            От первого обсуждения задачи до готовой партии —
            последовательно проходим каждый этап производства.
          </p>
        </div>


        {/* =================================================
            DESKTOP TIMELINE
        ================================================= */}

        <div className="hidden lg:block">
          <div className="relative">

            {/* BASE LINE */}
            <div className="absolute left-0 right-0 top-7 h-px bg-border" />

            {/* ANIMATED LINE */}
            <div
              className={`absolute left-0 top-7 h-px bg-accent transition-all duration-[1200ms] ease-out ${
                visible ? 'w-full' : 'w-0'
              }`}
              style={{
                transitionDelay: '350ms',
              }}
            />

            {/* STEPS */}
            <div className="relative grid grid-cols-6 gap-6">

              {PROCESS_STEPS.map((step, i) => (
                <article
                  key={step.num}
                  className={`group relative flex flex-col items-center ${
                    visible ? 'animate-fade-up' : 'opacity-0'
                  }`}
                  style={{
                    animationDelay: `${350 + i * 90}ms`,
                  }}
                >

                  {/* NUMBER */}

<div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-accent/40 bg-secondary font-serif text-lg text-accent transition-all duration-500 group-hover:border-accent group-hover:bg-accent group-hover:text-background">
  {step.num}
</div>


                  {/* CONTENT */}

                  <div className="mt-7 w-full text-center">
                    <h3 className="font-serif text-xl leading-tight tracking-tight text-foreground">
                      {step.title}
                    </h3>

                    <p className="mx-auto mt-3 max-w-[190px] text-sm leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </div>

                </article>
              ))}

            </div>
          </div>
        </div>


        {/* =================================================
            MOBILE TIMELINE
        ================================================= */}

        <div className="lg:hidden">
          <div className="relative">

            {/* BASE LINE */}

            <div className="absolute bottom-4 left-7 top-4 w-px bg-border" />

            {/* ANIMATED LINE */}

            <div
              className={`absolute left-7 top-4 w-px bg-accent transition-all duration-[1200ms] ease-out ${
                visible ? 'h-[calc(100%-32px)]' : 'h-0'
              }`}
              style={{
                transitionDelay: '350ms',
              }}
            />

            {/* STEPS */}

            <div className="space-y-10">

              {PROCESS_STEPS.map((step, i) => (
                <article
                  key={step.num}
                  className={`group relative flex gap-6 ${
                    visible ? 'animate-fade-up' : 'opacity-0'
                  }`}
                  style={{
                    animationDelay: `${350 + i * 90}ms`,
                  }}
                >

                  {/* NUMBER */}

                  <div className="relative z-10 flex-shrink-0">
                    <span className="flex h-14 w-14 items-center justify-center rounded-full border border-accent/40 bg-secondary font-serif text-base text-accent transition-all duration-500 group-hover:border-accent group-hover:bg-accent group-hover:text-background">
                      {step.num}
                    </span>
                  </div>


                  {/* CONTENT */}

                  <div className="pt-1">
                    <h3 className="font-serif text-xl leading-tight tracking-tight text-foreground">
                      {step.title}
                    </h3>

                    <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </div>

                </article>
              ))}

            </div>
          </div>
        </div>

      </div>
    </section>
  )
}