import {
  collection,
  getDocs,
} from 'firebase/firestore';
import { db } from './config';

const COLLECTION_NAME = 'products';

export const getProducts = async () => {
  const productsCol = collection(db, COLLECTION_NAME);
  const productsSnapshot = await getDocs(productsCol);
  return productsSnapshot.docs.map(doc => doc.data());
};

