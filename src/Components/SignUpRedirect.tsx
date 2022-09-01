import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./scss/SignUp.module.scss";

const SignUpRedirect = () => {
  return (
    <div className={styles.redirect}>
      <h1 className={styles["redirect-header"]}>Sign Up Successful!</h1>
      <NavLink to="/sign-in" className={styles["redirect-link"]}>
        Click here to sign in
      </NavLink>
    </div>
  );
};

export default SignUpRedirect;
