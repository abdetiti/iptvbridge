import type { Metadata } from 'next';
import { LegalPage } from '../../components/LegalPage';
import { PRIVACY } from '../../data/legal';

export const metadata: Metadata = {
  title: 'Privacybeleid | iptv-bridge.com',
  description: 'Privacybeleid van iptv-bridge.com: welke gegevens wij verwerken en welke rechten je hebt.',
  alternates: { canonical: '/privacybeleid/' },
};

export default function Page() {
  return <LegalPage path="/privacybeleid/" title="Privacybeleid" body={PRIVACY} />;
}
