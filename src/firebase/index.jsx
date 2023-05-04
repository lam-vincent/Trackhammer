import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCJKcmZ5fygPbaVqqWMfslhMnl6kZqkAn4",
  authDomain: "trackhammer-935cc.firebaseapp.com",
  databaseURL:
    "https://trackhammer-935cc-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "trackhammer-935cc",
  storageBucket: "trackhammer-935cc.appspot.com",
  messagingSenderId: "945019616656",
  appId: "1:945019616656:web:ff4d507c21eaa0ff610715",
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
