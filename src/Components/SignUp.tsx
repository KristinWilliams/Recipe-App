import React, { useRef } from "react";
import styles from "./scss/SignUp.module.scss";
// import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { UseUserContext } from "./Context";
import { auth } from "../firebase";

const SignUp = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passRef = useRef<HTMLInputElement>(null);
  const confirmPassRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const { createUser } = UseUserContext();

  const signUpOnClick = async (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    if (emailRef.current && passRef.current && confirmPassRef.current) {
      const email = emailRef.current.value;
      const pass = passRef.current.value;
      const confirmPass = confirmPassRef.current.value;
      if (pass === confirmPass) {
        try {
          const user = await createUser(auth, email, pass);
          console.log(pass, confirmPass);
          navigate("/dashboard");
        } catch (error) {
          console.log(error);
        }
      } else {
        alert("Passwords must match. ");
      }
    }
  };

  return (
    <div className={styles.container}>
      <img src="img/signup-bg.png" />
      <div className={styles["form-container"]}>
        <h1>Sign Up Today!</h1>
        <form action="" className={styles["sign-up"]}>
          <input type="email" ref={emailRef} placeholder="Email" required />
          <input
            type="password"
            ref={passRef}
            placeholder="Password"
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            ref={confirmPassRef}
            required
          />
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
