'use client';

import React from 'react';
import { Box, Container, Grid, Stack, Title, Text, Group, UnstyledButton, useMantineColorScheme } from '@mantine/core';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  IconArrowRight, 
  IconUsers, 
  IconCalendar, 
  IconDeviceMobile, 
  IconCircleCheck, 
  IconBolt,
  IconRobot,
  IconBrandGooglePlay,
  IconLayoutDashboard,
  IconDeviceLaptop,
  IconBrandWhatsapp,
  IconActivity,
  IconCreditCard
} from '@tabler/icons-react';
import { useLanguage } from '../app/LanguageProvider';
import { Reveal } from './Reveal';
import { useSoundEffects } from '../app/SoundProvider';

interface ProductData {
  title: string;
  category: string;
  description: string;
  images?: string[];
  imageLabels?: string[];
  videoSrc?: string;
  stack: string[];
  stats: { label: string; value: string; icon: React.ElementType }[];
  features?: { label: string; index: number }[];
  link?: string;
  playStore?: boolean;
  playStoreLink?: string;
  mediaBgColor?: string;
}

export function ProjectShowcase() {
  const { t, language } = useLanguage();
  const { colorScheme } = useMantineColorScheme();

  const products: ProductData[] = [
    {
      title: "KILO — Founder",
      category: language === 'es' ? "Retail OS" : "Retail OS",
      description: language === 'es' 
        ? "Plataforma fintech multi-tenant para el retail moderno. Lideré el lanzamiento del sistema core en solo 4 meses, orquestando flujos de IA con Claude para automatizar el desarrollo y asegurar el aislamiento de datos (RBAC/JWT) de +10,000 subdominios con integraciones críticas de AFIP y pasarelas QR."
        : "Multi-tenant fintech platform for modern retail. Led the core system launch in just 4 months, orchestrating AI flows with Claude to automate development and secure RBAC/JWT data isolation for 10k+ subdomains with critical AFIP and QR gateway integrations.",
      images: [
        "/Images/kilo_ai_hero_2026.jpg",
        "/Images/kilo_control_v3.jpeg",
        "/Images/kilo_dashboard_v3.jpeg", 
        "/Images/kilo_whatsapp_v3.jpeg", 
        "/Images/kilo_pos_v3.jpeg",
        "/Images/kilo_ai_v3.jpeg"
      ],
      imageLabels: language === 'es' 
        ? ["Kilo AI", "Dashboard Global", "Punto de Venta", "Venta por WhatsApp", "Control Total", "Transacciones"] 
        : ["Kilo AI", "Global Dashboard", "POS System", "WhatsApp Sales", "Full Control", "Transactions"],
      stack: ["React", "Node.js", "Docker", "Coolify", "AFIP API"],
      stats: [
        { label: language === 'es' ? 'Subdominios' : 'Subdomains', value: '+10k', icon: IconUsers },
        { label: language === 'es' ? 'Lanzamiento' : 'Time-to-Market', value: language === 'es' ? '4 Meses' : '4 Months', icon: IconBolt }
      ],
      features: language === 'es' 
        ? [
            { label: "Kilo AI", index: 0 },
            { label: "Dashboard", index: 1 },
            { label: "Punto de Venta", index: 2 },
            { label: "WhatsApp", index: 5 },
            { label: "Control Total", index: 4 },
            { label: "Pagos", index: 3 }
          ]
        : [
            { label: "Kilo AI", index: 0 },
            { label: "Dashboard", index: 1 },
            { label: "POS System", index: 2 },
            { label: "WhatsApp", index: 5 },
            { label: "Full Control", index: 4 },
            { label: "Payments", index: 3 }
          ],
      mediaBgColor: '#FFFFFF',
      link: "https://somoskilo.com",
      playStore: true,
      playStoreLink: "https://play.google.com/store/apps/details?id=com.kilo.app&hl=es_AR"
    },
    {
      title: "CHEFI — Founder",
      category: language === 'es' ? "Gastronomy SaaS" : "Gastronomy SaaS",
      description: language === 'es'
        ? "SaaS vertical para gastronomía con gestión de mesas y pedidos en tiempo real por QR. Implementé autenticación WhatsApp OTP y automatización de inventario con Evolution API, priorizando la resiliencia en locales de alta rotación."
        : "Vertical SaaS for gastronomy with table management and real-time QR ordering. Implemented WhatsApp OTP authentication and inventory automation with Evolution API, focusing on resilience in high-turnover environments.",
      images: ["/Images/chefi_hero.webp"],
      stack: ["React Native", "Node.js", "Evolution API", "GraphQL"],
      stats: [
        { label: language === 'es' ? 'Autenticación' : 'Authentication', value: 'WhatsApp', icon: IconDeviceMobile },
        { label: language === 'es' ? 'Sincronización' : 'Sync', value: language === 'es' ? 'Tiempo Real' : 'Real-time', icon: IconCircleCheck }
      ],
      link: "#contact"
    },
    {
      title: "SLOT MEDICAL — Founder",
      category: language === 'es' ? "AI Health OS" : "AI Health OS",
      description: language === 'es'
        ? "Capa autónoma de logística y gestión clínica con IA. Procesa historiales clínicos en tiempo real con LLMs para generar resúmenes inmutables, integra flujos de captura QR para colas virtuales y CronJobs anti-ausentismo que reasignan turnos automáticamente."
        : "Autonomous AI logistic and clinical management layer. Processes medical records in real-time with LLMs to generate immutable summaries, integrates QR capture flows for virtual queues, and anti-absenteeism CronJobs that automatically reassign appointments.",
      videoSrc: "/Images/zonasalud.mp4",
      stack: ["NestJS", "Supabase", "Gemini 1.5", "TypeScript", "Linux Ops"],
      stats: [
        { label: language === 'es' ? 'Automatización' : 'Automation', value: 'CronJobs', icon: IconBolt },
        { label: language === 'es' ? 'Procesamiento' : 'Processing', value: 'AI JSON', icon: IconRobot }
      ],
      link: "#contact"
    }
  ];

  return (
    <Container size="xl" py={120} id="projects">
      <Stack gap={100}>
        {/* Section Header */}
        <Reveal width="100%" y={20}>
          <Stack gap={12} mb={60} align="center" style={{ textAlign: 'center' }}>
            <Title order={2} size="38px" fw={700} style={{ letterSpacing: '-0.04em', color: colorScheme === 'dark' ? '#fff' : '#222222' }}>
              {t.projects.title}
            </Title>
            <Text size="lg" style={{ color: colorScheme === 'dark' ? '#A0A0A0' : '#717171', fontWeight: 500, maxWidth: 600 }}>
              {t.projects.subtitle}
            </Text>
          </Stack>
        </Reveal>

        <Stack gap={140}>
          {products.map((product, index) => (
            <ProductRow key={product.title} product={product} index={index} language={language} />
          ))}
        </Stack>
      </Stack>
    </Container>
  );
}

