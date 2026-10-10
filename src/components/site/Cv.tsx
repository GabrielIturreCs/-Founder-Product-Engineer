import { IconArrowLeft, IconDownload } from '@tabler/icons-react';
import { contact, cv, cvPdf, SITE_URL, type Lang } from '@/content/site';

export function Cv({ lang }: { lang: Lang }) {
  const c = cv[lang];
  const L = c.labels;
  const home = lang === 'es' ? '/' : '/en';

  return (
    <div className="cv-page">
      <div className="cv-toolbar">
        <a className="btn" href={home}>
          <IconArrowLeft size={16} />
          {L.back}
        </a>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          <a className="btn" href={lang === 'es' ? '/en/cv' : '/cv'} hrefLang={lang === 'es' ? 'en' : 'es'}>
            {L.other}
          </a>
          <a className="btn btn-ink" href={cvPdf[lang]} download>
            <IconDownload size={16} />
            {L.download}
          </a>
        </div>
      </div>

      <article className="cv-sheet">
        <header className="cv-head">
          <div>
            <p className="cv-kicker">Gabriel Iturre</p>
            <h1 className="cv-title">
              {c.headline.split(' ').slice(0, -2).join(' ')} <span className="cv-serif">{c.headline.split(' ').slice(-2).join(' ')}</span>
            </h1>
            <p className="cv-tag">{c.tagline}</p>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="cv-photo" src={contact.photo} alt="Gabriel Iturre" />
        </header>

        <ul className="cv-contact">
          <li>
            <b>Web</b> <a href={SITE_URL}>gabrieliturre.tech</a>
          </li>
          <li>
            <b>WhatsApp</b> {contact.whatsappDisplay}
          </li>
          <li>
            <b>Email</b> <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </li>
          <li>
            <b>{lang === 'es' ? 'Base' : 'Based in'}</b> Jujuy, Argentina · {lang === 'es' ? 'remoto' : 'remote'}
          </li>
        </ul>

        <div className="cv-body">
          <div className="cv-main">
            <p className="cv-summary">{c.summary}</p>

            <h2 className="cv-h">{L.what}</h2>
            <div className="cv-services">
              {c.services.map((s) => (
                <div key={s.t}>
                  <b>{s.t}</b>
                  <span>{s.d}</span>
                </div>
              ))}
            </div>

            <h2 className="cv-h">{L.projects}</h2>
            {c.projects.map((p) => (
              <div className="cv-project" key={p.n}>
                <div className="cv-project-top">
                  <b>{p.n}</b>
                  <a href={`https://${p.u}`}>{p.u}</a>
                </div>
                <p>{p.d}</p>
              </div>
            ))}

            <h2 className="cv-h">{L.process}</h2>
            <ol className="cv-process">
              {c.process.map((s, i) => (
                <li key={s}>
                  <span>0{i + 1}</span>
                  {s}
                </li>
              ))}
            </ol>
          </div>

          <aside className="cv-side">
            <h2 className="cv-h">{L.numbers}</h2>
            <div className="cv-numbers">
              {c.numbers.map((n) => (
                <div key={n.l}>
                  <b>{n.v}</b>
                  <span>{n.l}</span>
                </div>
              ))}
            </div>

            <h2 className="cv-h">{L.stack}</h2>
            {c.stack.map((s) => (
              <div className="cv-stack" key={s.g}>
                <b>{s.g}</b>
                <span>{s.i}</span>
              </div>
            ))}

            <h2 className="cv-h">{L.background}</h2>
            {c.background.map((b) => (
              <div className="cv-bg" key={b.t}>
                <b>{b.t}</b>
                <span>{b.p}</span>
              </div>
            ))}

            <h2 className="cv-h">{L.languages}</h2>
            <p className="cv-lang">{c.languages}</p>

            <a className="cv-cta" href={`https://wa.me/${contact.whatsapp}`}>
              <b>{L.cta}</b>
              <span>gabrieliturre.tech</span>
            </a>
          </aside>
        </div>
      </article>
    </div>
  );
}
