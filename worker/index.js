// Worker de gabrieliturre.tech: sirve el sitio estático (out/) y guarda los contactos.
//   POST /api/guia   → correo de quien descarga la guía gratis
//   POST /api/agenda → pedido de llamada (día, hora y mensaje)
// Cada contacto queda en KV (binding LEADS; en el panel: Storage & Databases → KV → gabrieliturre-leads)
// y, si está el secreto RESEND_API_KEY, también le llega a Gabriel por email.

const TO = 'gabriel13iturre@gmail.com';
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_PER_HOUR = 10; // envíos por IP

const json = (data, status = 200) =>
  new Response(JSON.stringify(data), { status, headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' } });
const clip = (v, n) => String(v ?? '').trim().slice(0, n);
const esc = (v) => String(v).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

function parse(kind, body) {
  const lang = body.lang === 'en' ? 'en' : 'es';
  const email = clip(body.email, 200);
  if (!EMAIL.test(email)) return null;
  if (kind === 'guia') return { email, name: clip(body.name, 120), lang, origin: clip(body.origin, 200) };
  const name = clip(body.name, 120);
  const date = clip(body.date, 10);
  const time = clip(body.time, 5);
  if (name.length < 2 || !/^\d{4}-\d{2}-\d{2}$/.test(date) || !/^\d{2}:\d{2}$/.test(time)) return null;
  return { email, name, lang, date, time, message: clip(body.message, 3000) };
}

async function overLimit(env, request) {
  const ip = request.headers.get('cf-connecting-ip') || 'sin-ip';
  const key = `rl:${ip}`;
  const n = Number((await env.LEADS.get(key)) || 0);
  if (n >= MAX_PER_HOUR) return true;
  await env.LEADS.put(key, String(n + 1), { expirationTtl: 3600 });
  return false;
}

async function notify(env, kind, lead) {
  const guia = kind === 'guia';
  const subject = guia ? `Guía descargada: ${lead.email}` : `Pedido de llamada: ${lead.name} — ${lead.date} ${lead.time} (GMT-3)`;
  const rows = Object.entries(lead)
    .filter(([, v]) => v)
    .map(([k, v]) => `<b>${esc(k)}:</b> ${esc(v)}`)
    .join('<br/>');
  await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { authorization: `Bearer ${env.RESEND_API_KEY}`, 'content-type': 'application/json' },
    body: JSON.stringify({
      from: 'Portfolio gabrieliturre.tech <onboarding@resend.dev>',
      to: TO,
      reply_to: lead.email,
      subject,
      html: `<div style="font-family:system-ui,sans-serif;line-height:1.6;color:#111">${rows}<p style="color:#666;font-size:13px">Respondé este email para escribirle directo.</p></div>`,
    }),
  }).catch(() => {});
}

const worker = {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    if (url.hostname === 'www.gabrieliturre.tech') {
      url.hostname = 'gabrieliturre.tech';
      return Response.redirect(url.toString(), 301);
    }
    if (!url.pathname.startsWith('/api/')) return env.ASSETS.fetch(request);

    const kind = url.pathname === '/api/guia' ? 'guia' : url.pathname === '/api/agenda' ? 'agenda' : null;
    if (!kind) return json({ ok: false }, 404);
    if (request.method !== 'POST') return json({ ok: false }, 405);
    const origin = request.headers.get('origin');
    if (origin && new URL(origin).host !== url.host) return json({ ok: false }, 403);

    let body;
    try {
      body = await request.json();
    } catch {
      return json({ ok: false }, 400);
    }
    if (body && body.company) return json({ ok: true }); // campo trampa para bots
    const lead = parse(kind, body || {});
    if (!lead) return json({ ok: false }, 400);
    if (await overLimit(env, request)) return json({ ok: false }, 429);

    const at = new Date().toISOString();
    const key = `${kind}:${at}:${crypto.randomUUID().slice(0, 8)}`;
    await env.LEADS.put(key, JSON.stringify({ kind, at, ...lead, country: request.cf?.country || '' }), { metadata: { email: lead.email, name: lead.name } });
    if (env.RESEND_API_KEY) ctx.waitUntil(notify(env, kind, lead));
    return json({ ok: true });
  },
};

export default worker;
