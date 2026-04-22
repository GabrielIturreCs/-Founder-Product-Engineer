'use client';

import { Paper, Text, Stack, Title, Box } from '@mantine/core';
import { motion } from 'framer-motion';

interface BentoCardProps {
  title: string;
  category?: string;
  description?: string;
  className?: string;
  bgImage?: string;
  children?: React.ReactNode;
}

export function BentoCard({ title, category, description, className, bgImage, children }: BentoCardProps) {
  return (
    <Paper
      radius="lg"
      p="xl"
      className={`glass ${className}`}
      style={{
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        backgroundImage: bgImage ? `url(${bgImage})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {bgImage && (
        <Box
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 60%)',
            zIndex: 1,
          }}
        />
      )}
      
      <Stack gap="xs" style={{ zIndex: 2 }}>
        {category && (
          <Text size="xs" fw={700} c="dimmed" tt="uppercase" style={{ letterSpacing: '0.05em' }}>
            {category}
          </Text>
        )}
        <Title order={3} size="h4" c="white">
          {title}
        </Title>
        {description && (
          <Text size="sm" c="dimmed" lineClamp={2}>
            {description}
          </Text>
        )}
        {children}
      </Stack>
    </Paper>
  );
}
