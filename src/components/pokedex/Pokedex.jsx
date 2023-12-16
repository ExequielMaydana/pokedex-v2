import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import InputSearchName from "../filters/InputSearchName";
import useGetUrlPokemons from "../hooks/useGetUrlPokemons";
import { Pagination } from "../pagination/Pagination";
import "./style/stylePokedex.css";
import MemoizedCardPokemon from "./CardPokemon";

const Pokedex = () => {
  const nameUser = useSelector((state) => state.name); // Asegúrate de usar 'name' en lugar de 'nameUser'

  const { filteredPokemons, setPokemonType, setNamePokeSearch } =
    useGetUrlPokemons();

  const [todoPokemons, setTodoPokemons] = useState({});
  const [viewPokemons, setviewPokemons] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1292")
      .then((res) => setTodoPokemons(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="pokedex">
      <header className="pokedex-header">
        <figure className="header-container_img">
          <img
            src="/pokedex/pokemon.png"
            alt="imagen header"
            className="header-img"
          />
        </figure>
        <h2 className="title-nameUser">
          Bienvenido/a <b>{nameUser}</b>, aquí puedes encontrar tu Pokémon
          favorito.
        </h2>
        <InputSearchName
          setNamePokeSearch={setNamePokeSearch}
          setPokemonType={setPokemonType}
          filteredPokemons={filteredPokemons}
        />
      </header>
      <article className="content">
        {filteredPokemons.length === 0 ? (
          <>
            <Pagination
              setviewPokemons={setviewPokemons}
              pokemons={todoPokemons.results}
            />

            <div className="container-cards">
              {viewPokemons?.map((pokemon) => (
                <MemoizedCardPokemon key={pokemon.name} url={pokemon.url} />
              ))}
            </div>

            <Pagination
              setviewPokemons={setviewPokemons}
              pokemons={todoPokemons.results}
            />
          </>
        ) : (
          <>
            <Pagination
              setviewPokemons={setviewPokemons}
              pokemons={filteredPokemons}
            />

            <div className="container-cards">
              {viewPokemons?.map((pokemon) => (
                <MemoizedCardPokemon key={pokemon.name} url={pokemon.url} />
              ))}
            </div>

            <Pagination
              setviewPokemons={setviewPokemons}
              pokemons={filteredPokemons}
            />
          </>
        )}
      </article>
    </section>
  );
};

export default Pokedex;
