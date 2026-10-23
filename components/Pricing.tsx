'use client';

import React, { useState } from 'react';
import { Check } from 'lucide-react';
import {
  DurationMonths, DeviceCount, PlanTier, getPrice, priceDigits, perMonth, orderLink,
  promoActive, PROMO, PACKAGE_FEATURES, DEVICE_DISCOUNT,
} from '../lib/pricing';
import { PAYMENT_LOGOS } from '../data/media';

/** Le prix arrive en glissant sur le tablier quand il change. */
export function DeckPrice({ value, className = '' }: { value: number; className?: string }) {
  const s = priceDigits(value);
  return (
    <span className={`inline-flex items-start leading-none tnum overflow-hidden ${className}`} aria-label={`€${s}`}>
      <span className="text-[0.42em] font-bold mr-1 mt-[0.14em]">€</span>
      <span key={s} className="slide-in">{s}</span>
    </span>
  );
}

// Les trois durées = trois piles du pont. Plus on traverse loin, moins on paie par mois.
const PILES: { m: DurationMonths; x: number; sub: string }[] = [
  { m: 3, x: 21, sub: 'Kort' },
  { m: 6, x: 53, sub: 'Half jaar' },
  { m: 12, x: 84, sub: 'Heel jaar' },
];
const QUAY = 6;

