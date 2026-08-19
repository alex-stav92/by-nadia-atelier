'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useReveal } from '@/hooks/useReveal'
import { FAQ_ITEMS } from '@/data/content'

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0)
  const { ref, visible } = useReveal<HTMLDivElement>()

  return (
    <section className="border-t border-border/60 bg-secondary/40 py-20 md:py-28">
      <div
        ref={ref}
        className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16"
      >

        {/* HEADER */}
        <div
          className={`max-w-md ${
            visible ? 'animate-fade-up' : 'opacity-0'
          }`}
        >
          <p className="text-xs uppercase tracking-[0.32em] text-accent">
            FAQ
          </p>

          <h2 className="mt-4 font-serif text-4xl leading-tight tracking-tight text-foreground text-balance md:text-5xl">
            Частые вопросы
          </h2>

          <p
            className={`mt-5 text-base leading-relaxed text-muted-foreground md:text-lg ${
              visible ? 'animate-fade-up' : 'opacity-0'
            }`}
            style={{
              animationDelay: '120ms',
            }}
          >
            Не нашли ответ? Напишите нам — обсудим детали вашего проекта.
          </p>
        </div>

        {/* FAQ LIST */}
        <div
          className={`divide-y divide-border border-y border-border ${
            visible ? 'animate-fade-up' : 'opacity-0'
          }`}
          style={{
            animationDelay: '180ms',
          }}
        >
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = open === i

            return (
              <div key={item.question}>

                {/* QUESTION */}
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="group flex w-full items-center justify-between gap-6 py-5 text-left md:py-6"
                >
                  <span
                    className={cn(
                      'font-serif text-lg leading-tight tracking-tight transition-colors duration-300 md:text-xl',
                      isOpen
                        ? 'text-accent'
                        : 'text-foreground group-hover:text-accent',
                    )}
                  >
                    {item.question}
                  </span>

                  <Plus
                    className={cn(
                      'size-5 shrink-0 text-accent transition-transform duration-300',
                      isOpen && 'rotate-45',
                    )}
                    strokeWidth={1.5}
                  />
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
                      {item.answer}
                    </p>
                  </div>
                </div>

              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}