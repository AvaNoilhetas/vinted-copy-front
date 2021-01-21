import React from "react";
import Next from "./../assets/img/next.svg";
import Previous from "./../assets/img/previous.svg";

const Pagination = props => {
  const pageNb = Math.ceil(props.total / props.limit);
  let pagination = [];

  for (let i = 1; i <= pageNb; i++) {
    pagination.push(
      <li
        onClick={() => handleChangePage(i)}
        className={
          "w-8 md:flex justify-center items-center hidden cursor-pointer leading-5 transition duration-150 ease-in  border-t-2" +
          (props.page === i ? " border-primary" : " border-transparent")
        }
      >
        {i}
      </li>
    );
  }

  const handleChangePage = index => {
    props.setPage(index);
  };

  const handlePreviousPage = () => {
    if (props.page > 1) {
      props.setPage(props.page - 1);
    }
  };

  const handleNextPage = () => {
    if (props.page < pageNb) {
      props.setPage(props.page + 1);
    }
  };

  return (
    <div className="flex justify-center items-center text-default mx-auto my-8">
      <div
        onClick={handlePreviousPage}
        className={
          "flex justify-center items-center cursor-pointer h-8 w-8 mr-1" +
          (props.page === 1 ? " hidden" : "")
        }
      >
        <img src={Previous} alt="Previous" className="w-4 h-4" />
      </div>
      <ul className="flex font-medium h-8">{pagination}</ul>
      <div
        onClick={handleNextPage}
        className={
          "flex justify-center items-center cursor-pointer h-8 w-8 ml-1" +
          (props.page === pageNb ? " hidden" : "")
        }
      >
        <img src={Next} alt="Next" className="w-4 h-4" />
      </div>
    </div>
  );
};

export default Pagination;
