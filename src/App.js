import React, { Component } from "react";
import "./App.css";
import Pizza from "./components/Pizza";
import Order from "./components/Order";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/pizza" component={Pizza} />
          <Route exact path="/order" component={Order} />

          <Route exact path="/" render={() => <Redirect to="/pizza" />} />
        </div>
      </Router>
    );
  }
}

export default App;
