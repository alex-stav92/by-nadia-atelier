'use client';
import { useReveal } from '@/hooks/useReveal';

const gallery = [
  {
    src: 'https://images.pexels.com/photos/4614231/pexels-photo-4614231.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'Рулоны тканей в мастерской',
    span: 'lg:col-span-2 lg:row-span-2',
  },
  {
    src: 'https://images.pexels.com/photos/11359034/pexels-photo-11359034.jpeg?auto=compress&cs=tinysrgb&w=700',
    alt: 'Руки мастера направляют ткань в швейную машину',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/8030149/pexels-photo-8030149.jpeg?auto=compress&cs=tinysrgb&w=700',
    alt: 'Манекен с драпировкой из белой ткани',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/13159721/pexels-photo-13159721.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'Работник производственного цеха за оборудованием',
    span: 'lg:col-span-2',
  },
];

export default function Atmosphere() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section ref={ref} className="bg-sand-50 py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div
          className={`reveal ${visible ? 'is-visible' : ''} mb-12 max-w-2xl sm:mb-16`}
          style={{ animationDelay: '0.05s' }}
        >
          <p className="text-[11px] font-medium uppercase tracking-brand-wide text-ink-500">
            Атмосфера
          </p>
          <h2 className="mt-4 font-serif text-4xl font-light leading-tight text-ink-900 sm:text-5xl">
            Ткань, процесс, детали
          </h2>
        </div>

        <div className="grid auto-rows-[220px] gap-4 sm:auto-rows-[280px] lg:grid-cols-4 lg:grid-rows-2">
          {gallery.map((item, i) => (
            <figure
              key={i}
              className={`reveal ${visible ? 'is-visible' : ''} group relative overflow-hidden rounded-xl bg-ink-100 ${item.span}`}
              style={{ animationDelay: `${0.1 + i * 0.1}s` }}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="h-full w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-ink-950/0 transition-colors duration-500 group-hover:bg-ink-950/10" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
