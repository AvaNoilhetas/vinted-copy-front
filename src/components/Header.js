import React from "react";
import logo from "./../assets/img/logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="container flex justify-between items-center">
        <Link to="/">
          <img src={logo} alt="Vinted" />
        </Link>
        <div>
          <button className="btn_light btn_small mr-2">
            S'inscrire | Se connecter
          </button>
          <button className="btn btn_small">Vend tes articles</button>
        </div>
      </div>
      <hr className="text-secondary" />
    </header>
  );
};

export default Header;
