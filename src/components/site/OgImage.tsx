import { ImageResponse } from 'next/og';
import type { Lang } from '@/content/site';

export const ogSize = { width: 1200, height: 630 };

export function ogImage(lang: Lang) {
  const es = lang === 'es';
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px',
          background: 'radial-gradient(900px 500px at 15% 20%, #0f3d2e 0%, #07080a 65%)',
          color: '#f4f6f8',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
          <div style={{ width: 64, height: 64, borderRadius: 18, background: '#10b981', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28, fontWeight: 800, color: '#fff' }}>GI</div>
          <div style={{ fontSize: 30, fontWeight: 700 }}>gabrieliturre.tech</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 74, fontWeight: 800, letterSpacing: -2, lineHeight: 1.05 }}>Gabriel Iturre</div>
          <div style={{ fontSize: 40, color: '#34d399', marginTop: 16, fontWeight: 700 }}>
            {es ? 'Programador Full Stack freelance' : 'Freelance Full Stack Developer'}
          </div>
          <div style={{ fontSize: 30, color: '#9aa3ad', marginTop: 18 }}>
            {es ? 'Apps · Sistemas de gestión · SaaS · Webs · IA' : 'Apps · Business systems · SaaS · Websites · AI'}
          </div>
        </div>
        <div style={{ display: 'flex', gap: 14 }}>
          {(es ? ['Fundador de KILO', 'Apps en Google Play', 'Presupuesto en 48 h'] : ['Founder of KILO', 'Apps on Google Play', 'Quote in 48 h']).map((x) => (
            <div key={x} style={{ display: 'flex', padding: '12px 22px', borderRadius: 999, border: '2px solid rgba(52,211,153,0.5)', color: '#a7f3d0', fontSize: 24, fontWeight: 600 }}>{x}</div>
          ))}
        </div>
      </div>
    ),
    ogSize,
  );
}
