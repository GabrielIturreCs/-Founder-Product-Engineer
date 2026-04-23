'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

interface SoundContextType {
  isSoundEnabled: boolean;
  toggleSound: () => void;
  playSound: (type: 'toggle-on' | 'toggle-off' | 'hover' | 'click' | 'nav' | 'tech' | 'exp') => void;
}

const SoundContext = createContext<SoundContextType | undefined>(undefined);

export function SoundProvider({ children }: { children: React.ReactNode }) {
  const [isSoundEnabled, setIsSoundEnabled] = useState(true);
  const lampAudio = React.useRef<HTMLAudioElement | null>(null);

  React.useEffect(() => {
    lampAudio.current = new Audio('/Images/Light%20Switch%20-%20Sound%20Effect%20%5B4K%5D.mp3');
    lampAudio.current.preload = 'auto';
  }, []);

  const playSound = (type: 'toggle-on' | 'toggle-off' | 'hover' | 'click' | 'nav' | 'tech' | 'exp') => {
    if (!isSoundEnabled && type !== 'toggle-on') return;

    const sounds = {
      // Switching TO Dark Mode
      'toggle-on': '/Images/pasar%20a%20modo%20oscuro.wav', 
      // Switching TO Light Mode
      'toggle-off': '/Images/encender%20pasar%20a%20modo%20claro.wav',
      // SATISFYING WATER DROP (Gotita): Clean and playful
      'nav': 'https://assets.mixkit.co/active_storage/sfx/2569/2569-preview.mp3',
      // ORGANIC TICK
      'tech': 'https://assets.mixkit.co/active_storage/sfx/2573/2573-preview.mp3',
      // WOODY TAP
      'exp': 'https://assets.mixkit.co/active_storage/sfx/2570/2570-preview.mp3',
      // PRIMARY ACTION
      'click': 'https://assets.mixkit.co/active_storage/sfx/2570/2570-preview.mp3',
      // FALLBACK
      'hover': 'https://assets.mixkit.co/active_storage/sfx/2569/2569-preview.mp3'
    };

    const audio = new Audio(sounds[type as keyof typeof sounds] || sounds.hover);

    if (type === 'nav') {
      // HIGH PITCH for "Gotita" effect (Clean & Satisfying)
      audio.playbackRate = 1.6 + Math.random() * 0.4;
      audio.volume = 0.04;
    } else if (type === 'tech' || type === 'exp' || type === 'hover') {
      audio.playbackRate = 0.8 + Math.random() * 0.4;
      audio.volume = 0.05;
    } else {
      audio.volume = 0.15;
    }

    audio.play().catch(() => {});
  };

  const toggleSound = () => {
    if (!isSoundEnabled) {
      setIsSoundEnabled(true);
      // Confirmed "Bubble" sound for Sound On
      const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2569/2569-preview.mp3');
      audio.playbackRate = 1.5; // High pitch to make it sound like a "gotita"
      audio.volume = 0.2;
      audio.play().catch((e) => console.error("Audio toggle-on error:", e));
    } else {
      // Confirmed "Muted" sound for Sound Off
      const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2574/2574-preview.mp3');
      audio.volume = 0.15;
      audio.play().catch((e) => console.error("Audio toggle-off error:", e));
      setIsSoundEnabled(false);
    }
  };

  return (
    <SoundContext.Provider value={{ isSoundEnabled, toggleSound, playSound }}>
      {children}
    </SoundContext.Provider>
  );
}

export function useSoundEffects() {
  const context = useContext(SoundContext);
  if (context === undefined) {
    throw new Error('useSoundEffects must be used within a SoundProvider');
  }
  return context;
}
