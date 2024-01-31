<<<<<<< HEAD
import { onAuthStateChanged } from "firebase/auth";
import { handleAuthenticatedUser, handleUnauthenticatedUser } from "./auth";

export function initFirebaseAuth() {
    onAuthStateChanged(auth, user => {
=======
/* import { getAuth, onAuthStateChanged } from "firebase/auth";
// import { handleAuthenticatedUser, handleUnauthenticatedUser } from "./auth"

export function initFirebaseAuth() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
>>>>>>> 18ef74f878b5400f344e8e8bc7e1a3063c886c2e
        if (user) {
            handleAuthenticatedUser(user);
        } else {
            handleUnauthenticatedUser();
        }
    });
<<<<<<< HEAD
}
=======
} */
>>>>>>> 18ef74f878b5400f344e8e8bc7e1a3063c886c2e
