import { useEffect, useRef, useState } from 'react';

export function useStaggered<T extends HTMLElement = HTMLDivElement>(
  count: number,
  options: IntersectionObserverInit = {}
) {
  const ref = useRef<T>(null);
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCount(count);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -5% 0px', ...options }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [count, options]);

  return { ref, visibleCount };
}
