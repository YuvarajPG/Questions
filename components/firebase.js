// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAG0XX7XxxUkCwazpgJ-Wf4LY5sYsC4GqI",
  authDomain: "question-adb6b.firebaseapp.com",
  projectId: "question-adb6b",
  storageBucket: "question-adb6b.firebasestorage.app",
  messagingSenderId: "1093405525416",
  appId: "1:1093405525416:web:8005ee6397365e08bf499d",
  measurementId: "G-VQLXC9JC2G",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export default app;