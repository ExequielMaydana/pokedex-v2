import React, { useEffect, useState } from "react";
import "./style/styleInputName.css";
import axios from "axios";

const InputSearchName = ({ setNamePokeSearch, setPokemonType }) => {
  const [types, setTypes] = useState();

  const changeInputText = (e) => {
    setNamePokeSearch(e.target.value);
  };

  const changeSelect = (e) => {
    setPokemonType(e.target.value);
  };

  useEffect(() => {
    const URL = "https://pokeapi.co/api/v2/type";
    axios
      .get(URL)
      .then((res) => setTypes(res.data.results))
      .catch((err) => console.log(err));
  }, []);

  return (
    <article className="container-form-pokedex">
      <div className="pokedex-form-item">
        <label htmlFor="pokemon" className="form-label">
          Busca un Pokémon:
        </label>
        <input
          onChange={changeInputText}
          type="text"
          placeholder="ej: bulbasaur"
          id="pokemon"
          className="pokedex-form-input"
        />
        <ul></ul>
      </div>
      <div className="pokedex-form-item">
        <label htmlFor="pokemontype" className="form-label">
          Filtra los Pokémon por tipo:
        </label>
        <select
          className="selected-type"
          id="pokemontype"
          onChange={changeSelect}
        >
          <option value="All Pokemons">Todos los Pokémon</option>
          {types?.map((type) => (
            <option value={type.name} key={type.url} className="type-option">
              {type.name}
            </option>
          ))}
        </select>
      </div>
    </article>
  );
};

export default InputSearchName;
