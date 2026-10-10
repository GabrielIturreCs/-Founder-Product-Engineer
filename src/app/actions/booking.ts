'use server';

import { Resend } from 'resend';

export type BookingInput = {
  name: string;
  email: string;
  message: string;
  date: string; // YYYY-MM-DD
  time: string; // HH:MM (GMT-3)
  lang: 'es' | 'en';
  company?: string; // honeypot
};

const TO = 'gabriel13iturre@gmail.com';

function esc(v: string) {
  return v.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);
}

export async function bookCall(input: BookingInput): Promise<{ ok: boolean }> {
  if (input.company) return { ok: true };

  const name = String(input.name ?? '').trim().slice(0, 120);
  const email = String(input.email ?? '').trim().slice(0, 200);
  const message = String(input.message ?? '').trim().slice(0, 3000);
  const date = String(input.date ?? '');
  const time = String(input.time ?? '');
  const es = input.lang !== 'en';

  if (name.length < 2 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !/^\d{4}-\d{2}-\d{2}$/.test(date) || !/^\d{2}:\d{2}$/.test(time)) {
    return { ok: false };
  }

  const key = process.env.RESEND_API_KEY;
  if (!key) {
    console.error('RESEND_API_KEY no configurada');
    return { ok: false };
  }

  const resend = new Resend(key);
  try {
    const { error } = await resend.emails.send({
      from: 'Portfolio gabrieliturre.tech <onboarding@resend.dev>',
      to: TO,
      replyTo: email,
      subject: `📅 Llamada agendada: ${name} — ${date} ${time}`,
      html: `<div style="font-family:system-ui,sans-serif;line-height:1.6;color:#111;max-width:600px">
        <h2 style="margin:0 0 12px">Nueva llamada de 15 min</h2>
        <p><b>Nombre:</b> ${esc(name)}<br/><b>Email:</b> ${esc(email)}<br/>
        <b>Fecha:</b> ${esc(date)} · <b>Hora:</b> ${esc(time)} (GMT-3)<br/><b>Idioma:</b> ${es ? 'es' : 'en'}</p>
        <p style="white-space:pre-wrap;background:#f4f6f8;padding:16px;border-radius:10px">${esc(message) || '—'}</p>
        <p style="color:#666;font-size:13px">Respondé este email para mandarle el link de Meet.</p></div>`,
    });
    if (error) {
      console.error('Resend error:', error);
      return { ok: false };
    }
  } catch (e) {
    console.error('Booking error:', e);
    return { ok: false };
  }

  // Confirmación al cliente. Con el remitente de prueba de Resend solo llega si el
  // dominio está verificado; si falla no bloquea la reserva.
  try {
    await resend.emails.send({
      from: 'Gabriel Iturre <onboarding@resend.dev>',
      to: email,
      replyTo: TO,
      subject: es ? 'Tu llamada con Gabriel Iturre' : 'Your call with Gabriel Iturre',
      html: `<div style="font-family:system-ui,sans-serif;line-height:1.6;color:#111;max-width:600px">
        <p>${es ? 'Hola' : 'Hi'} ${esc(name)},</p>
        <p>${es ? 'Agendamos una llamada de 15 minutos el' : "We're booked for a 15-minute call on"} <b>${esc(date)}</b> ${es ? 'a las' : 'at'} <b>${esc(time)}</b> (GMT-3).</p>
        <p>${es ? 'Te mando el link de Google Meet antes de la llamada. Si necesitás cambiar el horario, respondé este email.' : "I'll send the Google Meet link before the call. Reply to this email to reschedule."}</p>
        <p>— Gabriel</p></div>`,
    });
  } catch {}

  return { ok: true };
}
