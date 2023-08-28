// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEL7ePhWwucHlhSl8m-2-0tfvk5KccUQ0",
  authDomain: "app-da-amanda.firebaseapp.com",
  projectId: "app-da-amanda",
  storageBucket: "app-da-amanda.appspot.com",
  messagingSenderId: "575655505725",
  appId: "1:575655505725:web:e407af9ea79cb2c8285f54"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const firebaseApp = initializeApp(firebaseConfig);