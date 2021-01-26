import axios from "axios";
import Cookies from "js-cookie";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

const SignIn = props => {
  let history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleEmail = event => {
    const value = event.target.value;
    setEmail(value);
  };

  const handlePassword = event => {
    const value = event.target.value;
    setPassword(value);
  };

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      await axios
        .post("https://vinted-copy-project.herokuapp.com/user/login", {
          email: email,
          password: password
        })
        .then(response => {
          Cookies.set("token", response.data.token, { expires: 7 });
          props.setToken(response.data.token);
          history.push("/");
        })
        .catch(error => {
          if (error.response) {
            setErrorMessage(error.response.data);
          }
        });
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="container flex justify-center py-10"
    >
      <div className="lg:w-1/4 sm:w-1/2">
        <h1 className="title-1 text-center pb-6">Se connecter</h1>
        <input
          id="email"
          name="email"
          value={email}
          onChange={handleEmail}
          className="input"
          type="email"
          placeholder="Email"
        />
        <input
          id="password"
          name="password"
          value={password}
          onChange={handlePassword}
          className="input"
          type="password"
          placeholder="Mot de passe"
        />
        {errorMessage && (
          <p className="font-normal text-center text-red text-sm mt-4">
            {errorMessage}
          </p>
        )}
        <button type="submit" value="Submit" className="btn w-full mt-6">
          Se connecter
        </button>
        <Link to="/signup" className="block link text-center mt-3">
          Pas encore de compte ? Inscris-toi !
        </Link>
      </div>
    </form>
  );
};

export default SignIn;