export function Pricing({ refPrefix = 'home' }: { refPrefix?: string }) {
  const [m, setM] = useState<DurationMonths>(12);
  const [d, setD] = useState<DeviceCount>(1);
  const devText = d === 1 ? '1 apparaat' : `${d} apparaten`;
  const pile = PILES.find((c) => c.m === m)!;
  const span = 100 - QUAY;

  return (
    <div className="space-y-6">
      <div className="max-w-2xl mx-auto grid gap-6 p-4 sm:p-6 rounded-[28px] bg-card border border-line">
        <fieldset>
          <legend className="text-[18px] font-bold text-ink mb-1">1. Hoe lang wil je kijken?</legend>
          <p className="text-[15px] text-soft mb-3">Hoe verder je oversteekt, hoe minder je per maand betaalt.</p>
          {/* De overspanning : le tablier jaune s'allonge jusqu'à la pile choisie */}
          <div className="relative h-[180px] rounded-2xl fog overflow-hidden border border-line">
            <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-[44px] water" />
            <div aria-hidden="true" className="absolute left-0 bottom-0 h-[80px] bg-quay border-r-2 border-ink" style={{ width: `${QUAY}%` }} />
            {PILES.map((c) => (
              <span key={c.m} aria-hidden="true" className={`absolute bottom-0 w-[10px] h-[68px] -translate-x-1/2 rounded-t-sm transition-colors ${c.x <= pile.x ? 'bg-ink' : 'bg-ink/25'}`} style={{ left: `${c.x}%` }} />
            ))}
            <div aria-hidden="true" className="absolute h-[14px] rounded-r-md bg-signal border-y-2 border-r-2 border-ink origin-left transition-transform duration-700 ease-[cubic-bezier(.3,1.25,.45,1)]"
              style={{ left: `${QUAY}%`, width: `${span}%`, bottom: 66, transform: `scaleX(${(pile.x + 2 - QUAY) / span})`, backgroundImage: 'repeating-linear-gradient(90deg, transparent 0 12px, rgba(12,34,48,.35) 12px 13px)' }} />
            {PILES.map((c) => (
              <button key={c.m} type="button" aria-pressed={m === c.m} onClick={() => setM(c.m)}
                className={`absolute top-3 -translate-x-1/2 w-[28%] max-w-[140px] py-2 rounded-xl text-center transition-colors ${m === c.m ? 'bg-ink text-foam' : 'bg-card text-ink border-2 border-line hover:border-ink'}`}
                style={{ left: `${c.x}%` }}>
                <span className="block font-display text-[22px] font-bold leading-none tnum">{c.m}<span className="text-[13px] font-bold ml-0.5">mnd</span></span>
                {promoActive(c.m)
                  ? <span className={`block mt-1 text-[12px] font-extrabold ${m === c.m ? 'text-signal' : 'text-signal-ink'}`}>+{PROMO.bonusMonths} gratis</span>
                  : <span className={`block mt-1 text-[12px] font-bold ${m === c.m ? 'text-haze' : 'text-soft'}`}>{c.sub}</span>}
              </button>
            ))}
          </div>
        </fieldset>
        <fieldset>
          <legend className="text-[18px] font-bold text-ink mb-3">2. Op hoeveel schermen tegelijk?</legend>
          <div className="grid grid-cols-4 gap-2">
            {([1, 2, 3, 4] as DeviceCount[]).map((x) => (
              <button key={x} type="button" aria-pressed={d === x} onClick={() => setD(x)}
                aria-label={x === 1 ? '1 apparaat' : `${x} apparaten, ${DEVICE_DISCOUNT[x]} % korting`}
                className={`py-3 rounded-2xl border-2 font-bold transition-all ${d === x ? 'border-ink bg-signal text-ink' : 'border-line bg-fog text-ink hover:border-ink/50'}`}>
                <span className="block font-display text-[24px] font-bold leading-none">{x}</span>
                <span className={`block text-[13px] mt-1 ${d === x ? 'text-ink' : 'text-soft'}`}>{DEVICE_DISCOUNT[x] ? `−${DEVICE_DISCOUNT[x]}%` : 'scherm'}</span>
              </button>
            ))}
          </div>
        </fieldset>
      </div>

      <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
        {(['Premium', 'Standard'] as PlanTier[]).map((t) => {
          const total = getPrice(t, d, m);
          const premium = t === 'Premium';
          return (
            <div key={t} className={`relative rounded-[28px] p-6 sm:p-7 flex flex-col ${premium ? 'water text-foam shadow-[0_30px_60px_-30px_rgba(13,47,61,.8)]' : 'bg-card border border-line'}`}>
              {premium && <span className="absolute -top-3.5 left-6 px-3 py-1 rounded-full text-sm font-bold bg-signal text-ink border-2 border-ink">Beste deal</span>}
              <p className={`text-[15px] font-semibold ${premium ? 'text-haze' : 'text-soft'}`}>{promoActive(m) ? `${m} + ${PROMO.bonusMonths} maanden` : `${m} maanden`}</p>
              <h3 className={`font-display text-[28px] font-bold tracking-[-0.03em] leading-none ${premium ? 'text-foam' : 'text-ink'}`}>{t}</h3>
              <div className="mt-4">
                <DeckPrice value={total} className={`text-[clamp(50px,14vw,70px)] font-display font-bold tracking-[-0.04em] ${premium ? 'text-foam' : 'text-ink'}`} />
                <p className={`mt-2 text-[15px] ${premium ? 'text-haze' : 'text-soft'}`}>
                  {devText} · {m} maanden{promoActive(m) ? ` + ${PROMO.bonusMonths} gratis` : ''}
                </p>
                <p className={`text-[16px] font-bold ${premium ? 'text-signal' : 'text-signal-ink'}`}>Gemiddeld {perMonth(total, m)} per maand</p>
              </div>
              <div className="mt-5 space-y-4 flex-1">
                {PACKAGE_FEATURES[t].map((g) => (
                  <div key={g.title}>
                    <p className={`plate mb-2 ${premium ? 'text-signal' : 'text-signal-ink'}`}>{g.title}</p>
                    <ul className={`space-y-2 text-[16px] ${premium ? 'text-foam' : 'text-ink'}`}>
                      {g.items.map((f) => (
                        <li key={f} className="flex gap-2.5">
                          <span className={`w-6 h-6 rounded-md flex items-center justify-center shrink-0 ${premium ? 'bg-signal text-ink' : 'bg-ink text-foam'}`}><Check className="w-3.5 h-3.5 stroke-[3]" /></span>
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <a href={orderLink(t, m, d)} target="_blank" rel="noopener noreferrer" data-ref={`${refPrefix}-${t.toLowerCase()}-${m}m-${d}app`}
                className={`mt-6 h-14 rounded-2xl flex items-center justify-center gap-2 text-lg font-bold ${premium ? 'bg-wa text-white' : 'btn-line'}`}>
                <img src={premium ? '/images/logos/whatsapp/whatsapp-blanc.svg' : '/images/logos/whatsapp/whatsapp-couleur.svg'} alt="" className="w-5 h-5" />
                Bestel {t} via WhatsApp
              </a>
            </div>
          );
        })}
      </div>

      <div className="flex flex-col items-center gap-3 text-center">
        <p className="text-[15px] text-soft">Totaalprijzen voor de hele looptijd. Je betaalt via een veilige betaallink in WhatsApp.</p>
        <div className="flex flex-wrap justify-center gap-2">
          {PAYMENT_LOGOS.map((p) => (
            <span key={p.name} className="h-9 px-2.5 rounded-xl bg-white border border-line flex items-center"><img src={p.src} alt={p.name} className="h-5 w-auto" loading="lazy" /></span>
          ))}
        </div>
      </div>
    </div>
  );
}
