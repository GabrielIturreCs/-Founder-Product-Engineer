'use client';

import React from 'react';
import { Container, Grid, GridCol, Title, Text, Stack, useMantineColorScheme } from '@mantine/core';
import { Hero } from '@/components/Hero';
import { ProjectShowcase } from '@/components/ProjectShowcase';
import { Experience } from '@/components/Experience';
import { TechStack } from '@/components/TechStack';
import { ContactConcierge } from '@/components/ContactConcierge';
import { useLanguage } from './LanguageProvider';

export default function Home() {
  const { t, language } = useLanguage();
  const { colorScheme } = useMantineColorScheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main style={{ 
      backgroundColor: colorScheme === 'dark' ? '#000' : 'var(--mantine-color-body)', 
      minHeight: '100vh',
      paddingBottom: 'calc(84px + env(safe-area-inset-bottom))'
    }}>
      <Hero />
      
      <ProjectShowcase />

      <Experience />

      <TechStack />

      <ContactConcierge />

      {/* Differential Banner */}
      <section style={{ 
        backgroundColor: colorScheme === 'dark' ? '#000' : '#fff', 
        padding: '120px 0', 
        borderTop: `1px solid ${colorScheme === 'dark' ? 'rgba(255,255,255,0.05)' : '#EBEBEB'}`
      }}>
        <Container size="xl">
          <Stack align="center" gap="xs">
            <Text 
              fw={900} 
              size="clamp(1.5rem, 5vw, 3.5rem)" 
              style={{ 
                letterSpacing: '-0.04em', 
                textAlign: 'center', 
                color: colorScheme === 'dark' ? '#FFFFFF' : '#222222' 
              }}
            >
              {t.philosophy.differential}
            </Text>
            <Text 
              fw={900} 
              size="clamp(1.5rem, 5vw, 3.5rem)" 
              style={{ 
                letterSpacing: '-0.04em', 
                textAlign: 'center',
                display: 'block',
                backgroundImage: colorScheme === 'dark' 
                  ? 'linear-gradient(to right, #FFFFFF 0%, rgba(255,255,255,0.4) 100%)'
                  : 'linear-gradient(to right, #000000 0%, rgba(0,0,0,0.5) 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                color: 'transparent'
              }}
            >
              {t.philosophy.impact}
            </Text>
          </Stack>
        </Container>
      </section>

      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.05)', padding: '60px 0', marginTop: 100 }}>
        <Container size="lg">
          <Text size="sm" c="dimmed" ta="center">{t.philosophy.footer}</Text>
        </Container>
      </footer>
    </main>
  );
}
