import { Quote } from 'lucide-react'
import { Reveal } from '@/components//reveal'

export function Testimonials() {
  return (
    <section className="border-t border-border/60 py-0 sm:py-8 md:py-12 lg:py-20">
      <div className="container-x">
        <Reveal className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.32em] text-accent">Отзывы</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-balance text-foreground md:text-5xl">
            Отзывы клиентов
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {[0, 1, 2].map((i) => (
            <Reveal
              key={i}
              delay={i * 90}
              className="flex flex-col rounded-2xl border border-dashed border-border bg-card/60 p-8"
            >
              <Quote className="size-7 text-accent/60" />
              <p className="mt-5 flex-1 text-pretty leading-relaxed text-muted-foreground">
                Здесь появятся отзывы клиентов ByNadia. Мы собираем их по мере выполнения заказов.
              </p>
              <div className="mt-6 flex items-center gap-3">
                <span className="size-9 rounded-full bg-secondary" />
                <span className="h-3 w-24 rounded-full bg-secondary" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
