import { Home } from '@/components/site/Home';
import { pageMetadata } from '@/content/meta';

export const metadata = pageMetadata('es', 'home');

export default function Page() {
  return <Home lang="es" />;
}
