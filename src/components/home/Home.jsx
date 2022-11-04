import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { nameUserGlobal } from "../../store/slices/nameUser.slice";
import useGetUrlPokemons from "../hooks/useGetUrlPokemons";
import Loading from "../loading/Loading";
import ModalError from "./ModalError";
import "./style/styleHome.css";

const Home = ({ setIsLogged }) => {
  const { register, handleSubmit } = useForm();

  const { loading } = useGetUrlPokemons();

  // este estado maneja cuando se muestra el modal de error.
  const [modalError, setModalError] = useState(false);

  // dispatch almacena el nombre en la store de redux
  const dispatch = useDispatch();

  // navigate nos dirije a la ruta /pokedex donde se muestran los pokemones
  const navigate = useNavigate();

  /* en esta funcion valido que introduzcan un nombre y no puros espacios.
    Tambien use la validacion de react-hook-form y agregue en el registo un maxLenght de 10 caracteres.
    Si el input esta vacio renderizo un modal, avisandole al usuaio del error.
  */
  const submit = (data) => {
    dispatch(nameUserGlobal(data));
    if (data.name.trim() !== "") {
      setIsLogged(true);
      navigate("pokedex");
    } else {
      setModalError(true);
      console.log("hola");
    }
  };

  return loading ? (
    <Loading />
  ) : (
    <section className="raiz">
      {modalError ? <ModalError setModalError={setModalError}/> : null}
      <div className="container-form">
        <form className="form" onSubmit={handleSubmit(submit)}>
          <div className="form-text">
            <h2>Hello traine!</h2>
          </div>
          <div className="form-item">
            <label htmlFor="name" className="form-label">
              Your name:
            </label>
            <input
              className="form-input"
              id="name"
              {...register("name", { maxLength: 10 })}
            />
          </div>
          <button className="form-btn">Go</button>
        </form>
      </div>
    </section>
  );
};

export default Home;
