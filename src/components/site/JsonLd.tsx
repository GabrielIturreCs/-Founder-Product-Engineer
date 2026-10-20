import { SITE_URL, contact, content, cv, kiloLinks, type Lang } from '@/content/site';

// Datos estructurados (schema.org) para Google y para los asistentes de IA.
export function JsonLd({ lang }: { lang: Lang }) {
  const t = content[lang];
  const pageUrl = `${SITE_URL}${lang === 'es' ? '/' : '/en'}`;
  const personId = `${SITE_URL}/#gabriel`;
  const serviceId = `${SITE_URL}/#service`;
  const address = { '@type': 'PostalAddress', addressRegion: contact.region, addressCountry: contact.country };

  const graph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': personId,
        name: contact.name,
        url: SITE_URL,
        image: `${SITE_URL}${contact.photo}`,
        email: `mailto:${contact.email}`,
        telephone: `+${contact.whatsapp}`,
        jobTitle: lang === 'es' ? 'AI Engineer y desarrollador full stack' : 'AI Engineer & full stack developer',
        description: cv[lang].summary,
        knowsLanguage: ['es', 'en'],
        address,
        founder: [
          { '@type': 'Organization', name: 'KILO', url: kiloLinks.site },
          { '@type': 'Organization', name: 'ZonaJujuy', url: contact.agency },
        ],
        knowsAbout: [...t.tags, 'AI engineering', 'Anthropic Claude', 'React', 'NestJS', 'TypeScript', 'Codex'],
        sameAs: [contact.linkedin, contact.github, contact.agency, kiloLinks.site],
      },
      {
        '@type': 'ProfessionalService',
        '@id': serviceId,
        name: lang === 'es' ? 'Gabriel Iturre — AI Engineer: producto con IA de punta a punta' : 'Gabriel Iturre — AI Engineer: end-to-end AI products',
        url: SITE_URL,
        image: `${SITE_URL}${contact.photo}`,
        description: t.description,
        founder: { '@id': personId },
        email: contact.email,
        telephone: `+${contact.whatsapp}`,
        priceRange: 'USD 290 – USD 10,000+',
        address,
        areaServed: ['AR', 'Latin America', 'US', 'ES', 'Worldwide'],
        availableLanguage: ['Spanish', 'English'],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: t.nav.pricing,
          itemListElement: [
            ...t.pricing.from.map((p) => ({
              '@type': 'Offer',
              name: p.name,
              description: p.note,
              priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'USD', minPrice: Number(p.from.replace(/[^\d]/g, '')) },
              itemOffered: { '@type': 'Service', name: p.name, provider: { '@id': personId } },
            })),
            {
              '@type': 'Offer',
              name: t.pricing.plan.name,
              description: t.pricing.plan.features.join(', '),
              priceSpecification: {
                '@type': 'UnitPriceSpecification',
                priceCurrency: 'USD',
                price: Number(t.pricing.plan.price.replace(/[^\d]/g, '')),
                unitText: 'MONTH',
              },
            },
          ],
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: 'Gabriel Iturre',
        inLanguage: ['es', 'en'],
        publisher: { '@id': personId },
      },
      {
        '@type': 'WebPage',
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        name: t.title,
        description: t.description,
        inLanguage: lang,
        about: { '@id': serviceId },
        isPartOf: { '@id': `${SITE_URL}/#website` },
      },
      {
        '@type': 'FAQPage',
        '@id': `${pageUrl}#faq`,
        mainEntity: t.faq.items.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      },
      {
        '@type': 'SoftwareApplication',
        name: 'KILO',
        url: kiloLinks.site,
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web, Android, Windows',
        description: t.work.kilo.desc,
        author: { '@id': personId },
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'ARS' },
      },
    ],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph).replace(/</g, '\\u003c') }} />;
}
