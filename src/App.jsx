import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import ProtectedRoutes from "./components/ProtectedRoutes";
import { useState } from "react";
import Navbar from "./components/nav-footer/Navbar";
import Footer from "./components/nav-footer/Footer";
import Pokedex from "./components/pokedex/Pokedex";
import PokedexId from "./components/pokedexId/PokedexId";

function App() {
  // con este estado controlo las rutas protegidas.
  const [isLogged, setIsLogged] = useState(false);

  return (
    <div className="App">
      <Navbar />

      <Routes>
        {/* Ruta raiz */}
        <Route path="/" element={<Home setIsLogged={setIsLogged} />} />

        {/* Rutas protegidas */}
        <Route element={<ProtectedRoutes isLogged={isLogged} />}>
          <Route path="/pokedex" element={<Pokedex />} />
          <Route path="/pokedex/:id" element={<PokedexId/>} />
          <Route path="/pokedex/favorite" element={""} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
