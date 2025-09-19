const tarefas = [];

// Function Para listar as Tarefas
const listartarefas = (req, res) => {
  res.send(tarefas);
};


// Function Para Criar nova tarefa
const criarTarefas = (req, res) => {
  const novaTarefa = { ...req.body, id: tarefas.length + 1 };
  tarefas.push(novaTarefa);
  res.status(201).json(novaTarefa);
};


// Function Para Listar Tarefa por ID 
const listarTarefaId = (req, res) => {
  const { id } = req.params;
  const tarefaEncontrada = tarefas.find((item) => item.id === parseInt(id));
  if (tarefaEncontrada) return res.status(200).json(tarefaEncontrada);
  res.status(404).json({ msg: "Tarefa não encontrada" });
};


// Function Para Editar Tarefa
const editarTarefa = (req, res) => {
  const { id } = req.params;
  const tarefaEncontrada = tarefas.find((item) => item.id === parseInt(id));
  if (!tarefaEncontrada)
    return res.status(404).json({ msg: "Tarefa não encontrada" });
  tarefaEncontrada.nome = req.body.nome;
  tarefaEncontrada.concluida = req.body.concluida;
  res.status(200).json(tarefaEncontrada);
};


// Function Para Deletar Tarefa
const deletarTarefa = (req, res) => {
  const { id } = req.params;
  const tarefaEncontrada = tarefas.find((item) => item.id === parseInt(id));
  if (!tarefaEncontrada)
    return res.status(404).json({ msg: "Tarefa não encontrada" });
  let index = tarefas.indexOf(tarefaEncontrada);
  tarefas.splice(index, 1);
  res.status(204).end();
};

module.exports = { listartarefas, criarTarefas, listarTarefaId, editarTarefa, deletarTarefa };
