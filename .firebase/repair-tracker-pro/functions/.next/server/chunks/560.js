"use strict";
exports.id = 560;
exports.ids = [560];
exports.modules = {

/***/ 2560:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I8": () => (/* binding */ auth),
/* harmony export */   "ad": () => (/* reexport safe */ firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getFirestore),
/* harmony export */   "db": () => (/* binding */ db)
/* harmony export */ });
/* unused harmony exports app, googleProvider, analytics */
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3745);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(401);
/* harmony import */ var firebase_analytics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9500);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1492);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_analytics__WEBPACK_IMPORTED_MODULE_2__, firebase_firestore__WEBPACK_IMPORTED_MODULE_3__]);
([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_analytics__WEBPACK_IMPORTED_MODULE_2__, firebase_firestore__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


// import firebase from "firebase/app";

// Import the functions you need from the SDKs you need

// import { getAuth, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signOut, createUserWithEmailAndPassword } from "firebase/auth";
// import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBJw0zmuVPg9FD_be9kv8pnKZQZ2u4ueYk",
    authDomain: "repair-tracker-pro.firebaseapp.com",
    databaseURL: "https://repair-tracker-pro-default-rtdb.firebaseio.com",
    projectId: "repair-tracker-pro",
    storageBucket: "repair-tracker-pro.appspot.com",
    messagingSenderId: "198534675256",
    appId: "1:198534675256:web:fe6e2cfcb9734ebe4a9fcd",
    measurementId: "G-Z9ZB4FEQ3N"
};
// const app = initializeApp(firebaseConfig);
let app;
let db;
let analytics;
let googleProvider;
let auth;
if (false) {}
/* if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} */ // Initialize Firebase
//
// Initialize Firebase Authentication and get a reference to the service
// db = getFirestore(app);


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;