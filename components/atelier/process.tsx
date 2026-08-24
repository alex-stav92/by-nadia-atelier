import { Reveal } from '@/components/reveal'
import { PROCESS_STEPS } from '@/components/site-data'

export function Process() {
  return (
    <section id="process" className="border-t border-border/60 py-0 sm:py-8 md:py-12 lg:py-20">
      <div className="container-x">
        <Reveal className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.32em] text-accent">Как мы работаем</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-balance text-foreground md:text-5xl">
            Просто. Понятно. По делу.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-y-12 gap-x-8 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS_STEPS.map((step, i) => (
            <Reveal key={step.num} delay={i * 90} className="relative">
              <span className="font-serif text-5xl text-accent/70 md:text-6xl">{step.num}</span>
              <div className="mt-4 h-px w-full bg-border" />
              <h3 className="mt-5 font-serif text-xl text-foreground">{step.title}</h3>
              <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">{step.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
