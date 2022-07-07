import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  UserCredential,
} from "firebase/auth";
import { auth } from "../firebase";

interface contextProps extends React.HTMLAttributes<Element> {
  children: React.ReactNode;
}

const UserAuthContext = createContext<Function | string | null | Object>(null);

export function UserAuthProvider({ children }: contextProps) {
  const [currUser, setCurrUser] = useState<string | null>(null);

  const createAccount: Function = (email: string, pass: string) => {
    return createUserWithEmailAndPassword(auth, email, pass);
  };

  const login: Function = (email: string, pass: string) => {
    return signInWithEmailAndPassword(auth, email, pass);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrUser(user.email);
      }
    });
    return unsubscribe;
  }, []);

  const contextValue = {
    currUser,
    createAccount,
    login,
  };

  return (
    <UserAuthContext.Provider value={{ contextValue }}>
      {children}
    </UserAuthContext.Provider>
  );
}

export function useUserContext() {
  return useContext(UserAuthContext);
}
