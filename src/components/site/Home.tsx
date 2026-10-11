import Image from 'next/image';
import {
  IconArrowRight,
  IconArrowUpRight,
  IconBolt,
  IconBrandWhatsapp,
  IconCheck,
  IconChevronDown,
  IconCode,
  IconDiamond,
  IconFileCertificate,
  IconHeartHandshake,
  IconSend,
  IconStack2,
  IconTag,
  IconWallet,
} from '@tabler/icons-react';
import { content, contact, cvPdf, kiloLinks, whatsappLink, type Lang, type Project, type SiteContent } from '@/content/site';
import { Booking } from './Booking';
import { Dock } from './Dock';
import { JsonLd } from './JsonLd';
import { Reveal } from './Reveal';

const benefitIcons = { price: IconTag, fast: IconBolt, quality: IconDiamond, all: IconStack2, code: IconCode, support: IconHeartHandshake } as const;
const gradients = ['g-sun', 'g-blue', 'g-green', 'g-ink', 'g-sun', 'g-blue'];

function Title({ parts, as: Tag = 'h2', className = 'h2' }: { parts: string[]; as?: 'h1' | 'h2'; className?: string }) {
  // parts: [antes, *acento en serif*, después]
  return (
    <Tag className={className}>
      {parts[0]} <span className="serif">{parts[1]}</span>
      {parts[2] ? <> {parts[2]}</> : null}
    </Tag>
  );
}

