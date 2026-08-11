import { Reveal } from './reveal'
import { CtaButton } from './cta-button'
import { PRICING } from './site-data'

export function Pricing() {
  return (
    <section id="pricing" className="border-t border-border/60 bg-secondary/40 py-20 md:py-28">
      <div className="container-x">
        <Reveal className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.32em] text-accent">Стоимость</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-balance text-foreground md:text-5xl">
            Сколько стоит?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Стоимость зависит от вида работы, материала и сложности изделия.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PRICING.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 80}
              className="flex flex-col justify-between rounded-2xl border border-border bg-card p-7"
            >
              <div>
                <h3 className="font-serif text-2xl text-foreground">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.note}</p>
              </div>
              <CtaButton href="#contacts" variant="outline" className="mt-8 w-full">
                Узнать стоимость
              </CtaButton>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
