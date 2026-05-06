const express = require("express");
const router = express.Router();
const controller = require("../controllers/experienciaController");

router.get("/:id/experiencias", controller.getExperiencias);
router.post("/:id/experiencias", controller.postExperiencia);

module.exports = router;