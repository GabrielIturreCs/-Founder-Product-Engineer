import { isSupported, getAnalytics } from 'firebase/analytics';
import { app } from './firebase';

export async function initAnalytics() {
  if (typeof window === 'undefined' || !(await isSupported())) return null;
  return getAnalytics(app);
}
