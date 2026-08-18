'use client';
import Link from 'next/link';
import { useReveal } from '@/hooks/useReveal';

export default function CtaSection() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section ref={ref} className="bg-sand-100 py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div
          className={`reveal ${visible ? 'is-visible' : ''} mx-auto max-w-2xl text-center`}
          style={{ animationDelay: '0.05s' }}
        >
          <h2 className="font-serif text-3xl font-light leading-tight text-ink-900 sm:text-4xl lg:text-5xl text-balance">
            Готовы начать?
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink-600 sm:text-lg">
            Выберите направление — и мы обсудим вашу задачу.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/atelier"
              className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-ink-900 px-8 py-4 text-sm font-medium tracking-wide text-sand-50 transition-all hover:bg-ink-800 sm:w-auto"
            >
              Для частного клиента
              <span className="text-sand-300 transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <Link
              href="/production"
              className="group inline-flex w-full items-center justify-center gap-3 rounded-full border border-ink-900/20 px-8 py-4 text-sm font-medium tracking-wide text-ink-900 transition-all hover:border-ink-900 hover:bg-ink-900/5 sm:w-auto"
            >
              Для бренда
              <span className="text-ink-400 transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
