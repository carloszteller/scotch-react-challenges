import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Home";
import DisplaySimpleDataJSX from "./components/DisplaySimpleDataJSX";
import LoopOverDisplaySimpleDataJSX from "./components/LoopOverDisplaySimpleDataJSX";
import UseReactStateUpdateDOM from "./components/UseReactStateUpdateDOM";
import ShowAlertBasedOnInput from "./components/ShowAlertBasedOnInput";
import AddingCalculator from "./components/AddingCalculator";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/display-simple-data-with-jsx" component={DisplaySimpleDataJSX} />
        <Route exact path="/loop-over-and-display-simple-data-with-jsx" component={LoopOverDisplaySimpleDataJSX} />
        <Route exact path="/use-react-state-to-update-the-dom" component={UseReactStateUpdateDOM} />
        <Route exact path="/show-an-alert-based-on-input" component={ShowAlertBasedOnInput} />
        <Route exact path="/adding-calculator" component={AddingCalculator} />
      </Router>
    );
  }
}

export default App;
