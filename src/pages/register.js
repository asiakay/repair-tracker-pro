import { useState } from "react";
import { auth, googleAuthProvider, signInWithPopup } from "../lib/firebaseClient"

const RegistrationPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleGoogleSignUp = async () => {
    try {
      await signInWithPopup(auth, googleAuthProvider);
    } catch (error) {
      console.error(error);
      setErrorMessage(error.message);
    }
  };

  const handleRegistration = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }
    try {
      await auth.createUserWithEmailAndPassword(email, password);
    } catch (error) {
        console.error(error);
      setErrorMessage(error.message);
    }
  };

  return (
    <div>
      <h1>Registration Page</h1>
      <button onClick={handleGoogleSignUp}>Sign up with Google</button>
      <form onSubmit={handleRegistration}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="confirm-password">Confirm Password</label>
        <input
          type="password"
          id="confirm-password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button type="submit">Register</button>
      </form>
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

export default RegistrationPage;
