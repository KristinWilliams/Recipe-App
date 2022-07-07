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
  children: React.ReactNode;
}

interface IuserContext {
  createUser: (email: string, pass: string) => Promise<UserCredential>;
}

export const userContext = createContext<IuserContext | null>(null);

export function userAuth({ children }: contextProps) {
  const createUser = (email: string, pass: string) => {
    return createUserWithEmailAndPassword(auth, email, pass);
  };

  return (
    <userContext.Provider value={{ createUser }}>
      {children}
    </userContext.Provider>
  );
}

export function useUserContext() {
  return useContext(userContext);
}
