import Link from 'next/link';
import { ArrowDown } from 'lucide-react';

const heroImage =
  'https://images.pexels.com/photos/4621891/pexels-photo-4621891.jpeg?auto=compress&cs=tinysrgb&w=1600';

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-ink-950">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Руки мастера за швейной машиной в светлой мастерской"
          className="h-full w-full object-cover opacity-70 animate-slow-zoom"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/70 via-ink-950/40 to-ink-950/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative mx-auto w-full max-w-7xl px-5 py-32 sm:px-8">
        <div className="max-w-3xl">
          <p
            className="reveal is-visible text-[11px] font-medium uppercase tracking-brand-wide text-sand-300"
            style={{ animationDelay: '0.1s' }}
          >
            Швейный бренд · Ставрополь
          </p>

          <h1
            className="reveal is-visible mt-6 font-serif text-5xl font-light leading-[1.05] text-sand-50 sm:text-7xl lg:text-8xl"
            style={{ animationDelay: '0.25s' }}
          >
            Швейное мастерство
            <br />
            <span className="text-sand-200">для людей и брендов</span>
          </h1>

          <p
            className="reveal is-visible mt-8 max-w-xl text-base leading-relaxed text-sand-200 sm:text-lg"
            style={{ animationDelay: '0.45s' }}
          >
            Один бренд — два направления. Индивидуальный пошив для частных клиентов
            и производство одежды для брендов и бизнеса.
          </p>

          <div
            className="reveal is-visible mt-10 flex flex-wrap items-center gap-4"
            style={{ animationDelay: '0.6s' }}
          >
            <Link
              href="/atelier"
              className="group inline-flex items-center gap-3 rounded-full bg-sand-50 px-7 py-3.5 text-sm font-medium tracking-wide text-ink-900 transition-all hover:bg-sand-200"
            >
              ATELIER
              <span className="text-ink-400 transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <Link
              href="/production"
              className="group inline-flex items-center gap-3 rounded-full border border-sand-50/30 px-7 py-3.5 text-sm font-medium tracking-wide text-sand-50 transition-all hover:border-sand-50 hover:bg-sand-50/5"
            >
              PRODUCTION
              <span className="text-sand-300 transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute inset-x-0 bottom-8 flex justify-center">
        <div className="flex flex-col items-center gap-2 text-sand-300">
          <span className="text-[10px] uppercase tracking-brand-wide">Далее</span>
          <ArrowDown size={16} strokeWidth={1.5} className="animate-bounce" />
        </div>
      </div>
    </section>
  );
}
