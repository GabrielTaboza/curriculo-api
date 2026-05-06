const service = require("../services/experienciaService");

async function getExperiencias(req, res) {
  const data = await service.listarPorPessoa(req.params.id);
  res.json(data);
}

async function postExperiencia(req, res) {
  const nova = await service.criar(req.params.id, req.body);
  res.json(nova);
}

module.exports = {
  getExperiencias,
  postExperiencia,
};