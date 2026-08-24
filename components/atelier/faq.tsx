'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Reveal } from '@/components/reveal'
import { FAQ as FAQ_ITEMS } from '@/components/site-data'

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="border-t border-border/60 bg-secondary/40 py-0 sm:py-8 md:py-12 lg:py-20">
      <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">

        {/* HEADER */}
        <Reveal>
          <p className="text-xs uppercase tracking-[0.32em] text-accent">
            FAQ
          </p>

          <h2 className="mt-4 font-serif text-4xl leading-tight tracking-tight text-balance text-foreground md:text-5xl">
            Частые вопросы
          </h2>
        </Reveal>

        {/* FAQ */}
        <Reveal
          delay={100}
          className="divide-y divide-border border-y border-border"
        >
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = open === i

            return (
              <div key={item.q}>

                {/* QUESTION */}
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="cursor-pointer group flex w-full items-center justify-between gap-4 py-5 text-left transition-transform duration-200 active:scale-[0.99] md:py-6"
                >
                  <span
                    className={cn(
                      'font-serif text-lg leading-tight tracking-tight transition-all duration-300 md:text-xl',
                      isOpen
                        ? 'text-accent'
                        : 'text-foreground group-hover:text-accent',
                    )}
                  >
                    {item.q}
                  </span>

                  <span
                    className={cn(
                      'flex size-9 shrink-0 items-center justify-center rounded-full border border-border transition-all duration-300',
                      isOpen
                        ? 'border-accent/40 bg-accent/10'
                        : 'group-hover:border-accent/40 group-hover:bg-accent/5',
                    )}
                  >
                    <Plus
                      className={cn(
                        'size-5 text-accent transition-all duration-300',
                        isOpen
                          ? 'rotate-45 scale-110'
                          : 'group-hover:scale-110',
                      )}
                      strokeWidth={1.5}
                    />
                  </span>
                </button>

                {/* ANSWER */}
                <div
                  className={cn(
                    'grid transition-all duration-300 ease-out',
                    isOpen
                      ? 'grid-rows-[1fr] pb-5 opacity-100 md:pb-6'
                      : 'grid-rows-[0fr] opacity-0',
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-2xl pr-8 text-pretty text-sm leading-relaxed text-muted-foreground md:text-base">
                      {item.a}
                    </p>
                  </div>
                </div>

              </div>
            )
          })}
        </Reveal>
      </div>
    </section>
  )
}