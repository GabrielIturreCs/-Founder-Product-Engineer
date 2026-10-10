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
  IconStethoscope,
  IconRobot,
  IconUser,
  IconTarget,
  IconCompass,
  IconTrophy,
  IconBolt,
  IconServer,
  IconCreditCard,
} from '@tabler/icons-react';
import { useLanguage } from '../app/LanguageProvider';
import { Reveal } from './Reveal';
import { useSoundEffects } from '../app/SoundProvider';

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
  const { playSound } = useSoundEffects();
  const [activeTab, setActiveTab] = useState('kilo');

  const experiences: ExperienceItem[] = [
    {
      id: 'kilo',
      role: 'Founder & Product Engineer',
      company: 'KILO SaaS',
      period: '2023 – Present',
      type: 'Fintech · Multi-tenant · SaaS Builder',
      description: language === 'es'
        ? 'Plataforma fintech multi-tenant orquestada con IA para automatizar el desarrollo y optimizar la lógica operativa del retail moderno.'
        : 'Multi-tenant fintech platform orchestrated with AI to automate development and optimize modern retail operational logic.',
      icon: IconTarget,
      bullets: [
        {
          title: language === 'es' ? 'Ingeniería de Producto & IA autónoma' : 'Product Engineering & Autonomous AI',
          text: language === 'es'
            ? 'Lideré el lanzamiento del sistema core en 4 meses, orquestando flujos con Claude API para acelerar el desarrollo y asegurar el aislamiento de datos (RBAC/JWT).'
            : 'Led the core system launch in 4 months, orchestrating flows with Claude API to accelerate development and ensure RBAC/JWT data isolation.',
          icon: IconBolt
        },
        {
          title: language === 'es' ? 'Infraestructura' : 'Infrastructure',
          text: language === 'es'
            ? 'Diseñé la arquitectura cloud en servidores Linux (Docker/Coolify) para el aprovisionamiento dinámico de +10,000 subdominios.'
            : 'Designed the cloud architecture on Linux servers (Docker/Coolify) for the dynamic provisioning of 10k+ subdomains.',
          icon: IconServer
        },
        {
          title: language === 'es' ? 'Impacto' : 'Impact',
          text: language === 'es'
            ? 'Integré facturación electrónica AFIP y pasarelas de pago QR, reduciendo drásticamente el time-to-market de funciones críticas de negocio.'
            : 'Integrated AFIP electronic billing and QR payment gateways, drastically reducing the time-to-market for critical business features.',
          icon: IconTrophy
        }
      ]
    },
    {
      id: 'slot',
      role: 'Founder & Product Engineer',
      company: 'ZonaSalud',
      period: '2025 – 2026',
      type: 'AI Health OS · Logistics · Automation',
      description: language === 'es'
        ? 'Capa autónoma de gestión clínica que erradica procesos manuales mediante procesamiento de datos con LLMs y automatización E2E.'
        : 'Autonomous clinical management layer that eradicates manual processes through LLM data processing and E2E automation.',
      icon: IconStethoscope,
      bullets: [
        {
          title: language === 'es' ? 'AI Data Processing' : 'AI Data Processing',
          text: language === 'es'
            ? 'Integré modelos LLM en NestJS para procesar historiales médicos en tiempo real, generando resúmenes inmutables y estructurados en JSON.'
            : 'Integrated LLM models in NestJS to process medical records in real-time, generating immutable and structured JSON summaries.',
          icon: IconRobot
        },
        {
          title: language === 'es' ? 'Sistemas E2E' : 'E2E Systems',
          text: language === 'es'
            ? 'Construí flujos de captura QR para colas virtuales y CronJobs anti-ausentismo que reasignan turnos automáticamente en la base de datos.'
            : 'Built QR capture flows for virtual queues and anti-absenteeism CronJobs that automatically reassign appointments in the database.',
          icon: IconCompass
        },
        {
          title: language === 'es' ? 'Resiliencia' : 'Resilience',
          text: language === 'es'
            ? 'Optimicé la logística operativa mediante generación asíncrona de PDF y despliegue multi-nodo en servidores Linux con alta disponibilidad.'
            : 'Optimized operational logistics through asynchronous PDF generation and multi-node deployment on high-availability Linux servers.',
          icon: IconTrophy
        }
      ]
    },
    {
      id: 'independent',
      role: 'Full Stack & AI Architect',
      company: 'Freelance',
      period: '2022 – Present',
      type: 'AI Infrastructure · SaaS Architect · Consulting',
      description: language === 'es'
        ? 'Arquitectura y construcción de infraestructuras inteligentes bilingües, especializadas en el escalado de activos digitales complejos.'
        : 'Architecture and construction of bilingual intelligent infrastructures, specialized in scaling complex digital assets.',
      icon: IconRobot,
      bullets: [
        {
          title: language === 'es' ? 'Consultoría' : 'Consulting',
          text: language === 'es'
            ? 'Asesoro en la orquestación de IA y migración de sistemas legacy a arquitecturas cloud modernas y resilientes.'
            : 'Advise on AI orchestration and migration of legacy systems to modern, resilient cloud architectures.',
          icon: IconTarget
        },
        {
          title: language === 'es' ? 'Ingeniería' : 'Engineering',
          text: language === 'es'
            ? 'Implementación de sistemas RAG, agentes autónomos y pasarelas de pago internacionales para clientes globales.'
            : 'Implementation of RAG systems, autonomous agents, and international payment gateways for global clients.',
          icon: IconCompass
        },
        {
          title: language === 'es' ? 'Impacto' : 'Impact',
          text: language === 'es'
            ? 'Aseguro la entrega de productos listos para producción con enfoque en la rentabilidad y el crecimiento escalable.'
            : 'Ensure the delivery of production-ready products focused on profitability and scalable growth.',
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

          <Grid gap={40}>
            {/* Tabs Sidebar */}
            <Grid.Col span={{ base: 12, md: 4 }}>
              <Stack gap={12}>
                {experiences.map((exp) => (
                  <UnstyledButton
                    key={exp.id}
                    onClick={() => { setActiveTab(exp.id); playSound('click'); }}
                    onMouseEnter={() => playSound('exp')}
                    style={{
                      padding: '20px 24px',
                      borderRadius: '16px',
                      backgroundColor: activeTab === exp.id 
                        ? (colorScheme === 'dark' ? 'rgba(255,255,255,0.05)' : '#F7F7F9')
                        : 'transparent',
                      border: `1px solid ${activeTab === exp.id 
                        ? (colorScheme === 'dark' ? 'rgba(255,255,255,0.1)' : '#F0F0F0')
                        : 'transparent'}`,
                      boxShadow: 'none',
                      transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                  >
                    <Group gap="md">
                      <Box style={{ 
                        width: 48, 
                        height: 48, 
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: activeTab === exp.id 
                          ? (colorScheme === 'dark' ? '#fff' : '#222') 
                          : (colorScheme === 'dark' ? '#666' : '#717171'),
                        transition: 'all 0.3s ease'
                      }}>
                        <exp.icon size={26} stroke={activeTab === exp.id ? 2 : 1.5} />
                      </Box>
                      <Stack gap={2}>
                        <Text fw={700} size="md" c={activeTab === exp.id ? (colorScheme === 'dark' ? '#fff' : '#222') : (colorScheme === 'dark' ? '#666' : '#717171')}>
                          {exp.company}
                        </Text>
                        <Text size="xs" fw={600} c={activeTab === exp.id ? (colorScheme === 'dark' ? '#888' : '#717171') : 'dimmed'}>{exp.period}</Text>
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
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] as any }}
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
                            <Title order={3} size="32px" fw={800} style={{ letterSpacing: '-0.03em', color: colorScheme === 'dark' ? '#fff' : '#222', lineHeight: 1.1 }}>
                              {currentExp.role}
                            </Title>
                            <Text size="md" fw={600} c="#717171" style={{ letterSpacing: '0.01em' }}>{currentExp.type}</Text>
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
                               color: colorScheme === 'dark' ? '#fff' : '#222',
                               display: 'flex',
                               alignItems: 'center',
                               justifyContent: 'center',
                               flexShrink: 0
                             }}>
                               <bullet.icon size={26} stroke={1.5} />
                             </Box>
                            <Stack gap={4}>
                              <Text fw={800} size="12px" style={{ textTransform: 'uppercase', letterSpacing: '0.12em', color: colorScheme === 'dark' ? '#fff' : '#222', marginBottom: 4 }}>
                                {bullet.title}
                              </Text>
                              <Text size="md" style={{ color: '#717171', lineHeight: 1.8, fontWeight: 500 }}>
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
