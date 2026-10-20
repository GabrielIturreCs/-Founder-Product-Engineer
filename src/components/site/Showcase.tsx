'use client';

import Image from 'next/image';
import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';
import { IconArrowUpRight } from '@tabler/icons-react';
import type { Showcase } from '@/content/site';

// Escenas con capturas reales: cada pantalla queda unos segundos y pasa a la siguiente.
// Sólo avanzan mientras la escena está en pantalla y nunca con «reducir movimiento».
const STEP_MS = 3200;

function useStepper(count: number, ms = STEP_MS) {
  const ref = useRef<HTMLDivElement>(null);
  const [i, setI] = useState(0);
  const [visible, setVisible] = useState(false);
  const [hover, setHover] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => setReduced(mq.matches);
    sync();
    mq.addEventListener('change', sync);
    const el = ref.current;
    if (!el) return () => mq.removeEventListener('change', sync);
    const io = new IntersectionObserver((e) => setVisible(e.some((x) => x.isIntersecting)), { threshold: 0.25 });
    io.observe(el);
    return () => {
      io.disconnect();
      mq.removeEventListener('change', sync);
    };
  }, []);

  const running = visible && !hover && !reduced && count > 1;
  useEffect(() => {
    if (!running) return;
    const id = setTimeout(() => setI((x) => (x + 1) % count), ms);
    return () => clearTimeout(id);
  }, [running, i, count, ms]);

  return { ref, i, setI, running, setHover, ms };
}

function frameClass(k: number, i: number, n: number) {
  if (k === i) return 'sc-frame on';
  if (k === (i - 1 + n) % n) return 'sc-frame off';
  return 'sc-frame';
}

export function Phone({ screens, i, alt, taps, ms, running }: { screens: string[]; i: number; alt: string; taps?: ([number, number] | null)[]; ms: number; running: boolean }) {
  const n = screens.length;
  const tap = taps?.[i];
  return (
    <div className="sc-phone">
      <div className="sc-screen">
        {screens.map((s, k) => (
          <Image key={s} src={s} alt={k === i ? alt : ''} aria-hidden={k !== i} fill sizes="(max-width: 760px) 56vw, 280px" className={frameClass(k, i, n)} />
        ))}
        {tap && running && <span key={i} className="sc-tap" style={{ left: `${tap[0]}%`, top: `${tap[1]}%`, animationDelay: `${ms * 0.62}ms` }} aria-hidden="true" />}
        <span className="sc-island" aria-hidden="true" />
      </div>
    </div>
  );
}

// Capturas de una app de escritorio que ya traen su propia ventana: sin barra de navegador.
function Desktop({ shots, i, alt }: { shots: string[]; i: number; alt: string }) {
  const n = shots.length;
  return (
    <div className="sc-desktop">
      {shots.map((s, k) => (
        <Image key={s} src={s} alt={k === i % n ? alt : ''} aria-hidden={k !== i % n} fill sizes="(max-width: 760px) 92vw, 680px" className={frameClass(k, i % n, n)} />
      ))}
    </div>
  );
}

export function Browser({ shots, scroll, i, url, alt }: { shots?: string[]; scroll?: string; i: number; url: string; alt: string }) {
  const list = shots ?? [];
  const n = list.length;
  const cur = n ? i % n : 0;
  return (
    <div className="sc-browser">
      <div className="sc-bar" aria-hidden="true">
        <i />
        <i />
        <i />
        <span>{url}</span>
      </div>
      <div className="sc-view">
        {scroll ? (
          <Image src={scroll} alt={alt} fill sizes="(max-width: 760px) 92vw, 620px" className="sc-scroll" />
        ) : (
          list.map((s, k) => <Image key={s} src={s} alt={k === cur ? alt : ''} aria-hidden={k !== cur} fill sizes="(max-width: 760px) 92vw, 620px" className={`${frameClass(k, cur, n)} sc-kb`} />)
        )}
      </div>
    </div>
  );
}

