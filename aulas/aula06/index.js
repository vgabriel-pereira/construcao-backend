// importa o fremawork
const express = require("express");

//cria uma instacia da aplicação
const app = express();

//middleware de aplicação
app.use((req, res, next) => {
  console.log("Passei aqui");
  next();
});

// middleware de route
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

app.use("/teste", router);

// midlleware de erro
app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).send("Deu ruim!");
});

// inicia a aplicação
app.listen(3000, () => {
  console.log("App está ON!");
});
