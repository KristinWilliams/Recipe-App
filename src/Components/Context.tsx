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
  displayName?: string | null;
  setDisplayName?: React.Dispatch<React.SetStateAction<string | null>>;
}

const UserContext = createContext<IuserContext>({
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
  const [displayName, setDisplayName] = useState<any>({ name: "loading" });

  const createUser = (auth: Auth, email: string, pass: string) => {
    return createUserWithEmailAndPassword(auth, email, pass);
  };
  const loginUser = (email: string, pass: string) => {
    return signInWithEmailAndPassword(auth, email, pass);
  };
  const signOutUser = () => {
    return signOut(auth);
  };

  // useEffect(() => {
  //   const auth = getAuth();
  //   const unsubscribe = onAuthStateChanged(auth, (u) => {
  //     if (u) {
  //       console.log(u);
  //       setCurrUser(u);
  //     } else {
  //       localStorage.removeItem("currUser");
  //       setCurrUser(null);
  //     }
  //   });
  //   return unsubscribe();
  // }, []);

  return (
    <UserContext.Provider
      value={{
        createUser,
        loginUser,
        signOutUser,
        displayName,
        setDisplayName,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const UseUserContext = () => {
  return useContext(UserContext);
};
