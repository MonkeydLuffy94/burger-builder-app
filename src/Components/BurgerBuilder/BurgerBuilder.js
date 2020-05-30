import React, { Component } from "react";
import Burger from "../Burger/Burger";

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 1,
      bacon: 1,
      cheese: 2,
      meat: 2,
    },
  };
  render() {
    const { ingredients } = this.state;
    return (
      <React.Fragment>
        <Burger ingredients={ingredients} />
        <div>Burger Control</div>
      </React.Fragment>
    );
  }
}

export default BurgerBuilder;
