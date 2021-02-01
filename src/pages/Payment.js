import axios from "axios";
import { useEffect, useState } from "react";
import { Redirect, useParams } from "react-router-dom";
import Loader from "./../components/Loader";

const Payment = props => {
  const buyerProtection = 1.5;
  const shippingCost = 3;

  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  const total = buyerProtection + shippingCost + data.product_price;

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
    <>
      {props.token ? (
        !isLoading ? (
          <section className="bg-gray py-10">
            <div className="container">
              <h1 className="title-1 text-center pb-8">
                Résumé de la commande
              </h1>
              <div className="bg-white rounded p-8 w-4/5 mx-auto">
                <div className="flex justify-between pb-4">
                  <p className="text-default">Commande</p>
                  <p className="text-default">
                    {data.product_price.toFixed(2).replace(".", ",")} €
                  </p>
                </div>
                <div className="flex justify-between pb-4">
                  <p className="text-default">Frais protection acheteurs</p>
                  <p className="text-default">
                    {buyerProtection.toFixed(2).replace(".", ",")} €
                  </p>
                </div>
                <div className="flex justify-between">
                  <p className="text-default">Frais de port</p>
                  <p className="text-default">
                    {shippingCost.toFixed(2).replace(".", ",")} €
                  </p>
                </div>
                <hr className="text-default my-8" />
                <div className="flex justify-between pb-6">
                  <p>
                    <strong>Total</strong>
                  </p>
                  <p>
                    <strong>{total.toFixed(2).replace(".", ",")} €</strong>
                  </p>
                </div>
                <p className="text-default pb-6">
                  Il ne vous reste plus qu'un étape pour vous offrir&nbsp;
                  <strong className="text-primary">
                    {data.product_name}
                  </strong>{" "}
                  . Vous allez payer&nbsp;
                  <strong className="text-primary">
                    {total.toFixed(2).replace(".", ",")}€
                  </strong>{" "}
                  (frais de protection et frais de port inclus).
                </p>
                <button className="btn w-full">Payer</button>
              </div>
            </div>
          </section>
        ) : (
          <Loader />
        )
      ) : (
        <Redirect to="/signup" />
      )}
    </>
  );
};

export default Payment;
