import React from "react";
import classes from "./Burger.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const Burger = ({ ingredients, isOpenSideDrawer }) => {
  let transformedBurger = Object.keys(ingredients)
    .map((ingredientName) => {
      return [...Array(ingredients[ingredientName])].map((_, index) => {
        return (
          <BurgerIngredient
            key={ingredientName + index}
            type={ingredientName}
          />
        );
      });
    })
    .reduce((accumulator, currentIngredient) => {
      return accumulator.concat(currentIngredient);
    }, []);
  console.log(transformedBurger);
  if (transformedBurger.length === 0) {
    transformedBurger = <p>Please start adding ingredients</p>;
  }

  return (
    <div
      className={`${classes.Burger} ${
        isOpenSideDrawer ? classes.BurgerWithSidebar : ""
      }`}
    >
      <BurgerIngredient type="bread-top" />
      {transformedBurger}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
