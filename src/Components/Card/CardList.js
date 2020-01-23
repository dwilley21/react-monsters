import React from 'react' ;
import {Cards} from '../Cards/Cards'
import './Cardlist.styles.css';


export const CardList = props => (
           <div  className='card-list'>
      {props.monsters.map(monster => (
        <Cards key={monster.id} monster={monster} />
         ))}
        </div>
    );

    