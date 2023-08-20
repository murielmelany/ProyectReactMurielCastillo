// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDr2qwbGrHYGgAsGdOSFGlTO3diBfOkk3w",
  authDomain: "todo-bolsos.firebaseapp.com",
  databaseURL: "https://todo-bolsos-default-rtdb.firebaseio.com",
  projectId: "todo-bolsos",
  storageBucket: "todo-bolsos.appspot.com",
  messagingSenderId: "242622866921",
  appId: "1:242622866921:web:89291c9fd90812e23f5778"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);