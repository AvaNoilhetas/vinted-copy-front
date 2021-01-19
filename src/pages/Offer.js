import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Offers() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://vinted-copy-project.herokuapp.com/offer/${id}`
      );
      setData(response.data);
      setIsLoading(false);
    };

    fetchData();
  }, [id]);

  return (
    !isLoading && (
      <section className="container bg-gray grid grid-cols-3 py-8">
        <div className="col-span-2">
          <img src={data.product_image.secure_url} alt={data.product_name} />
        </div>
        <div className="col-span-1">
          <div className="bg-white rounded p-8">
            <p className="text-dark font-normal text-lg">
              {data.product_price.toFixed(2).replace(".", ",")}&nbsp;€
            </p>
            {data.product_details.map((detail, index) => {
              if (detail.city) {
                return (
                  <div key={index} className="grid grid-cols-2">
                    <p className="col-span-1">Ville</p>
                    <p className="col-span-1">{detail.city}</p>
                  </div>
                );
              } else if (detail.brand) {
                return (
                  <div key={index} className="grid grid-cols-2">
                    <p className="col-span-1">Marque</p>
                    <p className="col-span-1">{detail.brand}</p>
                  </div>
                );
              } else if (detail.size) {
                return (
                  <div key={index} className="grid grid-cols-2">
                    <p className="col-span-1">Taille</p>
                    <p className="col-span-1">{detail.size}</p>
                  </div>
                );
              } else if (detail.condition) {
                return (
                  <div key={index} className="grid grid-cols-2">
                    <p className="col-span-1">Condition</p>
                    <p className="col-span-1">{detail.condition}</p>
                  </div>
                );
              } else if (detail.color) {
                return (
                  <div key={index} className="grid grid-cols-2">
                    <p className="col-span-1">Couleur</p>
                    <p className="col-span-1">{detail.color}</p>
                  </div>
                );
              }
              return "";
            })}

            <hr />
            <p>{data.product_name}</p>
            <p>{data.product_description}</p>
            <div className="flex items-center">
              <img
                src={data.owner.account.avatar}
                alt={data.owner.account.username}
                className="rounded-full w-6 h-6 m-2"
              />
              <p className="font-normal text-sm text-secondary">
                {data.owner.account.username}
              </p>
            </div>
            <button className="btn">Acheter</button>
          </div>
        </div>
      </section>
    )
  );
}
