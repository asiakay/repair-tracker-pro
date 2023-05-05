import React, { useEffect, useState } from "react";
import {  GoogleAuthProvider } from "firebase/auth";
import { signInWithPopup, signOut } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../lib/firebaseClient";
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
    try {
      const provider = new GoogleAuthProvider();
      provider.setCustomParameters({ prompt: "select_account" });
      const result = await signInWithPopup(auth, provider);
      const { user } = result;
      if (user) {
        await handleUserLogin(user);
        router.push("/");
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
