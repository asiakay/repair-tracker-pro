import React, { useState, useEffect, createContext } from "react";
import { getAuth, onAuthStateChanged, signOut, signIn } from "firebase/auth";
import firebaseClient from "../../src/lib/firebaseClient";

const AuthContext = createContext({ // create a context object
user: null, // the context object has a property called user, which is set to null by default
loading: true, // the context object has a property called loading, which is set to true by default
});

export const AuthProvider = ({ children }) => { // create a provider component

    const [user, setUser] = useState({ isAuthenticated: false }); // create a state variable called user, which is an object with a property called isAuthenticated, which is set to false by default
    //const [error, setError] = useState(null); // create a state variable called error, which is set to null by default
const [loading, setLoading] = useState(true); // create a state variable called loading, which is set to true by default

const login = async (email, password) => { // create a login function
      const auth = getAuth();
      await signIn(auth);
};
const logout = async () => { // create a logout function
      const auth = getAuth();
      await signOut(auth);
};

    useEffect(() => { // create a useEffect hook
      const auth = getAuth();
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user);
        } else {
          setUser(null);
        }
        setLoading(false);
      });

      return () => unsubscribe();
    }, []);

    return (
      <AuthContext.Provider value={{ user, loading, logout, login }}>
        {children}
      </AuthContext.Provider>
    );
  };

export default AuthContext;

