const { pool } = require("../db");


async function listarPessoas() {
  const result = await pool.query("SELECT * FROM pessoa");
  return result.rows;
}


async function buscarPessoa(id) {
  const result = await pool.query(
    "SELECT * FROM pessoa WHERE id = $1",
    [id]
  );

  return result.rows[0];
}

async function criarPessoa({ nome, email, telefone }) {
  const result = await pool.query(
    `
    INSERT INTO pessoa (nome, email, telefone)
    VALUES ($1, $2, $3)
    RETURNING *
    `,
    [nome, email, telefone]
  );

  return result.rows[0];
}


async function atualizarPessoa(id, dados) {
  const { nome, email, telefone } = dados;

  const result = await pool.query(
    `
    UPDATE pessoa
    SET nome=$1, email=$2, telefone=$3
    WHERE id=$4
    RETURNING *
    `,
    [nome, email, telefone, id]
  );

  return result.rows[0];
}


async function deletarPessoa(id) {
  await pool.query("DELETE FROM pessoa WHERE id=$1", [id]);
}

module.exports = {
  listarPessoas,
  buscarPessoa,
  criarPessoa,
  atualizarPessoa,
  deletarPessoa,
};