// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCQ4f1_PxYphlEb0xbkjH6y9mj5kDoA2w4",
    authDomain: "documentai-440916.firebaseapp.com",
    projectId: "documentai-440916",
    storageBucket: "documentai-440916.firebasestorage.app",
    messagingSenderId: "812261833146",
    appId: "1:812261833146:web:f6f85c89d3980e757f0583",
    measurementId: "G-SPPB7WS1EE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);