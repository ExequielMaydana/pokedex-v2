import axios from "axios";
import { useEffect, useState } from "react";

const useGetUrlPokemons = () => {
  /* en este hook traigo todas las url de los pokemones, 
    dependiendo del limite que ponga en la URL, luego llamo a este hook en Pokedex y mapeo estas URL,
    En PokemonCard llamo al otro hook y hago la peticion de cada pokemon.
    */

  const [pokemons, setPokemons] = useState([]);

    // con este estado controlo la pantalla de carga
    const [loading, setLoading] = useState(true);

    // aqui guardo el tipo que el usuario haya seleccionado para hacer el filtro por tipo.
    const [nameType, setNameType] = useState('All Pokemons')

  useEffect(() => {
    if(nameType === 'All Pokemons'){
      const URL = "https://pokeapi.co/api/v2/pokemon/?offset=1&limit=100";
      axios
        .get(URL)
        .then((res) => {
          setPokemons(res.data.results)
          setLoading(false)
        })
        .catch((err) => console.log(err));
    }else{
      const URL = `https://pokeapi.co/api/v2/type/${nameType}/`
      axios.get(URL)
      .then(res => {
        const pokemonesPorType = res.data.pokemon.map(e => e.pokemon)
        setPokemons(pokemonesPorType)
        setLoading(false)
      })
      .catch(err => console.log(err))
    }
  }, [nameType]);

  return { pokemons, setNameType, loading};
};

export default useGetUrlPokemons;
