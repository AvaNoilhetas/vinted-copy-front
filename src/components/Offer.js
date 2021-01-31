import React from "react";

const Offer = props => {
  return (
    <div className="col-span-1 my-5">
      <div className="flex items-center mb-2">
        <div className="rounded-full w-6 h-6 mr-4 overflow-hidden">
          <img
            src={props.ownerPicture}
            alt={props.owner}
            className="object-cover"
          />
        </div>
        <p className="font-normal text-sm text-secondary">{props.owner}</p>
      </div>
      <div>
        <img
          src={props.productImage}
          alt={props.title}
          className="object-cover h-80"
        />
      </div>
      <div className="m-2">
        <p className="text-dark font-normal text-sm">
          {props.price.toFixed(2).replace(".", ",")}&nbsp;€
        </p>
        <p className="font-normal text-xs text-secondary">{props.size}</p>
        <p className="font-normal text-xs text-secondary">{props.brand}</p>
      </div>
    </div>
  );
};

export default Offer;
