import Link from 'next/link';
import React from 'react';
import { ChevronRight } from 'lucide-react';
import { gutter } from './Section';
import { JsonLd, breadcrumb } from './JsonLd';
import { SITE } from '../lib/site';

/** Petit pont-levis dessiné au trait (décor des en-têtes de pages). */
function BridgeSketch({ className = '' }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 320 200" className={className} fill="none" stroke="#0c2230" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M0 160 H96 V200 M224 200 V160 H320" />
      <path d="M86 160 V70 M110 160 V70 M78 70 H118" />
      <path d="M98 70 L196 18" strokeWidth="3" />
      <path d="M100 158 L208 84" strokeWidth="4" />
      <path d="M196 18 L208 84" strokeDasharray="3 5" />
      <path d="M0 182 q 20 -8 40 0 t 40 0 t 40 0 t 40 0 t 40 0 t 40 0 t 40 0 t 40 0" stroke="#4f7a8c" />
      <circle cx="252" cy="140" r="8" fill="#f7c51e" stroke="#0c2230" />
    </svg>
  );
}

/** En-tête des pages internes : fil d'Ariane, H1, intro, sur la brume du matin. */
export function PageHero({ path, crumb, title, intro, children }: {
  path: string; crumb: string; title: React.ReactNode; intro?: string; children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden fog border-b border-line">
      <JsonLd data={breadcrumb([['Home', `${SITE}/`], [crumb, `${SITE}${path}`]])} />
      <BridgeSketch className="hidden md:block pointer-events-none absolute right-6 bottom-0 w-[300px] opacity-[.22]" />
      <div className="relative max-w-6xl mx-auto pt-8 sm:pt-12 pb-12" style={gutter}>
        <nav aria-label="Kruimelpad" className="flex items-center gap-1.5 text-[15px] text-soft mb-6">
          <Link href="/" className="font-semibold hover:text-ink">iptv bridge</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-ink font-semibold">{crumb}</span>
        </nav>
        <h1 className="display text-[clamp(36px,10vw,72px)] text-ink max-w-4xl">{title}</h1>
        {intro && <p className="mt-5 text-[18px] sm:text-xl text-soft max-w-2xl">{intro}</p>}
        {children}
      </div>
      <div aria-hidden="true" className="h-[6px] hazard opacity-90" />
    </section>
  );
}

export function WaButton({ href, label, track, className = '' }: { href: string; label: string; track?: string; className?: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" data-ref={track} className={`inline-flex items-center justify-center gap-2 h-14 px-6 rounded-2xl bg-wa text-white text-lg font-bold ${className}`}>
      <img src="/images/logos/whatsapp/whatsapp-blanc.svg" alt="" className="w-5 h-5" />
      {label}
    </a>
  );
}
