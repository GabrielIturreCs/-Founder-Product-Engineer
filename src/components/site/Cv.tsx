import { IconArrowLeft, IconDownload } from '@tabler/icons-react';
import { contact, cv, cvPdf, content, SITE_URL, type Lang } from '@/content/site';

export function Cv({ lang }: { lang: Lang }) {
  const c = cv[lang];
  const t = content[lang];
  const L = c.labels;
  const home = lang === 'es' ? '/' : '/en';
  const featured = t.projects.filter((p) => p.url).slice(0, 6);

  return (
    <div className="cv-page">
      <div className="cv-toolbar">
        <a className="btn btn-ghost btn-sm" href={home}>
          <IconArrowLeft size={16} />
          {L.back}
        </a>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          <a className="btn btn-ghost btn-sm" href={lang === 'es' ? '/en/cv' : '/cv'} hrefLang={lang === 'es' ? 'en' : 'es'}>
            {lang === 'es' ? 'English version' : 'Versión en español'}
          </a>
          <a className="btn btn-primary btn-sm" href={cvPdf[lang]} download>
            <IconDownload size={16} />
            {L.download}
          </a>
        </div>
      </div>

      <article className="cv-sheet">
        <div className="cv-main">
          <header>
            <h1 className="cv-name">Gabriel Iturre</h1>
            <p className="cv-headline">{c.headline}</p>
            <ul className="cv-contact">
              <li>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </li>
              <li>{contact.whatsappDisplay}</li>
              <li>
                <a href={SITE_URL}>gabrieliturre.tech</a>
              </li>
              <li>Jujuy, Argentina · {L.remote}</li>
            </ul>
          </header>

          <h2 className="cv-h">{L.summary}</h2>
          <p className="cv-summary">{c.summary}</p>

          <h2 className="cv-h">{L.experience}</h2>
          {c.jobs.map((j) => (
            <section className="cv-job" key={j.company}>
              <div className="cv-job-top">
                <span className="cv-job-role">{j.role}</span>
                <span className="cv-job-period">{j.period}</span>
              </div>
              <div className="cv-job-company">
                {j.company}
                {j.url ? ` · ${j.url}` : ''}
              </div>
              <ul>
                {j.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </section>
          ))}

          <h2 className="cv-h">{L.education}</h2>
          {c.education.map((e) => (
            <div className="cv-job" key={e.title}>
              <div className="cv-job-top">
                <span className="cv-job-role">{e.title}</span>
                <span className="cv-job-period">{e.period}</span>
              </div>
              <div className="cv-job-company">{e.place}</div>
            </div>
          ))}
        </div>

        <aside className="cv-side">
          <div className="cv-photo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={contact.photo} alt="Gabriel Iturre" />
          </div>

          <h2 className="cv-h">{L.highlights}</h2>
          <ul className="cv-hl">
            {c.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>

          <h2 className="cv-h">{L.skills}</h2>
          {c.skills.map((s) => (
            <div className="cv-skill" key={s.group}>
              <b>{s.group}</b>
              <span>{s.items}</span>
            </div>
          ))}

          <h2 className="cv-h">{lang === 'es' ? 'Proyectos en vivo' : 'Live projects'}</h2>
          <ul className="cv-links">
            {featured.map((p) => (
              <li key={p.slug}>
                <b>{p.name}</b> · <a href={p.url}>{p.url!.replace(/^https?:\/\//, '')}</a>
              </li>
            ))}
          </ul>

          <h2 className="cv-h">{L.languages}</h2>
          <p>{c.languages}</p>

          <h2 className="cv-h">Links</h2>
          <ul className="cv-links">
            <li>
              <b>LinkedIn</b> · <a href={contact.linkedin}>in/gabriel-iturre</a>
            </li>
            <li>
              <b>GitHub</b> · <a href={contact.github}>GabrielIturreCs</a>
            </li>
          </ul>
        </aside>
      </article>
    </div>
  );
}
