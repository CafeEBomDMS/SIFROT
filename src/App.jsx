import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login.jsx";
import PerfilRLA from "./pages/perfilRLA.jsx";
import PerfilM from "./pages/perifilM.jsx";
import Teste from "./pages/teste.jsx";
import { Background } from "./components/background.jsx";
import EscolherRelatorios from "./pages/escolherRelatorio.jsx";"./escolherRelatorio.jsx";
import EscolherVeiculo from "./pages/escolherVeiculo.jsx";
import EscolherCadastro from "./pages/escolherCadastro.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Background>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/perfilRLA" element={<PerfilRLA />} />
          <Route path="/perfilM" element={<PerfilM />} />
          <Route path="/teste" element={<Teste />} />
          <Route path="/escolherVeiculo" element={<EscolherVeiculo />} />
          <Route path="/escolherRelatorios" element={<EscolherRelatorios />} />
          <Route path="/escolherCadastro" element={<EscolherCadastro />} />
        </Routes>
      </Background>
    </BrowserRouter>
  );
}
