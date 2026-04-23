import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB3xyliZiVZN9P-jdZ9A6b3uLaJK5-42ZY",
  authDomain: "portfolio-gab-cbaae.firebaseapp.com",
  projectId: "portfolio-gab-cbaae",
  storageBucket: "portfolio-gab-cbaae.firebasestorage.app",
  messagingSenderId: "968862481523",
  appId: "1:968862481523:web:491bdb17f54e0183e8be06",
  measurementId: "G-L6BCMQCBJ0"
};

// Initialize Firebase
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

// Initialize Analytics conditionally (only in browser and if supported)
let analytics = null;
if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}

export { app, analytics, db };
