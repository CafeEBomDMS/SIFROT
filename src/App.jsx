import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Login from "./pages/login.jsx";
import Perfil from "./pages/perfil.jsx";
import Teste from "./pages/teste.jsx";
import { Background } from "./components/background.jsx";
import EscolherRelatorios from "./pages/escolherRelatorio.jsx";
import EscolherVeiculo from "./pages/escolherVeiculo.jsx";
import EscolherCadastro from "./pages/escolherCadastro.jsx";

import { getHello } from "./services/api.js"; // novo serviço

export default function App() {

  return (
    <BrowserRouter>
      <Background>
        {/* Mensagem de debug do backend */}

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/teste" element={<Teste />} />
          <Route path="/escolherVeiculo" element={<EscolherVeiculo />} />
          <Route path="/escolherRelatorios" element={<EscolherRelatorios />} />
          <Route path="/escolherCadastro" element={<EscolherCadastro />} />
        </Routes>
      </Background>
    </BrowserRouter>
  );
}
