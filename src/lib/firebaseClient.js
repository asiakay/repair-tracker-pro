import { initializeApp } from "firebase/app";
import "firebase/auth";
// import firebase from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// Import the functions you need from the SDKs you need
import { GoogleAuthProvider, getAuth, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup  
} from "firebase/auth";
// import { getAuth, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signOut, createUserWithEmailAndPassword } from "firebase/auth";
 
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



// const app = initializeApp(firebaseConfig);
let app;
let db;
let analytics;
let googleProvider;
let auth;

if (typeof window !== "undefined") {
  app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  db = getFirestore(app);
  analytics = getAnalytics(app);
  googleProvider = new GoogleAuthProvider();
}



/* if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} */

// Initialize Firebase
 //



 
// Initialize Firebase Authentication and get a reference to the service
// db = getFirestore(app);

export {
  app,
  auth,
    db,
    getFirestore,
    getAuth,
    googleProvider,
    GoogleAuthProvider,
    signOut,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithPopup,
    Timestamp,
    analytics
};

