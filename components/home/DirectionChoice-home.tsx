'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const atelierImage =
  'https://images.pexels.com/photos/7256868/pexels-photo-7256868.jpeg?auto=compress&cs=tinysrgb&w=1200';
const productionImage =
  'https://images.pexels.com/photos/4621659/pexels-photo-4621659.jpeg?auto=compress&cs=tinysrgb&w=1200';

export default function DirectionChoice() {
  const { ref: sectionRef, visible } = useReveal<HTMLDivElement>();

  return (
    <section ref={sectionRef} className="bg-sand-50 py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div
          className={`reveal ${visible ? 'is-visible' : ''} mb-12 max-w-2xl sm:mb-16`}
          style={{ animationDelay: '0.05s' }}
        >
          <p className="text-[11px] font-medium uppercase tracking-brand-wide text-ink-500">
            Два направления
          </p>
          <h2 className="mt-4 font-serif text-4xl font-light leading-tight text-ink-900 sm:text-5xl">
            Выберите, что вам нужно
          </h2>
        </div>

        <div className="grid gap-5 lg:grid-cols-2 lg:gap-6">
          {/* ATELIER */}
          <Link
            href="/atelier"
            className={`reveal group relative flex min-h-[460px] flex-col justify-end overflow-hidden rounded-2xl bg-ink-900 sm:min-h-[560px] ${
              visible ? 'is-visible' : ''
            }`}
            style={{ animationDelay: '0.15s' }}
          >
            <div className="absolute inset-0">
              <img
                src={atelierImage}
                alt="Ателье — работа с частными клиентами"
                className="h-full w-full object-cover opacity-80 transition-transform duration-[1.4s] ease-out group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/30 to-ink-950/10" />
            </div>

            <div className="relative p-8 sm:p-10">
              <p className="text-[11px] font-medium uppercase tracking-brand-wide text-sand-300">
                Для частных клиентов
              </p>
              <h3 className="mt-3 font-serif text-4xl font-light text-sand-50 sm:text-5xl">
                ATELIER
              </h3>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-sand-200">
                Индивидуальный пошив, ремонт и подгонка одежды. Тёплый, персональный подход
                к каждому заказу.
              </p>
              <div className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-sand-50">
                Перейти в ателье
                <ArrowUpRight
                  size={18}
                  strokeWidth={1.5}
                  className="text-sand-300 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </div>
            </div>
          </Link>

          {/* PRODUCTION */}
          <Link
            href="/production"
            className={`reveal group relative flex min-h-[460px] flex-col justify-end overflow-hidden rounded-2xl bg-ink-800 sm:min-h-[560px] ${
              visible ? 'is-visible' : ''
            }`}
            style={{ animationDelay: '0.3s' }}
          >
            <div className="absolute inset-0">
              <img
                src={productionImage}
                alt="Производство одежды для брендов"
                className="h-full w-full object-cover opacity-75 transition-transform duration-[1.4s] ease-out group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-900/40 to-ink-900/15" />
            </div>

            <div className="relative p-8 sm:p-10">
              <p className="text-[11px] font-medium uppercase tracking-brand-wide text-sand-300">
                Для брендов и бизнеса
              </p>
              <h3 className="mt-3 font-serif text-4xl font-light text-sand-50 sm:text-5xl">
                PRODUCTION
              </h3>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-sand-200">
                Пошив одежды, малые и средние партии, производство под брендом заказчика.
                Структурированно и профессионально.
              </p>
              <div className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-sand-50">
                Для брендов
                <ArrowUpRight
                  size={18}
                  strokeWidth={1.5}
                  className="text-sand-300 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
