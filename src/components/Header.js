import React from "react";
import logo from "./../assets/img/logo.svg";
const Header = () => {
  return (
    <header>
      <div className="container flex justify-between items-center">
        <img src={logo} alt="Vinted" />
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
