import React from 'react';

/** Symbole original : un pont-levis à moitié ouvert au-dessus de l'eau, avec son feu jaune. */
export function LogoMark({ className = 'w-8 h-8' }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <rect width="32" height="32" rx="9" fill="#0c2230" />
      {/* l'eau */}
      <path d="M4 25.5 q2.5-1.6 5 0 t5 0 t5 0 t5 0 t5 0" fill="none" stroke="#4f7a8c" strokeWidth="1.3" strokeLinecap="round" />
      {/* les quais */}
      <path d="M2.5 21.5 H10 V27 H2.5 Z M22 21.5 H29.5 V27 H22 Z" fill="#eef5f7" />
      {/* le portique */}
      <path d="M9.5 21.5 V9 M13 21.5 V9 M8.5 9 H14" stroke="#eef5f7" strokeWidth="1.7" strokeLinecap="round" />
      {/* le tablier relevé */}
      <path d="M11 21 L22.5 13.2" stroke="#f7c51e" strokeWidth="2.6" strokeLinecap="round" />
      {/* le feu */}
      <circle cx="25.5" cy="9.5" r="2.1" fill="#f7c51e" />
    </svg>
  );
}

/** Wordmark « iptv bridge » (le mot-clé exact, en minuscules) + petite ligne. */
export function Logo({ size = 'md', dark = false }: { size?: 'md' | 'lg'; dark?: boolean }) {
  const lg = size === 'lg';
  return (
    <span className="inline-flex items-center gap-2.5">
      <LogoMark className={lg ? 'w-10 h-10' : 'w-8 h-8'} />
      <span className="flex flex-col leading-none">
        <span className={`font-display font-bold tracking-[-0.04em] ${lg ? 'text-[24px]' : 'text-[19px]'} ${dark ? 'text-foam' : 'text-ink'}`}>
          iptv<span className={`inline-block mx-[.18em] w-[.42em] h-[.14em] align-middle rounded-full ${dark ? 'bg-signal' : 'bg-ink'}`} />bridge
        </span>
        <span className={`mt-1 text-[10.5px] font-semibold tracking-[.16em] uppercase ${dark ? 'text-haze' : 'text-soft'}`}>de brug naar je tv</span>
      </span>
    </span>
  );
}
