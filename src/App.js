import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

export default function App() {
  const [isConnect, setIsConnect] = useState(false);

  useEffect(() => {
    const isCookie = Cookies.get("token");
    if (isCookie) {
      setIsConnect(true);
    }
  }, []);

  return (
    <Router>
      <Header isConnect={isConnect} setIsConnect={setIsConnect} />
      <Switch>
        <Route path="/offer/:id">
          <Offer />
        </Route>
        <Route path="/signup">
          <SignUp setIsConnect={setIsConnect} />
        </Route>
        <Route path="/Signin">
          <SignIn setIsConnect={setIsConnect} />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
