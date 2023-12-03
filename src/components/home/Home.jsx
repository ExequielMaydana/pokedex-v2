import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { nameUserGlobal } from "../../store/slices/nameUser.slice";
import ModalError from "./ModalError";
import "./style/styleHome.css";

const Home = ({ setIsLogged }) => {
  const { register, handleSubmit } = useForm();

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
    if (data.name.trim() !== "") {
      dispatch(nameUserGlobal(data));
      setIsLogged(true);
      navigate("pokedex");
    } else {
      setModalError(true);
    }
  };

  return (
    <section className="raiz">
      {modalError ? <ModalError setModalError={setModalError} /> : null}
      <header className="header">
        <figure className="img-one">
          <img src="img-home/pokeball.png" alt="dragon" className="img" />
        </figure>
        <h2 className="raiz-title">Pokedex ReactJS</h2>
      </header>

      <form className="form" onSubmit={handleSubmit(submit)}>
        <div className="form-text">
          <h2>Hola aprendiz!</h2>
          <p>Para avanzar a la siguiente página debes proporcionar un nombre</p>
        </div>
        <div className="form-item">
          <label htmlFor="name" className="form-label">
            Tu nombre:
          </label>
          <input
            className="form-input"
            id="name"
            {...register("name", { maxLength: 10 })}
          />
        </div>
        <button className="form-btn">
          <p>Avanzar</p>
        </button>
      </form>
    </section>
  );
};

export default Home;
