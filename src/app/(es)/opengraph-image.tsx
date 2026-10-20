import { ogImage, ogSize } from '@/components/site/OgImage';

export const dynamic = 'force-static';
export const alt = 'Gabriel Iturre — AI Engineer: producto con IA de punta a punta';
export const size = ogSize;
export const contentType = 'image/png';

export default function Image() {
  return ogImage('es');
}
