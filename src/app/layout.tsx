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
import { JsonLd } from "../components/seo/JsonLd";
import { pageMetadata } from "../content/meta";

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

export const metadata: Metadata = pageMetadata('es', 'home');

import { FirebaseAnalytics } from "../components/FirebaseAnalytics";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning className={`${inter.variable} ${serif.variable}`}>
      <head>
        <ColorSchemeScript defaultColorScheme="dark" />
        <JsonLd lang="es" />
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
