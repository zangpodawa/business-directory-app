// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBOhWxw4GtICYEajAOKxRavWUalAdLAoM",
  authDomain: "business-directory-cf2d5.firebaseapp.com",
  projectId: "business-directory-cf2d5",
  storageBucket: "business-directory-cf2d5.appspot.com",
  messagingSenderId: "893323368009",
  appId: "1:893323368009:web:40b227e9b03bac87a79198",
  measurementId: "G-QJ855J2L8D",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
