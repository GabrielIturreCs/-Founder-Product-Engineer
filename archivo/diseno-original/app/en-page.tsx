import { pageMetadata } from '@/content/meta';
import Home from '../page';

export const metadata = pageMetadata('en', 'home');

export default function Page() {
  return <Home />;
}
