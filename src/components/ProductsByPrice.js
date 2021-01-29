import React from "react";

const ProductsByPrice = props => {
  const handleSelectPriceMin = event => {
    props.setPriceMin(event.target.value);
  };

  const handleSelectPriceMax = event => {
    props.setPriceMax(event.target.value);
  };

  return (
    <div className="mr-8">
      <input type="number" onChange={handleSelectPriceMin} />
      <input type="number" onChange={handleSelectPriceMax} />
    </div>
  );
};

export default ProductsByPrice;
