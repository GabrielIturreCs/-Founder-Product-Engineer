import { RootShell } from '@/components/site/RootShell';

import { SITE_URL } from '@/content/site';

export { viewport } from '@/content/meta';
export const metadata = { metadataBase: new URL(SITE_URL) };

export default function EsLayout({ children }: { children: React.ReactNode }) {
  return <RootShell lang="es">{children}</RootShell>;
}
