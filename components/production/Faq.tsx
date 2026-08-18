'use client';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import { FAQ_ITEMS } from '@/data/content';

export default function Faq() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [open, setOpen] = useState<number | null>(0);

  const toggle = (i: number) => setOpen(open === i ? null : i);

  return (
    <section className="section-py bg-cream-100">
      <div ref={ref} className="container-px">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p
              className={`eyebrow mb-5 reveal-fade ${visible ? 'is-visible' : ''}`}
              style={{ animationDelay: '0.1s' }}
            >
              Вопросы
            </p>
            <h2
              className={`heading-serif text-[32px] sm:text-[40px] md:text-[48px] text-ink reveal ${visible ? 'is-visible' : ''}`}
              style={{ animationDelay: '0.2s' }}
            >
              Частые вопросы
            </h2>
            <p
              className={`mt-6 font-sans text-[14px] text-ink/55 leading-relaxed max-w-xs reveal ${visible ? 'is-visible' : ''}`}
              style={{ animationDelay: '0.3s' }}
            >
              Не нашли ответ? Напишите нам — обсудим детали вашего проекта.
            </p>
          </div>

          <div className="lg:col-span-8">
            <ul className="divide-y divide-ink/10 border-y border-ink/10">
              {FAQ_ITEMS.map((item, i) => {
                const isOpen = open === i;
                return (
                  <li
                    key={item.question}
                    className={`reveal ${visible ? 'is-visible' : ''}`}
                    style={{ animationDelay: `${0.3 + i * 0.07}s` }}
                  >
                    <button
                      onClick={() => toggle(i)}
                      className="w-full flex items-center justify-between gap-6 py-6 text-left group"
                    >
                      <span
                        className={`font-sans text-[15px] md:text-[16px] transition-colors ${
                          isOpen ? 'text-burgundy' : 'text-ink group-hover:text-burgundy'
                        }`}
                      >
                        {item.question}
                      </span>
                      <span className="flex-shrink-0 text-burgundy">
                        {isOpen ? <Minus size={18} strokeWidth={1.5} /> : <Plus size={18} strokeWidth={1.5} />}
                      </span>
                    </button>
                    <div
                      className="grid transition-all duration-500 ease-out-soft"
                      style={{
                        gridTemplateRows: isOpen ? '1fr' : '0fr',
                        opacity: isOpen ? 1 : 0,
                      }}
                    >
                      <div className="overflow-hidden">
                        <p className="pb-6 pr-10 font-sans text-[14px] md:text-[15px] text-ink/60 leading-relaxed max-w-2xl">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
