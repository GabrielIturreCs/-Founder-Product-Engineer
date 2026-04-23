'use client';

import React, { useState, useEffect } from 'react';
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
import { useSoundEffects } from '../app/SoundProvider';
import { db } from '../lib/firebase';
import { collection, addDoc, serverTimestamp, query, where, getDocs } from 'firebase/firestore';
import { sendBookingEmails } from '../app/actions/booking';

export function ContactConcierge() {
  const { language } = useLanguage();
  const { colorScheme } = useMantineColorScheme();
  const { playSound } = useSoundEffects();
  const clipboard = useClipboard({ timeout: 2000 });
  const [step, setStep] = useState(1);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [name, setName] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [message, setMessage] = useState('');
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [bookedSlots, setBookedSlots] = useState<string[]>([]);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showValidation, setShowValidation] = useState(false);

  const email = "gabriel13iturre@gmail.com";

  // Validaciones
  const isEmailValid = (email: string) => /^\S+@\S+\.\S+$/.test(email);
  const canOpenCalendar = name.trim().length > 2 && isEmailValid(emailInput);

  // Cargar turnos ocupados cuando cambia la fecha
  useEffect(() => {
    const fetchBookedSlots = async () => {
      if (!selectedDate) return;
      
      const dateStr = `2026-05-${selectedDate.toString().padStart(2, '0')}`;
      const q = query(
        collection(db, "appointments"),
        where("date", "==", dateStr)
      );

      try {
        const querySnapshot = await getDocs(q);
        const booked = querySnapshot.docs.map(doc => doc.data().time);
        setBookedSlots(booked);
      } catch (error) {
        console.error("Error fetching booked slots:", error);
      }
    };

    fetchBookedSlots();
  }, [selectedDate]);

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
    playSound('click');
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

  const handleConfirmBooking = async () => {
    if (!selectedDate || !selectedTime) return;
    
    playSound('click');
    setIsSubmitting(true);

    try {
      const bookingData = {
        name: name || 'Anónimo',
        email: emailInput || 'no-email',
        type: selectedType,
        message,
        date: `2026-05-${selectedDate.toString().padStart(2, '0')}`,
        time: selectedTime,
        status: 'pending',
        createdAt: serverTimestamp(),
        language
      };

      console.log("Attempting to save booking:", bookingData);

      await addDoc(collection(db, "appointments"), bookingData);

      // Enviar correos electrónicos
      await sendBookingEmails({
        name: bookingData.name,
        email: bookingData.email,
        type: bookingData.type || 'Consulta General',
        message: bookingData.message,
        date: bookingData.date,
        time: bookingData.time,
        language: bookingData.language
      });

      setIsConfirmed(true);
      setTimeout(() => {
        setIsCalendarOpen(false);
        setIsConfirmed(false);
        setStep(1);
        setSelectedType(null);
        setName('');
        setEmailInput('');
        setMessage('');
        setSelectedDate(null);
        setSelectedTime(null);
      }, 3000);
    } catch (error: any) {
      console.error("Firebase Error:", error);
      notifications.show({
        title: 'Error de Firebase',
        message: error?.message || (language === 'es' ? 'Error desconocido al agendar' : 'Unknown error while booking'),
        color: 'red',
        autoClose: false // Keep it open so user can read it
      });
    } finally {
      setIsSubmitting(false);
    }
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
                        onMouseEnter={() => playSound('hover')}
                        onClick={() => playSound('click')}
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
                    <ActionIcon variant="transparent" component="a" href="https://github.com/GabrielIturreCs" target="_blank" size="xl" color={colorScheme === 'dark' ? 'gray.4' : 'gray.8'} onMouseEnter={() => playSound('hover')} onClick={() => playSound('click')}>
                      <IconBrandGithub size={28} stroke={1.2} />
                    </ActionIcon>
                    <ActionIcon variant="transparent" component="a" href="https://www.linkedin.com/in/gabriel-iturre-73900626a/" target="_blank" size="xl" color={colorScheme === 'dark' ? 'gray.4' : 'gray.8'} onMouseEnter={() => playSound('hover')} onClick={() => playSound('click')}>
                      <IconBrandLinkedin size={28} stroke={1.2} />
                    </ActionIcon>
                    <ActionIcon variant="transparent" onClick={handleEmailAction} size="xl" color={colorScheme === 'dark' ? 'gray.4' : 'gray.8'} onMouseEnter={() => playSound('hover')}>
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
                <Group justify="space-between" align="center" mb={32} wrap="wrap">
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
                  <Stack gap={0} style={{ minWidth: 'fit-content' }}>
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
                                    onClick={() => { setSelectedType(type.label); setStep(2); playSound('click'); }}
                                    onMouseEnter={() => playSound('hover')}
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
                                  onClick={() => { setSelectedType(contactTypes[6].label); setStep(2); playSound('click'); }}
                                  onMouseEnter={() => playSound('hover')}
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
                          <Stack gap={12}>
                            <Box style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                              <Stack gap={4}>
                                <Textarea
                                  placeholder={language === 'es' ? 'Tu nombre' : 'Your name'}
                                  variant="filled"
                                  value={name}
                                  onChange={(e) => { setName(e.currentTarget.value); setShowValidation(false); }}
                                  error={showValidation && name.trim().length <= 2}
                                  styles={{ input: { borderRadius: '12px', fontSize: '14px', height: '44px', backgroundColor: colorScheme === 'dark' ? 'rgba(255,255,255,0.02)' : '#F7F7F7' } }}
                                />
                                {showValidation && name.trim().length <= 2 && (
                                  <Text size="10px" c="red" fw={600} pl={4}>{language === 'es' ? 'Nombre demasiado corto' : 'Name too short'}</Text>
                                )}
                              </Stack>
                              <Stack gap={4}>
                                <Textarea
                                  placeholder={language === 'es' ? 'Tu email' : 'Your email'}
                                  variant="filled"
                                  value={emailInput}
                                  onChange={(e) => { setEmailInput(e.currentTarget.value); setShowValidation(false); }}
                                  error={showValidation && !isEmailValid(emailInput)}
                                  styles={{ input: { borderRadius: '12px', fontSize: '14px', height: '44px', backgroundColor: colorScheme === 'dark' ? 'rgba(255,255,255,0.02)' : '#F7F7F7' } }}
                                />
                                {showValidation && !isEmailValid(emailInput) && (
                                  <Text size="10px" c="red" fw={600} pl={4}>{language === 'es' ? 'Email no válido' : 'Invalid email'}</Text>
                                )}
                              </Stack>
                            </Box>
                            <Textarea
                              placeholder={language === 'es' ? 'Cuéntame brevemente...' : 'Tell me briefly...'}
                              minRows={3} 
                              variant="filled" 
                              value={message} 
                              onChange={(e) => setMessage(e.currentTarget.value)}
                              styles={{
                                input: {
                                  backgroundColor: colorScheme === 'dark' ? 'rgba(255,255,255,0.02)' : '#F7F7F7',
                                  borderRadius: '12px', border: `1px solid ${colorScheme === 'dark' ? 'rgba(255,255,255,0.1)' : 'transparent'}`,
                                  fontSize: '15px'
                                }
                              }}
                            />
                          </Stack>
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

                            <motion.div whileHover={{ scale: canOpenCalendar ? 1.02 : 1 }} whileTap={{ scale: canOpenCalendar ? 0.98 : 1 }}>
                              <UnstyledButton 
                                onClick={() => { 
                                  if (!canOpenCalendar) {
                                    setShowValidation(true);
                                    playSound('click'); // Sound feedback for error
                                    return;
                                  }
                                  setIsCalendarOpen(true); 
                                  playSound('click'); 
                                }} 
                                onMouseEnter={() => canOpenCalendar && playSound('hover')} 
                                className="secondary-contact-btn" 
                                style={{
                                  width: '100%', 
                                  backgroundColor: 'transparent', 
                                  border: `1px solid ${colorScheme === 'dark' ? 'rgba(255,255,255,0.1)' : '#EBEBEB'}`,
                                  padding: '16px', 
                                  borderRadius: '12px', 
                                  display: 'flex', 
                                  alignItems: 'center', 
                                  justifyContent: 'center', 
                                  gap: '12px', 
                                  transition: 'all 0.2s ease',
                                  opacity: canOpenCalendar ? 1 : 0.5,
                                  cursor: canOpenCalendar ? 'pointer' : 'not-allowed'
                                }}
                              >
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

      <Modal 
        opened={isCalendarOpen} 
        onClose={() => setIsCalendarOpen(false)} 
        title={null} 
        withCloseButton={false} 
        padding={0} 
        radius="24px" 
        size="lg" 
        centered 
        zIndex={3000}
        styles={{
          content: {
            backgroundColor: colorScheme === 'dark' ? '#1A1A1A' : '#FFFFFF',
            border: `1px solid ${colorScheme === 'dark' ? 'rgba(255,255,255,0.1)' : 'transparent'}`
          }
        }}
      >
        <Box style={{ padding: '32px' }}>
          <AnimatePresence mode="wait">
            {!isConfirmed ? (
              <motion.div key="calendar" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <Stack gap={32}>
                  <Group justify="space-between" align="center">
                    <Stack gap={4}>
                      <Title order={3} size="24px" fw={700} c={colorScheme === 'dark' ? '#fff' : '#222222'}>{language === 'es' ? 'Selecciona una fecha' : 'Select a date'}</Title>
                      <Text size="sm" c={colorScheme === 'dark' ? '#A0A0A0' : '#717171'}>{language === 'es' ? 'Mayo 2026' : 'May 2026'}</Text>
                    </Stack>
                    <Group gap="xs">
                      <ActionIcon variant="subtle" color={colorScheme === 'dark' ? 'gray' : 'dark'} radius="xl"><IconChevronLeft size={20} /></ActionIcon>
                      <ActionIcon variant="subtle" color={colorScheme === 'dark' ? 'gray' : 'dark'} radius="xl"><IconChevronRight size={20} /></ActionIcon>
                    </Group>
                  </Group>
                  <Grid gap={4} style={{ textAlign: 'center' }}>
                    {(language === 'es' ? ['L', 'M', 'M', 'J', 'V', 'S', 'D'] : ['M', 'T', 'W', 'T', 'F', 'S', 'S']).map((d, i) => (<Grid.Col span={1.7} key={`${d}-${i}`}><Text size="xs" fw={700} c={colorScheme === 'dark' ? '#A0A0A0' : '#717171'}>{d}</Text></Grid.Col>))}
                    {Array.from({ length: 4 }).map((_, i) => <Grid.Col span={1.7} key={`empty-${i}`} />)}
                    {days.map(d => (
                      <Grid.Col span={1.7} key={d}>
                        <UnstyledButton 
                          onClick={() => setSelectedDate(d)} 
                          style={{ 
                            width: '100%', 
                            aspectRatio: '1', 
                            borderRadius: '50%', 
                            backgroundColor: selectedDate === d ? (colorScheme === 'dark' ? '#fff' : '#222222') : 'transparent', 
                            color: selectedDate === d ? (colorScheme === 'dark' ? '#000' : 'white') : (colorScheme === 'dark' ? '#eee' : '#222222'), 
                            display: 'flex', 
                            alignItems: 'center', 
                            justifyContent: 'center', 
                            transition: 'all 0.2s ease' 
                          }}
                        >
                          <Text fw={600} size="sm">{d}</Text>
                        </UnstyledButton>
                      </Grid.Col>
                    ))}
                  </Grid>
                  {selectedDate && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                      <Stack gap={16}>
                        <Text fw={700} size="sm" c={colorScheme === 'dark' ? '#fff' : '#222222'}>{language === 'es' ? 'Horarios disponibles' : 'Available slots'}</Text>
                        <Group gap="xs">
                          {times.map(t => {
                            const isBooked = bookedSlots.includes(t);
                            return (
                              <UnstyledButton 
                                key={t} 
                                onClick={() => !isBooked && setSelectedTime(t)} 
                                disabled={isBooked}
                                style={{ 
                                  padding: '8px 16px', 
                                  borderRadius: '99px', 
                                  border: `1px solid ${selectedTime === t ? (colorScheme === 'dark' ? '#fff' : '#222222') : (colorScheme === 'dark' ? 'rgba(255,255,255,0.1)' : '#EBEBEB')}`, 
                                  backgroundColor: selectedTime === t 
                                    ? (colorScheme === 'dark' ? '#fff' : '#222222') 
                                    : (isBooked ? (colorScheme === 'dark' ? 'rgba(255,255,255,0.03)' : '#f1f5f9') : 'transparent'), 
                                  color: selectedTime === t 
                                    ? (colorScheme === 'dark' ? '#000' : 'white') 
                                    : (isBooked ? (colorScheme === 'dark' ? '#444' : '#cbd5e1') : (colorScheme === 'dark' ? '#eee' : '#222222')), 
                                  transition: 'all 0.2s ease',
                                  cursor: isBooked ? 'not-allowed' : 'pointer',
                                  textDecoration: isBooked ? 'line-through' : 'none',
                                  opacity: isBooked ? 0.6 : 1
                                }}
                              >
                                <Text size="sm" fw={600}>{t}</Text>
                              </UnstyledButton>
                            );
                          })}
                        </Group>
                      </Stack>
                    </motion.div>
                  )}
                  <Group justify="flex-end" pt={20}>
                    <Button variant="subtle" color={colorScheme === 'dark' ? 'gray' : 'dark'} onClick={() => setIsCalendarOpen(false)}>{language === 'es' ? 'Cancelar' : 'Cancel'}</Button>
                    <Button 
                      disabled={!selectedDate || !selectedTime || !name || !emailInput || isSubmitting} 
                      loading={isSubmitting}
                      onClick={handleConfirmBooking} 
                      style={{ 
                        backgroundColor: (!selectedDate || !selectedTime || !name || !emailInput) 
                          ? (colorScheme === 'dark' ? 'rgba(255,255,255,0.05)' : '#94a3b8') 
                          : '#059669', 
                        color: 'white', 
                        padding: '0 32px', 
                        height: '48px', 
                        borderRadius: '8px',
                        transition: 'all 0.2s ease'
                      }}
                    >
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
                  <Title order={3} size="24px" c={colorScheme === 'dark' ? '#fff' : '#222222'}>{language === 'es' ? '¡Cita Programada!' : 'Meeting Scheduled!'}</Title>
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
