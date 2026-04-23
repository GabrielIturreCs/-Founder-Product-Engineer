'use client';

import React from 'react';
import { Container, Grid, Title, Text, Stack, Box, Group, useMantineColorScheme, Divider } from '@mantine/core';
import { 
  IconLayout2,
  IconDatabase, 
  IconServer, 
  IconCompass,
} from '@tabler/icons-react';
import { motion } from 'framer-motion';
import { Reveal } from './Reveal';
import { useSoundEffects } from '../app/SoundProvider';

interface TechCategory {
  title: string;
  icon: React.ReactNode;
  techs: string[];
  highlight?: boolean;
}

export function TechStack() {
  const { colorScheme } = useMantineColorScheme();
  const { playSound } = useSoundEffects();

  const categories: TechCategory[] = [
    {
      title: "Frontend & UX",
      icon: <IconLayout2 size={28} stroke={1.5} />,
      techs: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Mobile-first UX", "PWA"]
    },
    {
      title: "Backend & DB",
      icon: <IconDatabase size={28} stroke={1.5} />,
      techs: ["NestJS", "Node.js", "PostgreSQL", "MongoDB", "REST APIs", "Redis"]
    },
    {
      title: "Infrastructure",
      icon: <IconServer size={28} stroke={1.5} />,
      techs: ["Docker", "VPS", "Coolify", "Git", "CI/CD", "Linux Server"]
    },
    {
      title: "Product & Architecture",
      icon: <IconCompass size={28} stroke={1.5} />,
      techs: ["Multi-tenancy", "API Design", "WhatsApp Automation", "QR Payment Integrations"],
      highlight: true
    }
  ];

  return (
    <section id="stack" style={{ 
      padding: '140px 0', 
      backgroundColor: colorScheme === 'dark' ? '#000' : '#FFFFFF',
    }}>
      <Container size="xl">
        <Stack gap={100}>
          {/* Header */}
          <Reveal width="100%" y={20}>
            <Stack gap={12}>
              <Title 
                order={2} 
                size="38px" 
                fw={700} 
                style={{ letterSpacing: '-0.04em', color: colorScheme === 'dark' ? '#fff' : '#222222' }}
              >
                Tecnologías y Stack
              </Title>
              <Text size="lg" style={{ color: '#717171', fontWeight: 500, maxWidth: 600 }}>
                Herramientas y metodologías que utilizo para construir productos escalables y resilientes.
              </Text>
            </Stack>
          </Reveal>

          {/* Amenities Grid Refined */}
          <Grid gap={80}>
            {categories.map((cat, idx) => (
              <Grid.Col span={{ base: 12, md: 6 }} key={idx}>
                <Reveal width="100%" y={40} delay={idx * 0.1}>
                  <Stack gap={32}>
                    <Stack gap={16}>
                      <Group gap="md" align="center">
                        <Box style={{ 
                          color: cat.highlight ? '#059669' : (colorScheme === 'dark' ? '#fff' : '#222222'),
                          display: 'flex',
                          alignItems: 'center'
                        }}>
                          {cat.icon}
                        </Box>
                        <Title 
                          order={3} 
                          size="26px" 
                          fw={700} 
                          style={{ color: colorScheme === 'dark' ? '#fff' : '#222222', letterSpacing: '-0.02em' }}
                        >
                          {cat.title}
                        </Title>
                      </Group>
                      <Divider 
                        color={colorScheme === 'dark' ? 'rgba(255,255,255,0.05)' : '#F1F1F1'} 
                        size="xs" 
                      />
                    </Stack>

                    <Group gap="sm">
                      {cat.techs.map((tech) => (
                        <motion.div
                          key={tech}
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          onMouseEnter={() => playSound('tech')}
                        >
                          <Box
                            className="tech-pill-airbnb"
                            style={{
                              padding: '8px 20px',
                              borderRadius: '100px',
                              border: `1px solid ${colorScheme === 'dark' ? 'rgba(255,255,255,0.1)' : '#EBEBEB'}`,
                              backgroundColor: colorScheme === 'dark' ? 'rgba(255,255,255,0.02)' : '#FFFFFF',
                              cursor: 'default'
                            }}
                          >
                            <Text 
                              size="15px" 
                              fw={500} 
                              style={{ color: colorScheme === 'dark' ? '#ccc' : '#222222' }}
                            >
                              {tech}
                            </Text>
                          </Box>
                        </motion.div>
                      ))}
                    </Group>
                  </Stack>
                </Reveal>
              </Grid.Col>
            ))}
          </Grid>
        </Stack>
      </Container>
    </section>
  );
}
