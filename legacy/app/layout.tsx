import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import "@mantine/notifications/styles.css";
import "./globals.css";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { theme } from "./theme";
import { LanguageProvider } from "./LanguageProvider";
import { SoundProvider } from "./SoundProvider";
import { SmoothScroll } from "../components/SmoothScroll";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const serif = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-serif",
  style: ["italic", "normal"]
});

export const viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://gabrieliturre.dev"),
  title: "Gabriel Iturre | AI & Product Engineer | SaaS Infrastructure Architect",
  description: "AI & Product Engineer especializado en la construcción E2E de plataformas SaaS y arquitecturas cloud multi-tenant. Orquesto flujos con modelos de lenguaje y agentes autónomos.",
  keywords: [
    "Gabriel Iturre", 
    "AI & Product Engineer Argentina", 
    "SaaS Infrastructure Architect",
    "Full Stack & AI Engineer LATAM", 
    "AI Orchestration Specialist",
    "SaaS Builder Latin America",
    "Next.js 16 Expert", 
    "Multi-tenant Architecture Expert",
    "KILO Retail OS", 
    "SLOT MEDICAL AI", 
    "Autonomous Systems Engineering"
  ],
  authors: [{ name: "Gabriel Iturre" }],
  creator: "Gabriel Iturre",
  publisher: "Gabriel Iturre",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Gabriel Iturre | AI & Product Engineer | SaaS Architect",
    description: "Orquesto flujos con modelos de lenguaje y agentes autónomos para la generación de código, optimizando la lógica operativa y erradicando tareas manuales.",
    url: "https://gabrieliturre.dev",
    siteName: "Gabriel Iturre Portfolio 2026",
    images: [
      {
        url: "/Images/gabriel-iturre-programador-jujuy.png",
        width: 1200,
        height: 630,
        alt: "Gabriel Iturre - Full Stack & AI Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gabriel Iturre | Full Stack & AI Engineer",
    description: "SaaS Architect & AI Engineer building the future of intelligent products.",
    images: ["/Images/gabriel-iturre-programador-jujuy.png"],
  },
  icons: {
    icon: "/Images/gabriel-iturre-programador-jujuy.png",
    apple: "/Images/gabriel-iturre-programador-jujuy.png",
  },
  alternates: {
    canonical: "https://gabrieliturre.dev",
  },
};

import { FirebaseAnalytics } from "../components/FirebaseAnalytics";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Gabriel Iturre",
    "url": "https://gabrieliturre.dev",
    "image": "https://gabrieliturre.dev/Images/gabriel-iturre-programador-jujuy.png",
    "sameAs": [
      "https://github.com/GabrielIturreCs",
      "https://www.linkedin.com/in/gabriel-iturre-73900626a/"
    ],
    "jobTitle": "AI & Product Engineer",
    "worksFor": {
      "@type": "Organization",
      "name": "KILO SaaS / ZonaSalud"
    },
    "description": "AI & Product Engineer y Fundador de KILO y SLOT MEDICAL, especializado en la construcción de infraestructuras inteligentes y ecosistemas SaaS en Argentina y Latinoamérica.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Buenos Aires",
      "addressRegion": "Argentina",
      "addressCountry": "AR"
    }
  };

  const softwareLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "KILO ERP",
    "operatingSystem": "Web, Android, iOS",
    "applicationCategory": "BusinessApplication",
    "offers": {
      "@type": "Offer",
      "price": "0"
    },
    "author": {
      "@type": "Person",
      "name": "Gabriel Iturre"
    }
  };

  return (
    <html lang="es" suppressHydrationWarning className={`${inter.variable} ${serif.variable}`}>
      <head>
        <ColorSchemeScript defaultColorScheme="dark" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareLd) }}
        />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <MantineProvider theme={theme} defaultColorScheme="dark">
          <FirebaseAnalytics />
          <LanguageProvider>
            <SoundProvider>
              <Notifications position="top-right" zIndex={3000} />
              <SmoothScroll>
                {children}
              </SmoothScroll>
            </SoundProvider>
          </LanguageProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
