import React from "react";

const ProductsByPrice = props => {
  const handleSelectPriceMin = event => {
    if (parseInt(props.priceMax) > parseInt(event.target.value)) {
      props.setPriceMin(event.target.value);
    }
  };

  const handleSelectPriceMax = event => {
    if (parseInt(event.target.value) > parseInt(props.priceMin)) {
      props.setPriceMax(event.target.value);
    }
  };

  return (
    <div className="flex justify-between items-center w-60">
      <p className="text-default">{props.priceMin}&nbsp;€</p>
      <div className="l-0 relative w-full h-4 mt-2 mx-3">
        <input
          type="range"
          min="0"
          max={props.selectionPriceMax}
          step="1"
          defaultValue={props.priceMin}
          onChange={handleSelectPriceMin}
          className="absolute appearance-none l-0 t-0 focus:outline-none w-full"
        />
        <input
          type="range"
          min="0"
          max={props.selectionPriceMax || "1500"}
          step="1"
          defaultValue={props.priceMax || "1500"}
          onChange={handleSelectPriceMax}
          className="absolute appearance-none l-0 t-0 focus:outline-none w-full"
        />
      </div>
      <p className="text-default">{props.priceMax}&nbsp;€</p>
    </div>
  );
};

export default ProductsByPrice;
