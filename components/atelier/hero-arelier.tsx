import Image from 'next/image'
import { CtaButton } from '@/components/cta-button'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 md:pt-32">
      <div className="container-x grid items-center gap-10 pb-16 md:pb-24 lg:grid-cols-[1.05fr_1fr] lg:gap-14">
        <div className="animate-fade-up">
          <p className="flex items-center gap-3 text-xs uppercase tracking-[0.32em] text-muted-foreground">
            <span className="h-px w-8 bg-accent" />
            АТЕЛЬЕ · СТАВРОПОЛЬ
          </p>

          <h1 className="mt-6 font-serif text-[2.6rem] leading-[1.05] tracking-tight text-balance text-foreground sm:text-6xl lg:text-7xl">
            Одежда, которая
            <br />
            сидит так, как нужно.
          </h1>

          <p className="mt-6 max-w-lg text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            Ремонт, подгонка, переделка и индивидуальный пошив одежды.
            От небольшой починки до вещи с нуля — по вашим меркам и задумке.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <CtaButton href="#contacts" size="lg" variant="accent">
              Обсудить заказ
            </CtaButton>

            <CtaButton href="#works" size="lg" variant="outline">
              Посмотреть работы
            </CtaButton>
          </div>

          <p className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-muted-foreground">
            {['Ремонт', 'Подгонка', 'Переделка', 'Пошив'].map((item, i) => (
              <span key={item} className="flex items-center gap-3">
                {i > 0 && <span className="text-accent">·</span>}
                {item}
              </span>
            ))}
          </p>
        </div>

        <div className="animate-fade-up [animation-delay:120ms]">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-secondary">
            <Image
              src="/images/null-model.png"
              alt="Мастер за швейной машиной в ателье ByNadia"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />

            <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/20 bg-background/80 px-5 py-4 backdrop-blur-md">
              <p className="font-serif text-lg text-foreground">
                Индивидуальный подход к каждой вещи
              </p>
              <p className="mt-0.5 text-sm text-muted-foreground">
                Разбираемся в задаче и предлагаем подходящее решение
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}