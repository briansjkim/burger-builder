import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import SideDrawer from './SideDrawer';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Logo from '../../Logo/Logo';
import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem';

configure({ adapter: new Adapter() });

describe('<SideDrawer />', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<SideDrawer />);
    });

    it('should render <Backdrop />', () => {
        expect(wrapper.find(Backdrop)).toHaveLength(1);
    });

    it('should render <Logo />', () => {
        expect(wrapper.find(Logo)).toHaveLength(1);
    });

    it('should render <NavigationItems />', () => {
        expect(wrapper.find(NavigationItems)).toHaveLength(1);
    });
});
