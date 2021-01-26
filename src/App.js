import Cookies from "js-cookie";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

export default function App() {
  const [token, setToken] = useState(Cookies.get("token"));
  console.log(token);
  return (
    <Router>
      <Header token={token} setToken={setToken} />
      <Switch>
        <Route path="/offer/:id">
          <Offer />
        </Route>
        <Route path="/signup">
          <SignUp setToken={setToken} />
        </Route>
        <Route path="/Signin">
          <SignIn setToken={setToken} />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
