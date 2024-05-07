// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmNt7hQImHlbQLy9F_Ahd3zGH-27mmm8E",
  authDomain: "sessfem-1c848.firebaseapp.com",
  databaseURL: "https://sessfem-1c848-default-rtdb.firebaseio.com",
  projectId: "sessfem-1c848",
  storageBucket: "sessfem-1c848.appspot.com",
  messagingSenderId: "186019588509",
  appId: "1:186019588509:web:7d77de95cae72dff41a774",
  measurementId: "G-X9LDGCCGGJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };
