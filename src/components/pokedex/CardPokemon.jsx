import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useGetCharacters from "../hooks/useGetCharacters";
import "./style/styleCardPokemon.css";

const CardPokemon = ({ url }) => {

  const { characters } = useGetCharacters(url);
  
  const [pokemonSpecie, setPokemonSpecie] = useState();

  const navigate = useNavigate()

   /*
    En este hook hago una peticion a las especies de cada uno de mis characters y accedo al color.
    Para usar el color creo una clase en css ej -> background-blue.
    Y aca en el componente, en classname solo pongo background-${pokemonSpecie.name} ahi sigue lo que puse en la clase de css, 
    en este caso si el pokemon tiene el color blue, se pinta de blue.

    en los estilos cree todos los background y colors de las letras.
  */

    useEffect(() => {
      if (characters !== undefined) {
        axios
          .get(characters?.species.url)
          .then((res) => setPokemonSpecie(res.data.color))
          .catch((err) => console.log(err));
      }
    }, [characters]);

  // al hacer click sobre una card, me manda a la ruta '/pokedex:id' donde podre ver mas de mi pokemon.
  const goToPokemonId = () =>{
    navigate(`/pokedex/${characters?.id}`)
  }

  return (
    <article className={`card-pokemon background-${pokemonSpecie?.name}`} onClick={goToPokemonId}>
      <figure className="container-img-pokemon">
        <img
          src={characters?.sprites.other["home"].front_shiny}
          className="pokemon-img"
        />
      </figure>
      <div className="pokemon-text">
        <div className="pokemon-name">
          <h3 className={`color-${pokemonSpecie?.name}`}>{characters?.name}</h3>
          <p>
            {characters?.types[0].type.name}{" "}
            {characters?.types[1] && `/ ${characters?.types[1].type.name}`}
          </p>
          <span>tipo</span>
        </div>
        <ul className="container-characteristics">
          <li className={`characteristics-item color-${pokemonSpecie?.name}`}>
            <b>
              {characters?.stats[0].stat.name}:{" "}
            </b>
            {characters?.stats[0].base_stat}
          </li>
          <li className={`characteristics-item color-${pokemonSpecie?.name}`}>
            <b >
              {characters?.stats[1].stat.name}:{" "}
            </b>
            {characters?.stats[1].base_stat}
          </li>
          <li className={`characteristics-item color-${pokemonSpecie?.name}`}>
            <b >
              {characters?.stats[2].stat.name}:{" "}
            </b>
            {characters?.stats[2].base_stat}
          </li>
          <li className={`characteristics-item color-${pokemonSpecie?.name}`}>
            <b>
              {characters?.stats[5].stat.name}:{" "}
            </b>
            {characters?.stats[5].base_stat}
          </li>
        </ul>
      </div>
    </article>
  );
};

export default CardPokemon;
