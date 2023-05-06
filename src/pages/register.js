import { useState } from "react";
import { auth /* googleAuthProvider, createUserWithEmailAndPassword */ } from "../lib/firebaseClient"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { addUserToFirestore } from "@/lib/userUtils";
import { Form, Button } from 'react-bootstrap';
import styles from "../styles/Registration.module.css";
import SignInSignOutButton from "../components/SignInSignOutButton";

const RegistrationPage = () => {
  const [name, setName] = useState(""); // [state, setState
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleGoogleSignUp = async () => {
    try {
      await auth.signInWithPopup(googleAuthProvider);
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
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(
        auth, 
        email, 
        password
        );

        // add user to firestore
        await addUserToFirestore(userCredential.user, name, email);
    } catch (error) {
      console.error(error);
      setErrorMessage(error.message);
    }
  };

  return (
    <>
      <h1>Registration Page</h1>
        <div className={styles.registration}>
        <Form onSubmit={handleRegistration}>
        <Form.Group controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="name"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicConfirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Form.Group>
<Form.Group>
          <Button variant="primary" type="submit">
            Register
          </Button>
          </Form.Group>
          <Form.Group>
          <SignInSignOutButton />
</Form.Group>
        </Form>
        </div>
        <div className={styles.googleSignUp}>
          <label htmlFor="signupwithgoogle">Sign up with Google</label>
    
{/*       {errorMessage && <p>{errorMessage}</p>}
 */}    </div>
    </>
  );
};

export default RegistrationPage;
