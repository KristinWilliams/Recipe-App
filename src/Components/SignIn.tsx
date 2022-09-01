import React, { useRef, useState } from "react";
import styles from "./scss/SignUp.module.scss";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { UseUserContext } from "./Context";
import { UserAuth } from "./Context";
import { auth } from "../firebase";

const SignIn = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const { loginUser } = UseUserContext();
  const { setDisplayName } = UseUserContext();
  const signInOnClick = async (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    if (emailRef.current && passRef.current) {
      const email = emailRef.current.value;
      const pass = passRef.current.value;
      try {
        await loginUser(email, pass)
          .then((u) => {
            if (setDisplayName) {
              const username = u.user.displayName;
              setDisplayName(username);
            }
          })
          .then((u) => {
            navigate("/dashboard");
          });
      } catch (error) {
        if (error instanceof Error) {
          alert("invalid Email or Password");
        }
      }
    }
  };

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
        <NavLink to="/sign-up" className={styles["nav-link"]}>
          <p>Not a member? Sign up</p>
        </NavLink>
      </div>
    </div>
  );
};

export default SignIn;
