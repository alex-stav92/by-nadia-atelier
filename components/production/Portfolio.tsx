'use client';
import { useMemo, useState } from 'react';
import { useReveal } from '@/hooks/useReveal';
import { PROJECTS, PROJECT_CATEGORIES, type ProjectCategory } from '@/data/content';

export default function Portfolio() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [active, setActive] = useState<ProjectCategory>('Все');

  const filtered = useMemo(() => {
    if (active === 'Все') return PROJECTS;
    return PROJECTS.filter((p) => p.category === active);
  }, [active]);

  return (
    <section id="portfolio" className="section-py bg-cream-100">
      <div ref={ref} className="container-px">
        <div className="mb-10 md:mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div className="max-w-2xl">
            <p
              className={`eyebrow mb-5 reveal-fade ${visible ? 'is-visible' : ''}`}
              style={{ animationDelay: '0.1s' }}
            >
              Проекты
            </p>
            <h2
              className={`heading-serif text-[32px] sm:text-[40px] md:text-[48px] text-ink reveal ${visible ? 'is-visible' : ''}`}
              style={{ animationDelay: '0.2s' }}
            >
              Наши проекты
            </h2>
          </div>
          <p
            className={`font-sans text-[14px] text-ink/50 max-w-xs reveal ${visible ? 'is-visible' : ''}`}
            style={{ animationDelay: '0.3s' }}
          >
            Примеры изделий и процесса производства. Фотографии обновляются по
            мере выполнения заказов.
          </p>
        </div>

        {/* Categories */}
        <div
          className={`mb-10 flex flex-wrap gap-2 md:gap-3 reveal-fade ${visible ? 'is-visible' : ''}`}
          style={{ animationDelay: '0.35s' }}
        >
          {PROJECT_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`font-sans text-[11px] uppercase tracking-wide-2 px-4 py-2.5 border transition-all duration-300 ease-out-soft ${
                active === cat
                  ? 'border-burgundy bg-burgundy text-cream-50'
                  : 'border-ink/15 text-ink/60 hover:border-ink/40 hover:text-ink'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[180px] md:auto-rows-[240px] lg:auto-rows-[280px] gap-3 md:gap-4">
          {filtered.map((project, i) => {
            const rowSpan =
              project.span === 'tall'
                ? 'row-span-2'
                : project.span === 'wide'
                ? 'col-span-2'
                : '';
            return (
              <article
                key={project.title + i}
                className={`group relative overflow-hidden bg-cream-200 ${rowSpan} reveal-image ${visible ? 'is-visible' : ''}`}
                style={{ animationDelay: `${0.4 + i * 0.08}s` }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out-soft group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/0 to-transparent opacity-0 transition-opacity duration-500 ease-out-soft group-hover:opacity-100" />
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 translate-y-3 opacity-0 transition-all duration-500 ease-out-soft group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="font-sans text-[10px] uppercase tracking-wide-3 text-cream-50/70">
                    {project.category}
                  </p>
                  <h3 className="mt-1 font-sans text-[13px] md:text-[14px] text-cream-50 font-medium">
                    {project.title}
                  </h3>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
