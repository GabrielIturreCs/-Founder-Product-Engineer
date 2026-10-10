import { ImageResponse } from 'next/og';
import type { Lang } from '@/content/site';

export const ogSize = { width: 1200, height: 630 };

export function ogImage(lang: Lang) {
  const es = lang === 'es';
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', background: '#f1eeea', padding: 56, gap: 40, fontFamily: 'sans-serif' }}>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 28, fontWeight: 600, color: '#0b0b0b' }}>
            <div style={{ width: 16, height: 16, borderRadius: 99, background: '#10b981' }} />
            gabrieliturre.tech
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', fontSize: 76, lineHeight: 1, letterSpacing: -3, color: '#0b0b0b' }}>
            <span>{es ? 'Apps, sistemas' : 'Apps, systems'}</span>
            <span>{es ? 'y webs que' : 'and websites'}</span>
            <span style={{ color: '#047857' }}>{es ? 'hacen crecer.' : 'that grow.'}</span>
          </div>
          <div style={{ display: 'flex', fontSize: 26, color: '#77726c' }}>
            {es ? 'Gabriel Iturre · Desarrollador freelance · Fundador de KILO' : 'Gabriel Iturre · Freelance developer · Founder of KILO'}
          </div>
        </div>
        <div
          style={{
            width: 360,
            borderRadius: 32,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            padding: 32,
            color: '#fff',
            background: 'linear-gradient(150deg, #b9f871 0%, #10b981 45%, #047857 100%)',
          }}
        >
          <div style={{ display: 'flex', alignSelf: 'flex-start', padding: '8px 16px', borderRadius: 99, background: '#0b0b0b', fontSize: 20, marginBottom: 'auto' }}>
            {es ? 'Empezá hoy' : 'Start today'}
          </div>
          <div style={{ fontSize: 48, lineHeight: 1, letterSpacing: -2 }}>{es ? 'Trabajemos juntos' : "Let's work together"}</div>
          <div style={{ display: 'flex', marginTop: 20, padding: '14px 0', justifyContent: 'center', borderRadius: 14, background: '#fff', color: '#0b0b0b', fontSize: 22 }}>
            {es ? 'Ver precios' : 'See pricing'}
          </div>
        </div>
      </div>
    ),
    ogSize,
  );
}
