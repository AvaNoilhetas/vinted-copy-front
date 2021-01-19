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
      <section className="container bg-gray grid md:grid-cols-3 sm:grid-cols-2 gap-5 py-8 min-h-screen">
        <div className="md:col-span-2 col-span-1 overflow-hidden">
          <img
            className="m-auto max-h-offer rounded"
            src={data.product_image.secure_url}
            alt={data.product_name}
          />
        </div>
        <div className="col-span-1">
          <div className="bg-white rounded p-8 mb-5">
            <p className="text-dark font-normal text-lg pb-4">
              {data.product_price.toFixed(2).replace(".", ",")}&nbsp;€
            </p>
            {data.product_details.map((detail, index) => {
              if (detail.city) {
                return (
                  <div key={index} className="grid grid-cols-2">
                    <p className="col-span-1 uppercase text-secondary text-sm">
                      Ville
                    </p>
                    <p className="col-span-1 uppercase text-default text-sm">
                      {detail.city}
                    </p>
                  </div>
                );
              } else if (detail.brand) {
                return (
                  <div key={index} className="grid grid-cols-2">
                    <p className="col-span-1 uppercase text-secondary text-sm">
                      Marque
                    </p>
                    <p className="col-span-1 uppercase text-default text-sm">
                      {detail.brand}
                    </p>
                  </div>
                );
              } else if (detail.size) {
                return (
                  <div key={index} className="grid grid-cols-2">
                    <p className="col-span-1 uppercase text-secondary text-sm">
                      Taille
                    </p>
                    <p className="col-span-1 uppercase text-default text-sm">
                      {detail.size}
                    </p>
                  </div>
                );
              } else if (detail.condition) {
                return (
                  <div key={index} className="grid grid-cols-2">
                    <p className="col-span-1 uppercase text-secondary text-sm">
                      Condition
                    </p>
                    <p className="col-span-1 uppercase text-default text-sm">
                      {detail.condition}
                    </p>
                  </div>
                );
              } else if (detail.color) {
                return (
                  <div key={index} className="grid grid-cols-2">
                    <p className="col-span-1 uppercase text-secondary text-sm">
                      Couleur
                    </p>
                    <p className="col-span-1 uppercase text-default text-sm">
                      {detail.color}
                    </p>
                  </div>
                );
              }
              return "";
            })}
            <hr className="text-secondary my-4" />
            <p className="text-dark font-normal text-base">
              {data.product_name}
            </p>
            <p className="text-default font-normal text-base">
              {data.product_description}
            </p>
            <button className="btn w-full mt-6">Acheter</button>
          </div>
          <div className="bg-white rounded flex items-center p-8">
            <img
              src={data.owner.account.avatar}
              alt={data.owner.account.username}
              className="rounded-full w-10 h-10 mr-4"
            />
            <p className="font-normal text-lg text-dark">
              {data.owner.account.username}
            </p>
          </div>
        </div>
      </section>
    )
  );
}
