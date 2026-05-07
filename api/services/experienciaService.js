const { pool } = require("../db");

async function listarExperiencias() {
  const result = await pool.query(`
    SELECT 
      experiencia.*,
      pessoa.nome AS pessoa_nome
    FROM experiencia
    JOIN pessoa ON pessoa.id = experiencia.pessoa_id
  `);

  return result.rows;
}


async function buscarExperiencia(id) {
  const result = await pool.query(
    "SELECT * FROM experiencia WHERE id = $1",
    [id]
  );

  return result.rows[0];
}


async function criarExperiencia(dados) {

  const {
    cargo,
    empresa,
    descricao,
    pessoa_id,
  } = dados;

  const result = await pool.query(
    `
    INSERT INTO experiencia
    (cargo, empresa, descricao, pessoa_id)
    VALUES ($1, $2, $3, $4)
    RETURNING *
    `,
    [cargo, empresa, descricao, pessoa_id]
  );

  return result.rows[0];
}

async function atualizarExperiencia(id, dados) {
  const { cargo, empresa, descricao } = dados;

  const result = await pool.query(
    `
    UPDATE experiencia
    SET cargo=$1,
        empresa=$2,
        descricao=$3
    WHERE id=$4
    RETURNING *
    `,
    [cargo, empresa, descricao, id]
  );

  return result.rows[0];
}


async function deletarExperiencia(id) {
  await pool.query(
    "DELETE FROM experiencia WHERE id=$1",
    [id]
  );
}

module.exports = {
  listarExperiencias,
  buscarExperiencia,
  criarExperiencia,
  atualizarExperiencia,
  deletarExperiencia,
};