'use client';

import React, { useState } from 'react';
import { Container, Grid, Title, Text, Stack, Box, Group, UnstyledButton, Textarea, Avatar, Badge, ActionIcon, Modal, Button } from '@mantine/core';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  IconBrandWhatsapp, 
  IconCalendarEvent, 
  IconBrandGithub, 
  IconBrandLinkedin, 
  IconBrandInstagram,
  IconMail,
  IconChevronLeft,
  IconChevronRight,
  IconCheck,
  IconDownload,
  IconFileText
} from '@tabler/icons-react';
import { useLanguage } from '../app/LanguageProvider';
import { useMantineColorScheme } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { useClipboard } from '@mantine/hooks';
import { Reveal } from './Reveal';

export function ContactConcierge() {
  const { language } = useLanguage();
  const { colorScheme } = useMantineColorScheme();
  const clipboard = useClipboard({ timeout: 2000 });
  const [step, setStep] = useState(1);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [message, setMessage] = useState('');
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const email = "gabriel13iturre@gmail.com";

  const contactTypes = language === 'es' ? [
    { label: 'Rol Full-Time', value: 'fulltime' },
    { label: 'Product Engineer', value: 'product' },
    { label: 'Proyecto Contract / B2B', value: 'contract' },
    { label: 'Entrevista Exploratoria', value: 'interview' },
    { label: 'Crear un MVP', value: 'mvp' },
    { label: 'Rol Full Stack', value: 'fullstack' },
    { label: 'Solo Saludar', value: 'hello' }
  ] : [
    { label: 'Full-Time Role', value: 'fulltime' },
    { label: 'Product Engineer', value: 'product' },
    { label: 'Contract / B2B Project', value: 'contract' },
    { label: 'Exploratory Interview', value: 'interview' },
    { label: 'Build an MVP', value: 'mvp' },
    { label: 'Full Stack Role', value: 'fullstack' },
    { label: 'Just say Hi', value: 'hello' }
  ];

  const times = ['10:00', '11:30', '14:00', '16:30', '18:00'];
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  const handleWhatsApp = () => {
    const text = encodeURIComponent(`Hola Gabriel! Me interesa: ${selectedType}. Mensaje: ${message}`);
    window.open(`https://wa.me/543884472423?text=${text}`, '_blank');
  };

  const handleEmailAction = () => {
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

  const handleConfirmBooking = () => {
    setIsConfirmed(true);
    setTimeout(() => {
      setIsCalendarOpen(false);
      setIsConfirmed(false);
      setSelectedDate(null);
      setSelectedTime(null);
    }, 3000);
  };

  return (
    <section id="contact" style={{ 
      padding: '140px 0', 
      backgroundColor: colorScheme === 'dark' ? '#000' : '#F7F7F7',
      borderTop: `1px solid ${colorScheme === 'dark' ? 'rgba(255,255,255,0.05)' : '#EBEBEB'}`
    }}>
      <Container size="xl">
        <Grid gap={80} align="center">
          {/* Left Side */}
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Reveal y={40} delay={0.2}>
              <Stack gap={40}>
                <Stack gap={16}>
                  <Title 
                    order={2} 
                    size="48px" 
                    fw={700} 
                    style={{ letterSpacing: '-0.04em', color: colorScheme === 'dark' ? '#fff' : '#222222', lineHeight: 1.1 }}
                  >
                    {language === 'es' ? '¿Buscas un Product Engineer?' : 'Looking for a Product Engineer?'}
                  </Title>
                  <Text size="xl" style={{ color: '#717171', fontWeight: 500, maxWidth: 500, lineHeight: 1.5 }}>
                    {language === 'es' 
                      ? 'Listo para aportar visión arquitectónica, código limpio y ejecución rápida a tu equipo o proyecto.' 
                      : 'Ready to bring architectural vision, clean code, and fast execution to your team or project.'}
                  </Text>
                </Stack>

                <Group gap="md">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button 
                      size="lg" 
                      radius="md" 
                      leftSection={<IconDownload size={20} stroke={1.5} />}
                      style={{ backgroundColor: '#222222', color: 'white', height: '54px', padding: '0 32px' }}
                      component="a"
                      href="/Images/Gabriel%20Iturre%20_%20Full%20Stack%20Product%20Engineer.pdf"
                      download
                    >
                      {language === 'es' ? 'Descargar CV / Resume' : 'Download CV / Resume'}
                    </Button>
                  </motion.div>
                </Group>

                <Stack gap={24}>
                  <Text fw={700} size="sm" style={{ textTransform: 'uppercase', letterSpacing: '0.1em', color: '#717171' }}>
                    {language === 'es' ? 'Canales profesionales' : 'Professional channels'}
                  </Text>
                  <Group gap="xl">
                    <ActionIcon variant="transparent" component="a" href="https://github.com/GabrielIturreCs" target="_blank" size="xl" color={colorScheme === 'dark' ? 'gray.4' : 'gray.8'}>
                      <IconBrandGithub size={28} stroke={1.2} />
                    </ActionIcon>
                    <ActionIcon variant="transparent" component="a" href="https://www.linkedin.com/in/gabriel-iturre-73900626a/" target="_blank" size="xl" color={colorScheme === 'dark' ? 'gray.4' : 'gray.8'}>
                      <IconBrandLinkedin size={28} stroke={1.2} />
                    </ActionIcon>
                    <ActionIcon variant="transparent" onClick={handleEmailAction} size="xl" color={colorScheme === 'dark' ? 'gray.4' : 'gray.8'}>
                      <IconMail size={28} stroke={1.2} />
                    </ActionIcon>
                  </Group>
                </Stack>
              </Stack>
            </Reveal>
          </Grid.Col>

          {/* Right Side */}
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Reveal y={60} delay={0.4}>
              <Box style={{
                backgroundColor: colorScheme === 'dark' ? '#0A0A0A' : '#FFFFFF',
                borderRadius: '24px',
                border: `1px solid ${colorScheme === 'dark' ? 'rgba(255,255,255,0.1)' : '#EBEBEB'}`,
                boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
                padding: '32px',
                maxWidth: 500,
                marginLeft: 'auto'
              }}>
                {/* Header */}
                <Group justify="space-between" align="flex-start" mb={32}>
                  <Group gap="md">
                    <Avatar 
                      src="/Images/gabriel-iturre-programador-jujuy.png" 
                      size="60px" 
                      radius="100%"
                      style={{ border: '2px solid #059669' }}
                    />
                    <Stack gap={0}>
                      <Title order={4} size="18px" fw={700} c={colorScheme === 'dark' ? '#fff' : '#222222'}>Gabriel Iturre</Title>
                      <Group gap={6} align="center">
                        <Box style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#059669' }} />
                        <Text size="xs" fw={600} c="#059669">
                          {language === 'es' ? 'Abierto a propuestas' : 'Open to offers'}
                        </Text>
                      </Group>
                    </Stack>
                  </Group>
                  <Stack gap={0} align="flex-end">
                    <Text size="xs" fw={700} c="#717171" style={{ textTransform: 'uppercase' }}>
                      {language === 'es' ? 'TIEMPO DE RESPUESTA' : 'RESPONSE TIME'}
                    </Text>
                    <Text size="sm" fw={600} c={colorScheme === 'dark' ? '#fff' : '#222222'}>
                      &lt; 2 {language === 'es' ? 'horas' : 'hours'}
                    </Text>
                  </Stack>
                </Group>

                <Box style={{ height: '1px', backgroundColor: colorScheme === 'dark' ? 'rgba(255,255,255,0.05)' : '#F1F1F1', marginBottom: 32 }} />

                <Stack gap={24}>
                  <AnimatePresence mode="wait">
                    {step === 1 ? (
                      <motion.div key="step1" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                        <Stack gap={16}>
                          <Text fw={700} size="sm" c={colorScheme === 'dark' ? '#fff' : '#222222'}>
                            {language === 'es' ? '¿En qué puedo ayudarte?' : 'How can I help you?'}
                          </Text>
                          <Grid gap="xs">
                            {contactTypes.slice(0, 6).map((type) => (
                              <Grid.Col span={6} key={type.value}>
                                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                  <UnstyledButton
                                    onClick={() => { setSelectedType(type.label); setStep(2); }}
                                    style={{
                                      width: '100%', padding: '12px', borderRadius: '12px',
                                      border: `1px solid ${colorScheme === 'dark' ? 'rgba(255,255,255,0.1)' : '#EBEBEB'}`,
                                      textAlign: 'center', transition: 'all 0.2s ease',
                                    }}
                                    className="contact-type-btn"
                                  >
                                    <Text size="sm" fw={600} c={colorScheme === 'dark' ? '#ccc' : '#484848'}>{type.label}</Text>
                                  </UnstyledButton>
                                </motion.div>
                              </Grid.Col>
                            ))}
                            <Grid.Col span={12}>
                              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                <UnstyledButton
                                  onClick={() => { setSelectedType(contactTypes[6].label); setStep(2); }}
                                  style={{
                                    width: '100%', padding: '12px', borderRadius: '12px',
                                    border: `1px solid ${colorScheme === 'dark' ? 'rgba(255,255,255,0.1)' : '#EBEBEB'}`,
                                    textAlign: 'center', transition: 'all 0.2s ease',
                                  }}
                                  className="contact-type-btn"
                                >
                                  <Text size="sm" fw={600} c={colorScheme === 'dark' ? '#ccc' : '#484848'}>{contactTypes[6].label}</Text>
                                </UnstyledButton>
                              </motion.div>
                            </Grid.Col>
                          </Grid>
                        </Stack>
                      </motion.div>
                    ) : (
                      <motion.div key="step2" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                        <Stack gap={20}>
                          <Group justify="space-between">
                            <Badge variant="light" color="teal" size="lg" radius="sm">{selectedType}</Badge>
                            <UnstyledButton onClick={() => setStep(1)}>
                              <Text size="xs" fw={700} c="dimmed" style={{ textDecoration: 'underline' }}>{language === 'es' ? 'Cambiar' : 'Change'}</Text>
                            </UnstyledButton>
                          </Group>
                          <Textarea
                            placeholder={language === 'es' ? 'Cuéntame brevemente...' : 'Tell me briefly...'}
                            minRows={3} variant="filled" value={message} onChange={(e) => setMessage(e.currentTarget.value)}
                            styles={{
                              input: {
                                backgroundColor: colorScheme === 'dark' ? 'rgba(255,255,255,0.02)' : '#F7F7F7',
                                borderRadius: '12px', border: `1px solid ${colorScheme === 'dark' ? 'rgba(255,255,255,0.1)' : 'transparent'}`,
                                fontSize: '15px'
                              }
                            }}
                          />
                          <Stack gap={10}>
                            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                              <UnstyledButton onClick={handleWhatsApp} className="primary-contact-btn" style={{
                                width: '100%', backgroundColor: '#059669', color: 'white', padding: '16px', borderRadius: '12px',
                                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', transition: 'all 0.2s ease',
                              }}>
                                <IconBrandWhatsapp size={22} stroke={2} />
                                <Text fw={700}>{language === 'es' ? 'Contactar por WhatsApp' : 'Contact via WhatsApp'}</Text>
                              </UnstyledButton>
                            </motion.div>

                            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                              <UnstyledButton onClick={() => setIsCalendarOpen(true)} className="secondary-contact-btn" style={{
                                width: '100%', backgroundColor: 'transparent', border: `1px solid ${colorScheme === 'dark' ? 'rgba(255,255,255,0.1)' : '#EBEBEB'}`,
                                padding: '16px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', transition: 'all 0.2s ease',
                              }}>
                                <IconCalendarEvent size={22} stroke={1.5} color="#717171" />
                                <Text fw={700} c={colorScheme === 'dark' ? '#fff' : '#222222'}>{language === 'es' ? 'Agendar Entrevista' : 'Schedule Interview'}</Text>
                              </UnstyledButton>
                            </motion.div>
                          </Stack>

                          <Text size="xs" c="dimmed" ta="center" style={{ fontStyle: 'italic' }}>
                            {language === 'es' 
                              ? '"Gabriel suele responder rápido a propuestas de este nivel."' 
                              : '"Gabriel usually responds quickly to proposals of this level."'}
                          </Text>
                        </Stack>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Stack>
              </Box>
            </Reveal>
          </Grid.Col>
        </Grid>
      </Container>

      <Modal opened={isCalendarOpen} onClose={() => setIsCalendarOpen(false)} title={null} withCloseButton={false} padding={0} radius="24px" size="lg" centered zIndex={3000}>
        <Box style={{ padding: '32px' }}>
          <AnimatePresence mode="wait">
            {!isConfirmed ? (
              <motion.div key="calendar" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <Stack gap={32}>
                  <Group justify="space-between" align="center">
                    <Stack gap={4}>
                      <Title order={3} size="24px" fw={700} c="#222222">{language === 'es' ? 'Selecciona una fecha' : 'Select a date'}</Title>
                      <Text size="sm" c="#717171">{language === 'es' ? 'Mayo 2026' : 'May 2026'}</Text>
                    </Stack>
                    <Group gap="xs">
                      <ActionIcon variant="subtle" color="dark" radius="xl"><IconChevronLeft size={20} /></ActionIcon>
                      <ActionIcon variant="subtle" color="dark" radius="xl"><IconChevronRight size={20} /></ActionIcon>
                    </Group>
                  </Group>
                  <Grid gap={4} style={{ textAlign: 'center' }}>
                    {(language === 'es' ? ['L', 'M', 'M', 'J', 'V', 'S', 'D'] : ['M', 'T', 'W', 'T', 'F', 'S', 'S']).map((d, i) => (<Grid.Col span={1.7} key={`${d}-${i}`}><Text size="xs" fw={700} c="#717171">{d}</Text></Grid.Col>))}
                    {Array.from({ length: 4 }).map((_, i) => <Grid.Col span={1.7} key={`empty-${i}`} />)}
                    {days.map(d => (
                      <Grid.Col span={1.7} key={d}>
                        <UnstyledButton onClick={() => setSelectedDate(d)} style={{ width: '100%', aspectRatio: '1', borderRadius: '50%', backgroundColor: selectedDate === d ? '#222222' : 'transparent', color: selectedDate === d ? 'white' : '#222222', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s ease' }}>
                          <Text fw={600} size="sm">{d}</Text>
                        </UnstyledButton>
                      </Grid.Col>
                    ))}
                  </Grid>
                  {selectedDate && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                      <Stack gap={16}>
                        <Text fw={700} size="sm" c="#222222">{language === 'es' ? 'Horarios disponibles' : 'Available slots'}</Text>
                        <Group gap="xs">
                          {times.map(t => (
                            <UnstyledButton key={t} onClick={() => setSelectedTime(t)} style={{ padding: '8px 16px', borderRadius: '99px', border: `1px solid ${selectedTime === t ? '#222222' : '#EBEBEB'}`, backgroundColor: selectedTime === t ? '#222222' : 'transparent', color: selectedTime === t ? 'white' : '#222222', transition: 'all 0.2s ease' }}>
                              <Text size="sm" fw={600}>{t}</Text>
                            </UnstyledButton>
                          ))}
                        </Group>
                      </Stack>
                    </motion.div>
                  )}
                  <Group justify="flex-end" pt={20}>
                    <Button variant="subtle" color="dark" onClick={() => setIsCalendarOpen(false)}>{language === 'es' ? 'Cancelar' : 'Cancel'}</Button>
                    <Button disabled={!selectedDate || !selectedTime} onClick={handleConfirmBooking} style={{ backgroundColor: '#059669', color: 'white', padding: '0 32px', height: '48px', borderRadius: '8px' }}>
                      {language === 'es' ? 'Agendar Entrevista' : 'Schedule Interview'}
                    </Button>
                  </Group>
                </Stack>
              </motion.div>
            ) : (
              <motion.div key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} style={{ textAlign: 'center', padding: '40px 0' }}>
                <Stack align="center" gap="md">
                  <Box style={{ width: 64, height: 64, borderRadius: '50%', backgroundColor: '#D1FAE5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <IconCheck size={32} color="#059669" />
                  </Box>
                  <Title order={3} size="24px">{language === 'es' ? '¡Cita Programada!' : 'Meeting Scheduled!'}</Title>
                  <Text c="dimmed">{language === 'es' ? 'Recibirás los detalles de la videollamada en tu calendario.' : 'You will receive the video call details in your calendar.'}</Text>
                </Stack>
              </motion.div>
            )}
          </AnimatePresence>
        </Box>
      </Modal>
    </section>
  );
}
