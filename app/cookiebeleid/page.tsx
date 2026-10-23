import type { Metadata } from 'next';
import { LegalPage } from '../../components/LegalPage';
import { COOKIES } from '../../data/legal';

export const metadata: Metadata = {
  title: 'Cookiebeleid | iptv-bridge.com',
  description: 'Cookiebeleid van iptv-bridge.com: welke cookies wij gebruiken en hoe je je voorkeuren beheert.',
  alternates: { canonical: '/cookiebeleid/' },
};

export default function Page() {
  return <LegalPage path="/cookiebeleid/" title="Cookiebeleid" body={COOKIES} />;
}