function Steps({ steps, i, setI, running, ms, label }: { steps: string[]; i: number; setI: (n: number) => void; running: boolean; ms: number; label: string }) {
  if (steps.length < 2) return <p className="sc-caption">{steps[0]}</p>;
  return (
    <ol className="sc-steps" aria-label={label}>
      {steps.map((s, k) => (
        <li key={s}>
          <button type="button" className={k === i ? 'on' : ''} aria-current={k === i ? 'step' : undefined} onClick={() => setI(k)}>
            <span className="sc-num">{String(k + 1).padStart(2, '0')}</span>
            {s}
            {k === i && <span key={`p${i}`} className="sc-progress" style={{ animationDuration: `${ms}ms`, animationPlayState: running ? 'running' : 'paused' } as CSSProperties} aria-hidden="true" />}
          </button>
        </li>
      ))}
    </ol>
  );
}

// Toques simulados: dónde «toca» el usuario en cada pantalla antes de pasar a la siguiente (% del ancho y alto).
const TAPS: Record<string, ([number, number] | null)[]> = {
  chefi: [[73, 22], [27, 55], [77, 93], [50, 95]],
  prometo: [[28, 56], [50, 92], [50, 93], [50, 90], null, null, [50, 88]],
  kilo: [[60, 96], null, [50, 30], null, null, null, [50, 18], null],
};

export function ProjectStage({ p, visit, stepsLabel, flip }: { p: Showcase; visit: string; stepsLabel: string; flip: boolean }) {
  const primary = (p.lead === 'browser' ? p.browser : p.phone) ?? p.browser ?? [];
  const { ref, i, setI, running, setHover, ms } = useStepper(primary.length);
  const host = p.url ? p.url.replace(/^https?:\/\//, '') : 'localhost';
  const alt = `${p.name} — ${p.steps[i] ?? p.kind}`;
  const hasBrowser = Boolean(p.browser || p.scroll);

  return (
    <article className={`sc-row reveal ${flip ? 'flip' : ''}`} ref={ref} onPointerEnter={() => setHover(true)} onPointerLeave={() => setHover(false)}>
      <div className="sc-copy">
        <p className="sc-kind">
          {p.kind}
          {p.status && <span className="sc-status">{p.status}</span>}
        </p>
        <h3>
          {p.name} <small>{p.year}</small>
        </h3>
        <p className="sc-summary">{p.summary}</p>
        <Steps steps={p.steps} i={i} setI={setI} running={running} ms={ms} label={stepsLabel} />
        <ul className="chips">
          {p.tags.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        {p.note && <p className="sc-note">{p.note}</p>}
        {p.url && (
          <a className="sc-link" href={p.url} target="_blank" rel="noopener noreferrer">
            {visit} {p.name}
            <IconArrowUpRight size={16} />
          </a>
        )}
      </div>
      <div className={`sc-stage tone-${p.tone} ${hasBrowser && p.phone ? 'combo' : p.phone ? 'solo-phone' : 'solo-browser'}`}>
        <div className="sc-devices">
          {p.frame === 'bare' && p.browser && !p.phone && <Desktop shots={p.browser} i={i} alt={alt} />}
          {hasBrowser && p.frame !== 'bare' && <Browser shots={p.browser} scroll={p.scroll} i={i} url={host} alt={p.phone ? `${p.name} — web` : alt} />}
          {p.phone && <Phone screens={p.phone} i={i % p.phone.length} alt={alt} taps={p.lead === 'browser' ? undefined : TAPS[p.slug]} ms={ms} running={running} />}
        </div>
      </div>
    </article>
  );
}

export function KiloStage({ screens, landing, steps, stepsLabel, children }: { screens: string[]; landing: string; steps: string[]; stepsLabel: string; children: ReactNode }) {
  const { ref, i, setI, running, setHover, ms } = useStepper(screens.length);
  return (
    <article className="kilo sc-kilo g-ink noise reveal" ref={ref} onPointerEnter={() => setHover(true)} onPointerLeave={() => setHover(false)}>
      <div className="sc-kilo-copy">
        {children}
        <Steps steps={steps} i={i} setI={setI} running={running} ms={ms} label={stepsLabel} />
      </div>
      <div className="sc-kilo-stage">
        <div className="sc-devices">
          <Browser scroll={landing} i={0} url="somoskilo.com" alt="somoskilo.com" />
          <Phone screens={screens} i={i} alt={`KILO — ${steps[i]}`} taps={TAPS.kilo} ms={ms} running={running} />
        </div>
      </div>
    </article>
  );
}
