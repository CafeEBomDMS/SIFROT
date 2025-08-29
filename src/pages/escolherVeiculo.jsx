import "../styles/escolherRelatorio.css";
import { Sidebar } from "../components/sidebar.jsx";

export default function EscolherVeiculo() {
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
                marginBottom: "13px",
              }}          
          >Escolha a categoria do veículo</h1>
          {/* Grid de relatórios */}
          <div className="relatorios-grid">
            <div className="relatorio-card">
              <div>
                <img src="/images/iconeB.png" alt="iconeLogistica" />
              </div>
              <h3 className="subtitulo">Categoria B</h3>
              <p className="descricao">veículos com capacidade maxima de 4 passageiros</p>
            </div>

            <div className="relatorio-card">
              <div>
                <img src="/images/iconeC.png" alt="iconeRequisitante" />
              </div>
              <h3 className="subtitulo">Categoria C</h3>
              <p className="descricao">veículos de carga <br/>acima de 3,5 toneladas <br/>não articulado</p>
            </div>

            <div className="relatorio-card">
              <div>
                <img src="/images/iconeD.png" alt="iconeMotorista" />
              </div>
              <h3 className="subtitulo">Categoria D</h3>
              <p className="descricao">Veículos com capacidade minima de 8+ passageiros</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
