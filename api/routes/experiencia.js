const express = require("express");

const router = express.Router();

const controller = require(
  "../controllers/experienciaController"
);

router.get("/", controller.getExperiencias);

router.get("/:id", controller.getExperiencia);

router.post("/", controller.postExperiencia);

router.put("/:id", controller.putExperiencia);

router.delete("/:id", controller.deleteExperiencia);

module.exports = router;