// Réglages du site www.iptv-bridge.com (changer ici seulement)
export const SITE = 'https://www.iptv-bridge.com';
export const BRAND = 'iptv bridge';
export const DOMAIN = 'www.iptv-bridge.com';

// Numéro WhatsApp (règle d'or n°3 : jamais affiché, seulement dans les liens wa.me).
export const WA_NUMBER = '447456060918';
// Emoji discret propre à ce site, à la fin de chaque message (pour savoir d'où vient le client).
export const SITE_MARK = '🌉';

export function waLink(message: string): string {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(`${message} ${SITE_MARK}`)}`;
}

export const WA_HELLO = waLink('Hoi, ik heb een vraag over iptv bridge.');

// « iptv bridge » est notre propre marque (décision du 23/10/2026).
// Toujours : « eigen merk, niet verbonden aan andere diensten met Bridge in de naam ». Jamais « officieel ».
export const INDEPENDENT_NOTE =
  'iptv bridge is een eigen, onafhankelijk merk van iptv-bridge.com. We zijn niet verbonden aan andere diensten, apps of websites met ‘Bridge’ in hun naam.';
