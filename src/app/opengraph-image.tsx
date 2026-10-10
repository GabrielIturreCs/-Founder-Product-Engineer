import { ogImage, ogSize } from '@/components/seo/OgImage';

export const alt = 'Gabriel Iturre — Programador Full Stack freelance';
export const size = ogSize;
export const contentType = 'image/png';

export default function Image() {
  return ogImage('es');
}
