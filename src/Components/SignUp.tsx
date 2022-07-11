import React, { useRef } from "react";
import styles from "./scss/SignUp.module.scss";
// import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { UseUserContext } from "./Context";
import { getDatabase, ref, set } from "firebase/database";
import { auth } from "../firebase";

const SignUp = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const { createUser } = UseUserContext();
  const database = getDatabase();

  const createUsername = (
    userId: string,
    name: React.RefObject<HTMLInputElement>
  ) => {
    if (name.current) {
      set(ref(database, "users/" + userId), {
        username: name.current.value,
      });
    }
  };

  const signUpOnClick = async (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    if (emailRef.current && passRef.current) {
      const email = emailRef.current.value;
      const pass = passRef.current.value;
      try {
        const user = await createUser(auth, email, pass);
        createUsername(user.user.uid, nameRef);
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
          <input type="text" ref={nameRef} placeholder="Name" required />
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
