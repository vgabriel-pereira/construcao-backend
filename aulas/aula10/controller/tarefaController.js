const tarefa = require("../models/tarefaModel");

async function listar(req, res) {
  try {
    const tarefas = await tarefa.find({});
    return res.status(200).json(tarefas);
  } catch (err) {
    res.status(500).json({ msg: "Deu ruim!!" + err.message });
  }
}

async function criar(req, res) {
  try {
    const { nome } = req.body;
    const novaTarefa = await tarefa.create({ nome, concluida: false });
    return res.status(201).json(novaTarefa);
  } catch (err) {
    res.status(500).json({ msg: "Deu ruim!!" + err.message });
  }
}

async function buscar(req, res, next) {
  try {
    const { id } = req.params;
    const tarefaEncontrada = await tarefa.findOne({ _id: id });
    next();
  } catch (err) {
    res.status(500).json({ msg: "Deu ruim!!" + err.message });
  }
}

async function atualizar(req, res) {
  try {
    const { id } = req.params;
    const tarefaAtualizada = await tarefa.findOneAndUpdate(
      { _id: id },
      { ...req.body }
    );
    return res.status(200).json(tarefaAtualizada);
  } catch (err) {
    res.status(500).json({ msg: "Deu ruim!!" + err.message });
  }
}

async function remover(req, res) {
  try {
    const { id } = req.params;
    const tarefaDeletada = await tarefa.findOneAndDelete(
      { _id: id },
      { ...req.body }
    );
    return res.status(204).end();
  } catch (err) {
    res.status(500).json({ msg: "Deu ruim!!" + err.message });
  }
}

async function exibir(req, res) {
  try {
    const {id} = req.params
    const tarefaExibir = await tarefa.findOne({_id:id})
    return res.status(200).json(tarefaExibir);
  } catch (err) {
    res.status(500).json({ msg: "Deu ruim!!" + err.message });
  }
}

module.exports = { exibir, remover, atualizar, buscar, criar, listar };
