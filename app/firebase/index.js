// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"; 

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCxA-9nLYPs2Bgiwvc8u7z889kQ5je9m0",
  authDomain: "menshouse-barber.firebaseapp.com",
  projectId: "menshouse-barber",
  storageBucket: "menshouse-barber.appspot.com",
  messagingSenderId: "661546438408",
  appId: "1:661546438408:web:10c5a27ce53845154fa6bd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

export default app;