import Cookies from "js-cookie";
import React from "react";
import { Link } from "react-router-dom";
import logo from "./../assets/img/logo.svg";

const Header = props => {
  const handleLogout = () => {
    Cookies.remove("token");
    props.setToken();
  };

  return (
    <header>
      <div className="container flex justify-between items-center">
        <Link to="/">
          <img src={logo} alt="Vinted" />
        </Link>
        <div className="flex sm:flex-row flex-col">
          <button
            onClick={handleLogout}
            className={
              "btn_light btn_small sm:mr-2 sm:my-0 my-1" +
              (props.token ? "" : " hidden")
            }
          >
            Déconnexion
          </button>
          <Link to="/signup" className={props.token ? "hidden" : ""}>
            <button className="btn_light btn_small sm:mr-2 sm:my-0 my-1">
              S'inscrire
            </button>
          </Link>
          <Link to="/signin" className={props.token ? "hidden" : ""}>
            <button className="btn_light btn_small sm:mr-2 sm:my-0 my-1">
              Se connecter
            </button>
          </Link>
          <button className="btn btn_small sm:my-0 my-1">
            Vend tes articles
          </button>
        </div>
      </div>
      <hr className="text-secondary" />
    </header>
  );
};

export default Header;
