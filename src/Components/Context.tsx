import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  Auth,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  UserCredential,
} from "firebase/auth";
import { auth } from "../firebase";

interface contextProps extends React.HTMLAttributes<Element> {
  children: React.ReactElement | null;
}

interface IuserContext {
  createUser: (
    auth: Auth,
    email: string,
    pass: string
  ) => Promise<UserCredential>;
  loginUser: (email: string, pass: string) => Promise<UserCredential>;
}

const UserContext = createContext<IuserContext>({
  createUser: (auth: Auth, email: string, pass: string) => {
    return createUserWithEmailAndPassword(auth, email, pass);
  },
  loginUser: (email: string, pass: string) => {
    return signInWithEmailAndPassword(auth, email, pass);
  },
});

export const UserAuth = ({ children }: contextProps) => {
  const createUser = (auth: Auth, email: string, pass: string) => {
    return createUserWithEmailAndPassword(auth, email, pass);
  };
  const loginUser = (email: string, pass: string) => {
    return signInWithEmailAndPassword(auth, email, pass);
  };

  return (
    <UserContext.Provider value={{ createUser, loginUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const UseUserContext = () => {
  return useContext(UserContext);
};
