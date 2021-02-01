import React from "react";
import { Redirect } from "react-router-dom";

const Payment = props => {
  return (
    <>
      {props.token ? (
        <section className="bg-gray py-10">
          <div className="container">
            <h1 className="title-1 text-center pb-8">Résumé de la commande</h1>
            <div className="bg-white rounded p-8 w-4/5 mx-auto">
              <div className="flex justify-between pb-4">
                <p className="text-default">Commande</p>
                <p className="text-default">15 €</p>
              </div>
              <div className="flex justify-between pb-4">
                <p className="text-default">Frais protection acheteurs</p>
                <p className="text-default">1.50 €</p>
              </div>
              <div className="flex justify-between">
                <p className="text-default">Frais de port</p>
                <p className="text-default">3.00 €</p>
              </div>
              <hr className="text-default my-8" />
              <div className="flex justify-between pb-6">
                <p>
                  <strong>Total</strong>
                </p>
                <p>
                  <strong>19.5 €</strong>
                </p>
              </div>
              <p className="text-default pb-6">
                Il ne vous reste plus qu'un étape pour vous offrir
                <strong className="text-secondary">Josh V.</strong> Vous allez
                payer
                <strong className="text-secondary">19.5</strong> € (frais de
                protection et frais de port inclus).
              </p>
              <button className="btn w-full">Payer</button>
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
