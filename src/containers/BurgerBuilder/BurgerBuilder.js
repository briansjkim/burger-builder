import React, { Component, Fragment } from 'react';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

// name global constants in all capital 
const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.2,
    bacon: 1.0
}

class BurgerBuilder extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ingredients: {
                bacon: 0,
                salad: 0,
                cheese: 0,
                meat: 0
            },
            totalPrice: 2
        };

        this.addIngredientHandler = this.addIngredientHandler.bind(this);
    };

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({ totalPrice: newPrice, ingredients: updatedIngredients});
    };

    removeIngredientHandler = (type) => {

    }

    render() {
        return (
            <Fragment>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls ingredientAdded={this.addIngredientHandler} />
            </Fragment>
        );
    }
};

export default BurgerBuilder;
