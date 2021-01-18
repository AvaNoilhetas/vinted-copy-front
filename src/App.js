import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Header from "./components/Header";
import "./App.css";

export default function App() {
  return (
    <Router>
      <div>
        <Header />
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/offer/:id">
            <Offer />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
