import Image from 'next/image'
import { Reveal } from './reveal'

const ADVANTAGES = ['Индивидуальный подход', 'Аккуратная работа', 'Внимание к деталям']

export function About() {
  return (
    <section id="about" className="border-t border-border/60 bg-secondary/40 py-20 md:py-28">
      <div className="container-x grid items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <Reveal>
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2rem] bg-secondary">
            <Image
              src="/images/about-nadia.png"
              alt="Надя в своей швейной мастерской"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={100}>
          <p className="text-xs uppercase tracking-[0.32em] text-accent">О мастере</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-balance text-foreground md:text-5xl">
            Здравствуйте, я Надя
          </h2>
          <div className="mt-6 space-y-4 text-pretty leading-relaxed text-muted-foreground md:text-lg">
            <p>
              Я занимаюсь пошивом и ремонтом одежды и люблю превращать идеи клиентов в готовые вещи.
            </p>
            <p>
              Работаю с каждым заказом индивидуально: внимательно разбираюсь в задаче, обсуждаю
              варианты и стараюсь найти решение, которое будет выглядеть аккуратно и удобно носиться.
            </p>
          </div>

          <ul className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {ADVANTAGES.map((item) => (
              <li key={item} className="flex items-center gap-2.5 rounded-full bg-background px-4 py-2.5 text-sm text-foreground">
                <span className="size-1.5 rounded-full bg-accent" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
