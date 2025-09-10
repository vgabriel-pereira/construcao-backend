
const router = require('./routerTarefas.js')
// importa o fremawork
const express = require("express");

//importar middleware de terceiros
const cors = require("cors");

//cria uma instacia da aplicação
const app = express();

//middleware de aplicação
app.use((req, res, next) => {
  console.log("Passei aqui");
  next();
});
//middleware embutido ou integrado
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//middleware de terceiros
app.use(cors());

// middleware de route

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
