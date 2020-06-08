import React from "react";
import styles from "./OrderSummary.css";

const OrderSummary = ({ ingredients, price, closeModal }) => {
  const createOrderedList = () => {
    const orderList = [];
    for (const ingredient in ingredients) {
      const burgerIngredient = (
        <li key={ingredient}>{ingredient + ": " + ingredients[ingredient]}</li>
      );
      orderList.push(burgerIngredient);
    }
    return orderList;
  };

  return (
    <div className={styles.OrderSummary}>
      <header>A delicious burger with following ingredients</header>
      <ul>{createOrderedList()}</ul>
      <p>Price: {`RS.${price}`}</p>
      <p>Continue to checkout?</p>
      <footer>
        <button onClick={closeModal}>Cancel</button>
        <button>Continue</button>
      </footer>
    </div>
  );
};

export default OrderSummary;
