'use client';
import { useReveal } from '@/hooks/useReveal';

const TRUST_POINTS = [
  'Небольшие партии',
  'Гибкое производство',
  'Прямое общение',
  'Ставрополь',
];

export default function IntroTrust() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section className="section-py bg-cream-100">
      <div ref={ref} className="container-px">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-7">
            <p
              className={`eyebrow mb-6 reveal-fade ${visible ? 'is-visible' : ''}`}
              style={{ animationDelay: '0.1s' }}
            >
              О направлении
            </p>
            <h2
              className={`heading-serif text-[32px] sm:text-[40px] md:text-[48px] text-ink reveal ${visible ? 'is-visible' : ''}`}
              style={{ animationDelay: '0.2s' }}
            >
              Производство без лишней сложности.
            </h2>
            <p
              className={`mt-8 max-w-xl font-sans text-[15px] md:text-[16px] text-ink/65 leading-relaxed reveal ${visible ? 'is-visible' : ''}`}
              style={{ animationDelay: '0.35s' }}
            >
              Работаем с брендами, дизайнерами и компаниями, которым важно
              получить качественный результат без необходимости обращаться на
              крупную фабрику.
            </p>
          </div>

          <div className="lg:col-span-5 lg:pt-2">
            <ul className="grid grid-cols-2 gap-x-6 gap-y-8">
              {TRUST_POINTS.map((point, i) => (
                <li
                  key={point}
                  className={`border-l border-burgundy/30 pl-5 reveal ${visible ? 'is-visible' : ''}`}
                  style={{ animationDelay: `${0.45 + i * 0.1}s` }}
                >
                  <span className="font-sans text-[12px] uppercase tracking-wide-2 text-ink font-medium leading-snug">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
