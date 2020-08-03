import React, { Fragment, Component } from 'react';

import Backdrop from '../Backdrop/Backdrop';
import classes from './Modal.css';

class Modal extends Component {
    //  used for performance optimization. nothing else
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show;
    }
    // componentWillUpdate will be executed if shouldComponentUpdate returns true
    // if it returns false, componentWillUpdate won't run

    // it's better to use PureComponent instead of this method, but PureComponent will do more checks than what I need
    componentWillUpdate() {
        console.log('[Modal] WillUpdate');
    }

    render() {
        return (
            <Fragment>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
                <div
                    className={classes.Modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}> {this.props.children}
                </div>
            </Fragment>
        )
    }
};

export default Modal;
