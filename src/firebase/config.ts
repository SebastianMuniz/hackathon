import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCUWKGa8Beo0iNgCwnMxb6VPyjo3nYZLc8",
  authDomain: "hackaton-b98cb.firebaseapp.com",
  projectId: "hackaton-b98cb",
  storageBucket: "hackaton-b98cb.appspot.com",
  messagingSenderId: "599504579165",
  appId: "1:599504579165:web:e3fd34548d80c156e5bbb4",
  measurementId: "G-92B9BLDQXQ"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
