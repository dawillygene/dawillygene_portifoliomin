import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyAb8J3H7XHWEFtp4mYjr5aXCtWUV-8lmoU',
  authDomain: 'leotap-prod.firebaseapp.com',
  databaseURL: 'https://leotap-prod-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'leotap-prod',
  storageBucket: 'leotap-prod.firebasestorage.app',
  messagingSenderId: '1095141729718',
  appId: '1:1095141729718:android:31310432bde80acf0e8d17',
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
