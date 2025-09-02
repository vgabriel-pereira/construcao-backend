function calcularMediaAluno(a1, a2, a3) {
  if (a1 == undefined || a2 == undefined)
    throw Error("Notas a1 ou a2 não informadas");
  if (a3 <= -1) throw Error("Notas a3 não pode ser negativo");
  if (a1 <= -1 || a2 <= -1)
    throw Error("Notas a1 ou a2 não podem ser negativas");
  if (a3 == undefined) return (a1 * 0.4 + a2 * 0.6) / 2;
  return Math.max((a1 * 0.4 + a3 * 0.6) / 2, (a2 * 0.6 + a3 * 0.4) / 2);
}
module.exports = { calcularMediaAluno };
