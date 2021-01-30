import React from "react";
import { Link } from "react-router-dom";
import banner from "./../assets/img/banner.jpg";
import paper from "./../assets/img/paper-effect.svg";

const Banner = props => {
  return (
    <section className="relative h-96 overflow-hidden mb-1">
      <img
        src={banner}
        alt="Vinted"
        className="-mt-20 object-cover object-right md:max-w-full max-w-4xl"
      />
      <img src={paper} alt="Vinted" className="absolute -bottom-0.5 left-1/2" />
      <div className="absolute inset-0 flex items-center">
        <div className="bg-white rounded p-8 sm:mx-8 mx-4 sm:max-w-sm w-full">
          <h1 className="title-1 pb-8">
            Prêts à faire du tri dans vos placards&nbsp;?
          </h1>
          <Link to={props.token ? "/publish" : "/signup"}>
            <button className="btn">Commencer à vendre</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Banner;
