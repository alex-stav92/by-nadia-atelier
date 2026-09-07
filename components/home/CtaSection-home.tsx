'use client';

import Link from 'next/link';
import { useReveal } from '@/hooks/useReveal';

export default function CtaSection() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section ref={ref} className="bg-sand-100 py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div
          className={`reveal ${visible ? 'is-visible' : ''} mx-auto max-w-3xl text-center`}
          style={{ animationDelay: '0.05s' }}
        >
          <p className="text-[11px] font-medium uppercase tracking-brand-wide text-ink-500">
            Начнём с вашей задачи
          </p>

          <h2 className="mt-5 font-serif text-3xl font-light leading-tight text-ink-900 sm:text-4xl lg:text-5xl text-balance">
            Есть задача по одежде?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-ink-600 sm:text-lg">
            Расскажите, что нужно сделать — ремонт, индивидуальный пошив или
            производство партии. Подскажем, как лучше реализовать вашу задачу.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/atelier"
              className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-ink-900 px-8 py-4 text-sm font-medium tracking-wide text-sand-50 transition-all hover:bg-ink-800 sm:w-auto"
            >
              Для частного клиента
              <span className="text-sand-300 transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>

            <Link
              href="/production"
              className="group inline-flex w-full items-center justify-center gap-3 rounded-full border border-ink-900/20 px-8 py-4 text-sm font-medium tracking-wide text-ink-900 transition-all hover:border-ink-900 hover:bg-ink-900/5 sm:w-auto"
            >
              Для бренда и бизнеса
              <span className="text-ink-400 transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}