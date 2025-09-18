import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// 1. Import getAuth
import { getAuth } from "firebase/auth";

// PASTE YOUR FIREBASE CONFIG KEYS HERE
// You can find them in your terminal screenshot
const firebaseConfig = {
  apiKey: "AIzaSy...",
  authDomain: "progress-tracker-ea7d8.firebaseapp.com",
  projectId: "progress-tracker-ea7d8",
  storageBucket: "progress-tracker-ea7d8.appspot.com",
  messagingSenderId: "786...",
  appId: "1:786...:web:..."
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// 2. Initialize and export auth
const auth = getAuth(app);

// This is the crucial line that makes your database available to other files
export { db, auth };