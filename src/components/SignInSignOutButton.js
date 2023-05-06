import React, { useEffect, useState } from "react";
import {  GoogleAuthProvider } from "firebase/auth";
import { signInWithPopup, signOut } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db, googleAuthProvider } from "../lib/firebaseClient";
import { useRouter } from "next/router";
import { addUserToFirestore } from "../lib/userUtils";
import { getDoc, doc } from "firebase/firestore";
import { FaGoogle } from "react-icons/fa";


export default function SignInOutButton() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const router = useRouter();

  const handleUserLogin = async (user) => {
    const userDoc = await db.collection("users").doc(user.uid).get();
    if (!userDoc.exists) {
      await addUserToFirestore(user);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try { // Sign in with Google
      const provider = new GoogleAuthProvider(); // Set provider to Google
      provider.setCustomParameters({ prompt: "select_account" }); // Always prompt user to select account
      const result = // Sign in user
      await signInWithPopup( // 
        auth, // the auth object from firebase
        provider // google auth provider
        ); // this function returns a promise, so we need to use await to wait for the promise to resolve
      const { user } = result; // Get user from result
      if (user) { // If user exists
        await handleUserLogin(user); // return user
        router.push("/status"); // Redirect to home page
      }
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    // Listen for auth state changes
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    // Unsubscribe to the listener when unmounting
    return () => unsubscribe();
  }, []);

useEffect(() => {
  if (user) {
    router.push("/"); // Redirect to home page
  }
}, [user, router]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {user ? (
        <>
          <button onClick={handleLogout}> <FaGoogle /> Sign Out</button>
        </>
      ) : (
        <button onClick={handleLogin}>
          <FaGoogle /> Sign In</button>
      )}
    </>
  );
}
