import React, { useEffect, useState } from "react";
import "./styles/stylePagination.css";

export const Pagination = ({ setviewPokemons, pokemons }) => {
  /* paginacion */
  const [currentPage, setCurrentPage] = useState(1);
  const pokemonsPorPage = 6;

  useEffect(() => {
    if (pokemons?.length < pokemonsPorPage) {
      setviewPokemons(pokemons);
    } else {
      const lastPokemons = currentPage * pokemonsPorPage;
      setviewPokemons(
        pokemons?.slice(lastPokemons - pokemonsPorPage, lastPokemons)
      );
    }
  }, [pokemons, currentPage]);

  let arrayPages = [];
  let pagesPerBlock = 5;
  let quantityPages = Math.ceil(pokemons?.length / pokemonsPorPage);
  let currentBlock = Math.ceil(currentPage / pagesPerBlock);

  if (currentBlock * pagesPerBlock >= quantityPages) {
    for (
      let i = currentBlock * pagesPerBlock - pagesPerBlock + 1;
      i <= quantityPages;
      i++
    ) {
      arrayPages.push(i);
    }
  } else {
    for (
      let i = currentBlock * pagesPerBlock - pagesPerBlock + 1;
      i <= currentBlock * pagesPerBlock;
      i++
    ) {
      arrayPages.push(i);
    }
  }

  const prevPages = () => {
    if (currentPage - 1 === 0) {
      setCurrentPage(quantityPages);
    } else {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPages = () => {
    if (currentPage + 1 > quantityPages) {
      setCurrentPage(1);
    } else {
      setCurrentPage(currentPage + 1);
    }
  };

  const changePageTo = (n) => setCurrentPage(n);

  return (
    <div className="container-pagination">
      <div onClick={prevPages} className="btn-prev">
        &#60;
      </div>

      <ul className="container-num">
        {arrayPages?.map((num) => (
          <li
            onClick={() => changePageTo(num)}
            key={num}
            className={
              currentPage === num ? `page-number page-active` : `page-number`
            }
          >
            {num}
          </li>
        ))}
      </ul>

      <div onClick={nextPages} className="btn-next">
        &#62;
      </div>
    </div>
  );
};
