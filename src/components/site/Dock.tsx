'use client';

import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandWhatsapp,
  IconHome,
  IconLayoutGrid,
  IconMail,
  IconMoon,
  IconReceipt2,
  IconSun,
} from '@tabler/icons-react';
import { contact, whatsappLink, type SiteContent } from '@/content/site';

export function Dock({ t }: { t: SiteContent }) {
  const es = t.lang === 'es';
  const home = es ? '/' : '/en';

  const toggle = () => {
    const root = document.documentElement;
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try {
      localStorage.setItem('theme', next);
    } catch {}
  };

  return (
    <nav className="dock" aria-label={es ? 'Accesos rápidos' : 'Quick links'}>
      <a href={`${home}#top`} data-tip={t.nav.home} aria-label={t.nav.home}>
        <IconHome size={19} stroke={1.6} />
      </a>
      <a href={`${home}#proyectos`} data-tip={t.nav.work} aria-label={t.nav.work}>
        <IconLayoutGrid size={19} stroke={1.6} />
      </a>
      <a href={`${home}#precios`} data-tip={t.nav.pricing} aria-label={t.nav.pricing} className="hide-sm">
        <IconReceipt2 size={19} stroke={1.6} />
      </a>
      <span className="sep" aria-hidden="true" />
      <a href={whatsappLink(t.cta.waText)} target="_blank" rel="noopener noreferrer" data-tip="WhatsApp" aria-label="WhatsApp">
        <IconBrandWhatsapp size={19} stroke={1.6} />
      </a>
      <a href={contact.linkedin} target="_blank" rel="noopener noreferrer me" data-tip="LinkedIn" aria-label="LinkedIn">
        <IconBrandLinkedin size={19} stroke={1.6} />
      </a>
      <a href={contact.github} target="_blank" rel="noopener noreferrer me" data-tip="GitHub" aria-label="GitHub" className="hide-sm">
        <IconBrandGithub size={19} stroke={1.6} />
      </a>
      <a href={`mailto:${contact.email}`} data-tip="Email" aria-label="Email">
        <IconMail size={19} stroke={1.6} />
      </a>
      <span className="sep" aria-hidden="true" />
      <a href={es ? '/en' : '/'} hrefLang={es ? 'en' : 'es'} data-tip={t.dock.lang} aria-label={t.dock.lang}>
        <span className="lang-txt">{es ? 'EN' : 'ES'}</span>
      </a>
      <button type="button" onClick={toggle} data-tip={t.dock.theme} aria-label={t.dock.theme}>
        <IconMoon size={19} stroke={1.6} className="theme-light-icon" />
        <IconSun size={19} stroke={1.6} className="theme-dark-icon" />
      </button>
    </nav>
  );
}
