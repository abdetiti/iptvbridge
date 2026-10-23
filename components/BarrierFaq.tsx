'use client';

import React, { useState } from 'react';
import { Faq } from '../data/faq';

/**
 * FAQ « slagboom » : à droite de chaque question, une petite barrière rayée.
 * Elle se lève quand la réponse s'ouvre, et le passage s'éclaire en jaune. Les réponses restent dans le HTML (SEO).
 */
export function BarrierFaq({ items, dark = false }: { items: Faq[]; dark?: boolean }) {
  const [open, setOpen] = useState(0);
  return (
    <div className={`border-t-2 ${dark ? 'border-foam/20' : 'border-ink'}`}>
      {items.map((f, k) => {
        const on = open === k;
        return (
          <div key={f.question} className={`border-b ${dark ? 'border-foam/15' : 'border-line'}`}>
            <h3>
              <button type="button" aria-expanded={on} onClick={() => setOpen(on ? -1 : k)}
                className={`w-full flex items-center justify-between gap-4 py-5 text-left text-[18.5px] font-bold font-sans leading-snug ${dark ? 'text-foam' : 'text-ink'}`}>
                {f.question}
                <span aria-hidden="true" className="relative shrink-0 w-[52px] h-[34px]">
                  <span className={`absolute left-[4px] bottom-0 w-[8px] h-[26px] rounded-sm ${dark ? 'bg-foam' : 'bg-ink'}`} />
                  <span className="absolute left-[6px] bottom-[17px] w-[44px] h-[7px] rounded-full hazard origin-[2px_50%] transition-transform duration-500 ease-[cubic-bezier(.3,1.35,.45,1)]"
                    style={{ transform: on ? 'rotate(-62deg)' : 'rotate(0deg)' }} />
                  <span className={`absolute left-[3px] bottom-[24px] w-[10px] h-[10px] rounded-full border-2 transition-colors ${on ? 'bg-signal border-ink' : dark ? 'bg-canal border-foam' : 'bg-fog border-ink'}`} />
                </span>
              </button>
            </h3>
            <div className="grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(.2,.9,.2,1)]" style={{ gridTemplateRows: on ? '1fr' : '0fr' }}>
              <div className="overflow-hidden">
                <div className="relative pl-5 pb-6 pr-6 sm:pr-14">
                  <span aria-hidden="true" className="absolute left-0 top-1 bottom-6 w-[4px] rounded-full bg-signal origin-top transition-transform duration-700 ease-[cubic-bezier(.3,1.2,.45,1)]" style={{ transform: on ? 'scaleY(1)' : 'scaleY(0)' }} />
                  <p className={`text-[17px] leading-relaxed ${dark ? 'text-haze' : 'text-soft'}`}>{f.answer}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
