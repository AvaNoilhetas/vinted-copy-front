import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <form className="container flex justify-center py-10">
      <div className="lg:w-1/4 sm:w-1/2">
        <h1 className="title-1 text-center pb-6">S'inscrire</h1>
        <input
          className="input focus:ring"
          type="text"
          placeholder="Nom d'utilisateur"
        />
        <input className="input" type="text" placeholder="Email" />
        <input className="input" type="password" placeholder="Mot de passe" />
        <label className="inline-flex items-center mt-3">
          <input type="checkbox" className="checkbox" />
          <span className="ml-2 text-gray-700">S'inscrire à la newsletter</span>
        </label>
        <button className="btn w-full mt-6">S'inscrire</button>
        <Link to="/login" className="block link text-center mt-3">
          Tu as déjà un compte ? Connecte-toi !
        </Link>
      </div>
    </form>
  );
};

export default SignUp;
