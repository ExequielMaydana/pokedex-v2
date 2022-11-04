import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import InputSearchName from "../filters/InputSearchName";
import useGetUrlPokemons from "../hooks/useGetUrlPokemons";
import { Pagination } from "../pagination/Pagination";
import CardPokemon from "./CardPokemon";
import Loading from "../loading/Loading";
import "./style/stylePokedex.css";

const Pokedex = () => {
  // accedo al nombre guardado en la store de Redux
  const nameUser = useSelector((state) => state.nameUser);

  const { pokemons, setNameType, loading } = useGetUrlPokemons();

  const [arrayResidents, setArrayResidents] = useState([]);

  // esta estado lo paso como prop al inputSearchName para recibir el nombre del pokemon.
  const [pokeSearch, setPokeSearch] = useState();

  // aqui guardo el nombre del pokemon filtrado
  const [filterPokemon, setFilterPokemon] = useState();

  // en este estado guardo los tipos para filtrar pokemones por tipo.
  const [types, setTypes] = useState();

  // aqui pregunto si el nombre del pokemon que paso el usuario coincide con alguno y lo guardo en filterPokemon.
  // meto esta logica en un useEffect para que no se cicle.
  useEffect(() => {
    if (pokeSearch) {
      setFilterPokemon(
        pokemons.filter((e) => e.name.includes(pokeSearch.toLowerCase()))
      );
    }
  }, [pokeSearch]);

  useEffect(() => {
    const URL = "https://pokeapi.co/api/v2/type/";
    axios
      .get(URL)
      .then((res) => setTypes(res.data.results))
      .catch((err) => console.log(err));
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <section className="pokedex">
      <div className="pokedex-title">
        <h2 className="title-nameUser">
          Welcome <b>{nameUser.name}</b>, here you can find your favorite
          pokemon.
        </h2>
      </div>

      <div className="container-inputSearchName">
        <InputSearchName
          setPokeSearch={setPokeSearch}
          types={types}
          setNameType={setNameType}
        />
      </div>

        <Pagination
          pokemons={pokemons}
          setArrayResidents={setArrayResidents}
          filterPokemon={filterPokemon}
          setFilterPokemon={setFilterPokemon}
        />

      {/* aca pregunto si filterPokemon es TRUE, es decir, si filtre algun pokemon, mapeo ese pokemon filtrado. */}
      <div className="container-cards">
        {filterPokemon
          ? filterPokemon.map((pokemon) => (
              <CardPokemon key={pokemon.name} url={pokemon.url} />
            ))
          : arrayResidents?.map((pokemon) => (
              <CardPokemon key={pokemon.name} url={pokemon.url} />
            ))}
      </div>
    </section>
  );
};

export default Pokedex;
