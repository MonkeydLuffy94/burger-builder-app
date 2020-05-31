import React from "react";
import styles from "./BuildControl.css";

const BuildControl = ({
  label,
  handleAddIngredient,
  removeIngredientHandler,
  ingredientCount,
}) => (
  <div className={styles.BuildControl}>
    <div className={styles.Label}>{label}</div>
    <button
      className={styles.Less}
      onClick={removeIngredientHandler}
      disabled={ingredientCount === 0}
    >
      <i className="fas fa-minus"></i>
    </button>
    <button
      className={styles.More}
      onClick={handleAddIngredient}
      disabled={ingredientCount === 2}
    >
      <i className="fas fa-plus"></i>
    </button>
  </div>
);

export default BuildControl;
