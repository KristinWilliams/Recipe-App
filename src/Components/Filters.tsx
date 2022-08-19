import React from "react";
import styles from "./scss/Filters.module.scss";

const Filters = ({
  setStatus,
}: {
  setStatus: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <div className={styles.container}>
      <nav>
        <img src="img/back-arrow.svg" onClick={() => setStatus("home")} />
        <h1>Filters</h1>
        <h5>Reset</h5>
      </nav>
      <div className={styles["filter-list"]}>
        <div className={styles.cuisine}>
          <header>
            <h3>Cuisine</h3>
          </header>

          <ul>
            <li>
              <input type="checkbox" id="african" name="african"></input>
              <label htmlFor="african">African</label>
            </li>
            <li>
              <input type="checkbox" id="american" name="american"></input>
              <label htmlFor="american">American</label>
            </li>
            <li>
              <input type="checkbox" id="british" name="british"></input>
              <label htmlFor="british">British</label>
            </li>
            <li>
              <input type="checkbox" id="chinese" name="chinese"></input>
              <label htmlFor="european">Chinese</label>
            </li>
            <li>
              <input type="checkbox" id="french" name="french"></input>
              <label htmlFor="french">French</label>
            </li>
            <li>
              <input type="checkbox" id="german" name="german"></input>
              <label htmlFor="german">German</label>
            </li>
            <li>
              <input type="checkbox" id="greek" name="greek"></input>
              <label htmlFor="greek">Greek</label>
            </li>
            <li>
              <input type="checkbox" id="japanese" name="japanese"></input>
              <label htmlFor="japanese">Japanese</label>
            </li>
            <li>
              <input type="checkbox" id="jewish" name="jewish"></input>
              <label htmlFor="jewish">Jewish</label>
            </li>
            <li>
              <input type="checkbox" id="korean" name="korean"></input>
              <label htmlFor="korean">Korean</label>
            </li>
            <li>
              <input
                type="checkbox"
                id="latin-american"
                name="latin-american"
              ></input>
              <label htmlFor="latin-american">Latin American</label>
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
              <input type="checkbox" id="thai" name="thai"></input>
              <label htmlFor="thai">Thai</label>
            </li>
          </ul>
        </div>

        <div className={styles.diet}>
          <header className={styles["diet-header"]}>
            <h3>Diet</h3>
          </header>
          <ul>
            <li>
              <input
                type="checkbox"
                id="gluten-free"
                name="gluten-free"
              ></input>
              <label htmlFor="gluten-free">Gluten Free</label>
            </li>
            <li>
              <input type="checkbox" id="ketogenic" name="ketogenic"></input>
              <label htmlFor="ketogenic">Ketogenic</label>
            </li>
            <li>
              <input type="checkbox" id="vegetarian" name="vegetarian"></input>
              <label htmlFor="vegetarian">Vegetarian</label>
            </li>
            <li>
              <input type="checkbox" id="vegan" name="vegan"></input>
              <label htmlFor="vegan">Vegan</label>
            </li>
            <li>
              <input
                type="checkbox"
                id="pescetarian"
                name="pescetarian"
              ></input>
              <label htmlFor="pescetarian">Pescetarian</label>
            </li>
            <li>
              <input type="checkbox" id="paleo" name="paleo"></input>
              <label htmlFor="paleo">Paleo</label>
            </li>
            <li>
              <input type="checkbox" id="low-fodmap" name="low-fodmap"></input>
              <label htmlFor="low-fodmap">Low FODMAP</label>
            </li>
            <li>
              <input type="checkbox" id="whole30" name="whole30"></input>
              <label htmlFor="whole30">Whole30</label>
            </li>
          </ul>
        </div>

        <div className={styles.intolerances}>
          <header className={styles["int-header"]}>
            <h3>Intolerances</h3>
          </header>
          <ul>
            <li>
              <input type="checkbox" id="dairy" name="dairy"></input>
              <label htmlFor="dairy">Dairy</label>
            </li>
            <li>
              <input type="checkbox" id="egg" name="egg"></input>
              <label htmlFor="egg">Egg</label>
            </li>
            <li>
              <input type="checkbox" id="peanut" name="peanut"></input>
              <label htmlFor="peanut">Peanut</label>
            </li>
            <li>
              <input type="checkbox" id="seafood" name="seafood"></input>
              <label htmlFor="seafood">Seafood</label>
            </li>
            <li>
              <input type="checkbox" id="sesame" name="sesame"></input>
              <label htmlFor="sesame">Sesame</label>
            </li>
            <li>
              <input type="checkbox" id="shellfish" name="shellfish"></input>
              <label htmlFor="shellfish">Shellfish</label>
            </li>
            <li>
              <input type="checkbox" id="soy" name="soy"></input>
              <label htmlFor="soy">Soy</label>
            </li>
            <li>
              <input type="checkbox" id="tree-nut" name="tree-nut"></input>
              <label htmlFor="tree-nut">Tree Nut</label>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Filters;
