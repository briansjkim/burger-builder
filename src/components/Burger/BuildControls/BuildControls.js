import React from 'react';

import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.css';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
]

const BuildControls = (props) => (
    <div className={classes.BuildControls}>
        {controls.map(control =>
            <BuildControl label={control.label} key={control.label} />
        )}
    </div>
);

export default BuildControls;
