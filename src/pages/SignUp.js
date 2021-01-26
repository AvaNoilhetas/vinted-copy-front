import axios from "axios";
import Cookies from "js-cookie";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

const SignUp = props => {
  let history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleName = event => {
    const value = event.target.value;
    setName(value);
  };

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
        .post("https://vinted-copy-project.herokuapp.com/user/sign_up", {
          email: email,
          username: name,
          password: password
        })
        .then(response => {
          Cookies.set("token", response.data.token, { expires: 7 });
          props.setIsConnect(true);
          history.push("/");
        })
        .catch(error => {
          console.log(error.response);
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
        <h1 className="title-1 text-center pb-6">S'inscrire</h1>
        <input
          className="input focus:ring"
          type="text"
          placeholder="Nom d'utilisateur"
          id="name"
          name="name"
          value={name}
          onChange={handleName}
        />
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
        <label className="inline-flex items-center mt-3">
          <input type="checkbox" className="checkbox" />
          <span className="ml-2 text-gray-700">S'inscrire à la newsletter</span>
        </label>
        <button type="submit" value="Submit" className="btn w-full mt-6">
          S'inscrire
        </button>
        <Link to="/signin" className="block link text-center mt-3">
          Tu as déjà un compte ? Connecte-toi !
        </Link>
      </div>
    </form>
  );
};

export default SignUp;
