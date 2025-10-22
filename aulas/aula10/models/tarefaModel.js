const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  nome:{
    type: String,
    required: true,
    trim: true
  },
  concluida: Boolean
});

module.exports = new mongoose.model('Tarefa', schema)
