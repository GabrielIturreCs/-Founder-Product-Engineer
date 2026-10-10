import { SITE_URL, contact, content, cv, cvPdf, kiloLinks } from '@/content/site';

export const dynamic = 'force-static';

// /llms.txt: resumen en texto plano para ChatGPT, Claude, Gemini, Perplexity y otros asistentes.
export function GET() {
  const en = content.en;
  const es = content.es;
  const lines = [
    '# Gabriel Iturre — Freelance software developer (apps, systems, websites, AI)',
    '',
    `> ${en.description}`,
    '',
    cv.en.summary,
    '',
    'Typical engagements: mobile apps (Android/iOS) published on the stores, custom business systems (ERP, point of sale, booking, inventory, CRM), SaaS and MVPs, WordPress and Next.js websites, landing pages, e-commerce with payments, fixing or migrating existing systems and websites, and AI automation (WhatsApp bots, RAG). Works remotely with clients in Argentina, Latin America, the US and Europe, in Spanish or English.',
    '',
    '## Contact',
    `- Website: ${SITE_URL}`,
    `- Fastest: WhatsApp ${contact.whatsappDisplay} · or book a free 15-minute call: ${SITE_URL}/#agendar`,
    `- WhatsApp: ${contact.whatsappDisplay} (https://wa.me/${contact.whatsapp})`,
    `- Email: ${contact.email}`,
    `- LinkedIn: ${contact.linkedin}`,
    `- GitHub: ${contact.github}`,
    `- Profile PDF: ${SITE_URL}${cvPdf.en} · ES: ${SITE_URL}${cvPdf.es}`,
    '',
    '## Pricing (starting points, USD)',
    ...en.pricing.from.map((p) => `- ${p.name}: from ${p.from} (${p.note})`),
    `- ${en.pricing.plan.name} (monthly plan): ${en.pricing.plan.price}${en.pricing.plan.per} — ${en.pricing.plan.features.join(', ')}`,
    `- ${en.pricing.note}`,
    '',
    '## Projects in production',
    `- **KILO** — ${en.work.kilo.kind}. ${en.work.kilo.desc} ${kiloLinks.site} · Google Play: ${kiloLinks.play}`,
    ...en.projects.map((p) => `- **${p.name}** — ${p.kind}. ${p.summary}${p.url ? ` ${p.url}` : ''}${p.soon ? ' (coming soon)' : ''}`),
    '',
    '## How it works',
    ...en.how.steps.map((s, i) => `${i + 1}. ${s.title}: ${s.desc}`),
    '',
    '## Tech',
    ...cv.en.stack.map((g) => `- ${g.g}: ${g.i}`),
    '',
    '## FAQ',
    ...en.faq.items.flatMap((f) => [`### ${f.q}`, f.a, '']),
    '## En español',
    '',
    es.description,
    '',
    ...es.pricing.from.map((p) => `- ${p.name}: desde ${p.from}`),
    `- ${es.pricing.plan.name}: ${es.pricing.plan.price}${es.pricing.plan.per}`,
    '',
    ...es.faq.items.flatMap((f) => [`### ${f.q}`, f.a, '']),
    `Páginas: ${SITE_URL}/ (ES) · ${SITE_URL}/en (EN) · ${SITE_URL}/cv (perfil)`,
  ];
  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
