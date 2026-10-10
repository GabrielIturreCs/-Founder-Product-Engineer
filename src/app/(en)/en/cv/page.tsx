import { Cv } from '@/components/site/Cv';
import { pageMetadata } from '@/content/meta';
import '@/app/cv.css';

export const metadata = pageMetadata('en', 'cv');

export default function Page() {
  return <Cv lang="en" />;
}
