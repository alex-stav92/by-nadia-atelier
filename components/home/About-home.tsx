'use client';
import { useReveal } from '@/hooks/useReveal';

export default function About() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section ref={ref} className="bg-ink-950 py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
        <p
          className={`reveal ${visible ? 'is-visible' : ''} text-[11px] font-medium uppercase tracking-brand-wide text-sand-400`}
          style={{ animationDelay: '0.05s' }}
        >
          О бренде
        </p>
        <h2
          className={`reveal ${visible ? 'is-visible' : ''} mt-6 font-serif text-3xl font-light leading-[1.25] text-sand-50 sm:text-4xl lg:text-5xl text-balance`}
          style={{ animationDelay: '0.2s' }}
        >
          От индивидуального пошива до производства одежды для брендов.
        </h2>
        <p
          className={`reveal ${visible ? 'is-visible' : ''} mx-auto mt-8 max-w-2xl text-base leading-relaxed text-sand-300 sm:text-lg`}
          style={{ animationDelay: '0.35s' }}
        >
          BY NADIA объединяет мастерство ателье и возможности производственного цеха.
          Один подход к качеству — два сценария работы: для человека и для бизнеса.
        </p>
      </div>
    </section>
  );
}
