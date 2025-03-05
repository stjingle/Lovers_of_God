import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAXFtBGPk2TNVhbC6NN3h3pqKhFCu8S1NE",
  authDomain: "lovers-of-god-73173.firebaseapp.com",
  projectId: "lovers-of-god-73173",
  storageBucket: "lovers-of-god-73173.firebasestorage.app",
  messagingSenderId: "889981218073",
  appId: "1:889981218073:web:2e38f29a0a952180ede988",
  measurementId: "G-63ZL9YR712",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
