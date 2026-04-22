'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

interface SoundContextType {
  isSoundEnabled: boolean;
  toggleSound: () => void;
  playSound: (type: 'toggle-on' | 'toggle-off' | 'hover' | 'click' | 'nav') => void;
}

const SoundContext = createContext<SoundContextType | undefined>(undefined);

export function SoundProvider({ children }: { children: React.ReactNode }) {
  const [isSoundEnabled, setIsSoundEnabled] = useState(true);

  const playSound = (type: 'toggle-on' | 'toggle-off' | 'hover' | 'click' | 'nav') => {
    if (!isSoundEnabled && type !== 'toggle-on') return;

    const sounds = {
      // Ascending, clean digital chime
      'toggle-on': 'https://assets.mixkit.co/active_storage/sfx/2567/2567-preview.mp3', 
      // Descending, soft muted tap
      'toggle-off': 'https://assets.mixkit.co/active_storage/sfx/2574/2574-preview.mp3',
      // Ultra-short micro-tick (very high frequency)
      'hover': 'https://assets.mixkit.co/active_storage/sfx/2573/2573-preview.mp3',
      // Deep, woody confirmation knock
      'click': 'https://assets.mixkit.co/active_storage/sfx/2570/2570-preview.mp3',
      // Soft, organic 'pluck' sound for navigation
      'nav': 'https://assets.mixkit.co/active_storage/sfx/2569/2569-preview.mp3'
    };

    const audio = new Audio(sounds[type]);
    audio.volume = type === 'hover' || type === 'nav' ? 0.08 : 0.2;
    audio.play().catch(() => {});
  };

  const toggleSound = () => {
    if (!isSoundEnabled) {
      setIsSoundEnabled(true);
      const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2567/2567-preview.mp3');
      audio.volume = 0.2;
      audio.play().catch(() => {});
    } else {
      const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2574/2574-preview.mp3');
      audio.volume = 0.2;
      audio.play().catch(() => {});
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
