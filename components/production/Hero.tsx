'use client';
import { useReveal } from '@/hooks/useReveal';

export default function Hero() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-[100svh] flex flex-col justify-end overflow-hidden bg-cream-100 pt-28"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <div
          className={`absolute inset-0 bg-cover bg-center transition-transform duration-[1.6s] ease-out-soft ${
            visible ? 'scale-100' : 'scale-105'
          }`}
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/4622205/pexels-photo-4622205.jpeg?auto=compress&cs=tinysrgb&h=1400&w=2000')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cream-100/60 via-cream-100/20 to-cream-100" />
        <div className="absolute inset-0 bg-gradient-to-r from-cream-100/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative container-px pb-16 md:pb-24 lg:pb-32">
        <div className="max-w-4xl">
          <p
            className={`eyebrow mb-6 ${
              visible ? 'animate-fade-down' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.2s' }}
          >
            BY NADIA Production
          </p>
          <h1
            className={`heading-serif text-[44px] sm:text-[60px] md:text-[76px] lg:text-[88px] text-ink text-balance ${
              visible ? 'animate-fade-up' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.35s' }}
          >
            Производство одежды
            <br />
            для брендов
            <br className="hidden sm:block" /> и компаний.
          </h1>
          <p
            className={`mt-8 max-w-xl font-sans text-[15px] md:text-[17px] text-ink/65 leading-relaxed ${
              visible ? 'animate-fade-up' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.55s' }}
          >
            Небольшое швейное производство в Ставрополе. Помогаем брендам и
            компаниям создавать изделия — от первого образца до готовой партии.
          </p>
          <div
            className={`mt-10 flex flex-col sm:flex-row gap-4 ${
              visible ? 'animate-fade-up' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.75s' }}
          >
            <a href="#contact" className="btn-primary">
              Обсудить проект
            </a>
            <a href="#services" className="btn-outline">
              Посмотреть возможности
            </a>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="relative container-px pb-8">
        <div
          className={`flex items-center gap-3 ${visible ? 'animate-fade-in' : 'opacity-0'}`}
          style={{ animationDelay: '1s' }}
        >
          <span className="h-px w-10 bg-ink/30" />
          <span className="font-sans text-[10px] uppercase tracking-wide-3 text-ink/40">
            Листайте, чтобы узнать больше
          </span>
        </div>
      </div>
    </section>
  );
}
