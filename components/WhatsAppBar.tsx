'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { orderLink } from '../lib/pricing';

/**
 * Sur téléphone : une barre en bas (Prijzen + Bestel). Quand on descend, elle se relève comme un tablier
 * et laisse un bouton rond WhatsApp à portée du pouce ; elle se rabat quand on remonte.
 */
export function WhatsAppBar() {
  const [up, setUp] = useState(false);

  useEffect(() => {
    let last = window.scrollY;
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        if (Math.abs(y - last) > 8) {
          setUp(y > last && y > 320);
          last = y;
        }
        ticking = false;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const spring = 'transition-transform duration-500 ease-[cubic-bezier(.3,1.25,.45,1)]';

  return (
    <aside aria-label="Bestellen via WhatsApp" className="lg:hidden">
      <div className={`fixed bottom-0 inset-x-0 z-40 bg-fog/95 backdrop-blur-xl border-t-[3px] border-ink origin-bottom-left ${spring} ${up ? 'translate-y-[110%] -rotate-6' : 'translate-y-0'}`}
        style={{ paddingBottom: 'calc(10px + env(safe-area-inset-bottom, 0px))', paddingTop: 10, paddingLeft: 'max(12px, env(safe-area-inset-left, 0px))', paddingRight: 'max(12px, env(safe-area-inset-right, 0px))' }}>
        <div className="max-w-md mx-auto grid grid-cols-[auto_1fr] gap-2">
          <Link href="/abonnement/" className="h-[52px] px-4 rounded-2xl btn-line flex items-center font-bold" tabIndex={up ? -1 : 0}>
            Prijzen
          </Link>
          <a href={orderLink('Premium', 12, 1)} target="_blank" rel="noopener noreferrer" data-ref="bar-mobiel" tabIndex={up ? -1 : 0} className="h-[52px] rounded-2xl bg-wa text-white font-bold flex items-center justify-center gap-2">
            <img src="/images/logos/whatsapp/whatsapp-blanc.svg" alt="" className="w-5 h-5" />
            Bestel via WhatsApp
          </a>
        </div>
      </div>
      <a href={orderLink('Premium', 12, 1)} target="_blank" rel="noopener noreferrer" data-ref="knop-mobiel" aria-label="Bestel via WhatsApp" tabIndex={up ? 0 : -1}
        className={`fixed z-40 right-4 w-14 h-14 rounded-full bg-wa border-[3px] border-signal shadow-[0_14px_28px_-10px_rgba(15,125,66,.8)] flex items-center justify-center ${spring} ${up ? 'scale-100' : 'scale-0'}`}
        style={{ bottom: 'calc(16px + env(safe-area-inset-bottom, 0px))' }}>
        <img src="/images/logos/whatsapp/whatsapp-blanc.svg" alt="" className="w-7 h-7" />
      </a>
    </aside>
  );
}
