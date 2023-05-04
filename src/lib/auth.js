import { getAuth, onAuthStateChanged } from "firebase/auth";
import { handleAuthenticatedUser, handleUnauthenticatedUser } from "./auth"

export function initFirebaseAuth() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if (user) {
            handleAuthenticatedUser(user);
        } else {
            handleUnauthenticatedUser();
        }
    });
}