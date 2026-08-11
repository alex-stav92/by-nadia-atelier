'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Reveal } from './reveal'
import { FAQ as FAQ_ITEMS } from './site-data'

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="border-t border-border/60 bg-secondary/40 py-20 md:py-28">
      <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.32em] text-accent">FAQ</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-balance text-foreground md:text-5xl">
            Частые вопросы
          </h2>
        </Reveal>

        <Reveal delay={100} className="divide-y divide-border border-t border-border">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = open === i
            return (
              <div key={item.q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-lg text-foreground md:text-xl">{item.q}</span>
                  <Plus
                    className={cn(
                      'size-5 shrink-0 text-accent transition-transform duration-300',
                      isOpen && 'rotate-45',
                    )}
                  />
                </button>
                <div
                  className={cn(
                    'grid transition-all duration-300 ease-out',
                    isOpen ? 'grid-rows-[1fr] pb-5 opacity-100' : 'grid-rows-[0fr] opacity-0',
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="text-pretty leading-relaxed text-muted-foreground">{item.a}</p>
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
