
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

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


const db = firebase.firestore();

module.exports = db;