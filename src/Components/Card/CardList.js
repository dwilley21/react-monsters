import React from 'react' ;

import './Cardlist.styles.css';


export const CardList = (props) => {
    return(
        <div  className='card-list'>
        {props.children} 
        </div>
    )
}


export default CardList;