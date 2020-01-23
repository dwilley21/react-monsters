import React, { Component } from 'react';
import { CardList} from './Components/Card/CardList';



import './App.css';
class App extends Component {
    constructor(){
      super(); 
      
      this.state = {
        monsters: []
        };
    }

    componentDidMount(){
      fetch('http://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users}))

    }
  render(){
    return (
      <div className="App">
      <CardList > {
         this.state.monsters.map(monster => <h1 key={monster.id}>{ monster.name }</h1>)
       }
      </CardList>
      
      </div>
    )
  }
}

export default App;
