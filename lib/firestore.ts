import {
  collection,
  doc,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  setDoc,
  query,
  orderBy,
  where,
  serverTimestamp,
  Timestamp,
} from 'firebase/firestore';
import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from 'firebase/storage';
import { db, storage } from '@/lib/firebase';

// ── Generic helpers ──────────────────────────────────────────────

export async function getCollection<T>(col: string): Promise<T[]> {
  const snap = await getDocs(collection(db, col));
  return snap.docs.map((d) => ({ id: d.id, ...d.data() } as T));
}

export async function getDocument<T>(col: string, id: string): Promise<T | null> {
  const snap = await getDoc(doc(db, col, id));
  return snap.exists() ? ({ id: snap.id, ...snap.data() } as T) : null;
}

export async function addDocument(col: string, data: object) {
  return addDoc(collection(db, col), {
    ...data,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });
}

export async function updateDocument(col: string, id: string, data: object) {
  return updateDoc(doc(db, col, id), {
    ...data,
    updatedAt: serverTimestamp(),
  });
}

export async function deleteDocument(col: string, id: string) {
  return deleteDoc(doc(db, col, id));
}

export async function setDocument(col: string, id: string, data: object) {
  return setDoc(doc(db, col, id), {
    ...data,
    updatedAt: serverTimestamp(),
  }, { merge: true });
}

// ── Image upload ─────────────────────────────────────────────────

export async function uploadImage(file: File, path: string): Promise<string> {
  const storageRef = ref(storage, path);
  await uploadBytes(storageRef, file);
  return getDownloadURL(storageRef);
}

export async function deleteImage(path: string) {
  const storageRef = ref(storage, path);
  return deleteObject(storageRef);
}

// ── Collection names ─────────────────────────────────────────────

export const COLLECTIONS = {
  HERO: 'hero',
  ABOUT: 'about',
  SERVICES: 'services',
  PROJECTS: 'projects',
  EXPERIENCE: 'experience',
  TEAM: 'team',
  TESTIMONIALS: 'testimonials',
  CONTACT: 'contact',
  CONTACT_INQUIRIES: 'contact_inquiries',
  COMPANY: 'company',
  NAV: 'navigation',
} as const;
