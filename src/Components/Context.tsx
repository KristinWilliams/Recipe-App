import React, {
  createContext,
  ReactNode,
  useCallback,
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
  children: React.ReactElement | null;
}

interface IuserContext {
  createUser: (email: string, pass: string) => Promise<UserCredential>;
}

const UserContext = createContext<IuserContext>({
  createUser: (email: string, pass: string) => {
    return createUserWithEmailAndPassword(auth, email, pass);
  },
});

export const UserAuth = ({ children }: contextProps) => {
  const createUser = (email: string, pass: string) => {
    return createUserWithEmailAndPassword(auth, email, pass);
  };

  return (
    <UserContext.Provider value={{ createUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const UseUserContext = () => {
  return useContext(UserContext);
};
