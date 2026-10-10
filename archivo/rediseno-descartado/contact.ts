'use server';

import { Resend } from 'resend';

export type ContactState = { status: 'idle' | 'ok' | 'error' };

const TO = 'gabriel13iturre@gmail.com';

function esc(v: string) {
  return v.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);
}

function field(fd: FormData, key: string, max: number) {
  return String(fd.get(key) ?? '').trim().slice(0, max);
}

export async function sendContact(_prev: ContactState, fd: FormData): Promise<ContactState> {
  // Honeypot: los bots completan este campo oculto.
  if (field(fd, 'company', 200)) return { status: 'ok' };

  const name = field(fd, 'name', 120);
  const email = field(fd, 'email', 200);
  const type = field(fd, 'type', 80);
  const budget = field(fd, 'budget', 80);
  const message = field(fd, 'message', 5000);
  const lang = field(fd, 'lang', 5) === 'en' ? 'en' : 'es';

  if (name.length < 2 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || message.length < 5) {
    return { status: 'error' };
  }

  const key = process.env.RESEND_API_KEY;
  if (!key) {
    console.error('RESEND_API_KEY no configurada');
    return { status: 'error' };
  }

  try {
    const resend = new Resend(key);
    const { error } = await resend.emails.send({
      from: 'Portfolio gabrieliturre.tech <onboarding@resend.dev>',
      to: TO,
      replyTo: email,
      subject: `🚀 Nuevo lead: ${name} — ${type || 'Proyecto'}`,
      html: `
        <div style="font-family:system-ui,sans-serif;line-height:1.6;color:#111;max-width:600px">
          <h2 style="margin:0 0 12px">Nueva consulta desde el portfolio</h2>
          <p><b>Nombre:</b> ${esc(name)}<br/>
          <b>Email:</b> ${esc(email)}<br/>
          <b>Tipo:</b> ${esc(type)}<br/>
          <b>Presupuesto:</b> ${esc(budget)}<br/>
          <b>Idioma:</b> ${lang}</p>
          <p style="white-space:pre-wrap;background:#f4f6f8;padding:16px;border-radius:10px">${esc(message)}</p>
          <p style="color:#666;font-size:13px">Respondé este email para contestarle directamente.</p>
        </div>`,
    });
    if (error) {
      console.error('Resend error:', error);
      return { status: 'error' };
    }
    return { status: 'ok' };
  } catch (e) {
    console.error('Contact error:', e);
    return { status: 'error' };
  }
}
