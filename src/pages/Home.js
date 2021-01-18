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
    console.log(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Banner />
      {!isLoading && <div>io</div>}
      {!isLoading &&
        data.offers.map((offer, index) => {
          return (
            <Link key={offer._id} to={`/offer/${offer._id}`}>
              <Offer
                title={offer.product_name}
                price={offer.product_price}
                size={offer.product_details.size}
                brand={offer.product_details.brand}
                productImage={offer.product_image.secure_url}
                owner={offer.owner.account.username}
                ownerPicture={offer.owner.account.avatar}
              />
            </Link>
          );
        })}
    </div>
  );
}
