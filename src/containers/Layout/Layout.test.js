import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Layout } from './Layout';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

configure({ adapter: new Adapter() });

describe('<Layout />', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Layout />);
    });

    it('should render <Toolbar />', () => {
        expect(wrapper.find(Toolbar)).toHaveLength(1);
    });

    it('should render <SideDrawer />', () => {
        expect(wrapper.find(SideDrawer)).toHaveLength(1);
    });
});
