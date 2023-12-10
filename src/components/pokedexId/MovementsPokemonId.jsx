import React from "react";
import "./styles/styleMovements.css";

const MovementsPokemonId = ({ pokemonId }) => {
  return (
    <article className="card-movements">
      <header className="movements-header">
        <h3 className="movements-title">Movements</h3>
        <div></div>
      </header>

      <div className="card-content">
        {pokemonId?.moves.map((moves) => (
          <article key={moves.move.name} className="list-names">
            <span className="name-movements">{moves.move.name}</span>
          </article>
        ))}
      </div>
    </article>
  );
};

export default MovementsPokemonId;