function ProductRow({ product, index, language }: { product: ProductData; index: number; language: string }) {
  const { colorScheme } = useMantineColorScheme();
  const { playSound } = useSoundEffects();
  const [imgIndex, setImgIndex] = React.useState(0);

  React.useEffect(() => {
    const images = product.images;
    if (images && images.length > 1) {
      const timer = setInterval(() => {
        setImgIndex((prev) => (prev + 1) % images.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [product.images]);

  return (
    <Reveal width="100%" y={40} delay={index * 0.1}>
      <Grid gap={80} align="center">
        {/* Text Side */}
        <Grid.Col span={{ base: 12, md: 5 }} order={{ base: 2, md: index % 2 === 0 ? 1 : 2 }}>
          <Stack gap={32}>
            <Stack gap={12}>
              <Text 
                size="11px" 
                fw={800} 
                style={{ 
                  color: '#717171',
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  marginBottom: 0
                }}
              >
                {product.category}
              </Text>
              <Title order={2} size="44px" fw={700} style={{ letterSpacing: '-0.04em', lineHeight: 1.1, color: colorScheme === 'dark' ? '#FFFFFF' : '#222222' }}>
                {product.title}
              </Title>
              <Text size="lg" style={{ color: colorScheme === 'dark' ? '#A0A0A0' : '#717171', lineHeight: 1.6, maxWidth: 480, fontWeight: 500 }}>
                {product.description}
              </Text>
            </Stack>

            <Group gap="xs">
              {product.stack.map((item) => (
                <div key={item} className="pill-badge-airbnb">
                  {item}
                </div>
              ))}
            </Group>

            <Group gap={60}>
              {product.stats.map((stat) => (
                <Stack gap={0} key={stat.label}>
                  <Group gap={8} align="center">
                    <stat.icon size={20} stroke={1.5} color="#059669" />
                    <Text fw={700} size="32px" style={{ color: colorScheme === 'dark' ? '#FFFFFF' : '#222222', lineHeight: 1 }}>{stat.value}</Text>
                  </Group>
                  <Text size="11px" fw={800} style={{ color: colorScheme === 'dark' ? '#A0A0A0' : '#717171', textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: 4 }}>
                    {stat.label}
                  </Text>
                </Stack>
              ))}
            </Group>

            {product.features && (
              <Stack gap={10}>
                <Text size="xs" fw={800} style={{ color: '#717171', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  {language === 'es' ? 'Explorar Ecosistema' : 'Explore Ecosystem'}
                </Text>
                <Group gap={8}>
                  {product.features.map((feature) => (
                    <UnstyledButton
                      key={feature.label}
                      onClick={() => {
                        setImgIndex(feature.index);
                        playSound('click');
                      }}
                      onMouseEnter={() => playSound('hover')}
                      style={{
                        padding: '8px 16px',
                        borderRadius: '100px',
                        border: `1px solid ${imgIndex === feature.index ? '#059669' : (colorScheme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)')}`,
                        backgroundColor: imgIndex === feature.index ? (colorScheme === 'dark' ? 'rgba(5, 150, 105, 0.1)' : 'rgba(5, 150, 105, 0.05)') : 'transparent',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      <Text size="xs" fw={700} style={{ color: imgIndex === feature.index ? '#059669' : (colorScheme === 'dark' ? '#A0A0A0' : '#717171') }}>
                        {feature.label}
                      </Text>
                    </UnstyledButton>
                  ))}
                </Group>
              </Stack>
            )}

            <Group gap="md" mt={10}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <UnstyledButton 
                  className="case-study-btn-airbnb"
                  component="a"
                  href={product.link}
                  target={product.link?.startsWith('http') ? "_blank" : "_self"}
                  onMouseEnter={() => playSound('hover')}
                  onClick={() => playSound('click')}
                >
                  <Text size="sm" fw={600}>
                    {language === 'es' ? 'Ver Aplicación' : 'View Application'}
                  </Text>
                  <IconArrowRight size={18} stroke={2.2} />
                </UnstyledButton>
              </motion.div>

              {product.playStore && (
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <a href={product.playStoreLink || "#"} target="_blank" rel="noopener noreferrer">
                    <img 
                      src={language === 'es' 
                        ? "/Images/google-play-badge-es-300x116.png" 
                        : "https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                      }
                      alt={language === 'es' ? "Disponible en Google Play" : "Get it on Google Play"} 
                      style={{ 
                        height: '52px', 
                        width: 'auto',
                        filter: colorScheme === 'dark' ? 'brightness(0.9)' : 'none',
                        display: 'block'
                      }}
                    />
                  </a>
                </motion.div>
              )}
            </Group>
          </Stack>
        </Grid.Col>

        {/* Media Side */}
        <Grid.Col span={{ base: 12, md: 7 }} order={{ base: 1, md: index % 2 === 0 ? 2 : 1 }}>
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }}
          >
            <Box style={{ 
              position: 'relative',
              borderRadius: '32px',
              backgroundColor: product.mediaBgColor || (colorScheme === 'dark' ? '#0F0F0F' : '#F7F7F7'),
              border: `1px solid ${colorScheme === 'dark' ? 'rgba(255,255,255,0.1)' : '#EBEBEB'}`,
              overflow: 'hidden',
              aspectRatio: '16/10',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 30px 60px rgba(0,0,0,0.12)'
            }}>
              {product.videoSrc ? (
                <video 
                  src={product.videoSrc}
                  autoPlay
                  muted
                  loop
                  playsInline
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              ) : product.images && (
                <Box style={{ width: '100%', height: '100%', position: 'relative' }}>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={imgIndex}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.8, ease: 'easeInOut' }}
                      style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundImage: `url(${product.images[imgIndex]})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                      }}
                    />
                  </AnimatePresence>

                  {/* Subtle Progress Dots (Mercado Pago Style) */}
                  {product.images.length > 1 && (
                    <Group 
                      gap={6} 
                      style={{ 
                        position: 'absolute', 
                        bottom: 16, 
                        left: '50%', 
                        transform: 'translateX(-50%)',
                        zIndex: 10,
                        backgroundColor: 'rgba(0,0,0,0.2)',
                        padding: '6px 10px',
                        borderRadius: '100px',
                        backdropFilter: 'blur(10px)'
                      }}
                    >
                      {product.images.map((_, i) => (
                        <Box 
                          key={i}
                          onClick={() => setImgIndex(i)}
                          style={{
                            width: i === imgIndex ? 20 : 6,
                            height: 6,
                            borderRadius: 3,
                            backgroundColor: i === imgIndex ? '#059669' : 'rgba(255,255,255,0.5)',
                            transition: 'all 0.3s ease',
                            cursor: 'pointer'
                          }}
                        />
                      ))}
                    </Group>
                  )}
                </Box>
              )}
            </Box>
          </motion.div>
        </Grid.Col>
      </Grid>
    </Reveal>
  );
}
