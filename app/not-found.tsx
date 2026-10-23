import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="max-w-xl mx-auto px-4 py-24 text-center space-y-5">
      <p className="font-display text-[96px] font-bold tracking-[-0.05em] leading-none text-ink">404</p>
      <div aria-hidden="true" className="mx-auto w-40 h-[8px] hazard rounded-full" />
      <h1 className="display text-[38px] text-ink">Deze brug staat open</h1>
      <p className="text-lg text-soft">De pagina bestaat niet (meer). Neem de brug terug naar de homepage.</p>
      <Link href="/" className="inline-flex h-14 px-6 rounded-2xl btn-signal text-lg font-bold items-center">Naar iptv bridge</Link>
    </section>
  );
}
