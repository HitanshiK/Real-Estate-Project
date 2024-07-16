// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "estate-7082c.firebaseapp.com",
  projectId: "estate-7082c",
  storageBucket: "estate-7082c.appspot.com",
  messagingSenderId: "944317846473",
  appId: "1:944317846473:web:dac6d77f03052e603bce18"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);