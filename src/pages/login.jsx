import "../styles/login.css";

export default function Login() {
  function handleMicrosoftLogin() {
    alert("Login com Microsoft clicado!");
  }

  return (
    <main className="content-login">
      <section className="card">
        <div className="titulo-imagem-login">
          <img src="/images/logoSifrot.png" alt="Microsoft Logo" />
        </div>
        <p className="gradient-subtitle-login">Senac</p>
        <button className="ms-login-btn-login" onClick={handleMicrosoftLogin}>
          <img src="/images/btnMicrosoft.png" alt="Sign in with Microsoft" />
        </button>
      </section>
    </main>
  );
}
