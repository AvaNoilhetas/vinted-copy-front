import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import React, { useState } from "react";
import { Redirect, useLocation } from "react-router-dom";
import info from "./../assets/img/info.svg";

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
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async event => {
    event.preventDefault();
    setIsLoading(true);

    const cardElement = elements.getElement(CardElement);
    const stripeResponse = await stripe.createToken(cardElement, {
      name: props.token
    });

    const stripeToken = stripeResponse.token.id;

    const response = await axios.post(
      "https://vinted-copy-project.herokuapp.com/payment",
      {
        amount: stripeTotal,
        description: title,
        stripeToken
      }
    );

    if (response.data.status === "succeeded") {
      setCompleted(true);
      setIsLoading(false);
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
              <div className="relative">
                {isLoading && (
                  <div className="absolute flex items-center justify-center bg-white h-full w-full">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                  </div>
                )}
                {!completed ? (
                  <form onSubmit={handleSubmit}>
                    <CardElement className="pb-6" />
                    <button type="submit" className="btn w-full">
                      Valider
                    </button>
                  </form>
                ) : (
                  <div
                    className="bg-lightPrimary border-t-4 border-primary rounded-b shadow-md my-2 px-4 py-3"
                    role="alert"
                  >
                    <div className="flex items-center text-dark">
                      <img className="mr-5" src={info} alt="" />
                      <div>
                        <p className="font-bold">Paiement effectué !</p>
                        <p className="text-sm">
                          Votre achat sera bientôt envoyé !
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
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
