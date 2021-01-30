import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDebounce } from "use-debounce";
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
  const [limit, setLimit] = useState(10);
  const [sort, setSort] = useState();
  const [selectionPriceMax, setSelectionPriceMax] = useState();
  const [priceMin, setPriceMin] = useState(0);
  const [priceMax, setPriceMax] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [useDebounceTitle] = useDebounce(props.title, 2000);
  const [useDebouncePriceMax] = useDebounce(priceMax, 800);
  const [useDebouncePriceMin] = useDebounce(priceMin, 800);

  useEffect(() => {
    const fetchData = async () => {
      let url = `https://vinted-copy-project.herokuapp.com/offers`;
      const response = await axios.get(url);

      const max = response.data.offers.reduce(function(prev, current) {
        return prev.product_price > current.product_price ? prev : current;
      });

      setSelectionPriceMax(max.product_price);
      setPriceMax(max.product_price);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      let params = {
        page: page,
        limit: limit,
        sort: sort,
        priceMin: useDebouncePriceMin,
        priceMax: useDebouncePriceMax,
        title: useDebounceTitle
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

      // We can use the package QS => let queryParams = qs.stringifly(params);

      const response = await axios.get(url);

      setData(response.data);
      setIsLoading(false);
    };

    fetchData();
  }, [
    page,
    limit,
    sort,
    useDebouncePriceMin,
    useDebouncePriceMax,
    useDebounceTitle
  ]);

  return (
    <>
      <Banner token={props.token} />
      {isLoading && <Loader />}
      {!isLoading && (
        <div className="container">
          <div className="flex justify-between items-center">
            <ProductsByPrice
              setPriceMin={setPriceMin}
              setPriceMax={setPriceMax}
              priceMin={priceMin}
              priceMax={priceMax}
              selectionPriceMax={selectionPriceMax}
            />
            <div className="flex items-center">
              <ProductsByOrder setSort={setSort} />
              <ProductsPerPage
                limit={limit}
                setLimit={setLimit}
                setPage={setPage}
              />
            </div>
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
