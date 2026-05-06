const express = require("express");
const router = express.Router();
const controller = require("../controllers/pessoaController");

router.get("/", controller.getPessoas);
router.get("/:id", controller.getPessoaById);
router.post("/", controller.postPessoa);
router.put("/:id", controller.putPessoa);
router.delete("/:id", controller.deletePessoa);

module.exports = router;