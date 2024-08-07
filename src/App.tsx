// src/App.tsx
import React from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css"; // Importa o CSS global
import Home from "./paginas/home";

const App: React.FC = () => {
  return (
    <div className="content">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
