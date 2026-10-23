'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { HERO_SLIDES } from '../../data/media';

/*
 * Le moment signature d'iptv bridge : « De Ophaalbrug ».
 * Un bateau passe sous le pont levé, le pont s'abaisse, la barrière se lève,
 * ton message WhatsApp traverse le pont, et la télé de l'autre rive s'allume.
 * Repère SVG 400 × 300. Tout est calculé à chaque image (rAF) pour que les chaînes suivent le tablier.
 */
const HINGE = { x: 134, y: 206 };   // charnière du tablier
const PIVOT = { x: 123, y: 128 };   // pivot du balancier
const LEAF = 148;                   // longueur du tablier (jusqu'au quai d'en face)
const BEAM = 150;                   // longueur du balancier
const UP = -48;                     // angle du pont levé (degrés)
const STEPS = ['Kies je pakket', 'Bestel via WhatsApp', 'Direct actief', 'Kijken'];

const rad = (d: number) => (d * Math.PI) / 180;
const clamp01 = (v: number) => Math.min(1, Math.max(0, v));
const easeInOut = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
const easeOutBack = (t: number) => { const c1 = 1.5, c3 = c1 + 1; return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2); };
const seg = (t: number, a: number, b: number) => clamp01((t - a) / (b - a));

type Timeline = { boat: [number, number] | null; raise: [number, number] | null; lower: [number, number]; from: number; barrier: [number, number]; bubble: [number, number]; lit: number[]; tv: number; end: number };
const FIRST: Timeline = { boat: [0, 1700], raise: null, lower: [950, 2350], from: UP, barrier: [2350, 2850], bubble: [2750, 3600], lit: [0, 2350, 3300, 3600], tv: 3550, end: 3700 };
const AGAIN: Timeline = { boat: null, raise: [0, 320], lower: [320, 900], from: -20, barrier: [900, 1150], bubble: [1050, 1600], lit: [0, 0, 0, 0], tv: 1500, end: 1650 };

