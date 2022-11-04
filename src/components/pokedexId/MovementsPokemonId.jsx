import React from 'react'
import vector from '../../assets/Vector-9.svg'
import './styles/styleMovements.css'



const MovementsPokemonId = ({pokemonId}) => {


  return (
    <article className='card-movements'>
        <section className='movements-title'>
            <h3>Movements</h3>
            <img src={vector} className="movements-vector"/>
        </section>

        <section className='movements-container-list'>
            <div className='list-container-names'>
            {
                pokemonId?.moves.map(moves => (
                  <div key={moves.move.name} className="list-names">
                    <span className='name-movements'>{moves.move.name}</span>
                  </div>
                ))
            }
            </div>
           
        </section>


    </article>
  )
}

export default MovementsPokemonId