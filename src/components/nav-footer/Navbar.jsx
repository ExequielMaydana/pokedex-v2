import React from "react";
import imagePokemon from "../../assets/imgs/pokemon-header.png";
import "./style/styleNav.css";

const Navbar = () => {
  return (
    <header className="header">
      <nav className="nav">
        <img src={imagePokemon} alt="pokemon" className="nav-img" />
      </nav>
    </header>
  );
};

export default Navbar;
