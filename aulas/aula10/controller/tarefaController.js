const mongoose = require('mongoose')
const { options } = require("../app");
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
    if(err.errors) return res.status(422).json({msg: err.errors['nome'].message})
    return res.status(500).json({ msg: "Deu ruim!!" + err.message });
  }
}

async function buscar(req, res, next) {
  try {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(400).json({msg: "ID Invalido"})

    const tarefaEncontrada = await tarefa.findOne({ _id: id });

    if (!tarefaEncontrada)
      return res.status(404).json({ msg: "Tarefa não encontrada" });
    req.tarefa = tarefaEncontrada;
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
      { ...req.body },
      {new: true}
    );
    return res.status(200).json(tarefaAtualizada);
  } catch (err) {
    res.status(500).json({ msg: "Deu ruim!!" + err.message });
  }
}

async function remover(req, res) {
  try {
    const { id } = req.params;
    const tarefaDeletada = await tarefa.findOneAndDelete({ _id: id });
    return res.status(204).end();
  } catch (err) {
    res.status(500).json({ msg: "Deu ruim!!" + err.message });
  }
}

async function exibir(req, res) {
  try {
    return res.status(200).json(req.tarefa);
  } catch (err) {
    res.status(500).json({ msg: "Deu ruim!!" + err.message });
  }
}

module.exports = { exibir, remover, atualizar, buscar, criar, listar };