export function Home({ lang }: { lang: Lang }) {
  const t = content[lang];
  const es = lang === 'es';
  const home = es ? '/' : '/en';
  const cvHref = es ? '/cv' : '/en/cv';
  const featured = t.projects;
  const wa = whatsappLink(t.cta.waText);
  const half = Math.ceil(t.tags.length / 2);
  const rowA = t.tags.slice(0, half);
  const rowB = t.tags.slice(half);

  return (
    <>
      <JsonLd lang={lang} />
      <div className="progress" aria-hidden="true" />
      <div className="page" id="top">
        {/* ---------- Top ---------- */}
        <header className="wrap top">
          <a href={home} className="logo" aria-label="Gabriel Iturre">
            <span className="logo-mark">
              <Image src={contact.photo} alt="" width={60} height={60} priority />
            </span>
            Gabriel Iturre
          </a>
          <div className="top-actions">
            <a className="btn hide-sm" href={wa} target="_blank" rel="noopener noreferrer">
              <IconBrandWhatsapp size={16} />
              {t.nav.call}
            </a>
            <a className="btn btn-ink" href={`${home}#precios`}>
              {t.nav.seePricing}
            </a>
          </div>
        </header>

        <main>
          {/* ---------- Hero ---------- */}
          <section className="wrap hero">
            <div className="aurora" aria-hidden="true">
              <i />
              <i />
              <i />
            </div>
            <div>
              <p className="status reveal">
                <span className="dot" aria-hidden="true" />
                {t.hero.status}
              </p>
              <h1 className="h1 words">
                {t.hero.title[0].split(' ').map((w, i) => (
                  <span className="w" key={'a' + i} style={{ ['--i' as string]: i }}>
                    {w}{' '}
                  </span>
                ))}
                <span className="w serif" style={{ ['--i' as string]: t.hero.title[0].split(' ').length }}>
                  {t.hero.title[1]}{' '}
                </span>
                {t.hero.title[2].split(' ').map((w, i) => (
                  <span className="w" key={'b' + i} style={{ ['--i' as string]: t.hero.title[0].split(' ').length + 1 + i }}>
                    {w}{' '}
                  </span>
                ))}
              </h1>
              <p className="lead hero-sub reveal" style={{ ['--d' as string]: '0.12s' }}>
                {t.hero.sub}
              </p>
              <div className="hello reveal" style={{ ['--d' as string]: '0.18s' }}>
                <Image src={contact.photo} alt="Gabriel Iturre" width={92} height={92} />
                <div>
                  <b>{t.hero.hello}</b>
                  <span>{t.hero.helloSub}</span>
                </div>
              </div>
            </div>

            <div className="join g-green noise reveal tilt" data-tilt="6" style={{ ['--d' as string]: '0.15s' }}>
              <span className="glare" aria-hidden="true" />
              <div className="floaty" aria-hidden="true">
                <div className="phone">
                  <div className="phone-screen screens">
                    {[kiloLinks.screensA[0], kiloLinks.screensB[1], kiloLinks.screensA[1], kiloLinks.screensB[0]].map((s) => (
                      <Image key={s} src={s} alt="" width={540} height={1200} sizes="160px" />
                    ))}
                  </div>
                </div>
              </div>
              <span className="join-badge">
                <i aria-hidden="true" />
                {t.hero.cardBadge}
              </span>
              <p className="join-title">{t.hero.cardTitle}</p>
              <p className="join-sub">{t.hero.cardSub}</p>
              <a className="btn btn-white" href={`${home}#precios`}>
                {t.nav.seePricing}
              </a>
              <a className="join-call" href={wa} target="_blank" rel="noopener noreferrer">
                <Image src={contact.photo} alt="" width={84} height={84} />
                <span>
                  <b>{t.hero.cardCall}</b>
                  <span>{t.hero.cardCallSub}</span>
                </span>
                <span className="arrow" aria-hidden="true">
                  <IconArrowRight size={18} />
                </span>
              </a>
            </div>
          </section>

          {/* ---------- Logos ---------- */}
          <section className="wrap" aria-label={t.logosLabel}>
            <p className="eyebrow center reveal" style={{ marginBottom: 18 }}>
              {t.logosLabel}
            </p>
            <div className="logos logos-marquee reveal">
              <div className="logos-track">
                {[...Array(2)].flatMap((_, k) =>
                  ['KILO', 'ZonaJujuy', 'Chefi', 'SLOT', 'Aevum', 'ZonaSalud', 'Inti Mates', 'Petit'].map((l) => (
                    <span key={l + k} aria-hidden={k === 1 ? true : undefined}>
                      {l}
                    </span>
                  )),
                )}
              </div>
            </div>
          </section>

          {/* ---------- How ---------- */}
          <section className="wrap section">
            <div className="section-head reveal">
              <Title parts={t.how.title} />
            </div>
            <div className="steps">
              <article className="step g-sun noise reveal">
                <div className="step-visual" aria-hidden="true">
                  <div className="wa">
                    <div className="wa-head">
                      <Image src={contact.photo} alt="" width={56} height={56} />
                      <span>
                        <b>Gabriel Iturre</b>
                        <small>{es ? 'en línea' : 'online'}</small>
                      </span>
                    </div>
                    <div className="wa-body">
                      <span className="wa-msg in">
                        {t.how.chat[0]}
                        <time>10:02</time>
                      </span>
                      <span className="wa-typing">
                        <i />
                        <i />
                        <i />
                      </span>
                      <span className="wa-msg out">
                        {t.how.chat[1]}
                        <span className="wa-doc">
                          <i>PDF</i>
                          {t.how.chat[2]}
                        </span>
                        <time>
                          10:03 <b className="ticks">✓✓</b>
                        </time>
                      </span>
                      <span className="wa-msg in last">
                        {t.how.chat[3]}
                        <time>10:04</time>
                      </span>
                    </div>
                  </div>
                </div>
                <h3>{t.how.steps[0].title}</h3>
                <p>{t.how.steps[0].desc}</p>
              </article>
              <article className="step g-blue noise reveal" style={{ ['--d' as string]: '0.08s' }}>
                <div className="step-visual" aria-hidden="true">
                  <div className="marquee">
                    <div className="marquee-row">
                      {[...rowA, ...rowA].map((x, i) => (
                        <span key={i}>{x}</span>
                      ))}
                    </div>
                    <div className="marquee-row rev">
                      {[...rowB, ...rowB].map((x, i) => (
                        <span key={i}>{x}</span>
                      ))}
                    </div>
                    <div className="marquee-row">
                      {[...rowB.slice(3), ...rowA.slice(0, 6), ...rowB.slice(3), ...rowA.slice(0, 6)].map((x, i) => (
                        <span key={i}>{x}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <h3>{t.how.steps[1].title}</h3>
                <p>{t.how.steps[1].desc}</p>
              </article>
              <article className="step g-green noise reveal" style={{ ['--d' as string]: '0.16s' }}>
                <div className="step-visual" aria-hidden="true">
                  <div className="upload">
                    <span className="upload-glow" />
                    <svg className="upload-ring" viewBox="0 0 120 120">
                      <circle cx="60" cy="60" r="54" />
                      <circle className="ring-fill" cx="60" cy="60" r="54" />
                    </svg>
                    <span className="upload-play">
                      <PlayLogo />
                    </span>
                    <span className="upload-app" />
                    <span className="upload-check">✓</span>
                    {[0, 1, 2, 3, 4, 5].map((n) => (
                      <i key={n} className="spark" style={{ ['--a' as string]: `${n * 60}deg` }} />
                    ))}
                  </div>
                </div>
                <h3>{t.how.steps[2].title}</h3>
                <p>{t.how.steps[2].desc}</p>
              </article>
            </div>
            <p className="note reveal">{t.note}</p>
          </section>

          <div className="divider" />

          {/* ---------- Benefits ---------- */}
          <section className="wrap section">
            <div className="section-head reveal">
              <span className="pill">{t.benefits.pill}</span>
              <Title parts={t.benefits.title} />
              <p className="lead">{t.benefits.sub}</p>
            </div>
            <div className="benefits">
              {t.benefits.items.map((b, i) => {
                const Icon = benefitIcons[b.icon as keyof typeof benefitIcons];
                return (
                  <article className="benefit reveal" key={b.title} style={{ ['--d' as string]: `${(i % 3) * 0.06}s` }}>
                    <div className={`benefit-icon noise ${gradients[i]}`}>
                      <Icon size={44} stroke={1.5} />
                    </div>
                    <h3>{b.title}</h3>
                    <p>{b.desc}</p>
                  </article>
                );
              })}
            </div>
          </section>

          <div className="divider" />

          {/* ---------- Work ---------- */}
          <section className="wrap section" id="proyectos">
            <div className="section-head reveal">
              <span className="pill">{t.work.pill}</span>
              <Title parts={t.work.title} />
              <p className="lead">{t.work.sub}</p>
            </div>

            <article className="kilo g-ink noise reveal">
              <div>
                <span className="kilo-kind">{t.work.kilo.kind}</span>
                <h3>{t.work.kilo.title}</h3>
                <p>{t.work.kilo.desc}</p>
                <div className="kilo-stats">
                  {t.work.kilo.stats.map((s) => (
                    <div key={s.l}>
                      <b>{s.v}</b>
                      <span>{s.l}</span>
                    </div>
                  ))}
                </div>
                <div className="kilo-actions">
                  <a className="btn" href={kiloLinks.site} target="_blank" rel="noopener noreferrer">
                    {t.work.kilo.site}
                    <IconArrowUpRight size={16} />
                  </a>
                  <a className="play-badge" href={kiloLinks.play} target="_blank" rel="noopener noreferrer" aria-label={`KILO — ${t.work.kilo.play}`}>
                    <Image src={kiloLinks.badge} alt="Disponible en Google Play" width={150} height={58} />
                  </a>
                </div>
              </div>
              <div className="kilo-phones" aria-hidden="true">
                <div className="phone phone-3d tilt" data-tilt="12">
                  <span className="glare" />
                  <div className="phone-screen screens">
                    {[kiloLinks.screensA[2], kiloLinks.screensB[2], kiloLinks.screensA[0], kiloLinks.screensB[1]].map((s) => (
                      <Image key={s} src={s} alt={`KILO app — ${s.split('/').pop()?.replace('.webp', '')}`} width={540} height={1200} sizes="(max-width: 900px) 60vw, 260px" />
                    ))}
                  </div>
                </div>
              </div>
            </article>

            <div className="work-grid">
              {featured.slice(0, 6).map((p, i) => (
                <WorkCard key={p.slug} p={p} i={i} t={t} home={home} />
              ))}
            </div>
            {featured.length > 6 && (
              <details className="more-work">
                <summary className="btn btn-lg">
                  <span className="more-open">
                    {t.work.more} ({featured.length - 6})
                  </span>
                  <span className="more-close">{t.work.less}</span>
                  <IconChevronDown size={18} />
                </summary>
                <div className="work-grid">
                  {featured.slice(6).map((p, i) => (
                    <WorkCard key={p.slug} p={p} i={i} t={t} home={home} />
                  ))}
                </div>
              </details>
            )}
          </section>

          {/* ---------- Services cloud ---------- */}
          <section className="wrap" style={{ paddingBottom: 110 }}>
            <div className="cloud reveal">
              <div className="cloud-tags">
                {t.tags.map((x) => (
                  <span key={x}>{x}</span>
                ))}
                <span>{t.services.more}</span>
              </div>
              <Title parts={t.services.title} />
              <p className="lead" style={{ marginTop: 14 }}>
                {t.services.sub}
              </p>
            </div>
          </section>

          <div className="divider" />

          {/* ---------- Pricing ---------- */}
          <section className="wrap section" id="precios">
            <div className="section-head reveal">
              <span className="pill">{t.pricing.pill}</span>
              <Title parts={t.pricing.title} />
            </div>
            <div className="pricing">
              <div className="price-art g-sun noise reveal">
                <span className="join-badge">
                  <i aria-hidden="true" />
                  {t.hero.cardBadge}
                </span>
                <h3>{t.hero.cardTitle}</h3>
              </div>
              <div className="plan reveal" style={{ ['--d' as string]: '0.08s' }}>
                <div className="plan-top">
                  <h3>{t.pricing.plan.name}</h3>
                  <span>{t.pricing.plan.badge}</span>
                </div>
                <p className="plan-price">
                  {t.pricing.plan.price}
                  <small>{t.pricing.plan.per}</small>
                </p>
                <ul className="plan-list">
                  {t.pricing.plan.features.map((f) => (
                    <li key={f}>
                      <IconCheck size={16} />
                      {f}
                    </li>
                  ))}
                </ul>
                <a className="btn btn-lg" href={wa} target="_blank" rel="noopener noreferrer">
                  {t.pricing.plan.cta}
                  <IconArrowRight size={18} />
                </a>
              </div>
            </div>
            <div className="from">
              {t.pricing.from.map((p, i) => (
                <div className="from-card reveal" key={p.name} style={{ ['--d' as string]: `${i * 0.05}s` }}>
                  <span>{p.name}</span>
                  <b>
                    <em>{t.pricing.fromLabel}</em>
                    {p.from}
                  </b>
                  <small>{p.note}</small>
                </div>
              ))}
            </div>
            <div className="perks">
              {t.pricing.perks.map((p, i) => (
                <div className="perk reveal" key={p.title}>
                  {i === 0 ? <IconFileCertificate size={22} /> : <IconWallet size={22} />}
                  <div>
                    <b>{p.title}</b>
                    <span>{p.desc}</span>
                  </div>
                </div>
              ))}
            </div>
            <p className="price-note reveal">{t.pricing.note}</p>
          </section>

          <div className="divider" />

          {/* ---------- FAQ ---------- */}
          <section className="wrap section" id="faq">
            <div className="faq-grid">
              <div>
                <h2 className="h2 reveal">
                  <span className="serif">{t.faq.title[0]}</span> {t.faq.title[1]}
                </h2>
                <div className="faq-list">
                  {t.faq.items.map((f) => (
                    <details key={f.q}>
                      <summary>
                        <h3 style={{ font: 'inherit' }}>{f.q}</h3>
                        <IconChevronDown size={18} />
                      </summary>
                      <p>{f.a}</p>
                    </details>
                  ))}
                </div>
              </div>
              <aside className="faq-card g-sun noise reveal">
                <Image src={contact.photo} alt="" width={128} height={128} />
                <h3>{t.faq.callTitle}</h3>
                <a className="btn btn-white" href={wa} target="_blank" rel="noopener noreferrer">
                  {t.faq.callBtn}
                </a>
                <a className="mail" href={`mailto:${contact.email}`}>
                  <IconSend size={18} />
                  <span>
                    <small>{t.faq.emailLabel}</small>
                    {contact.email}
                  </span>
                </a>
              </aside>
            </div>
          </section>
        </main>

        {/* ---------- Final CTA + footer ---------- */}
        <footer className="final" id="agendar">
          <div className="wrap final-grid">
            <div className="reveal">
              <a href={home} className="foot-brand">
                <span className="logo-mark">
                  <Image src={contact.photo} alt="" width={60} height={60} />
                </span>
                Gabriel Iturre
              </a>
              <h2 className="h2" style={{ marginTop: 28 }}>
                {t.cta.title[0]} {t.cta.title[1]} <span className="serif">{t.cta.aside}</span>
              </h2>
              <p className="lead">{t.cta.sub}</p>
              <a className="final-wa" href={whatsappLink(t.cta.waText)} target="_blank" rel="noopener noreferrer">
                <IconBrandWhatsapp size={18} />
                {t.cta.whatsapp}
              </a>
              <div className="bubbles-art" aria-hidden="true">
                {[
                  ['#10b981', 70, 0, 0],
                  ['#2563eb', 54, 52, -1.2],
                  ['#fb923c', 46, 96, -2.1],
                  ['#fde047', 38, 132, -3],
                  ['#f43f5e', 58, 160, -0.6],
                  ['#22d3ee', 34, 212, -2.6],
                ].map(([c, s, l, d], i) => (
                  <i key={i} style={{ background: c as string, width: s as number, height: s as number, left: l as number, animationDelay: `${d}s` }} />
                ))}
              </div>
            </div>
            <div className="reveal" style={{ ['--d' as string]: '0.1s' }}>
              <Booking t={t} />
            </div>
          </div>
          <div className="wrap foot">
            <div>
              <p>{t.footer.place}</p>
              <p style={{ marginTop: 4 }}>© {new Date().getFullYear()} {t.footer.rights} · gabrieliturre.tech</p>
            </div>
            <nav className="foot-links" aria-label="Footer">
              <a href={cvHref}>{t.footer.cv}</a>
              <a href={cvPdf[lang]} download>
                PDF
              </a>
              <a href={contact.linkedin} target="_blank" rel="noopener noreferrer me">
                LinkedIn
              </a>
              <a href={contact.github} target="_blank" rel="noopener noreferrer me">
                GitHub
              </a>
              <a href={kiloLinks.site} target="_blank" rel="noopener noreferrer">
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
      </div>

      <Dock t={t} />
      <Reveal />
    </>
  );
}

function WorkCard({ p, i, t, home }: { p: Project; i: number; t: SiteContent; home: string }) {
  return (
    <a
      className="work-card reveal tilt"
      data-tilt="4"
      href={p.url ?? `${home}#proyectos`}
      target={p.url ? '_blank' : undefined}
      rel={p.url ? 'noopener noreferrer' : undefined}
      style={{ ['--d' as string]: `${(i % 2) * 0.06}s` }}
    >
      <span className="glare" aria-hidden="true" />
      <div className="browser">
        <div className="browser-bar" aria-hidden="true">
          <i />
          <i />
          <i />
          <span>{p.url ? p.url.replace(/^https?:\/\//, '') : 'play.google.com'}</span>
        </div>
        <div className="browser-shot">
          {p.soon ? (
            <div className="soon-shot">
              <span className="pill soon-badge">{t.work.soon}</span>
              <div className="phone">
                <div className="phone-screen" style={{ background: 'linear-gradient(180deg,#0f3d2e,#0b0b0b)' }} />
              </div>
            </div>
          ) : (
            p.image && <Image src={p.image} alt={`${p.name} — ${p.kind}`} width={1440} height={900} sizes="(max-width: 760px) 100vw, 520px" />
          )}
        </div>
      </div>
      <div className="work-body">
        <div className="work-top">
          <h3>{p.name}</h3>
          <span>{p.year}</span>
        </div>
        <p className="work-kind">{p.kind}</p>
        <p>{p.summary}</p>
        <ul className="chips">
          {p.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
    </a>
  );
}

// Logo de Google Play (para indicar que la app está publicada en la tienda).
function PlayLogo() {
  return (
    <svg width="16" height="18" viewBox="0 0 16 18" aria-hidden="true">
      <path d="M.6.3C.4.5.3.8.3 1.2v15.6c0 .4.1.7.3.9l8.6-8.7L.6.3z" fill="#00D7FE" />
      <path d="M12.1 12 9.2 9 12.1 6l3.3 1.9c.9.5.9 1.4 0 2L12.1 12z" fill="#FFCE00" />
      <path d="M12.1 12 9.2 9 .6 17.7c.3.3.9.4 1.5 0L12.1 12z" fill="#FF3A44" />
      <path d="M12.1 6 2.1.3C1.5-.1.9 0 .6.3L9.2 9l2.9-3z" fill="#00F076" />
    </svg>
  );
}
