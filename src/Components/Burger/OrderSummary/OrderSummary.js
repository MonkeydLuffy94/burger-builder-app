import React from "react";
import styles from "./OrderSummary.css";
import Button from "../../UI/Button/Button";

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
      <p>
        Price: <strong>{`RS.${price}`}</strong>
      </p>
      <p>Continue to checkout?</p>
      <footer>
        <Button onClick={closeModal} type="Cancel">
          Cancel
        </Button>
        <Button type="Ok">Continue</Button>
      </footer>
    </div>
  );
};

export default OrderSummary;
