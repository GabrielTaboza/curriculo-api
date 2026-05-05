require("dotenv").config();

const express = require("express");
const { pool } = require("./api/db");
const pessoaRoutes = require("./api/routes/pessoa");

const app = express();
app.use(express.json());
app.use("/pessoas", pessoaRoutes);

app.get("/", (req, res) => {
  res.send("API funcionando 🚀");
});

app.listen(3000, "0.0.0.0", () => {
  console.log("Servidor rodando na porta 3000");
});