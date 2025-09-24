const model = require("../models/tarefasModels");

const buscartarefas = (req, res, next) => {
  const { id } = req.params;
  const tarefaEncontrada = model.listarTarefas(id);
  if (tarefaEncontrada) return next();
  res.status(404).json({ msg: "Tarefa não encontrada" });
};

module.exports = buscartarefas