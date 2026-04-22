'use client';

import React, { useState } from 'react';
import { 
  Group, 
  Stack, 
  Text, 
  UnstyledButton, 
  Box, 
  Container, 
  Drawer, 
  Switch, 
  Divider, 
  ActionIcon,
  Title
} from '@mantine/core';
import { 
  IconSearch, 
  IconBriefcase, 
  IconLayoutGrid, 
  IconUserCircle,
  IconSettings,
  IconSun,
  IconMoon,
  IconVolume,
  IconVolumeOff,
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
  IconChevronRight,
  IconCompass
} from '@tabler/icons-react';
import { useLanguage } from '../app/LanguageProvider';
import { useMantineColorScheme } from '@mantine/core';
import { useSoundEffects } from '../app/SoundProvider';
import { notifications } from '@mantine/notifications';
import { useClipboard } from '@mantine/hooks';

export function MobileNav() {
  const { t, language, setLanguage } = useLanguage();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const { isSoundEnabled, toggleSound, playSound } = useSoundEffects();
  const [activeTab, setActiveTab] = useState('home');
  const [opened, setOpened] = useState(false);
  const clipboard = useClipboard({ timeout: 2000 });
  const email = "gabriel13iturre@gmail.com";

  const handleEmailAction = () => {
    playSound('click');
    clipboard.copy(email);
    notifications.show({
      title: language === 'es' ? 'Email copiado' : 'Email copied',
      message: language === 'es' ? 'gabriel13iturre@gmail.com listo para pegar' : 'gabriel13iturre@gmail.com ready to paste',
      color: 'teal',
      autoClose: 3000,
    });
    window.location.href = `mailto:${email}`;
  };

  const navItems = [
    { id: 'home', icon: IconSearch, label: language === 'es' ? 'Explorar' : 'Explore', href: '#' },
    { id: 'projects', icon: IconLayoutGrid, label: language === 'es' ? 'Proyectos' : 'Projects', href: '#projects' },
    { id: 'experience', icon: IconBriefcase, label: language === 'es' ? 'Experiencia' : 'Experience', href: '#experience' },
    { id: 'stack', icon: IconCompass, label: language === 'es' ? 'Stack' : 'Stack', href: '#stack' },
    { id: 'contact', icon: IconUserCircle, label: language === 'es' ? 'Contacto' : 'Contact', href: '#contact' },
    { id: 'settings', icon: IconSettings, label: language === 'es' ? 'Ajustes' : 'Settings', onClick: () => { setOpened(true); playSound('click'); } },
  ];

  const iconBg = colorScheme === 'dark' ? 'rgba(255,255,255,0.05)' : '#F7F7F7';
  const textColor = colorScheme === 'dark' ? '#FFFFFF' : '#222222';
  const subtextColor = colorScheme === 'dark' ? '#717171' : '#717171';

  return (
    <>
      <Box 
        hiddenFrom="md"
        style={{ 
          position: 'fixed', 
          bottom: 0, 
          left: 0, 
          right: 0, 
          zIndex: 1000,
          backgroundColor: colorScheme === 'dark' ? '#0A0A0A' : '#FFFFFF',
          borderTop: `1px solid ${colorScheme === 'dark' ? 'rgba(255,255,255,0.05)' : '#EBEBEB'}`,
          paddingBottom: 'env(safe-area-inset-bottom)',
          height: 'calc(68px + env(safe-area-inset-bottom))',
          boxShadow: '0 -4px 12px rgba(0,0,0,0.03)',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <Container size="xl" style={{ width: '100%' }}>
          <Group justify="space-around" grow gap={0}>
            {navItems.map((item) => (
              <UnstyledButton 
                key={item.id}
                component={item.href ? 'a' : 'button'}
                href={item.href}
                onClick={() => {
                  if (item.onClick) {
                    item.onClick();
                  } else {
                    setActiveTab(item.id);
                    playSound('click');
                  }
                }}
                style={{ flex: 1, padding: '8px 0' }}
              >
                <Stack gap={4} align="center">
                  <Box 
                    style={{ 
                      position: 'relative',
                      color: activeTab === item.id 
                        ? (colorScheme === 'dark' ? '#FFFFFF' : '#059669') 
                        : (colorScheme === 'dark' ? '#717171' : '#717171'),
                      transition: 'all 0.3s ease',
                      transform: activeTab === item.id ? 'scale(1.1)' : 'scale(1)'
                    }}
                  >
                    <item.icon 
                      size={24} 
                      stroke={activeTab === item.id ? 2.2 : 1.8} 
                    />
                  </Box>
                  <Text 
                    size="9px" 
                    fw={activeTab === item.id ? 700 : 500} 
                    c={activeTab === item.id 
                      ? (colorScheme === 'dark' ? '#FFFFFF' : '#222222') 
                      : '#717171'}
                    style={{ transition: 'color 0.2s ease', whiteSpace: 'nowrap' }}
                  >
                    {item.label}
                  </Text>
                </Stack>
              </UnstyledButton>
            ))}
          </Group>
        </Container>
      </Box>

      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        position="bottom"
        size="70%"
        radius="24px 24px 0 0"
        padding="xl"
        title={null}
        withCloseButton={false}
        styles={{
          content: {
            backgroundColor: colorScheme === 'dark' ? '#0A0A0A' : '#FFFFFF',
          },
          overlay: {
            backdropFilter: 'blur(4px)',
          }
        }}
      >
        <Stack gap={32}>
          {/* Header */}
          <Group justify="space-between" align="center">
            <Title order={3} size="24px" fw={700} style={{ letterSpacing: '-0.02em', color: textColor }}>
              {language === 'es' ? 'Ajustes' : 'Settings'}
            </Title>
            <UnstyledButton 
              onClick={() => setOpened(false)}
              style={{ 
                padding: '8px 20px', 
                borderRadius: '99px', 
                backgroundColor: colorScheme === 'dark' ? 'rgba(255,255,255,0.05)' : '#222222' 
              }}
            >
              <Text fw={700} size="sm" c={colorScheme === 'dark' ? '#fff' : '#fff'}>
                {language === 'es' ? 'Listo' : 'Done'}
              </Text>
            </UnstyledButton>
          </Group>

          {/* Settings List */}
          <Stack gap={24}>
            {/* Theme Toggle */}
            <Group justify="space-between" align="center">
              <Group gap="md">
                <Box style={{ 
                  width: 40, height: 40, borderRadius: '10px', 
                  backgroundColor: iconBg,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: textColor
                }}>
                  {colorScheme === 'dark' ? <IconMoon size={20} stroke={1.5} /> : <IconSun size={20} stroke={1.5} />}
                </Box>
                <Text fw={600} c={textColor}>{language === 'es' ? 'Modo Oscuro' : 'Dark Mode'}</Text>
              </Group>
              <Switch 
                checked={colorScheme === 'dark'} 
                onChange={() => { toggleColorScheme(); playSound('click'); }} 
                color="teal"
                size="md"
              />
            </Group>

            {/* Language Toggle */}
            <Group justify="space-between" align="center" onClick={() => { setLanguage(language === 'es' ? 'en' : 'es'); playSound('click'); }} style={{ cursor: 'pointer' }}>
              <Group gap="md">
                <Box style={{ 
                  width: 40, height: 40, borderRadius: '10px', 
                  backgroundColor: iconBg,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: textColor
                }}>
                  <Text fw={800} size="xs">{language.toUpperCase()}</Text>
                </Box>
                <Text fw={600} c={textColor}>{language === 'es' ? 'Idioma' : 'Language'}</Text>
              </Group>
              <Group gap={4}>
                <Text size="sm" fw={600} c={subtextColor}>{language === 'es' ? 'Español' : 'English'}</Text>
                <IconChevronRight size={16} color={subtextColor} />
              </Group>
            </Group>

            {/* Sound Toggle */}
            <Group justify="space-between" align="center">
              <Group gap="md">
                <Box style={{ 
                  width: 40, height: 40, borderRadius: '10px', 
                  backgroundColor: iconBg,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: textColor
                }}>
                  {isSoundEnabled ? <IconVolume size={20} stroke={1.5} /> : <IconVolumeOff size={20} stroke={1.5} />}
                </Box>
                <Text fw={600} c={textColor}>{language === 'es' ? 'Efectos de Sonido' : 'Sound Effects'}</Text>
              </Group>
              <Switch 
                checked={isSoundEnabled} 
                onChange={() => { toggleSound(); playSound('click'); }} 
                color="teal"
                size="md"
              />
            </Group>
          </Stack>

          <Divider style={{ opacity: 0.5 }} />

          {/* Social Links */}
          <Stack gap={20}>
            <Text fw={700} size="xs" c={subtextColor} style={{ textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              {language === 'es' ? 'Redes y Contacto' : 'Social & Contact'}
            </Text>
            <Group gap="md">
              <ActionIcon 
                variant="filled" color={colorScheme === 'dark' ? 'gray.8' : 'gray.1'} size="54px" radius="md" 
                component="a" href="https://github.com/GabrielIturreCs" target="_blank"
                style={{ color: colorScheme === 'dark' ? '#fff' : '#222' }}
              >
                <IconBrandGithub size={24} stroke={1.5} />
              </ActionIcon>
              <ActionIcon 
                variant="filled" color={colorScheme === 'dark' ? 'blue.8' : 'blue.0'} size="54px" radius="md"
                component="a" href="https://www.linkedin.com/in/gabriel-iturre-73900626a/" target="_blank"
                style={{ color: colorScheme === 'dark' ? '#fff' : '#0077B5' }}
              >
                <IconBrandLinkedin size={24} stroke={1.5} />
              </ActionIcon>
              <ActionIcon 
                variant="filled" color={colorScheme === 'dark' ? 'teal.8' : 'teal.0'} size="54px" radius="md"
                onClick={handleEmailAction}
                style={{ color: colorScheme === 'dark' ? '#fff' : '#059669' }}
              >
                <IconMail size={24} stroke={1.5} />
              </ActionIcon>
            </Group>
          </Stack>

          <Text size="xs" c={subtextColor} ta="center" mt="auto">
            Gabriel Iturre · Product Engineer · 2026
          </Text>
        </Stack>
      </Drawer>
    </>
  );
}
