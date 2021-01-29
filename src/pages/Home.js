import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import Loader from "../components/Loader";
import Offer from "../components/Offer";
import Pagination from "../components/Pagination";
import ProductsByOrder from "../components/ProductsByOrder";
import ProductsByPrice from "../components/ProductsByPrice";
import ProductsPerPage from "../components/ProductsPerPage";

const Home = props => {
  const [data, setData] = useState({});
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(8);
  const [sort, setSort] = useState();
  const [priceMin, setPriceMin] = useState(0);
  const [priceMax, setPriceMax] = useState(1500);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      let params = {
        page: page,
        limit: limit,
        sort: sort,
        priceMin: priceMin,
        priceMax: priceMax,
        title: props.title
      };
      let url = `https://vinted-copy-project.herokuapp.com/offers`;
      let firstParams = true;

      for (let el in params) {
        if (params[el]) {
          if (firstParams) {
            url += `?${el}=${params[el]}`;
            firstParams = false;
          } else {
            url += `&${el}=${params[el]}`;
          }
        }
      }

      const response = await axios.get(url);
      setData(response.data);
      setIsLoading(false);
    };

    fetchData();
  }, [page, limit, sort, priceMin, priceMax, props.title]);

  return (
    <>
      <Banner />
      {isLoading && <Loader />}
      {!isLoading && (
        <div className="container">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <ProductsByPrice
                setPriceMin={setPriceMin}
                setPriceMax={setPriceMax}
                priceMin={priceMin}
                priceMax={priceMax}
              />
              <ProductsByOrder setSort={setSort} />
            </div>
            <ProductsPerPage
              limit={limit}
              setLimit={setLimit}
              setPage={setPage}
            />
          </div>
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
