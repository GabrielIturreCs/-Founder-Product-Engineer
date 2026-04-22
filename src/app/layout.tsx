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

export const metadata: Metadata = {
  title: "Gabriel Iturre | Full Stack Product Engineer en Argentina",
  description: "Product Engineer y Fundador de KILO y CHEFI. Especialista en SaaS, Fintech y arquitectura escalable en Jujuy, Argentina. Diseño productos digitales que generan ingresos.",
  keywords: [
    "Gabriel Iturre", 
    "Product Engineer Argentina", 
    "Desarrollador Full Stack Jujuy", 
    "Software Engineer Palpalá", 
    "SaaS Founder Argentina", 
    "KILO ERP", 
    "CHEFI SaaS", 
    "Next.js Expert Argentina",
    "Desarrollo de Software Jujuy"
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
    title: "Gabriel Iturre | Product Engineer & Founder",
    description: "Construyendo el futuro del SaaS desde Jujuy, Argentina. Creador de KILO y CHEFI.",
    url: "https://gabrieliturre.dev",
    siteName: "Gabriel Iturre Portfolio",
    images: [
      {
        url: "/Images/gabriel-iturre-programador-jujuy.png",
        width: 800,
        height: 800,
        alt: "Gabriel Iturre - Product Engineer",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gabriel Iturre | Product Engineer",
    description: "SaaS Builder & Full Stack Engineer en Argentina.",
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
    "jobTitle": "Full Stack Product Engineer",
    "worksFor": {
      "@type": "Organization",
      "name": "ZonaJujuy"
    },
    "description": "Product Engineer y Fundador de KILO y CHEFI, especializado en desarrollo de productos SaaS y Fintech en Jujuy, Argentina.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Palpalá",
      "addressRegion": "Jujuy",
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
