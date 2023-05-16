// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALVtpFeFzDvPRmAS_JBVYlfPDLWrWTgNw",
  authDomain: "react-fb-auth-27a30.firebaseapp.com",
  projectId: "react-fb-auth-27a30",
  storageBucket: "react-fb-auth-27a30.appspot.com",
  messagingSenderId: "382164186065",
  appId: "1:382164186065:web:cf5f10ac5615852b15a6f0",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
