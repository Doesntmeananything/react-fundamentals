import React, { Component } from "react";
import ReactDOM from "react-dom";
require("./index.css");

export default class App extends Component {
  render() {
    return <div>Hello, everyone!</div>;
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
