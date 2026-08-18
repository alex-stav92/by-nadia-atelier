'use client';
import { useReveal } from '@/hooks/useReveal';
import { ADVANTAGES } from '@/data/content';

export default function WhyByNadia() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="about" className="section-py bg-cream-100">
      <div ref={ref} className="container-px">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p
              className={`eyebrow mb-5 reveal-fade ${visible ? 'is-visible' : ''}`}
              style={{ animationDelay: '0.1s' }}
            >
              Преимущества
            </p>
            <h2
              className={`heading-serif text-[32px] sm:text-[40px] md:text-[48px] text-ink reveal ${visible ? 'is-visible' : ''}`}
              style={{ animationDelay: '0.2s' }}
            >
              Почему BY NADIA
            </h2>
            <div
              className={`mt-10 relative aspect-[4/5] overflow-hidden reveal-image ${visible ? 'is-visible' : ''}`}
              style={{ animationDelay: '0.4s' }}
            >
              <img
                src="https://images.pexels.com/photos/3965543/pexels-photo-3965543.jpeg?auto=compress&cs=tinysrgb&h=1200&w=900"
                alt="Производство BY NADIA"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-7 lg:pt-16">
            <ul className="divide-y divide-ink/10">
              {ADVANTAGES.map((adv, i) => (
                <li
                  key={adv.title}
                  className={`py-7 reveal ${visible ? 'is-visible' : ''}`}
                  style={{ animationDelay: `${0.3 + i * 0.1}s` }}
                >
                  <div className="flex items-baseline gap-6">
                    <span className="font-sans text-[11px] tracking-wide-2 text-burgundy/60 font-medium">
                      0{i + 1}
                    </span>
                    <div className="flex-1">
                      <h3 className="font-sans text-[15px] uppercase tracking-wide-2 text-ink font-semibold">
                        {adv.title}
                      </h3>
                      <p className="mt-2 font-sans text-[15px] text-ink/55 leading-relaxed max-w-lg">
                        {adv.description}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
