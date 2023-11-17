/*
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB60cUOn39RrZmP670NXB8mDRlcvaEgr9Y",
  authDomain: "react-app1-698be.firebaseapp.com",
  databaseURL: "https://react-app1-698be-default-rtdb.firebaseio.com",
  projectId: "react-app1-698be",
  storageBucket: "react-app1-698be.appspot.com",
  messagingSenderId: "665015838062",
  appId: "1:665015838062:web:b007cfa93ba7c9a638cd7f",
  measurementId: "G-8YMZQGKF4Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const storage = getStorage(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
*/