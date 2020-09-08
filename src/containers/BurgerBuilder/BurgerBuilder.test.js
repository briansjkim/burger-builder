import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { BurgerBuilder } from './BurgerBuilder';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Burger from '../../components/Burger/Burger';

configure({ adapter: new Adapter() });

describe('<BurgerBuilder />', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<BurgerBuilder onInitIngredients={() => {}} />);
    });

    it('should render <BuildControls /> when receiving ingredients', () => {
        wrapper.setProps({ ings: { salad: 0 }});
        expect(wrapper.find(BuildControls)).toHaveLength(1);
    });

    it('should not render <BuildControls /> when ingredients are not received', () => {
        wrapper.setProps({ ings: null });
        expect(wrapper.find(BuildControls)).toHaveLength(0);
    });

    it('should render <OrderSummary /> when receiving ingredients', () => {
        wrapper.setProps({ ings: { bacon: 0 }});
        expect(wrapper.find(OrderSummary)).toHaveLength(1);
    });

    it('should render <Burger /> when receiving ingredients', () => {
        wrapper.setProps({ ings: { meat: 1} });
        expect(wrapper.find(Burger)).toHaveLength(1);
    });
});
