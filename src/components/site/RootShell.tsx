import { Inter, Playfair_Display } from 'next/font/google';
import type { Lang } from '@/content/site';
import '@/app/site.css';

const sans = Inter({ subsets: ['latin'], variable: '--font-sans', display: 'swap' });
const serif = Playfair_Display({ subsets: ['latin'], variable: '--font-serif', style: ['italic'], weight: ['500'], display: 'swap' });

export function RootShell({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  return (
    <html lang={lang} className={`${sans.variable} ${serif.variable}`}>
      <body>{children}</body>
    </html>
  );
}
