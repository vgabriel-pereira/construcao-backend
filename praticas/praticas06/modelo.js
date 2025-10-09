const conectarDb = require("./database");

class Tarefa {
  constructor(nome, concluida) {
    this.nome = nome;
    this.concluida = concluida;
    this.db = null;
    this.collection = null;
    this.id = null;
  }
  async init() {
    this.db = await conectarDb();
    this.collection = this.db.collection("tarefa");
  }

  async inserir(nome, concluida) {
    if (!this.collection) await this.init();
    const resultado = await this.collection.insertOne({
      nome: this.nome,
      concluida: this.concluida,
    });
    this.id = resultado.insertedId;
    return resultado
  }

  async alterar(nome, concluida) {
    if (!this.collection) await this.init();
    const resultado = await this.collection.updateOne(
      { nome: this.nome },
      { $set: { nome: this.nome, concluida: this.concluida } }
    );
    return resultado
  }

  async deletar(nome) {
    if (!this.collection) await this.init();
    const resultado = await this.collection.deleteOne({ nome: this.nome });
    return resultado
  }

  async buscar(nome) {
    if (!this.collection) await this.init();
    const resultado = await this.collection.findOne({ nome: this.nome });
    console.log(resultado);
    return resultado
  }
}

module.exports = Tarefa;
