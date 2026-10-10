'use client';

import { useEffect } from 'react';
import { analytics } from '@/lib/firebase';

export function FirebaseAnalytics() {
  useEffect(() => {
    // Just importing it triggers the initialization in src/lib/firebase.ts
    // which handles the browser check and isSupported check internally.
  }, []);

  return null;
}
