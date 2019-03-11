import React from 'react';

import './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'}
];

const buildControls = (props) => (
    <div className='BuildControls'>

        <p>Current Price: <strong>Rs. {props.price.toFixed(2)} /-</strong></p>

        {controls.map((cntrl) => (
            <BuildControl key={cntrl.label} 
            label={cntrl.label}
            added={() => props.ingredientAdded(cntrl.type)}
            removed={() => props.ingredientRemoved(cntrl.type)}
            disabled={props.disabled[cntrl.type]}
        />
        ) )}

        <button className='OrderButton' 
                onClick={props.ordered} 
                disabled={!props.purchasable}
          >  {props.isAuth ? 'ORDER NOW' : 'LOG IN TO ORDER' }
        </button>
       
    </div>
);

export default buildControls;