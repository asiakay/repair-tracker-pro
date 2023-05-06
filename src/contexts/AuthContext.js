import { createContext } from "react"; // import { createContext, useContext } from "react";

const AuthContext = 
createContext({ user: null }); 

export default AuthContext; // export default function useAuth() {