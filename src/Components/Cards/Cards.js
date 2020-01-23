import React from 'react'; 

import './Cards.styles.css'
export const Cards = (props) => (
    <div className="card-container">
        <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set2`} />
        <h1> {props.monster.name}</h1>
    </div>
)

