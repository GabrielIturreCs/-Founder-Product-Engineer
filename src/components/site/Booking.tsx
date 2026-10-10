'use client';

import { useEffect, useMemo, useState } from 'react';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import { bookCall } from '@/app/actions/booking';
import type { SiteContent } from '@/content/site';

const TIMES = ['10:00', '11:30', '14:00', '16:30', '18:00'];

async function firestore() {
  const [{ app }, fs] = await Promise.all([import('@/lib/firebase'), import('firebase/firestore')]);
  return { db: fs.getFirestore(app), fs };
}

function ymd(d: Date) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

export function Booking({ t }: { t: SiteContent }) {
  const b = t.booking;
  const es = t.lang === 'es';
  const [offset, setOffset] = useState(0);
  const [date, setDate] = useState<string | null>(null);
  const [time, setTime] = useState<string | null>(null);
  const [taken, setTaken] = useState<string[]>([]);
  const [status, setStatus] = useState<'idle' | 'sending' | 'ok' | 'error'>('idle');

  // Se calcula en el cliente: en el servidor no sabemos la fecha del visitante.
  const [today, setToday] = useState<Date | null>(null);
  useEffect(() => {
    const id = requestAnimationFrame(() => setToday(new Date()));
    return () => cancelAnimationFrame(id);
  }, []);

  const month = useMemo(() => {
    if (!today) return null;
    const first = new Date(today.getFullYear(), today.getMonth() + offset, 1);
    const days = new Date(first.getFullYear(), first.getMonth() + 1, 0).getDate();
    const blanks = (first.getDay() + 6) % 7;
    const raw = first.toLocaleDateString(es ? 'es-AR' : 'en-US', { month: 'long', year: 'numeric' });
    const label = raw.charAt(0).toUpperCase() + raw.slice(1);
    const start = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);
    const cells = Array.from({ length: days }, (_, i) => {
      const d = new Date(first.getFullYear(), first.getMonth(), i + 1);
      const wd = d.getDay();
      return { n: i + 1, key: ymd(d), ok: d >= start && wd !== 0 && wd !== 6 };
    });
    return { blanks, label, cells };
  }, [today, offset, es]);

  useEffect(() => {
    if (!date) return;
    let alive = true;
    firestore()
      .then(async ({ db, fs }) => {
        const snap = await fs.getDocs(fs.query(fs.collection(db, 'appointments'), fs.where('date', '==', date)));
        if (alive) setTaken(snap.docs.map((d) => String(d.data().time)));
      })
      .catch(() => alive && setTaken([]));
    return () => {
      alive = false;
    };
  }, [date]);

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!date || !time) return;
    const fd = new FormData(e.currentTarget);
    const data = {
      name: String(fd.get('name') || ''),
      email: String(fd.get('email') || ''),
      message: String(fd.get('message') || ''),
      company: String(fd.get('company') || ''),
      date,
      time,
      lang: t.lang,
    };
    setStatus('sending');
    const res = await bookCall(data);
    if (res.ok) {
      firestore()
        .then(({ db, fs }) =>
          fs.addDoc(fs.collection(db, 'appointments'), {
            name: data.name,
            email: data.email,
            message: data.message,
            date,
            time,
            type: 'call-15',
            status: 'pending',
            language: t.lang,
            createdAt: fs.serverTimestamp(),
          }),
        )
        .catch(() => {});
    }
    setStatus(res.ok ? 'ok' : 'error');
  }

  if (status === 'ok') {
    return (
      <div className="booking">
        <p className="bk-msg ok" role="status">
          {b.ok}
        </p>
      </div>
    );
  }

  const dayLabels = es ? ['L', 'M', 'M', 'J', 'V', 'S', 'D'] : ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

  return (
    <div className="booking">
      {!date || !time ? (
        <>
          <div className="cal-head">
            <b>{month?.label ?? ' '}</b>
            <div className="cal-nav">
              <button type="button" onClick={() => setOffset((o) => o - 1)} disabled={offset === 0} aria-label={es ? 'Mes anterior' : 'Previous month'}>
                <IconChevronLeft size={16} />
              </button>
              <button type="button" onClick={() => setOffset((o) => o + 1)} disabled={offset === 2} aria-label={es ? 'Mes siguiente' : 'Next month'}>
                <IconChevronRight size={16} />
              </button>
            </div>
          </div>
          <div className="cal" role="grid" aria-label={b.pick}>
            {dayLabels.map((d, i) => (
              <small key={i}>{d}</small>
            ))}
            {month &&
              Array.from({ length: month.blanks }).map((_, i) => <span key={`b${i}`} />)}
            {month?.cells.map((c) => (
              <button
                key={c.key}
                type="button"
                disabled={!c.ok}
                className={`${c.ok ? 'ok' : ''} ${date === c.key ? 'sel' : ''}`}
                onClick={() => {
                  setDate(c.key);
                  setTime(null);
                }}
              >
                {c.n}
              </button>
            ))}
          </div>
          {date && (
            <>
              <h4 style={{ marginTop: 18 }}>{b.times}</h4>
              <div className="slots">
                {TIMES.map((tm) => {
                  const busy = taken.includes(tm);
                  return (
                    <button key={tm} type="button" disabled={busy} className={time === tm ? 'sel' : ''} onClick={() => setTime(tm)} aria-label={busy ? `${tm} ${b.taken}` : tm}>
                      {tm}
                    </button>
                  );
                })}
              </div>
            </>
          )}
        </>
      ) : (
        <form className="bk-form" onSubmit={submit}>
          <div className="bk-sel">
            <span>
              {new Date(`${date}T12:00:00`).toLocaleDateString(es ? 'es-AR' : 'en-US', { weekday: 'long', day: 'numeric', month: 'long' })} · {time} (GMT-3)
            </span>
            <button type="button" onClick={() => setTime(null)}>
              {b.back}
            </button>
          </div>
          <div className="hp" aria-hidden="true">
            <input name="company" tabIndex={-1} autoComplete="off" />
          </div>
          <input name="name" required minLength={2} maxLength={120} placeholder={b.name} autoComplete="name" aria-label={b.name} />
          <input name="email" type="email" required maxLength={200} placeholder={b.email} autoComplete="email" aria-label={b.email} />
          <textarea name="message" maxLength={3000} placeholder={b.about} aria-label={b.about} />
          {status === 'error' && (
            <p className="bk-msg err" role="alert">
              {b.error}
            </p>
          )}
          <button className="btn btn-white" type="submit" disabled={status === 'sending'} style={{ height: 50 }}>
            {status === 'sending' ? b.sending : b.confirm}
          </button>
        </form>
      )}
    </div>
  );
}
