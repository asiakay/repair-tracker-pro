import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { firebaseClient } from "../lib/firebaseClient";

function SignInOutButton() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const auth = getAuth(firebaseClient);
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        setUser(user);
      });
      return unsubscribe;
    }
  }, []);

  if (user) {
    return (
      <div>
        <p>Signed in as {user.email}</p>
        <button onClick={() => signOut(auth)}>Sign out</button>
      </div>
    );
  } else {
    return <button onClick={() => signIn(auth)}>Sign in</button>;
  }
}

export default SignInOutButton;
