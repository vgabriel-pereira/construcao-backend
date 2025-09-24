const model = require("../models/tarefasModels");

const listartarefas = (req, res) => {
  res.send(model.listar());
};

const criarTarefas = (req, res) => {
  const novaTarefa = model.criar(req.body);
  res.status(201).json(novaTarefa);
};

const listarTarefaId = (req, res) => {
  const { id } = req.params;
  const tarefaEncontrada = model.listarTarefas(id);
  res.status(200).json(tarefaEncontrada);
};

const editarTarefa = (req, res) => {
  const { id } = req.params;
  const tarefaEncontrada = model.editar(id, req.body)
  res.status(200).json(tarefaEncontrada);
};

const deletarTarefa = (req, res) => {
  const { id } = req.params;
  const tarefaEncontrada = model.deletar(id)
  res.status(204).end();
};

module.exports = {
  listartarefas,
  criarTarefas,
  listarTarefaId,
  editarTarefa,
  deletarTarefa,
};
