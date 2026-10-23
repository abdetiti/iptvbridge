'use client';

import React, { useEffect, useRef } from 'react';

/**
 * Carrousel « klapbrug » : on glisse au doigt ; les cartes sur les côtés restent un peu relevées,
 * comme un tablier ouvert, et la carte du milieu se pose à plat.
 */
export function LeafRail({ children, label, className = '' }: { children: React.ReactNode; label: string; className?: string }) {
  const rail = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const el = rail.current;
    if (!el) return;
    const items = Array.from(el.querySelectorAll<HTMLElement>('.leaf-item'));
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.target.classList.toggle('is-down', e.isIntersecting)),
      { root: el, rootMargin: '0px -36% 0px -36%', threshold: 0 },
    );
    items.forEach((i) => io.observe(i));
    return () => io.disconnect();
  }, []);

  return (
    <ul ref={rail} aria-label={label}
      className={`flex gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth pt-3 pb-8 ${className}`}
      style={{ paddingLeft: 'max(16px, env(safe-area-inset-left, 0px))', paddingRight: 'max(16px, env(safe-area-inset-right, 0px))', scrollPaddingInline: '16px', touchAction: 'pan-x pan-y' }}>
      {children}
    </ul>
  );
}
