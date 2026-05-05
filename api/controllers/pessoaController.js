const service = require("../services/pessoaService");


async function getPessoas(req, res) {
  try {
    const pessoas = await service.listarPessoas();
    res.json(pessoas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}


async function postPessoa(req, res) {
  try {
    const { nome } = req.body;

    if (!nome) {
      return res.status(400).json({ error: "Nome é obrigatório" });
    }

    const nova = await service.criarPessoa(req.body);
    res.json(nova);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  getPessoas,
  postPessoa,
};

async function getPessoaById(req, res) {
  try {
    const pessoa = await service.buscarPessoaPorId(req.params.id);

    if (!pessoa) {
      return res.status(404).json({ error: "Pessoa não encontrada" });
    }

    res.json(pessoa);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}


async function putPessoa(req, res) {
  try {
    const pessoa = await service.atualizarPessoa(req.params.id, req.body);

    if (!pessoa) {
      return res.status(404).json({ error: "Pessoa não encontrada" });
    }

    res.json(pessoa);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function deletePessoa(req, res) {
  try {
    await service.deletarPessoa(req.params.id);
    res.json({ message: "Pessoa deletada com sucesso" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  getPessoas,
  postPessoa,
  getPessoaById,
  putPessoa,
  deletePessoa,
};