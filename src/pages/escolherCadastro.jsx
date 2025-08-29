import "../styles/escolherRelatorio.css";
import { Sidebar } from "../components/sidebar.jsx";

export default function EscolherCadastro() {
  return (
    <div className="app">
      {/* Sidebar */}
      <Sidebar></Sidebar>

      {/* Conteúdo */}
      <main className="content">
        <section className="card"
          style={{
              width: "fit-content", /* se adapta ao conteúdo */
          }}
        >
          {/* Logo e título */}
          <h1 className="titulo"
              style={{
                textAlign: "center",
                marginBottom: "24px",
                fontWeight: "800",
                marginTop: "-10px",
              }}          
          >Vizualizar perfis</h1>
          {/* Grid de relatórios */}
          <div className="relatorios-grid">
            <div className="relatorio-card">
              <div>
                <img src="/images/iconeFrota.png" alt="iconeLogistica" />
              </div>
              <h3 className="subtitulo">Frota de veículos</h3>
            </div>

            <div className="relatorio-card">
              <div>
                <img src="/images/iconeLogistica.png" alt="iconeRequisitante" />
              </div>
              <h3 className="subtitulo">Logística e Administração</h3>
            </div>

            <div className="relatorio-card">
              <div>
                <img src="/images/iconeMotorista.png" alt="iconeMotorista" />
              </div>
              <h3 className="subtitulo">Motoristas</h3>
            </div>
            
            <div className="relatorio-card">
              <div>
                <img src="/images/iconeRequisitante.png" alt="iconeMotorista" />
              </div>
              <h3 className="subtitulo">Requisitantes</h3>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
