import React, { Component } from "react";

export default class Battle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playerOneName: "",
      playerTwoName: "",
      playerOneImage: null,
      playerOneImage: null
    };
  }

  render() {
    return (
      <div>
        <h1>BATTLE!</h1>
      </div>
    );
  }
}
