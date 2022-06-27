import React from "react";
import styles from "./scss/SignUp.module.scss";

const SignUp = () => {
  return (
    <div className={styles.container}>
      <img src="img/signup-bg.png" />
      <div className={styles["form-container"]}>
        <h1>Sign Up Today!</h1>
        <form action="" method="post" className={styles["sign-up"]}>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <input type="password" placeholder="Confirm Password" required />
          <button type="submit">Sign Up</button>
        </form>
        <p>Already a member? Sign in</p>
      </div>
    </div>
  );
};

export default SignUp;
