const service = require("../services/experienciaService");

async function postExperiencia(req, res) {
  try {
    const { id } = req.params;
    const experiencia = await service.criarExperiencia(id, req.body);
    res.status(201).json(experiencia);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getExperiencias(req, res) {
  try {
    const { id } = req.params;
    const lista = await service.listarExperiencias(id);
    res.json(lista);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function putExperiencia(req, res) {
  try {
    const { id } = req.params;
    const experiencia = await service.atualizarExperiencia(id, req.body);
    res.json(experiencia);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function deleteExperiencia(req, res) {
  try {
    const { id } = req.params;
    await service.deletarExperiencia(id);
    res.json({ message: "Experiência deletada" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  postExperiencia,
  getExperiencias,
  putExperiencia,
  deleteExperiencia,
};