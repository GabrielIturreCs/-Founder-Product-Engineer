'use client';

import { useEffect, useRef } from 'react';
import { bookingUrl, type SiteContent } from '@/content/site';
import { Booking } from './Booking';

type CalApi = ((...args: unknown[]) => void) & { q?: unknown[]; ns?: Record<string, unknown>; loaded?: boolean };

// Carga oficial del embed de Cal.com (https://cal.com/docs/developing/guides/embeds).
function loadCal(): CalApi {
  const w = window as Window & { Cal?: CalApi };
  if (!w.Cal) {
    const cal = function (...args: unknown[]) {
      const c = w.Cal!;
      if (!c.loaded) {
        c.ns = {};
        c.q = c.q || [];
        const s = document.createElement('script');
        s.src = 'https://app.cal.com/embed/embed.js';
        s.async = true;
        document.head.appendChild(s);
        c.loaded = true;
      }
      c.q!.push(args);
    } as CalApi;
    w.Cal = cal;
  }
  return w.Cal;
}

function CalInline({ url, dark }: { url: string; dark?: boolean }) {
  const el = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!el.current) return;
    const link = new URL(url);
    const Cal = loadCal();
    Cal('init', { origin: link.origin });
    Cal('inline', {
      elementOrSelector: el.current,
      calLink: link.pathname.replace(/^\//, ''),
      layout: 'month_view',
      config: { theme: dark ? 'dark' : 'light' },
    });
  }, [url, dark]);
  return <div ref={el} className="cal-inline" />;
}

export function BookingEmbed({ t }: { t: SiteContent }) {
  const url = bookingUrl.trim();
  if (/^https:\/\/([a-z]+\.)?cal\.(com|eu)\//.test(url)) return <CalInline url={url} />;
  if (/^https:\/\/calendar\.google\.com\/calendar\/appointments\//.test(url)) {
    const src = url.includes('gv=true') ? url : `${url}${url.includes('?') ? '&' : '?'}gv=true`;
    return <iframe className="gcal-inline" src={src} title={t.booking.embedTitle} loading="lazy" />;
  }
  // Sin agenda externa configurada: formulario propio (llega por email).
  return <Booking t={t} />;
}
