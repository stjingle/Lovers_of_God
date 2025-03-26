// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDaOK35tRuGoRTeRRfYmkSmncjll1Uec3I",
  authDomain: "lovers-of-god-454917.firebaseapp.com",
  projectId: "lovers-of-god-454917",
  storageBucket: "lovers-of-god-454917.firebasestorage.app",
  messagingSenderId: "877626020015",
  appId: "1:877626020015:web:e93574fd5a860bbc84045a",
  measurementId: "G-H8ZJBYQXR7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

// Export authentication and Firestore
export { analytics, auth, db };
