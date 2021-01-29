import React from "react";
import "./range.css";

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
    <div className="flex mr-8">
      <p>{props.priceMin}</p>
      <div id="app">
        <div className="range-slider">
          <input
            type="range"
            min="0"
            max="1500"
            step="1"
            value={props.priceMin}
            onChange={handleSelectPriceMin}
          />
          <input
            type="range"
            min="0"
            max="1500"
            step="1"
            value={props.priceMax}
            onChange={handleSelectPriceMax}
          />
        </div>
      </div>
      <p>{props.priceMax}</p>
    </div>
  );
};

export default ProductsByPrice;
