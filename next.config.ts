import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Links cortos para redes (LinkedIn, TikTok): llevan a la sección correspondiente.
  async redirects() {
    return [
      { source: "/agenda", destination: "/#agendar", permanent: false },
      { source: "/en/agenda", destination: "/en#agendar", permanent: false },
      { source: "/guia", destination: "/#guia", permanent: false },
      { source: "/en/guide", destination: "/en#guia", permanent: false },
    ];
  },
};

export default nextConfig;
