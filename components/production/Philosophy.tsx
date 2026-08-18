'use client';
import { useReveal } from '@/hooks/useReveal';

export default function Philosophy() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section className="section-py bg-cream-200">
      <div ref={ref} className="container-px">
        <div className="max-w-3xl mx-auto text-center">
          <p
            className={`eyebrow mb-8 reveal-fade ${visible ? 'is-visible' : ''}`}
            style={{ animationDelay: '0.1s' }}
          >
            Философия
          </p>
          <h2
            className={`heading-serif text-[32px] sm:text-[44px] md:text-[56px] text-ink text-balance reveal ${visible ? 'is-visible' : ''}`}
            style={{ animationDelay: '0.2s' }}
          >
            Мы не просто шьём изделия.
          </h2>
          <p
            className={`mt-8 font-sans text-[16px] md:text-[18px] text-ink/65 leading-relaxed reveal ${visible ? 'is-visible' : ''}`}
            style={{ animationDelay: '0.35s' }}
          >
            Мы помогаем превращать идеи в готовые вещи.
          </p>
          <p
            className={`mt-6 font-sans text-[15px] md:text-[16px] text-ink/55 leading-relaxed max-w-2xl mx-auto reveal ${visible ? 'is-visible' : ''}`}
            style={{ animationDelay: '0.5s' }}
          >
            Для небольшого бренда важно не только получить партию одежды, но и
            иметь производство, с которым можно спокойно обсуждать детали,
            корректировать решения и постепенно развивать продукт. ByNadia
            работает именно в таком формате.
          </p>
        </div>
      </div>
    </section>
  );
}
