import { initializeApp } from "firebase/app";
import { getFirestore } from 'firestore/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyDyfx69WWD83MMx5kdE7YuP248JJzDqhxY",
  authDomain: "rento-faf52.firebaseapp.com",
  projectId: "rento-faf52",
  storageBucket: "rento-faf52.appspot.com",
  messagingSenderId: "617005814468",
  appId: "1:617005814468:web:3398e9d3fef90df9f3af91"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()