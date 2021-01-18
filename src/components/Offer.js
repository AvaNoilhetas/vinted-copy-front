import React from "react";

const Offer = props => {
  return (
    <div>
      <div>
        <img src={props.ownerPicture} alt={props.owner} width="20px" />
        <p>{props.owner}</p>
      </div>
      <div>
        <img src={props.productImage} alt={props.title} width="20px" />
      </div>
      <div>
        <p>{props.price}</p>
        <p>{props.size}</p>
        <p>{props.brand}</p>
      </div>
    </div>
  );
};

export default Offer;
