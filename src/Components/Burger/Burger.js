import React from "react";
import classes from "./Burger.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const Burger = ({ ingredients }) => {
  const transformedBurger = Object.keys(ingredients).map((ingredientName) => {
    return [...Array(ingredients[ingredientName])].map((_, index) => {
      return (
        <BurgerIngredient key={ingredientName + index} type={ingredientName} />
      );
    });
  });

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedBurger}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
