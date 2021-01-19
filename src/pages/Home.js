import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Banner from "./../components/Banner";
import Offer from "./../components/Offer";

export default function Home() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const response = await axios.get(
      "https://vinted-copy-project.herokuapp.com/offers"
    );
    setData(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Banner />
      {isLoading && <div>io</div>}
      {!isLoading && (
        <div className="container grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-x-5">
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
      )}
    </>
  );
}
