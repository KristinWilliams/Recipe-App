import React from "react";
import styles from "./scss/HomeScreen.module.scss";

const HomeScreen: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles["bg-circle"]}>
        <img className={styles["bg-img"]} src="img/chef-hat.svg" />
      </div>

      <h1>
        Find the recipe for <span>you</span>
      </h1>
      <div className={styles["auth-btns"]}>
        <button className={styles["sign-in-btn"]}>Sign in</button>
        <button className={styles["sign-up-btn"]}>Sign up</button>
      </div>
    </div>
  );
};

export default HomeScreen;
