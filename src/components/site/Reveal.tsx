'use client';

import { useEffect } from 'react';

// Efectos de interacción. El contenido siempre está en el HTML (SEO); acá solo se anima.
// - .reveal: aparición "blur fade" al entrar en pantalla
// - [data-tilt]: inclinación 3D con el mouse + reflejo de luz
// - --scroll: progreso de lectura (barra superior)
export function Reveal() {
  useEffect(() => {
    const root = document.documentElement;
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

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

    // Barra de progreso
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const max = root.scrollHeight - innerHeight;
        root.style.setProperty('--scroll', String(max > 0 ? scrollY / max : 0));
        ticking = false;
      });
    };
    addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // Inclinación 3D (solo con mouse)
    const cleanups: (() => void)[] = [];
    if (!reduce && matchMedia('(hover: hover) and (pointer: fine)').matches) {
      document.querySelectorAll<HTMLElement>('[data-tilt]').forEach((el) => {
        const max = Number(el.dataset.tilt) || 8;
        const move = (ev: PointerEvent) => {
          const r = el.getBoundingClientRect();
          const x = (ev.clientX - r.left) / r.width;
          const y = (ev.clientY - r.top) / r.height;
          el.style.setProperty('--ry', `${(x - 0.5) * max * 2}deg`);
          el.style.setProperty('--rx', `${(0.5 - y) * max * 2}deg`);
          el.style.setProperty('--gx', `${x * 100}%`);
          el.style.setProperty('--gy', `${y * 100}%`);
          el.classList.add('tilting');
        };
        const leave = () => {
          el.style.setProperty('--ry', '0deg');
          el.style.setProperty('--rx', '0deg');
          el.classList.remove('tilting');
        };
        el.addEventListener('pointermove', move);
        el.addEventListener('pointerleave', leave);
        cleanups.push(() => {
          el.removeEventListener('pointermove', move);
          el.removeEventListener('pointerleave', leave);
        });
      });
    }

    const load = () => import('@/lib/analytics').then((m) => m.initAnalytics()).catch(() => {});
    const w = window as Window & { requestIdleCallback?: (cb: () => void) => number };
    if (w.requestIdleCallback) w.requestIdleCallback(load);
    else setTimeout(load, 2500);

    return () => {
      io.disconnect();
      removeEventListener('scroll', onScroll);
      cleanups.forEach((c) => c());
    };
  }, []);
  return null;
}
