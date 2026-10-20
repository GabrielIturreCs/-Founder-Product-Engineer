import Image from 'next/image';
import {
  IconArrowRight,
  IconArrowUpRight,
  IconBolt,
  IconBrandWhatsapp,
  IconBuildingStore,
  IconBulb,
  IconCalendarEvent,
  IconChartLine,
  IconCheck,
  IconChevronDown,
  IconCode,
  IconDiamond,
  IconFileCertificate,
  IconMessageChatbot,
  IconRocket,
  IconSend,
  IconSparkles,
  IconStack2,
  IconTag,
  IconUsersGroup,
  IconWallet,
} from '@tabler/icons-react';
import { content, contact, cvPdf, kiloLinks, landings, whatsappLink, type Lang, type Project } from '@/content/site';
import { BookingEmbed } from './BookingEmbed';
import { Dock } from './Dock';
import { GuideForm } from './GuideForm';
import { JsonLd } from './JsonLd';
import { Reveal } from './Reveal';
import { KiloStage, ProjectStage } from './Showcase';

const benefitIcons = { price: IconTag, fast: IconBolt, quality: IconDiamond, all: IconStack2, code: IconCode, ai: IconSparkles, business: IconChartLine } as const;
const serviceIcons = { product: IconRocket, bot: IconMessageChatbot, system: IconBuildingStore, strategy: IconBulb, team: IconUsersGroup } as const;
const gradients = ['g-green', 'g-blue', 'g-sun', 'g-ink', 'g-green', 'g-blue'];

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
  const wa = whatsappLink(t.cta.waText);
  const half = Math.ceil(t.tags.length / 2);
  const rowA = t.tags.slice(0, half);
  const rowB = t.tags.slice(half);
  const book = `${home}#agendar`;
  const titleWords = t.hero.title[0].split(' ');

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
          <nav className="top-links hide-sm" aria-label={es ? 'Secciones' : 'Sections'}>
            <a href={`${home}#proyectos`}>{t.nav.work}</a>
            <a href={`${home}#servicios`}>{t.nav.services}</a>
            <a href={`${home}#guia`}>{t.nav.guide}</a>
            <a href={`${home}#precios`}>{t.nav.pricing}</a>
          </nav>
          <div className="top-actions">
            <a className="btn hide-sm" href={wa} target="_blank" rel="noopener noreferrer">
              <IconBrandWhatsapp size={16} />
              {t.nav.call}
            </a>
            <a className="btn btn-ink" href={book}>
              <IconCalendarEvent size={16} />
              {t.nav.book}
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
                {titleWords.map((w, i) => (
                  <span className="w" key={'a' + i} style={{ ['--i' as string]: i }}>
                    {w}{' '}
                  </span>
                ))}
                <span className="w serif" style={{ ['--i' as string]: titleWords.length }}>
                  {t.hero.title[1]}{' '}
                </span>
                {t.hero.title[2].split(' ').map((w, i) => (
                  <span className="w" key={'b' + i} style={{ ['--i' as string]: titleWords.length + 1 + i }}>
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
                    {[kiloLinks.screens[2], kiloLinks.screens[0], kiloLinks.screens[3], kiloLinks.screens[5]].map((s) => (
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
              <a className="btn btn-white" href={book}>
                <IconCalendarEvent size={16} />
                {t.hero.cardBtn}
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

          {/* ---------- Prueba: KILO en números ---------- */}
          <section className="wrap proof-wrap" aria-label={t.proof.label}>
            <div className="proof reveal">
              {t.proof.items.map((p) => (
                <div key={p.l}>
                  <b>{p.v}</b>
                  <span>{p.l}</span>
                </div>
              ))}
            </div>
            <p className="proof-label reveal">{t.proof.label}</p>
          </section>

          {/* ---------- Logos ---------- */}
          <section className="wrap" aria-label={t.logosLabel}>
            <p className="eyebrow center reveal" style={{ marginBottom: 18 }}>
              {t.logosLabel}
            </p>
            <div className="logos logos-marquee reveal">
              <div className="logos-track">
                {[...Array(2)].flatMap((_, k) =>
                  ['KILO', 'Chefi', 'SLOT', 'Aevum', 'SUDO', 'Tu Bondi Jujuy', 'ZonaSalud', 'ZonaJujuy'].map((l) => (
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

          {/* ---------- Services ---------- */}
          <section className="wrap section" id="servicios">
            <div className="section-head reveal">
              <span className="pill">{t.services.pill}</span>
              <Title parts={t.services.title} />
              <p className="lead">{t.services.sub}</p>
            </div>
            <div className="services">
              {t.services.items.map((s, i) => {
                const Icon = serviceIcons[s.icon as keyof typeof serviceIcons];
                return (
                  <article className={`service reveal ${i === 0 ? 'wide' : ''}`} key={s.title} style={{ ['--d' as string]: `${(i % 3) * 0.06}s` }}>
                    <span className={`service-icon noise ${gradients[i]}`}>
                      <Icon size={26} stroke={1.6} />
                    </span>
                    <h3>{s.title}</h3>
                    <p>{s.desc}</p>
                    <ul className="chips">
                      {s.tags.map((x) => (
                        <li key={x}>{x}</li>
                      ))}
                    </ul>
                  </article>
                );
              })}
              <a className="service service-cta g-ink noise reveal" href={book}>
                <IconCalendarEvent size={28} stroke={1.6} />
                <h3>{t.hero.cardTitle}</h3>
                <p>{t.hero.cardSub}</p>
                <span className="btn btn-white">
                  {t.nav.book}
                  <IconArrowRight size={16} />
                </span>
              </a>
            </div>
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

            <KiloStage screens={kiloLinks.screens} landing={kiloLinks.landing} steps={t.work.kilo.steps} stepsLabel={t.work.kilo.title}>
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
            </KiloStage>

            <div className="sc-list">
              {t.showcase.map((p, i) => (
                <ProjectStage key={p.slug} p={p} visit={t.work.visit} stepsLabel={p.name} flip={i % 2 === 1} />
              ))}
            </div>

            <div className="wall g-ink noise reveal">
              <div className="wall-head">
                <Title parts={t.work.wallTitle} />
                <p className="lead">{t.work.wallSub}</p>
              </div>
              <div className="wall-stage">
                <div className="wall-plane">
                  {[landings.slice(0, 6), landings.slice(6)].map((row, r) => (
                    <div className={r ? 'wall-row rev' : 'wall-row'} key={r}>
                      {[...row, ...row].map((l, i) => (
                        <figure className="wall-card" key={l.name + i} aria-hidden={i >= row.length ? true : undefined}>
                          <div className="sc-bar">
                            <i />
                            <i />
                            <i />
                            <span>{l.name}</span>
                          </div>
                          <Image src={l.image} alt={i < row.length ? l.name : ''} width={960} height={600} sizes="360px" />
                        </figure>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <details className="more-work">
              <summary className="btn btn-lg">
                <span className="more-open">
                  {t.work.more} ({t.sites.length})
                </span>
                <span className="more-close">{t.work.less}</span>
                <IconChevronDown size={18} />
              </summary>
              <div className="work-grid">
                {t.sites.map((p, i) => (
                  <WorkCard key={p.slug} p={p} i={i} home={home} />
                ))}
              </div>
            </details>
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
              <Title parts={t.services.cloudTitle} />
              <p className="lead" style={{ marginTop: 14 }}>
                {t.services.cloudSub}
              </p>
            </div>
          </section>

          <div className="divider" />

          {/* ---------- Guía gratis ---------- */}
          <section className="wrap section" id="guia">
            <div className="guide reveal">
              <div className="guide-cover g-sun noise" aria-hidden="true">
                <div className="guide-book">
                  <small>{t.guide.cover[0]}</small>
                  <b>{t.guide.cover[1]}</b>
                  <span>Gabriel Iturre</span>
                  <i className="guide-lines">
                    <i />
                    <i />
                    <i />
                    <i />
                    <i />
                    <i />
                    <i />
                  </i>
                </div>
              </div>
              <div className="guide-body">
                <span className="pill">{t.guide.pill}</span>
                <Title parts={t.guide.title} />
                <p className="lead">{t.guide.sub}</p>
                <ul className="guide-list">
                  {t.guide.bullets.map((b) => (
                    <li key={b}>
                      <IconCheck size={16} />
                      {b}
                    </li>
                  ))}
                </ul>
                <GuideForm t={t} />
                <p className="guide-meta">{t.guide.pages}</p>
              </div>
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
                <a className="btn btn-lg" href={book}>
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

          {/* ---------- Agenda ---------- */}
          <section className="wrap section" id="agendar">
            <div className="section-head reveal">
              <span className="pill">{t.booking.pill}</span>
              <Title parts={t.booking.title} />
              <p className="lead">{t.booking.sub}</p>
            </div>
            <div className="agenda reveal">
              <BookingEmbed t={t} />
            </div>
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
        <footer className="final">
          <div className="wrap final-grid final-solo">
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
              <div className="final-actions">
                <a className="btn btn-white btn-lg" href={book}>
                  <IconCalendarEvent size={18} />
                  {t.nav.book}
                </a>
                <a className="final-wa" href={wa} target="_blank" rel="noopener noreferrer">
                  <IconBrandWhatsapp size={18} />
                  {t.cta.whatsapp}
                </a>
              </div>
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
              <a href={`${home}#guia`}>{t.nav.guide}</a>
              <a href={contact.linkedin} target="_blank" rel="noopener noreferrer me">
                LinkedIn
              </a>
              <a href={contact.github} target="_blank" rel="noopener noreferrer me">
                GitHub
              </a>
              <a href={kiloLinks.site} target="_blank" rel="noopener noreferrer">
                KILO
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

function WorkCard({ p, i, home }: { p: Project; i: number; home: string }) {
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
          <span>{p.url ? p.url.replace(/^https?:\/\//, '') : ''}</span>
        </div>
        <div className="browser-shot">{p.image && <Image src={p.image} alt={`${p.name} — ${p.kind}`} width={1440} height={900} sizes="(max-width: 760px) 100vw, 520px" />}</div>
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
