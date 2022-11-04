import React, { useEffect, useState } from 'react'
import './styles/stylePagination.css'


export const Pagination = ({pokemons, setArrayResidents, filterPokemon, setFilterPokemon}) => {

  /* paginacion */
  const [currentPage, setCurrentPage] = useState(1);

  const residentPerPage = 6; //cuantos pokemones quiero que se vean por pagina.
 
  useEffect(() => {
    if (pokemons.length < residentPerPage) {
        // aca preguntamos: si la cantidad de pokemones es menor que residentPerPage, se copien dentro del array
        setArrayResidents(pokemons)
      } else {
        const lastResident = currentPage * residentPerPage;
        setArrayResidents(pokemons.slice(
            lastResident - residentPerPage,
            lastResident
          )) 
      }

      if(filterPokemon?.lengh < residentPerPage){
        setFilterPokemon(pokemons)
      }else {
        const lastResident = currentPage * residentPerPage;
        setFilterPokemon(pokemons.slice(
          lastResident - residentPerPage,
          lastResident
        ))
      }
 }, [currentPage, pokemons])
 
  

  let arrayPages = [];
  let quantityPages = Math.ceil(pokemons.length / residentPerPage); //cantidad de paginas maxima
  const pagesPerBlock = 5; //cantidad de paginas por bloque
  let currentBlock = Math.ceil(currentPage / pagesPerBlock); //bloques

  // analiza si estamos en el ultimo bloque(true) o no (false)
  if (currentBlock * pagesPerBlock >= quantityPages) {
    // este if analiza si me paso de la cantidad de paginas.
    //cuando es el ultimo bloque
    for (
      let i = currentBlock * pagesPerBlock - pagesPerBlock + 1;
      i <= quantityPages;
      i++
    ) {
      arrayPages.push(i);
    }
    //cuando no es el ultimo bloque
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
    <div className='container-pagination'>

    <div onClick={prevPages} className="btn-prev">
      &#60;
    </div>

    <ul className='container-num'>
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
  )
}
