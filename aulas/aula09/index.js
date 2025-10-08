const readline = require("readline-sync");
const connect = require("./database");

async function inserir(nomeTarefa, concluidaTarefa) {
  const db = await connect();
  const collection = await db.collection("tarefas");

  const resultado = await collection.insertOne({
    nome: nomeTarefa,
    concluida: concluidaTarefa,
  });

  console.log(resultado);
}

async function buscar(nomeTarefa) {
  const db = await connect();
  const collection = await db.collection("tarefas");
  const resultado = await collection.findOne({ nome: nomeTarefa });

  console.log(resultado);
}

async function atualizar(nomeTarefa, concluidaAlterado, nomeAlterado) {
  const db = await connect();
  const collection = await db.collection("tarefas");
  const resultado = await collection.updateOne(
    { nome: nomeTarefa },
    { $set: { nome: nomeAlterado, concluida: concluidaAlterado } }
  );

  console.log(resultado);
}
async function remove(nomeTarefa) {
  const db = await connect();
  const collection = await db.collection("tarefas");
  const resultado = await collection.deleteOne({ nome: nomeTarefa });

  console.log(resultado);
}
async function main() {
  while (true) {
    console.log("Menu Principal");
    console.log("1 - criar tarefas");
    console.log("2 - Buscar Taerfas");
    console.log("3 - Alterar tarefas");
    console.log("4 - Remover taerfas");
    console.log("5 - Sair");

    const opcao = readline.question("Entre Sua opcao: ");

    switch (parseInt(opcao)) {
      case 1: {
        let nome = readline.question("Informe nome da tarefa: ");
        let status = readline.question("informe o status: ");
        await inserir(nome, status);
        break;
      }
      case 2: {
        let nome = readline.question("Informe nome da tarefa: ");
        await buscar(nome);
        break;
      }
      case 3: {
        let nome = readline.question("Informe nome da tarefa: ");
        let novoNome = readline.question("Novo nome da tarefa: ");
        let novoConcluida = readline.question("Novo status da tarefa: ");
        await atualizar(nome, novoConcluida, novoNome);
        break;
      }
      case 4: {
        let nome = readline.question("Informe nome da tarefa: ");
        await remove(nome);
        break;
      }

      case 5:
        process.exit(0);
    }
  }
}

main();
