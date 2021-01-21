import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductsPerPage from "../components/ProductsPerPage";
import Banner from "./../components/Banner";
import Loader from "./../components/Loader";
import Offer from "./../components/Offer";
import Pagination from "./../components/Pagination";

const Home = () => {
  const [data, setData] = useState({});
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(8);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://vinted-copy-project.herokuapp.com/offers?page=${page}&limit=${limit}`
      );
      setData(response.data);
      setIsLoading(false);
    };

    fetchData();
  }, [page, limit]);

  return (
    <>
      <Banner />
      {isLoading && <Loader />}
      {!isLoading && (
        <div className="container">
          <ProductsPerPage
            limit={limit}
            setLimit={setLimit}
            setPage={setPage}
          />
          <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-x-5">
            {data.offers.map((offer, index) => {
              let brand;
              let size;
              for (let i = 0; i < offer.product_details.length; i++) {
                if (offer.product_details[i].brand) {
                  brand = offer.product_details[i].brand;
                }
                if (offer.product_details[i].size) {
                  size = offer.product_details[i].size;
                }
              }
              return (
                <Link key={offer._id} to={`/offer/${offer._id}`}>
                  <Offer
                    title={offer.product_name}
                    price={offer.product_price}
                    size={size}
                    brand={brand}
                    productImage={offer.product_image.secure_url}
                    owner={offer.owner.account.username}
                    ownerPicture={offer.owner.account.avatar}
                  />
                </Link>
              );
            })}
          </div>
          <Pagination
            total={data.count}
            limit={limit}
            page={page}
            setPage={setPage}
          />
        </div>
      )}
    </>
  );
};

export default Home;
