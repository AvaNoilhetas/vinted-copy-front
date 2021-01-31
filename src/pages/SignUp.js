import axios from "axios";
import Cookies from "js-cookie";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import avatar from "./../assets/img/avatar.svg";
import trash from "./../assets/img/trash.svg";

const SignUp = props => {
  let history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [file, setFile] = useState();
  const [preview, setPreview] = useState();

  const handleFile = event => {
    const value = event.target.files[0];
    setFile(value);
    setPreview(URL.createObjectURL(event.target.files[0]));
  };

  const handleDelete = () => {
    setFile();
    setPreview();
  };

  const handleName = event => {
    const value = event.target.value;
    setName(value);
  };

  const handleEmail = event => {
    const value = event.target.value;
    setEmail(value);
  };

  const handlePassword = event => {
    const value = event.target.value;
    setPassword(value);
  };

  const handlePhone = event => {
    const value = event.target.value;
    setPhone(value);
  };

  const handleSubmit = async event => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("email", email);
    formData.append("username", name);
    formData.append("phone", phone);
    formData.append("password", password);
    formData.append("avatar", file);

    try {
      await axios
        .post(
          "https://vinted-copy-project.herokuapp.com/user/sign_up",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data"
            }
          }
        )
        .then(response => {
          Cookies.set("token", response.data.token, { expires: 7 });
          props.setToken(response.data.token);
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

  return (
    <form
      onSubmit={handleSubmit}
      className="container flex justify-center py-10"
    >
      <div className="lg:w-1/4 sm:w-1/2">
        <h1 className="title-1 text-center pb-6">S'inscrire</h1>
        {!preview && (
          <div className="relative">
            <input
              type="file"
              onChange={handleFile}
              multiple
              className="cursor-pointer relative block opacity-0 w-full h-56 z-50"
            />
            <div className="text-center absolute top-0 right-0 left-0 m-auto">
              <div className="flex items-center justify-center border border-secondary border-dashed rounded-full w-32 h-32 mx-auto mb-4 cursor-pointer">
                <img src={avatar} alt="avatar" />
              </div>
              <button type="button" className="btn btn_light inline-block mb-5">
                + Ajoute des photos
              </button>
            </div>
          </div>
        )}
        {preview && (
          <div className="relative h-32 mb-4">
            <div className="border border-secondary border-dashed rounded-full overflow-hidden h-32 w-32 mx-auto">
              <img className="object-cover" src={preview} alt="avatar" />
            </div>
            <div
              className="absolute cursor-pointer bottom-0 right-0"
              onClick={handleDelete}
            >
              <img src={trash} alt="" width="30px" height="30px" />
            </div>
          </div>
        )}
        <input
          className="input focus:ring"
          type="text"
          placeholder="Nom d'utilisateur"
          id="name"
          name="name"
          value={name}
          onChange={handleName}
        />
        <input
          id="email"
          name="email"
          value={email}
          onChange={handleEmail}
          className="input"
          type="email"
          placeholder="Email"
        />
        <input
          id="password"
          name="password"
          value={password}
          onChange={handlePassword}
          className="input"
          type="password"
          placeholder="Mot de passe"
        />
        <input
          id="phone"
          name="phone"
          value={phone}
          onChange={handlePhone}
          className="input"
          type="tel"
          placeholder="Téléphone"
        />
        <label className="inline-flex items-center mt-3">
          <input type="checkbox" className="checkbox" />
          <span className="ml-2 text-gray-700">S'inscrire à la newsletter</span>
        </label>
        {errorMessage && (
          <p className="font-normal text-center text-red text-sm mt-4">
            {errorMessage}
          </p>
        )}
        <button type="submit" value="Submit" className="btn w-full mt-6">
          S'inscrire
        </button>
        <Link to="/signin" className="block link text-center mt-3">
          Tu as déjà un compte ? Connecte-toi !
        </Link>
      </div>
    </form>
  );
};

export default SignUp;
