'use client';

import { useEffect } from 'react';

// Animación "blur fade" al entrar en pantalla + analytics diferido.
// El contenido siempre está en el HTML (SEO); solo se anima su aparición.
export function Reveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: '0px 0px -6% 0px', threshold: 0.04 },
    );
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

    const load = () => import('@/lib/analytics').then((m) => m.initAnalytics()).catch(() => {});
    const w = window as Window & { requestIdleCallback?: (cb: () => void) => number };
    if (w.requestIdleCallback) w.requestIdleCallback(load);
    else setTimeout(load, 2500);

    return () => io.disconnect();
  }, []);
  return null;
}
