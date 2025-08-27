import { soma, divisao } from "./index.js";
//Soma
if (soma(1, 0) == 1) console.log("Passou! 1º");
else console.log("Se Fudeu 1º");
if (soma(1, 1) == 2) console.log("Passou! 2º");
else console.log("Se Fudeu 2º");
if (soma(-1, 1) == 0) console.log("Passou! 3º");
else console.log("Se Fudeu 3º");
//Divisão
if (divisao(1, 1) == 1) console.log("Passou! 4º");
else console.log("Se Fudeu 4º");
if (divisao(6, 3) == 2) console.log("Passou! 5º");
else console.log("Se Fudeu 5º");
if (divisao(1, 0) == undefined) console.log("Passou! 6º");
else console.log("Se Fudeu 6º");
