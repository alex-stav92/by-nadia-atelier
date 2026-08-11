import { Reveal } from './reveal'
import { CtaButton } from './cta-button'

export function FinalCta() {
  return (
    <section className="border-t border-border/60 py-24 md:py-32">
      <div className="container-x">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-4xl leading-[1.08] text-balance text-foreground md:text-6xl">
            Не знаете, что можно сделать с вашей вещью?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Пришлите фотографию — обсудим задачу и подскажем, что можно сделать.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <CtaButton href="#contacts" size="lg" variant="accent">
              Обсудить заказ
            </CtaButton>
            <CtaButton href="#contacts" size="lg" variant="outline">
              Получить консультацию
            </CtaButton>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
