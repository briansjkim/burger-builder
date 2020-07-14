import React, { Component, Fragment } from 'react';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../components/Burger/BuildControls/BuildControls';

class BurgerBuilder extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ingredients: {
                bacon: 0,
                salad: 0,
                cheese: 0,
                meat: 0
            }
        };
    };

    render() {
        return (
            <Fragment>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls />
            </Fragment>
        );
    }
};

export default BurgerBuilder;
