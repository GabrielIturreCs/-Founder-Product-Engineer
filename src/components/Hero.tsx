'use client';

import { useState, useEffect } from 'react';
import { Container, Title, Text, Button, Group, Stack, Avatar, Image as MantineImage, Divider, Box } from '@mantine/core';
import { motion, AnimatePresence } from 'framer-motion';
import { MobileNav } from './MobileNav';
import { IconBrandGithub, IconBrandLinkedin, IconMail, IconArrowUpRight, IconSun, IconMoon, IconVolume, IconVolumeOff, IconCheck } from '@tabler/icons-react';
import { useMantineColorScheme, ActionIcon } from '@mantine/core';
import { useLanguage } from '../app/LanguageProvider';
import { useSoundEffects } from '../app/SoundProvider';
import { notifications } from '@mantine/notifications';
import { useClipboard } from '@mantine/hooks';
import { Reveal } from './Reveal';

export function Hero() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const { language, setLanguage, t } = useLanguage();
  const { isSoundEnabled, toggleSound, playSound } = useSoundEffects();
  const clipboard = useClipboard({ timeout: 2000 });
  const [index, setIndex] = useState(0);
  const [mounted, setMounted] = useState(false);
  const words = t.hero.words;

  const email = "gabriel13iturre@gmail.com";

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [words, mounted]);

  const handleEmailAction = () => {
    playSound('click');
    clipboard.copy(email);
    notifications.show({
      title: language === 'es' ? 'Email copiado' : 'Email copied',
      message: language === 'es' ? 'gabriel13iturre@gmail.com listo para pegar' : 'gabriel13iturre@gmail.com ready to paste',
      color: 'teal',
      icon: <IconCheck size={16} />,
      autoClose: 3000,
    });
    
    // Also try to open mailto
    window.location.href = `mailto:${email}`;
  };

  if (!mounted) return <div style={{ minHeight: '100vh', backgroundColor: '#000' }} />;

  return (
    <div style={{ 
      position: 'relative', 
      overflow: 'hidden', 
      minHeight: '100vh', 
      backgroundColor: colorScheme === 'dark' ? '#000' : '#f8f9fa' 
    }}>
      <MobileNav />
      
      {/* Background Atmosphere */}
      <div className="spotlight" />
      <div className="spotlight-secondary" />

      {/* Navbar Pill - Desktop Only */}
      <Box visibleFrom="md">
        <motion.nav 
          initial={{ y: -100, x: '-50%', opacity: 0 }}
          animate={{ y: 24, x: '-50%', opacity: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] as any }}
          className="navbar-pill" 
          style={{ 
            position: 'fixed',
            left: '50%',
            zIndex: 1000,
            border: '1px solid rgba(255, 255, 255, 0.1)',
            backgroundColor: colorScheme === 'dark' ? 'rgba(17, 17, 17, 0.8)' : 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(12px)'
          }}
        >
          <Group justify="space-between" h="100%" px="xl" gap={20}>
            <Group gap={12}>
              <Avatar 
                size={32} 
                src="/Images/gabriel-iturre-programador-jujuy.png" 
                radius="xl" 
                style={{ border: '1.5px solid rgba(255, 255, 255, 0.3)' }}
              />
              <Text fw={800} size="md" style={{ letterSpacing: '-0.03em' }}>{t.name}</Text>
            </Group>
            
            <Group gap={32} visibleFrom="xs">
              <Text 
                size="sm" 
                fw={700} 
                className="nav-item"
                component="a"
                href="#projects"
                onMouseEnter={() => playSound('nav')}
                onClick={() => playSound('click')}
              >
                {t.nav.projects}
              </Text>
              <Text 
                size="sm" 
                fw={700} 
                className="nav-item"
                component="a"
                href="#stack"
                onMouseEnter={() => playSound('nav')}
                onClick={() => playSound('click')}
              >
                {t.nav.stack}
              </Text>
              <Text 
                size="sm" 
                fw={700} 
                className="nav-item"
                component="a"
                href="#experience"
                onMouseEnter={() => playSound('nav')}
                onClick={() => playSound('click')}
              >
                {t.nav.experience}
              </Text>
              <Text 
                size="sm" 
                fw={700} 
                className="nav-item"
                component="a"
                href="#contact"
                onMouseEnter={() => playSound('nav')}
                onClick={() => playSound('click')}
              >
                {t.nav.contact}
              </Text>
            </Group>

            <Group gap="lg">
              <Divider orientation="vertical" h={18} color="var(--mantine-color-default-border)" />
              
              <Group gap="xs">
                <ActionIcon 
                  variant="subtle" 
                  color={colorScheme === 'dark' ? 'gray' : 'dark'}
                  onClick={() => {
                    setLanguage(language === 'es' ? 'en' : 'es');
                    playSound('click');
                  }}
                  onMouseEnter={() => playSound('hover')}
                  size="lg"
                >
                  <Text fw={800} size="xs" c="var(--mantine-color-text)">{language.toUpperCase()}</Text>
                </ActionIcon>

                <ActionIcon 
                  variant="subtle" 
                  color={colorScheme === 'dark' ? 'yellow' : 'blue'}
                  onClick={() => {
                    toggleColorScheme();
                    playSound(colorScheme === 'dark' ? 'toggle-off' : 'toggle-on');
                  }}
                  onMouseEnter={() => playSound('hover')}
                  size="lg"
                >
                  {colorScheme === 'dark' ? <IconSun size={18} stroke={1.5} color="var(--mantine-color-text)" /> : <IconMoon size={18} stroke={1.5} color="var(--mantine-color-text)" />}
                </ActionIcon>

                <ActionIcon 
                  variant="subtle" 
                  color={isSoundEnabled ? 'green' : 'gray'}
                  onClick={toggleSound}
                  onMouseEnter={() => playSound('hover')}
                  size="lg"
                  title={isSoundEnabled ? "Disable Sound" : "Enable Sound"}
                >
                  {isSoundEnabled ? <IconVolume size={18} stroke={1.5} color="var(--mantine-color-text)" /> : <IconVolumeOff size={18} stroke={1.5} color="var(--mantine-color-text)" />}
                </ActionIcon>
              </Group>

              <Divider orientation="vertical" h={18} color="var(--mantine-color-default-border)" />
              
              <Group gap="xs">
                <ActionIcon 
                  variant="subtle" 
                  color="gray" 
                  size="lg"
                  onMouseEnter={() => playSound('hover')}
                  onClick={() => playSound('click')}
                  component="a"
                  href="https://github.com/GabrielIturreCs"
                  target="_blank"
                >
                  <IconBrandGithub size={18} stroke={1.5} color="var(--mantine-color-text)" />
                </ActionIcon>
                <ActionIcon 
                  variant="subtle" 
                  color="gray" 
                  size="lg"
                  onMouseEnter={() => playSound('hover')}
                  onClick={() => playSound('click')}
                  component="a"
                  href="https://www.linkedin.com/in/gabriel-iturre-73900626a/"
                  target="_blank"
                >
                  <IconBrandLinkedin size={18} stroke={1.5} color="var(--mantine-color-text)" />
                </ActionIcon>
                <ActionIcon 
                  variant="subtle" 
                  color="gray" 
                  size="lg"
                  onMouseEnter={() => playSound('hover')}
                  onClick={handleEmailAction}
                >
                  <IconMail size={18} stroke={1.5} color="var(--mantine-color-text)" />
                </ActionIcon>
              </Group>
            </Group>
          </Group>
        </motion.nav>
      </Box>

      <Container size="xl" pt={{ base: 80, md: 150 }} pb={120} px="md" style={{ position: 'relative', zIndex: 1 }}>
        <Group align="center" justify="space-between" wrap="wrap" gap={60}>
          <Box style={{ flex: 1, minWidth: 320, maxWidth: 800 }}>
            <Reveal delay={0.2} y={40}>
              <Stack gap="lg">
                <Stack gap={0}>
                  <Text 
                    size="clamp(1.2rem, 6vw, 2.2rem)" 
                    fw={900} 
                    c={colorScheme === 'dark' ? 'white' : 'var(--mantine-color-text)'} 
                    lh={0.9}
                    style={{ letterSpacing: '-0.04em' }}
                  >
                    {t.hero.craft}
                  </Text>
                  <Title 
                    order={1} 
                    size="clamp(2.5rem, 10vw, 4.5rem)" 
                    fw={900} 
                    c={colorScheme === 'dark' ? 'white' : 'var(--mantine-color-text)'}
                    lh={0.85}
                    style={{ letterSpacing: '-0.06em' }}
                  >
                    {t.hero.products}
                  </Title>
                  <div style={{ height: 'clamp(3rem, 10vw, 4.5rem)', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={words[index]}
                        initial={{ y: 20, opacity: 0, filter: 'blur(8px)' }}
                        animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                        exit={{ y: -20, opacity: 0, filter: 'blur(8px)' }}
                        transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] as any }}
                        style={{ filter: 'url(#water-morph)' }}
                      >
                        <Title 
                          order={1} 
                          size="clamp(3rem, 10vw, 4.5rem)" 
                          fw={900} 
                          c={colorScheme === 'dark' ? 'white' : 'var(--mantine-color-text)'}
                          lh={0.85}
                          style={{ letterSpacing: '-0.06em' }}
                        >
                          {words[index]}.
                        </Title>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </Stack>

                <Text c={colorScheme === 'dark' ? 'rgba(255,255,255,0.6)' : 'dimmed'} size="lg" style={{ maxWidth: 520, lineHeight: 1.4, marginTop: 12, fontWeight: 500 }}>
                  {t.hero.subtext}
                </Text>

                <div style={{ position: 'relative', width: 'fit-content' }} className="button-container">
                  <div className="button-aura" />
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button 
                      variant={colorScheme === 'dark' ? 'white' : 'filled'}
                      color={colorScheme === 'dark' ? 'black' : 'dark'}
                      radius="md" 
                      size="xl"
                      component="a"
                      href="#projects"
                      onMouseEnter={() => playSound('hover')}
                      onClick={() => playSound('click')}
                      rightSection={<IconArrowUpRight size={18} stroke={2.2} />}
                      styles={{
                        root: { height: 56, paddingLeft: 24, paddingRight: 24, fontWeight: 800, position: 'relative', zIndex: 1 }
                      }}
                    >
                      {t.hero.cta}
                    </Button>
                  </motion.div>
                </div>
              </Stack>
            </Reveal>
          </Box>

          <Box
            mt={{ base: 0, md: 40 }}
            style={{ 
              flex: 1, 
              display: 'flex', 
              justifyContent: 'center', 
              paddingRight: 0, 
              minWidth: 320
            }}
          >
            <Reveal delay={0.4} y={60}>
              <motion.div
                whileHover={{ y: -10, rotate: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }}
              >
                <div style={{ position: 'relative', width: 'min(550px, 85vw)', height: 'min(650px, 100vw)' }}>
                  <MantineImage 
                    src="/Images/Gemini_Generated_Image_f6sz19f6sz19f6sz (1).png" 
                    alt="Gabriel Iturre Illustration"
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'contain',
                      filter: 'none'
                    }}
                  />
                </div>
              </motion.div>
            </Reveal>
          </Box>
        </Group>
      </Container>
      {/* Invisible SVG Filter for the Liquid Effect */}
      <svg style={{ position: 'absolute', width: 0, height: 0, pointerEvents: 'none' }}>
        <defs>
          <filter id="water-morph">
            <feTurbulence type="fractalNoise" baseFrequency="0.02 0.05" numOctaves="2" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="10" xChannelSelector="R" yChannelSelector="G" result="displaced" />
            <feGaussianBlur in="displaced" stdDeviation="3" result="blurred" />
            <feColorMatrix in="blurred" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
            <feBlend in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}
