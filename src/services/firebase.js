// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNjfMiAO1Cg2U5qp6sAOeMmzTmAyRVGHA",
  authDomain: "docai-21eb9.firebaseapp.com",
  projectId: "docai-21eb9",
  storageBucket: "docai-21eb9.appspot.com",
  messagingSenderId: "547513521981",
  appId: "1:547513521981:web:7e5c723228acedf5e45754",
  measurementId: "G-2D6E382PEW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);