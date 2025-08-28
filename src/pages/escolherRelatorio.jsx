import "../styles/escolherRelatorio.css";
import { Sidebar } from "../components/sidebar.jsx";

export default function EscolherRelatorios() {
  return (
    <div className="app">
      {/* Sidebar */}
      <Sidebar></Sidebar>

      {/* Conteúdo */}
      <main className="content">
        <section className="card">
          {/* Logo e título */}
          <h1 className="titulo"
              style={{
                textAlign: "center",
                marginBottom: "24px",
                fontWeight: "800",
                marginTop: "-10px",
                marginBottom: "10px",
                fontsize: "222",
              }}          
          >Escolher Relatório</h1>
          {/* Grid de relatórios */}
          <div className="relatorios-grid">
            <div className="relatorio-card">
              <div>
                <img src="/images/iconeLogistica.png" alt="iconeLogistica" />
              </div>
              <p className="subtitulo">Logística</p>
            </div>

            <div className="relatorio-card">
              <div>
                <img src="/images/iconeRequisitante.png" alt="iconeRequisitante" />
              </div>
              <p className="subtitulo">Requisitantes</p>
            </div>

            <div className="relatorio-card"
              style={{
                background: "#1e3a8a",
                color: "#fff",
                borderradius: "12px",
                padding: "24px",
                textalign: "center",
                fontweight: "600",
                fontsize: "16px",
                cursor: "pointer",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
                boxshadow: "0 4px 12px rgba(0,0,0,0.1)",

                /* Aqui entram os ajustes para dar cara de "cartão" */
                minheight: "160px",
                display: "flex",
                flexdirection: "column",
                justifycontent: "center", /* centraliza vertical */
                alignitems: "center", 
              }}
            >
              <div>
                <img src="/images/iconeMotorista.png" alt="iconeMotorista" />
              </div>
              <p className="subtitulo">Motoristas</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
