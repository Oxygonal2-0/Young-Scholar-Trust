// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8MXgbPCBlmAgZaeMwlwXGAzNUwm8A328",
  authDomain: "youngscholar-e4fb2.firebaseapp.com",
  projectId: "youngscholar-e4fb2",
  storageBucket: "youngscholar-e4fb2.appspot.com",
  messagingSenderId: "761358032027",
  appId: "1:761358032027:web:b01f3092f8ead6dd53fa3e",
  measurementId: "G-04Y9C4LPLN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);