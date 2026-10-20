'use client';

import { useState } from 'react';
import { IconDownload } from '@tabler/icons-react';
import { guidePdf, type SiteContent } from '@/content/site';

// Los correos los guarda el Worker de Cloudflare (worker/index.js) en KV y le llegan a Gabriel por email.
export function GuideForm({ t }: { t: SiteContent }) {
  const g = t.guide;
  const [status, setStatus] = useState<'idle' | 'sending' | 'ok'>('idle');
  const pdf = guidePdf[t.lang];

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    if (fd.get('bot-field')) return;
    setStatus('sending');
    try {
      const body = {
        email: String(fd.get('email') || '').trim(),
        name: String(fd.get('nombre') || '').trim(),
        lang: t.lang,
        origin: location.pathname + location.search,
      };
      const res = await fetch('/api/guia', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
      if (!res.ok) throw new Error(String(res.status));
    } catch {
      // Si no se pudo guardar el correo, la guía se entrega igual: el visitante no tiene la culpa.
    }
    setStatus('ok');
  }

  if (status === 'ok') {
    return (
      <div className="guide-form ok" role="status">
        <p>{g.ok}</p>
        <a className="btn btn-ink btn-lg" href={pdf} download>
          <IconDownload size={18} />
          {g.download}
        </a>
      </div>
    );
  }

  return (
    <form className="guide-form" name="guia" onSubmit={submit}>
      <p className="hp" aria-hidden="true">
        <label>
          No completar <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>
      <input name="email" type="email" required maxLength={200} placeholder={g.email} aria-label={g.email} autoComplete="email" />
      <input name="nombre" maxLength={120} placeholder={g.name} aria-label={g.name} autoComplete="name" />
      <button className="btn btn-ink btn-lg" type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? g.sending : g.submit}
      </button>
      <small>{g.privacy}</small>
    </form>
  );
}
