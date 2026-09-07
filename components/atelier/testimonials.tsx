import { Quote } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const TESTIMONIALS = [
  {
    name: 'Марина К.',
    text: 'Приносила брюки на подгонку. Сначала думала просто укоротить, но Надя подсказала ещё немного изменить посадку. В итоге сели намного лучше. Всё сделали аккуратно, я довольна.',
  },
  {
    name: 'Анна С.',
    text: 'Обращалась с платьем, которое давно лежало в шкафу — жалко было выбрасывать, но и носить не хотелось. Обсудили, что можно изменить, и получилось хорошо. Теперь снова его ношу.',
  },
  {
    name: 'Елена М.',
    text: 'Нужно было немного подогнать жакет по фигуре. Сделали без лишних изменений, всё аккуратно. Понравилось, что сначала нормально обсудили, что именно я хочу получить.',
  },
]

export function Testimonials() {
  return (
    <section className="border-t border-border/60 py-0 sm:py-8 md:py-12 lg:py-20">
      <div className="container-x">
        <Reveal className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.32em] text-accent">
            Отзывы
          </p>

          <h2 className="mt-4 font-serif text-4xl leading-tight text-balance text-foreground md:text-5xl">
            Отзывы клиентов
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {TESTIMONIALS.map((testimonial, i) => (
            <Reveal
              key={testimonial.name}
              delay={i * 90}
              className="flex flex-col rounded-2xl border border-border bg-card p-8"
            >
              <Quote className="size-7 text-accent/60" />

              <p className="mt-5 flex-1 text-pretty leading-relaxed text-muted-foreground">
                «{testimonial.text}»
              </p>

              <div className="mt-6 flex items-center gap-3">
                <div className="flex size-9 items-center justify-center rounded-full bg-secondary font-serif text-sm text-foreground">
                  {testimonial.name.charAt(0)}
                </div>

                <span className="text-sm font-medium text-foreground">
                  {testimonial.name}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}