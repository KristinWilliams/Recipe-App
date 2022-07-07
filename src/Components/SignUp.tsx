import React, { useRef, useContext } from "react";
import styles from "./scss/SignUp.module.scss";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "./Context";

const SignUp = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const { createAccount } = useUserContext();

  const signUpOnClick = async (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    if (emailRef.current && passRef.current) {
      const email = emailRef.current.value;
      const pass = passRef.current.value;
      try {
        await createAccount(email, pass);
        navigate("/dashboard");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className={styles.container}>
      <img src="img/signup-bg.png" />
      <div className={styles["form-container"]}>
        <h1>Sign Up Today!</h1>
        <form action="" className={styles["sign-up"]}>
          {/* <input type="text" placeholder="Name" required /> */}
          <input type="email" ref={emailRef} placeholder="Email" required />
          <input
            type="password"
            ref={passRef}
            placeholder="Password"
            required
          />
          {/* <input type="password" placeholder="Confirm Password" required /> */}
          <button type="submit" onClick={signUpOnClick}>
            Sign Up
          </button>
        </form>
        <p>Already a member? Sign in</p>
      </div>
    </div>
  );
};

export default SignUp;