export function BridgeHero() {
  const [i, setI] = useState(0);
  const [run, setRun] = useState(0);
  const [lit, setLit] = useState(0);
  const [tvOn, setTvOn] = useState(false);
  const [moving, setMoving] = useState(true);
  const leaf = useRef<SVGGElement>(null);
  const beam = useRef<SVGGElement>(null);
  const chainA = useRef<SVGLineElement>(null);
  const chainB = useRef<SVGLineElement>(null);
  const arm = useRef<SVGGElement>(null);
  const boat = useRef<SVGGElement>(null);
  const bubble = useRef<SVGGElement>(null);
  const start = useRef<{ x: number; y: number } | null>(null);
  const slide = HERO_SLIDES[i];

  useEffect(() => {
    const T = run === 0 ? FIRST : AGAIN;
    const draw = (t: number) => {
      // angle du tablier
      let a = 0;
      if (T.raise && t < T.raise[1]) a = T.from * easeInOut(seg(t, T.raise[0], T.raise[1]));
      else a = T.from * (1 - easeOutBack(seg(t, T.lower[0], T.lower[1])) ** 1);
      if (t >= T.lower[1]) a = 0;
      a = Math.min(a, 0.6); // le petit rebond ne passe presque pas sous le quai
      const r = rad(a);
      leaf.current?.setAttribute('transform', `rotate(${a} ${HINGE.x} ${HINGE.y})`);
      beam.current?.setAttribute('transform', `rotate(${a} ${PIVOT.x} ${PIVOT.y})`);
      const bx = PIVOT.x + BEAM * Math.cos(r), by = PIVOT.y + BEAM * Math.sin(r);
      const ex = HINGE.x + LEAF * Math.cos(r), ey = HINGE.y + LEAF * Math.sin(r);
      const mx = PIVOT.x + 70 * Math.cos(r), my = PIVOT.y + 70 * Math.sin(r);
      const nx = HINGE.x + 70 * Math.cos(r), ny = HINGE.y + 70 * Math.sin(r);
      chainA.current?.setAttribute('x1', String(bx)); chainA.current?.setAttribute('y1', String(by));
      chainA.current?.setAttribute('x2', String(ex)); chainA.current?.setAttribute('y2', String(ey - 12));
      chainB.current?.setAttribute('x1', String(mx)); chainB.current?.setAttribute('y1', String(my));
      chainB.current?.setAttribute('x2', String(nx)); chainB.current?.setAttribute('y2', String(ny - 12));
      // barrière
      const g = easeInOut(seg(t, T.barrier[0], T.barrier[1]));
      arm.current?.setAttribute('transform', `rotate(${-78 * g} 90 190)`);
      // bateau
      if (boat.current) {
        if (T.boat && t < T.boat[1]) { boat.current.style.opacity = '1'; boat.current.setAttribute('transform', `translate(${-110 + 540 * easeInOut(seg(t, T.boat[0], T.boat[1]))} 0)`); }
        else boat.current.style.opacity = '0';
      }
      // le message qui traverse
      if (bubble.current) {
        const b = seg(t, T.bubble[0], T.bubble[1]);
        const on = t >= T.bubble[0] && t <= T.bubble[1] + 120;
        bubble.current.style.opacity = on ? String(b > 0.9 ? 1 - (b - 0.9) * 10 : 1) : '0';
        bubble.current.setAttribute('transform', `translate(${58 + 262 * easeInOut(b)} ${-6 * Math.sin(Math.PI * b)})`);
      }
    };

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) { draw(T.end + 1000); setLit(4); setTvOn(true); setMoving(false); return; }

    setTvOn(false); setMoving(true); setLit(run === 0 ? 0 : 4);
    let raf = 0; const t0 = performance.now();
    const tick = (now: number) => {
      const t = now - t0;
      draw(t);
      setLit(T.lit.filter((x) => t >= x).length);
      if (t >= T.lower[1]) setMoving(false);
      if (t >= T.tv) setTvOn(true);
      if (t < T.end) raf = requestAnimationFrame(tick);
    };
    draw(0);
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [run]);

  const go = useCallback((n: number) => { setI((n + HERO_SLIDES.length) % HERO_SLIDES.length); setRun((r) => r + 1); }, []);
  const onDown = (e: React.PointerEvent) => { start.current = { x: e.clientX, y: e.clientY }; };
  const onUp = (e: React.PointerEvent) => {
    const s = start.current; start.current = null;
    if (!s) return;
    const dx = e.clientX - s.x, dy = e.clientY - s.y;
    if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy) * 1.4) go(i + (dx < 0 ? 1 : -1));
  };

  return (
    <div className="space-y-4 min-w-0">
      <div className={`relative w-full aspect-[400/276] select-none ${tvOn ? 'tv-on' : ''}`} style={{ touchAction: 'pan-y' }} onPointerDown={onDown} onPointerUp={onUp} onPointerCancel={() => { start.current = null; }}>
        <svg viewBox="0 24 400 276" className="absolute inset-0 w-full h-full" aria-hidden="true">
          <defs>
            <pattern id="hz" width="10" height="10" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <rect width="5" height="10" fill="#f7c51e" /><rect x="5" width="5" height="10" fill="#0c2230" />
            </pattern>
            <clipPath id="canal"><rect x="0" y="222" width="400" height="78" /></clipPath>
          </defs>

          {/* maisons à pignon au loin */}
          <g fill="#d5e0e4">
            <path d="M0 206 V150 L14 136 L28 150 V206 Z M30 206 V160 H44 L52 146 L60 160 V206 Z M62 206 V144 L76 128 L90 144 V206 Z" />
          </g>
          <g fill="#c4d2d8">
            <path d="M282 206 V96 L298 78 L314 96 V206 Z M316 206 V104 H326 L336 86 L346 104 V206 Z M348 206 V90 L362 72 L376 90 V206 Z M378 206 V100 L390 88 L400 100 V206 Z" />
          </g>
          <g fill="#edf1f2" opacity=".9">
            <rect x="292" y="102" width="8" height="10" rx="1" /><rect x="358" y="96" width="8" height="10" rx="1" /><rect x="330" y="108" width="8" height="10" rx="1" /><rect x="68" y="150" width="6" height="8" rx="1" />
          </g>

          {/* l'eau du canal */}
          <rect x="0" y="222" width="400" height="78" fill="#134152" />
          <g clipPath="url(#canal)" fill="none" strokeLinecap="round">
            <path className="wave-a" d="M0 240 q10 -4 20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0" stroke="#2f6478" strokeWidth="2" />
            <path className="wave-b" d="M-80 262 q14 -5 28 0 t28 0 t28 0 t28 0 t28 0 t28 0 t28 0 t28 0 t28 0 t28 0 t28 0 t28 0 t28 0 t28 0 t28 0 t28 0 t28 0 t28 0 t28 0 t28 0" stroke="#2a5a6d" strokeWidth="2" />
            <path className="wave-a" d="M0 284 q10 -3 20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0" stroke="#24505f" strokeWidth="2" />
            {/* reflet jaune de la télé sur l'eau */}
            <path className="tv-glow" d="M300 232 h70 M310 246 h48 M318 260 h30" stroke="#f7c51e" strokeOpacity=".55" strokeWidth="3" />
          </g>

          {/* le bateau qui passe sous le pont levé */}
          <g ref={boat} style={{ opacity: 0 }}>
            <path d="M0 236 h78 l-8 12 h-62 z" fill="#0c2230" />
            <path d="M12 236 v-9 q0 -5 5 -5 h44 q6 0 8 5 l3 9 z" fill="#eef5f7" stroke="#0c2230" strokeWidth="2" />
            <path d="M20 228 h44" stroke="#4f7a8c" strokeWidth="4" strokeLinecap="round" />
          </g>

          {/* quais */}
          <path d="M0 206 H136 V232 H0 Z" fill="#1d3d4d" />
          <path d="M0 206 H136 V212 H0 Z" fill="#c4d2d8" />
          <path d="M282 206 H400 V232 H282 Z" fill="#1d3d4d" />
          <path d="M282 206 H400 V212 H282 Z" fill="#c4d2d8" />
          <path d="M8 222 h120 M290 222 h104" stroke="#2c5163" strokeWidth="1.5" strokeDasharray="6 4" />

          {/* le téléphone (WhatsApp) sur la rive de gauche */}
          <g>
            <rect x="30" y="144" width="36" height="62" rx="7" fill="#0c2230" />
            <rect x="34" y="150" width="28" height="48" rx="3" fill="#eef5f7" />
            <rect x="37" y="156" width="17" height="7" rx="3" fill="#c4d2d8" />
            <rect x="42" y="167" width="17" height="7" rx="3" fill="#0f7d42" />
            <rect x="37" y="178" width="13" height="7" rx="3" fill="#c4d2d8" />
          </g>

          {/* la barrière (slagboom) */}
          <rect x="86" y="186" width="8" height="20" rx="2" fill="#0c2230" />
          <g ref={arm}>
            <rect x="88" y="187" width="44" height="6" rx="3" fill="url(#hz)" stroke="#0c2230" strokeWidth="1" />
          </g>
          <circle cx="90" cy="190" r="3.5" fill="#eef5f7" stroke="#0c2230" strokeWidth="1.5" />

          {/* le portique */}
          <g stroke="#0c2230" strokeWidth="2" strokeLinejoin="round">
            <rect x="108" y="128" width="7" height="78" fill="#ffffff" />
            <rect x="131" y="128" width="7" height="78" fill="#ffffff" />
            <rect x="102" y="123" width="42" height="7" fill="#ffffff" />
          </g>
          {/* les feux du pont */}
          <circle cx="111" cy="116" r="4.5" fill="#f7c51e" stroke="#0c2230" strokeWidth="1.5" className={moving ? 'lamp-blink' : ''} />
          <circle cx="135" cy="116" r="4.5" fill="#f7c51e" stroke="#0c2230" strokeWidth="1.5" className={moving ? 'lamp-blink' : ''} style={{ animationDelay: '.35s' }} />

          {/* le balancier (il pivote avec le tablier) */}
          <g ref={beam}>
            <rect x={PIVOT.x - 34} y={PIVOT.y - 6} width="26" height="16" rx="2" fill="#0c2230" />
            <rect x={PIVOT.x - 30} y={PIVOT.y - 3} width={BEAM + 30} height="6" rx="3" fill="#ffffff" stroke="#0c2230" strokeWidth="2" />
          </g>
          <line ref={chainA} stroke="#0c2230" strokeWidth="1.6" strokeDasharray="2 2" />
          <line ref={chainB} stroke="#0c2230" strokeWidth="1.6" strokeDasharray="2 2" />

          {/* le tablier */}
          <g ref={leaf}>
            <path d={`M${HINGE.x} ${HINGE.y - 18} H${HINGE.x + LEAF - 2}`} stroke="#0c2230" strokeWidth="2" />
            {Array.from({ length: 10 }).map((_, k) => (
              <path key={k} d={`M${HINGE.x + 6 + k * 15} ${HINGE.y - 18} V${HINGE.y - 6}`} stroke="#0c2230" strokeWidth="1.6" />
            ))}
            <rect x={HINGE.x} y={HINGE.y - 7} width={LEAF} height="9" rx="2" fill="#ffffff" stroke="#0c2230" strokeWidth="2" />
            <path d={`M${HINGE.x + 4} ${HINGE.y - 2.5} H${HINGE.x + LEAF - 4}`} stroke="#f7c51e" strokeWidth="2" strokeDasharray="8 6" />
          </g>
          <circle cx={HINGE.x} cy={HINGE.y - 2} r="4" fill="#0c2230" />

          {/* le message qui traverse */}
          <g ref={bubble} style={{ opacity: 0 }}>
            <path d="M0 176 h24 a5 5 0 0 1 5 5 v8 a5 5 0 0 1 -5 5 h-16 l-6 5 v-5 h-2 a5 5 0 0 1 -5 -5 v-8 a5 5 0 0 1 5 -5 z" fill="#0f7d42" stroke="#0c2230" strokeWidth="1.5" transform="translate(0 -2)" />
            <circle cx="7" cy="183" r="1.8" fill="#fff" /><circle cx="13" cy="183" r="1.8" fill="#fff" /><circle cx="19" cy="183" r="1.8" fill="#fff" />
          </g>
        </svg>

        {/* La télé de l'autre rive */}
        <div className="absolute left-[64%] w-[34%] bottom-[34%] z-10">
          <div className="relative rounded-[10px] p-[4px] bg-ink shadow-[0_18px_36px_-16px_rgba(12,34,48,.8)]">
            <div className="tv-glow absolute -inset-3 -z-10 rounded-2xl bg-signal/50 blur-xl" />
            <div className="relative rounded-[7px] overflow-hidden aspect-[16/9] bg-black">
              <img key={slide.id} src={slide.image} alt={slide.alt} className="tv-screen swap-in absolute inset-0 w-full h-full object-cover" style={{ objectPosition: slide.pos }} draggable={false} fetchPriority={i === 0 ? 'high' : 'auto'} />
              <span className="absolute right-1.5 top-1.5 px-1.5 py-[1px] rounded bg-black/60 text-[9px] sm:text-[11px] font-bold tracking-[.1em] uppercase text-white">{slide.tag}</span>
            </div>
          </div>
          <div className="mx-auto w-[44%] h-[6px] bg-ink rounded-b-md" />
        </div>

        {/* Étiquettes des deux rives */}
        <span className="absolute left-[3%] top-[33%] px-2 py-0.5 rounded-md bg-ink text-foam text-[11px] sm:text-[13px] font-bold">Jij</span>
        <span className={`absolute right-[2%] top-[15%] px-2 py-0.5 rounded-md text-[11px] sm:text-[13px] font-bold transition-colors duration-500 ${tvOn ? 'bg-signal text-ink' : 'bg-ink text-foam'}`}>Je tv · {slide.label}</span>
      </div>

      {/* Les quatre étapes : elles s'allument au fil de la traversée */}
      <ol className="grid grid-cols-2 sm:grid-cols-4 gap-2" aria-label="Zo werkt het, in vier stappen">
        {STEPS.map((s, k) => (
          <li key={s} className={`flex items-center gap-2 px-2.5 py-2 rounded-xl border-2 text-[14px] font-bold transition-colors duration-300 ${lit > k ? 'bg-signal border-ink text-ink' : 'bg-card border-line text-soft'}`}>
            <span className={`shrink-0 w-6 h-6 rounded-md flex items-center justify-center font-display text-[11px] ${lit > k ? 'bg-ink text-foam' : 'bg-fog text-soft'}`}>{k + 1}</span>
            {s}
          </li>
        ))}
      </ol>

      {/* Puces : changer ce qui passe sur la télé (le pont se relève et se rabat) */}
      <div className="flex gap-2 overflow-x-auto no-scrollbar" role="group" aria-label="Kies wat je op de tv ziet">
        {HERO_SLIDES.map((s, k) => (
          <button key={s.id} type="button" aria-pressed={k === i} onClick={() => go(k)}
            className={`shrink-0 h-10 px-4 rounded-full text-[15px] font-bold transition-colors ${k === i ? 'bg-ink text-foam' : 'btn-line'}`}>
            {s.label}
          </button>
        ))}
      </div>
    </div>
  );
}
