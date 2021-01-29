import React from "react";

const ProductsByOrder = props => {
  const options = [
    ["", "date"],
    ["price-asc", "prix croissant"],
    ["price-desc", "prix décroissant"]
  ];

  const handleSelectSort = event => {
    props.setSort(event.target.value);
  };

  return (
    <div className="text-right text-default">
      <label htmlFor="SortOffers">Trier par :</label>
      <select
        onChange={handleSelectSort}
        className="select border-none"
        name="SortOffers"
        id="SortOffers"
      >
        {options.map((option, index) => {
          return (
            <option key={index} value={option[0]}>
              {option[1]}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default ProductsByOrder;
