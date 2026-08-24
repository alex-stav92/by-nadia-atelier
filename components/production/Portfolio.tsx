'use client'

import { useMemo, useState } from 'react'
import Image from 'next/image'
import { useReveal } from '@/hooks/useReveal'
import {
  PROJECTS,
  PROJECT_CATEGORIES,
  type ProjectCategory,
} from '@/data/content'

export default function Portfolio() {
  const { ref, visible } = useReveal<HTMLDivElement>()
  const [active, setActive] = useState<ProjectCategory>('Все')

  const filtered = useMemo(() => {
    if (active === 'Все') return PROJECTS

    return PROJECTS.filter((project) => project.category === active)
  }, [active])

  return (
    <section
      id="portfolio"
      className="border-t border-border/60 bg-background py-0 sm:py-8 md:py-12 lg:py-20"
    >
      <div ref={ref} className="container-x">

        {/* =================================================
            HEADER
        ================================================= */}

        <div className="max-w-2xl">
          <p
            className={`text-xs uppercase tracking-[0.32em] text-accent ${
              visible ? 'animate-fade-up' : 'opacity-0'
            }`}
          >
            Портфолио
          </p>

          <h2
            className={`mt-4 font-serif text-4xl leading-tight tracking-tight text-foreground text-balance md:text-5xl ${
              visible ? 'animate-fade-up' : 'opacity-0'
            }`}
            style={{
              animationDelay: '100ms',
            }}
          >
            Наши проекты
          </h2>

          <p
            className={`mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground ${
              visible ? 'animate-fade-up' : 'opacity-0'
            }`}
            style={{
              animationDelay: '180ms',
            }}
          >
            Примеры изделий и процесса производства.
            Фотографии обновляются по мере выполнения заказов.
          </p>
        </div>


        {/* =================================================
            CATEGORIES
        ================================================= */}

        <div
          className={`mt-10 flex flex-wrap gap-2.5 ${
            visible ? 'animate-fade-up' : 'opacity-0'
          }`}
          style={{
            animationDelay: '280ms',
          }}
        >
          {PROJECT_CATEGORIES.map((category) => {
            const isActive = active === category

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActive(category)}
                className={`rounded-full border px-4 py-2 text-sm transition-all duration-300 ${
                  isActive
                    ? 'border-foreground bg-foreground text-background'
                    : 'border-border text-muted-foreground hover:border-foreground/40 hover:text-foreground'
                }`}
              >
                {category}
              </button>
            )
          })}
        </div>


        {/* =================================================
            GALLERY
        ================================================= */}

        <div className="mt-8 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
          {filtered.map((project, i) => (
            <figure
              key={`${project.title}-${i}`}
              className={`group relative block break-inside-avoid overflow-hidden rounded-2xl bg-secondary ${
                project.span === 'tall'
                  ? 'aspect-[3/4]'
                  : project.span === 'wide'
                    ? 'aspect-[16/10]'
                    : 'aspect-square'
              } ${
                visible ? 'animate-fade-up' : 'opacity-0'
              }`}
              style={{
                animationDelay: `${350 + i * 70}ms`,
              }}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Overlay */}

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Caption */}

              <figcaption className="pointer-events-none absolute bottom-0 left-0 right-0 p-5 translate-y-2 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-[10px] uppercase tracking-[0.25em] text-background/70">
                  {project.category}
                </p>

                <h3 className="mt-1 text-sm font-medium text-background">
                  {project.title}
                </h3>
              </figcaption>
            </figure>
          ))}
        </div>

      </div>
    </section>
  )
}