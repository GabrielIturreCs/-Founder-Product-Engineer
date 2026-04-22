'use client';

import React from 'react';
import { Box, Container, Grid, Stack, Title, Text, Group, UnstyledButton, useMantineColorScheme } from '@mantine/core';
import { motion, AnimatePresence } from 'framer-motion';
import { IconArrowRight, IconUsers, IconCalendar, IconDeviceMobile, IconCircleCheck, IconBolt } from '@tabler/icons-react';
import { useLanguage } from '../app/LanguageProvider';
import { Reveal } from './Reveal';

interface ProductData {
  title: string;
  category: string;
  description: string;
  images?: string[];
  videoSrc?: string;
  stack: string[];
  stats: { label: string; value: string; icon: React.ElementType }[];
  link?: string;
  playStore?: boolean;
}

export function ProjectShowcase() {
  const { t, language } = useLanguage();
  const { colorScheme } = useMantineColorScheme();

  const products: ProductData[] = [
    {
      title: "KILO — Founder",
      category: language === 'es' ? "SaaS Multi-tenant / Comercio" : "SaaS Multi-tenant / Retail",
      description: language === 'es' 
        ? "Plataforma multi-tenant para comercios preparada para +10.000 usuarios. Diseñé el sistema con aislamiento de datos seguro y aprovisionamiento dinámico, transformando flujos complejos en una experiencia moderna orientada a decisiones."
        : "Multi-tenant retail platform built for 10k+ users. Designed the system with secure data isolation and dynamic provisioning, transforming complex workflows into a modern, decision-oriented experience.",
      images: ["/Images/kilo_1.png", "/Images/kilo_2.png"],
      stack: ["React", "NestJS", "PostgreSQL", "Docker", "AFIP API"],
      stats: [
        { label: language === 'es' ? 'Capacidad' : 'User Capacity', value: '+10k', icon: IconUsers },
        { label: language === 'es' ? 'Lanzamiento' : 'Time-to-Market', value: language === 'es' ? '4 Meses' : '4 Months', icon: IconBolt }
      ],
      link: "https://somoskilo.com",
      playStore: true
    },
    {
      title: "CHEFI — Founder",
      category: language === 'es' ? "SaaS Vertical / Gastronomía" : "Vertical SaaS / Gastronomy",
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
      title: "ZonaSalud",
      category: language === 'es' ? "SaaS para Salud / Gestión de Clínicas" : "Health SaaS / Clinic Management",
      description: language === 'es'
        ? "Gestión médica integral donde especialistas coordinan turnos y pacientes reciben recordatorios por WhatsApp. Permite a secretarias gestionar agendas completas e historiales médicos centralizados en tiempo real."
        : "Comprehensive medical management where specialists coordinate appointments and patients receive WhatsApp reminders. Enables secretaries to manage full agendas and centralized medical records in real-time.",
      videoSrc: "/Images/zonasalud.mp4",
      stack: ["Python", "FastAPI", "WhatsApp API", "Supabase"],
      stats: [
        { label: language === 'es' ? 'Recordatorios' : 'Reminders', value: 'WhatsApp', icon: IconDeviceMobile },
        { label: language === 'es' ? 'Gestión' : 'Management', value: language === 'es' ? 'Historial' : 'Medical Records', icon: IconCircleCheck }
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
  const [imgIndex, setImgIndex] = React.useState(0);

  React.useEffect(() => {
    if (product.images && product.images.length > 1) {
      const timer = setInterval(() => {
        setImgIndex((prev) => (prev + 1) % product.images.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [product.images]);

  return (
    <Reveal width="100%" y={40} delay={index * 0.1}>
      <Grid gutter={80} align="center">
        {/* Text Side */}
        <Grid.Col span={{ base: 12, md: 5 }} order={{ base: 2, md: index % 2 === 0 ? 1 : 2 }}>
          <Stack gap={32}>
            <Stack gap={12}>
              <div className="pill-badge-premium" style={{ 
                backgroundColor: colorScheme === 'dark' ? 'rgba(5, 150, 105, 0.15)' : '#D1FAE5', 
                color: colorScheme === 'dark' ? '#10B981' : '#059669',
                border: 'none',
                width: 'fit-content',
                padding: '4px 12px',
                fontSize: '11px',
                fontWeight: 800,
                borderRadius: '4px'
              }}>
                {product.category.toUpperCase()}
              </div>
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

            <Group gap="md" mt={10}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <UnstyledButton 
                  className="case-study-btn-airbnb"
                  component="a"
                  href={product.link}
                  target={product.link?.startsWith('http') ? "_blank" : "_self"}
                >
                  <Text size="sm" fw={600}>
                    {language === 'es' ? 'Ver Aplicación' : 'View Application'}
                  </Text>
                  <IconArrowRight size={18} stroke={2.2} />
                </UnstyledButton>
              </motion.div>

              {product.playStore && (
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                      alt="Get it on Google Play" 
                      style={{ height: '44px', filter: colorScheme === 'dark' ? 'brightness(0.9)' : 'none' }}
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
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <Box style={{ 
              position: 'relative',
              borderRadius: '32px',
              backgroundColor: colorScheme === 'dark' ? '#0F0F0F' : '#F7F7F7',
              padding: '40px',
              border: `1px solid ${colorScheme === 'dark' ? 'rgba(255,255,255,0.05)' : '#EBEBEB'}`,
              overflow: 'hidden',
              aspectRatio: '4/3',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
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
                    objectFit: 'cover',
                    borderRadius: '16px',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                    border: `1px solid ${colorScheme === 'dark' ? 'rgba(255,255,255,0.1)' : '#EBEBEB'}`
                  }}
                />
              ) : product.images && (
                <>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={product.images[imgIndex]}
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                      style={{ width: '100%', height: '100%' }}
                    >
                      <Box 
                        style={{
                          width: '100%',
                          height: '100%',
                          backgroundImage: `url(${product.images[imgIndex]})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'top center',
                          borderRadius: '16px',
                          boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                          border: `1px solid ${colorScheme === 'dark' ? 'rgba(255,255,255,0.1)' : '#EBEBEB'}`
                        }}
                      />
                    </motion.div>
                  </AnimatePresence>

                  {product.images.length > 1 && (
                    <Group gap={8} style={{ position: 'absolute', bottom: 20, zIndex: 10 }}>
                      {product.images.map((_, i) => (
                        <Box 
                          key={i}
                          style={{
                            width: i === imgIndex ? 24 : 8,
                            height: 8,
                            borderRadius: 4,
                            backgroundColor: i === imgIndex ? (colorScheme === 'dark' ? '#FFFFFF' : '#222222') : (colorScheme === 'dark' ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.1)'),
                            transition: 'all 0.3s ease'
                          }}
                        />
                      ))}
                    </Group>
                  )}
                </>
              )}
            </Box>
          </motion.div>
        </Grid.Col>
      </Grid>
    </Reveal>
  );
}
