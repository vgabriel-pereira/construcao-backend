const Tarefa = require('./modelo.js')

async function adicionarTarefa(nome){
    const tarefa = new Tarefa(nome, false)
    await tarefa.init();
    return tarefa.inserir()
}

async function buscarTarefa(nome){
    const tarefa = new Tarefa(nome)
    await tarefa.init();
    return tarefa.buscar()
}

async function atualizarTarefa(nome, concluida){
    const tarefa = new Tarefa(nome, concluida)
    await tarefa.init();
    return tarefa.alterar()
}

async function removerTarefa(nome){
    const tarefa = new Tarefa(nome)
    await tarefa.init();
    return tarefa.deletar()
}

module.exports = {removerTarefa, atualizarTarefa, buscarTarefa, adicionarTarefa}