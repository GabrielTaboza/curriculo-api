const service = require("../services/experienciaService");


async function getExperiencias(req, res) {
  try {
    const experiencias =
      await service.listarExperiencias();

    res.json(experiencias);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
}


async function getExperiencia(req, res) {
  try {
    const experiencia =
      await service.buscarExperiencia(req.params.id);

    res.json(experiencia);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
}


async function postExperiencia(req, res) {
  try {

    const experiencia =
      await service.criarExperiencia(req.body);

    res.status(201).json(experiencia);

  } catch (error) {

    res.status(500).json({
      error: error.message,
    });

  }
}


async function putExperiencia(req, res) {
  try {
    const experiencia =
      await service.atualizarExperiencia(
        req.params.id,
        req.body
      );

    res.json(experiencia);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
}


async function deleteExperiencia(req, res) {
  try {
    await service.deletarExperiencia(req.params.id);

    res.json({
      message: "Experiência deletada",
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
}

module.exports = {
  getExperiencias,
  getExperiencia,
  postExperiencia,
  putExperiencia,
  deleteExperiencia,
};