import React from "react";

const ProductsByName = props => {
  const handleTitle = event => {
    props.setTitle(event.target.value);
  };

  return (
    <div>
      <input type="search" onChange={handleTitle} />
    </div>
  );
};

export default ProductsByName;
