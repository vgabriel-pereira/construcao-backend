const tarefas = [];

const listar = () => {
  return tarefas;
};

const criar = (dados) => {
  const novaTarefa = { ...dados, id: tarefas.length + 1 };
  tarefas.push(novaTarefa);
  return novaTarefa;
};

const listarTarefas = (id) => {
  const tarefaEncontrada = tarefas.find((item) => item.id === parseInt(id));
  return tarefaEncontrada;
};

const editar = (id, dados) => {
  const tarefaEncontrada = tarefas.find((item) => item.id === parseInt(id));
  if (!tarefaEncontrada) return null;
  tarefaEncontrada.nome = dados.nome;
  tarefaEncontrada.concluida = dados.concluida;
  return tarefaEncontrada;
};

const deletar = (id) => {
  const tarefaEncontrada = tarefas.find((item) => item.id === parseInt(id));
  if (!tarefaEncontrada) return null;
  let index = tarefas.indexOf(tarefaEncontrada);
  tarefas.splice(index, 1);
  return tarefaEncontrada
};
module.exports = { listar, criar, listarTarefas, editar, deletar };
