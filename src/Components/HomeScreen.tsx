import React from "react";
import styles from "./scss/HomeScreen.module.scss";
import { NavLink } from "react-router-dom";

const HomeScreen: React.FC = () => {
  console.log(process.env.REACT_APP_EDAMAM_API_KEY);
  return (
    <div className={styles.container}>
      <div className={styles["bg-circle"]}>
        <img className={styles["bg-img"]} src="img/chef-hat.svg" />
      </div>

      <h1>
        Find the recipe for <span>you</span>
      </h1>

      <div className={styles["auth-btns"]}>
        <button className={styles["sign-in-btn"]}>
          <NavLink to="/sign-in" className={styles["btn-link"]}>
            Sign in
          </NavLink>
        </button>
        <button className={styles["sign-up-btn"]}>
          <NavLink to="/sign-up" className={styles["btn-link"]}>
            Sign up
          </NavLink>
        </button>
      </div>
    </div>
  );
};

export default HomeScreen;
