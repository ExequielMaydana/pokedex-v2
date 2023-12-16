import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import ProtectedRoutes from "./components/ProtectedRoutes";
import { useState } from "react";
import Pokedex from "./components/pokedex/Pokedex";
import PokedexId from "./components/pokedexId/PokedexId";
import { store } from "./store";

function App() {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home setIsLogged={setIsLogged} />} />
        <Route element={<ProtectedRoutes isLogged={isLogged} />}>
          <Route path="/pokedex" element={<Pokedex />} />
          <Route path="/pokedex/:id" element={<PokedexId />} />
          <Route path="/pokedex/favorite" element={""} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
