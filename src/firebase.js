// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCARQxYMwfbRIhB9NvhqfUuaqM3oCiTA3g",
  authDomain: "wedding-project-24561.firebaseapp.com",
  projectId: "wedding-project-24561",
  storageBucket: "wedding-project-24561.firebasestorage.app",
  messagingSenderId: "873670578072",
  appId: "1:873670578072:web:543dd9d7152f06d23225ed",
  measurementId: "G-JBJSKTPHFG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
