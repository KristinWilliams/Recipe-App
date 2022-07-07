import React, { useRef, useState, createContext, FC, ReactNode } from "react";
import styles from "./scss/SignUp.module.scss";
import { auth } from "../firebase";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const [currUser, setCurrUser] = useState<string | null>(null);

  const signInOnClick = async (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    if (emailRef.current && passRef.current) {
      const email = emailRef.current.value;
      const password = passRef.current.value;
      try {
        await signInWithEmailAndPassword(auth, email, password);
        navigate("/dashboard");
      } catch (error) {
        if (error instanceof Error) {
          alert("invalid Email or Password");
        }
      }
    }
  };

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setCurrUser(user.email);
    }
  });

  return (
    <div className={styles.container}>
      <img src="img/signup-bg.png" alt="background picture" />
      <div className={styles["form-container"]}>
        <h1>Welcome Back!</h1>
        <form action="" className={styles["sign-in"]}>
          <input type="email" ref={emailRef} placeholder="Email" required />
          <input
            type="password"
            ref={passRef}
            placeholder="Password"
            required
          />
          <button type="submit" onClick={signInOnClick}>
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
