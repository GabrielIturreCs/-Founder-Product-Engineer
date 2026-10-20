import type { NextConfig } from "next";

// Sitio estático (carpeta out/) servido por el Worker de Cloudflare (wrangler.jsonc).
// Los links cortos /agenda y /guia están en public/_redirects.
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
