
import { getAuth } from "firebase/auth";


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2z2Ep7vhWIBDv5D3Pp4csYDPzuytuObE",
  authDomain: "creat-context-project.firebaseapp.com",
  projectId: "creat-context-project",
  storageBucket: "creat-context-project.firebasestorage.app",
  messagingSenderId: "955433853113",
  appId: "1:955433853113:web:7a2555f8f3b82091f1fb68"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
