import { Reveal } from './reveal'
import { SERVICES } from './site-data'

export function Services() {
  return (
    <section id="services" className="border-t border-border/60 py-20 md:py-28">
      <div className="container-x">
        <Reveal className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.32em] text-accent">Услуги</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-balance text-foreground md:text-5xl">
            Что нужно сделать?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            От небольшой починки до создания вещи с нуля.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border/70 bg-border/70 sm:grid-cols-2">
          {SERVICES.map((service, i) => (
            <Reveal
              key={service.id}
              delay={i * 90}
              className="group flex flex-col bg-card p-8 transition-colors duration-300 hover:bg-secondary/60 md:p-10"
            >
              <div className="flex items-baseline gap-3">
                <span className="font-serif text-sm text-accent">0{i + 1}</span>
                <h3 className="font-serif text-2xl text-foreground md:text-3xl">{service.title}</h3>
              </div>
              <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">{service.description}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {service.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-border bg-background px-3.5 py-1.5 text-sm text-foreground/80 transition-colors group-hover:border-accent/40"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
