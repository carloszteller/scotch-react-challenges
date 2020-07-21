import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Home";
import DisplaySimpleDataJSX from "./components/DisplaySimpleDataJSX";
import LoopOverDisplaySimpleDataJSX from "./components/LoopOverDisplaySimpleDataJSX";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/display-simple-data-with-jsx" component={DisplaySimpleDataJSX} />
        <Route exact path="/loop-over-and-display-simple-data-with-jsx" component={LoopOverDisplaySimpleDataJSX} />
      </Router>
    );
  }
}

export default App;
