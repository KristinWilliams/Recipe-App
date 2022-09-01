import React, { useEffect } from "react";
import styles from "./scss/Filters.module.scss";

const Filters = ({
  setStatus,
  setCheckbox,
  checkbox,
}: {
  setStatus: React.Dispatch<React.SetStateAction<string>>;
  setCheckbox: React.Dispatch<React.SetStateAction<Array<any>>>;
  checkbox: Array<any>;
}) => {
  const intolerances = [
    {
      id: "alcohol-free",
      name: "Alcohol-free",
    },
    {
      id: "dairy-free",
      name: "Dairy-free",
    },
    {
      id: "egg-free",
      name: "Egg-free",
    },
    {
      id: "fish-free",
      name: "Fish-free",
    },
    {
      id: "fodmap-free",
      name: "FODMAP-free",
    },
    {
      id: "gluten-free",
      name: "Gluten-free",
    },
    {
      id: "keto-friendly",
      name: "Keto",
    },
    {
      id: "low-sugar",
      name: "Low-Sugar",
    },
    {
      id: "soy-free",
      name: "Soy-Free",
    },
    {
      id: "tree-nut-free",
      name: "Tree-Nut-Free",
    },
    {
      id: "vegan",
      name: "Vegan",
    },
    {
      id: "vegetarian",
      name: "Vegetarian",
    },
  ];
  let checkArr = checkbox;
  const onCheckChange = (e: React.ChangeEvent<any>) => {
    const value = e.target.id;
    if (e.target.checked) {
      checkArr.push(value);
      localStorage.setItem("filterArr", JSON.stringify(checkArr));
      let storage = localStorage.getItem("filterArr");
      if (storage) {
        setCheckbox(JSON.parse(storage));
      }
    } else if (!e.target.checked) {
      checkArr.splice(checkArr.indexOf(value), 1);
      localStorage.setItem("filterArr", JSON.stringify(checkArr));
      let storage = localStorage.getItem("filterArr");
      if (storage) {
        setCheckbox(JSON.parse(storage));
      }
    }
  };
  return (
    <div className={styles.container}>
      <nav>
        <img src="img/back-arrow.svg" onClick={() => setStatus("home")} />
        <h1>Filters</h1>
        <div></div>
      </nav>
      <div className={styles["filter-list"]}>
        <div className={styles.intolerances}>
          <header className={styles["int-header"]}>
            <h3>Intolerances</h3>
          </header>
          <ul>
            {intolerances.map((o, i) => {
              return (
                <li key={i}>
                  <input
                    type="checkbox"
                    id={o.id}
                    value={o.id}
                    onChange={onCheckChange}
                    checked={checkbox.includes(o.id) ? true : false}
                  ></input>
                  <label htmlFor={o.id}>{o.name}</label>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Filters;
