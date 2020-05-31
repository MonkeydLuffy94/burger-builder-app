import React, { Component } from "react";
import Burger from "../Burger/Burger";
import BuildControls from "../BuildControls/BuildControls";

const INGREDIENT_PRICE = {
  salad: 15,
  bacon: 50,
  cheese: 25,
  meat: 50,
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 40,
  };

  addIngredientHandler = (type) => {
    const ingredients = { ...this.state.ingredients };
    const currentCount = ingredients[type];
    ingredients[type] = currentCount + 1;
    const currentPrice = this.state.totalPrice;
    const newPrice = currentPrice + INGREDIENT_PRICE[type];
    this.setState({ totalPrice: newPrice, ingredients: ingredients });
  };

  removeIngredientHandler = (type) => {
    const ingredients = { ...this.state.ingredients };
    const currentCount = ingredients[type];
    if (currentCount > 0) {
      ingredients[type] = currentCount - 1;
    }
    const currentPrice = this.state.totalPrice;
    const newPrice = currentPrice - INGREDIENT_PRICE[type];
    this.setState({ totalPrice: newPrice, ingredients: ingredients });
  };

  isPurchasable = () => {
    const ingredients = { ...this.state.ingredients };
    let isOk = true;
    for (const ingredient in ingredients) {
      if (
        ingredient === "salad" ||
        ingredient === "cheese" ||
        ingredient === "meat"
      ) {
        isOk = isOk && ingredients[ingredient] > 0;
      }
    }
    return isOk;
  };

  render() {
    const { ingredients, totalPrice } = this.state;
    return (
      <React.Fragment>
        <Burger ingredients={ingredients} />
        <BuildControls
          ingredients={ingredients}
          handleAddIngredient={this.addIngredientHandler}
          removeIngredientHandler={this.removeIngredientHandler}
          purchasable={this.isPurchasable()}
          price={totalPrice}
        />
      </React.Fragment>
    );
  }
}

export default BurgerBuilder;
