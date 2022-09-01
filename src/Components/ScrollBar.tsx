import React, { useState, useEffect } from "react";
import styles from "./scss/ScrollBar.module.scss";

const ScrollBar = ({
  setActiveBtn,
  activeBtn,
}: {
  setActiveBtn: React.Dispatch<React.SetStateAction<string>>;
  activeBtn: string;
}) => {
 
  const onCategoryClick = (e: React.MouseEvent<EventTarget>) => {
    switch ((e.target as Element).id) {
      case "main-course":
        setActiveBtn("main-course");
        break;
      case "side-dish":
        setActiveBtn("side-dish");
        break;
      case "dessert":
        setActiveBtn("dessert");
        break;
      case "breakfast":
        setActiveBtn("breakfast");
        break;
      case "appetizer":
        setActiveBtn("appetizer");
        break;
      case "drink":
        setActiveBtn("drink");
        break;
      default:
        setActiveBtn("main-course");
    }
  };

  interface Recipe {
    id: number;
    title: string;
    image: HTMLImageElement;
  }

  const [recipes, setRecipes] = useState<Array<Recipe>>([]);

  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${
        process.env.REACT_APP_SPOON_API_KEY
      }&type=${activeBtn.replace("-", " ")}`
    )
      .then((res) => res.json())
      .then((data) => setRecipes(data.results));
  }, [activeBtn]);

  return (
    <div className={styles.container}>
      <ul>
        <li
          className={activeBtn === "main-course" ? styles.active : ""}
          id="main-course"
          onClick={onCategoryClick}
        >
          Main
        </li>
        <li
          className={activeBtn === "side-dish" ? styles.active : ""}
          id="side-dish"
          onClick={onCategoryClick}
        >
          Sides
        </li>
        <li
          className={activeBtn === "dessert" ? styles.active : ""}
          id="dessert"
          onClick={onCategoryClick}
        >
          Desserts
        </li>
        <li
          className={activeBtn === "breakfast" ? styles.active : ""}
          id="breakfast"
          onClick={onCategoryClick}
        >
          Breakfast
        </li>
        <li
          className={activeBtn === "appetizer" ? styles.active : ""}
          id="appetizer"
          onClick={onCategoryClick}
        >
          Appetizers
        </li>
        <li
          className={activeBtn === "drink" ? styles.active : ""}
          id="drink"
          onClick={onCategoryClick}
        >
          Drinks
        </li>
      </ul>
      <div>
        {recipes.map((recipe) => (
          <div key={recipe.id}>
            <h1>{recipe.title}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollBar;
