import React from "react";
import './style/styleInputName.css'

const InputSearchName = ({ setPokeSearch, types, setNameType }) => {

  const changeInputText = e => {
    setPokeSearch(e.target.value)
  }

  const changeSelect = e => {
    setNameType(e.target.value)
  }


  return (
    <article className="container-form-pokedex">
      <form className="pokedex-form">
        <div className="pokedex-form-item">
          <input 
          onChange={changeInputText}
          type="text" 
          placeholder="Busca un pokemon" 
          className="pokedex-form-input"
          />
        </div>
      </form>
      <select className="selected-type" onChange={changeSelect}>
      <option value='All Pokemons'>All Pokemons</option>
          {
            types?.map(type => (
              <option value={type.name} key={type.url} className="type-option">{type.name}</option>
            ))
          }
        </select>
    </article>
  );
};

export default InputSearchName;
