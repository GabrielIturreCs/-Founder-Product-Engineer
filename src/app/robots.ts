import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/content/site';

// Permitimos explícitamente a buscadores y a los crawlers de IA
// (ChatGPT, Claude, Gemini, Perplexity…) para que recomienden el sitio.
const aiBots = [
  'GPTBot', 'OAI-SearchBot', 'ChatGPT-User', 'ClaudeBot', 'Claude-SearchBot', 'Claude-User', 'anthropic-ai',
  'Google-Extended', 'PerplexityBot', 'Perplexity-User', 'Applebot-Extended', 'Bingbot', 'meta-externalagent', 'CCBot',
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      { userAgent: aiBots, allow: '/' },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
