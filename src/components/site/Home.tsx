import Image from 'next/image';
import {
  IconArrowUpRight,
  IconBrandGithub,
  IconBrandGooglePlay,
  IconBrandLinkedin,
  IconBrandWhatsapp,
  IconCircleCheck,
  IconClock,
  IconDeviceMobile,
  IconDownload,
  IconLayoutDashboard,
  IconMail,
  IconRobot,
  IconRocket,
  IconShoppingCart,
  IconTrendingUp,
  IconWorldWww,
} from '@tabler/icons-react';
import { content, contact, cvPdf, whatsappLink, type Lang, type Project } from '@/content/site';
import { Nav } from './Nav';
import { ContactForm } from './ContactForm';
import { Enhance } from './Enhance';
import { JsonLd } from './JsonLd';

const serviceIcons = {
  mobile: IconDeviceMobile,
  system: IconLayoutDashboard,
  saas: IconRocket,
  web: IconWorldWww,
  shop: IconShoppingCart,
  ai: IconRobot,
} as const;

export function Home({ lang }: { lang: Lang }) {
  const t = content[lang];
  const es = lang === 'es';
  const cvHref = es ? '/cv' : '/en/cv';
  const wa = whatsappLink(t.hero.waText);
  const featured = t.projects.filter((p) => p.featured);
  const more = t.projects.filter((p) => !p.featured);

  return (
    <>
      <JsonLd lang={lang} />
      <Nav t={t} cvHref={cvHref} />

      <main>
        {/* HERO */}
        <section className="hero">
          <div className="wrap">
            <div className="hero-grid">
              <div>
                <span className="badge">
                  <span className="pulse" aria-hidden="true" />
                  {t.hero.badge}
                </span>
                <h1>
                  {t.hero.title1} <span className="serif grad">{t.hero.title2}</span>
                </h1>
                <p className="hero-sub">{t.hero.subtitle}</p>
                <div className="hero-ctas">
                  <a className="btn btn-primary" href={wa} target="_blank" rel="noopener noreferrer">
                    <IconBrandWhatsapp size={20} />
                    {t.hero.primary}
                  </a>
                  <a className="btn btn-ghost" href="#proyectos">
                    {t.hero.secondary}
                  </a>
                </div>
                <ul className="proof">
                  {t.hero.proof.map((p) => (
                    <li key={p}>
                      <IconCircleCheck size={18} />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="hero-card">
                <div className="hero-card-glow" aria-hidden="true" />
                <Image
                  src={contact.photo}
                  alt={es ? 'Gabriel Iturre, programador full stack freelance en Jujuy, Argentina' : 'Gabriel Iturre, freelance full stack developer from Argentina'}
                  width={412}
                  height={390}
                  priority
                  style={{ position: 'relative' }}
                />
                <div className="chip chip-a">
                  <span className="chip-icon">
                    <IconBrandGooglePlay size={16} />
                  </span>
                  <span>
                    KILO
                    <small>{es ? 'App en Google Play' : 'Live on Google Play'}</small>
                  </span>
                </div>
                <div className="chip chip-b">
                  <span className="chip-icon">
                    <IconClock size={16} />
                  </span>
                  <span>
                    {es ? 'Presupuesto en 48 h' : 'Quote in 48 h'}
                    <small>{es ? 'Precio cerrado' : 'Fixed price'}</small>
                  </span>
                </div>
              </div>
            </div>

            <div className="stats">
              {t.stats.map((s) => (
                <div className="stat" key={s.label}>
                  <b>{s.value}</b>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="section section-alt" id="servicios">
          <div className="wrap">
            <div className="section-head reveal">
              <span className="eyebrow">{t.nav.services}</span>
              <h2>{t.servicesTitle}</h2>
              <p className="lead">{t.servicesSubtitle}</p>
            </div>
            <div className="grid-3">
              {t.services.map((s) => {
                const Icon = serviceIcons[s.icon as keyof typeof serviceIcons] ?? IconRocket;
                return (
                  <article className="card reveal" key={s.title}>
                    <span className="icon-box">
                      <Icon size={22} />
                    </span>
                    <h3>{s.title}</h3>
                    <p>{s.desc}</p>
                    <ul className="tags">
                      {s.items.map((i) => (
                        <li key={i}>{i}</li>
                      ))}
                    </ul>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section className="section" id="proyectos">
          <div className="wrap">
            <div className="section-head reveal">
              <span className="eyebrow">{t.nav.work}</span>
              <h2>{t.workTitle}</h2>
              <p className="lead">{t.workSubtitle}</p>
            </div>
            <div className="projects">
              {featured.map((p, i) => (
                <FeaturedProject key={p.slug} p={p} t={t} priority={i === 0} />
              ))}
            </div>

            <h3 className="subhead reveal">{t.moreWorkTitle}</h3>
            <div className="mini-grid">
              {more.map((p) => (
                <a className="mini reveal" key={p.slug} href={p.url} target="_blank" rel="noopener noreferrer">
                  <div className="mini-top">
                    <span className="mini-kind">{p.kind}</span>
                    <IconArrowUpRight size={18} className="mini-arrow" />
                  </div>
                  <h4>{p.name}</h4>
                  <p>{p.summary}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* WHY */}
        <section className="section section-alt">
          <div className="wrap">
            <div className="section-head reveal">
              <span className="eyebrow">{es ? 'Diferenciales' : 'Why me'}</span>
              <h2>{t.whyTitle}</h2>
            </div>
            <div className="grid-3">
              {t.why.map((w) => (
                <article className="card reveal" key={w.title}>
                  <span className="icon-box">
                    <IconTrendingUp size={22} />
                  </span>
                  <h3>{w.title}</h3>
                  <p>{w.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="section" id="proceso">
          <div className="wrap">
            <div className="section-head reveal">
              <span className="eyebrow">{t.nav.process}</span>
              <h2>{t.processTitle}</h2>
            </div>
            <ol className="steps">
              {t.process.map((s) => (
                <li className="reveal" key={s.title}>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* STACK */}
        <section className="section section-alt" id="stack">
          <div className="wrap">
            <div className="section-head reveal">
              <span className="eyebrow">Stack</span>
              <h2>{t.stackTitle}</h2>
            </div>
            <div className="stack">
              {t.stack.map((g) => (
                <div className="card reveal" key={g.group}>
                  <h3>{g.group}</h3>
                  <ul className="tags">
                    {g.items.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="section" id="sobre-mi">
          <div className="wrap about">
            <div className="about-photo reveal">
              <Image src={contact.photo} alt="Gabriel Iturre" width={412} height={390} />
            </div>
            <div className="reveal">
              <span className="eyebrow">{es ? 'Sobre mí' : 'About'}</span>
              <h2>{t.aboutTitle}</h2>
              <p>{t.about}</p>
              <div className="about-links">
                <a className="btn btn-primary btn-sm" href={cvHref}>
                  <IconDownload size={18} />
                  {t.cvCta}
                </a>
                <a className="btn btn-ghost btn-sm" href={contact.linkedin} target="_blank" rel="noopener noreferrer me">
                  <IconBrandLinkedin size={18} />
                  LinkedIn
                </a>
                <a className="btn btn-ghost btn-sm" href={contact.github} target="_blank" rel="noopener noreferrer me">
                  <IconBrandGithub size={18} />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section section-alt" id="faq">
          <div className="wrap">
            <div className="section-head reveal">
              <span className="eyebrow">FAQ</span>
              <h2>{t.faqTitle}</h2>
            </div>
            <div className="faq">
              {t.faq.map((f, i) => (
                <details key={f.q} open={i === 0}>
                  <summary>
                    <h3 style={{ font: 'inherit' }}>{f.q}</h3>
                  </summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="section" id="contacto">
          <div className="wrap contact">
            <div className="reveal">
              <span className="eyebrow">{es ? 'Contacto' : 'Contact'}</span>
              <h2>{t.ctaTitle}</h2>
              <p className="lead">{t.ctaSubtitle}</p>
              <div className="direct">
                <small style={{ color: 'var(--muted)' }}>{t.form.or}</small>
                <a href={wa} target="_blank" rel="noopener noreferrer">
                  <span className="icon-box">
                    <IconBrandWhatsapp size={22} />
                  </span>
                  <span>
                    <small>WhatsApp</small>
                    <b>{contact.whatsappDisplay}</b>
                  </span>
                </a>
                <a href={`mailto:${contact.email}`}>
                  <span className="icon-box">
                    <IconMail size={22} />
                  </span>
                  <span>
                    <small>Email</small>
                    <b>{contact.email}</b>
                  </span>
                </a>
              </div>
            </div>
            <div className="contact-box reveal">
              <ContactForm t={t} />
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap footer-inner">
          <div>
            <a href={es ? '/' : '/en'} className="brand">
              <span className="brand-dot">GI</span>
              <span>Gabriel Iturre</span>
            </a>
            <p>{t.footer}</p>
            <p style={{ marginTop: 8 }}>© {new Date().getFullYear()} Gabriel Iturre · gabrieliturre.tech</p>
          </div>
          <nav className="footer-links" aria-label="Footer">
            <a href={cvHref}>{t.nav.cv}</a>
            <a href={cvPdf[lang]} download>
              PDF
            </a>
            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer me">
              LinkedIn
            </a>
            <a href={contact.github} target="_blank" rel="noopener noreferrer me">
              GitHub
            </a>
            <a href="https://somoskilo.com" target="_blank" rel="noopener noreferrer">
              KILO
            </a>
            <a href={contact.agency} target="_blank" rel="noopener noreferrer">
              ZonaJujuy
            </a>
            <a href={es ? '/en' : '/'} hrefLang={es ? 'en' : 'es'}>
              {es ? 'English' : 'Español'}
            </a>
          </nav>
        </div>
      </footer>

      <a className="wa-float" href={wa} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
        <IconBrandWhatsapp size={24} />
        <span>{es ? 'Hablemos' : "Let's talk"}</span>
      </a>

      <Enhance />
    </>
  );
}

function FeaturedProject({ p, t, priority }: { p: Project; t: (typeof content)['es']; priority: boolean }) {
  return (
    <article className="project reveal">
      <div className="project-media">
        {p.status === 'soon' ? (
          <div className="soon-media">
            <div className="soon-phone">
              <IconDeviceMobile size={56} stroke={1.2} />
            </div>
          </div>
        ) : p.video ? (
          <video src={p.video} autoPlay muted loop playsInline preload="metadata" aria-label={p.name} />
        ) : p.images && p.images.length > 1 ? (
          <>
            <div className="gallery" tabIndex={0} aria-label={`${p.name} — capturas`}>
              {p.images.map((src, i) => (
                <Image
                  key={src}
                  src={src}
                  alt={`${p.name} — ${p.kind} (${i + 1})`}
                  width={1200}
                  height={750}
                  sizes="(max-width: 900px) 100vw, 640px"
                  priority={priority && i === 0}
                />
              ))}
            </div>
            <span className="gallery-hint">← {p.images.length} →</span>
          </>
        ) : p.images ? (
          <Image src={p.images[0]} alt={`${p.name} — ${p.kind}`} fill sizes="(max-width: 900px) 100vw, 640px" style={{ objectFit: 'cover' }} />
        ) : null}
      </div>
      <div className="project-body">
        <span className="project-kind">{p.kind}</span>
        <h3>{p.name}</h3>
        <p>{p.summary}</p>
        <div className="outcome">
          <IconTrendingUp size={18} />
          {p.outcome}
        </div>
        <ul className="tags">
          {p.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        <div className="project-actions">
          {p.status === 'soon' ? (
            <span className="status-soon">
              <IconClock size={16} />
              {t.soon}
            </span>
          ) : (
            p.url && (
              <a className="btn btn-ghost btn-sm" href={p.url} target="_blank" rel="noopener noreferrer">
                {t.visit}
                <IconArrowUpRight size={16} />
              </a>
            )
          )}
          {p.playStore && (
            <a className="btn btn-ghost btn-sm" href={p.playStore} target="_blank" rel="noopener noreferrer">
              <IconBrandGooglePlay size={16} />
              {t.playStore}
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
