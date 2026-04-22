'use client';

import { Box, Text, Group, Stack, UnstyledButton, useMantineColorScheme } from '@mantine/core';
import { motion } from 'framer-motion';
import { IconArrowRight } from '@tabler/icons-react';
import { useLanguage } from '../app/LanguageProvider';

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  date: string;
  imageSrc?: string;
  stack?: string[];
  stats?: { label: string; value: string }[];
  gridSpan?: number;
  height?: number | string;
}

export function ProjectCard({ title, category, description, date, imageSrc, stack, stats, gridSpan = 6, height = 480 }: ProjectCardProps) {
  const { language } = useLanguage();
  const { colorScheme } = useMantineColorScheme();

  return (
    <Box className="bento-grid-item" style={{ gridColumn: `span ${gridSpan}` }}>
      <motion.div
        className="bento-card"
        style={{ height, display: 'flex', flexDirection: 'column' }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        whileHover={{ y: -10, boxShadow: '0 30px 60px rgba(0,0,0,0.12)' }}
      >
        {/* Top Section: Information (Solid Background) */}
        <Box p={32} style={{ flex: 'none', zIndex: 2 }}>
          <Stack gap={20}>
            <Group justify="space-between" align="flex-start">
              <Stack gap={4}>
                <Text fw={800} size="28px" style={{ letterSpacing: '-0.03em', lineHeight: 1.1, color: 'var(--mantine-color-text)' }}>
                  {title}
                </Text>
                <Text size="sm" fw={500} c="dimmed" style={{ maxWidth: '90%', lineHeight: 1.5 }}>
                  {description}
                </Text>
              </Stack>
              <div className="pill-badge" style={{ backgroundColor: 'var(--mantine-color-teal-6)', color: 'white', border: 'none' }}>
                {category}
              </div>
            </Group>

            <Group gap="xs">
              {stack?.map((item, i) => (
                <div key={i} className="pill-badge">{item}</div>
              ))}
              <div className="pill-badge" style={{ opacity: 0.5 }}>{date}</div>
            </Group>

            {stats && (
              <Group gap={40} mt={10}>
                {stats.map((stat, i) => (
                  <Stack gap={0} key={i}>
                    <Text fw={900} size="xl" c="var(--mantine-color-text)" style={{ lineHeight: 1 }}>{stat.value}</Text>
                    <Text size="10px" fw={800} c="dimmed" style={{ textTransform: 'uppercase', letterSpacing: '0.05em' }}>{stat.label}</Text>
                  </Stack>
                ))}
              </Group>
            )}

            <UnstyledButton 
              className="case-study-btn"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '10px 20px',
                borderRadius: '99px',
                border: '1px solid var(--mantine-color-default-border)',
                width: 'fit-content',
                marginTop: 10,
                transition: 'all 0.2s ease'
              }}
            >
              <Text size="sm" fw={700}>
                {language === 'es' ? 'Ver Caso de Estudio' : 'View Case Study'}
              </Text>
              <IconArrowRight size={16} />
            </UnstyledButton>
          </Stack>
        </Box>

        {/* Bottom Section: Image (Asomando) */}
        <Box style={{ 
          flex: 1, 
          position: 'relative', 
          overflow: 'hidden',
          marginTop: 10,
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24,
          backgroundColor: colorScheme === 'dark' ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.02)',
          padding: '24px 24px 0 24px'
        }}>
          {imageSrc && (
            <motion.div 
              style={{
                width: '100%',
                height: '100%',
                backgroundImage: `url(${imageSrc})`,
                backgroundSize: 'cover',
                backgroundPosition: 'top center',
                borderRadius: '16px 16px 0 0',
                boxShadow: '0 -10px 30px rgba(0,0,0,0.1)',
                zIndex: 1
              }}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.4 }}
            />
          )}
        </Box>
      </motion.div>
    </Box>
  );
}
