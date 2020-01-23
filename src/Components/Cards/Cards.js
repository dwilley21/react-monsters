import React from 'react'; 

import './Cards.styles.css'
export const Cards = (props) => (
    <div className="card-container">
        <h1> {props.monster.name}</h1>
    </div>
)

