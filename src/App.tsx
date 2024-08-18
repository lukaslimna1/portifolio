// src/App.tsx
import React from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css"; // Importa o CSS global
import Home from "./paginas/home";
import Trabalhos from "./paginas/trabalhos";
import TrabalhoDetalhes from "./paginas/TrabalhoDetalhes"; // Importa o componente de detalhes
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App: React.FC = () => {
  return (
    <div className='content'>
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/trabalhos'
          element={<Trabalhos />}
        />
        <Route
          path='/trabalhos/:id'
          element={<TrabalhoDetalhes />}
        />{" "}
        {/* Rota para detalhes */}
      </Routes>
    </div>
  );
};

export default App;
