'use client'

import { useReveal } from '@/hooks/useReveal'
import { ADVANTAGES } from '@/data/content'

export default function WhyByNadia() {
  const { ref, visible } = useReveal<HTMLDivElement>()

  return (
    <section
      id="about"
      className="border-t border-border/60 bg-background py-0 sm:py-8 md:py-12 lg:py-20"
    >
      <div ref={ref} className="container-x">

        {/* =================================================
            HEADER + IMAGE
        ================================================= */}

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">

          {/* LEFT */}

          <div className="lg:col-span-5">

            <div className="max-w-xl">
              <p
                className={`text-xs uppercase tracking-[0.32em] text-accent ${
                  visible ? 'animate-fade-up' : 'opacity-0'
                }`}
              >
                Преимущества
              </p>

              <h2
                className={`mt-4 font-serif text-4xl leading-tight tracking-tight text-foreground text-balance md:text-5xl ${
                  visible ? 'animate-fade-up' : 'opacity-0'
                }`}
                style={{
                  animationDelay: '100ms',
                }}
              >
                Почему BY NADIA
              </h2>
            </div>

            {/* IMAGE */}

            <div
              className={`mt-10 aspect-[4/5] overflow-hidden rounded-2xl bg-secondary ${
                visible ? 'animate-fade-up' : 'opacity-0'
              }`}
              style={{
                animationDelay: '300ms',
              }}
            >
              <img
                src="https://images.pexels.com/photos/3965543/pexels-photo-3965543.jpeg?auto=compress&cs=tinysrgb&h=1200&w=900"
                alt="Производство BY NADIA"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              />
            </div>
          </div>


          {/* =================================================
              ADVANTAGES
          ================================================= */}

          <div className="lg:col-span-7 lg:pt-16">

            <ul className="border-t border-border/70">

              {ADVANTAGES.map((adv, i) => (
                <li
                  key={adv.title}
                  className={`group border-b border-border/70 py-7 md:py-8 ${
                    visible ? 'animate-fade-up' : 'opacity-0'
                  }`}
                  style={{
                    animationDelay: `${280 + i * 90}ms`,
                  }}
                >

                  <div className="flex gap-5 md:gap-7">

                    {/* NUMBER */}

                    <span className="flex-shrink-0 pt-1 font-serif text-xl text-accent/60 transition-colors duration-300 group-hover:text-accent">
                      0{i + 1}
                    </span>


                    {/* CONTENT */}

                    <div className="min-w-0">

                      <h3 className="font-serif text-xl leading-tight tracking-tight text-foreground md:text-2xl">
                        {adv.title}
                      </h3>

                      <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-[15px]">
                        {adv.description}
                      </p>

                    </div>

                  </div>

                </li>
              ))}

            </ul>

          </div>

        </div>

      </div>
    </section>
  )
}