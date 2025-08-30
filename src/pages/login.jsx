import "../styles/login.css";
import { msalInstance, initializeMSAL } from "../msalConfig";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [account, setAccount] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    initializeMSAL().catch(console.error);
  }, []);

  async function handleMicrosoftLogin() {
    try {
      const response = await msalInstance.loginPopup({
        scopes: ["User.Read"],
      });

      setAccount(response.account);
      console.log("Usuário logado:", response.account);

      // Pega dados do Microsoft Graph
      const tokenResponse = await msalInstance.acquireTokenSilent({
        scopes: ["User.Read"],
        account: response.account,
      });

      const graphResponse = await fetch("https://graph.microsoft.com/v1.0/me", {
        headers: { Authorization: `Bearer ${tokenResponse.accessToken}` },
      });

      const graphData = await graphResponse.json();
      console.log("Dados do Graph:", graphData);

      // Decide tipo de perfil automaticamente (exemplo: se usuário tiver CNH, tipo "cnh", senão "cpf")
      const tipoPerfil = graphData.jobTitle?.toLowerCase().includes("motorista") ? "cnh" : "cpf";

      // Redireciona para a página de perfil passando dados
      navigate("/perfil", { state: { tipoPerfil, graphData } });
    } catch (err) {
      console.error("Erro ao logar:", err);
    }
  }

  function handleLogout() {
    msalInstance.logoutPopup();
    setAccount(null);
  }

  return (
    <main className="content-login">
      <section className="card">
        <div className="titulo-imagem-login">
          <img src="/images/logoSifrot.png" alt="Microsoft Logo" />
        </div>
        <p className="gradient-subtitle-login">Senac</p>

        {account ? (
          <div>
            <p>Olá, {account.name}</p>
            <button className="ms-login-btn-login" onClick={handleLogout}>
              Logout
            </button>
          </div>
        ) : (
          <button className="ms-login-btn-login" onClick={handleMicrosoftLogin}>
            <img src="/images/btnMicrosoft.png" alt="Sign in with Microsoft" />
          </button>
        )}
      </section>
    </main>
  );
}
