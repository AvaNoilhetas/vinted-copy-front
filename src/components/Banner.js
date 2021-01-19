import React from "react";
import banner from "./../assets/img/banner.jpg";
import paper from "./../assets/img/paper-effect.svg";

const Banner = () => {
  return (
    <section className="relative h-96 overflow-hidden mb-4">
      <img src={banner} alt="Vinted" className="-mt-20" />
      <img src={paper} alt="Vinted" className="absolute -bottom-0.5 left-1/2" />
      <div className="absolute inset-0 flex items-center">
        <div className="bg-white rounded p-8 ml-8 max-w-sm">
          <h1 className="title-1 pb-8">
            Prêts à faire du tri dans vos placards ?
          </h1>
          <button className="btn">Commencer à vendre</button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
