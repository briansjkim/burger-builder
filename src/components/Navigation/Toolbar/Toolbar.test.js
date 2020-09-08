import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Toolbar from './Toolbar';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import Logo from '../../Logo/Logo';

configure({ adapter: new Adapter() });

describe('<Toolbar />', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Toolbar />);
    });

    it('should render <DrawerToggle />', () => {
        expect(wrapper.find(DrawerToggle)).toHaveLength(1);
    });

    it('should render <Logo />', () => {
        expect(wrapper.find(Logo)).toHaveLength(1);
    });

    it('should render <NavigationItems />', () => {
        expect(wrapper.find(NavigationItems)).toHaveLength(1);
    });
});
