const express = require("express");
const router = express.Router();
const tarefaController = require('../controllers/tarefasController')
const middleware = require('../middleware/tarefasMiddleware')

router.get("/", tarefaController.listartarefas);

router.post("/", tarefaController.criarTarefas);

router.get("/:id", middleware, tarefaController.listarTarefaId);

router.put("/:id", middleware, tarefaController.editarTarefa );

router.delete("/:id", middleware, tarefaController.deletarTarefa);

module.exports = router;
