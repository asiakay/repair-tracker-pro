// require('dotenv').config();
import { initializeApp } from "firebase/app";
import "firebase/auth";
import firebase from "firebase/app";
// Import the functions you need from the SDKs you need
// import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signOut, createUserWithEmailAndPassword } from "firebase/auth";
 
 // import { getAuth } from "firebase/auth";
 import { getFirestore, Timestamp } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);

/* if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} */

// Initialize Firebase
 const auth = getAuth(app);

// Initialize Firebase Authentication and get a reference to the service
 const db = getFirestore(app);

const googleProvider = new GoogleAuthProvider();

export {
  auth,
    db,
    firebase,
    getFirestore,
    getAuth,
    googleProvider,
    GoogleAuthProvider,
    signOut,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithPopup,
    Timestamp
};

