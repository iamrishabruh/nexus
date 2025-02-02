// frontend/src/services/firebase.ts
import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import Constants from "expo-constants";

// Extract Firebase config from Expo's extra
const {
  firebaseApiKey,
  firebaseAuthDomain,
  firebaseProjectId,
  firebaseStorageBucket,
  firebaseMessagingSenderId,
  firebaseAppId,
} = Constants.manifest?.extra || {};

// Create your Firebase config object
const firebaseConfig = {
  apiKey: firebaseApiKey,
  authDomain: firebaseAuthDomain,
  projectId: firebaseProjectId,
  storageBucket: firebaseStorageBucket,
  messagingSenderId: firebaseMessagingSenderId,
  appId: firebaseAppId,
};

// Initialize Firebase only if it hasn't been initialized yet
if (!getApps().length) {
  initializeApp(firebaseConfig);
}

// Optionally export Firebase services (e.g., auth)
export const auth = getAuth();
