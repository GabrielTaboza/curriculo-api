const { pool } = require("../db");

async function listarPorPessoa(pessoaId) {
  const result = await pool.query(
    "SELECT * FROM experiencia WHERE pessoa_id=$1",
    [pessoaId]
  );
  return result.rows;
}

async function criar(pessoaId, dados) {
  const { empresa, cargo, descricao } = dados;

  const result = await pool.query(
    "INSERT INTO experiencia (pessoa_id, empresa, cargo, descricao) VALUES ($1,$2,$3,$4) RETURNING *",
    [pessoaId, empresa, cargo, descricao]
  );

  return result.rows[0];
}

module.exports = {
  listarPorPessoa,
  criar,
};