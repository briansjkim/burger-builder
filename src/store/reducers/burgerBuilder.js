import * as actionTypes from '../actions/actionTypes';
import { updateObject } from './utlity';

const initialState = {
    ingredients: null,
    totalPrice: 2,
    error: false
};

// name global constants in all capital
const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.2,
    bacon: 1.0
};

const burgerBuilder = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT:
            const updatedIngredient = { [action.ingredientName]: state.ingredients[action.ingredientName] + 1 };
            const updatedIngredients = updateObject(state.ingredients, updatedIngredient);
            const updatedState = {
                ingredients: updatedIngredients,
                totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
            };
            return updateObject(state, updatedState);

        case actionTypes.REMOVE_INGREDIENT:
            const updatedIng = { [action.ingredientName]: state.ingredients[action.ingredientName] - 1 };
            const updatedIngs = updateObject(state.ingredients, updatedIng);
            const updatedSt = {
                ingredients: updatedIngs,
                totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
            };
            return updateObject(state, updatedSt);
        case actionTypes.SET_INGREDIENTS:
            return updateObject(state, {
                ingredients: action.ingredients,
                error: false,
                totalPrice: 2
            });
        case actionTypes.FETCH_INGREDIENTS_FAILED:
            return updateObject(state, { error: true });
        default:
            return state;
    }
};

export default burgerBuilder;
