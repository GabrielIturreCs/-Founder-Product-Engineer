import { Geist, Geist_Mono, Instrument_Serif } from 'next/font/google';
import type { Lang } from '@/content/site';
import '@/app/globals.css';
import '@/app/v4.css';

const sans = Geist({ subsets: ['latin'], variable: '--font-sans', display: 'swap' });
const mono = Geist_Mono({ subsets: ['latin'], variable: '--font-mono', display: 'swap' });
const serif = Instrument_Serif({ subsets: ['latin'], weight: '400', style: ['italic'], variable: '--font-serif', display: 'swap' });

// Aplica el tema guardado (o el del sistema) antes de pintar, para evitar parpadeo.
const themeScript = `try{var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark')t='light';var d=document.documentElement;d.setAttribute('data-theme',t);d.classList.add('js')}catch(e){}`;

export function Shell({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  return (
    <html lang={lang} data-theme="light" suppressHydrationWarning className={`${sans.variable} ${mono.variable} ${serif.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
