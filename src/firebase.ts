import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  // apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  // authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  // projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  // storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  // appId: import.meta.env.VITE_FIREBASE_APP_ID,
  // apiKey: "AIzaSyACuekXsIwCoyTVgXW-bGiEuJ-1JNBHpTc",
  // authDomain: "sharkbase-df055.firebaseapp.com",
  // projectId: "sharkbase-df055",
  // storageBucket: "sharkbase-df055.firebasestorage.app",
  // messagingSenderId: "999579179271",
  // appId: "1:999579179271:web:bc870c2f206cce3566cda2",
  // measurementId: "G-9F9T5DWNS7",

  apiKey: "AIzaSyACuekXsIwCoyTVgXW-bGiEuJ-1JNBHpTc",
  authDomain: "sharkbase-df055.firebaseapp.com",
  projectId: "sharkbase-df055",
  storageBucket: "sharkbase-df055.appspot.com", // Fixed this line
  messagingSenderId: "999579179271",
  appId: "1:999579179271:web:bc870c2f206cce3566cda2",
  measurementId: "G-9F9T5DWNS7",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
