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
        const updatedCount = this.state.ingredients[type] + 1;
        const updatedIngredients = { ...this.state.ingredients };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const newPrice = this.state.totalPrice + priceAddition;
        this.setState({ totalPrice: newPrice, ingredients: updatedIngredients});
    };

    removeIngredientHandler = (type) => {
        if (this.state.ingredients[type] <= 0) {
            return;
        }
        const updatedCount = this.state.ingredients[type] - 1;
        const updatedIngredients = {...this.state.ingredients };
        updatedIngredients[type] = updatedCount;
        const priceDeducation = INGREDIENT_PRICES[type];
        const newPrice = this.state.totalPrice - priceDeducation;
        this.setState({ totalPrice: newPrice, ingredients: updatedIngredients});
    };

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };

        for (let key in disabledInfo) {
            // this will return true or false
            disabledInfo[key] = disabledInfo[key] <= 0
        };

        return (
            <Fragment>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls 
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabledInfo}
                />
            </Fragment>
        );
    }
};

export default BurgerBuilder;
