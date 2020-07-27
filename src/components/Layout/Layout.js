import React, { Component, Fragment } from 'react';

import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import classes from './Layout.css';

class Layout extends Component {
    render() {
        return (
            <Fragment>
                <Toolbar />
                <SideDrawer />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Fragment>
        )
    }
};

export default Layout;
