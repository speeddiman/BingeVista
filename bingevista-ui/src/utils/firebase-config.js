import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDYlDJeD1n-qKDbraUcbsVB3e6mGQ2Nqtk",
  authDomain: "bingevista.firebaseapp.com",
  projectId: "bingevista",
  storageBucket: "bingevista.appspot.com",
  messagingSenderId: "482711776336",
  appId: "1:482711776336:web:9172ed8bd9c649491f3555"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
