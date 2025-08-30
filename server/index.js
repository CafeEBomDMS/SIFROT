const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors()); // permite requisições do frontend
app.use(express.json()); // para receber JSON

// Rota de teste
app.get("/profile", (req, res) => {
  res.json({ message: "Aqui você pode receber dados do usuário via frontend" });
});

app.listen(5000, () => console.log("Servidor rodando em http://localhost:5000"));
