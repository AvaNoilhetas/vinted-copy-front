import axios from "axios";
import React, { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import trash from "./../assets/img/trash.svg";

const Publish = props => {
  let history = useHistory();
  const [file, setFile] = useState();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [condition, setCondition] = useState();
  const [brand, setBrand] = useState();
  const [size, setSize] = useState();
  const [color, setColor] = useState();
  const [price, setPrice] = useState();
  const [city, setCity] = useState();
  const [preview, setPreview] = useState();
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async event => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("image", file);
    formData.append("condition", condition);
    formData.append("city", city);
    formData.append("brand", brand);
    formData.append("size", size);
    formData.append("color", color);

    try {
      await axios
        .post(
          "https://vinted-copy-project.herokuapp.com/offer/publish",
          formData,
          {
            headers: {
              Authorization: "Bearer " + props.token,
              "Content-Type": "multipart/form-data"
            }
          }
        )
        .then(response => {
          alert(JSON.stringify(response.data));
          history.push("/");
        })
        .catch(error => {
          if (error.response) {
            setErrorMessage(error.response.data);
          }
        });
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleFile = event => {
    const value = event.target.files[0];
    setFile(value);
    setPreview(URL.createObjectURL(event.target.files[0]));
  };

  const handleTitle = event => {
    const value = event.target.value;
    setTitle(value);
  };

  const handleDescription = event => {
    const value = event.target.value;
    setDescription(value);
  };

  const handleBrand = event => {
    const value = event.target.value;
    setBrand(value);
  };

  const handleSize = event => {
    const value = event.target.value;
    setSize(value);
  };

  const handleCondition = event => {
    const value = event.target.value;
    setCondition(value);
  };

  const handleColor = event => {
    const value = event.target.value;
    setColor(value);
  };

  const handleCity = event => {
    const value = event.target.value;
    setCity(value);
  };

  const handlePrice = event => {
    const value = event.target.value;
    setPrice(value);
  };

  const handleDelete = () => {
    setFile();
    setPreview();
  };

  return (
    <>
      {props.token ? (
        <section className="bg-gray">
          <form onSubmit={handleSubmit} className="container py-10">
            <h1 className="title-1 pb-5">Vends ton article</h1>
            <div className="bg-white border border-default mb-5">
              {!preview && (
                <div className="border border-secondary border-dashed m-7 relative">
                  <input
                    type="file"
                    onChange={handleFile}
                    multiple
                    className="cursor-pointer relative block opacity-0 w-full h-full p-10 z-50"
                  />
                  <div className="text-center absolute top-0 right-0 left-0 m-auto py-7">
                    <button type="button" className="btn btn_light">
                      + Ajoute des photos
                    </button>
                  </div>
                </div>
              )}
              {preview && (
                <div className="relative h-72">
                  <img
                    className="mx-auto p-7 h-full w-auto"
                    src={preview}
                    alt=""
                  />
                  <div
                    className="absolute cursor-pointer bottom-4 right-4"
                    onClick={handleDelete}
                  >
                    <img src={trash} alt="" width="30px" height="30px" />
                  </div>
                </div>
              )}
            </div>
            <div className="bg-white border-default border mb-5">
              <div className="md:flex justify-between p-7">
                <p className="pt-3">Titre</p>
                <input
                  className="input max-w-lg lg:max-w-3xl"
                  placeholder="ex : Chemise Sézane verte"
                  type="text"
                  onChange={handleTitle}
                />
              </div>
              <hr className="text-default" />
              <div className="md:flex justify-between p-7">
                <p className="pt-3">Décris ton article</p>
                <textarea
                  className="input max-w-lg lg:max-w-3xl"
                  placeholder="ex : porté quelques fois, taille correctement"
                  type="text"
                  rows="4"
                  onChange={handleDescription}
                />
              </div>
            </div>

            <div className="bg-white border-default border mb-5">
              <div className="md:flex justify-between p-7">
                <p className="pt-3">Marque</p>
                <input
                  className="input max-w-lg lg:max-w-3xl"
                  placeholder="Sélectionne la marque "
                  type="text"
                  onChange={handleBrand}
                />
              </div>
              <hr className="text-default" />
              <div className="md:flex justify-between p-7">
                <p className="pt-3">Taille</p>
                <select
                  className="input max-w-lg lg:max-w-3xl"
                  onChange={handleSize}
                >
                  <option value="" disabled>
                    Sélectionne la taille
                  </option>
                  <option value="XXXS / 30 / 2">XXXS / 30 / 2</option>
                  <option value="XXS / 32 / 4">XXS / 32 / 4</option>
                  <option value="XS / 34 / 6">XS / 34 / 6</option>
                  <option value="S / 36 / 8">S / 36 / 8</option>
                  <option value="M / 38 / 10">M / 38 / 10</option>
                  <option value="L / 40 / 12">L / 40 / 12</option>
                  <option value="XL / 42 / 14">XL / 42 / 14</option>
                  <option value="XXL / 44 / 16">XXL / 44 / 16</option>
                  <option value="XXXL / 46 / 18">XXXL / 46 / 18</option>
                  <option value="4XL / 48 / 20">4XL / 48 / 20</option>
                  <option value="5XL / 50 / 22">5XL / 50 / 22</option>
                  <option value="6XL / 52 / 24">6XL / 52 / 24</option>
                  <option value="7XL / 54 / 26">7XL / 54 / 26</option>
                  <option value="8XL / 56 / 28">8XL / 56 / 28</option>
                  <option value="9XL / 58 / 30">9XL / 58 / 30</option>
                  <option value="Taille unique">Taille unique</option>
                  <option value="Autre">Autre</option>
                </select>
              </div>
              <hr className="text-secondary" />
              <div className="md:flex justify-between p-7">
                <p className="pt-3">État</p>
                <select
                  className="input max-w-lg lg:max-w-3xl"
                  onChange={handleCondition}
                >
                  <option value="" disabled>
                    Indique l'état de ton article
                  </option>
                  <option value="Neuf avec étiquette">
                    Neuf avec étiquette
                  </option>
                  <option value="Neuf sans étiquette">
                    Neuf sans étiquette
                  </option>
                  <option value="Très bon état">Très bon état</option>
                  <option value="Bon état">Bon état</option>
                  <option value="Satisfaisant">Satisfaisant</option>
                </select>
              </div>
              <hr className="text-secondary" />
              <div className="md:flex justify-between p-7">
                <p className="pt-3">Couleur</p>
                <input
                  className="input max-w-lg lg:max-w-3xl"
                  placeholder="Choisis 2 couleurs maximum"
                  type="text"
                  onChange={handleColor}
                />
              </div>
              <hr className="text-default" />
              <div className="md:flex justify-between p-7">
                <p className="pt-3">Ville</p>
                <input
                  className="input max-w-lg lg:max-w-3xl"
                  placeholder="Indique l'état de ton article"
                  type="text"
                  onChange={handleCity}
                />
              </div>
            </div>

            <div className="bg-white border-default border mb-5">
              <div className="md:flex justify-between p-7">
                <p className="pt-3">Prix</p>
                <input
                  className="input max-w-lg lg:max-w-3xl"
                  placeholder="0,00 €"
                  type="number"
                  onChange={handlePrice}
                />
              </div>
            </div>
            {errorMessage && (
              <p className="font-normal text-center text-red text-sm mt-4">
                {errorMessage}
              </p>
            )}
            <div className="text-right">
              <button type="submit" className="btn">
                Ajouter
              </button>
            </div>
          </form>
        </section>
      ) : (
        <Redirect to="/" />
      )}
    </>
  );
};

export default Publish;
