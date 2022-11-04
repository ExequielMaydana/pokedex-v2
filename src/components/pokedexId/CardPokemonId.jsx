import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import './styles/stylePokemonCardId.css'
import '../pokedex/style/styleCardPokemon.css'
import axios from 'axios';

/* use styled-components para que el color de los stats aumente o disminuya dependiendo d sus valor*/
const Stats = styled.div`
max-width: 100%;
padding: 5px;
background: rgb(200, 200, 200);
background: linear-gradient(
  90deg,
  rgba(232, 218, 53, 1) 0%,
  rgb(230, 74, 13) ${(props) => (props.stats * 100) / 150 - 10}%,
  rgb(230, 74, 13) ${(props) => (props.stats * 100) / 150}%,
  rgba(255, 255, 255, 0.5) ${(props) => (props.stats * 100) / 150}%,
  rgba(255, 255, 255, 0.5) 100%
);
`;

const CardPokemonId = ({pokemonId}) => {

    const [pokemonColors, setPokemonColors] = useState();

    useEffect(() => {
        if (pokemonId !== undefined) {
          axios
            .get(pokemonId?.species.url)
            .then((res) => setPokemonColors(res.data.color))
            .catch((err) => console.log(err));
        }
      }, [pokemonId]);

  return (
    <article className='card-pokemonId'>

        <figure className={`pokemonId-figure background-${pokemonColors?.name}`}>
            <img src={pokemonId?.sprites.other["home"].front_shiny} className="pokemonId-img"/>
            <figcaption className='pokemonId-id'>#{pokemonId?.id}</figcaption>
        </figure>

        <div className='container-name'>
            <hr/>
            <h1 className='pokemonId-name'>{pokemonId?.name}</h1>
            <hr/>
        </div>

        <section className='pokemonId-data'>
            <ul className='container-data'>
                <li className='data-item'>
                    <span>Peso</span>
                    <p>{pokemonId?.weight}</p>
                </li>
                <li className='data-item'>
                    <span>Altura</span>
                    <p>{pokemonId?.height}</p>
                </li>
            </ul>
        </section>

        <section className='section-types-hability'>
            <ul className='container-types-hability'>
                <li className='type'>
                    <span>Tipo</span>
                    <div className='types-text-type'>   
                        <p>{pokemonId?.types[0].type.name}</p>
                        {pokemonId?.types[1] && (
                        <p>{pokemonId?.types[1].type.name}</p>
                        )}
                    </div>
                </li>
                <li className='type'>
                     <span>Skill</span>  
                     <div className='types-text-skill'>   
                        <p>{pokemonId?.abilities[0].ability.name}</p>
                        {pokemonId?.types[1] && (
                        <p>{pokemonId?.abilities[1].ability.name}</p>
                        )}
                    </div>
                </li>
            </ul>
        </section>

        <section className='section-stats'>
                <div className='stats-title'>
                    <h3>Stats</h3>
                </div>

                <div className='container-stats-items'>
                    <div className='stats-text'>
                        <p>{pokemonId?.stats[0].stat.name}</p>
                        <p>{pokemonId?.stats[0].base_stat}/150</p>
                    </div>
                    <Stats
                        stats={pokemonId?.stats[0].base_stat}
                        className="stats-color"
                    />           
                </div>
                <div className='container-stats-items'>
                    <div className='stats-text'>
                        <p>{pokemonId?.stats[1].stat.name}</p>
                        <p>{pokemonId?.stats[1].base_stat}/150</p>
                    </div>
                    <Stats
                        stats={pokemonId?.stats[1].base_stat}
                        className="stats-color"
                    />           
                </div>

                <div className='container-stats-items'>
                    <div className='stats-text'>
                        <p>{pokemonId?.stats[2].stat.name}</p>
                        <p>{pokemonId?.stats[2].base_stat}/150</p>
                    </div>
                    <Stats
                        stats={pokemonId?.stats[2].base_stat}
                        className="stats-color"
                    />           
                </div>

                <div className='container-stats-items'>
                    <div className='stats-text'>
                        <p>{pokemonId?.stats[3].stat.name}</p>
                        <p>{pokemonId?.stats[3].base_stat}/150</p>
                    </div>
                    <Stats
                        stats={pokemonId?.stats[3].base_stat}
                        className="stats-color"
                    />           
                </div>
                <div className='container-stats-items'>
                    <div className='stats-text'>
                        <p>{pokemonId?.stats[4].stat.name}</p>
                        <p>{pokemonId?.stats[4].base_stat}/150</p>
                    </div>
                    <Stats
                        stats={pokemonId?.stats[4].base_stat}
                        className="stats-color"
                    />           
                </div>
                <div className='container-stats-items'>
                    <div className='stats-text'>
                        <p>{pokemonId?.stats[5].stat.name}</p>
                        <p>{pokemonId?.stats[5].base_stat}/150</p>
                    </div>
                    <Stats
                        stats={pokemonId?.stats[5].base_stat}
                        className="stats-color"
                    />           
                </div>
            </section>
    </article>
  )
}

export default CardPokemonId