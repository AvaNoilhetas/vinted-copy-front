import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Cookies from "js-cookie";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header";
import Home from "./pages/Home";
import Offer from "./pages/Offers";
import Payment from "./pages/Payment";
import Publish from "./pages/Publish";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

export default function App() {
  const stripePromise = loadStripe(
    "pk_test_51IGBixFAxWjNcoDh8HDvg4ZSlNoe0miqIGwrkQV059ETP4n0vkGTEET6TDacvsB9ZoP1K1tNCd6sAphP0CjUUpaF004DBdvtN3"
  );

  const [token, setToken] = useState(Cookies.get("token"));
  const [title, setTitle] = useState();

  return (
    <Elements stripe={stripePromise}>
      <Router>
        <Header token={token} setToken={setToken} setTitle={setTitle} />
        <Switch>
          <Route path="/offer/:id">
            <Offer />
          </Route>
          <Route path="/signup">
            <SignUp setToken={setToken} />
          </Route>
          <Route path="/publish">
            <Publish token={token} />
          </Route>
          <Route path="/signin">
            <SignIn setToken={setToken} />
          </Route>
          <Route path="/payment">
            <Payment token={token} />
          </Route>
          <Route path="/">
            <Home title={title} token={token} />
          </Route>
        </Switch>
      </Router>
    </Elements>
  );
}
