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
        <h5>Reset</h5>
      </nav>
      <div className={styles["filter-list"]}>
        {/* <div className={styles.cuisine}>
          <header>
            <h3>Cuisine</h3>
          </header>
          <ul>
            <li>
              <input type="checkbox" id="american" name="american"></input>
              <label htmlFor="american">American</label>
            </li>
            <li>
              <input type="checkbox" id="british" name="british"></input>
              <label htmlFor="british">British</label>
            </li>
            <li>
              <input type="checkbox" id="caribbean" name="caribbean"></input>
              <label htmlFor="caribbean">Caribbean</label>
            </li>
            <li>
              <input type="checkbox" id="chinese" name="chinese"></input>
              <label htmlFor="chinese">Chinese</label>
            </li>
            <li>
              <input type="checkbox" id="french" name="french"></input>
              <label htmlFor="french">French</label>
            </li>
            <li>
              <input type="checkbox" id="greek" name="greek"></input>
              <label htmlFor="greek">Greek</label>
            </li>
            <li>
              <input type="checkbox" id="indian" name="indian"></input>
              <label htmlFor="indian">Indian</label>
            </li>
            <li>
              <input type="checkbox" id="italian" name="italian"></input>
              <label htmlFor="italian">Italian</label>
            </li>
            <li>
              <input type="checkbox" id="japanese" name="japanese"></input>
              <label htmlFor="japanese">Japanese</label>
            </li>
            <li>
              <input type="checkbox" id="korean" name="korean"></input>
              <label htmlFor="korean">Korean</label>
            </li>
            <li>
              <input
                type="checkbox"
                id="mediterranean"
                name="mediterranean"
              ></input>
              <label htmlFor="mediterranean">Mediterranean</label>
            </li>
            <li>
              <input type="checkbox" id="mexican" name="mexican"></input>
              <label htmlFor="mexican">Mexican</label>
            </li>
          </ul>
        </div>

        <div className={styles.diet}>
          <header className={styles["diet-header"]}>
            <h3>Diet</h3>
          </header>
          <ul>
            <li>
              <input type="checkbox" id="high-fiber" name="high-fiber"></input>
              <label htmlFor="high-fiber">High Fiber</label>
            </li>
            <li>
              <input
                type="checkbox"
                id="high-protein"
                name="high-protein"
              ></input>
              <label htmlFor="high-protein">High Protein</label>
            </li>
            <li>
              <input type="checkbox" id="low-carb" name="low-carb"></input>
              <label htmlFor="low-carb">Low Carb</label>
            </li>
            <li>
              <input type="checkbox" id="low-fat" name="low-fat"></input>
              <label htmlFor="low-fat">Low Fat</label>
            </li>
            <li>
              <input type="checkbox" id="low-sodium" name="low-sodium"></input>
              <label htmlFor="low-sodium">Low Sodium</label>
            </li>
          </ul>
        </div> */}

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
