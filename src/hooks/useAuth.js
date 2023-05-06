import { useContext } from 'react'; // useContext is a hook that allows us to use the context in a functional component
import AuthContext from '../contexts/AuthContext'; // AuthContext is the context object that was created in src/contexts/AuthContext.js

export const useAuth = () => { // create a custom hook called useAuth
    const auth = // create a variable called auth
    useContext(AuthContext); // set auth to the context object that was created in src/contexts/AuthContext.js
    if (!auth) { // if auth is null
        throw new Error("useAuth must be used within an AuthProvider"); // throw an error
    } // end if statement 
    return auth; // return the auth variable that includes the user context object
    }
