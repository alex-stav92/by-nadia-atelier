'use client';
import { useReveal } from '@/hooks/useReveal';
import { SERVICES } from '@/data/content';

export default function Services() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="services" className="section-py bg-cream-200">
      <div ref={ref} className="container-px">
        <div className="mb-14 md:mb-20 max-w-2xl">
          <p
            className={`eyebrow mb-5 reveal-fade ${visible ? 'is-visible' : ''}`}
            style={{ animationDelay: '0.1s' }}
          >
            Возможности
          </p>
          <h2
            className={`heading-serif text-[32px] sm:text-[40px] md:text-[48px] text-ink reveal ${visible ? 'is-visible' : ''}`}
            style={{ animationDelay: '0.2s' }}
          >
            Что можем производить
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {SERVICES.map((service, i) => (
            <article
              key={service.title}
              className={`group relative overflow-hidden bg-cream-50 reveal ${visible ? 'is-visible' : ''}`}
              style={{ animationDelay: `${0.3 + i * 0.08}s` }}
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out-soft group-hover:scale-[1.04]"
                />
              </div>
              <div className="p-5 md:p-6">
                <h3 className="font-sans text-[13px] uppercase tracking-wide-2 text-ink font-medium">
                  {service.title}
                </h3>
                <p className="mt-2 font-sans text-[13px] text-ink/55 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
