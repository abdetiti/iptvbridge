import type { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';
import { PageHero, WaButton } from '../../components/PageHero';
import { WA_HELLO } from '../../lib/site';
import { orderLink } from '../../lib/pricing';

export const metadata: Metadata = {
  title: 'Contact via WhatsApp | iptv-bridge.com',
  description: 'Contact met iptv-bridge.com via WhatsApp: voor bestellen, vragen over de pakketten, hulp bij koppelen of een storing.',
  alternates: { canonical: '/contact/' },
  openGraph: { url: '/contact/' },
};

export default function Page() {
  return (
    <>
      <PageHero path="/contact/" crumb="Contact" title="Contact" intro="Je bereikt ons via WhatsApp, in het Nederlands. Voor je bestelling, een vraag over de pakketten, hulp bij het koppelen van je apparaat of beeld dat hapert.">
        <div className="mt-8 grid gap-3 max-w-md">
          <WaButton href={WA_HELLO} label="Stel een vraag via WhatsApp" track="contact-vraag" />
          <a href={orderLink('Premium', 12, 1)} target="_blank" rel="noopener noreferrer" data-ref="contact-bestel" className="h-14 rounded-2xl btn-line text-lg font-bold flex items-center justify-center">
            Direct bestellen
          </a>
        </div>
        <p className="mt-8 max-w-xl text-[16px] text-soft">Hapert of bevriest het beeld? Kijk eerst even in <Link href="/iptv-bridge-storing/" className="link">iptv bridge storing</Link>: vaak los je het daarmee in een paar minuten op.</p>
      </PageHero>
      <div className="h-16" />
    </>
  );
}
