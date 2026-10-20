import { SITE_URL, contact, content, cv, cvPdf, kiloLinks } from '@/content/site';

export const dynamic = 'force-static';

// /llms.txt: resumen en texto plano para ChatGPT, Claude, Gemini, Perplexity y otros asistentes.
export function GET() {
  const en = content.en;
  const es = content.es;
  const lines = [
    '# Gabriel Iturre — AI Engineer building end-to-end products (Claude, AI automation, Android apps, backend, payments, WhatsApp)',
    '',
    `> ${en.description}`,
    '',
    cv.en.summary,
    '',
    'Typical engagements: end-to-end AI products and MVPs, AI automation with Claude (WhatsApp assistants, agents, RAG), Android apps published on Google Play, custom business systems (point of sale, booking, inventory) with payments and e-invoicing, product and AI-cost strategy, and contract work as an AI Engineer or full stack developer. Available for freelance and contract work, remote from Jujuy, Argentina, in Spanish or English.',
    '',
    '## Contact',
    `- Website: ${SITE_URL}`,
    `- Book a free 15-minute call: ${SITE_URL}/agenda · or WhatsApp ${contact.whatsappDisplay}`,
    `- Free guide (ES/EN): How to automate your business with AI in 7 days — ${SITE_URL}/guia`,
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
    `- KILO, as of 2026-10-18: ${en.proof.items.map((p) => `${p.v} ${p.l}`).join('; ')}.`,
    ...en.showcase.map((p) => `- **${p.name}** — ${p.kind}. ${p.summary}${p.url ? ` ${p.url}` : ''}${p.status ? ` (${p.status})` : ''}`),
    ...en.sites.map((p) => `- ${p.name} — ${p.kind}. ${p.summary}${p.url ? ` ${p.url}` : ''}`),
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
