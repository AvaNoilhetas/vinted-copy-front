import React from "react";
import logo from "./../assets/img/logo.svg";
const Header = () => {
  return (
    <div>
      <div className="container flex justify-between items-center">
        <img src={logo} alt="Vinted" />
        <div>
          <button className="btn_light mr-2">S'inscrire | Se connecter</button>
          <button className="btn">Vend tes articles</button>
        </div>
      </div>
      <hr className="text-secondary" />
    </div>
  );
};

export default Header;
