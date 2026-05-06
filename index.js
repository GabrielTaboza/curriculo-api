require("dotenv").config();
const express = require("express");

const pessoaRoutes = require("./api/routes/pessoa");
const experienciaRoutes = require("./api/routes/experiencia");

const app = express();
app.use(express.json());

app.use(experienciaRoutes);
app.use("/pessoas", pessoaRoutes);
app.use("/pessoas", experienciaRoutes);

app.get("/", (req, res) => {
  res.send("API funcionando 🚀");
});

module.exports = app;