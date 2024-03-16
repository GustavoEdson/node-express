import express, { response } from "express";
import cors from "cors";
const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send(`
  <form action="" method="POST">
  Nome: <input type="text" name="name">
  <button>Enviar</button>
  </form>
  `);
});

app.post("/", (req, res) => {
  res.send("Recebi o formulario");
});

app.get("/contato", (req, res) => {
  res.send("Obrigado por entrar em contato com a gente!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// localhost:3000
