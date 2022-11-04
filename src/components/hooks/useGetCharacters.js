import axios from "axios";
import { useEffect, useState } from "react";

const useGetCharacters = (url) => {
  /* esta url se la paso en PokemonCard */

  const [characters, setCharacters] = useState();

  useEffect(() => {
    if(url !== undefined){
      axios
      .get(url)
      .then((res) => setCharacters(res.data))
      .catch((err) => console.log(err));
    } 
   
  }, []);
  

  return { characters };
};

export default useGetCharacters;
