const service = require("../services/pessoaService");


async function getPessoas(req, res) {
  try {
    const pessoas = await service.listarPessoas();
    res.json(pessoas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}


async function getPessoa(req, res) {
  try {
    const pessoa = await service.buscarPessoa(req.params.id);

    if (!pessoa) {
      return res.status(404).json({
        error: "Pessoa não encontrada",
      });
    }

    res.json(pessoa);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}


async function postPessoa(req, res) {
  try {
    const pessoa = await service.criarPessoa(req.body);
    res.status(201).json(pessoa);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}


async function putPessoa(req, res) {
  try {
    const pessoa = await service.atualizarPessoa(
      req.params.id,
      req.body
    );

    res.json(pessoa);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}


async function deletePessoa(req, res) {
  try {
    await service.deletarPessoa(req.params.id);

    res.json({
      message: "Pessoa deletada com sucesso",
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  getPessoas,
  getPessoa,
  postPessoa,
  putPessoa,
  deletePessoa,
};