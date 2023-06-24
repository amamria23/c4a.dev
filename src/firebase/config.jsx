// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRCL95hAhXGv05oPeTcMPs17vpVctD-98",
  authDomain: "courses-arab.firebaseapp.com",
  projectId: "courses-arab",
  storageBucket: "courses-arab.appspot.com",
  messagingSenderId: "395371281464",
  appId: "1:395371281464:web:02696e7c20d3db9ed87acd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);