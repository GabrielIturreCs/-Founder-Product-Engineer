'use client';

import React, { useState } from 'react';
import { 
  Box, 
  Container, 
  Stack, 
  Title, 
  Text, 
  Group, 
  useMantineColorScheme,
  Avatar,
  Divider,
  Grid,
  UnstyledButton
} from '@mantine/core';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  IconRocket, 
  IconChartBar, 
  IconSettings, 
  IconUsers,
  IconArrowRight,
  IconBriefcase,
  IconBuildingStore,
  IconToolsKitchen2,
  IconUser,
  IconTarget,
  IconCompass,
  IconTrophy
} from '@tabler/icons-react';
import { useLanguage } from '../app/LanguageProvider';
import { Reveal } from './Reveal';

interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  type: string;
  description: string;
  icon: React.ElementType;
  bullets: {
    title: string;
    text: string;
    icon: React.ElementType;
  }[];
}

export function Experience() {
  const { t, language } = useLanguage();
  const { colorScheme } = useMantineColorScheme();
  const [activeTab, setActiveTab] = useState('kilo');

  const experiences: ExperienceItem[] = [
    {
      id: 'kilo',
      role: 'Founder · Full Stack Product Engineer',
      company: 'KILO',
      period: '2023 – 2026',
      type: 'SaaS multi-tenant para comercios · Web · PWA · Android',
      description: language === 'es' 
        ? 'Sistema operativo para comercios que transforma operaciones complejas en decisiones simples y accionables.'
        : 'Operating system for retail that transforms complex operations into simple, actionable decisions.',
      icon: IconBuildingStore,
      bullets: [
        {
          title: language === 'es' ? 'Problema' : 'Problem',
          text: language === 'es' 
            ? 'Los sistemas tradicionales tipo ERP son complejos, lentos y no están diseñados para el día a día del comerciante.'
            : 'Traditional ERP systems are complex, slow, and not designed for the merchant\'s daily reality.',
          icon: IconTarget
        },
        {
          title: language === 'es' ? 'Qué construí' : 'What I Built',
          text: language === 'es'
            ? 'Diseñé y desarrollé una plataforma SaaS multi-tenant preparada para +10.000 usuarios con aislamiento de datos y aprovisionamiento dinámico.'
            : 'Designed and developed a multi-tenant SaaS platform ready for 10,000+ users with data isolation and dynamic provisioning.',
          icon: IconCompass
        },
        {
          title: language === 'es' ? 'Impacto' : 'Impact',
          text: language === 'es'
            ? 'Reduje la fricción operativa y sistematicé la reconciliación financiera, permitiendo a dueños de negocios escalar sin aumentar el caos administrativo.'
            : 'Reduced operational friction and systematized financial reconciliation, allowing business owners to scale without increasing administrative chaos.',
          icon: IconTrophy
        }
      ]
    },
    {
      id: 'chefi',
      role: 'Founder · Product Engineer',
      company: 'CHEFI',
      period: '2024 – 2026',
      type: 'SaaS para gastronomía y automatización operativa · Web · PWA · Android',
      description: language === 'es'
        ? 'Sistema operativo para locales gastronómicos que centraliza pedidos, mesas y atención al cliente en tiempo real.'
        : 'Operating system for gastronomic venues that centralizes orders, tables, and customer service in real time.',
      icon: IconToolsKitchen2,
      bullets: [
        {
          title: language === 'es' ? 'Problema' : 'Problem',
          text: language === 'es'
            ? 'Los restaurantes operan con sistemas fragmentados y alta fricción en la atención, generando errores y pérdida de eficiencia.'
            : 'Restaurants operate with fragmented systems and high friction in service, leading to errors and loss of efficiency.',
          icon: IconTarget
        },
        {
          title: language === 'es' ? 'Qué construí' : 'What I Built',
          text: language === 'es'
            ? 'Diseñé y desarrollé un SaaS vertical con gestión de mesas en tiempo real, pedidos QR y autenticación WhatsApp OTP.'
            : 'Designed and developed a vertical SaaS with real-time table management, QR ordering, and WhatsApp OTP authentication.',
          icon: IconCompass
        },
        {
          title: language === 'es' ? 'Impacto' : 'Impact',
          text: language === 'es'
            ? 'Automaticé el flujo de pedidos y sincronización de stock mediante Evolution API, elevando la experiencia del comensal y la rentabilidad del local.'
            : 'Automated order flow and stock synchronization via Evolution API, elevating diner experience and venue profitability.',
          icon: IconTrophy
        }
      ]
    },
    {
      id: 'independent',
      role: 'Independent Product Engineer',
      company: 'Freelance',
      period: '2022 – 2026',
      type: 'Desarrollo de software y productos a medida · Web · SaaS · Automatización',
      description: language === 'es'
        ? 'Desarrollo soluciones digitales a medida para negocios, diseñando productos completos desde la idea hasta su implementación.'
        : 'Develop custom digital solutions for businesses, designing complete products from idea to implementation.',
      icon: IconUser,
      bullets: [
        {
          title: language === 'es' ? 'Problema' : 'Problem',
          text: language === 'es'
            ? 'Muchos negocios necesitan software específico pero no tienen el equipo para diseñarlo, ejecutarlo y mantenerlo con calidad senior.'
            : 'Many businesses need specific software but lack the team to design, execute, and maintain it with senior quality.',
          icon: IconTarget
        },
        {
          title: language === 'es' ? 'Qué construí' : 'What I Built',
          text: language === 'es'
            ? 'Entregué múltiples plataformas a medida (Fintech, HealthTech) gestionando todo el ciclo de vida del producto.'
            : 'Delivered multiple custom platforms (Fintech, HealthTech) managing the entire product lifecycle.',
          icon: IconCompass
        },
        {
          title: language === 'es' ? 'Impacto' : 'Impact',
          text: language === 'es'
            ? 'Transformé procesos manuales obsoletos en sistemas automatizados en producción, ahorrando cientos de horas operativas a mis clientes.'
            : 'Transformed obsolete manual processes into automated production systems, saving hundreds of operational hours for my clients.',
          icon: IconTrophy
        }
      ]
    }
  ];

  const currentExp = experiences.find(e => e.id === activeTab) || experiences[0];

  return (
    <Container size="xl" py={120} id="experience">
      <Reveal width="100%" y={40}>
        <Stack gap={60}>
          <Stack gap={12} align="center" style={{ textAlign: 'center' }}>
            <Title order={2} size="38px" fw={700} style={{ letterSpacing: '-0.04em', color: colorScheme === 'dark' ? '#fff' : '#222222' }}>
              {t.nav.experience}
            </Title>
            <Text size="lg" style={{ color: colorScheme === 'dark' ? '#A0A0A0' : '#717171', fontWeight: 500, maxWidth: 600 }}>
              {language === 'es' ? 'De la idea a producción: Construyendo software con mentalidad de producto.' : 'From idea to production: Building software with a product mindset.'}
            </Text>
          </Stack>

          <Grid gutter={40}>
            {/* Tabs Sidebar */}
            <Grid.Col span={{ base: 12, md: 4 }}>
              <Stack gap={12}>
                {experiences.map((exp) => (
                  <UnstyledButton
                    key={exp.id}
                    onClick={() => setActiveTab(exp.id)}
                    style={{
                      padding: '20px 24px',
                      borderRadius: '16px',
                      backgroundColor: activeTab === exp.id 
                        ? (colorScheme === 'dark' ? 'rgba(255,255,255,0.05)' : '#fff')
                        : 'transparent',
                      border: `1px solid ${activeTab === exp.id 
                        ? (colorScheme === 'dark' ? 'rgba(255,255,255,0.1)' : '#EBEBEB')
                        : 'transparent'}`,
                      boxShadow: activeTab === exp.id ? '0 10px 30px rgba(0,0,0,0.05)' : 'none',
                      transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                  >
                    <Group gap="md">
                      <Box style={{ 
                        width: 48, 
                        height: 48, 
                        borderRadius: '12px', 
                        backgroundColor: activeTab === exp.id ? '#059669' : (colorScheme === 'dark' ? 'rgba(255,255,255,0.05)' : '#F7F7F7'),
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: activeTab === exp.id ? 'white' : (colorScheme === 'dark' ? '#eee' : '#222'),
                        transition: 'all 0.3s ease'
                      }}>
                        <exp.icon size={22} stroke={activeTab === exp.id ? 2.5 : 2} />
                      </Box>
                      <Stack gap={2}>
                        <Text fw={700} size="md" c={activeTab === exp.id ? (colorScheme === 'dark' ? '#fff' : '#222') : 'dimmed'}>
                          {exp.company}
                        </Text>
                        <Text size="xs" fw={600} c="dimmed">{exp.period}</Text>
                      </Stack>
                    </Group>
                    {activeTab === exp.id && (
                      <motion.div 
                        layoutId="active-pill"
                        style={{ 
                          position: 'absolute', 
                          left: 0, 
                          top: '20%', 
                          bottom: '20%', 
                          width: 4, 
                          backgroundColor: '#059669',
                          borderRadius: '0 4px 4px 0'
                        }} 
                      />
                    )}
                  </UnstyledButton>
                ))}
              </Stack>
            </Grid.Col>

            {/* Content Area */}
            <Grid.Col span={{ base: 12, md: 8 }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Box style={{
                    backgroundColor: colorScheme === 'dark' ? '#0A0A0A' : '#fff',
                    borderRadius: '24px',
                    border: `1px solid ${colorScheme === 'dark' ? 'rgba(255,255,255,0.05)' : '#EBEBEB'}`,
                    padding: '40px',
                    minHeight: 500
                  }}>
                    <Stack gap={32}>
                      <Stack gap={12}>
                        <Group justify="space-between" align="flex-start">
                          <Stack gap={4}>
                            <Title order={3} size="32px" fw={800} style={{ letterSpacing: '-0.03em', color: colorScheme === 'dark' ? '#fff' : '#222' }}>
                              {currentExp.role}
                            </Title>
                            <Text size="lg" fw={600} c="#059669">{currentExp.type}</Text>
                          </Stack>
                          <Badge variant="outline" color="gray" size="lg" radius="sm">{currentExp.period}</Badge>
                        </Group>
                        <Text size="xl" style={{ color: colorScheme === 'dark' ? '#ccc' : '#484848', lineHeight: 1.5, fontWeight: 500 }}>
                          {currentExp.description}
                        </Text>
                      </Stack>

                      <Divider style={{ opacity: 0.5 }} />

                      <Stack gap={40}>
                        {currentExp.bullets.map((bullet, i) => (
                          <Group key={i} align="flex-start" gap="xl" wrap="nowrap">
                            <Box style={{ 
                              width: 44, 
                              height: 44, 
                              borderRadius: '10px', 
                              backgroundColor: colorScheme === 'dark' ? 'rgba(5, 150, 105, 0.1)' : 'rgba(5, 150, 105, 0.05)',
                              color: '#059669',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              flexShrink: 0
                            }}>
                              <bullet.icon size={22} stroke={1.8} />
                            </Box>
                            <Stack gap={4}>
                              <Text fw={800} size="sm" style={{ textTransform: 'uppercase', letterSpacing: '0.05em', color: colorScheme === 'dark' ? '#fff' : '#222' }}>
                                {bullet.title}
                              </Text>
                              <Text size="md" c="dimmed" style={{ lineHeight: 1.5, fontWeight: 500 }}>
                                {bullet.text}
                              </Text>
                            </Stack>
                          </Group>
                        ))}
                      </Stack>
                    </Stack>
                  </Box>
                </motion.div>
              </AnimatePresence>
            </Grid.Col>
          </Grid>
        </Stack>
      </Reveal>
    </Container>
  );
}

function Badge({ children, color, size, radius, variant }: any) {
  return (
    <div style={{
      padding: '4px 12px',
      borderRadius: '6px',
      border: '1px solid rgba(255,255,255,0.1)',
      fontSize: '12px',
      fontWeight: 700,
      color: '#717171',
      textTransform: 'uppercase',
      letterSpacing: '0.05em'
    }}>
      {children}
    </div>
  );
}
