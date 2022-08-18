import React, { useState, useEffect, useRef } from "react";
import styles from "./scss/Dashboard.module.scss";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { UseUserContext } from "./Context";
import { auth } from "../firebase";
import { UserAuth } from "./Context";
import ScrollBar from "./ScrollBar";
import Filters from "./Filters";

interface Recipe {
  recipe: {
    label: string;
    src: HTMLImageElement;
    image: string;
  };
}

const Dashboard = () => {
  const navigate = useNavigate();
  const { currUser } = UseUserContext();
  const { signOutUser } = UseUserContext();
  const signOutOnClick = () => {
    signOutUser(auth);
    navigate("/");
  };
  const [filterStatus, setFilterStatus] = useState<boolean>(false);
  const [activeBtn, setActiveBtn] = useState<string>("main-course");
  const [recipes, setRecipes] = useState<Array<Recipe>>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const fetchRecipes = async (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    if (inputRef.current) {
      const inputValue = inputRef.current.value;
      try {
        await fetch(
          `https://api.edamam.com/api/recipes/v2?type=public&q=${inputValue}&app_id=0c93d6d2&app_key=%200ac3ff0f7a4f6eaa21563ac7613fc71d%09`
        )
          .then((res) => res.json())
          .then((data) => setRecipes(data.hits));
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      {filterStatus ? (
        <Filters setStatus={setFilterStatus} />
      ) : (
        <div className={styles.container}>
          <nav>
            <h3>Welcome Back</h3>
            <div className={styles["nav-icons"]}>
              <img src="img/bag-heart.svg" className={styles["likes-icon"]} />
              <img
                onClick={signOutOnClick}
                src="img/signout-icon.svg"
                className={styles["sign-out-btn"]}
              />
            </div>
          </nav>
          <div className={styles["search-filter"]}>
            <form onSubmit={fetchRecipes}>
              <input
                type="text"
                className={styles["search-input"]}
                placeholder="Find your recipe now"
                ref={inputRef}
              ></input>
              <button type="submit">
                <img
                  src="img/search-icon.svg"
                  className={styles["search-icon"]}
                />
              </button>
            </form>
            <img
              src="img/filter-icon.svg"
              className={styles["filter-icon"]}
              onClick={() => setFilterStatus(true)}
            />
          </div>
          <div className={styles["all-recipes"]}>
            {recipes.map((recipe) => (
              <NavLink
                to={{
                  pathname: "/sign-up",
                }}
              >
                <div className={styles.recipe}>
                  <div className={styles["img-container"]}>
                    <img src={recipe.recipe.image} />
                  </div>
                  <h4>{recipe.recipe.label}</h4>
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Dashboard;
