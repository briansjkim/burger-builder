import React from 'react';
import { configure, shallow } from 'enzyme';
import { Route, Redirect } from 'react-router-dom';
import Adapter from 'enzyme-adapter-react-16';

import { Checkout } from './Checkout';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

configure({ adapter: new Adapter() });

describe('<Checkout />', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Checkout onInitPurchase = {() => {}} />);
    });

    it('should render <CheckoutSummary /> when receiving ingredients', () => {
        wrapper.setProps({ ings: { salad: 0 }, match: { path: '/' } });
        expect(wrapper.find(CheckoutSummary)).toHaveLength(1);
    });

    it('should render <Route /> when receiving ingredients', () => {
        wrapper.setProps({ ings: { salad: 0}, match: { path: '/'} });
        expect(wrapper.find(Route)).toHaveLength(1);
    });

    it('should render <Redirect /> when receiving ingredients and when user is purchasing', () => {
        wrapper.setProps({ ings: { salad: 0}, match: { path: '/'}, purchased: true });
        expect(wrapper.find(Redirect)).toHaveLength(1);
    });
});
