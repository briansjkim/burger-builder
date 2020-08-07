import React from 'react';
// withRouter is a HOC that we can use to inject the special props from react-router-dom to any component
import { withRouter } from 'react-router-dom';

import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import classes from './Burger.css';

const Burger = (props) => {

    // passed in props is an object so we have to transform it into an array
    // igKey will be each ingredient
    let transformedIngredients = Object.keys(props.ingredients).map(igKey => {
        // props.ingredients[igKey] is the number of ingredients 
        // creating an array with a length of the number of each given ingredient
        return [...Array(props.ingredients[igKey])].map((_, i) => {
            return <BurgerIngredient key={igKey + i} type={igKey} />;
        });
    }).reduce((arr, el) => {
        return arr.concat(el);
    }, []);

    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients</p>;
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default withRouter(Burger);
