import type { Metadata, Viewport } from 'next';
import { SITE_URL, content, contact, type Lang } from './site';

export const viewport: Viewport = {
  themeColor: '#07080a',
  width: 'device-width',
  initialScale: 1,
  colorScheme: 'dark',
};

const keywords = {
  es: [
    'Gabriel Iturre',
    'programador freelance',
    'programador freelance Argentina',
    'desarrollador full stack freelance',
    'desarrollo de apps a medida',
    'desarrollo de aplicaciones Android',
    'crear una app',
    'desarrollo de software a medida',
    'sistema de gestión a medida',
    'desarrollo SaaS',
    'desarrollo de MVP',
    'programador WordPress',
    'diseño web profesional',
    'tienda online',
    'integración Mercado Pago',
    'facturación electrónica AFIP',
    'chatbot WhatsApp con IA',
    'programador Jujuy',
    'desarrollador Next.js',
    'KILO sistema de gestión',
  ],
  en: [
    'Gabriel Iturre',
    'freelance developer',
    'freelance full stack developer',
    'hire a developer Latin America',
    'nearshore developer Argentina',
    'custom app development',
    'Android app developer',
    'custom software development',
    'SaaS MVP development',
    'WordPress developer',
    'Next.js developer',
    'AI automation developer',
    'WhatsApp chatbot developer',
  ],
};

export function pageMetadata(lang: Lang, page: 'home' | 'cv'): Metadata {
  const t = content[lang];
  const isCv = page === 'cv';
  const path = isCv ? (lang === 'es' ? '/cv' : '/en/cv') : lang === 'es' ? '/' : '/en';
  const title = isCv
    ? lang === 'es'
      ? 'Gabriel Iturre · Perfil profesional — Desarrollo de software a medida'
      : 'Gabriel Iturre · Profile — Custom software development'
    : t.title;
  const description = isCv
    ? lang === 'es'
      ? 'Perfil de Gabriel Iturre: apps, sistemas y webs a medida. Fundador de KILO y ZonaJujuy. Proyectos en producción, forma de trabajo y tecnologías (Claude, Codex). Descargalo en PDF.'
      : 'Profile of Gabriel Iturre: custom apps, systems and websites. Founder of KILO and ZonaJujuy. Live projects, process and tech (Claude, Codex). Download the PDF.'
    : t.description;

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    keywords: keywords[lang],
    authors: [{ name: contact.name, url: SITE_URL }],
    creator: contact.name,
    publisher: contact.name,
    category: 'technology',
    alternates: {
      canonical: path,
      languages: isCv
        ? { es: '/cv', en: '/en/cv', 'x-default': '/cv' }
        : { es: '/', en: '/en', 'x-default': '/' },
    },
    openGraph: {
      type: isCv ? 'profile' : 'website',
      url: path,
      siteName: 'Gabriel Iturre',
      title,
      description,
      locale: lang === 'es' ? 'es_AR' : 'en_US',
      alternateLocale: lang === 'es' ? ['en_US'] : ['es_AR'],
    },
    twitter: { card: 'summary_large_image', title, description },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
    },
    icons: { apple: contact.photo },
    formatDetection: { telephone: false, email: false, address: false },
  };
}
