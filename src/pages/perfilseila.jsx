import { useLocation } from "react-router-dom";

export default function Perfil() {
  const location = useLocation();
  const { tipoPerfil = "cpf", graphData } = location.state || {};

  // aqui você passa graphData para preencher automaticamente os campos
  // Exemplo:
  const userInicial = {
    nome: graphData?.displayName || "",
    email: graphData?.mail || graphData?.userPrincipalName || "",
    // ...outros campos
  };

  return <PerfilUnificado tipoPerfil={tipoPerfil} userInicial={userInicial} />;
}
