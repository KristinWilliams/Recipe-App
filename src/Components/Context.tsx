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
  signOut,
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
  signOutUser: (auth: Auth) => void;
  currUser?: any;
  setCurrUser?: React.Dispatch<React.SetStateAction<Object | null>>;
}

const UserContext = createContext<IuserContext>({
  currUser: { user: null },
  createUser: (auth: Auth, email: string, pass: string) => {
    return createUserWithEmailAndPassword(auth, email, pass);
  },
  loginUser: (email: string, pass: string) => {
    return signInWithEmailAndPassword(auth, email, pass);
  },
  signOutUser: (auth: Auth) => {
    return signOut(auth);
  },
});

export const UserAuth = ({ children }: contextProps) => {
  const [currUser, setCurrUser] = useState<Object | null | string>({
    user: auth.currentUser,
  });

  const createUser = (auth: Auth, email: string, pass: string) => {
    return createUserWithEmailAndPassword(auth, email, pass);
  };
  const loginUser = (email: string, pass: string) => {
    return signInWithEmailAndPassword(auth, email, pass);
  };
  const signOutUser = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      if (u) {
        setCurrUser(u);
      }
    });
    return unsubscribe();
  }, []);

  return (
    <UserContext.Provider
      value={{
        createUser,
        loginUser,
        signOutUser,
        currUser,
        setCurrUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const UseUserContext = () => {
  return useContext(UserContext);
};
