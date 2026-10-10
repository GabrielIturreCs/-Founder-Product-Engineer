import { Shell } from '@/components/site/Shell';
import { SITE_URL } from '@/content/site';

export { viewport } from '@/content/meta';
export const metadata = { metadataBase: new URL(SITE_URL) };

export default function Layout({ children }: { children: React.ReactNode }) {
  return <Shell lang="es">{children}</Shell>;
}
