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
          О BY NADIA
        </p>

        <h2
          className={`reveal ${visible ? 'is-visible' : ''} mt-6 font-serif text-3xl font-light leading-[1.2] text-sand-50 sm:text-4xl lg:text-5xl text-balance`}
          style={{ animationDelay: '0.2s' }}
        >
          Шьём для людей.
          <br />
          Производим для брендов.
        </h2>

        <p
          className={`reveal ${visible ? 'is-visible' : ''} mx-auto mt-8 max-w-2xl text-base leading-relaxed text-sand-300 sm:text-lg`}
          style={{ animationDelay: '0.35s' }}
        >
          BY NADIA — это ателье и небольшое швейное производство в Ставрополе.
          Для частных клиентов мы ремонтируем, подгоняем и шьём одежду
          индивидуально. Для брендов и компаний — производим одежду и небольшие
          партии по образцу, ТЗ или готовым лекалам.
        </p>
      </div>
    </section>
  );
}