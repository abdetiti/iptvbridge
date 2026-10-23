'use client';

import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';
import { WA_HELLO } from '../lib/site';
import { NAV, GUIDES } from '../lib/nav';

/** Le tablier de lecture : sous l'en-tête, le pont se construit planche par planche pendant la lecture ; le feu s'allume à l'autre rive. */
function useDeck() {
  const deck = useRef<HTMLSpanElement>(null);
  const lamp = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      if (deck.current) deck.current.style.transform = `scaleX(${p})`;
      if (lamp.current) lamp.current.style.opacity = p > 0.985 ? '1' : p > 0.01 ? '.3' : '0';
    };
    const on = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', on, { passive: true });
    window.addEventListener('resize', on);
    return () => { window.removeEventListener('scroll', on); window.removeEventListener('resize', on); if (raf) cancelAnimationFrame(raf); };
  }, []);
  return { deck, lamp };
}

export function Header() {
  const [open, setOpen] = useState(false);
  const { deck, lamp } = useDeck();

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 bg-fog/90 backdrop-blur-xl border-b border-line" style={{ paddingTop: 'env(safe-area-inset-top, 0px)' }}>
      <div className="max-w-6xl mx-auto h-[66px] flex items-center justify-between gap-3" style={{ paddingLeft: 'max(16px, env(safe-area-inset-left, 0px))', paddingRight: 'max(16px, env(safe-area-inset-right, 0px))' }}>
        <Link href="/" aria-label="iptv bridge, naar de homepage" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav aria-label="Hoofdmenu" className="hidden lg:flex items-center gap-1 text-[15px] font-semibold text-soft">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className="px-3 py-2 rounded-xl hover:bg-ink/[.06] hover:text-ink transition-colors inline-flex items-center gap-1.5">
              {n.label}
              {n.badge && <span className="px-1.5 py-0.5 rounded-md text-[11px] font-bold bg-signal text-ink">{n.badge}</span>}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href={WA_HELLO} target="_blank" rel="noopener noreferrer" data-ref="header" aria-label="Vraag het via WhatsApp" className="inline-flex items-center gap-2 h-11 px-3.5 sm:px-4 rounded-2xl bg-wa text-white text-[15px] font-bold">
            <img src="/images/logos/whatsapp/whatsapp-blanc.svg" alt="" className="w-[19px] h-[19px]" />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
          <button type="button" className="lg:hidden w-11 h-11 rounded-2xl btn-line flex items-center justify-center" aria-label={open ? 'Menu sluiten' : 'Menu openen'} aria-expanded={open} onClick={() => setOpen(!open)}>
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Le tablier qui se construit avec la lecture */}
      <div className="absolute left-0 right-0 bottom-[-1px] h-[4px]" aria-hidden="true">
        <span ref={deck} className="block h-full origin-left bg-ink planks" style={{ transform: 'scaleX(0)', backgroundImage: 'repeating-linear-gradient(90deg, #0c2230 0 14px, #f7c51e 14px 16px)' }} />
        <span ref={lamp} className="absolute right-1.5 -top-[4px] w-3 h-3 rounded-full bg-signal border-2 border-ink transition-opacity" style={{ opacity: 0 }} />
      </div>

      {open && (
        <div className="lg:hidden fixed inset-x-0 top-[calc(66px+env(safe-area-inset-top,0px))] bottom-0 fog fade-in overflow-y-auto">
          <nav aria-label="Mobiel menu" className="flex flex-col p-4 gap-1 pb-32">
            {NAV.map((n, k) => (
              <Link key={n.href} href={n.href} onClick={() => setOpen(false)} className="flex items-center justify-between px-3 py-3.5 rounded-2xl hover:bg-ink/[.05]">
                <span className="inline-flex items-center gap-3">
                  <span className="inline-flex items-center h-7 px-2 rounded-md bg-ink text-foam font-display font-bold text-[12px] tnum">{String(k + 1).padStart(2, '0')}</span>
                  <span className="font-display text-[24px] font-bold tracking-[-0.03em] leading-none text-ink">{n.label}</span>
                  {n.badge && <span className="px-2 py-0.5 rounded-md text-xs font-bold bg-signal text-ink">{n.badge}</span>}
                </span>
                <span aria-hidden="true" className="text-ink text-xl">→</span>
              </Link>
            ))}
            <p className="px-3 pt-6 pb-1 plate text-soft">Gidsen</p>
            {GUIDES.map(([href, label]) => (
              <Link key={href} href={href} onClick={() => setOpen(false)} className="px-3 py-2.5 text-[18px] font-semibold text-ink">{label}</Link>
            ))}
            <Link href="/bestellen/" onClick={() => setOpen(false)} className="px-3 py-2.5 text-[18px] font-semibold text-ink">Hoe bestellen</Link>
            <Link href="/over-ons/" onClick={() => setOpen(false)} className="px-3 py-3 text-[18px] font-semibold text-soft">Over ons</Link>
            <Link href="/contact/" onClick={() => setOpen(false)} className="px-3 py-3 text-[18px] font-semibold text-soft">Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
