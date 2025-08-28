import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login.jsx";
import Perfil from "./pages/perfil.jsx";
import Teste from "./pages/teste.jsx";
import { Background } from "./components/background.jsx";
import EscolherRelatorios from "./pages/escolherRelatorio.jsx";"./escolherRelatorio.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Background>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/teste" element={<Teste />} />
          <Route path="/escolherRelatorios" element={<EscolherRelatorios />} />
        </Routes>
      </Background>
    </BrowserRouter>
  );
}
