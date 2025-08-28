export function Sidebar({ children }) {
  return (
    <aside className="sidebar">
      <div className="logo">SI</div>
      <nav className="nav">
        <button className="nav-btn active" title="Relatórios">
          📊
        </button>
        <button className="nav-btn" title="Perfil">
          👤
        </button>
        <button className="nav-btn" title="Configurações">
          ⚙️
        </button>
      </nav>
    </aside>
  );
}
