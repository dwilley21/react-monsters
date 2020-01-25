import React, { Component } from 'react';
import { CardList } from './Components/Card/CardList';
import { SearchBox } from './Components/SearchBox/SearchBox';


import './App.css';
class App extends Component {
    constructor(){
      super(); 
      
      this.state = {
        monsters: [],
        searchField: ''
        };
    }

    componentDidMount(){
      fetch('http://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users}))
    }
  render(){
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter( monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
          <SearchBox
             placeholder='search monsters' 
             handleChange={e => this.setState({ searchField: e.target.value})}
          />
        <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}

export default App;
