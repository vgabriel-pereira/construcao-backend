import express, { json } from "express";
import { format } from "date-fns";

const app = express();
const router = express.Router();

const tarefas = [
  { id: 1, nome: "Estudar middleware", concluida: false },
  { id: 2, nome: "Praticar Express", concluida: true },
];
app.use(express.json());

app.use((req, res, next) => {
  const datahora = format(new Date(), "MM-dd-yyy HH:mm:ss");
  const metodo = req.method;
  const url = req.url;

  console.log(`[${datahora}] [${metodo}] [${url}]`);
  next();
});

router.get("/tarefas", (req, res) => {
  res.status(200).json(tarefas);
});

router.post("/tarefas", (req, res) => {
  const novaTarefa = req.body;
  tarefas.push(novaTarefa);
  res.status(201).json(tarefas);
});

router.get("/tarefas/:id", (req, res) => {
  const id = Number(req.params.id);
  const tarefa = tarefas.find((t) => t.id === id);
  if (!tarefa) return res.status(404).send("Tarefa Não encontrada");
  res.status(200).send(tarefa);
});

router.put("/tarefas/:id", (req, res) => {
  const id = Number(req.params.id);
  const atualizar = req.body;
  const tarefa = tarefas.find((t) => t.id === id);
  if (!tarefa) return res.status(404).send("Tarefa Não encontrada");
  if (atualizar.nome !== undefined) tarefa.nome = atualizar.nome;
  if (atualizar.concluida !== undefined) tarefa.concluida = atualizar.concluida;
  res.status(200).send(tarefa);
});

router.delete('/tarefas/:id', (req,res)=>{
    const id = Number(req.params.id);
    const tarefa = tarefas.find((t) => t.id === id);
    const index = tarefas.findIndex((t) => t.id === id);
    if (!tarefa) return res.status(404).send("Tarefa Não encontrada");
    tarefas.splice(index, 1)
    res.status(204).end()

})

app.use("/", router);

app.listen(3000, () => console.log("Server On!"));

export default app;
