import React, { Component } from "react";
import Router from "./Router";
import GlobalStyles from "../lib/GlobalStyles";

class App extends Component {
  render() {
    return (
      <>
        <Router />
        <GlobalStyles />
      </>
    );
  }
}

export default App;
