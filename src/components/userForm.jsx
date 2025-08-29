import { useState } from "react";
import "../styles/global.css";

export function UserForm({ children, onSubmit, onClear }) {
  const [avatarUrl, setAvatarUrl] = useState(null);
  const [user, setUser] = useState({});
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
    if (onSubmit) onSubmit(user);
  }

  function handleClearClick() {
    setUser({});
    setAvatarUrl(null);
    setMensagem("");
    if (onClear) onClear();
  }

  return (
    <form onSubmit={handleSubmit}>
      {mensagem && (
        <div className={`alert ${mensagem.includes("sucesso") ? "ok" : "erro"}`}>
          {mensagem}
        </div>
      )}

      {/* Passa também o setUser */}
      {children({ user, handleChange, avatarUrl, handleAvatarChange, setUser })}

      <div className="actions">
        <button type="button" className="btn neutro" onClick={handleClearClick}>
          Limpar
        </button>
        <button type="submit" className="btn primario">
          Salvar
        </button>
      </div>
    </form>
  );
}
