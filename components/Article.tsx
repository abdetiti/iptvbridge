import Link from 'next/link';
import React from 'react';
import { PageHero, WaButton } from './PageHero';
import { BarrierFaq } from './BarrierFaq';
import { gutter } from './Section';
import { JsonLd, faqSchema } from './JsonLd';
import { Faq } from '../data/faq';
import { SITE, waLink } from '../lib/site';
import { orderLink, PRICES, perMonth } from '../lib/pricing';

export interface ArticleSection { id: string; title: string; body: React.ReactNode }

const FROM = perMonth(PRICES.Standard[1][12], 12);
const ORG = { '@type': 'Organization', name: 'iptv-bridge.com' };

/** Modèle des pages guides : réponse courte, image, sommaire « de oversteek », sections, FAQ, WhatsApp, « Lees ook ». */
export function Article({ path, crumb, h1, lead, image, sections, faq, related, waText, howTo, extraSchema }: {
  path: string; crumb: string; h1: string; lead: string;
  image: { src: string; alt: string; w: number; h: number; pos?: string };
  sections: ArticleSection[]; faq: Faq[]; related: [string, string][]; waText: string;
  howTo?: { name: string; steps: string[] };
  extraSchema?: object[];
}) {
  const url = `${SITE}${path}`;
  const data: object[] = [
    { '@context': 'https://schema.org', '@type': 'Article', headline: h1, description: lead, image: `${SITE}${image.src}`, inLanguage: 'nl-NL', mainEntityOfPage: url, author: ORG, publisher: { ...ORG, logo: { '@type': 'ImageObject', url: `${SITE}/icon-512.png` } }, dateModified: '2026-10-23' },
    faqSchema(faq),
    ...(extraSchema || []),
  ];
  if (howTo) data.push({ '@context': 'https://schema.org', '@type': 'HowTo', name: howTo.name, inLanguage: 'nl-NL', step: howTo.steps.map((s, k) => ({ '@type': 'HowToStep', position: k + 1, text: s })) });

  const toc = (
    <ol className="space-y-1">
      {sections.map((s, k) => (
        <li key={s.id}>
          <a href={`#${s.id}`} className="group flex items-start gap-3 py-1.5 text-[16px] text-ink">
            <span aria-hidden="true" className="shrink-0 mt-0.5 inline-flex items-center justify-center w-8 h-6 rounded-md bg-ink text-foam font-display font-bold text-[11px] tnum group-hover:bg-signal group-hover:text-ink transition-colors">{String(k + 1).padStart(2, '0')}</span>
            <span className="group-hover:underline decoration-signal decoration-[3px] underline-offset-4">{s.title}</span>
          </a>
        </li>
      ))}
    </ol>
  );

  return (
    <>
      <JsonLd data={data} />
      <PageHero path={path} crumb={crumb} title={h1} intro={lead} />
      <div className="max-w-6xl mx-auto pt-10 pb-20 grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-10" style={gutter}>
        <article className="min-w-0">
          <img src={image.src} alt={image.alt} width={image.w} height={image.h} style={{ objectPosition: image.pos }} className="w-full aspect-[16/9] object-cover rounded-[28px] border-2 border-ink" fetchPriority="high" />

          <nav aria-label="Inhoud" className="lg:hidden mt-8 p-5 rounded-3xl bg-card border border-line">
            <p className="plate text-soft mb-3">De oversteek van dit artikel</p>
            {toc}
          </nav>

          <div className="prose-brug text-[17px] leading-relaxed">
            {sections.map((s) => (
              <section key={s.id} id={s.id} className="scroll-mt-24">
                <h2>{s.title}</h2>
                {s.body}
              </section>
            ))}
          </div>

          <div className="mt-12 p-6 sm:p-8 rounded-[28px] water text-foam">
            <p className="font-display text-[26px] font-bold tracking-[-0.03em] leading-tight">Liever meteen de brug over?</p>
            <p className="mt-3 text-haze text-[17px]">Kies je pakket en bestel via WhatsApp. Direct actief na je betaling, en we helpen je met koppelen.</p>
            <div className="mt-5 grid sm:grid-cols-2 gap-3">
              <WaButton href={waLink(waText)} label="Vraag het via WhatsApp" track={`artikel-${path.replace(/\//g, '')}`} />
              <a href={orderLink('Premium', 12, 1)} target="_blank" rel="noopener noreferrer" data-ref="artikel-bestel" className="h-14 rounded-2xl btn-signal text-lg font-bold flex items-center justify-center">Bestel Premium</a>
            </div>
          </div>

          <section className="mt-14" aria-labelledby="faq-title">
            <h2 id="faq-title" className="display text-[34px] text-ink mb-4">Veelgestelde vragen</h2>
            <BarrierFaq items={faq} />
          </section>

          <section className="mt-14" aria-labelledby="lees-ook">
            <h2 id="lees-ook" className="display text-[30px] text-ink mb-4">Lees ook</h2>
            <ul className="grid sm:grid-cols-2 gap-3">
              {related.map(([href, label]) => (
                <li key={href}><Link href={href} className="group flex items-center justify-between gap-3 p-5 rounded-2xl bg-card border-2 border-line font-bold text-ink hover:border-ink">{label}<span aria-hidden="true" className="text-ink transition-transform group-hover:translate-x-1">→</span></Link></li>
              ))}
            </ul>
          </section>
        </article>

        <aside className="hidden lg:block">
          <div className="sticky top-24 space-y-4">
            <nav aria-label="Inhoud" className="p-5 rounded-3xl bg-card border border-line">
              <p className="plate text-soft mb-3">De oversteek</p>
              {toc}
            </nav>
            <Link href="/abonnement/" className="block p-5 rounded-3xl water text-foam">
              <span className="block plate text-signal">iptv bridge</span>
              <span className="block font-display text-[22px] font-bold tracking-[-0.03em] leading-tight mt-1">Bekijk de pakketten</span>
              <span className="block text-[15px] text-haze mt-2">Vanaf {FROM} per maand</span>
            </Link>
          </div>
        </aside>
      </div>
    </>
  );
}

