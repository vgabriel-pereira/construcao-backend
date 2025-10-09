const readline = require('readline-sync');
const controlador = require('./controlador');

function menu() {
  console.log("\n==== MENU ====");
  console.log("1 - Adicionar tarefa");
  console.log("2 - Buscar tarefa");
  console.log("3 - Atualizar tarefa");
  console.log("4 - Remover tarefa");
  console.log("5 - Sair");
}

async function escolherOpcao(opcao) {
  switch (opcao) {
    case "1":
      const nomeAdd = readline.question("Digite o nome da tarefa: ");
      await controlador.adicionarTarefa(nomeAdd);
      break;

    case "2":
      const nomeBusca = readline.question("Digite o nome da tarefa: ");
      const tarefa = await controlador.buscarTarefa(nomeBusca);
      if (tarefa) {
        console.log(`Nome: ${tarefa.nome}`);
        console.log(`Concluída: ${tarefa.concluida}`);
        console.log(`ID: ${tarefa._id}`);
      } else {
        console.log("Tarefa não encontrada.");
      }
      break;

    case "3":
      const nomeAtualiza = readline.question("Digite o nome da tarefa: ");
      const concluidaInput = readline.question("Está concluída? (true/false): ");
      const concluida = concluidaInput.toLowerCase() === 'true';
      await controlador.atualizarTarefa(nomeAtualiza, concluida);
      break;

    case "4":
      const nomeRemove = readline.question("Digite o nome da tarefa: ");
      await controlador.removerTarefa(nomeRemove);
      break;

    case "5":
      console.log("Saindo...");
      process.exit();

    default:
      console.log("Opção inválida.");
  }
}

async function main() {
  while (true) {
    menu();
    const opcao = readline.question("Escolha uma opção: ");
    await escolherOpcao(opcao);
  }
}

main();
