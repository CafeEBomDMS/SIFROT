import "../styles/escolherRelatorio.css";
import { Sidebar } from "../components/sidebar.jsx";

export default function EscolherRelatorios() {
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
                fontWeight: "800",
                marginTop: "-10px",
                marginBottom: "10px",
              }}          
          >Vizualizar Relatório</h1>
          {/* Grid de relatórios */}
          <div className="relatorios-grid">
            <div className="relatorio-card">
              <div>
                <img src="/images/iconeLogistica.png" alt="iconeLogistica" />
              </div>
              <h3 className="subtitulo">Logística</h3>
            </div>

            <div className="relatorio-card">
              <div>
                <img src="/images/iconeRequisitante.png" alt="iconeRequisitante" />
              </div>
              <h3 className="subtitulo">Requisitantes</h3>
            </div>

            <div className="relatorio-card">
              <div>
                <img src="/images/iconeMotorista.png" alt="iconeMotorista" />
              </div>
              <h3 className="subtitulo">Motoristas</h3>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
