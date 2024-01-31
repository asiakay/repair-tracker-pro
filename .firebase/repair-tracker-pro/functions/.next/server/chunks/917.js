"use strict";
exports.id = 917;
exports.ids = [917];
exports.modules = {

/***/ 2917:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SignInOutButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(401);
/* harmony import */ var _lib_firebaseClient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2560);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_userUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8282);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1492);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_auth__WEBPACK_IMPORTED_MODULE_2__, _lib_firebaseClient__WEBPACK_IMPORTED_MODULE_3__, _lib_userUtils__WEBPACK_IMPORTED_MODULE_5__, firebase_firestore__WEBPACK_IMPORTED_MODULE_6__]);
([firebase_auth__WEBPACK_IMPORTED_MODULE_2__, _lib_firebaseClient__WEBPACK_IMPORTED_MODULE_3__, _lib_userUtils__WEBPACK_IMPORTED_MODULE_5__, firebase_firestore__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










function SignInOutButton() {
    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const handleUserLogin = async (user)=>{
        const userDoc = await _lib_firebaseClient__WEBPACK_IMPORTED_MODULE_3__.db.collection("users").doc(user.uid).get();
        if (!userDoc.exists) {
            await (0,_lib_userUtils__WEBPACK_IMPORTED_MODULE_5__/* .addUserToFirestore */ .$)(user);
        }
    };
    const handleLogin = async (e)=>{
        e.preventDefault();
        try {
            const provider = new firebase_auth__WEBPACK_IMPORTED_MODULE_2__.GoogleAuthProvider(); // Set provider to Google
            provider.setCustomParameters({
                prompt: "select_account"
            }); // Always prompt user to select account
            const result = await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.signInWithPopup)(_lib_firebaseClient__WEBPACK_IMPORTED_MODULE_3__/* .auth */ .I8, provider // google auth provider
            ); // this function returns a promise, so we need to use await to wait for the promise to resolve
            const { user  } = result; // Get user from result
            if (user) {
                await handleUserLogin(user); // return user
                router.push("/status"); // Redirect to home page
            }
        } catch (error) {
            setError(error.message);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        // Listen for auth state changes
        const unsubscribe = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.onAuthStateChanged)(_lib_firebaseClient__WEBPACK_IMPORTED_MODULE_3__/* .auth */ .I8, (user)=>{
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
        });
        // Unsubscribe to the listener when unmounting
        return ()=>unsubscribe();
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (user) {
            router.push("/"); // Redirect to home page
        }
    }, [
        user,
        router
    ]);
    const handleLogout = async ()=>{
        try {
            await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.signOut)(_lib_firebaseClient__WEBPACK_IMPORTED_MODULE_3__/* .auth */ .I8);
            setUser(null);
        } catch (error) {
            console.log(error);
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: user ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                onClick: handleLogout,
                children: [
                    " ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_7__.FaGoogle, {}),
                    " Sign Out"
                ]
            })
        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
            onClick: handleLogin,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_7__.FaGoogle, {}),
                " Sign In"
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8282:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ addUserToFirestore)
/* harmony export */ });
/* harmony import */ var _firebaseClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2560);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1492);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebaseClient__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__]);
([_firebaseClient__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


// import { useUser } from '@/hooks/useUser';
//import { auth } from './firebase';
// const userRef = doc(db, "users", user.uid);
const addUserToFirestore = async (user, name, email)=>{
    try {
        // const docSnap = await getDoc(userRef);
        //const userRef = doc(db, "users", user.uid);
        await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.setDoc)(firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc, (_firebaseClient__WEBPACK_IMPORTED_MODULE_0__.db, user.uid), {
            name: name,
            email: email
        });
        console.log("Adding user to Firestore:", user);
    } catch (error) {
        console.log("Error adding user to Firestore:", error + user);
    }
};
/*    const userRef = db.collection('users').doc(user.uid);
  const defaultRoles = {
    admin: false,
    florist: true,
    assistant: false
  }; */ /*   return userRef.set({
    email: user.email,
    roles: defaultRoles
  }, { merge: true });
};
 */ 

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;