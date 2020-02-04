import React, { Component } from "react";

import "./roll-die.styles.scss";

import Die from "../die/die.component";

class RollDice extends Component {
  static defaultProps = {
    sides: ["one", "two", "three", "four", "five", "six"]
  };

  constructor(props) {
    super(props);
    this.state = {
      die1: "one",
      die2: "one",
      isRolling: false
    };
  }

  roll = () => {
    const newDie1 = this.props.sides[
      Math.floor(Math.random() * this.props.sides.length)
    ];

    const newDie2 = this.props.sides[
      Math.floor(Math.random() * this.props.sides.length)
    ];

    this.setState({ die1: newDie1, die2: newDie2, isRolling: true });

    setTimeout(() => {
      this.setState({ isRolling: false });
    }, 500);
  };

  render() {
    return (
      <div className="roll-dice">
        <div className="roll-dice-container">
          <Die face={this.state.die1} />
          <Die face={this.state.die2} />
        </div>
        <button onClick={this.roll} disabled={this.state.isRolling}>
          {this.state.isRolling ? "Rolling..." : "Roll Dice"}
        </button>
      </div>
    );
  }
}

export default RollDice;
