import React, { Component } from "react";
import "./App.css";

import RollDie from "./components/roll-die/roll-die.comp";

class App extends Component {

  render() {
    return (
      <div className="App">
        <RollDie />
      </div>
    );
  }
}

export default App;
