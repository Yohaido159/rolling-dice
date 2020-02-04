import React, { Component } from "react";

import "./die.styles.scss";

class Die extends Component {
  render() {
    return <i className={`die fas fa-dice-${this.props.face}`}> </i>;
  }
}

export default Die;
