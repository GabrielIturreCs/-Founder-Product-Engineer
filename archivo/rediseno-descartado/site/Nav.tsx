'use client';

import { useState } from 'react';
import { IconMenu2, IconX } from '@tabler/icons-react';
import type { SiteContent } from '@/content/site';

export function Nav({ t, cvHref }: { t: SiteContent; cvHref: string }) {
  const [open, setOpen] = useState(false);
  const es = t.lang === 'es';
  const home = es ? '/' : '/en';
  const links = [
    { href: `${home}#servicios`, label: t.nav.services },
    { href: `${home}#proyectos`, label: t.nav.work },
    { href: `${home}#proceso`, label: t.nav.process },
    { href: `${home}#faq`, label: t.nav.faq },
    { href: cvHref, label: t.nav.cv },
  ];
  const close = () => setOpen(false);

  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <a href={home} className="brand" aria-label="Gabriel Iturre">
          <span className="brand-dot">GI</span>
          <span>Gabriel Iturre</span>
        </a>
        <nav className="nav-links" aria-label={es ? 'Principal' : 'Main'}>
          {links.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>
        <div className="nav-right">
          <a className="lang" href={es ? '/en' : '/'} hrefLang={es ? 'en' : 'es'} lang={es ? 'en' : 'es'}>
            {es ? 'EN' : 'ES'}
          </a>
          <a className="btn btn-primary btn-sm nav-cta" href={`${home}#contacto`}>
            {t.nav.cta}
          </a>
          <button
            className="menu-btn"
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? (es ? 'Cerrar menú' : 'Close menu') : es ? 'Abrir menú' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <IconX size={20} /> : <IconMenu2 size={20} />}
          </button>
        </div>
      </div>
      <nav id="mobile-menu" className={`mobile-menu${open ? ' open' : ''}`} aria-label={es ? 'Menú móvil' : 'Mobile menu'}>
        {links.map((l) => (
          <a key={l.href} href={l.href} onClick={close}>
            {l.label}
          </a>
        ))}
        <a className="btn btn-primary" href={`${home}#contacto`} onClick={close}>
          {t.nav.cta}
        </a>
      </nav>
    </header>
  );
}
