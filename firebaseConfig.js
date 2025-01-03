import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Para Firestore
// import { getDatabase } from "firebase/database"; // Para Realtime Database

const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "SEU_AUTH_DOMAIN",
  projectId: "SEU_PROJECT_ID",
  storageBucket: "SEU_STORAGE_BUCKET",
  messagingSenderId: "SEU_MESSAGING_SENDER_ID",
  appId: "SEU_APP_ID",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // Para Firestore
// const db = getDatabase(app); // Para Realtime Database

export default db;
