import React, { useState, useEffect, useRef } from "react";
import styles from "./scss/Dashboard.module.scss";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { UseUserContext } from "./Context";
import { auth } from "../firebase";
import { UserAuth } from "./Context";
import ScrollBar from "./ScrollBar";
import Filters from "./Filters";
import RecipePage from "./RecipePage";
import { ObjectEncodingOptions } from "fs";

interface Recipe {
  recipe: {
    label: string;
    src: HTMLImageElement;
    image: string;
    calories: number;
    yield: number;
    url: string;
    totalNutrients: {
      FAT: {
        quantity: number;
      };
      CHOCDF: {
        quantity: number;
      };
      PROCNT: {
        quantity: number;
      };
    };
    healthLabels: [string];
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
  const [currPage, setCurrPage] = useState<string>("home");
  const [currTitle, setCurrTitle] = useState<string>("title");
  const [currImg, setCurrImg] = useState<string>("img");
  const [currCal, setCurrCal] = useState<number>(0);
  const [currServ, setCurrServ] = useState<number>(0);
  const [currUrl, setCurrUrl] = useState<string>("url");
  const [activeBtn, setActiveBtn] = useState<string>("main-course");
  const [currFat, setCurrFat] = useState<number>(0);
  const [currCarbs, setCurrCarbs] = useState<number>(0);
  const [currProtein, setCurrProtein] = useState<number>(0);
  const [currDietType, setCurrDietType] = useState<Array<string>>([
    "diet type",
  ]);
  const [checkbox, setCheckbox] = useState<Array<any>>(["", ""]);
  const [recipes, setRecipes] = useState<Array<Recipe>>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const fetchRecipes = async (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    if (inputRef.current) {
      const inputValue = inputRef.current.value;
      console.log(checkbox);
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
      {currPage === "filter" ? (
        <Filters
          setStatus={setCurrPage}
          setCheckbox={setCheckbox}
          checkbox={checkbox}
        />
      ) : currPage === "home" ? (
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
              onClick={() => setCurrPage("filter")}
            />
          </div>
          <div className={styles["all-recipes"]}>
            {recipes.map((recipe) => (
              <div
                className={styles.recipe}
                onClick={() => {
                  setCurrPage("recipe");
                  setCurrTitle(recipe.recipe.label);
                  setCurrImg(recipe.recipe.image);
                  setCurrCal(recipe.recipe.calories);
                  setCurrServ(recipe.recipe.yield);
                  setCurrUrl(recipe.recipe.url);
                  setCurrFat(recipe.recipe.totalNutrients.FAT.quantity);
                  setCurrCarbs(recipe.recipe.totalNutrients.CHOCDF.quantity);
                  setCurrProtein(recipe.recipe.totalNutrients.PROCNT.quantity);
                  setCurrDietType(recipe.recipe.healthLabels);
                }}
              >
                <div className={styles["img-container"]}>
                  <img src={recipe.recipe.image} />
                </div>
                <h4>{recipe.recipe.label}</h4>
              </div>
            ))}
          </div>
        </div>
      ) : currPage === "recipe" ? (
        <RecipePage
          setStatus={setCurrPage}
          title={currTitle}
          img={currImg}
          calories={currCal}
          servings={currServ}
          url={currUrl}
          carbs={currCarbs}
          fat={currFat}
          protein={currProtein}
          dietType={currDietType}
        />
      ) : null}
    </>
  );
};

export default Dashboard;
