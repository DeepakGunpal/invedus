// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZhQ4KIjG7Bf3AgFCb01Ezk1b6pU4Deu8",
  authDomain: "invedus-5aaf1.firebaseapp.com",
  projectId: "invedus-5aaf1",
  storageBucket: "invedus-5aaf1.appspot.com",
  messagingSenderId: "953028809210",
  appId: "1:953028809210:web:69bf6018a06a91e3afd443",
  measurementId: "G-V9TLTJ7VLN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);