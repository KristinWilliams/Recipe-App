import { useRef } from "react";
import styles from "./scss/SignUp.module.scss";

const SignUp = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmRef = useRef<HTMLInputElement>(null);
  return (
    <div className={styles.container}>
      <img src="img/signup-bg.png" />
      <div className={styles["form-container"]}>
        <h1>Sign Up Today!</h1>
        <form action="" method="post" className={styles["sign-up"]}>
          <input type="text" ref={nameRef} placeholder="Name" required />
          <input type="email" ref={emailRef} placeholder="Email" required />
          <input
            type="password"
            ref={passwordRef}
            placeholder="Password"
            required
          />
          <input
            type="password"
            ref={confirmRef}
            placeholder="Confirm Password"
            required
          />
          <button type="submit">Sign Up</button>
        </form>
        <p>Already a member? Sign in</p>
      </div>
    </div>
  );
};

export default SignUp;
