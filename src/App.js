import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import Offer from "./components/Offer";
import Offers from "./components/Offers";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/Offer/:id">
          <Offer />
        </Route>
        <Route path="/">
          <Offers />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
