'use client'

import Image from 'next/image'
import { useReveal } from '@/hooks/useReveal'
import { CtaButton } from '@/components/cta-button'

export default function Hero() {
  const { ref, visible } = useReveal<HTMLDivElement>()

  return (
    <section
      id="home"
      ref={ref}
      className="relative overflow-hidden pt-28 md:pt-32"
    >
      <div className="container-x grid items-center gap-10 pb-16 md:pb-24 lg:grid-cols-[1.05fr_1fr] lg:gap-14">

        {/* TEXT */}
        <div
          className={visible ? 'animate-fade-up' : 'opacity-0'}
        >
          <p className="flex items-center gap-3 text-xs uppercase tracking-[0.32em] text-muted-foreground">
            <span className="h-px w-8 bg-accent" />
            BY NADIA Production
          </p>

          <h1 className="mt-6 font-serif text-[2.6rem] leading-[1.05] tracking-tight text-balance text-foreground sm:text-6xl lg:text-7xl">
            Производство одежды
            <br />
            для брендов
            <br className="hidden sm:block" />
            и компаний.
          </h1>

          <p className="mt-6 max-w-md text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            Небольшое швейное производство в Ставрополе.
            Помогаем брендам и компаниям создавать изделия —
            от первого образца до готовой партии.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <CtaButton
              href="#contact"
              size="lg"
              variant="accent"
            >
              Обсудить проект
            </CtaButton>

            <CtaButton
              href="#services"
              size="lg"
              variant="outline"
            >
              Посмотреть возможности
            </CtaButton>
          </div>

          <p className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-muted-foreground">
            {[
              'Небольшие партии',
              'Гибкое производство',
              'Прямое общение',
              'Ставрополь',
            ].map((item, i) => (
              <span
                key={item}
                className="flex items-center gap-3"
              >
                {i > 0 && (
                  <span className="text-accent">·</span>
                )}

                {item}
              </span>
            ))}
          </p>
        </div>

        {/* IMAGE */}
        <div
          className={
            visible
              ? 'animate-fade-up [animation-delay:120ms]'
              : 'opacity-0'
          }
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-secondary">
            <Image
              src="https://images.pexels.com/photos/4622205/pexels-photo-4622205.jpeg?auto=compress&cs=tinysrgb&h=1400&w=2000"
              alt="Швейное производство By Nadia"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />

            <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/20 bg-background/80 px-5 py-4 backdrop-blur-md">
              <p className="font-serif text-lg text-foreground">
                Производство от образца до партии
              </p>

              <p className="mt-0.5 text-sm text-muted-foreground">
                Небольшие партии · Гибкий подход
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}