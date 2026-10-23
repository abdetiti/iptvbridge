'use client';

import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const SOURCE_KEY = 'iptvbridge_source';
const CONSENT_KEY = 'iptvbridge_cookie_consent';

/** Retient gclid / utm_source à l'arrivée (une fois par session). */
function sourceCode(): string | null {
  try {
    const params = new URLSearchParams(window.location.search);
    const gclid = params.get('gclid');
    const utm = params.get('utm_source');
    if (gclid) sessionStorage.setItem(SOURCE_KEY, `G-${gclid.slice(-6)}`);
    else if (utm) sessionStorage.setItem(SOURCE_KEY, `U-${utm.slice(0, 12)}`);
    return sessionStorage.getItem(SOURCE_KEY);
  } catch {
    return null;
  }
}

/**
 * Suivi de tous les liens WhatsApp du site : événement GA4 `whatsapp_click` (page + ref),
 * et code de campagne ajouté au message quand le visiteur vient d'une annonce.
 */
export function WhatsAppTracking() {
  const pathname = usePathname();

  useEffect(() => {
    sourceCode();
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement)?.closest?.('a[href*="wa.me/"]') as HTMLAnchorElement | null;
      if (!a) return;
      const payload = { page: window.location.pathname, ref: a.dataset.ref || 'link' };
      if (typeof window.gtag === 'function') window.gtag('event', 'whatsapp_click', payload);
      else (window.dataLayer = window.dataLayer || []).push({ event: 'whatsapp_click', ...payload });

      const code = sourceCode();
      if (code && !a.dataset.tagged) {
        try {
          const url = new URL(a.href);
          const text = url.searchParams.get('text') || '';
          url.searchParams.set('text', `${text} [${code}]`);
          a.href = url.toString();
          a.dataset.tagged = '1';
        } catch {}
      }
    };
    document.addEventListener('click', onClick, true);
    return () => document.removeEventListener('click', onClick, true);
  }, []);

  // Remonter en haut à chaque changement de page
  useEffect(() => {
    if (!window.location.hash) window.scrollTo({ top: 0 });
  }, [pathname]);

  return null;
}

/** Bandeau cookies (Consent Mode v2 : tout est refusé tant que le visiteur n'accepte pas). */
export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let consent: string | null = null;
    try { consent = localStorage.getItem(CONSENT_KEY); } catch {}
    if (!consent) {
      const t = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(t);
    }
  }, []);

  const choose = (value: 'accepted' | 'essential') => {
    try { localStorage.setItem(CONSENT_KEY, value); } catch {}
    if (value === 'accepted') {
      window.gtag?.('consent', 'update', {
        ad_storage: 'granted',
        ad_user_data: 'granted',
        ad_personalization: 'granted',
        analytics_storage: 'granted',
      });
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed left-3 right-3 bottom-[96px] lg:bottom-5 lg:left-auto lg:right-5 lg:max-w-md z-[60]" role="dialog" aria-label="Cookievoorkeuren">
      <div className="p-4 sm:p-5 rounded-2xl bg-card border border-line shadow-2xl shadow-ink/25 space-y-3">
        <p className="text-[15px] text-soft leading-relaxed">
          Wij gebruiken cookies om de website te analyseren en onze advertenties te meten. Je kiest zelf of je dit toestaat. Lees meer in ons{' '}
          <a href="/cookiebeleid/" className="underline text-ink">cookiebeleid</a>.
        </p>
        <div className="flex gap-2">
          <button type="button" onClick={() => choose('accepted')} className="flex-1 min-h-[44px] rounded-xl btn-signal text-sm font-bold">
            Accepteren
          </button>
          <button type="button" onClick={() => choose('essential')} className="flex-1 min-h-[44px] rounded-xl border-[1.5px] border-ink text-ink text-sm font-semibold">
            Alleen noodzakelijk
          </button>
        </div>
      </div>
    </div>
  );
}
