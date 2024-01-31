import { useEffect, useState } from "react";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { useUser } from "@/hooks/useUser";
import { signInWithPopup } from "firebase/auth";

function SignInOutButton() {
  const user = useUser();

  function signIn() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(getAuth(), provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
      }
      )
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      }
      );
  }

  useEffect(() => {
    // Listen for auth state changes
    const unsubscribe = getAuth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    // Unsubscribe to the listener when unmounting
    return () => unsubscribe();
  }, []);

  return (
    <div>
      {user ? (
        <button onClick={signOutUser}>Sign Out</button>
      ) : (
        <button onClick={signIn}>Sign In</button>
      )}
    </div>
  );
}

export default SignInOutButton;
