export function Background({ children }) {
  return (
    <div
      className="background"
      style={{
        backgroundImage: 'url("/images/fundoSenac.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      {children}
    </div>
  );
}
