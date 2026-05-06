const service = require("../services/pessoaService");

async function getPessoas(req, res) {
  const data = await service.listarPessoas();
  res.json(data);
}

async function getPessoaById(req, res) {
  const pessoa = await service.buscarPessoaPorId(req.params.id);
  if (!pessoa) return res.status(404).json({ error: "Não encontrada" });
  res.json(pessoa);
}

async function postPessoa(req, res) {
  if (!req.body.nome)
    return res.status(400).json({ error: "Nome obrigatório" });

  const nova = await service.criarPessoa(req.body);
  res.json(nova);
}

async function putPessoa(req, res) {
  const atualizada = await service.atualizarPessoa(
    req.params.id,
    req.body
  );

  if (!atualizada)
    return res.status(404).json({ error: "Não encontrada" });

  res.json(atualizada);
}

async function deletePessoa(req, res) {
  await service.deletarPessoa(req.params.id);
  res.json({ message: "Deletado com sucesso" });
}

module.exports = {
  getPessoas,
  getPessoaById,
  postPessoa,
  putPessoa,
  deletePessoa,
};