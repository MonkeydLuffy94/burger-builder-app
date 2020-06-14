import React from "react";
import BuildControl from "./BuildControl/BuildControl";
import styles from "./BuildControls.css";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

const BuildControls = ({
  handleAddIngredient,
  removeIngredientHandler,
  ingredients,
  price,
  purchasable,
  handleOrderSummaryModal,
  isOpenSideDrawer,
}) => (
  <div
    className={`${styles.BuildControls} ${
      isOpenSideDrawer ? styles.ControlWithSidebarOpened : ""
    }`}
  >
    <p>Total price: {price}</p>
    {controls.map((controlItem) => (
      <BuildControl
        key={controlItem.label}
        label={controlItem.label}
        handleAddIngredient={() => handleAddIngredient(controlItem.type)}
        removeIngredientHandler={() =>
          removeIngredientHandler(controlItem.type)
        }
        ingredientCount={ingredients[controlItem.type]}
      />
    ))}
    <button
      className={styles.OrderButton}
      disabled={!purchasable}
      onClick={handleOrderSummaryModal}
    >
      <i className="fab fa-opencart" />
      Order
    </button>
  </div>
);

export default BuildControls;
