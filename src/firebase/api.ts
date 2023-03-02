import {
  query,
  collection,
  getDocs,
  onSnapshot,
  orderBy,
  limit,
  startAfter
} from 'firebase/firestore';
import { db } from './config';

const COLLECTION_NAME = 'products';

export const getProducts = async (start: any, setLasVisible: any, productsLimit: number) => {
  const productsCollection = collection(db, COLLECTION_NAME);
  const q = start
    ? query(productsCollection, orderBy('id'), startAfter(start), limit(productsLimit))
    : query(productsCollection, orderBy('id'), limit(productsLimit));
  const productsSnapshot = await getDocs(q);
  const lastVisible = productsSnapshot.docs[productsSnapshot.docs.length - 1];
  setLasVisible(lastVisible);
  return productsSnapshot.docs.map(doc => doc.data());
};

export const onGetProducts = (callback: any) => {
  const snapshot = onSnapshot(collection(db, COLLECTION_NAME), callback);
  return snapshot;
};
