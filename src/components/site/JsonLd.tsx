import { SITE_URL, contact, content, type Lang } from '@/content/site';

// Datos estructurados (schema.org) para Google y para que los asistentes de IA
// entiendan quién es Gabriel, qué ofrece y dónde trabaja.
export function JsonLd({ lang }: { lang: Lang }) {
  const t = content[lang];
  const pageUrl = `${SITE_URL}${lang === 'es' ? '/' : '/en'}`;
  const personId = `${SITE_URL}/#gabriel`;
  const serviceId = `${SITE_URL}/#service`;

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
        jobTitle: lang === 'es' ? 'Desarrollador Full Stack freelance y AI Product Engineer' : 'Freelance Full Stack Developer & AI Product Engineer',
        description: t.about,
        knowsLanguage: ['es', 'en'],
        alumniOf: { '@type': 'CollegeOrUniversity', name: 'Universidad Nacional de Jujuy' },
        address: { '@type': 'PostalAddress', addressLocality: contact.city, addressRegion: contact.region, addressCountry: contact.country },
        founder: [
          { '@type': 'Organization', name: 'KILO', url: 'https://somoskilo.com' },
          { '@type': 'Organization', name: 'ZonaJujuy', url: contact.agency },
        ],
        knowsAbout: [
          'Desarrollo de software a medida', 'Desarrollo de apps Android', 'Desarrollo de apps iOS', 'React', 'Next.js', 'Node.js',
          'NestJS', 'TypeScript', 'PostgreSQL', 'WordPress', 'SaaS', 'ERP', 'Punto de venta', 'E-commerce', 'Mercado Pago', 'Stripe',
          'Facturación electrónica AFIP', 'WhatsApp Cloud API', 'Inteligencia artificial', 'RAG', 'Docker',
        ],
        sameAs: [contact.linkedin, contact.github, contact.agency, 'https://somoskilo.com'],
      },
      {
        '@type': 'ProfessionalService',
        '@id': serviceId,
        name: lang === 'es' ? 'Gabriel Iturre — Desarrollo de software a medida' : 'Gabriel Iturre — Custom software development',
        url: SITE_URL,
        image: `${SITE_URL}${contact.photo}`,
        description: t.description,
        founder: { '@id': personId },
        email: contact.email,
        telephone: `+${contact.whatsapp}`,
        priceRange: '$$',
        address: { '@type': 'PostalAddress', addressLocality: contact.city, addressRegion: contact.region, addressCountry: contact.country },
        areaServed: ['AR', 'Latin America', 'US', 'ES', 'Worldwide'],
        availableLanguage: ['Spanish', 'English'],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: t.nav.services,
          itemListElement: t.services.map((s) => ({
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name: s.title, description: s.desc, provider: { '@id': personId } },
          })),
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
        mainEntity: t.faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      },
      {
        '@type': 'SoftwareApplication',
        name: 'KILO',
        url: 'https://somoskilo.com',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web, Android, Windows',
        description: t.projects[0].summary,
        author: { '@id': personId },
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'ARS' },
      },
    ],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph).replace(/</g, '\\u003c') }} />;
}
