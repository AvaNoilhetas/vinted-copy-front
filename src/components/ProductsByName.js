import React from "react";
import magnifying from "./../assets/img/magnifying.svg";

const ProductsByName = props => {
  const handleTitle = event => {
    props.setTitle(event.target.value);
  };

  return (
    <div className="relative mx-auto text-gray-600 ml-10">
      <input
        className="bg-lightGray border-0 h-9 pl-10 rounded-lg text-sm focus:outline-none w-72"
        type="search"
        name="search"
        placeholder="Rechercher"
        onChange={handleTitle}
      />
      <div className="absolute left-0 top-0 mt-2 ml-3">
        <img src={magnifying} alt="" />
      </div>
    </div>
  );
};

export default ProductsByName;
