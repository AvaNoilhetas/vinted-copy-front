import axios from "axios";
import React, { useState } from "react";
import { Redirect } from "react-router-dom";

const Publish = props => {
  const [file, setFile] = useState();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [condition, setCondition] = useState();
  const [brand, setBrand] = useState();
  const [size, setSize] = useState();
  const [color, setColor] = useState();
  const [price, setPrice] = useState();
  const [city, setCity] = useState();

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
      const response = await axios.post(
        "https://vinted-copy-project.herokuapp.com/offer/publish",
        formData,
        {
          headers: {
            Authorization: "Bearer " + props.token,
            "Content-Type": "multipart/form-data"
          }
        }
      );

      alert(JSON.stringify(response.data));
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <>
      {props.token ? (
        <form onSubmit={handleSubmit}>
          <h1 className="title-1 text-center pb-6">Vends ton article</h1>
          <div>
            <input
              type="file"
              onChange={event => setFile(event.target.files[0])}
            />
          </div>
          <div>
            <div>
              <p>Titre</p>
              <input
                type="text"
                onChange={event => setTitle(event.target.value)}
              />
            </div>
            <div>
              <p>Décris ton article</p>
              <input
                type="text"
                onChange={event => setDescription(event.target.value)}
              />
            </div>
          </div>
          <div>
            <div>
              <p>Marque</p>
              <input
                type="text"
                onChange={event => setBrand(event.target.value)}
              />
            </div>
            <div>
              <p>Taille</p>
              <input
                type="text"
                onChange={event => setSize(event.target.value)}
              />
            </div>
            <div>
              <p>État</p>
              <input
                type="text"
                onChange={event => setCondition(event.target.value)}
              />
            </div>
            <div>
              <p>Couleur</p>
              <input
                type="text"
                onChange={event => setColor(event.target.value)}
              />
            </div>
            <div>
              <p>Ville</p>
              <input
                type="text"
                onChange={event => setCity(event.target.value)}
              />
            </div>
          </div>
          <div>
            <div>
              <p>Prix</p>
              <input
                type="text"
                onChange={event => setPrice(event.target.value)}
              />
            </div>
          </div>
          <button type="submit">Valider</button>
        </form>
      ) : (
        <Redirect to="/" />
      )}
    </>
  );
};

export default Publish;
