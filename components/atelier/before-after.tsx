'use client'

import { useCallback, useRef, useState } from 'react'
import Image from 'next/image'
import { Reveal } from '@/components/reveal';
import { BEFORE_AFTER } from '@/components/site-data'

function CompareSlider({
  before,
  after,
  title,
}: {
  before: string
  after: string
  title: string
}) {
  const [pos, setPos] = useState(50)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const dragging = useRef(false)

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const pct = ((clientX - rect.left) / rect.width) * 100
    setPos(Math.min(100, Math.max(0, pct)))
  }, [])

  return (
    <div
      ref={containerRef}
      className="group relative aspect-[4/3] w-full touch-none overflow-hidden rounded-2xl bg-secondary select-none"
      onPointerDown={(e) => {
        dragging.current = true
        e.currentTarget.setPointerCapture(e.pointerId)
        updateFromClientX(e.clientX)
      }}
      onPointerMove={(e) => {
        if (dragging.current) updateFromClientX(e.clientX)
      }}
      onPointerUp={() => {
        dragging.current = false
      }}
    >
      {/* After (base) */}
      <Image src={after || '/placeholder.svg'} alt={`${title} — после`} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
      <span className="absolute right-3 top-3 rounded-full bg-background/85 px-3 py-1 text-xs font-medium text-foreground backdrop-blur">
        После
      </span>

      {/* Before (clipped) */}
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <Image src={before || '/placeholder.svg'} alt={`${title} — до`} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
        <span className="absolute left-3 top-3 rounded-full bg-foreground/85 px-3 py-1 text-xs font-medium text-background backdrop-blur">
          До
        </span>
      </div>

      {/* Handle */}
      <div className="absolute inset-y-0 z-10 flex items-center" style={{ left: `${pos}%`, transform: 'translateX(-50%)' }}>
        <div className="h-full w-0.5 bg-background/90" />
        <div className="absolute left-1/2 flex size-10 -translate-x-1/2 items-center justify-center rounded-full border border-border bg-background text-foreground shadow-lg">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="m15 18-6-6 6-6" />
            <path d="m9 6 6 6-6 6" />
          </svg>
        </div>
      </div>
    </div>
  )
}

export function BeforeAfter() {
  return (
    <section className="border-t border-border/60 py-0 sm:py-8 md:py-12 lg:py-20">
      <div className="container-x">
        <Reveal className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.32em] text-accent">До / После</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-balance text-foreground md:text-5xl">
            Иногда вещи нужен не новый хозяин, а немного заботы.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {BEFORE_AFTER.map((item, i) => (
            <Reveal key={item.title} delay={i * 120} className="flex flex-col gap-4">
              <CompareSlider before={item.before} after={item.after} title={item.title} />
              <div>
                <h3 className="font-serif text-xl text-foreground">{item.title}</h3>
                <p className="mt-1 text-muted-foreground">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-sm text-muted-foreground">Потяните ползунок, чтобы сравнить.</p>
      </div>
    </section>
  )
}
