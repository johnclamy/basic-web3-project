export type FirebaseConfig = {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
};

const firebaseConfig: FirebaseConfig = {
  apiKey: import.meta.env.local.VITE_API_KEY,
  authDomain: import.meta.env.local.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.local.VITE_PROJECT_ID,
  storageBucket: import.meta.env.local.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.local.VITE_MESSAGEING_SENDER_ID,
  appId: import.meta.env.local.VITE_APP_ID,
};

export default firebaseConfig;
