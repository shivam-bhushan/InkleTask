import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnr7gApgUAkfgerAjcqjXbmBbIaGB2A9o",
  authDomain: "inkletask.firebaseapp.com",
  projectId: "inkletask",
  storageBucket: "inkletask.appspot.com",
  messagingSenderId: "547777042024",
  appId: "1:547777042024:web:ecba931915a2b8c0e44ddd"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_STORE = getFirestore(FIREBASE_APP);