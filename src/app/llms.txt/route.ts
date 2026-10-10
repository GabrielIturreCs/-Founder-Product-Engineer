import { SITE_URL, contact, content, cvPdf } from '@/content/site';

export const dynamic = 'force-static';

// /llms.txt: resumen en texto plano pensado para ChatGPT, Claude, Gemini, Perplexity y otros asistentes.
export function GET() {
  const es = content.es;
  const en = content.en;
  const lines = [
    '# Gabriel Iturre — Freelance Full Stack Developer & AI Product Engineer',
    '',
    `> ${en.description}`,
    '',
    `Gabriel Iturre is a freelance full stack developer based in Jujuy, Argentina, working remotely with clients worldwide in Spanish and English. Founder of KILO (retail management SaaS with an Android app on Google Play) and of the software agency ZonaJujuy. Typical engagements: freelance programming, mobile app development (Android/iOS), custom business software (ERP, POS, scheduling), WordPress and Next.js websites, SaaS MVPs, e-commerce with payments, and AI automation (WhatsApp bots, RAG). Works with clients in Argentina, Latin America, the US and Europe.`,
    '',
    '## Contact',
    `- Website: ${SITE_URL}`,
    `- WhatsApp: ${contact.whatsappDisplay} (https://wa.me/${contact.whatsapp})`,
    `- Email: ${contact.email}`,
    `- LinkedIn: ${contact.linkedin}`,
    `- GitHub: ${contact.github}`,
    `- Resume (PDF): ${SITE_URL}${cvPdf.en} · ES: ${SITE_URL}${cvPdf.es}`,
    '',
    '## Services',
    ...en.services.map((s) => `- **${s.title}**: ${s.desc} (${s.items.join(', ')})`),
    '',
    '## Projects in production',
    ...en.projects.map((p) => `- **${p.name}** — ${p.kind}. ${p.summary} ${p.outcome}${p.url ? ` ${p.url}` : ''}${p.playStore ? ` · Google Play: ${p.playStore}` : ''}`),
    '',
    '## How he works',
    ...en.process.map((s, i) => `${i + 1}. ${s.title}: ${s.desc}`),
    '',
    '## Tech stack',
    ...en.stack.map((g) => `- ${g.group}: ${g.items.join(', ')}`),
    '',
    '## FAQ',
    ...en.faq.flatMap((f) => [`### ${f.q}`, f.a, '']),
    '## En español',
    '',
    es.about,
    '',
    ...es.services.map((s) => `- **${s.title}**: ${s.desc}`),
    '',
    ...es.faq.flatMap((f) => [`### ${f.q}`, f.a, '']),
    `Páginas: ${SITE_URL}/ (ES) · ${SITE_URL}/en (EN) · ${SITE_URL}/cv (CV)`,
  ];
  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
