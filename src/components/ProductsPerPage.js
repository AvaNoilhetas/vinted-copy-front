import React from "react";

const ProductsPerPage = props => {
  const options = ["8", "16", "32"];

  const handleSelectLimit = event => {
    props.setLimit(event.target.value);
    props.setPage(1);
  };

  return (
    <div className="text-right text-default">
      <label>Produits par page :</label>
      <select
        onChange={handleSelectLimit}
        className="cursor-pointer"
        name="ProductsPerPage"
        id="ProductsPerPage"
      >
        {options.map((option, index) => {
          return (
            <option key={index} value={option}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default ProductsPerPage;
