const pool = require("../../db");

async function criarExperiencia(pessoaId, dados) {
  const result = await pool.query(
    `INSERT INTO experiencia (pessoa_id, empresa, cargo, descricao, data_inicio, data_fim)
     VALUES ($1, $2, $3, $4, $5, $6)
     RETURNING *`,
    [
      pessoaId,
      dados.empresa,
      dados.cargo,
      dados.descricao,
      dados.data_inicio,
      dados.data_fim,
    ]
  );
  return result.rows[0];
}

async function listarExperiencias(pessoaId) {
  const result = await pool.query(
    "SELECT * FROM experiencia WHERE pessoa_id = $1",
    [pessoaId]
  );
  return result.rows;
}

async function atualizarExperiencia(id, dados) {
  const result = await pool.query(
    `UPDATE experiencia
     SET empresa=$1, cargo=$2, descricao=$3, data_inicio=$4, data_fim=$5
     WHERE id=$6
     RETURNING *`,
    [
      dados.empresa,
      dados.cargo,
      dados.descricao,
      dados.data_inicio,
      dados.data_fim,
      id,
    ]
  );
  return result.rows[0];
}

async function deletarExperiencia(id) {
  await pool.query("DELETE FROM experiencia WHERE id=$1", [id]);
}

module.exports = {
  criarExperiencia,
  listarExperiencias,
  atualizarExperiencia,
  deletarExperiencia,
};