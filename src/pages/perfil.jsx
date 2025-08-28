import { useState } from "react";
import "../styles/global.css";
import { Sidebar } from "../components/sidebar";

export default function Perfil() {
  const [avatarUrl, setAvatarUrl] = useState(null);
  const [user, setUser] = useState({
    nome: "",
    email: "",
    cpf: "",
    telefone: "",
    cargo: "",
  });
  const [mensagem, setMensagem] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  }

  function handleAvatarChange(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setAvatarUrl(reader.result);
    reader.readAsDataURL(file);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!user.nome || !user.email) {
      setMensagem("Preencha pelo menos nome e e-mail, campeão.");
      return;
    }
    setMensagem("Dados salvos com sucesso.");
  }

  return (
    <div className="app">
      {/* Sidebar */}
      <Sidebar></Sidebar>

      {/* Conteúdo */}
      <main className="content">
        <section className="card">
          <h1 className="titulo">Perfil</h1>

          {mensagem && (
            <div
              className={`alert ${
                mensagem.includes("sucesso") ? "ok" : "erro"
              }`}
              role="status"
            >
              {mensagem}
            </div>
          )}

          {/* Header do perfil */}
          <div className="profile-header">
            <div className="avatar-wrap">
              <img
                className="avatar"
                src={
                  avatarUrl ||
                  "https://via.placeholder.com/160x160.png?text=Avatar"
                }
                alt="Foto do perfil"
              />
              <label className="btn secundario">
                Trocar foto
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleAvatarChange}
                  style={{ display: "none" }}
                />
              </label>
            </div>

            <div className="header-info">
              <h2 className="nome-preview">{user.nome || "Seu Nome"}</h2>
              <p className="email-preview">{user.email || "seu@email.com"}</p>
              <p className="cargo-preview">{user.cargo || "Seu cargo"}</p>
            </div>
          </div>

          {/* Formulário */}
          <form className="form" onSubmit={handleSubmit}>
            <div className="grid">
              <div className="field">
                <label htmlFor="nome">Nome</label>
                <input
                  id="nome"
                  name="nome"
                  type="text"
                  value={user.nome}
                  onChange={handleChange}
                  placeholder="Fulano da Silva"
                />
              </div>

              <div className="field">
                <label htmlFor="email">E-mail</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={user.email}
                  onChange={handleChange}
                  placeholder="fulano@empresa.com"
                />
              </div>

              <div className="field">
                <label htmlFor="cpf">CPF</label>
                <input
                  id="cpf"
                  name="cpf"
                  type="text"
                  value={user.cpf}
                  onChange={handleChange}
                  placeholder="000.000.000-00"
                />
              </div>

              <div className="field">
                <label htmlFor="telefone">Telefone</label>
                <input
                  id="telefone"
                  name="telefone"
                  type="text"
                  value={user.telefone}
                  onChange={handleChange}
                  placeholder="(11) 99999-9999"
                />
              </div>

              <div className="field field-full">
                <label htmlFor="cargo">Cargo</label>
                <input
                  id="cargo"
                  name="cargo"
                  type="text"
                  value={user.cargo}
                  onChange={handleChange}
                  placeholder="Analista de Sistemas"
                />
              </div>
            </div>

            <div className="actions">
              <button
                type="button"
                className="btn neutro"
                onClick={() => {
                  setUser({
                    nome: "",
                    email: "",
                    cpf: "",
                    telefone: "",
                    cargo: "",
                  });
                  setAvatarUrl(null);
                  setMensagem("");
                }}
              >
                Limpar
              </button>
              <button type="submit" className="btn primario">
                Salvar
              </button>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
}
