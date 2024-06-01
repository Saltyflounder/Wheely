// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { database } from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDE4-_Cjjr3M1NwH8ylBeoYG0elilisBho",
  authDomain: "wheely-5af2e.firebaseapp.com",
  databaseURL: "https://wheely-5af2e-default-rtdb.firebaseio.com",
  projectId: "wheely-5af2e",
  storageBucket: "wheely-5af2e.appspot.com",
  messagingSenderId: "252861264620",
  appId: "1:252861264620:web:95c600869df0ff97ba2bc9",
  measurementId: "G-SRHJ0JLJ9V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);