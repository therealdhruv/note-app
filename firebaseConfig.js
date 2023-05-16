// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Since we are going to use the Firestore Database, we need to import the Firestore functions as well.
import { getFirestore } from 'firebase/firestore';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDXFi8XXK5yQsMwxQEUyehswXCiOw1G84",
  authDomain: "note-app-c11d3.firebaseapp.com",
  projectId: "note-app-c11d3",
  storageBucket: "note-app-c11d3.appspot.com",
  messagingSenderId: "635871917838",
  appId: "1:635871917838:web:0ce179df3c44d448ab095f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);

