import React from 'react';

export const gutter: React.CSSProperties = {
  paddingLeft: 'max(16px, env(safe-area-inset-left, 0px))',
  paddingRight: 'max(16px, env(safe-area-inset-right, 0px))',
};

/** Plaque de pont : comme les ponts numérotés d'Amsterdam, chaque section a son numéro. */
export function Plate({ n, label, dark = false }: { n?: number; label: string; dark?: boolean }) {
  return (
    <p className={`plate ${dark ? 'text-haze' : 'text-soft'}`}>
      {n !== undefined && (
        <span className={`inline-flex items-center h-7 px-2 rounded-md tnum ${dark ? 'bg-signal text-ink' : 'bg-ink text-foam'}`}>
          Brug {String(n).padStart(2, '0')}
        </span>
      )}
      <span>{label}</span>
    </p>
  );
}

/** Bloc de section : plaque, titre (h2) et intro. */
export function Section({ id, plate, n, title, intro, children, className = '', dark = false }: {
  id?: string; plate?: string; n?: number; title: string; intro?: string; children: React.ReactNode; className?: string; dark?: boolean;
}) {
  return (
    <section id={id} className={`py-16 sm:py-24 scroll-mt-20 ${dark ? 'water text-foam' : ''} ${className}`} aria-labelledby={id ? `${id}-title` : undefined}>
      <div className="max-w-6xl mx-auto" style={gutter}>
        <div className="mb-9 space-y-4 max-w-2xl">
          {plate && <Plate n={n} label={plate} dark={dark} />}
          <h2 id={id ? `${id}-title` : undefined} className={`display text-[clamp(32px,8.6vw,56px)] ${dark ? 'text-foam' : 'text-ink'}`}>{title}</h2>
          {intro && <p className={`text-[18px] ${dark ? 'text-haze' : 'text-soft'}`}>{intro}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}

/** Grille de logos (compétitions, plateformes) : pastilles blanches pour garder les logos officiels lisibles. */
export function LogoGrid({ logos, wide = false }: { logos: { src: string; alt: string }[]; wide?: boolean }) {
  return (
    <ul className={`grid gap-2.5 ${wide ? 'grid-cols-2 sm:grid-cols-3' : 'grid-cols-3 sm:grid-cols-5 lg:grid-cols-9'}`}>
      {logos.map((l) => (
        <li key={l.src} className={`rounded-2xl overflow-hidden bg-white border border-line flex items-center justify-center ${wide ? 'aspect-[16/9]' : 'aspect-square'}`}>
          <img src={l.src} alt={l.alt} className={wide ? 'w-full h-full object-cover' : 'w-[82%] h-[82%] object-contain rounded-xl'} loading="lazy" decoding="async" />
        </li>
      ))}
    </ul>
  );
}

/** Bord du quai : une ligne d'eau ondulée entre deux zones. */
export function Quay({ className = '', fill = '#0d2f3d', flip = false }: { className?: string; fill?: string; flip?: boolean }) {
  return (
    <svg viewBox="0 0 1200 40" preserveAspectRatio="none" className={`block w-full h-[22px] sm:h-[34px] ${flip ? 'rotate-180' : ''} ${className}`} aria-hidden="true">
      <path d="M0 40 L0 20 Q 50 8 100 20 T 200 20 T 300 20 T 400 20 T 500 20 T 600 20 T 700 20 T 800 20 T 900 20 T 1000 20 T 1100 20 T 1200 20 L1200 40 Z" fill={fill} />
    </svg>
  );
}
