import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Home";
import DisplaySimpleDataJSX from "./components/DisplaySimpleDataJSX";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/display-simple-data-with-jsx" component={DisplaySimpleDataJSX} />
      </Router>
    );
  }
}

export default App;
