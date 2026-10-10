import { ogImage, ogSize } from '@/components/site/OgImage';

export const alt = 'Gabriel Iturre — Freelance developer: apps, systems and websites';
export const size = ogSize;
export const contentType = 'image/png';

export default function Image() {
  return ogImage('en');
}
