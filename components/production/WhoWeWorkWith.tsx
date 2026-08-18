'use client';
import { useReveal } from '@/hooks/useReveal';
import { AUDIENCES } from '@/data/content';

export default function WhoWeWorkWith() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section className="section-py bg-cream-100">
      <div ref={ref} className="container-px">
        <div className="mb-14 md:mb-20 max-w-2xl">
          <p
            className={`eyebrow mb-5 reveal-fade ${visible ? 'is-visible' : ''}`}
            style={{ animationDelay: '0.1s' }}
          >
            Сотрудничество
          </p>
          <h2
            className={`heading-serif text-[32px] sm:text-[40px] md:text-[48px] text-ink reveal ${visible ? 'is-visible' : ''}`}
            style={{ animationDelay: '0.2s' }}
          >
            С кем мы работаем
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-ink/10">
          {AUDIENCES.map((audience, i) => (
            <div
              key={audience.title}
              className={`group bg-cream-100 p-8 md:p-10 transition-colors duration-500 ease-out-soft hover:bg-cream-50 reveal ${visible ? 'is-visible' : ''}`}
              style={{ animationDelay: `${0.3 + i * 0.1}s` }}
            >
              <span className="font-sans text-[11px] uppercase tracking-wide-3 text-burgundy/70 font-medium">
                0{i + 1}
              </span>
              <h3 className="mt-5 font-sans text-[14px] uppercase tracking-wide-2 text-ink font-semibold">
                {audience.title}
              </h3>
              <p className="mt-3 font-sans text-[14px] text-ink/55 leading-relaxed">
                {audience.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
