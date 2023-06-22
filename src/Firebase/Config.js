// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUYy5eVU6HDelPF7hhtPYGz7MRR-SwOuI",
  authDomain: "invedus-40355.firebaseapp.com",
  projectId: "invedus-40355",
  storageBucket: "invedus-40355.appspot.com",
  messagingSenderId: "589761612492",
  appId: "1:589761612492:web:e448dad003e0f32ed79069",
  measurementId: "G-KH3K447PXK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);