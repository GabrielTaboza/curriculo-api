const express = require("express");
const cors = require("cors");

const pessoaRoutes = require("./api/routes/pessoa");
const experienciaRoutes = require("./api/routes/experiencia");

const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API Currículo funcionando 🚀");
});

app.use("/pessoas", pessoaRoutes);

app.use("/experiencias", experienciaRoutes);

app.listen(3000, "0.0.0.0", () => {
  console.log("Servidor rodando na porta 3000");
});