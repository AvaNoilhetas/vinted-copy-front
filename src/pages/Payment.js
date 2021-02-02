import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import React, { useState } from "react";
import { Redirect, useLocation } from "react-router-dom";

const Payment = props => {
  const location = useLocation();

  const { title, price } = location.state;
  const buyerProtection = 1.5;
  const shippingCost = 3;

  const total = buyerProtection + shippingCost + price;
  const stripeTotal = total * 100;

  const stripe = useStripe();
  const elements = useElements();
  const [completed, setCompleted] = useState(false);

  const handleSubmit = async event => {
    event.preventDefault();

    const cardElement = elements.getElement(CardElement);
    const stripeResponse = await stripe.createToken(cardElement, {
      name: props.token
    });

    console.log(stripeResponse);

    const stripeToken = stripeResponse.token.id;

    const response = await axios.post(
      "https://vinted-copy-project.herokuapp.com/payment",
      {
        amount: stripeTotal,
        description: title,
        stripeToken
      }
    );
    console.log(response.data);

    if (response.data.status === "succeeded") {
      setCompleted(true);
    }
  };

  return (
    <>
      {props.token ? (
        <section className="bg-gray py-10">
          <div className="container">
            <h1 className="title-1 text-center pb-8">Résumé de la commande</h1>
            <div className="bg-white rounded p-8 lg:w-3/5 md:w-4/5 mx-auto">
              <div className="flex justify-between pb-4">
                <p className="text-default">Commande</p>
                <p className="text-default">
                  {price.toFixed(2).replace(".", ",")} €
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
                <strong className="text-primary">{title}</strong>.<br /> Vous
                allez payer&nbsp;
                <strong className="text-primary">
                  {total.toFixed(2).replace(".", ",")} €
                </strong>{" "}
                (frais de protection et frais de port inclus).
              </p>
              {!completed ? (
                <form onSubmit={handleSubmit}>
                  <CardElement className="pb-6" />
                  <button type="submit" className="btn w-full">
                    Valider
                  </button>
                </form>
              ) : (
                <span>Paiement effectué ! </span>
              )}
            </div>
          </div>
        </section>
      ) : (
        <Redirect to="/signup" />
      )}
    </>
  );
};

export default Payment;
