import { Home } from '@/components/site/Home';
import { pageMetadata } from '@/content/meta';

export const metadata = pageMetadata('en', 'home');

export default function Page() {
  return <Home lang="en" />;
}
