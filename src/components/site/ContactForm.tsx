'use client';

import { useActionState } from 'react';
import { sendContact, type ContactState } from '@/app/actions/contact';
import { whatsappLink, type SiteContent } from '@/content/site';

export function ContactForm({ t }: { t: SiteContent }) {
  const [state, action, pending] = useActionState<ContactState, FormData>(sendContact, { status: 'idle' });
  const f = t.form;

  if (state.status === 'ok') {
    return (
      <p className="form-msg ok" role="status">
        {f.ok}
      </p>
    );
  }

  return (
    <form className="form" action={action}>
      <input type="hidden" name="lang" value={t.lang} />
      <div className="hp" aria-hidden="true">
        <label>
          Company <input name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <div className="form-row">
        <div className="field">
          <label htmlFor="cf-name">{f.name}</label>
          <input id="cf-name" name="name" required minLength={2} maxLength={120} autoComplete="name" />
        </div>
        <div className="field">
          <label htmlFor="cf-email">{f.email}</label>
          <input id="cf-email" name="email" type="email" required maxLength={200} autoComplete="email" />
        </div>
      </div>
      <div className="form-row">
        <div className="field">
          <label htmlFor="cf-type">{f.type}</label>
          <select id="cf-type" name="type" defaultValue={f.types[0]}>
            {f.types.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </div>
        <div className="field">
          <label htmlFor="cf-budget">{f.budget}</label>
          <select id="cf-budget" name="budget" defaultValue={f.budgets[0]}>
            {f.budgets.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="field">
        <label htmlFor="cf-msg">{f.message}</label>
        <textarea id="cf-msg" name="message" required minLength={5} maxLength={5000} />
      </div>
      {state.status === 'error' && (
        <p className="form-msg err" role="alert">
          {f.error}{' '}
          <a href={whatsappLink(t.hero.waText)} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>
            WhatsApp →
          </a>
        </p>
      )}
      <button className="btn btn-primary" type="submit" disabled={pending}>
        {pending ? f.sending : f.send}
      </button>
    </form>
  );
}
