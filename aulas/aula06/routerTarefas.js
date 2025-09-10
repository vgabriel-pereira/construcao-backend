const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Chegou aqui");
});

router.post("/", (req, res) => {
  res.status(201).send("inserido com sucesso");
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  if (id == 1) return res.send("Achei");
  throw Error("Não achei");
});

router.put("/:id",(req, res) => {
    const { id } = req.params;
    if(id == 1) return req.send("Tarefa alterada");
    else req.status(404).send("Tarefa não encontrada");
})

router.delete("/:id", (res,req) => {
    const { id } = req.params;
    if ( id == 1) req.status(204).end();
    else req.status(404).send("Tarefa não encontrada");
})


module.exports = router;
