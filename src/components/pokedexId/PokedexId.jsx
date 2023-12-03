import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardPokemonId from "./CardPokemonId";
import MovementsPokemonId from "./MovementsPokemonId";
import "./styles/stylePokedexId.css";

const PokedexId = () => {
  const { id } = useParams();

  const [pokemonId, setPokemonId] = useState();

  console.log(pokemonId);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then((res) => setPokemonId(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="pokedexId">
      <CardPokemonId pokemonId={pokemonId} />
      <MovementsPokemonId pokemonId={pokemonId} />
    </section>
  );
};

export default PokedexId;
