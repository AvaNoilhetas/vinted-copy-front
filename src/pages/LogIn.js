import React from "react";
import { Link } from "react-router-dom";

const LogIn = () => {
  return (
    <form className="container flex justify-center py-10">
      <div className="lg:w-1/4 sm:w-1/2">
        <h1 className="title-1 text-center pb-6">Se connecter</h1>
        <input className="input" type="text" placeholder="Email" />
        <input className="input" type="password" placeholder="Mot de passe" />
        <button className="btn w-full mt-6">S'inscrire</button>
        <Link to="/signup" className="block link text-center mt-3">
          Pas encore de compte ? Inscris-toi !
        </Link>
      </div>
    </form>
  );
};

export default LogIn;
