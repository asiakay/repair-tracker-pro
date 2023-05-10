import { useState } from "react";
import { auth } from "../lib/firebaseClient";
import { signInWithEmailAndPassword } from "firebase/auth";
import styles from "../styles/Login.module.css";
import SignInSignOutButton from "../components/SignInSignOutButton";
import { Button } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useRouter } from "next/router";
//import { useAuth } from "@/hooks/useAuth";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

const router = useRouter();
//const { login } = useAuth();
  const handleLogin = async (e) => { // this is the function that will be called when the user clicks the login button
    e.preventDefault(); // prevent the default form submit behavior

    try { // try to create the user with the email and password
     await signInWithEmailAndPassword(auth, email, password); // this is a function from firebase that will create the user
        router.push("/"); // redirect to the home page
    } catch (error) { // if there was an error creating the user, we catch the error and update the error message in state
      setErrorMessage(error.message); // update the error message in state
    }
  };

  /* handled in SignInSignOutComponent */
/*   const handleGoogleLogin = async () => { // this is the function that will be called when the user clicks the login button
    try { // try to create the user with the email and password 
        await signInWithPopup( // this is a function from google that will create the user
            auth, // the auth object from firebase
            GoogleAuthProvider // google auth provider
            ); // this function returns a promise, so we need to use await to wait for the promise to resolve
    } catch (error) { // if there was an error creating the user, we catch the error and update the error message in state
        console.log(error); // update the error message in state
    }
  }; */

  return (
    <>
      <div className={styles.login}>
      <Form onSubmit={handleLogin}>
    {/*   <Form.Group controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter name"
          value={email}
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group> */}

      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
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

<Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      </Form.Group>
       <Form.Group>
                <SignInSignOutButton />

       </Form.Group>
       {errorMessage && <p className="error">{errorMessage}</p>}

    </Form>
        </div>
    </>
  );
};



export default LoginPage;


{/* 
      <Form>
        


        
        <Form.Group 
        as={Row} 
        controlId="formBasicEmail"
        className="mb-3"eê >
          <Form.Label
          column sm={2}>
            Email address
            </Form.Label>
             <Col sm={10}>
          
          <Form.Control 
            type="email" 
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
            </Col>
            </Form.Group>
            <Form.Group 
            as={Row} 
            className="mb-3" 
            controlId="password"
            >
            <Form.Label >
            Password
            </Form.Label>
            <Col sm={10}>
            <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            </Col>
            </Form.Group>
            <Form.Group>
        
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
        <Col sm={{ span: 10, offset: 2 }}>
          <Button type="submit">Sign in</Button>
        </Col>
      </Form.Group>

   
      </Form>
      <Row>
        <Col>
      <SignInSignOutButton />
        </Col>
        </Row>
      </div>
      {errorMessage && <p>{errorMessage}</p>}
    </>
  );
};

export default LoginPage;
 */}