/** Tableau : en cartes sur téléphone, en tableau sur grand écran. */
export function Table({ head, rows }: { head: string[]; rows: string[][] }) {
  return (
    <div className="my-6 not-prose">
      <ul className="sm:hidden space-y-2.5 !p-0 !list-none">
        {rows.map((r) => (
          <li key={r[0]} className="!m-0 p-4 rounded-2xl bg-card border border-line">
            <p className="!m-0 font-bold text-ink">{r[0]}</p>
            {r.slice(1).map((c, k) => (
              <p key={k} className="!m-0 !mt-1 text-[15px] text-soft"><span className="font-semibold text-ink">{head[k + 1]}: </span>{c}</p>
            ))}
          </li>
        ))}
      </ul>
      <div className="hidden sm:block overflow-x-auto rounded-3xl border border-line bg-card">
        <table className="w-full text-left text-[15px]">
          <thead><tr className="bg-ink">{head.map((h) => <th key={h} scope="col" className="p-4 font-bold text-foam">{h}</th>)}</tr></thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r[0]} className="border-b border-line last:border-0">
                {r.map((c, k) => (k === 0 ? <th key={k} scope="row" className="p-4 font-semibold text-ink">{c}</th> : <td key={k} className="p-4 text-soft">{c}</td>))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/** Encadré « onze tip » : une plaque jaune comme un panneau au bord du quai. */
export function Tip({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="my-6 p-5 rounded-2xl bg-signal/25 border-2 border-ink">
      <p className="plate text-ink !m-0">{title}</p>
      <div className="[&>p]:!mt-2 [&>p]:!mb-0">{children}</div>
    </div>
  );
}

/** Étapes numérotées, posées comme les planches d'un tablier (guides pas à pas). */
export function Steps({ items }: { items: React.ReactNode[] }) {
  return (
    <ol className="!list-none !pl-0 relative my-6">
      <span aria-hidden="true" className="absolute left-[17px] top-4 bottom-4 w-[4px] rounded-full" style={{ backgroundImage: 'repeating-linear-gradient(180deg, #0c2230 0 8px, transparent 8px 13px)' }} />
      {items.map((s, k) => (
        <li key={k} className="relative !my-0 pl-14 py-2.5">
          <span aria-hidden="true" className={`absolute left-0 top-2 w-9 h-9 rounded-lg font-display font-bold text-[15px] flex items-center justify-center border-2 border-ink ${k === items.length - 1 ? 'bg-signal text-ink' : 'bg-ink text-foam'}`}>{k + 1}</span>
          <span className="block text-ink">{s}</span>
        </li>
      ))}
    </ol>
  );
}
