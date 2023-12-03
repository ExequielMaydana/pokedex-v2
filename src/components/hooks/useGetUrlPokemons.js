import axios from "axios";
import { useEffect, useState } from "react";

const useGetUrlPokemons = () => {
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const [pokemonType, setPokemonType] = useState("");
  const [namePokeSearch, setNamePokeSearch] = useState("");

  useEffect(() => {
    if (pokemonType === "All Pokemons") {
      const URL = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1292";
      axios
        .get(URL)
        .then((res) => {
          setFilteredPokemons(res.data.results);
        })
        .catch((err) => console.log(err));
    } else if (pokemonType.length > 0) {
      const URL = `https://pokeapi.co/api/v2/type/${pokemonType}`;
      axios
        .get(URL)
        .then((res) => {
          const pokemonesPorType = res.data.pokemon.map((e) => e.pokemon);
          setFilteredPokemons(pokemonesPorType);
        })
        .catch((err) => console.log(err));
    }

    if (namePokeSearch.length > 0) {
      const URL = `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1292`;
      axios
        .get(URL)
        .then((res) => {
          const filteredResults = res.data.results.filter((pokemon) =>
            pokemon.name.includes(namePokeSearch.toLowerCase())
          );
          setFilteredPokemons(filteredResults);
        })
        .catch((err) => console.log(err));
    }
  }, [pokemonType, namePokeSearch]);

  return {
    filteredPokemons,
    setPokemonType,
    setNamePokeSearch,
  };
};

export default useGetUrlPokemons;
