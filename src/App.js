import React, { Component } from "react";
import "./App.css";

import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ""
    };
    

  }

  async componentDidMount() {
    const users = await fetch("https://jsonplaceholder.typicode.com/users");
    const json = await users.json();
    this.setState({ monsters: json });
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }



  render() {
    const { monsters, searchField } = this.state;
    const filterMonsters = monsters.filter(monster =>
    monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1> Monsters</h1>
        <SearchBox
          placeholder="search for monster"
          onChange = {this.handleChange}
        />

        <CardList monsters={filterMonsters} />
      </div>
    );
  }
}

export default App;
