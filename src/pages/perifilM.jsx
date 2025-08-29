import { Sidebar } from "../components/sidebar";
import { UserForm } from "../components/userForm";

export default function PerfilM({ tipoPerfil = "cnh" }) {
  // tipoPerfil pode ser "cpf" ou "cnh" ou qualquer outro
  const camposExtras =
    tipoPerfil === "cnh"
      ? [
          { id: "cnh", label: "CNH", placeholder: "123456789" },
          { id: "cnhTipos", label: "Tipo de CNH" },
        ]
      : [{ id: "cpf", label: "CPF", placeholder: "000.000.000-00" }];

  return (
    <div className="app">
      <Sidebar />

      <main className="content">
        <section className="card">
          <h1 className="titulo">Perfil</h1>

          <UserForm onSubmit={(dados) => console.log("Dados salvos:", dados)}>
            {({ user, handleChange, avatarUrl, handleAvatarChange, setUser }) => (
              <>
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
                    <p className="email-preview">
                      {user.email || "seu@email.com"}
                    </p>
                    <p className="cargo-preview">{user.cargo || "Seu cargo"}</p>
                  </div>
                </div>

                {/* Campos do formulário */}
                <div className="grid">
                  <div className="field">
                    <label htmlFor="nome">Nome</label>
                    <input
                      id="nome"
                      name="nome"
                      type="text"
                      value={user.nome || ""}
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
                      value={user.email || ""}
                      onChange={handleChange}
                      placeholder="fulano@empresa.com"
                    />
                  </div>

                  {camposExtras.map((campo) => {
                    if (campo.id === "cnhTipos") {
                      return (
                        <div key={campo.id} className="tipo-cnh">
                          <label>{campo.label}</label>
                          <div className="checkbox-group">
                            {["B", "C", "D"].map((tipo) => (
                              <label key={tipo} style={{ marginRight: "12px" }}>
                                <input
                                  type="checkbox"
                                  name="cnhTipos"
                                  value={tipo}
                                  checked={
                                    user.cnhTipos?.includes(tipo) || false
                                  }
                                  onChange={(e) => {
                                    const value = e.target.value;
                                    setUser((prev) => {
                                      const atuais = prev.cnhTipos || [];
                                      return e.target.checked
                                        ? {
                                            ...prev,
                                            cnhTipos: [...atuais, value],
                                          }
                                        : {
                                            ...prev,
                                            cnhTipos: atuais.filter(
                                              (v) => v !== value
                                            ),
                                          };
                                    });
                                  }}
                                />
                                {tipo}
                              </label>
                            ))}
                          </div>
                        </div>
                      );
                    }

                    // caso padrão (CPF, CNH número, etc.)
                    return (
                      <div key={campo.id} className="field">
                        <label htmlFor={campo.id}>{campo.label}</label>
                        <input
                          id={campo.id}
                          name={campo.id}
                          type="text"
                          value={user[campo.id] || ""}
                          onChange={handleChange}
                          placeholder={campo.placeholder}
                        />
                      </div>
                    );
                  })}

                  <div className="field field-full">
                    <label htmlFor="telefone">Telefone</label>
                    <input
                      id="telefone"
                      name="telefone"
                      type="text"
                      value={user.telefone || ""}
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
                      value={user.cargo || ""}
                      onChange={handleChange}
                      placeholder="Analista de Sistemas"
                    />
                  </div>
                </div>
              </>
            )}
          </UserForm>
        </section>
      </main>
    </div>
  );
}
