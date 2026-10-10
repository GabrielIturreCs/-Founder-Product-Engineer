'use client';

import { useEffect } from 'react';

// Mejoras progresivas: animación al hacer scroll y analytics.
// Sin JS el contenido se ve completo (importante para SEO y crawlers de IA).
export function Enhance() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add('js');
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.05 },
    );
    els.forEach((el) => io.observe(el));

    const load = () => import('@/lib/firebase').then((m) => m.initAnalytics()).catch(() => {});
    const w = window as Window & { requestIdleCallback?: (cb: () => void) => number };
    if (w.requestIdleCallback) w.requestIdleCallback(load);
    else setTimeout(load, 2000);

    return () => io.disconnect();
  }, []);

  return null;
}
