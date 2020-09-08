import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { NavLink } from 'react-router-dom';

import NavigationItem from './NavigationItem';

configure({ adapter: new Adapter() });

describe('<NavigationItem />', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<NavigationItem />);
    });

    it('should render <NavLink />', () => {
        expect(wrapper.find(NavLink)).toHaveLength(1);
    });
});
