'use client'

import { useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { Reveal } from '@/components/reveal'
import { WORK_CATEGORIES, WORKS } from '@/components/site-data'

export function Gallery() {
  const [active, setActive] = useState('Все')

  const filtered = active === 'Все' ? WORKS : WORKS.filter((w) => w.category === active)

  return (
    <section id="works" className="border-t border-border/60 py-0 sm:py-8 md:py-12 lg:py-20">
      <div className="container-x">
        <Reveal className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.32em] text-accent">Портфолио</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-balance text-foreground md:text-5xl">
            Наши работы
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Посмотрите, что мы создаём и как преображаем любимые вещи.
          </p>
        </Reveal>

        <div className="mt-10 flex flex-wrap gap-2.5">
          {WORK_CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              className={cn(
                'rounded-full border px-4 py-2 text-sm transition-all duration-300',
                active === cat
                  ? 'border-foreground bg-foreground text-background'
                  : 'border-border text-muted-foreground hover:border-foreground/40 hover:text-foreground',
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mt-8 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
          {filtered.map((work) => (
            <figure
              key={work.src}
              className={cn(
                'group relative block break-inside-avoid overflow-hidden rounded-2xl bg-secondary',
                work.span ? 'aspect-[3/4]' : 'aspect-square',
              )}
            >
              <Image
                src={work.src || '/placeholder.svg'}
                alt={work.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <figcaption className="pointer-events-none absolute bottom-4 left-4 translate-y-2 text-sm font-medium text-background opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                {work.category}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
