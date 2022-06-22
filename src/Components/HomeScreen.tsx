import React from "react";
import styles from "./Home.module.scss";

const HomeScreen: React.FC = () => {
  return (
    <div className={styles.container}>
      <div></div>
      <img src="img/homepage-bg-img.png" />
      <h1>
        Find the recipe for <span>you</span>
      </h1>
      <button className="sign-in-btn">Sign in</button>
      <button className="sign-up-btn">Sign up</button>
    </div>
  );
};

export default HomeScreen;
