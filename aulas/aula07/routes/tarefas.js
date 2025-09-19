const express = require("express");
const router = express.Router();
const tarefaController = require('../controllers/tarefas.controller')


router.get("/", tarefaController.listartarefas);

router.post("/", tarefaController.criarTarefas);

router.get("/:id", tarefaController.listarTarefaId);

router.put("/:id", tarefaController.editarTarefa );

router.delete("/:id", tarefaController.deletarTarefa);

module.exports = router;
