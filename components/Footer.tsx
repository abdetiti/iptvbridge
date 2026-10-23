import Link from 'next/link';
import React from 'react';
import { Logo } from './Logo';
import { Quay } from './Section';
import { GUIDES } from '../lib/nav';
import { PAYMENT_LOGOS } from '../data/media';
import { BOX } from '../data/box';
import { WA_HELLO, INDEPENDENT_NOTE } from '../lib/site';

const COLS = [
  {
    title: 'iptv bridge',
    links: [
      ['/', 'iptv bridge'],
      ['/abonnement/', 'Abonnement en prijzen'],
      ['/bestellen/', 'Hoe bestellen'],
      ['/android-tv-box/', 'Android TV Box'],
      ['/zenders/', 'Zenders'],
      ['/sport/', 'Sport'],
      ['/films-series/', 'Films en series'],
      ['/faq/', 'Veelgestelde vragen'],
    ],
  },
  { title: 'Gidsen', links: GUIDES.map(([h, l]) => [h, l]) },
  {
    title: 'Over',
    links: [
      ['/over-ons/', 'Over ons'],
      ['/contact/', 'Contact'],
      ['/disclaimer/', 'Disclaimer'],
    ],
  },
  {
    title: 'Juridisch',
    links: [
      ['/algemene-voorwaarden/', 'Algemene voorwaarden'],
      ['/privacybeleid/', 'Privacybeleid'],
      ['/cookiebeleid/', 'Cookiebeleid'],
      ['/retourbeleid/', 'Retourbeleid'],
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative">
      <Quay fill="#0d2f3d" />
      <div className="water text-foam pb-wa lg:pb-0">
        <div className="max-w-6xl mx-auto pt-10 pb-14 space-y-10" style={{ paddingLeft: 'max(16px, env(safe-area-inset-left, 0px))', paddingRight: 'max(16px, env(safe-area-inset-right, 0px))' }}>
          {/* Coin box (présent sur toutes les pages du réseau) */}
          <Link href="/android-tv-box/" className="group flex items-center gap-4 p-4 sm:p-5 rounded-3xl bg-canal2 border border-foam/10 hover:border-signal/70 transition-colors">
            <img src="/images/android-tv-box/box-en-afstandsbediening-thumb.webp" alt="Android 14 TV Box" width={72} height={72} className="w-[72px] h-[72px] rounded-2xl object-cover" loading="lazy" />
            <span className="flex-1 min-w-0">
              <span className="block text-lg font-bold leading-tight">Android TV Box + {BOX.months} maanden</span>
              <span className="block text-[15px] text-haze">4K-kastje, klaar voor gebruik, binnen {BOX.deliveryDays} dagen in huis · €{BOX.price}</span>
            </span>
            <span aria-hidden="true" className="text-2xl text-signal transition-transform group-hover:translate-x-1">→</span>
          </Link>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr_1fr]">
            <div className="space-y-4">
              <Logo size="lg" dark />
              <p className="text-[15px] text-haze max-w-sm">
                iptv bridge in Nederland: bestellen en hulp bij het koppelen via WhatsApp, in het Nederlands, direct actief na je betaling.
              </p>
              <a href={WA_HELLO} target="_blank" rel="noopener noreferrer" data-ref="footer" className="inline-flex items-center gap-2 h-12 px-5 rounded-2xl bg-wa text-white font-bold">
                <img src="/images/logos/whatsapp/whatsapp-blanc.svg" alt="" className="w-5 h-5" />
                Vraag het via WhatsApp
              </a>
            </div>
            {COLS.map((c) => (
              <div key={c.title}>
                <p className="plate text-signal mb-3">{c.title}</p>
                <ul className="space-y-2.5 text-[15px] text-haze">
                  {c.links.map(([href, label]) => (
                    <li key={href}><Link href={href} className="hover:text-foam">{label}</Link></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {PAYMENT_LOGOS.map((p) => (
              <span key={p.name} className="h-9 px-2.5 rounded-xl bg-white flex items-center">
                <img src={p.src} alt={p.name} className="h-5 w-auto" loading="lazy" />
              </span>
            ))}
          </div>

          <div className="p-4 rounded-2xl bg-canal2 border border-foam/10 text-sm text-haze leading-relaxed space-y-2">
            <p>{INDEPENDENT_NOTE}</p>
            <p>Merknamen en logo’s van zenders, competities, apps en apparaten zijn van hun eigenaren en worden alleen gebruikt om te laten zien wat je kunt kijken en waarop.</p>
          </div>

          <p className="text-sm text-haze">© {new Date().getFullYear()} iptv-bridge.com · www.iptv-bridge.com · Contact alleen via WhatsApp</p>
        </div>
      </div>
    </footer>
  );
}
