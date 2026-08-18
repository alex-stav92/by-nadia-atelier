'use client';
import { useReveal } from '@/hooks/useReveal';

export default function FinalCta() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section className="bg-burgundy text-cream-50">
      <div ref={ref} className="container-px section-py">
        <div className="max-w-3xl">
          <p
            className={`font-sans text-[11px] uppercase tracking-wide-3 text-cream-50/50 mb-6 reveal-fade ${visible ? 'is-visible' : ''}`}
            style={{ animationDelay: '0.1s' }}
          >
            Обсудим проект
          </p>
          <h2
            className={`heading-serif text-[40px] sm:text-[56px] md:text-[72px] text-cream-50 text-balance reveal ${visible ? 'is-visible' : ''}`}
            style={{ animationDelay: '0.2s' }}
          >
            Есть идея для проекта?
          </h2>
          <p
            className={`mt-8 max-w-xl font-sans text-[16px] md:text-[18px] text-cream-50/65 leading-relaxed reveal ${visible ? 'is-visible' : ''}`}
            style={{ animationDelay: '0.35s' }}
          >
            Расскажите, что хотите создать. Обсудим объём, материалы, сроки и
            возможности производства.
          </p>
          <div
            className={`mt-12 reveal ${visible ? 'is-visible' : ''}`}
            style={{ animationDelay: '0.5s' }}
          >
            <a href="#contact" className="btn-ghost-light">
              Обсудить проект
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
