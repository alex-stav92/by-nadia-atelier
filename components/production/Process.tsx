'use client';
import { useReveal } from '@/hooks/useReveal';
import { PROCESS_STEPS } from '@/data/content';

export default function Process() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section className="section-py bg-cream-200">
      <div ref={ref} className="container-px">
        <div className="mb-14 md:mb-20 max-w-2xl">
          <p
            className={`eyebrow mb-5 reveal-fade ${visible ? 'is-visible' : ''}`}
            style={{ animationDelay: '0.1s' }}
          >
            Процесс
          </p>
          <h2
            className={`heading-serif text-[32px] sm:text-[40px] md:text-[48px] text-ink reveal ${visible ? 'is-visible' : ''}`}
            style={{ animationDelay: '0.2s' }}
          >
            Как мы работаем
          </h2>
        </div>

        {/* Desktop horizontal timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Line */}
            <div className="absolute top-[34px] left-0 right-0 h-px bg-burgundy/20" />
            <div
              className={`absolute top-[34px] left-0 h-px bg-burgundy transition-all duration-1000 ease-out-soft ${
                visible ? 'w-full' : 'w-0'
              }`}
              style={{ transitionDelay: '0.4s' }}
            />

            <div className="grid grid-cols-6 gap-4">
              {PROCESS_STEPS.map((step, i) => (
                <div
                  key={step.num}
                  className={`relative reveal ${visible ? 'is-visible' : ''}`}
                  style={{ animationDelay: `${0.4 + i * 0.12}s` }}
                >
                  <div className="flex items-center justify-center h-[68px]">
                    <span className="flex items-center justify-center w-[68px] h-[68px] rounded-full bg-cream-200 border border-burgundy/30 font-sans text-[13px] font-medium text-burgundy">
                      {step.num}
                    </span>
                  </div>
                  <h3 className="mt-6 font-sans text-[12px] uppercase tracking-wide-2 text-ink font-semibold text-center">
                    {step.title}
                  </h3>
                  <p className="mt-3 font-sans text-[13px] text-ink/55 leading-relaxed text-center max-w-[200px] mx-auto">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile vertical timeline */}
        <div className="lg:hidden">
          <div className="relative pl-10">
            <div className="absolute left-[19px] top-2 bottom-2 w-px bg-burgundy/20" />
            <div className="space-y-10">
              {PROCESS_STEPS.map((step, i) => (
                <div
                  key={step.num}
                  className={`relative reveal ${visible ? 'is-visible' : ''}`}
                  style={{ animationDelay: `${0.3 + i * 0.1}s` }}
                >
                  <span className="absolute -left-10 top-0 flex items-center justify-center w-10 h-10 rounded-full bg-cream-200 border border-burgundy/30 font-sans text-[11px] font-medium text-burgundy">
                    {step.num}
                  </span>
                  <h3 className="font-sans text-[12px] uppercase tracking-wide-2 text-ink font-semibold pt-2">
                    {step.title}
                  </h3>
                  <p className="mt-2 font-sans text-[14px] text-ink/55 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
