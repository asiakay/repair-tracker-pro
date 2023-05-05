import { useState } from "react";
import { auth, googleAuthProvider } from "../lib/firebaseClient"
import styles from "../styles/Login.module.css";
import SignInSignOutButton from "../components/SignInSignOutButton";
import { Button } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
        await auth.signInWithPopup(googleAuthProvider);
    } catch (error) {
        console.log(error);
    }
  };

  return (
    <>
      <h1>Login Page</h1>
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