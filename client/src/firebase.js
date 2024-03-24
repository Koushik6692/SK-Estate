// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "sk-estate-3fba7.firebaseapp.com",
  projectId: "sk-estate-3fba7",
  storageBucket: "sk-estate-3fba7.appspot.com",
  messagingSenderId: "658100619479",
  appId: "1:658100619479:web:d1184e79b7254fc3b80892",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
