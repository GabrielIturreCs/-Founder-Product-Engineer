import { Cv } from '@/components/seo/Cv';
import { pageMetadata } from '@/content/meta';
import '@/app/cv.css';

export const metadata = pageMetadata('es', 'cv');

export default function Page() {
  return <Cv lang="es" />;
}
