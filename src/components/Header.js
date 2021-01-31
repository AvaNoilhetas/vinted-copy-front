import Cookies from "js-cookie";
import React from "react";
import { Link } from "react-router-dom";
import ProductsByName from "../components/ProductsByName";
import logo from "./../assets/img/logo.svg";

const Header = props => {
  const handleLogout = () => {
    props.setTest("gaga");
    Cookies.remove("token");
    props.setToken();
  };

  return (
    <header>
      <div className="container flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/">
            <img src={logo} alt="Vinted" />
          </Link>
          <ProductsByName setTitle={props.setTitle} />
        </div>
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
          <Link to="/publish">
            <button className="btn btn_small sm:my-0 my-1">
              Vends tes articles
            </button>
          </Link>
        </div>
      </div>
      <hr className="text-secondary" />
    </header>
  );
};

export default Header;
