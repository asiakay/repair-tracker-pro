import { onAuthStateChanged } from "firebase/auth";
import { handleAuthenticatedUser, handleUnauthenticatedUser } from "./auth";

export function initFirebaseAuth() {
    onAuthStateChanged(auth, user => {
        if (user) {
            handleAuthenticatedUser(user);
        } else {
            handleUnauthenticatedUser();
        }
    });
}