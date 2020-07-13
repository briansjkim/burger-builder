import React, { Fragment } from 'react';
import classes from './Layout.css';

const Layout = ( props ) => {
    return (
        <Fragment>
            {/* will replace this div with the three components */}
            <div>Toolbar, SideDrawer, Backdrop</div>
            <main className={classes.Content}>
                {props.children}
            </main>
        </Fragment>
    )
};

export default Layout;
