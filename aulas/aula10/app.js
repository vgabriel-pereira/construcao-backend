require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const mongoose = require("mongoose");

const tarefaRouter = require('./routes/taerfaRouter')

const url = `mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PSWD}@${process.env.DATABASE_HOST}/`;

mongoose
  .connect(url)
  .then(() => console.log("Conectado ao DB"))
  .catch((err) => {
    console.log("Erro ao conectar", err.message);
  });

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/tarefas', tarefaRouter)

module.exports = app;
