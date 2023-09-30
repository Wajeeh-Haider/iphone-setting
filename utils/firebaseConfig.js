import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAQUa8xql3kEsHZ2o8cKhKXlvP4O4AP1Hs",
  authDomain: "app-final-82c91.firebaseapp.com",
  projectId: "app-final-82c91",
  storageBucket: "app-final-82c91.appspot.com",
  messagingSenderId: "1040311867954",
  appId: "1:1040311867954:web:a4ff790548a6fa2ec47a2b",
  databaseUrl: "https://app-final-82c91-default-rtdb.firebaseio.com/",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };
