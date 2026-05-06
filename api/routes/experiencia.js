const express = require("express");
const router = express.Router();
const controller = require("../controllers/experienciaController");

router.post("/pessoas/:id/experiencias", controller.postExperiencia);
router.get("/pessoas/:id/experiencias", controller.getExperiencias);
router.put("/experiencias/:id", controller.putExperiencia);
router.delete("/experiencias/:id", controller.deleteExperiencia);

module.exports = router;